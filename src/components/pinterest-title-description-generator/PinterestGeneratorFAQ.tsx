import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function PinterestGeneratorFAQ() {
    const faqs = [
        {
            question: "is this actually free?",
            answer: "Yep. No account needed."
        },
        {
            question: "can I just paste the Etsy or Shopify Product URL instead of writing a description?",
            answer: "Definitely. The generator pulls info from the page and writes everything based on your settings."
        },
        {
            question: "does this help with Pinterest SEO?",
            answer: "Titles and descriptions include relevant keywords, but you can still edit them to match your niche even better."
        },
        {
            question: "should I use hashtags on Pinterest?",
            answer: "Some creators still do, some don’t. That’s why the toggle exists. Test both."
        },
        {
            question: "can I choose different tones for different pins?",
            answer: "Yes. Switch tones anytime and regenerate instantly."
        },
        {
            question: "does this work for all product types?",
            answer: "Yep. Handmade, POD, digital products, jewelry, home decor, templates, everything."
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
