import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function PinterestBoardNameGeneratorFAQ() {
    return (
        <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>What makes a good Pinterest board name?</AccordionTrigger>
                    <AccordionContent>
                        A good Pinterest board name is specific, uses relevant keywords, and clearly describes the content of the board.
                        It should be easy for users to understand what they'll find in the board at a glance.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Why are keywords important for board names?</AccordionTrigger>
                    <AccordionContent>
                        Pinterest is a search engine. Using relevant keywords in your board names helps Pinterest understand what your content is about
                        and show it to users searching for those topics. This increases your visibility and traffic.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Can I change my board names later?</AccordionTrigger>
                    <AccordionContent>
                        Yes, you can change your Pinterest board names at any time. However, it's best to choose a strong, SEO-friendly name from the start
                        to build authority for that topic. If you change it, make sure the new name is still relevant to the existing pins.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Is this tool free?</AccordionTrigger>
                    <AccordionContent>
                        Yes, our Pinterest Board Name Generator is completely free to use. You can generate as many names as you like to find the perfect ones for your profile.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
