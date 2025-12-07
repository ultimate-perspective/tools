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
    if (data.importInput.selectedProduct) {
      productContext = `Title: ${data.importInput.selectedProduct.title}\nDescription: ${data.importInput.selectedProduct.description}`;
    } else {
      productContext = `Product URL: ${data.importInput.url}\nPlatform: ${data.importInput.platform}`;
    }
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
