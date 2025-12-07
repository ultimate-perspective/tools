import { NextResponse, NextRequest } from "next/server";
import { llmService } from "@/utils/llm/LLMService";
import { PinterestInput } from "@/types/pinterest";
import { withRateLimit } from "@/lib/with-rate-limit";
import { withSameOriginProtection } from "@/lib/with-same-origin-protection";

async function postHandler(request: NextRequest) {
    try {
        const body = await request.json();
        const input = body as PinterestInput;

        if (!input || !input.config) {
            return NextResponse.json(
                { error: "Invalid input provided" },
                { status: 400 }
            );
        }

        const result = await llmService.generatePinterestContent(input);

        console.log("Generated content:", result);

        return NextResponse.json(result);
    } catch (error) {
        console.error("Error in Pinterest generation API:", error);
        return NextResponse.json(
            { error: "Failed to generate content" },
            { status: 500 }
        );
    }
}

export const POST = withRateLimit(withSameOriginProtection(postHandler));
