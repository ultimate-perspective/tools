import type { Metadata } from 'next';
import EtsyTitleDescriptionGeneratorPageContent from '@/components/etsy-title-description-generator/EtsyTitleDescriptionGeneratorPageContent';

export const metadata: Metadata = {
    title: 'Etsy Title & Description Generator | Free Tools',
    description: 'Generate high-converting, SEO-optimized Etsy titles, descriptions, and tags in seconds using AI.',
};

export default function EtsyTitleDescriptionGeneratorPage() {
    return <EtsyTitleDescriptionGeneratorPageContent />;
}
