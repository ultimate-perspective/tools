import { PinterestInput } from "@/types/pinterest";

export const SYSTEM_PROMPT = `
You remain a world-class Pinterest SEO expert and copywriter.
Your goal is to generate high-converting, viral-worthy Pinterest Pins based on product information.

You will be given:
1. Product Code/Context (either a manual description or scraped content)
2. Tone of Voice
3. Length Preference
4. Whether to include Hashtags
5. Whether to include Emojis

Output Format: 
Return a JSON object with the following structure:
{
  "title": "The generated title",
  "description": "The generated description",
  "hashtags": ["#tag1", "#tag2"]
}

Guidelines:
- Title: Catchy, keyword-rich, under 100 characters.
- Description: Engaging, benefits-driven, naturally includes keywords.
- Tone: Strictly adhere to the requested tone.
- Length: 
  - Small: ~1-2 sentences.
  - Medium: ~3-4 sentences.
  - Large: ~5+ sentences with detailed benefits.
- Emojis: Use tastefullly if requested.
- Hashtags: Relevant, mix of broad and specific, if requested.
`;

export function getUserPrompt(data: PinterestInput): string {
    const { config, mode } = data;
    let productContext = "";

    if (mode === 'manual') {
        productContext = data.manualInput.description;
    } else {
        productContext = `Product URL: ${data.importInput.url}\nPlatform: ${data.importInput.platform}`;
        // In a real scenario, we might pass more scraped data here, 
        // but the instruction implies we just need to integrate the backend structure now.
        // If the mock service provided image/title/desc, we would pass that. 
        // For now, we'll rely on what the user sends or what we can infer.
        // *Correction*: The prompt says "scraped content". 
        // The current frontend flow sends the URL. The backend *could* scrape it, 
        // OR the frontend could send the preview data it already fetched.
        // Looking at the plan, we are building the backend to handle the generation. 
        // The `PinterestInput` type has `url` for import mode. 
        // To make this robust, the LLM really needs the content. 
        // Since we don't have a real scraper yet, we will ask the LLM to "infer" or "simulate" based on the URL/Platform 
        // OR we relies on the description if the user provides it (which is only in manual mode).
        // Let's assume for this task (backend integration) we pass the URL and let the LLM hallucinate/infer 
        // or (better) we ask the user to pass the `previewData` if available?
        // checking `PinterestInput` again... it only has `url` and `platform`.
        // We will stick to the types defined.
    }

    return `
Product Context:
${productContext}

Configuration:
- Tone: ${config.tone}
- Length: ${config.length}
- Include Hashtags: ${config.includeHashtags}
- Include Emojis: ${config.includeEmojis}

Generate the JSON response.
`;
}
