import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { generatePinterestContent } from "@/services/pinterest";
import { PinterestInput, PinterestOutput } from "@/types/pinterest";

/**
 * Custom hook to manage Pinterest content generation state.
 * Wraps @tanstack/react-query useMutation.
 */
export function usePinterestTitleDescription(): UseMutationResult<PinterestOutput, Error, PinterestInput> {
    return useMutation({
        mutationFn: (data: PinterestInput) => generatePinterestContent(data),
    });
}
