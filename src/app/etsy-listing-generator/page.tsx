import type { Metadata } from 'next';
import EtsyTitleDescriptionGeneratorPageContent from '@/components/etsy-title-description-generator/EtsyTitleDescriptionGeneratorPageContent';

export const metadata: Metadata = {
    title: 'Free Etsy Listing Title & Description Generator',
    description: 'Generate high-converting, SEO-optimized Etsy listings (titles, descriptions, tags) for free in seconds.',
    alternates: {
        canonical: 'https://www.designinstantly.com/free-tools/etsy-listing-title-description-generator',
    },
};

export default function EtsyTitleDescriptionGeneratorPage() {
    return <EtsyTitleDescriptionGeneratorPageContent />;
}
