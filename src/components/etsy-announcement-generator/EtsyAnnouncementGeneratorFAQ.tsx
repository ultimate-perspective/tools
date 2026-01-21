import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const faqs = [
    {
        question: "What are the 3 tone modes?",
        answer: "The generator creates announcements in 3 styles: ✨ Hype Mode (exciting, for sales/launches), 🌿 Calm Mode (gentle, for handmade/wellness shops), and 💼 Pro Mode (polished, for premium brands)."
    },
    {
        question: "Where does my shop announcement appear on Etsy?",
        answer: "Your announcement appears directly under your shop banner on your main Etsy homepage. It's one of the first things visitors see when they land on your shop."
    },
    {
        question: "How long should my Etsy announcement be?",
        answer: "Keep it scannable! This tool generates 1-3 sentence announcements (100-250 characters) because shoppers skim quickly. Only the first few lines show before a 'Read more' click."
    },
    {
        question: "Does my shop announcement help with Etsy SEO?",
        answer: "Yes! The text is crawled by Google and Etsy search. Our tool naturally integrates 2-3 high-intent keywords without stuffing, helping your shop get discovered."
    },
    {
        question: "Is this announcement generator free?",
        answer: "Yes, it's 100% free! Generate as many announcements as you need for sales, new products, vacation notices, or policy updates."
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
