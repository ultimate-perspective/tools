import { useMutation } from "@tanstack/react-query";
import { EtsyTitleDescriptionGeneratorInput, EtsyTitleDescriptionGeneratorOutput } from "@/types/etsy";
import { EtsyBioGeneratorInput, EtsyBioGeneratorOutput } from "@/types/etsy/bio-generator";

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

async function generateEtsyBio(data: EtsyBioGeneratorInput): Promise<EtsyBioGeneratorOutput> {
    const response = await fetch("/free-tools/api/etsy/bio-generator", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Failed to generate Etsy bio");
    }

    return response.json();
}

export function useEtsyBioGenerator() {
    return useMutation({
        mutationFn: generateEtsyBio,
    });
}
