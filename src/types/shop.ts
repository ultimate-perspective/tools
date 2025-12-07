export interface ProductImage {
    url: string;
    altText?: string;
    width?: number;
    height?: number;
}

export interface ProductVariant {
    id: string;
    title: string;
    price: string;
    sku?: string;
    image?: string;
}

export interface Product {
    id: string;
    title: string;
    description: string;
    images: ProductImage[];
    price: string;
    url: string;
    variants?: ProductVariant[];
    currencyCode?: string;
    // Helper accessor for single main image (backward compatibility/ease of use)
    image: string;
}

export interface Shop {
    id?: string;
    name: string;
    url: string;
    description?: string;
    currencyCode?: string;
}

export type ShopProduct = Product;
export type ProductPreview = Product;

export interface ShopFetchRequest {
    url: string;
    platform: 'etsy' | 'shopify';
}

export interface ShopFetchResponse {
    products: Product[];
    shop?: Shop;
}
