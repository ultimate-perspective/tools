import type { Metadata } from 'next';
import PinterestBoardNameGeneratorPageContent from '@/components/pinterest-board-name-generator/PinterestBoardNameGeneratorPageContent';
import { Graph, FAQPage, HowTo, WebApplication, WithContext } from 'schema-dts';

const BASE_URL = 'https://www.designinstantly.com';
const PAGE_URL = `${BASE_URL}/free-tools/pinterest-board-name-generator`;

export const metadata: Metadata = {
    title: 'Free Pinterest Board Name Generator | Aesthetic & SEO Names',
    description: 'Generate unique, aesthetic, and SEO-friendly Pinterest board names with our free AI tool. Get more views and followers with optimized board titles.',
    keywords: ['pinterest board name generator', 'pinterest board names', 'aesthetic pinterest board names', 'pinterest seo', 'board title ideas', 'pinterest name ideas'],
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Free Pinterest Board Name Generator | Aesthetic & SEO Names',
        description: 'Generate unique, aesthetic, and SEO-friendly Pinterest board names with our free AI tool. Get more views and followers with optimized board titles.',
        url: PAGE_URL,
        siteName: 'Design Instantly',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free Pinterest Board Name Generator',
        description: 'Generate unique, aesthetic, and SEO-friendly Pinterest board names with our free AI tool.',
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
    name: 'Free Pinterest Board Name Generator',
    description: 'Generate unique, aesthetic, and SEO-friendly Pinterest board names with our free AI tool.',
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
};

// HowTo Schema for the Guide
const howToSchema: WithContext<HowTo> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Choose the Perfect Pinterest Board Name',
    description: 'Learn how to generate and choose the perfect Pinterest board name using our free AI tool.',
    totalTime: 'PT2M',
    tool: {
        '@type': 'HowToTool',
        name: 'Pinterest Board Name Generator'
    },
    step: [
        {
            '@type': 'HowToStep',
            name: 'Enter Board Topic',
            text: 'Descibe what your board will be about in the text area.',
            position: 1
        },
        {
            '@type': 'HowToStep',
            name: 'Select Language',
            text: 'Choose your preferred language for the board names.',
            position: 2
        },
        {
            '@type': 'HowToStep',
            name: 'Generate Names',
            text: 'Click the generate button to get relevant board name ideas in different tones.',
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
            name: 'What makes a good Pinterest board name?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'A good Pinterest board name is specific, uses relevant keywords, and clearly describes the content of the board.'
            }
        },
        {
            '@type': 'Question',
            name: 'Why are keywords important for board names?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Pinterest is a visual search engine. Keywords help your content get discovered by users searching for those topics.'
            }
        },
        {
            '@type': 'Question',
            name: 'Is this tool free?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes! Our Pinterest Board Name Generator is completely free to use.'
            }
        }
    ]
};

// Combined Graph
const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [webAppSchema, howToSchema, faqSchema] as Graph['@graph']
};

export default function PinterestBoardNameGeneratorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PinterestBoardNameGeneratorPageContent />
        </>
    );
}
