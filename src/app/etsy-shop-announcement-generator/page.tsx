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

// FAQ Schema - All 5 FAQs from the component
const faqSchema: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Where does the shop announcement appear?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Your shop announcement appears directly under your shop banner on your main shop homepage. It's one of the first things visitors see."
            }
        },
        {
            '@type': 'Question',
            name: 'How often should I update my announcement?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Update it whenever you have news! Important times include: seasonal sales, new product launches, vacation notices, or changes to shipping/return policies.'
            }
        },
        {
            '@type': 'Question',
            name: 'How long can an Etsy shop announcement be?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: "There isn't a strict character limit, but only the first few lines are visible before a 'Read more' click. Keep critical info in the first 1-2 sentences."
            }
        },
        {
            '@type': 'Question',
            name: 'Does the announcement affect Etsy SEO?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes! The text in your shop announcement is crawled by search engines (like Google). Including relevant keywords can help your shop get found.'
            }
        },
        {
            '@type': 'Question',
            name: 'Is this tool free?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, this Etsy Shop Announcement Generator is completely free. Use it as often as you like to keep your shop fresh.'
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

