import type { Metadata } from 'next';
import InstagramUsernameToolPageContent from '@/components/instagram-username-availability-tool/InstagramUsernameToolPageContent';
import { Graph, FAQPage, HowTo, WebApplication, BreadcrumbList, WithContext } from 'schema-dts';

const BASE_URL = 'https://www.designinstantly.com';
const PAGE_URL = `${BASE_URL}/free-tools/instagram-username-availability-tool`;

export const metadata: Metadata = {
    title: 'Free Instagram Username Availability Checker | Check & Find Usernames',
    description: 'Instantly check if an Instagram username is available. Enter your desired handle and we\'ll generate AI-powered variations and check them all in real time — for free.',
    keywords: ['instagram username checker', 'instagram username availability', 'check instagram username', 'instagram username generator', 'instagram handle checker', 'is instagram username available', 'free instagram username tool'],
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Free Instagram Username Availability Checker | Check & Find Usernames',
        description: 'Instantly check if an Instagram username is available. Enter your desired handle and we\'ll generate AI-powered variations and check them all in real time.',
        url: PAGE_URL,
        siteName: 'Design Instantly',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free Instagram Username Availability Checker',
        description: 'Check if your Instagram username is available. Get AI-powered variations checked in real time.',
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
    name: 'Free Instagram Username Availability Checker',
    description: 'Instantly check if an Instagram username is available. Enter your desired handle and get AI-powered variations all checked in real time.',
    url: PAGE_URL,
    applicationCategory: 'UtilitiesApplication',
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
        ratingCount: '72',
        bestRating: '5',
        worstRating: '1'
    }
};

// HowTo Schema
const howToSchema: WithContext<HowTo> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Check Instagram Username Availability',
    description: 'Check if your desired Instagram username is available and get AI-generated alternatives using our free tool.',
    totalTime: 'PT1M',
    tool: {
        '@type': 'HowToTool',
        name: 'Instagram Username Availability Checker'
    },
    step: [
        {
            '@type': 'HowToStep',
            name: 'Enter your desired username',
            text: 'Type the Instagram username you want in the input field.',
            position: 1
        },
        {
            '@type': 'HowToStep',
            name: 'Click Check Availability',
            text: 'Click the button to generate AI-powered variations and check the usernames simultaneously.',
            position: 2
        },
        {
            '@type': 'HowToStep',
            name: 'Review the results',
            text: 'See which usernames are marked as Available (green) or Taken (red) in real time.',
            position: 3
        },
        {
            '@type': 'HowToStep',
            name: 'Copy and claim your username',
            text: 'Copy your favorite available username and register it on Instagram before someone else does.',
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
            name: 'How does the Instagram username availability check work?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Our system securely checks directly with Instagram to see if the username is currently registered. If a profile exists, the username is taken.'
            }
        },
        {
            '@type': 'Question',
            name: 'Is the availability check 100% accurate?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'It is highly accurate but not guaranteed. Instagram may occasionally rate-limit requests. Always verify by visiting the Instagram profile page directly before making a decision.'
            }
        },
        {
            '@type': 'Question',
            name: 'What are the rules for Instagram usernames?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Instagram usernames must be 1-30 characters long, and can only contain letters, numbers, periods (.), and underscores (_). No spaces or special characters are allowed.'
            }
        },
        {
            '@type': 'Question',
            name: 'How many usernames does the tool check?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The tool checks multiple usernames simultaneously: your original username plus AI-generated creative variations.'
            }
        },
        {
            '@type': 'Question',
            name: 'Is this Instagram username checker free?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes! This tool is completely free to use with no account required. You can check as many usernames as you need.'
            }
        }
    ]
};

// Breadcrumb Schema
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
            name: 'Instagram Username Availability Checker',
            item: PAGE_URL
        }
    ]
};

// Combined Graph
const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [webAppSchema, howToSchema, faqSchema, breadcrumbSchema] as Graph['@graph']
};

export default function InstagramUsernameAvailabilityToolPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <InstagramUsernameToolPageContent />
        </>
    );
}
