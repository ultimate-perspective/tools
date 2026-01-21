import type { Metadata } from 'next';
import EtsyShopNameGeneratorPageContent from '@/components/etsy-shop-name-generator/EtsyShopNameGeneratorPageContent';
import { Graph, FAQPage, HowTo, WebApplication, WithContext } from 'schema-dts';

const BASE_URL = 'https://www.designinstantly.com';
const PAGE_URL = `${BASE_URL}/free-tools/etsy-shop-name-generator`;

export const metadata: Metadata = {
    title: 'Free Etsy Shop Name Generator | Creative Business Name Ideas',
    description: 'Generate unique, memorable, and available Etsy shop names with our free AI tool. Get creative business name ideas and SEO-friendly shop titles instantly.',
    keywords: ['etsy shop name generator', 'etsy business name', 'etsy store name ideas', 'creative shop names', 'brand name generator', 'etsy seo'],
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Free Etsy Shop Name Generator | Creative Business Name Ideas',
        description: 'Generate unique, memorable, and available Etsy shop names with our free AI tool. Get creative business name ideas instantly.',
        url: PAGE_URL,
        siteName: 'Design Instantly',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free Etsy Shop Name Generator',
        description: 'Generate unique, memorable, and available Etsy shop names with our free AI tool.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

// WebApplication Schema
const webAppSchema: WithContext<WebApplication> = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Etsy Shop Name Generator',
    description: 'Generate unique, memorable, and available Etsy shop names with our free AI tool. Get creative business name ideas and SEO-friendly shop titles instantly.',
    url: PAGE_URL,
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
        url: BASE_URL
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '85',
        bestRating: '5',
        worstRating: '1'
    }
};

// HowTo Schema for the Guide
const howToSchema: WithContext<HowTo> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Choose an Etsy Shop Name',
    description: 'Learn how to generate and choose the perfect Etsy shop name using our free AI tool.',
    totalTime: 'PT2M',
    tool: {
        '@type': 'HowToTool',
        name: 'Etsy Shop Name Generator'
    },
    step: [
        {
            '@type': 'HowToStep',
            name: 'Describe your brand',
            text: 'Enter a description of what you sell, your style, and your target audience.',
            position: 1
        },
        {
            '@type': 'HowToStep',
            name: 'Generate names',
            text: 'Click the generate button to get a list of creative, available-sounding shop names.',
            position: 2
        },
        {
            '@type': 'HowToStep',
            name: 'Choose your style',
            text: 'Review both descriptive names (that say what you sell) and abstract names (that build a brand).',
            position: 3
        },
        {
            '@type': 'HowToStep',
            name: 'Check availability',
            text: 'Search for your favorite names on Etsy to ensure they are available to register.',
            position: 4
        }
    ]
};

// FAQPage Schema
const faqSchema: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What are the rules for Etsy shop names?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Etsy shop names must be 4-20 characters long, contain no spaces or special characters, and must be unique (not used by any other shop, open or closed).'
            }
        },
        {
            '@type': 'Question',
            name: 'Can I change my Etsy shop name later?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes! You can change your shop name as many times as you like before you open your shop. After it\'s open, you can change it up to 5 times.'
            }
        },
        {
            '@type': 'Question',
            name: 'Why are the generated names in CamelCase?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Since Etsy does not allow spaces in shop names, capitalizing the first letter of each word (CamelCase) makes your name much easier for customers to read and remember.'
            }
        },
        {
            '@type': 'Question',
            name: 'What if the name I want is taken?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'If your dream name is taken, try adding a relevant suffix like "Shop", "Studio", "Co", "Design", or "Prints". Our generator provides many variations to help you find an available option.'
            }
        },
        {
            '@type': 'Question',
            name: 'Is this Etsy shop name generator free?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes! This Etsy Shop Name Generator is completely free to use. Generate as many names as you need to find the perfect fit for your brand.'
            }
        }
    ]
};

// Combined Graph
const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [webAppSchema, howToSchema, faqSchema] as Graph['@graph']
};

export default function EtsyShopNameGeneratorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <EtsyShopNameGeneratorPageContent />
        </>
    );
}
