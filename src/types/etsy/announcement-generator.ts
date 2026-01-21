export type AnnouncementStyle = 'hype' | 'calm' | 'pro';
export type UpdateType = 'sale' | 'new_product' | 'restocked' | 'policy_update' | 'custom';

export interface EtsyAnnouncementGeneratorInput {
    shopName: string;
    whatYouSell: string;
    updateType: string; // Keeping string to allow flexibility in UI select, though usually matches UpdateType subset
    updateDetails?: string;
    callToAction?: string;
}

export interface AnnouncementVariation {
    style: AnnouncementStyle;
    label: string;
    announcement: string;
    description: string; // identifying description like "FRIENDLY & URGENT"
}

export interface EtsyAnnouncementGeneratorOutput {
    variations: AnnouncementVariation[];
}
