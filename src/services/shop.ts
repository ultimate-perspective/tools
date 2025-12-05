import { ProductPreview } from "@/types/shop";

/**
 * Mock service to get product preview from a shop URL.
 * Simulates a network request.
 * 
 * @param url The product URL
 * @param platform The platform (etsy or shopify)
 * @returns A promise that resolves to a ProductPreview
 */
export async function getProductPreview(url: string, platform: 'etsy' | 'shopify'): Promise<ProductPreview> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock data based on platform
    if (platform === 'etsy') {
        return {
            title: "Handmade Ceramic Vase - Blue Floral Pattern",
            description: "Beautiful handmade ceramic vase with intricate blue floral patterns. Perfect for home decor or as a unique gift. Dimensions: 10x5 inches.",
            image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&auto=format&fit=crop&q=60"
        };
    } else {
        return {
            title: "Organic Cotton T-Shirt - Limited Edition",
            description: "Premium quality organic cotton t-shirt. breathable and comfortable. Available in multiple sizes and colors. Sustainably made. ",
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60"
        };
    }
}
