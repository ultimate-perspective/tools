
/**
 * Service to generate Pinterest content via backend API.
 */
import { PinterestInput, PinterestOutput } from "@/types/pinterest";

export async function generatePinterestContent(data: PinterestInput): Promise<PinterestOutput> {
    const response = await fetch("/free-tools/api/pinterest/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Failed to generate Pinterest content");
    }

    return response.json();
}

