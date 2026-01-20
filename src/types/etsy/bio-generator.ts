export type EtsyBioTone = 'professional' | 'friendly' | 'playful' | 'heartfelt' | 'confident';

export interface EtsyBioGeneratorInput {
    // Core Inputs (Required)
    shopName: string;
    whatYouSell: string;
    whyYouStarted: string;
    howItsMade: string;
    tone: EtsyBioTone;

    // Additional Inputs (Optional)
    location?: string;
    targetAudience?: string;
}

export interface EtsyBioGeneratorOutput {
    headline: string;   // Max 140 chars
    fullBio: string;    // 1,500-2,500 chars
}
