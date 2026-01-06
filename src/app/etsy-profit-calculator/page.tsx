import EtsyProfitCalculatorContent from '@/components/etsy-profit-calculator/EtsyProfitCalculatorContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Free Etsy Profit Calculator',
    description: 'Calculate your Etsy profit in seconds.',
};

export default function EtsyProfitCalculatorPage() {
    return (
        <EtsyProfitCalculatorContent />
    );
}
