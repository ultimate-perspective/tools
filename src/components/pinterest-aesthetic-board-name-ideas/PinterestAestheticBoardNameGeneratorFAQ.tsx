import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const faqs = [
    {
        question: "What refers to 'Aesthetic' on Pinterest?",
        answer: "Aesthetic on Pinterest refers to a cohesive visual style or 'vibe'. It's about curating images that share a similar color palette, mood, or theme (like Cottagecore or Dark Academia) to create a pleasing visual experience."
    },
    {
        question: "What are some popular aesthetic names?",
        answer: "Popular aesthetic names include 'Vanilla Girl' (clean, neutral), 'That Girl' (wellness, organized), 'Coquette' (romantic, feminine), and 'Whimsigoth' (moody, magical)."
    },
    {
        question: "Does having an aesthetic board name help SEO?",
        answer: "Yes! Many users search specifically for aesthetic keywords (e.g., 'Aesthetic wallpapers', 'Cute outfit ideas'). Using these terms helps your boards get discovered by people looking for that specific style."
    },
    {
        question: "How do I make my board name look aesthetic?",
        answer: "You can use all lowercase letters, add extra spaces between letters, use specific emojis (✨, ☁️, 🕯️), or use evocative words instead of literal ones (e.g., 'Sips' instead of 'Drinks')."
    }
];

export default function PinterestAestheticBoardNameGeneratorFAQ() {
    return (
        <Card className="mt-12 max-w-7xl mx-auto border-none shadow-none bg-transparent">
            <CardHeader className="pl-0">
                <h2 className="text-2xl font-bold">Common Questions</h2>
            </CardHeader>
            <CardContent className="pl-0 px-0">
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index + 1}`} className="border-b-gray-200 dark:border-b-gray-800">
                            <AccordionTrigger className="text-lg font-medium hover:text-gray-900 dark:hover:text-white hover:no-underline transition-colors text-left">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed text-base pt-2">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
    );
}
