
import { ChatOpenAI } from "@langchain/openai";
import { SystemMessage, HumanMessage } from "@langchain/core/messages";
import { PinterestInput, PinterestOutput } from "@/types/pinterest";
import { SYSTEM_PROMPT, getUserPrompt } from "./prompts";

class LLMService {
    private static instance: LLMService;
    private model: ChatOpenAI;

    private constructor() {
        this.model = new ChatOpenAI({
            modelName: "gpt-4o-mini", // or "gpt-3.5-turbo"
            temperature: 0.7,
            // API key is automatically read from names like OPENAI_API_KEY env var
        });
    }

    public static getInstance(): LLMService {
        if (!LLMService.instance) {
            LLMService.instance = new LLMService();
        }
        return LLMService.instance;
    }

    public async generatePinterestContent(input: PinterestInput): Promise<PinterestOutput> {
        const systemMsg = new SystemMessage(SYSTEM_PROMPT);
        const userMsg = new HumanMessage(getUserPrompt(input));

        // We ask for JSON output in the prompt, so we can parse it.
        // Alternatively we could use structured output parsing, but simple JSON parsing is often enough.
        // For robustness, let's instruct the model to return JSON explicitly in the call if supported, 
        // or just rely on the prompt instructions. gpt-4o supports response_format: { type: "json_object" }.

        const response = await this.model.invoke([systemMsg, userMsg], {
            response_format: { type: "json_object" }
        });

        const content = response.content as string;

        try {
            const parsed = JSON.parse(content);

            return {
                title: parsed.title || "Untitled Pin",
                description: parsed.description || "No description generated.",
                hashtags: Array.isArray(parsed.hashtags) ? parsed.hashtags : [],
            };
        } catch (error) {
            console.error("Failed to parse LLM response:", content);
            throw new Error("Failed to generate valid JSON content from LLM.");
        }
    }
}

export const llmService = LLMService.getInstance();
