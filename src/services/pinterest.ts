import { PinterestInput, PinterestOutput } from "@/types/pinterest";

/**
 * Mock service to generate Pinterest content.
 * Simulates a network delay and returns structured data based on input.
 */
export async function generatePinterestContent(data: PinterestInput): Promise<PinterestOutput> {
    // Simulate network delay (1-2 seconds)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    let baseDescription = "";
    if (data.mode === 'manual') {
        baseDescription = data.manualInput.description;
    } else {
        baseDescription = `Product from ${data.importInput.platform}: ${data.importInput.url}`;
    }

    // Mock generation logic based on config
    const { tone, length, includeEmojis, includeHashtags } = data.config;

    let title = "Stunning Design Idea";
    let description = `Check out this amazing find! ${baseDescription}`;
    const hashtags = ["#design", "#inspiration", "#musthave"];

    // Mock variations based on tone
    switch (tone) {
        case 'formal':
            title = "Elegant Design Collection";
            description = `Discover the elegance of this curated piece. ${baseDescription}`;
            break;
        case 'sale':
            title = "Hurry! Exclusive Sale Item";
            description = `Don't miss out on this deal! ${baseDescription}. Limited time offer.`;
            break;
        case 'casual':
        case 'witty':
        case 'exciting':
        default:
            // Keep default
            break;
    }

    // Mock variations based on length
    if (length === 'small') {
        description = description.substring(0, 50) + "...";
    } else if (length === 'large') {
        description += " This item is perfect for your home or as a gift. It features high-quality materials and exquisite craftsmanship that you will adore.";
    }

    // Emojis
    if (includeEmojis) {
        title = `✨ ${title} ✨`;
        description = `😍 ${description} 🌟`;
    }

    // Hashtags
    if (includeHashtags) {
        hashtags.push("#trending", "#style");
    } else {
        // If includeHashtags is false, we might return empty array, but the type says string[]. 
        // The logic usually implies appending them to description or providing them separately.
        // We'll keep the array populated in the object, but front-end might choose not to display them if config says no?
        // Or we strictly respect the flag in the output.
        // Let's clear them if false for strict adherence to "Include Hashtags" toggle affecting output.
        hashtags.length = 0;
    }

    return {
        title,
        description,
        hashtags: includeHashtags ? hashtags : [],
    };
}
