import { Metadata } from "next";
import PinterestGeneratorPageContent from "@/components/pinterest-title-description-generator/PinterestGeneratorPageContent";
import { Graph } from "schema-dts";

export const metadata: Metadata = {
    title: "Pinterest Title & Description Generator",
    description: "Create viral-worthy Pinterest titles and descriptions in seconds. Optimized for Etsy, Shopify, and more.",
    alternates: {
        canonical: "https://www.designinstantly.com/free-tools/pinterest-title-description-generator",
    },
};

const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'WebApplication',
            name: 'Pinterest Title & Description Generator',
            description: 'Create viral-worthy Pinterest titles and descriptions in seconds. Optimized for Etsy, Shopify, and more.',
            url: 'https://www.designinstantly.com/free-tools/pinterest-title-description-generator',
            applicationCategory: 'DesignApplication',
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

export default function PinterestGeneratorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PinterestGeneratorPageContent />
        </>
    );
}
