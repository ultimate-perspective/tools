export interface InstagramUsernameGeneratorInput {
    username: string;
}

export interface InstagramUsername {
    username: string;
    isOriginal: boolean;
    available: boolean | null; // null means check failed/inconclusive
}

export interface InstagramUsernameGeneratorOutput {
    usernames: InstagramUsername[];
}

export interface InstagramUsernameVariationsOutput {
    variations: string[];
}
