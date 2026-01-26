"use client";

import { EtsyAnnouncementGeneratorOutput } from "@/types/etsy/announcement-generator";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Check, Sparkles, Leaf, Briefcase, RefreshCw, Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface EtsyAnnouncementGeneratorResultProps {
    data: EtsyAnnouncementGeneratorOutput | null;
    onRegenerate?: () => void;
    isRegenerating?: boolean;
}

export default function EtsyAnnouncementGeneratorResult({ data, onRegenerate, isRegenerating }: EtsyAnnouncementGeneratorResultProps) {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleCopy = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    if (!data) return null;

    const getIcon = (style: string) => {
        switch (style) {
            case 'hype': return <Sparkles className="w-3 h-3" />;
            case 'calm': return <Leaf className="w-3 h-3" />;
            case 'pro': return <Briefcase className="w-3 h-3" />;
            default: return <Sparkles className="w-3 h-3" />;
        }
    };

    return (
        <Card className="space-y-6 mt-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <CardHeader className="border-b gap-0 mb-0">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        <CardTitle className="font-medium">Generated Variations</CardTitle>
                    </div>
                    {onRegenerate && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={onRegenerate}
                            disabled={isRegenerating}
                            className="text-muted-foreground hover:text-foreground h-8 px-2"
                        >
                            {isRegenerating ? (
                                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                            ) : (
                                <RefreshCw className="w-4 h-4 mr-2" />
                            )}
                            Regenerate
                        </Button>
                    )}
                </div>
            </CardHeader>

            <div className="flex flex-col gap-4 divide-y-2 divide-accent">
                {data.variations.map((variation, idx) => (
                    <div key={idx} className="px-6 not-last:pb-4">
                        <div className="flex gap-3">
                            <div className="space-y-3 flex-1">
                                <div className="text-[10px] flex gap-2 uppercase tracking-wider font-bold text-muted-foreground/60">
                                    {variation.style === 'hype' && "FRIENDLY & URGENT"}
                                    {variation.style === 'calm' && "PROFESSIONAL & WARM"}
                                    {variation.style === 'pro' && "DIRECT & BOLD"}
                                    {getIcon(variation.style)}
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                                    {variation.announcement}
                                </p>
                            </div>
                            <div className="shrink-0 pl-2">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-muted-foreground hover:bg-muted"
                                    onClick={() => handleCopy(variation.announcement, idx)}
                                    title="Copy to clipboard"
                                >
                                    {copiedIndex === idx ? (
                                        <Check className="w-4 h-4 text-green-600" />
                                    ) : (
                                        <Copy className="w-4 h-4" />
                                    )}
                                    <span className="sr-only">Copy</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
