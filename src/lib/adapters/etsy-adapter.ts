import { ShopAdapter } from "./shop-adapter";
import { Product, ProductImage } from "@/types/shop";

interface EtsyPrice {
    amount: number;
    divisor: number;
    currency_code: string;
}

interface EtsyImage {
    listing_image_id: number;
    url_fullxfull: string;
    url_75x75: string;
    url_170x135: string;
    url_570xN: string;
    full_height: number;
    full_width: number;
}

interface EtsyListingResponse {
    listing_id: number;
    title: string;
    description: string;
    url: string;
    price: EtsyPrice;
    images?: EtsyImage[];
    // Add other fields if needed
}

export class EtsyAdapter implements ShopAdapter {
    private apiKey: string;

    constructor() {
        this.apiKey = process.env.ETSY_API_KEY || '';
        if (!this.apiKey) {
            console.warn("ETSY_API_KEY is not set");
        }
    }

    async fetchProducts(url: string): Promise<Product[]> {
        const listingId = this.extractListingId(url);
        if (!listingId) {
            throw new Error("Could not extract Etsy listing ID from URL");
        }

        const apiUrl = `${process.env.ETSY_API_BASE}/listings/${listingId}?includes=Images`;

        try {
            const response = await fetch(apiUrl, {
                headers: {
                    'x-api-key': this.apiKey
                }
            });

            if (!response.ok) {
                throw new Error(`Etsy API error: ${response.status} ${response.statusText}`);
            }

            const data: EtsyListingResponse = await response.json();
            return [this.mapResponseToProduct(data)];
        } catch (error) {
            console.error("Error fetching from Etsy API:", error);
            throw error;
        }
    }

    private extractListingId(url: string): string | null {
        // Matches /listing/123456789/
        const match = url.match(/listing\/(\d+)/);
        return match ? match[1] : null;
    }

    private mapResponseToProduct(data: EtsyListingResponse): Product {
        // Calculate price
        const priceValue = data.price.amount / data.price.divisor;
        const priceString = priceValue.toFixed(2); // Keep specific fetcher logic simple for now

        // Map images
        const images: ProductImage[] = (data.images || []).map(img => ({
            url: img.url_fullxfull, // Prefer highest quality
            width: img.full_width,
            height: img.full_height
        }));

        // Main image
        const mainImage = images.length > 0 ? images[0].url : '';

        return {
            id: String(data.listing_id),
            title: data.title,
            description: data.description,
            price: priceString,
            currencyCode: data.price.currency_code,
            images: images,
            image: mainImage,
            url: data.url
        };
    }
}
