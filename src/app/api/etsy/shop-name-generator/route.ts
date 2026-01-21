import { NextResponse, NextRequest } from "next/server";
import { llmService } from "@/utils/llm/LLMService";
import { EtsyShopNameGeneratorInput } from "@/types/etsy/shop-name-generator";
import { withRateLimit } from "@/lib/with-rate-limit";
import { withSameOriginProtection } from "@/lib/with-same-origin-protection";

function transformToEtsySlug(input: string): string {
    // Keep only letters/numbers, split on non-alphanumerics, then CamelCase.
    const parts = input
        .trim()
        .split(/[^a-zA-Z0-9]+/g)
        .filter(Boolean);

    const camel = parts
        .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
        .join("");

    return camel.replace(/[^a-zA-Z0-9]/g, "");
}

function passesLillyTest(name: string): boolean {
    // Avoid hard-to-read sequences like lll, iii, 111, or mixes like l1l.
    return !/[il1]{3,}/i.test(name);
}

async function checkEtsyAvailability(shopName: string): Promise<boolean> {
    try {
        // Check for RSS feed existence as a proxy for shop existence
        // If the RSS feed exists (200 OK), the shop likely exists -> name is TAKEN
        // If it returns 404, the shop likely doesn't exist -> name is AVAILABLE
        const response = await fetch(`https://www.etsy.com/shop/${shopName}/rss`, {
            method: 'HEAD',
            headers: {
                // Mimic a browser-like User-Agent to avoid being blocked by anti-bot measures
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        // If request is successful (200), the shop exists, so name is NOT available
        if (response.ok) {
            return false;
        }

        // If 404, the shop likely doesn't exist, so name IS available
        if (response.status === 404) {
            return true;
        }

        // Other statuses (403, 500 etc) - treat as unavailable to be safe or maybe 'unknown'
        // For now, let's just return true if strictly 404, detailed error handling could be added later
        return false;
    } catch (error) {
        console.error(`Error checking availability for ${shopName}:`, error);
        // On error, we can't be sure, but let's assume unavailable/taken to be safe
        // Or we could return undefined if we had an 'unknown' state
        return false;
    }
}

async function postHandler(request: NextRequest) {
    try {
        const body = await request.json();
        const input = body as EtsyShopNameGeneratorInput;

        if (!input || !input.description) {
            return NextResponse.json(
                { error: "Invalid input provided. Description is required." },
                { status: 400 }
            );
        }

        const includeTitle = input.includeTitle !== false;
        const result = await llmService.generateEtsyShopNames({ ...input, includeTitle });

        // Validation layer: normalize and filter to Etsy-safe output.
        const seen = new Set<string>();

        // First, filter and normalize the names
        const validNames = (result.names ?? [])
            .map((n) => {
                const safeName = transformToEtsySlug(n.name || n.original || "");
                return {
                    ...n,
                    name: safeName,
                    title: includeTitle ? (n.title || "") : "",
                };
            })
            .filter((n) => n.name.length >= 4 && n.name.length <= 20)
            .filter((n) => passesLillyTest(n.name))
            .filter((n) => {
                const key = n.name.toLowerCase();
                if (seen.has(key)) return false;
                seen.add(key);
                return true;
            });

        // Separate names for checking to run in parallel
        const namesWithAvailability = await Promise.all(
            validNames.map(async (n) => {
                const isAvailable = await checkEtsyAvailability(n.name);
                return { ...n, available: isAvailable };
            })
        );

        return NextResponse.json({ names: namesWithAvailability });
    } catch (error) {
        console.error("Error in Etsy Shop Name generation API:", error);
        return NextResponse.json(
            { error: "Failed to generate shop names" },
            { status: 500 }
        );
    }
}

export const POST = withRateLimit(withSameOriginProtection(postHandler));
