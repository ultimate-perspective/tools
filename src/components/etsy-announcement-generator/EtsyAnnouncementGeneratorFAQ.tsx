import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const faqs = [
    {
        question: "Where does the shop announcement appear?",
        answer: "Your shop announcement appears directly under your shop banner on your main shop homepage. It's one of the first things visitors see."
    },
    {
        question: "How often should I update my announcement?",
        answer: "Update it whenever you have news! Important times include: seasonal sales, new product launches, vacation notices, or changes to shipping/return policies."
    },
    {
        question: "How long can an Etsy shop announcement be?",
        answer: "There isn't a strict character limit, but only the first few lines are visible before a 'Read more' click. Keep critical info in the first 1-2 sentences."
    },
    {
        question: "Does the announcement affect Etsy SEO?",
        answer: "Yes! The text in your shop announcement is crawled by search engines (like Google). Including relevant keywords can help your shop get found."
    },
    {
        question: "Is this tool free?",
        answer: "Yes, this Etsy Shop Announcement Generator is completely free. Use it as often as you like to keep your shop fresh."
    }
];

export default function EtsyAnnouncementGeneratorFAQ() {
    return (
        <Card className="mt-12 max-w-7xl mx-auto">
            <CardHeader>
                <h2 id="faq-heading" className="text-2xl font-bold">Frequently Asked Questions</h2>
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
