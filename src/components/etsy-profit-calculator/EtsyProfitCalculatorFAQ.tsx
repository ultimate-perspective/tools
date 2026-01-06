import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function EtsyProfitCalculatorFAQ() {
    const faqs = [
        // Basics of Etsy fees
        {
            question: "What fees does Etsy charge on each sale?",
            answer: "Etsy usually charges a 0.20 USD listing fee per listing, a 6.5% transaction fee on the order total (item + shipping + gift wrap, after discounts), and a separate payment processing fee that depends on your country."
        },
        {
            question: "What is the difference between the transaction fee and the payment processing fee?",
            answer: "The transaction fee is Etsy’s platform commission (6.5% of the order total), while the payment processing fee is what Etsy charges to handle the card/PayPal payment (a percent + flat amount, like 3% + 0.25 in the US), and both are charged on the same order."
        },
        {
            question: "Does Etsy charge fees on shipping too?",
            answer: "Yes, Etsy includes the shipping you charge the buyer in the “order total,” so both the 6.5% transaction fee and the payment processing fee are also applied to shipping, not just the item price."
        },
        {
            question: "Do I pay Etsy fees if the buyer uses a coupon or discount?",
            answer: "Yes, fees are based on the discounted price the buyer actually pays, so your coupon lowers revenue and fees, but also reduces your profit if you do not adjust pricing."
        },
        {
            question: "Are Etsy listing fees per item or per order?",
            answer: "Listing fees are charged per listing you publish or renew, not per order, and your calculator simply spreads that 0.20 USD cost into the fee breakdown for the sale you are analysing."
        },

        // Offsite Ads and Etsy Ads
        {
            question: "What is the difference between Etsy Ads and Offsite Ads in this calculator?",
            answer: "Etsy Ads (onsite) are ad campaigns you run inside Etsy where you set a daily budget, while Offsite Ads are external ads Etsy runs on Google and other sites where you pay 12–15% extra only when a sale is attributed to those ads."
        },
        {
            question: "When should I select the 15% vs 12% Offsite Ads fee?",
            answer: "If your shop made under 10,000 USD in the last 12 months, Etsy charges 15% Offsite Ads fee; if you made 10,000 USD or more, Etsy automatically reduces it to 12%, and the calculator’s “revenue tier” field reflects this."
        },
        {
            question: "Does this calculator assume every order pays Offsite Ads fees?",
            answer: "No, Offsite Ads are only charged on orders that Etsy attributes to those ads, so you should enable Offsite Ads in the calculator only when estimating profit for a sale that likely came from those ads or for “worst‑case” planning."
        },
        {
            question: "Why do my real Etsy Offsite Ads charges sometimes differ from the calculator?",
            answer: "Actual Offsite Ads fees can vary because Etsy attributes orders based on their own tracking window, includes taxes in some regions, and may convert currencies, so your statement may not match a simple percentage of item price alone."
        },

        // Costs, profit, and fields in the tool
        {
            question: "What is “Item Cost” in this calculator?",
            answer: "“Item Cost” is your own cost to make or buy the product (materials, labour, packaging per unit), and it is not charged by Etsy; it is used to calculate your real profit after Etsy fees."
        },
        {
            question: "What is the difference between “Shipping Charged” and “Shipping Cost”?",
            answer: "“Shipping Charged” is what the customer pays you for shipping (part of your revenue), while “Shipping Cost” is what you actually pay the carrier or fulfillment provider, and the calculator separates these so you can see if you are losing money on shipping."
        },
        {
            question: "How is “Estimated Net Profit per sale” calculated?",
            answer: "Net profit per sale = (Selling price + shipping charged − discounts) − all Etsy fees − your item cost − your shipping cost, and the profit % is this net profit divided by total revenue."
        },
        {
            question: "Why does the calculator show a loss even though my Etsy balance shows money coming in?",
            answer: "Your Etsy balance only shows what is deposited after Etsy fees, while the calculator subtracts both Etsy fees and your product/shipping costs, so a positive deposit can still be a real loss if your costs are high."
        },
        {
            question: "How should I use this tool to set my prices?",
            answer: "You can plug in your true costs, then adjust the selling price or shipping charged until the net profit and margin look healthy, using the fee breakdown to see whether you should change price, shipping, or ad strategy."
        },
        {
            question: "Why might my actual Etsy statement not match this estimate exactly?",
            answer: "Etsy’s live statements can differ slightly due to currency conversion, taxes/VAT, refunds, rounding, and multiple items per order, so this calculator is for planning and estimating rather than matching every cent on your invoice."
        }
    ];

    return (
        <Card className="mt-8">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-medium">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
    );
}
