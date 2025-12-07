import { Product } from "@/types/shop";

export interface ShopAdapter {
    fetchProducts(url: string): Promise<Product[]>;
}
