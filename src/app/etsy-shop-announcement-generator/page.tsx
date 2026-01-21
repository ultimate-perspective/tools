import type { Metadata } from 'next';
import EtsyAnnouncementGeneratorPageContent from '@/components/etsy-announcement-generator/EtsyAnnouncementGeneratorPageContent';
import { Graph, FAQPage, HowTo, WebApplication, BreadcrumbList, WithContext } from 'schema-dts';

const BASE_URL = 'https://www.designinstantly.com';
const PAGE_URL = `${BASE_URL}/free-tools/etsy-shop-announcement-generator`;

export const metadata: Metadata = {
    title: 'Free Etsy Shop Announcement Generator | Create Sale & Update Messages',
    description: 'Generate professional Etsy shop announcements in seconds. Create sale announcements, new product updates, policy changes, and vacation messages. 3 unique styles. 100% Free.',
    keywords: [
        'etsy shop announcement',
        'etsy announcement generator',
        'etsy shop announcement examples',
        'etsy sale announcement',
        'etsy new product announcement',
        'etsy vacation mode message',
        'etsy shop update message',
        'etsy policy update announcement',
        'etsy shop banner text',
        'free etsy tools',
        'etsy seller tools',
        'etsy shop message generator'
    ],
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Free Etsy Shop Announcement Generator | Design Instantly',
        description: 'Create professional shop announcements for sales, new products, policy updates, and more. Choose from 3 unique styles to match your brand.',
        url: PAGE_URL,
        siteName: 'Design Instantly',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free Etsy Shop Announcement Generator',
        description: 'Generate professional Etsy shop announcements in seconds. 3 unique styles. 100% Free.',
    },
};

// BreadcrumbList Schema
const breadcrumbSchema: WithContext<BreadcrumbList> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: BASE_URL
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Free Tools',
            item: `${BASE_URL}/free-tools`
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Etsy Shop Announcement Generator',
            item: PAGE_URL
        }
    ]
};

// WebApplication Schema
const webAppSchema: WithContext<WebApplication> = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Etsy Shop Announcement Generator',
    description: 'Free AI-powered tool to generate professional Etsy shop announcements in multiple styles including Hype, Calm, and Pro modes.',
    url: PAGE_URL,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
    },
    author: {
        '@type': 'Organization',
        name: 'Design Instantly',
        url: BASE_URL
    },
    featureList: 'Generate sale announcements, new product updates, policy changes, vacation messages'
};

// HowTo Schema
const howToSchema: WithContext<HowTo> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Generate an Etsy Shop Announcement',
    description: 'Create the perfect shop update message in 3 easy steps using our free AI generator.',
    totalTime: 'PT1M',
    step: [
        {
            '@type': 'HowToStep',
            name: 'Enter Shop Details',
            text: 'Input your Etsy shop name and a brief description of what you sell.',
            position: 1
        },
        {
            '@type': 'HowToStep',
            name: 'Select Update Type',
            text: 'Choose the type of update (Sale, New Product, Restocked, Policy Change, or Custom) and add specific details.',
            position: 2
        },
        {
            '@type': 'HowToStep',
            name: 'Choose Your Style',
            text: 'View 3 generated announcement variations (Hype, Calm, Pro) and copy the one that best fits your brand voice.',
            position: 3
        }
    ]
};

// FAQ Schema - Synced with component FAQs
const faqSchema: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What are the 3 tone modes?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The generator creates announcements in 3 styles: Hype Mode (exciting, for sales/launches), Calm Mode (gentle, for handmade/wellness shops), and Pro Mode (polished, for premium brands).'
            }
        },
        {
            '@type': 'Question',
            name: 'Where does my shop announcement appear on Etsy?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Your announcement appears directly under your shop banner on your main Etsy homepage. It's one of the first things visitors see when they land on your shop."
            }
        },
        {
            '@type': 'Question',
            name: 'How long should my Etsy announcement be?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Keep it scannable! This tool generates 1-3 sentence announcements (100-250 characters) because shoppers skim quickly. Only the first few lines show before a 'Read more' click."
            }
        },
        {
            '@type': 'Question',
            name: 'Does my shop announcement help with Etsy SEO?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes! The text is crawled by Google and Etsy search. Our tool naturally integrates 2-3 high-intent keywords without stuffing, helping your shop get discovered.'
            }
        },
        {
            '@type': 'Question',
            name: 'Is this announcement generator free?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Yes, it's 100% free! Generate as many announcements as you need for sales, new products, vacation notices, or policy updates."
            }
        }
    ]
};

const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [breadcrumbSchema, webAppSchema, howToSchema, faqSchema] as Graph['@graph']
};

export default function EtsyAnnouncementGeneratorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <EtsyAnnouncementGeneratorPageContent />
        </>
    );
}

