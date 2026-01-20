import { NextResponse, NextRequest } from "next/server";
import { llmService } from "@/utils/llm/LLMService";
import { EtsyFaqGeneratorInput } from "@/types/etsy/faq-generator";
import { withRateLimit } from "@/lib/with-rate-limit";
import { withSameOriginProtection } from "@/lib/with-same-origin-protection";

async function postHandler(request: NextRequest) {
    try {
        const body = await request.json();
        const input = body as EtsyFaqGeneratorInput;

        if (!input || !input.shopName || !input.productsSold) {
            return NextResponse.json(
                { error: "Invalid input provided. Shop name and products sold are required." },
                { status: 400 }
            );
        }

        const result = await llmService.generateEtsyFaqs(input);

        return NextResponse.json(result);
    } catch (error) {
        console.error("Error in Etsy FAQ generation API:", error);
        return NextResponse.json(
            { error: "Failed to generate FAQ content" },
            { status: 500 }
        );
    }
}

export const POST = withRateLimit(withSameOriginProtection(postHandler));
