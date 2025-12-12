import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, ExternalLink } from "lucide-react";

export default function EtsyGeneratorGuidelines() {
    return (
        <Card className="mt-8 border-orange-100 dark:border-orange-900/20">
            <CardHeader>
                <CardTitle className="text-2xl font-bold flex flex-col sm:flex-row sm:items-center gap-3">
                    <span>Etsy Seller Handbook Guidelines</span>
                    <span className="w-fit text-sm font-normal px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
                        Simplified
                    </span>
                </CardTitle>
                <p className="text-sm text-muted-foreground pt-1">
                    Based on the official <a href="https://www.etsy.com/seller-handbook/article/the-ultimate-guide-to-etsy-search/366469415790" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Ultimate Guide to Etsy Search <ExternalLink className="w-3 h-3" /></a>
                </p>
            </CardHeader>
            <CardContent className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                    <h3 className="font-semibold text-lg border-b pb-2">Listing Titles</h3>
                    <ul className="space-y-3">
                        <li className="flex gap-3 text-sm text-muted-foreground">
                            <Check className="w-5 h-5 text-green-500 shrink-0" />
                            <span>
                                <strong className="text-foreground">First 40 chars matter most.</strong> Searchers see this first. Put your main keywords (what it is) right at the start.
                            </span>
                        </li>
                        <li className="flex gap-3 text-sm text-muted-foreground">
                            <Check className="w-5 h-5 text-green-500 shrink-0" />
                            <span>
                                <strong className="text-foreground">Short & Clear.</strong> While you have 140 chars, concise titles often convert better. Avoid "keyword salad".
                            </span>
                        </li>
                        <li className="flex gap-3 text-sm text-muted-foreground">
                            <X className="w-5 h-5 text-red-500 shrink-0" />
                            <span>
                                <strong className="text-foreground">Don't repeat words.</strong> "Blue mug, ceramic mug, coffee mug" wastes space. "Blue Ceramic Coffee Mug" covers all bases.
                            </span>
                        </li>
                        <li className="flex gap-3 text-sm text-muted-foreground">
                            <X className="w-5 h-5 text-red-500 shrink-0" />
                            <span>
                                <strong className="text-foreground">Avoid All Caps.</strong> It looks like shouting and is harder to read.
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="font-semibold text-lg border-b pb-2">Descriptions & Tags</h3>
                    <ul className="space-y-3">
                        <li className="flex gap-3 text-sm text-muted-foreground">
                            <Check className="w-5 h-5 text-green-500 shrink-0" />
                            <span>
                                <strong className="text-foreground">First 160 chars = Google SEO.</strong> Your first sentence is your meta description. Make it count with keywords and benefits.
                            </span>
                        </li>
                        <li className="flex gap-3 text-sm text-muted-foreground">
                            <Check className="w-5 h-5 text-green-500 shrink-0" />
                            <span>
                                <strong className="text-foreground">Use all 13 tags.</strong> Maximize visibility.
                            </span>
                        </li>
                        <li className="flex gap-3 text-sm text-muted-foreground">
                            <Check className="w-5 h-5 text-green-500 shrink-0" />
                            <span>
                                <strong className="text-foreground">Multi-word "Long Tail" Tags.</strong> "Gold ring" is too competitive. "Minimalist gold stacking ring" gets you found by specific buyers.
                            </span>
                        </li>
                        <li className="flex gap-3 text-sm text-muted-foreground">
                            <X className="w-5 h-5 text-red-500 shrink-0" />
                            <span>
                                <strong className="text-foreground">No Repetitive Tags.</strong> If "Blue Mug" is in your title, you don't need it as a tag (though it doesn't hurt). Focus on unique attributes not in the title.
                            </span>
                        </li>
                    </ul>
                </div>
            </CardContent>
        </Card>
    );
}
