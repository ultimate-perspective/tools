import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EtsyGeneratorGuide() {
    return (
        <Card className="mt-12">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">
                    How to use this Free Etsy Listing Title & Description Generator <span className="text-muted-foreground font-normal text-lg">(quick guide)</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
                <p className="text-muted-foreground">
                    Stop guessing what the algorithm wants. This tool builds Etsy-ready titles and descriptions that follow the official Seller Handbook best practices.
                </p>

                <div className="space-y-6">
                    <div className="grid gap-2">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            <Badge variant="secondary" className="w-6 h-6 rounded-full flex items-center justify-center p-0">1</Badge>
                            Enter your product basics
                        </h3>
                        <div className="pl-8 space-y-4">
                            <p className="text-muted-foreground">
                                Start with the "What are you selling?" field. Be direct.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-4 bg-muted/50 rounded-lg border">
                                    <h4 className="font-medium mb-2">Good Examples</h4>
                                    <ul className="text-sm space-y-1 list-disc list-inside">
                                        <li>"Ceramic coffee mug"</li>
                                        <li>"Gold vermeil ring"</li>
                                        <li>"Digital wedding planner"</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-muted/50 rounded-lg border">
                                    <h4 className="font-medium mb-2">Bad Examples</h4>
                                    <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                        <li>"Cute gift" (Too vague)</li>
                                        <li>"Cheap mug" (Focus on quality, not price)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            <Badge variant="secondary" className="w-6 h-6 rounded-full flex items-center justify-center p-0">2</Badge>
                            Add key details & features
                        </h3>
                        <div className="pl-8">
                            <p className="text-muted-foreground">
                                Use the "Key Details" and "Special Features" fields to give the AI the specific facts it needs to build a keyword-rich title.
                                Think: Color, Material, Size, Style, and Technique.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            <Badge variant="secondary" className="w-6 h-6 rounded-full flex items-center justify-center p-0">3</Badge>
                            Click Generate
                        </h3>
                        <div className="pl-8">
                            <p className="text-muted-foreground">
                                The AI will instantly craft a title that puts the most important keywords first (critical for Etsy SEO) and a description that hooks buyers with benefits.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            <Badge variant="secondary" className="w-6 h-6 rounded-full flex items-center justify-center p-0">4</Badge>
                            Copy & Publish
                        </h3>
                        <div className="pl-8">
                            <p className="text-muted-foreground">
                                Use the copy buttons to grab your Title, Description, and Tags. Paste them into your listing editor. Done!
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
