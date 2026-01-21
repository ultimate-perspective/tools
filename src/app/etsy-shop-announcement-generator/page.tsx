import type { Metadata } from 'next';
import EtsyAnnouncementGeneratorPageContent from '@/components/etsy-announcement-generator/EtsyAnnouncementGeneratorPageContent';
import { Graph, FAQPage, HowTo, WebApplication, WithContext } from 'schema-dts';

const BASE_URL = 'https://www.designinstantly.com';
const PAGE_URL = `${BASE_URL}/free-tools/etsy-shop-announcement-generator`;

export const metadata: Metadata = {
    title: 'Free Etsy Shop Announcement Generator | 3 Unique Styles',
    description: 'Create professional, engaging Etsy shop announcements in seconds. Choose from Hype, Calm, or Pro styles to match your brand. 100% Free AI Tool.',
    keywords: ['etsy shop announcement', 'etsy announcement generator', 'etsy update text', 'etsy shop policies', 'etsy vacation mode message', 'etsy sale announcement'],
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Free Etsy Shop Announcement Generator | Design Instantly',
        description: 'Generate professional shop updates, policy changes, and sale announcements for your Etsy shop in seconds.',
        url: PAGE_URL,
        siteName: 'Design Instantly',
        type: 'website',
    },
};

// WebApplication Schema
const webAppSchema: WithContext<WebApplication> = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Etsy Shop Announcement Generator',
    description: 'AI-powered tool to generate professional Etsy shop announcements in multiple styles.',
    url: PAGE_URL,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
    },
    author: {
        '@type': 'Organization',
        name: 'Design Instantly',
        url: BASE_URL
    }
};

// HowTo Schema
const howToSchema: WithContext<HowTo> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Generate an Etsy Shop Announcement',
    description: 'Create the perfect shop update message in 3 easy steps.',
    totalTime: 'PT1M',
    step: [
        {
            '@type': 'HowToStep',
            name: 'Enter Shop Details',
            text: 'Input your shop name and a brief description of what you sell.',
            position: 1
        },
        {
            '@type': 'HowToStep',
            name: 'Select Update Type',
            text: 'Choose the type of update (Sale, New Product, Policy Change, etc.) and add details.',
            position: 2
        },
        {
            '@type': 'HowToStep',
            name: 'Choose Your Style',
            text: 'View 3 generated variations (Hype, Calm, Pro) and copy the one that fits your brand.',
            position: 3
        }
    ]
};

// FAQ Schema
const faqSchema: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Where does the shop announcement appear?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Your shop announcement appears directly under your shop banner on your main shop homepage.'
            }
        },
        {
            '@type': 'Question',
            name: 'Does the announcement affect Etsy SEO?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes! The text in your shop announcement is crawled by search engines. Including relevant keywords can help your shop get found.'
            }
        }
    ]
};

const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [webAppSchema, howToSchema, faqSchema] as Graph['@graph']
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
