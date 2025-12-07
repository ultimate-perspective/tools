import { ShopProduct, ShopFetchResponse } from "@/types/shop";

/**
 * Mock service to get product preview from a shop URL.
 * Simulates a network request.
 * 
 * @param url The product URL
 * @param platform The platform (etsy or shopify)
 * @returns A promise that resolves to a ProductPreview
 */

/**
 * Fetch products from a shop URL (Etsy RSS or Shopify JSON) via backend API.
 * 
 * @param url The shop URL
 * @param platform The platform (etsy or shopify)
 * @returns A promise that resolves to a list of ShopProduct
 */
export async function fetchShopProducts(url: string, platform: 'etsy' | 'shopify'): Promise<ShopProduct[]> {
    // Add base path if needed, depending on potential rewrite issues (previous issue was /free-tools/...)
    // But earlier I removed it because the user updated next.config.ts with assetPrefix/basePath.
    // However, for API calls *fetching* from the client, if `basePath` is set in next.config,
    // requests relative to root need to include it?
    // User said "I have added assetPrefix... debut that" implying they might want it handled via config.
    // But usually `fetch("/api/...")` needs the base path if the app is served under /free-tools.
    // Let's assume /free-tools is needed based on previous fix experience, or try relative?
    // Safest is to try with the prefix if we think it's required.
    // The previous fix used `/free-tools/api/...`. Let's stick to that pattern if valid.

    // Actually, checking standard Next.js behavior: if basePath is configured, 
    // client-side routing handles it, but manual fetch needs the path.
    // Let's use `/free-tools/api/shop/fetch`.

    const response = await fetch("/free-tools/api/shop/fetch", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ url, platform }),
    });

    if (!response.ok) {
        throw new Error("Failed to fetch shop products");
    }

    const data: ShopFetchResponse = await response.json();
    return data.products;
}

