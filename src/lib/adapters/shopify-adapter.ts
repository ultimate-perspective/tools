import { ShopAdapter } from "./shop-adapter";
import { Product, ProductImage, ProductVariant } from "@/types/shop";

export class ShopifyAdapter implements ShopAdapter {
    async fetchProducts(url: string): Promise<Product[]> {
        if (this.isProductUrl(url)) {
            return this.fetchProductFromHtml(url);
        } else {
            return this.fetchFromProductsJson(url);
        }
    }

    private isProductUrl(url: string): boolean {
        try {
            const u = new URL(url);
            return u.pathname.includes('/products/');
        } catch {
            return false;
        }
    }

    private async fetchFromProductsJson(baseUrl: string): Promise<Product[]> {
        let cleanUrl = baseUrl;
        if (cleanUrl.endsWith('/')) {
            cleanUrl = cleanUrl.slice(0, -1);
        }

        // Ensure valid base URL if user passed just a domain or weird path
        // If it already has products.json, strip it
        cleanUrl = cleanUrl.replace(/\/products\.json$/, '');

        const jsonUrl = `${cleanUrl}/products.json`;

        try {
            const response = await fetch(jsonUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch Shopify JSON: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            const products = data.products || [];

            return products.map((p: any) => this.mapJsonProductToProduct(p, cleanUrl));
        } catch (error) {
            console.error("Error fetching Shopify products.json:", error);
            return []; // Return empty or throw? original threw.
        }
    }

    private mapJsonProductToProduct(p: any, baseUrl: string): Product {
        // Helper to strip HTML
        const cleanDescription = (p.body_html || "").replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();

        const price = p.variants?.[0]?.price || "0.00";
        const image = p.images?.[0]?.src || "";
        const productUrl = `${baseUrl}/products/${p.handle}`;

        const images: ProductImage[] = (p.images || []).map((img: any) => ({
            url: img.src,
            width: img.width,
            height: img.height,
            altText: img.alt
        }));

        const variants: ProductVariant[] = (p.variants || []).map((v: any) => ({
            id: String(v.id),
            title: v.title,
            price: v.price,
            sku: v.sku,
            image: undefined // Often variants map to images via image_id, not trivial in simple mapping
        }));

        return {
            id: String(p.id),
            title: p.title,
            description: cleanDescription,
            price,
            image,
            images,
            url: productUrl,
            variants
        };
    }

    private async fetchProductFromHtml(url: string): Promise<Product[]> {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch product page: ${response.status}`);
            }

            const html = await response.text();

            // Extract JSON-LD
            // Search for <script type="application/ld+json">
            // There might be multiple. We look for @type: Product
            const jsonLdRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
            let match;

            while ((match = jsonLdRegex.exec(html)) !== null) {
                const content = match[1];
                try {
                    const json = JSON.parse(content);
                    if (json['@type'] === 'Product' || (Array.isArray(json) && json.some((j: any) => j['@type'] === 'Product'))) {
                        // Found it. 
                        // Note: Sometimes it's a graph or array.
                        const productData = Array.isArray(json) ? json.find((j: any) => j['@type'] === 'Product') : json;
                        if (productData) {
                            return [this.mapJsonLdToProduct(productData, url)];
                        }
                    }
                } catch (e) {
                    // Ignore parse errors for irrelevant blocks
                }
            }

            throw new Error("No JSON-LD Product data found");

        } catch (error) {
            console.error("Error fetching Shopify HTML:", error);
            throw error;
        }
    }

    private mapJsonLdToProduct(ld: any, url: string): Product {
        // Price: offers might be a single object or array
        let price = "0.00";
        let currency = "USD";

        if (ld.offers) {
            const offers = Array.isArray(ld.offers) ? ld.offers : [ld.offers];
            const firstOffer = offers[0];
            if (firstOffer) {
                price = firstOffer.price;
                currency = firstOffer.priceCurrency;
            }
        }

        // Images: ld.image can be string or array of strings (or objects)
        let images: ProductImage[] = [];
        if (ld.image) {
            const imgs = Array.isArray(ld.image) ? ld.image : [ld.image];
            images = imgs.map((img: any) => {
                const src = typeof img === 'string' ? img : img.url || img.contentUrl || "";
                return { url: src }; // JSON-LD often lacks detail dimensions in simple view
            }).filter((i: ProductImage) => !!i.url);
        }

        const mainImage = images.length > 0 ? images[0].url : "";

        // Variants: JSON-LD usually puts variants in 'offers' or 'hasVariant'??
        // The user example shows 'offers' with separate SKUs/prices.
        // Let's try to map offers to variants if they seem distinct
        let variants: ProductVariant[] = [];
        if (ld.offers && Array.isArray(ld.offers)) {
            variants = ld.offers.map((offer: any) => ({
                id: offer.sku || offer.url, // Use SKU or URL as ID fallback
                title: offer.name || "Variant", // JSON-LD offers might miss names
                price: offer.price,
                sku: offer.sku,
                image: offer.image
            }));
        }

        return {
            id: ld.sku || ld.mpn || ld['@id'] || "unknown", // fallback
            title: ld.name,
            description: ld.description,
            price,
            currencyCode: currency,
            image: mainImage,
            images,
            url: ld.url || url, // Use current URL if ld.url missing
            variants
        };
    }
}
