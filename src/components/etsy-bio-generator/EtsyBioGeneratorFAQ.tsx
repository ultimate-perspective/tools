import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
    {
        question: "What is an Etsy shop bio?",
        answer: "Your Etsy shop bio (found in the 'About' section) is where you tell buyers who you are, what you sell, and why they should trust you. It's one of the first things shoppers see when they visit your store and plays a key role in building trust and driving sales."
    },
    {
        question: "How long should my Etsy bio be?",
        answer: "Etsy allows up to 5,000 characters in your bio, but the sweet spot is 1,500-2,500 characters. This is long enough to tell your story and include SEO keywords, but short enough to keep readers engaged. Our generator targets this optimal range."
    },
    {
        question: "What should I include in my Etsy bio?",
        answer: "A great Etsy bio includes: your shop name and what you sell (for SEO), your origin story or why you started, how your products are made, what makes you unique, and optionally your location. Our generator structures all of this professionally."
    },
    {
        question: "Why does the Etsy bio headline matter?",
        answer: "The first 140 characters of your bio often appear in search results and preview cards. We front-load keywords in your headline so buyers can immediately understand what you offer, improving both click-through rates and SEO."
    },
    {
        question: "Can I use this bio generator if I work with a print partner?",
        answer: "Absolutely! Just mention it in the 'How it's made' field. Our generator will craft honest, transparent language that highlights your design skills while being upfront about your production process. Etsy and buyers both appreciate this honesty."
    },
    {
        question: "What tone should I choose for my Etsy shop bio?",
        answer: "Choose based on your brand and products: 'Heartfelt' for handmade items with personal stories, 'Professional' for established or B2B shops, 'Playful' for fun/quirky products, 'Friendly' for general appeal, and 'Confident' for modern/minimalist brands."
    },
    {
        question: "Does Etsy support bold or italic formatting in the About section?",
        answer: "No, Etsy's About section does not support markdown or rich text formatting. Our generator creates plain text only, using ALL CAPS sparingly for visual hierarchy where appropriate. This ensures your bio displays correctly on Etsy."
    },
    {
        question: "Is this Etsy bio generator free to use?",
        answer: "Yes! This Etsy Bio Generator is completely free to use. We believe every Etsy seller deserves a professional bio, whether you're just starting out or scaling your shop."
    },
    {
        question: "How often should I update my Etsy shop bio?",
        answer: "Review your bio every few months or whenever you add new product lines, reach milestones, or change your process. Keeping it current signals an active, engaged shop to both Etsy's algorithm and potential buyers."
    }
];

export default function EtsyBioGeneratorFAQ() {
    return (
        <Card className="mt-12">
            <CardHeader>
                <h2 id="faq-heading" className="text-2xl font-bold">
                    Frequently Asked Questions About Etsy Shop Bios
                </h2>
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
