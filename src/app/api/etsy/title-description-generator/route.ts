import { NextResponse, NextRequest } from "next/server";
import { llmService } from "@/utils/llm/LLMService";
import { EtsyTitleDescriptionGeneratorInput } from "@/types/etsy";
import { withRateLimit } from "@/lib/with-rate-limit";
import { withSameOriginProtection } from "@/lib/with-same-origin-protection";

async function postHandler(request: NextRequest) {
    try {
        const body = await request.json();
        const input = body as EtsyTitleDescriptionGeneratorInput;

        if (!input || !input.product || !input.details) {
            return NextResponse.json(
                { error: "Invalid input provided. Product and details are required." },
                { status: 400 }
            );
        }

        const result = await llmService.generateEtsyTitleDescription(input);

        console.log("Generated Etsy content:", result);

        return NextResponse.json(result);
    } catch (error) {
        console.error("Error in Etsy generation API:", error);
        return NextResponse.json(
            { error: "Failed to generate content" },
            { status: 500 }
        );
    }
}

export const POST = withRateLimit(withSameOriginProtection(postHandler));
