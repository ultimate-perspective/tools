"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { PinterestOutput } from "@/types/pinterest";

interface PinterestGeneratorResultProps {
    data?: PinterestOutput;
}

export default function PinterestGeneratorResult({ data }: PinterestGeneratorResultProps) {
    const [copiedField, setCopiedField] = useState<string | null>(null);

    if (!data) {
        return (
            <Card className="sticky top-24 shadow-lg border-primary/10 opacity-60">
                <CardHeader className="bg-muted/30 border-b pb-4">
                    <CardTitle className="flex items-center gap-2 text-muted-foreground">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs">✓</span>
                        Generated Result
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6 h-[400px] flex items-center justify-center text-muted-foreground text-sm text-center">
                    Click "Generate Content" to see your optimized Pinterest pins here.
                </CardContent>
            </Card>
        );
    }

    const handleCopy = (text: string, field: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
    };

    return (
        <Card className="sticky top-24 shadow-lg border-primary/10">
            <CardHeader className="bg-muted/50 border-b pb-4">
                <CardTitle className="flex items-center gap-2 text-primary">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 text-xs">✓</span>
                    Generated Result
                </CardTitle>
            </CardHeader>

            <CardContent className="p-6 space-y-6">
                {/* Title Section */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Title</label>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCopy(data.title, 'title')}
                            className="h-6 px-2 text-xs"
                        >
                            {copiedField === 'title' ? <Check className="w-3 h-3 mr-1" /> : <Copy className="w-3 h-3 mr-1" />}
                            {copiedField === 'title' ? 'Copied' : 'Copy'}
                        </Button>
                    </div>
                    <div className="bg-muted p-4 rounded-md font-medium text-sm">
                        {data.title}
                    </div>
                </div>

                {/* Description Section */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Description</label>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCopy(data.description, 'description')}
                            className="h-6 px-2 text-xs"
                        >
                            {copiedField === 'description' ? <Check className="w-3 h-3 mr-1" /> : <Copy className="w-3 h-3 mr-1" />}
                            {copiedField === 'description' ? 'Copied' : 'Copy'}
                        </Button>
                    </div>
                    <div className="bg-muted p-4 rounded-md text-sm min-h-[100px] whitespace-pre-wrap leading-relaxed">
                        {data.description}
                    </div>
                </div>

                {/* Hashtags Section */}
                {data.hashtags.length > 0 && (
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Hashtags</label>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleCopy(data.hashtags.join(' '), 'hashtags')}
                                className="h-6 px-2 text-xs"
                            >
                                {copiedField === 'hashtags' ? <Check className="w-3 h-3 mr-1" /> : <Copy className="w-3 h-3 mr-1" />}
                                {copiedField === 'hashtags' ? 'Copied' : 'Copy All'}
                            </Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {data.hashtags.map((tag, index) => (
                                <span key={index} className="px-2.5 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
