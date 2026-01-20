import { NextResponse, NextRequest } from "next/server";
import { llmService } from "@/utils/llm/LLMService";
import { EtsyFaqRewriteInput } from "@/types/etsy/faq-generator";
import { withRateLimit } from "@/lib/with-rate-limit";
import { withSameOriginProtection } from "@/lib/with-same-origin-protection";

async function postHandler(request: NextRequest) {
    try {
        const body = await request.json();
        const input = body as EtsyFaqRewriteInput;

        if (!input || !input.shopName || !input.productsSold || !input.faq) {
            return NextResponse.json(
                { error: "Invalid input provided. Shop name, products sold, and FAQ are required." },
                { status: 400 }
            );
        }

        const result = await llmService.rewriteEtsyFaq(input);

        return NextResponse.json(result);
    } catch (error) {
        console.error("Error in Etsy FAQ rewrite API:", error);
        return NextResponse.json(
            { error: "Failed to rewrite FAQ content" },
            { status: 500 }
        );
    }
}

export const POST = withRateLimit(withSameOriginProtection(postHandler));
