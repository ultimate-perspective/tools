import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PinterestGeneratorGuide() {
    return (
        <Card className="mt-12">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">
                    How to use this free pinterest title + description generator <span className="text-muted-foreground font-normal text-lg">(quick guide)</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
                <p className="text-muted-foreground">
                    I built this after realizing most people copy their Etsy or Shopify description straight into Pinterest, which performs… terribly. If you want fast, clean, Pinterest-ready text, here’s the simplest way to use the generator.
                </p>

                <div className="space-y-6">
                    <div className="grid gap-2">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            <Badge variant="secondary" className="w-6 h-6 rounded-full flex items-center justify-center p-0">1</Badge>
                            Describe your product, or just paste the product URL
                        </h3>
                        <div className="pl-8 space-y-4">
                            <p className="text-muted-foreground">Two easy paths:</p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-4 bg-muted/50 rounded-lg border">
                                    <h4 className="font-medium mb-2">Write a short description</h4>
                                    <p className="text-sm text-muted-foreground mb-2">Something like</p>
                                    <div className="space-y-1">
                                        <div className="bg-background px-3 py-2 rounded border text-sm italic">“handmade terracotta plant pot”</div>
                                        <div className="text-center text-xs text-muted-foreground">or</div>
                                        <div className="bg-background px-3 py-2 rounded border text-sm italic">“minimalist printable wedding invite set”</div>
                                    </div>
                                </div>

                                <div className="p-4 bg-muted/50 rounded-lg border">
                                    <h4 className="font-medium mb-2">Or paste your Etsy or Shopify product URL</h4>
                                    <p className="text-sm text-muted-foreground">
                                        The generator automatically scans the page, analyzes the product, and creates a Pinterest-optimized title + description using whatever settings you choose.
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground italic">No long explanations needed. One line or a URL is enough.</p>
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            <Badge variant="secondary" className="w-6 h-6 rounded-full flex items-center justify-center p-0">2</Badge>
                            Choose your tone
                        </h3>
                        <div className="pl-8">
                            <p className="text-muted-foreground">
                                Pick the vibe that fits the product. The generator rewrites everything in that exact voice so it doesn’t feel generic.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            <Badge variant="secondary" className="w-6 h-6 rounded-full flex items-center justify-center p-0">3</Badge>
                            Toggle emojis + hashtags
                        </h3>
                        <div className="pl-8 space-y-2">
                            <p className="text-muted-foreground">Pinterest descriptions can go either way.</p>
                            <ul className="list-disc list-inside text-muted-foreground ml-2 space-y-1">
                                <li>If you like emojis in your pins, enable them.</li>
                                <li>If you prefer clean SEO-style text, turn them off.</li>
                            </ul>
                            <p className="text-muted-foreground">Same for hashtags.</p>
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            <Badge variant="secondary" className="w-6 h-6 rounded-full flex items-center justify-center p-0">4</Badge>
                            Click generate
                        </h3>
                        <div className="pl-8">
                            <p className="text-muted-foreground mb-2">
                                You’ll get multiple Pinterest-ready title and description options. Some short, some keyword-rich, some more aesthetic.
                                Pick the one that fits the product and the board vibe.
                            </p>
                            <p className="text-sm text-muted-foreground italic">If nothing feels right, regenerate.</p>
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            <Badge variant="secondary" className="w-6 h-6 rounded-full flex items-center justify-center p-0">5</Badge>
                            Copy and paste to your Pinterest pin
                        </h3>
                        <div className="pl-8">
                            <p className="text-muted-foreground">Grab the version you like and drop it straight into Pinterest. That’s it.</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
