import type { Metadata } from 'next';
import EtsyTitleDescriptionGeneratorPageContent from '@/components/etsy-title-description-generator/EtsyTitleDescriptionGeneratorPageContent';
import { Graph } from 'schema-dts';

export const metadata: Metadata = {
    title: 'Free Etsy Listing Title & Description Generator',
    description: 'Generate high-converting, SEO-optimized Etsy listings (titles, descriptions, tags) for free in seconds.',
    alternates: {
        canonical: 'https://www.designinstantly.com/free-tools/etsy-listing-title-description-generator',
    },
};

const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'WebApplication',
            name: 'Etsy Listing Title & Description Generator',
            description: 'Generate high-converting, SEO-optimized Etsy listings (titles, descriptions, tags) for free in seconds.',
            url: 'https://www.designinstantly.com/free-tools/etsy-listing-title-description-generator',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Any',
            offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
            },
            browserRequirements: 'Requires JavaScript. Works on all modern browsers.',
            softwareVersion: '1.0',
            author: {
                '@type': 'Organization',
                name: 'Design Instantly',
                url: 'https://www.designinstantly.com'
            }
        }
    ]
};

export default function EtsyTitleDescriptionGeneratorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <EtsyTitleDescriptionGeneratorPageContent />
        </>
    );
}
