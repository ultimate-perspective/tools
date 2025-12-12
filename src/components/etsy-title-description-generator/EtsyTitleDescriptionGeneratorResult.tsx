import { EtsyTitleDescriptionGeneratorOutput } from "@/types/etsy";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface EtsyTitleDescriptionGeneratorResultProps {
    data: EtsyTitleDescriptionGeneratorOutput | null;
}

export default function EtsyTitleDescriptionGeneratorResult({ data }: EtsyTitleDescriptionGeneratorResultProps) {
    const [copiedField, setCopiedField] = useState<string | null>(null);

    const handleCopy = (text: string, field: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
    };

    if (!data) {
        return (
            <Card className="h-full border-dashed">
                <CardContent className="flex flex-col items-center justify-center h-[400px] text-center p-6 text-muted-foreground">
                    <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mb-4">
                        <span className="text-2xl">✨</span>
                    </div>
                    <h3 className="text-lg font-medium mb-2">Ready to Generate</h3>
                    <p className="text-sm max-w-xs">
                        Fill out the product details on the left to generate your optimized Etsy listing.
                    </p>
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
            {/* Title Section */}
            <Card>
                <CardHeader className="gap-0">
                    <CardTitle className="text-base font-semibold flex items-center justify-between">
                        Generated Title
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-foreground"
                            onClick={() => handleCopy(data.title, 'title')}
                        >
                            {copiedField === 'title' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="p-4 rounded-lg bg-muted/30 text-sm leading-relaxed border">
                        {data.title}
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground text-right">
                        {data.title.length} characters, {data.title.split(" ").length} words
                    </div>
                </CardContent>
            </Card>

            {/* Description Section */}
            <Card>
                <CardHeader className="gap-0">
                    <CardTitle className="text-base font-semibold flex items-center justify-between">
                        Description
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-foreground"
                            onClick={() => handleCopy(data.description, 'description')}
                        >
                            {copiedField === 'description' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="p-4 rounded-lg bg-muted/30 text-sm leading-relaxed border whitespace-pre-wrap">
                        {data.description}
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground text-right">
                        {data.description.length} characters, {data.description.split(" ").length} words
                    </div>
                </CardContent>
            </Card>

            {/* Tags Section */}
            <Card>
                <CardHeader className="gap-0">
                    <CardTitle className="text-base font-semibold flex items-center justify-between">
                        Tags ({data.tags.length})
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-foreground"
                            onClick={() => handleCopy(data.tags.join(", "), 'tags')}
                        >
                            {copiedField === 'tags' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        {data.tags.map((tag, i) => (
                            <span key={i} className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                                {tag}
                            </span>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
