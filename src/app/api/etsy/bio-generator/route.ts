import { NextResponse, NextRequest } from "next/server";
import { llmService } from "@/utils/llm/LLMService";
import { EtsyBioGeneratorInput } from "@/types/etsy/bio-generator";
import { withRateLimit } from "@/lib/with-rate-limit";
import { withSameOriginProtection } from "@/lib/with-same-origin-protection";

async function postHandler(request: NextRequest) {
    try {
        const body = await request.json();
        const input = body as EtsyBioGeneratorInput;

        if (!input || !input.shopName || !input.whatYouSell || !input.whyYouStarted || !input.howItsMade || !input.tone) {
            return NextResponse.json(
                { error: "Invalid input provided. Shop name, what you sell, why you started, how it's made, and tone are required." },
                { status: 400 }
            );
        }

        const result = await llmService.generateEtsyBio(input);

        console.log("Generated Etsy Bio:", result);

        return NextResponse.json(result);
    } catch (error) {
        console.error("Error in Etsy Bio generation API:", error);
        return NextResponse.json(
            { error: "Failed to generate bio content" },
            { status: 500 }
        );
    }
}

export const POST = withRateLimit(withSameOriginProtection(postHandler));
