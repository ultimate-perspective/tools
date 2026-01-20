"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, Sparkles, Edit, Copy, CheckCircle } from "lucide-react";

const steps = [
    {
        icon: Store,
        title: "Enter Shop Details",
        description: "Add your shop name and describe the products you sell. Be specific about your product types for more relevant FAQs.",
    },
    {
        icon: Sparkles,
        title: "Generate FAQs",
        description: "Click Generate to create 10 professional FAQs tailored to your shop. Our AI considers your product type to suggest relevant questions.",
    },
    {
        icon: Edit,
        title: "Review & Customize",
        description: "Review each FAQ, edit answers if needed, or click Rewrite to get a fresh version. Delete any that don't fit your shop.",
    },
    {
        icon: Copy,
        title: "Copy to Your Shop",
        description: "Copy individual FAQs or all at once. Paste them directly into your Etsy shop policies or listing descriptions.",
    },
];

const tips = [
    {
        title: "Be Specific About Products",
        description: "Instead of 'jewelry', say 'handmade sterling silver earrings'. This helps generate more relevant FAQs.",
    },
    {
        title: "Cover Multiple Categories",
        description: "Good FAQs address shipping, returns, customization, care instructions, and product details.",
    },
    {
        title: "Keep Answers Concise",
        description: "Aim for 2-3 sentences per answer. Buyers want quick, clear information.",
    },
    {
        title: "Update Regularly",
        description: "Review and update your FAQs as your policies or products change to keep information accurate.",
    },
];

export default function EtsyFaqGeneratorGuide() {
    return (
        <div className="mt-16 space-y-12">
            {/* How to Use */}
            <div>
                <h2 className="text-2xl font-bold text-center mb-8">How to Use the FAQ Generator</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <Card key={step.title} className="relative">
                            <CardHeader className="pb-2">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                        <step.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <span className="text-sm font-medium text-muted-foreground">
                                        Step {index + 1}
                                    </span>
                                </div>
                                <CardTitle className="text-lg mt-2">{step.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{step.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Tips */}
            <div>
                <h2 className="text-2xl font-bold text-center mb-8">Tips for Great Etsy FAQs</h2>
                <div className="grid gap-4 md:grid-cols-2">
                    {tips.map((tip) => (
                        <div key={tip.title} className="flex gap-3 p-4 rounded-lg bg-muted/50">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-medium">{tip.title}</h3>
                                <p className="text-sm text-muted-foreground mt-1">{tip.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why FAQs Matter */}
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-xl font-bold mb-4">Why FAQs Matter for Your Etsy Shop</h2>
                    <div className="grid gap-4 md:grid-cols-3 text-sm">
                        <div>
                            <h3 className="font-medium mb-1">Reduce Support Messages</h3>
                            <p className="text-muted-foreground">
                                Clear FAQs answer common questions before buyers need to message you, saving time.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-medium mb-1">Build Buyer Confidence</h3>
                            <p className="text-muted-foreground">
                                Transparent policies and helpful information make buyers more likely to purchase.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-medium mb-1">Improve SEO</h3>
                            <p className="text-muted-foreground">
                                FAQs naturally include keywords that help your listings appear in search results.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
