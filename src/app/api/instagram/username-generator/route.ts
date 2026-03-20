import { NextResponse, NextRequest } from "next/server";
import { llmService } from "@/utils/llm/LLMService";
import { InstagramUsernameGeneratorInput, InstagramUsername } from "@/types/instagram/username-generator";
import { withRateLimit } from "@/lib/with-rate-limit";
import { withSameOriginProtection } from "@/lib/with-same-origin-protection";
import axios from "axios";

function sanitizeUsername(username: string): string {
    // Strip leading @ if present, lowercase, remove disallowed chars
    return username.replace(/^@/, "").toLowerCase().replace(/[^a-z0-9._]/g, "").slice(0, 30);
}

function isValidInstagramUsername(username: string): boolean {
    if (!username || username.length < 1 || username.length > 30) return false;
    // Instagram allows letters, numbers, periods, underscores only
    return /^[a-z0-9._]+$/.test(username);
}

async function checkInstagramAvailability(username: string): Promise<boolean | null> {
    try {
        const response = await axios.get<string>(`https://www.instagram.com/${username}/`, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
                "Accept-Language": "en-US,en;q=0.9",
                "Sec-Fetch-Dest": "document",
                "Sec-Fetch-Mode": "navigate",
                "Sec-Fetch-Site": "none",
                "Upgrade-Insecure-Requests": "1"
            },
            timeout: 8000,
            responseType: "text",
            // Don't throw on error status codes so we can log them
            validateStatus: () => true,
        });

        console.log(`[Instagram Check] @${username} - Status: ${response.status}`);
        
        if (response.status >= 400 && response.status !== 404) {
             console.log(`[Instagram Check] @${username} - Unexpected status ${response.status}. Headers:`, response.headers);
             // Log a snippet of the HTML to see what Instagram is returning (e.g. login redirect, error page)
             console.log(`[Instagram Check] @${username} - HTML Snippet:`, typeof response.data === 'string' ? response.data.slice(0, 500) : 'Not a string');
        }

        const html: string = response.data;

        // If 404, it normally means the user is not found -> Available
        if (response.status === 404) {
             return true; // no page found = available
        }
        // If the page contains an og: meta tag, the profile exists (username is TAKEN)
        const hasOgTag = html.includes('property="og:') || html.includes("property='og:");
        
        // Available = no OG tags found
        return !hasOgTag;
    } catch (error) {
        console.error(`Error checking Instagram availability for @${username}:`, error);
        return null;
    }
}

async function postHandler(request: NextRequest) {
    try {
        const body = await request.json() as InstagramUsernameGeneratorInput;

        if (!body || !body.username || typeof body.username !== "string") {
            return NextResponse.json(
                { error: "Invalid input. A username is required." },
                { status: 400 }
            );
        }

        const sanitized = sanitizeUsername(body.username);

        if (!isValidInstagramUsername(sanitized)) {
            return NextResponse.json(
                { error: "Invalid username format. Use only letters, numbers, periods, and underscores." },
                { status: 400 }
            );
        }

        // Generate 9 AI variations
        const result = await llmService.generateInstagramUsernames({ username: sanitized });

        // Sanitize and deduplicate variations (remove original if AI included it)
        const seen = new Set<string>([sanitized]);
        const validVariations = result.variations
            .map((v: string) => sanitizeUsername(v))
            .filter((v: string) => isValidInstagramUsername(v) && !seen.has(v) && (seen.add(v), true))
            .slice(0, 9);

        // Build list: original first, then variations
        const allUsernames = [sanitized, ...validVariations];

        // Check availability for all usernames in parallel
        const checkedUsernames: InstagramUsername[] = await Promise.all(
            allUsernames.map(async (username, index) => {
                const available = await checkInstagramAvailability(username);
                return {
                    username,
                    isOriginal: index === 0,
                    available,
                };
            })
        );

        return NextResponse.json({ usernames: checkedUsernames });
    } catch (error) {
        console.error("Error in Instagram Username Generator API:", error);
        return NextResponse.json(
            { error: "Failed to generate username variations." },
            { status: 500 }
        );
    }
}

export const POST = withRateLimit(withSameOriginProtection(postHandler));
