export interface PinterestBoardNameGeneratorInput {
    description: string;
    language: string;
}

export type PinterestBoardTone = 'Neutral' | 'Funny' | 'Professional' | 'Informal' | 'Formal' | 'Positive';

export interface PinterestBoardToneGroup {
    tone: PinterestBoardTone;
    names: string[];
}

export interface PinterestBoardNameGeneratorOutput {
    groups: PinterestBoardToneGroup[];
}
