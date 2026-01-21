"use client";

import { EtsyBioGeneratorOutput } from "@/types/etsy/bio-generator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface EtsyBioGeneratorResultProps {
    data: EtsyBioGeneratorOutput | null;
}

function getCharacterStatus(current: number, min: number, max: number): { color: string; status: string } {
    if (current === 0) return { color: "text-muted-foreground", status: "" };
    if (current < min) return { color: "text-yellow-600", status: "" };
    if (current > max) return { color: "text-red-600", status: `(${current - max} over limit)` };
    return { color: "text-green-600", status: "(optimal)" };
}

export default function EtsyBioGeneratorResult({ data }: EtsyBioGeneratorResultProps) {
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
                        Fill out your shop details on the left to generate your professional Etsy bio.
                    </p>
                </CardContent>
            </Card>
        );
    }

    const headlineStatus = getCharacterStatus(data.headline.length, 100, 140);
    const bioStatus = getCharacterStatus(data.fullBio.length, 1500, 2500);

    return (
        <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
            {/* Headline Section */}
            <Card>
                <CardHeader className="gap-0">
                    <CardTitle className="text-base font-semibold flex items-center justify-between">
                        Shop Headline
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-foreground"
                            onClick={() => handleCopy(data.headline, 'headline')}
                        >
                            {copiedField === 'headline' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="p-4 rounded-lg bg-muted/30 text-sm leading-relaxed border">
                        {data.headline}
                    </div>
                    <div className={`mt-2 text-xs text-right ${headlineStatus.color}`}>
                        {data.headline.length} / 140 characters {headlineStatus.status}
                    </div>
                </CardContent>
            </Card>

            {/* Full Bio Section */}
            <Card>
                <CardHeader className="gap-0">
                    <CardTitle className="text-base font-semibold flex items-center justify-between">
                        Full Bio
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-foreground"
                            onClick={() => handleCopy(data.fullBio, 'fullBio')}
                        >
                            {copiedField === 'fullBio' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="p-4 rounded-lg bg-muted/30 text-sm leading-relaxed border whitespace-pre-wrap max-h-[400px] overflow-y-auto">
                        {data.fullBio}
                    </div>
                    <div className={`mt-2 text-xs text-right ${bioStatus.color}`}>
                        {data.fullBio.length} characters {bioStatus.status}
                    </div>
                </CardContent>
            </Card>

            {/* Copy All Button */}
            <Button
                variant="outline"
                className="w-full"
                onClick={() => handleCopy(`${data.headline}\n\n${data.fullBio}`, 'all')}
            >
                {copiedField === 'all' ? (
                    <>
                        <Check className="w-4 h-4 mr-2" />
                        Copied!
                    </>
                ) : (
                    <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy All
                    </>
                )}
            </Button>
        </div>
    );
}
