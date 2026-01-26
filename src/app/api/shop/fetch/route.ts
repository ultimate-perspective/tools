import { NextResponse } from "next/server";
import { ShopFetchRequest, ShopFetchResponse } from "@/types/shop";
import { EtsyAdapter } from "@/lib/adapters/etsy-adapter";
import { ShopifyAdapter } from "@/lib/adapters/shopify-adapter";
import { ShopAdapter } from "@/lib/adapters/shop-adapter";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { url, platform } = body as ShopFetchRequest;

        if (!url || !platform) {
            return NextResponse.json({ error: "Missing url or platform" }, { status: 400 });
        }

        let adapter: ShopAdapter;

        if (platform === 'etsy') {
            adapter = new EtsyAdapter();
        } else if (platform === 'shopify') {
            adapter = new ShopifyAdapter();
        } else {
            return NextResponse.json({ error: "Invalid platform" }, { status: 400 });
        }

        const products = await adapter.fetchProducts(url);

        // Wrap response in expected format
        const response: ShopFetchResponse = {
            products,
            // shop: ... // You could add logic here to extract shop info if needed, or adapters can return it
        };

        return NextResponse.json(response);

    } catch (error: unknown) {
        console.error("Error fetching shop products:", error);
        return NextResponse.json({ error: (error as Error).message || "Failed to fetch products" }, { status: 500 });
    }
}
