export interface EtsyTitleDescriptionGeneratorInput {
    product: string;
    details: string;
    specialFeatures: string;
    targetAudience?: string;
    additionalInfo?: string;
}

export interface EtsyTitleDescriptionGeneratorOutput {
    title: string;
    description: string;
    tags: string[];
}
