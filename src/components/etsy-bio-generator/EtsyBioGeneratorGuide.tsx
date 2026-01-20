import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EtsyBioGeneratorGuide() {
    return (
        <Card className="mt-12">
            <CardHeader>
                <h2 id="guide-heading" className="text-2xl font-bold">
                    How to Use This Free Etsy Bio Generator{" "}
                    <span className="text-muted-foreground font-normal text-lg">(Quick Guide)</span>
                </h2>
            </CardHeader>
            <CardContent className="space-y-8">
                <p className="text-muted-foreground">
                    Your Etsy bio is often the first thing buyers read about you. This tool creates a professional, SEO-optimized About section that builds trust and tells your unique story.
                </p>

                <ol className="space-y-6 list-none p-0">
                    <li className="grid gap-2">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            <Badge variant="secondary" className="w-6 h-6 rounded-full flex items-center justify-center p-0" aria-hidden="true">1</Badge>
                            <span>Enter Your Shop Basics</span>
                        </h3>
                        <div className="pl-8 space-y-4">
                            <p className="text-muted-foreground">
                                Start with your shop name and what you sell. Be specific about your products—this helps with Etsy SEO and buyer trust.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-4 bg-muted/50 rounded-lg border">
                                    <h4 className="font-medium mb-2">Good Examples</h4>
                                    <ul className="text-sm space-y-1 list-disc list-inside" aria-label="Good product description examples">
                                        <li>&quot;Handmade pressed flower jewelry&quot;</li>
                                        <li>&quot;Custom pet portraits on canvas&quot;</li>
                                        <li>&quot;Vintage mid-century furniture&quot;</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-muted/50 rounded-lg border">
                                    <h4 className="font-medium mb-2">Avoid</h4>
                                    <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground" aria-label="Product descriptions to avoid">
                                        <li>&quot;Unique gifts&quot; (Too vague)</li>
                                        <li>&quot;Stuff I make&quot; (Not descriptive)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="grid gap-2">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            <Badge variant="secondary" className="w-6 h-6 rounded-full flex items-center justify-center p-0" aria-hidden="true">2</Badge>
                            <span>Share Your Story</span>
                        </h3>
                        <div className="pl-8">
                            <p className="text-muted-foreground">
                                Tell us why you started and how your products are made. Etsy buyers love authentic stories and transparency about your craft process. This builds emotional connection and trust.
                            </p>
                        </div>
                    </li>

                    <li className="grid gap-2">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            <Badge variant="secondary" className="w-6 h-6 rounded-full flex items-center justify-center p-0" aria-hidden="true">3</Badge>
                            <span>Choose Your Tone</span>
                        </h3>
                        <div className="pl-8">
                            <p className="text-muted-foreground">
                                Select a writing style that matches your brand. &quot;Heartfelt&quot; works great for handmade items, &quot;Professional&quot; suits established shops, and &quot;Playful&quot; is perfect for quirky or fun products.
                            </p>
                        </div>
                    </li>

                    <li className="grid gap-2">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            <Badge variant="secondary" className="w-6 h-6 rounded-full flex items-center justify-center p-0" aria-hidden="true">4</Badge>
                            <span>Generate & Copy to Etsy</span>
                        </h3>
                        <div className="pl-8">
                            <p className="text-muted-foreground">
                                Click generate to create your bio. Copy the headline and full bio directly into your Etsy shop&apos;s About section. The character counts help ensure you&apos;re within Etsy&apos;s limits.
                            </p>
                        </div>
                    </li>
                </ol>

                <aside className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-900" role="note">
                    <h4 className="font-medium text-orange-800 dark:text-orange-200 mb-2">Pro Tip: Be Transparent About Your Process</h4>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                        If you work with a print partner or manufacturer, mention it honestly. Etsy buyers appreciate transparency, and it builds trust. Our generator handles this gracefully when you describe your process.
                    </p>
                </aside>
            </CardContent>
        </Card>
    );
}
