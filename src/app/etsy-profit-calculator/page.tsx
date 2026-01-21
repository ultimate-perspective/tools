import EtsyProfitCalculatorContent from '@/components/etsy-profit-calculator/EtsyProfitCalculatorContent';
import type { Metadata } from 'next';
import { Graph } from 'schema-dts';
import { etsyProfitCalculatorFaqList } from '@/components/etsy-profit-calculator/EtsyProfitCalculatorFAQ';

export const metadata: Metadata = {
    title: 'Free Etsy Profit Calculator | Design Instantly',
    description: 'Calculate your exact Etsy fees, profit margins, and actual earnings per sale with our free Etsy Profit Calculator. Updated for 2026 fees.',
    alternates: {
        canonical: 'https://www.designinstantly.com/free-tools/etsy-profit-calculator',
    },
};

const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'WebApplication',
            name: 'Etsy Profit Calculator',
            description: 'A free tool to calculate Etsy fees, profit margins, and breakeven points for sellers.',
            url: 'https://www.designinstantly.com/free-tools/etsy-profit-calculator',
            image: 'https://designinstantly.com/free-tools/logo/png/icon_light.png',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Any',
            offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
            },
            featureList: [
                'Calculate Etsy Transaction Fees',
                'Calculate Listing Fees',
                'Estimate Profit Margins',
                'Offsite Ads Fee Calculation',
                'Shipping Cost Analysis'
            ],
            browserRequirements: 'Requires JavaScript. Works on all modern browsers.',
            softwareVersion: '1.0',
            author: {
                '@type': 'Organization',
                name: 'Design Instantly',
                url: 'https://www.designinstantly.com'
            }
        },
        {
            '@type': 'FAQPage',
            mainEntity: etsyProfitCalculatorFaqList.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                },
            })),
        }
    ]
};

export default function EtsyProfitCalculatorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <EtsyProfitCalculatorContent />
        </>
    );
}
