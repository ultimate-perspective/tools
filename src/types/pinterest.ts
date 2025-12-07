export type ToneOptions = 'formal' | 'casual' | 'sale' | 'witty' | 'exciting';

export type LengthOptions = 'small' | 'medium' | 'large';

export interface CommonConfig {
    tone: ToneOptions;
    length: LengthOptions;
    includeHashtags: boolean;
    includeEmojis: boolean;
}

export interface ManualInput {
    mode: 'manual';
    manualInput: {
        description: string;
    };
    importInput?: never;
    config: CommonConfig;
}

export interface ImportInput {
    mode: 'import';
    manualInput?: never;
    importInput: {
        url: string;
        platform: 'etsy' | 'shopify';
        selectedProduct?: {
            title: string;
            description: string;
        };
    };
    config: CommonConfig;
}

export type PinterestInput = ManualInput | ImportInput;

export interface PinterestOutput {
    title: string;
    description: string;
    hashtags: string[];
}
