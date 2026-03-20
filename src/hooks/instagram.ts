import { useMutation } from "@tanstack/react-query";
import { InstagramUsernameGeneratorInput, InstagramUsernameGeneratorOutput } from "@/types/instagram/username-generator";
import axios from "axios";

async function generateInstagramUsernames(data: InstagramUsernameGeneratorInput): Promise<InstagramUsernameGeneratorOutput> {
    const response = await axios.post<InstagramUsernameGeneratorOutput>(
        "/free-tools/api/instagram/username-generator",
        data
    );
    return response.data;
}

export function useInstagramUsernameGenerator() {
    return useMutation({
        mutationFn: generateInstagramUsernames,
    });
}
