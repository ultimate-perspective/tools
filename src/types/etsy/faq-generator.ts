// FAQ Categories for Etsy shops
export type EtsyFaqCategory =
    | 'CUSTOMIZATION'
    | 'SHIPPING'
    | 'POLICIES'
    | 'DIGITAL_PRODUCTS'
    | 'MATERIALS'
    | 'SIZING'
    | 'CARE'
    | 'ORDERING'
    | 'PAYMENT'
    | 'GENERAL';

// Status of each FAQ item
export type EtsyFaqStatus = 'ready' | 'needs_review' | 'not_started';

// Individual FAQ item
export interface EtsyFaqItem {
    id: string;
    question: string;
    answer: string;
    category: EtsyFaqCategory;
    wordCount: number;
    status: EtsyFaqStatus;
    isRewritten: boolean;
    isDeleted: boolean;
}

// Input for generating FAQs
export interface EtsyFaqGeneratorInput {
    shopName: string;
    productsSold: string;
    existingFaqIds?: string[]; // IDs of existing FAQs to avoid duplicates when adding more
}

// Input for rewriting a single FAQ
export interface EtsyFaqRewriteInput {
    shopName: string;
    productsSold: string;
    faq: {
        question: string;
        answer: string;
        category: EtsyFaqCategory;
    };
}

// Output from LLM for FAQ generation
export interface EtsyFaqGeneratorOutput {
    faqs: Array<{
        question: string;
        answer: string;
        category: EtsyFaqCategory;
    }>;
}

// Output for rewriting a single FAQ
export interface EtsyFaqRewriteOutput {
    question: string;
    answer: string;
    category: EtsyFaqCategory;
}

// Dashboard summary stats
export interface EtsyFaqDashboardStats {
    totalGenerated: number;
    saved: number;
    rewritten: number;
    deleted: number;
    ready: number;
    needsReview: number;
    notStarted: number;
}

// Category display info
export const FAQ_CATEGORY_LABELS: Record<EtsyFaqCategory, string> = {
    CUSTOMIZATION: 'Customization',
    SHIPPING: 'Shipping',
    POLICIES: 'Policies',
    DIGITAL_PRODUCTS: 'Digital Products',
    MATERIALS: 'Materials',
    SIZING: 'Sizing',
    CARE: 'Care',
    ORDERING: 'Ordering',
    PAYMENT: 'Payment',
    GENERAL: 'General',
};
