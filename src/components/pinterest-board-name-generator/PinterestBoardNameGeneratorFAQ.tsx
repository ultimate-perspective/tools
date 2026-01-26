import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const faqs = [
    {
        question: "What makes a good Pinterest board name?",
        answer: "A good Pinterest board name is specific, uses relevant keywords, and clearly describes the content of the board. It should be easy for users to understand what they'll find in the board at a glance."
    },
    {
        question: "Why are keywords important for board names?",
        answer: "Pinterest is a visual search engine. Using relevant keywords in your board names helps Pinterest understand what your content is about and show it to users searching for those topics. This increases your visibility and traffic."
    },
    {
        question: "Can I change my board names later?",
        answer: "Yes, you can change your Pinterest board names at any time. However, it's best to choose a strong, SEO-friendly name from the start to build authority for that topic. If you change it, make sure the new name is still relevant to the existing pins."
    },
    {
        question: "Is this tool free?",
        answer: "Yes! Our Pinterest Board Name Generator is completely free to use. You can generate as many names as you like to find the perfect ones for your profile."
    }
];

export default function PinterestBoardNameGeneratorFAQ() {
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
