import { useMutation } from "@tanstack/react-query";
import { EtsyTitleDescriptionGeneratorInput, EtsyTitleDescriptionGeneratorOutput } from "@/types/etsy";
import { EtsyBioGeneratorInput, EtsyBioGeneratorOutput } from "@/types/etsy/bio-generator";
import { EtsyFaqGeneratorInput, EtsyFaqGeneratorOutput, EtsyFaqRewriteInput, EtsyFaqRewriteOutput } from "@/types/etsy/faq-generator";
import { EtsyShopNameGeneratorInput, EtsyShopNameGeneratorOutput } from "@/types/etsy/shop-name-generator";

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

async function generateEtsyFaqs(data: EtsyFaqGeneratorInput): Promise<EtsyFaqGeneratorOutput> {
    const response = await fetch("/free-tools/api/etsy/faq-generator", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Failed to generate Etsy FAQs");
    }

    return response.json();
}

export function useEtsyFaqGenerator() {
    return useMutation({
        mutationFn: generateEtsyFaqs,
    });
}

async function rewriteEtsyFaq(data: EtsyFaqRewriteInput): Promise<EtsyFaqRewriteOutput> {
    const response = await fetch("/free-tools/api/etsy/faq-generator/rewrite", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Failed to rewrite Etsy FAQ");
    }

    return response.json();
}

export function useEtsyFaqRewrite() {
    return useMutation({
        mutationFn: rewriteEtsyFaq,
    });
}

async function generateEtsyShopNames(data: EtsyShopNameGeneratorInput): Promise<EtsyShopNameGeneratorOutput> {
    const response = await fetch("/free-tools/api/etsy/shop-name-generator", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Failed to generate Etsy shop names");
    }

    return response.json();
}

export function useEtsyShopNameGenerator() {
    return useMutation({
        mutationFn: generateEtsyShopNames,
    });
}
