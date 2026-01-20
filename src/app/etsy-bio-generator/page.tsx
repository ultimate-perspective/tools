import type { Metadata } from 'next';
import EtsyBioGeneratorPageContent from '@/components/etsy-bio-generator/EtsyBioGeneratorPageContent';
import { Graph, FAQPage, HowTo, WebApplication, WithContext } from 'schema-dts';

const BASE_URL = 'https://www.designinstantly.com';
const PAGE_URL = `${BASE_URL}/free-tools/etsy-bio-generator`;

export const metadata: Metadata = {
    title: 'Free Etsy Bio Generator | Create Professional Shop About Section in Seconds',
    description: 'Generate a compelling, SEO-optimized Etsy shop bio that tells your story and converts visitors into buyers. Free AI-powered About section generator for Etsy sellers.',
    keywords: ['etsy bio generator', 'etsy about section', 'etsy shop bio', 'etsy seller tools', 'etsy seo', 'shop story generator', 'etsy about me'],
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Free Etsy Bio Generator | Create Your Shop About Section',
        description: 'Generate a compelling, SEO-optimized Etsy shop bio that tells your story and converts visitors into buyers. Free for all Etsy sellers.',
        url: PAGE_URL,
        siteName: 'Design Instantly',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free Etsy Bio Generator',
        description: 'Generate a compelling, SEO-optimized Etsy shop bio in seconds. Free AI tool for Etsy sellers.',
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
    name: 'Free Etsy Bio Generator',
    description: 'Generate a compelling, SEO-optimized Etsy shop bio that tells your story and converts visitors into buyers. Free AI-powered About section generator for Etsy sellers.',
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
        ratingValue: '4.8',
        ratingCount: '127',
        bestRating: '5',
        worstRating: '1'
    }
};

// HowTo Schema for the Guide
const howToSchema: WithContext<HowTo> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Create an Etsy Shop Bio',
    description: 'Learn how to create a professional, SEO-optimized Etsy shop bio using our free generator tool.',
    totalTime: 'PT2M',
    tool: {
        '@type': 'HowToTool',
        name: 'Etsy Bio Generator'
    },
    step: [
        {
            '@type': 'HowToStep',
            name: 'Enter your shop basics',
            text: 'Start with your shop name and what you sell. Be specific about your products - for example, "Handmade pressed flower jewelry" instead of "unique gifts".',
            position: 1
        },
        {
            '@type': 'HowToStep',
            name: 'Share your story',
            text: 'Tell us why you started and how your products are made. Etsy buyers love authentic stories and transparency about your craft process.',
            position: 2
        },
        {
            '@type': 'HowToStep',
            name: 'Choose your tone',
            text: 'Select a writing style that matches your brand. Options include Heartfelt for handmade items, Professional for established shops, or Playful for fun products.',
            position: 3
        },
        {
            '@type': 'HowToStep',
            name: 'Generate and copy',
            text: 'Click generate to create your bio. Copy the headline and full bio directly into your Etsy shop\'s About section.',
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
            name: 'What is an Etsy shop bio?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Your Etsy shop bio (found in the "About" section) is where you tell buyers who you are, what you sell, and why they should trust you. It\'s one of the first things shoppers see when they visit your store and plays a key role in building trust and driving sales.'
            }
        },
        {
            '@type': 'Question',
            name: 'How long should my Etsy bio be?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Etsy allows up to 5,000 characters in your bio, but the sweet spot is 1,500-2,500 characters. This is long enough to tell your story and include SEO keywords, but short enough to keep readers engaged. Our generator targets this optimal range.'
            }
        },
        {
            '@type': 'Question',
            name: 'What should I include in my Etsy bio?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'A great Etsy bio includes: your shop name and what you sell (for SEO), your origin story or why you started, how your products are made, what makes you unique, and optionally your location. Our generator structures all of this professionally.'
            }
        },
        {
            '@type': 'Question',
            name: 'Why does the headline matter?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The first 140 characters of your bio often appear in search results and preview cards. We front-load keywords in your headline so buyers can immediately understand what you offer, improving both click-through rates and SEO.'
            }
        },
        {
            '@type': 'Question',
            name: 'Can I use this if I work with a print partner?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Absolutely! Just mention it in the "How it\'s made" field. Our generator will craft honest, transparent language that highlights your design skills while being upfront about your production process. Etsy and buyers both appreciate this honesty.'
            }
        },
        {
            '@type': 'Question',
            name: 'What tone should I choose?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Choose based on your brand and products: "Heartfelt" for handmade items with personal stories, "Professional" for established or B2B shops, "Playful" for fun/quirky products, "Friendly" for general appeal, and "Confident" for modern/minimalist brands.'
            }
        },
        {
            '@type': 'Question',
            name: 'Does Etsy support bold or italic formatting?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No, Etsy\'s About section does not support markdown or rich text formatting. Our generator creates plain text only, using ALL CAPS sparingly for visual hierarchy where appropriate. This ensures your bio displays correctly on Etsy.'
            }
        },
        {
            '@type': 'Question',
            name: 'Is this Etsy bio generator free?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes! This Etsy Bio Generator is completely free to use. We believe every Etsy seller deserves a professional bio, whether you\'re just starting out or scaling your shop.'
            }
        },
        {
            '@type': 'Question',
            name: 'How often should I update my Etsy bio?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Review your bio every few months or whenever you add new product lines, reach milestones, or change your process. Keeping it current signals an active, engaged shop to both Etsy\'s algorithm and potential buyers.'
            }
        }
    ]
};

// Combined Graph
const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [webAppSchema, howToSchema, faqSchema] as Graph['@graph']
};

export default function EtsyBioGeneratorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <EtsyBioGeneratorPageContent />
        </>
    );
}
