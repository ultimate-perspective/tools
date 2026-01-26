import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { generatePinterestContent } from "@/services/pinterest";
import { PinterestInput, PinterestOutput } from "@/types/pinterest";
import { PinterestBoardNameGeneratorInput, PinterestBoardNameGeneratorOutput } from "@/types/pinterest/board-name-generator";

async function generatePinterestBoardNames(data: PinterestBoardNameGeneratorInput): Promise<PinterestBoardNameGeneratorOutput> {
    const response = await fetch("/free-tools/api/pinterest/board-name-generator", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Failed to generate Pinterest board names");
    }

    return response.json();
}

export function usePinterestBoardNameGenerator() {
    return useMutation({
        mutationFn: generatePinterestBoardNames,
    });
}

async function generatePinterestAestheticBoardNames(data: PinterestBoardNameGeneratorInput): Promise<PinterestBoardNameGeneratorOutput> {
    const response = await fetch("/free-tools/api/pinterest/aesthetic-board-name-ideas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Failed to generate Pinterest aesthetic board names");
    }

    return response.json();
}

export function usePinterestAestheticBoardNameGenerator() {
    return useMutation({
        mutationFn: generatePinterestAestheticBoardNames,
    });
}


/**
 * Custom hook to manage Pinterest content generation state.
 * Wraps @tanstack/react-query useMutation.
 */
export function usePinterestTitleDescription(): UseMutationResult<PinterestOutput, Error, PinterestInput> {
    return useMutation({
        mutationFn: (data: PinterestInput) => generatePinterestContent(data),
    });
}
