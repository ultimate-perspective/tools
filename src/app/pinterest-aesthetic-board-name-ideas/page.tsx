import type { Metadata } from 'next';
import PinterestAestheticBoardNameGeneratorPageContent from '@/components/pinterest-aesthetic-board-name-ideas/PinterestAestheticBoardNameGeneratorPageContent';
import { Graph, FAQPage, HowTo, WebApplication, WithContext } from 'schema-dts';

const BASE_URL = 'https://www.designinstantly.com';
const PAGE_URL = `${BASE_URL}/free-tools/pinterest-aesthetic-board-name-ideas`;

export const metadata: Metadata = {
    title: 'Aesthetic Pinterest Board Names | Soft & Moody Ideas',
    description: 'Generate 20+ aesthetic Pinterest board names tailored to your vibe. Find soft, dark academia, minimalist, and ethereal board title ideas instantly.',
    keywords: ['aesthetic pinterest board names', 'cute pinterest board names', 'soft aesthetic names', 'dark academia board names', 'minimalist pinterest names'],
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Aesthetic Pinterest Board Names | Soft & Moody Ideas',
        description: 'Generate 20+ aesthetic Pinterest board names tailored to your vibe. Find soft, dark academia, minimalist, and ethereal board title ideas instantly.',
        url: PAGE_URL,
        siteName: 'Design Instantly',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Aesthetic Pinterest Board Name Ideas',
        description: 'Generate unique, aesthetic Pinterest board names with our free AI tool.',
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
    name: 'Aesthetic Pinterest Board Name Ideas Generator',
    description: 'Generate unique, aesthetic Pinterest board names tailored to sub-styles like Soft, Dark, and Minimalist.',
    url: PAGE_URL,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
    },
    featureList: [
        'Generates names in 4 aesthetic sub-categories',
        'Soft/Cozy, Dark/Moody, Minimalist, Fantasy tones',
        'One-click copy to clipboard',
        'Instant AI generation'
    ],
    browserRequirements: 'Requires JavaScript. Works on all modern browsers.',
    softwareVersion: '1.0',
    author: {
        '@type': 'Organization',
        name: 'Design Instantly',
        url: BASE_URL
    },
};

// HowTo Schema for the Guide
const howToSchema: WithContext<HowTo> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Find Aesthetic Pinterest Board Names',
    description: 'Learn how to generate the perfect aesthetic board name for your profile.',
    totalTime: 'PT1M',
    estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'USD',
        value: '0'
    },
    tool: {
        '@type': 'HowToTool',
        name: 'Aesthetic Pinterest Board Name Generator'
    },
    step: [
        {
            '@type': 'HowToStep',
            name: 'Enter Your Topic',
            text: 'Type a keyword describing your board (e.g., "Room Decor", "Outfits").',
            position: 1
        },
        {
            '@type': 'HowToStep',
            name: 'Select Language',
            text: 'Choose your desired language.',
            position: 2
        },
        {
            '@type': 'HowToStep',
            name: 'Generate Aesthetic Names',
            text: 'Click generate to get 20+ names categorized by aesthetic vibe (Soft, Dark, Minimalist, Fantasy).',
            position: 3
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
            name: 'What defines an aesthetic board name?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Aesthetic board names often use lower case, emojis, extra spacing, or poetic words to evoke a specific mood or feeling.'
            }
        },
        {
            '@type': 'Question',
            name: 'How do I choose a board name?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Consider the "vibe" of your pins. If they are light and airy, choose a Soft aesthetic name. If they are edgy, go for Dark/Moody.'
            }
        }
    ]
};

// Combined Graph
const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [webAppSchema, howToSchema, faqSchema] as Graph['@graph']
};

export default function PinterestAestheticBoardNameGeneratorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PinterestAestheticBoardNameGeneratorPageContent />
        </>
    );
}
