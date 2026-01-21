export interface EtsyShopNameGeneratorInput {
    description: string;
    includeTitle?: boolean;
}

export interface EtsyShopName {
    name: string; // The CamelCase name (e.g., "InkyFingersPress")
    original: string; // The original name with spaces (e.g., "Inky Fingers Press")
    title: string; // The shop title (e.g., "InkyFingersPress: Hand-Pressed Linocut Art & Stationery")
    type: 'abstract' | 'descriptive';
    available?: boolean;
}

export interface EtsyShopNameGeneratorOutput {
    names: EtsyShopName[];
}
