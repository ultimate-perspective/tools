import type { Metadata } from 'next';
import EtsyFaqGeneratorPageContent from '@/components/etsy-faq-generator/EtsyFaqGeneratorPageContent';
import { Graph, FAQPage, HowTo, WebApplication, WithContext } from 'schema-dts';

const BASE_URL = 'https://www.designinstantly.com';
const PAGE_URL = `${BASE_URL}/free-tools/etsy-faq-generator`;

export const metadata: Metadata = {
    title: 'Free Etsy FAQ Generator | Create Professional Shop FAQs in Seconds',
    description: 'Generate professional, helpful FAQs for your Etsy shop. Reduce buyer questions, build trust, and improve conversions with AI-powered FAQ generation.',
    keywords: ['etsy faq generator', 'etsy shop faqs', 'etsy policies', 'etsy seller tools', 'etsy questions answers', 'shop faq template', 'etsy help'],
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Free Etsy FAQ Generator | Create Professional Shop FAQs',
        description: 'Generate professional, helpful FAQs for your Etsy shop. Reduce buyer questions and build trust with clear answers.',
        url: PAGE_URL,
        siteName: 'Design Instantly',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free Etsy FAQ Generator',
        description: 'Generate professional FAQs for your Etsy shop in seconds. Free AI tool for Etsy sellers.',
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
    name: 'Free Etsy FAQ Generator',
    description: 'Generate professional, helpful FAQs for your Etsy shop. Reduce buyer questions, build trust, and improve conversions with AI-powered FAQ generation.',
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
        ratingCount: '89',
        bestRating: '5',
        worstRating: '1'
    }
};

// HowTo Schema for the Guide
const howToSchema: WithContext<HowTo> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Create Etsy Shop FAQs',
    description: 'Learn how to create professional FAQs for your Etsy shop using our free generator tool.',
    totalTime: 'PT3M',
    tool: {
        '@type': 'HowToTool',
        name: 'Etsy FAQ Generator'
    },
    step: [
        {
            '@type': 'HowToStep',
            name: 'Enter shop details',
            text: 'Add your shop name and describe the products you sell. Be specific about your product types for more relevant FAQs.',
            position: 1
        },
        {
            '@type': 'HowToStep',
            name: 'Generate FAQs',
            text: 'Click Generate to create 10 professional FAQs tailored to your shop. Our AI considers your product type to suggest relevant questions.',
            position: 2
        },
        {
            '@type': 'HowToStep',
            name: 'Review and customize',
            text: 'Review each FAQ, edit answers if needed, or click Rewrite to get a fresh version. Delete any that don\'t fit your shop.',
            position: 3
        },
        {
            '@type': 'HowToStep',
            name: 'Copy to your shop',
            text: 'Copy individual FAQs or all at once. Paste them directly into your Etsy shop policies or listing descriptions.',
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
            name: 'How does the Etsy FAQ Generator work?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Our AI analyzes your shop name and product description to generate 10 relevant, professional FAQs. The system considers common buyer questions for your product category and creates tailored answers that address typical concerns about shipping, returns, customization, and more.'
            }
        },
        {
            '@type': 'Question',
            name: 'Can I edit the generated FAQs?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes! Click on any answer to edit it directly. You can also use the Rewrite button to get a fresh AI-generated version of any FAQ. This lets you customize the tone and details to match your shop\'s voice perfectly.'
            }
        },
        {
            '@type': 'Question',
            name: 'How many FAQs can I generate?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Each generation creates 10 FAQs. You can click Add more FAQs to generate additional questions. There\'s no limit to how many you can create, so keep generating until you have comprehensive coverage of all buyer questions.'
            }
        },
        {
            '@type': 'Question',
            name: 'Where should I use these FAQs on Etsy?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'You can add FAQs to your shop policies, individual listing descriptions, or your shop announcement. Many sellers also create a dedicated FAQ section in their shop\'s About page. Consider adding the most relevant FAQs to each listing.'
            }
        },
        {
            '@type': 'Question',
            name: 'What categories of FAQs are generated?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Our generator creates FAQs across multiple categories including Customization, Shipping, Policies, Digital Products, Materials, Sizing, Care, Ordering, Payment, and General questions. The mix depends on your product type.'
            }
        },
        {
            '@type': 'Question',
            name: 'Is this FAQ generator really free?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes! The Etsy FAQ Generator is completely free to use. Generate as many FAQs as you need for your shop without any cost or signup required.'
            }
        },
        {
            '@type': 'Question',
            name: 'Will the FAQs be unique to my shop?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, the AI generates custom FAQs based on your specific shop name and products. While the structure may be similar to help with common questions, the content is tailored to what you sell.'
            }
        },
        {
            '@type': 'Question',
            name: 'How do I know which FAQs to keep?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Focus on FAQs that address questions you frequently receive from buyers. The Needs Review status helps you track which FAQs you haven\'t yet approved. Once you review and are happy with a FAQ, copying it marks it as Ready.'
            }
        }
    ]
};

// Combined Graph
const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [webAppSchema, howToSchema, faqSchema] as Graph['@graph']
};

export default function EtsyFaqGeneratorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <EtsyFaqGeneratorPageContent />
        </>
    );
}
