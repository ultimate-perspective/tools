import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const faqs = [
    {
        question: "What are the rules for Etsy shop names?",
        answer: "Etsy shop names must be 4-20 characters long, contain no spaces or special characters, and must be unique (not used by any other shop, open or closed)."
    },
    {
        question: "Can I change my Etsy shop name later?",
        answer: "Yes! You can change your shop name as many times as you like before you open your shop. After it's open, you can change it up to 5 times."
    },
    {
        question: "Why are the generated names in CamelCase?",
        answer: "Since Etsy does not allow spaces in shop names, capitalizing the first letter of each word (CamelCase) makes your name much easier for customers to read and remember (e.g., \"MoonlightMacrame\" vs \"moonlightmacrame\")."
    },
    {
        question: "What if the name I want is taken?",
        answer: "If your dream name is taken, try adding a relevant suffix like \"Shop\", \"Studio\", \"Co\", \"Design\", or \"Prints\". Our generator provides many variations to help you find an available option."
    },
    {
        question: "Is this tool free?",
        answer: "Yes, this Etsy Shop Name Generator is 100% free to use. Generate as many names as you need to find the perfect fit for your brand."
    }
];

export default function EtsyShopNameGeneratorFAQ() {
    return (
        <Card className="mt-12 max-w-7xl mx-auto">
            <CardHeader>
                <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index + 1}`}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
    );
}
