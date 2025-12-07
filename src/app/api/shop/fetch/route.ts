
import { NextResponse } from "next/server";
import { XMLParser } from "fast-xml-parser";
import { ShopFetchRequest, ShopFetchResponse, ShopProduct } from "@/types/shop";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { url, platform } = body as ShopFetchRequest;

        if (!url || !platform) {
            return NextResponse.json({ error: "Missing url or platform" }, { status: 400 });
        }

        let products: ShopProduct[] = [];
        let shopTitle = "";

        if (platform === 'etsy') {
            products = await fetchEtsyProducts(url);
        } else if (platform === 'shopify') {
            products = await fetchShopifyProducts(url);
        } else {
            return NextResponse.json({ error: "Invalid platform" }, { status: 400 });
        }

        return NextResponse.json({ products, shopTitle } as ShopFetchResponse);

    } catch (error) {
        console.error("Error fetching shop products:", error);
        return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
    }
}

async function fetchEtsyProducts(inputUrl: string): Promise<ShopProduct[]> {
    // Extract shop name from URL
    // Expected format: https://www.etsy.com/shop/ShopName
    // or https://www.etsy.com/in-en/shop/ShopName

    let shopName = "";
    try {
        const u = new URL(inputUrl);
        const pathParts = u.pathname.split('/');
        const shopIndex = pathParts.indexOf('shop');
        if (shopIndex !== -1 && shopIndex + 1 < pathParts.length) {
            shopName = pathParts[shopIndex + 1];
            // Remove query params if they got stuck (though split should handle it if passed clean path, but URL obj handles query)
        }
    } catch (e) {
        console.error("Invalid URL parsing", e);
    }

    if (!shopName) {
        throw new Error("Could not extract shop name from URL");
    }

    const rssUrl = `https://www.etsy.com/shop/${shopName}/rss`;
    const response = await fetch(rssUrl);
    if (!response.ok) {
        throw new Error(`Failed to fetch Etsy RSS: ${response.statusText}`);
    }

    const xmlText = await response.text();
    const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: "@_"
    });
    const result = parser.parse(xmlText);

    const items = result?.rss?.channel?.item;

    if (!items || !Array.isArray(items)) {
        if (items) {
            // Single item case
            return [parseEtsyItem(items)];
        }
        return [];
    }

    return items.map((item: any) => parseEtsyItem(item));
}

function parseEtsyItem(item: any): ShopProduct {
    // Description in Etsy RSS often contains HTML with the image. 
    // We need to parse that if we want the image, or check if specific media tags exist.
    // The example provided shows <description><p class="image"><img src="..." ... /></p> ... </description>

    const descriptionHtml = item.description || "";
    let image = "";
    let cleanDescription = "";
    let price = "";

    // Regex to extract image src
    const imgMatch = descriptionHtml.match(/<img[^>]+src="([^">]+)"/);
    if (imgMatch && imgMatch[1]) {
        image = imgMatch[1];
    }

    // Regex to extract price if present in <p class="price">
    const priceMatch = descriptionHtml.match(/<p class="price">([^<]+)<\/p>/);
    if (priceMatch && priceMatch[1]) {
        price = priceMatch[1];
    }

    // Clean description: remove HTML tags
    cleanDescription = descriptionHtml.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();

    // The guid or link is the product URL
    const url = item.link || item.guid;

    return {
        title: item.title,
        description: cleanDescription,
        image: image,
        price,
        url,
        id: item.guid // Use guid as ID
    };
}


async function fetchShopifyProducts(inputUrl: string): Promise<ShopProduct[]> {
    // Input URL should be the shop base URL, e.g. https://viafido.com
    // We append /products.json

    let baseUrl = inputUrl;
    if (baseUrl.endsWith('/')) {
        baseUrl = baseUrl.slice(0, -1);
    }

    const jsonUrl = `${baseUrl}/products.json`;
    const response = await fetch(jsonUrl);
    if (!response.ok) {
        throw new Error(`Failed to fetch Shopify JSON: ${response.statusText}`);
    }

    const data = await response.json();
    const products = data.products;

    if (!products || !Array.isArray(products)) {
        return [];
    }

    return products.map((p: any) => {
        // Find first available variant price
        const price = p.variants?.[0]?.price || "";

        // Image
        const image = p.images?.[0]?.src || "";

        // URL construction - typically {baseUrl}/products/{handle}
        const productUrl = `${baseUrl}/products/${p.handle}`;

        // Strip HTML from body_html
        const cleanDescription = (p.body_html || "").replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();

        return {
            title: p.title,
            description: cleanDescription,
            image,
            price,
            url: productUrl,
            id: String(p.id)
        };
    });
}
