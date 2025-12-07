
export interface ShopProduct {
    id?: string;
    title: string;
    description: string;
    image: string;
    price?: string;
    url: string;
}

export type ProductPreview = ShopProduct;

export interface ShopFetchRequest {
    url: string;
    platform: 'etsy' | 'shopify';
}

export interface ShopFetchResponse {
    products: ShopProduct[];
    shopTitle?: string;
}
