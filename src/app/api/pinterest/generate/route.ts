
import { NextResponse } from "next/server";
import { llmService } from "@/utils/llm/LLMService";
import { PinterestInput } from "@/types/pinterest";

export async function POST(request: Request) {
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
