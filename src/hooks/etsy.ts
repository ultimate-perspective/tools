import { useMutation } from "@tanstack/react-query";
import { EtsyTitleDescriptionGeneratorInput, EtsyTitleDescriptionGeneratorOutput } from "@/types/etsy";

async function generateEtsyContent(data: EtsyTitleDescriptionGeneratorInput): Promise<EtsyTitleDescriptionGeneratorOutput> {
    const response = await fetch("/free-tools/api/etsy/title-description-generator", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Failed to generate Etsy content");
    }

    return response.json();
}

export function useEtsyTitleDescriptionGenerator() {
    return useMutation({
        mutationFn: generateEtsyContent,
    });
}
