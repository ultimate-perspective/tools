import { NextResponse, NextRequest } from "next/server";
import { llmService } from "@/utils/llm/LLMService";
import { EtsyAnnouncementGeneratorInput } from "@/types/etsy/announcement-generator";
import { withRateLimit } from "@/lib/with-rate-limit";
import { withSameOriginProtection } from "@/lib/with-same-origin-protection";

async function postHandler(request: NextRequest) {
    try {
        const body = await request.json();
        const input = body as EtsyAnnouncementGeneratorInput;

        if (!input || !input.shopName || !input.whatYouSell || !input.updateType) {
            return NextResponse.json(
                { error: "Invalid input provided. Shop Name, What You Sell, and Update Type are required." },
                { status: 400 }
            );
        }

        const result = await llmService.generateEtsyAnnouncement(input);

        return NextResponse.json(result);
    } catch (error) {
        console.error("Error in Etsy Announcement generation API:", error);
        return NextResponse.json(
            { error: "Failed to generate announcements" },
            { status: 500 }
        );
    }
}

export const POST = withRateLimit(withSameOriginProtection(postHandler));
