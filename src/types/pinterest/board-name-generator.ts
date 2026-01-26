export interface PinterestBoardNameGeneratorInput {
    description: string;
    language: string;
}

export type PinterestBoardTone =
    | 'Neutral'
    | 'Aesthetic'
    | 'Witty'
    | 'Minimalist'
    | 'Educational'
    | 'Luxurious'
    | 'Action'
    | 'Poetic'
    | 'Trendy'
    | 'Motivational';

export interface PinterestBoardToneGroup {
    tone: PinterestBoardTone;
    names: string[];
}

export interface PinterestBoardNameGeneratorOutput {
    groups: PinterestBoardToneGroup[];
}
