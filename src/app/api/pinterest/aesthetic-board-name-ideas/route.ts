import { NextResponse, NextRequest } from "next/server";
import { llmService } from "@/utils/llm/LLMService";
import { PinterestBoardNameGeneratorInput } from "@/types/pinterest/board-name-generator";
import { withRateLimit } from "@/lib/with-rate-limit";
import { withSameOriginProtection } from "@/lib/with-same-origin-protection";

async function postHandler(request: NextRequest) {
    try {
        const body = await request.json();
        const input = body as PinterestBoardNameGeneratorInput;

        if (!input || !input.description) {
            return NextResponse.json(
                { error: "Invalid input provided. Description is required." },
                { status: 400 }
            );
        }

        const result = await llmService.generatePinterestAestheticBoardNames(input);

        return NextResponse.json(result);
    } catch (error) {
        console.error("Error in Pinterest Aesthetic Board Name generation API:", error);
        return NextResponse.json(
            { error: "Failed to generate aesthetic board names" },
            { status: 500 }
        );
    }
}

export const POST = withRateLimit(withSameOriginProtection(postHandler));
