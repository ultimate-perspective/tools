import { ChatOpenAI } from "@langchain/openai";
import { SystemMessage, HumanMessage } from "@langchain/core/messages";
import { PinterestInput, PinterestOutput } from "@/types/pinterest";
import { EtsyTitleDescriptionGeneratorInput, EtsyTitleDescriptionGeneratorOutput } from "@/types/etsy";
import { EtsyBioGeneratorInput, EtsyBioGeneratorOutput } from "@/types/etsy/bio-generator";
import { EtsyFaqGeneratorInput, EtsyFaqGeneratorOutput, EtsyFaqRewriteInput, EtsyFaqRewriteOutput } from "@/types/etsy/faq-generator";
import { EtsyShopNameGeneratorInput, EtsyShopNameGeneratorOutput } from "@/types/etsy/shop-name-generator";
import {
    SYSTEM_PROMPT,
    getUserPrompt,
    ETSY_TITLE_DESCRIPTION_SYSTEM_PROMPT,
    getEtsyTitleDescriptionUserPrompt,
    ETSY_BIO_GENERATOR_SYSTEM_PROMPT,
    getEtsyBioUserPrompt,
    ETSY_FAQ_GENERATOR_SYSTEM_PROMPT,
    getEtsyFaqUserPrompt,
    ETSY_FAQ_REWRITE_SYSTEM_PROMPT,
    getEtsyFaqRewriteUserPrompt,
    ETSY_SHOP_NAME_GENERATOR_SYSTEM_PROMPT,
    getEtsyShopNameUserPrompt,
    ETSY_ANNOUNCEMENT_GENERATOR_SYSTEM_PROMPT,
    getEtsyAnnouncementUserPrompt
} from "./prompts";

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
        } catch {
            console.error("Failed to parse LLM response:", content);
            throw new Error("Failed to generate valid JSON content from LLM.");
        }
    }

    public async generateEtsyTitleDescription(input: EtsyTitleDescriptionGeneratorInput): Promise<EtsyTitleDescriptionGeneratorOutput> {
        const systemMsg = new SystemMessage(ETSY_TITLE_DESCRIPTION_SYSTEM_PROMPT);
        const userMsg = new HumanMessage(getEtsyTitleDescriptionUserPrompt(input));

        const response = await this.model.invoke([systemMsg, userMsg], {
            response_format: { type: "json_object" }
        });

        const content = response.content as string;

        try {
            const parsed = JSON.parse(content);
            return {
                title: parsed.title || "Untitled Listing",
                description: parsed.description || "No description generated.",
                tags: Array.isArray(parsed.tags) ? parsed.tags : [],
            };
        } catch {
            console.error("Failed to parse Etsy LLM response:", content);
            throw new Error("Failed to generate valid JSON content from LLM for Etsy.");
        }
    }

    public async generateEtsyBio(input: EtsyBioGeneratorInput): Promise<EtsyBioGeneratorOutput> {
        const systemMsg = new SystemMessage(ETSY_BIO_GENERATOR_SYSTEM_PROMPT);
        const userMsg = new HumanMessage(getEtsyBioUserPrompt(input));

        const response = await this.model.invoke([systemMsg, userMsg], {
            response_format: { type: "json_object" }
        });

        const content = response.content as string;

        try {
            const parsed = JSON.parse(content);
            return {
                headline: parsed.headline || "Welcome to my shop",
                fullBio: parsed.fullBio || "No bio generated.",
            };
        } catch {
            console.error("Failed to parse Etsy Bio LLM response:", content);
            throw new Error("Failed to generate valid JSON content from LLM for Etsy Bio.");
        }
    }

    public async generateEtsyFaqs(input: EtsyFaqGeneratorInput): Promise<EtsyFaqGeneratorOutput> {
        const systemMsg = new SystemMessage(ETSY_FAQ_GENERATOR_SYSTEM_PROMPT);
        const userMsg = new HumanMessage(getEtsyFaqUserPrompt(input));

        const response = await this.model.invoke([systemMsg, userMsg], {
            response_format: { type: "json_object" }
        });

        const content = response.content as string;

        try {
            const parsed = JSON.parse(content);
            return {
                faqs: Array.isArray(parsed.faqs) ? parsed.faqs : [],
            };
        } catch {
            console.error("Failed to parse Etsy FAQ LLM response:", content);
            throw new Error("Failed to generate valid JSON content from LLM for Etsy FAQs.");
        }
    }

    public async rewriteEtsyFaq(input: EtsyFaqRewriteInput): Promise<EtsyFaqRewriteOutput> {
        const systemMsg = new SystemMessage(ETSY_FAQ_REWRITE_SYSTEM_PROMPT);
        const userMsg = new HumanMessage(getEtsyFaqRewriteUserPrompt(input));

        const response = await this.model.invoke([systemMsg, userMsg], {
            response_format: { type: "json_object" }
        });

        const content = response.content as string;

        try {
            const parsed = JSON.parse(content);
            return {
                question: parsed.question || "Question",
                answer: parsed.answer || "Answer",
                category: parsed.category || "GENERAL",
            };
        } catch {
            console.error("Failed to parse Etsy FAQ Rewrite LLM response:", content);
            throw new Error("Failed to generate valid JSON content from LLM for FAQ rewrite.");
        }
    }

    public async generateEtsyShopNames(input: EtsyShopNameGeneratorInput): Promise<EtsyShopNameGeneratorOutput> {
        const systemMsg = new SystemMessage(ETSY_SHOP_NAME_GENERATOR_SYSTEM_PROMPT);
        const userMsg = new HumanMessage(getEtsyShopNameUserPrompt(input));

        const response = await this.model.invoke([systemMsg, userMsg], {
            response_format: { type: "json_object" }
        });

        const content = response.content as string;

        try {
            const parsed = JSON.parse(content);
            return {
                names: Array.isArray(parsed.names) ? parsed.names : [],
            };
        } catch {
            console.error("Failed to parse Etsy Shop Name LLM response:", content);
            throw new Error("Failed to generate valid JSON content from LLM for Etsy Shop Names.");
        }
    }
    public async generateEtsyAnnouncement(input: import("@/types/etsy/announcement-generator").EtsyAnnouncementGeneratorInput): Promise<import("@/types/etsy/announcement-generator").EtsyAnnouncementGeneratorOutput> {
        const systemMsg = new SystemMessage(ETSY_ANNOUNCEMENT_GENERATOR_SYSTEM_PROMPT);
        const userMsg = new HumanMessage(getEtsyAnnouncementUserPrompt(input));

        const response = await this.model.invoke([systemMsg, userMsg], {
            response_format: { type: "json_object" }
        });

        const content = response.content as string;

        try {
            const parsed = JSON.parse(content);
            return {
                variations: Array.isArray(parsed.variations) ? parsed.variations : [],
            };
        } catch {
            console.error("Failed to parse Etsy Announcement LLM response:", content);
            throw new Error("Failed to generate valid JSON content from LLM for Etsy Announcement.");
        }
    }
}

export const llmService = LLMService.getInstance();
