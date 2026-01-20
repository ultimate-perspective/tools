"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "How does the Etsy FAQ Generator work?",
        answer: "Our AI analyzes your shop name and product description to generate 10 relevant, professional FAQs. The system considers common buyer questions for your product category and creates tailored answers that address typical concerns about shipping, returns, customization, and more.",
    },
    {
        question: "Can I edit the generated FAQs?",
        answer: "Yes! Click on any answer to edit it directly. You can also use the 'Rewrite' button to get a fresh AI-generated version of any FAQ. This lets you customize the tone and details to match your shop's voice perfectly.",
    },
    {
        question: "How many FAQs can I generate?",
        answer: "Each generation creates 10 FAQs. You can click 'Add more FAQs' to generate additional questions. There's no limit to how many you can create, so keep generating until you have comprehensive coverage of all buyer questions.",
    },
    {
        question: "Where should I use these FAQs on Etsy?",
        answer: "You can add FAQs to your shop policies, individual listing descriptions, or your shop announcement. Many sellers also create a dedicated FAQ section in their shop's About page. Consider adding the most relevant FAQs to each listing.",
    },
    {
        question: "What categories of FAQs are generated?",
        answer: "Our generator creates FAQs across multiple categories including Customization, Shipping, Policies, Digital Products, Materials, Sizing, Care, Ordering, Payment, and General questions. The mix depends on your product type.",
    },
    {
        question: "Is this FAQ generator really free?",
        answer: "Yes! The Etsy FAQ Generator is completely free to use. Generate as many FAQs as you need for your shop without any cost or signup required.",
    },
    {
        question: "Will the FAQs be unique to my shop?",
        answer: "Yes, the AI generates custom FAQs based on your specific shop name and products. While the structure may be similar to help with common questions, the content is tailored to what you sell.",
    },
    {
        question: "How do I know which FAQs to keep?",
        answer: "Focus on FAQs that address questions you frequently receive from buyers. The 'Needs Review' status helps you track which FAQs you haven't yet approved. Once you review and are happy with a FAQ, copying it marks it as 'Ready'.",
    },
];

export default function EtsyFaqGeneratorFAQ() {
    return (
        <Card className="mt-16">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">
                    Frequently Asked Questions
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                        >
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
