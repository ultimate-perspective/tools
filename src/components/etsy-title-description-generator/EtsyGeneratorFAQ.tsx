import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function EtsyGeneratorFAQ() {
    const faqs = [
        {
            question: "Is this tool completely free?",
            answer: "Yes, 100% free. You can generate as many titles and descriptions as you need without any cost or account."
        },
        {
            question: "Does this follow Etsy's SEO rules?",
            answer: "Yes. The AI is trained on Etsy's latest Seller Handbook guidelines, prioritizing short, clear titles without keyword stuffing and benefit-driven descriptions."
        },
        {
            question: "Can I use the generated text for other platforms?",
            answer: "Absolutely! While tailored for Etsy, the content works great for Shopify, Amazon Handmade, or Instagram captions."
        },
        {
            question: "Why should I use multi-word tags?",
            answer: "Etsy allows up to 20 characters per tag. Single words like 'ring' are too competitive. 'Gold stacking ring' is specific and easier to rank for."
        },
        {
            question: "How often should I update my listing titles?",
            answer: "Don't change what's working! But for listings that aren't getting views, try refreshing the title and tags with new keywords generated here."
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
