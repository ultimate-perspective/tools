"use client";

import { EtsyShopNameGeneratorOutput } from "@/types/etsy/shop-name-generator";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Check, ChevronDown, Loader2, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

interface EtsyShopNameGeneratorResultProps {
    data: EtsyShopNameGeneratorOutput | null;
    includeTitle: boolean;
    onLoadMore?: () => void;
    isLoadingMore?: boolean;
    onDelete?: (name: string) => void;
}

const PAGE_SIZE = 3;

export default function EtsyShopNameGeneratorResult(props: EtsyShopNameGeneratorResultProps) {
    const { data, includeTitle, onLoadMore, isLoadingMore, onDelete } = props;
    const [copiedField, setCopiedField] = useState<string | null>(null);
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(id);
        setTimeout(() => setCopiedField(null), 2000);
    };

    const items = useMemo(() => {
        if (!data) return [];
        // Keep a balanced mix: alternate descriptive/abstract if possible.
        const descriptive = data.names.filter(n => n.type === "descriptive");
        const abstract = data.names.filter(n => n.type === "abstract");
        const merged: EtsyShopNameGeneratorOutput['names'] = [];

        const max = Math.max(descriptive.length, abstract.length);
        for (let i = 0; i < max; i++) {
            if (descriptive[i]) merged.push(descriptive[i]);
            if (abstract[i]) merged.push(abstract[i]);
        }
        return merged;
    }, [data]);

    if (!data) {
        return (
            <Card className="border-dashed">
                <CardContent className="flex flex-col items-center justify-center h-[260px] text-center p-6 text-muted-foreground">
                    <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mb-4">
                        <span className="text-2xl">✨</span>
                    </div>
                    <h3 className="text-lg font-medium mb-2">Ready to Generate</h3>
                    <p className="text-sm max-w-xs">
                        Describe your business above to generate Etsy-safe shop names.
                    </p>
                </CardContent>
            </Card>
        );
    }

    const visibleItems = items.slice(0, visibleCount);
    // Can load more if we have hidden items OR if we have a handler to fetch more
    const canLoadMore = visibleCount < items.length || !!onLoadMore;

    const handleLoadMoreClick = () => {
        if (visibleCount < items.length) {
            setVisibleCount((c) => Math.min(c + PAGE_SIZE, items.length));
        } else {
            onLoadMore?.();
        }
    };

    return (
        <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between">
                <div className="text-xs tracking-wider font-semibold text-muted-foreground">GENERATED RESULTS</div>
            </div>

            <div className="space-y-3">
                {visibleItems.map((item, idx) => (
                    <Card key={`${item.name}-${idx}`} className="border group hover:border-orange-500/50 transition-colors">
                        <CardContent className="flex items-center justify-between">
                            <div className="flex items-center gap-3 overflow-hidden">
                                <div className="w-8 h-8 rounded-md bg-muted flex shrink-0 items-center justify-center text-sm font-semibold text-muted-foreground">
                                    {idx + 1}
                                </div>
                                <div className="space-y-0.5 min-w-0">
                                    <div className="font-semibold leading-none truncate flex items-center gap-2">
                                        {item.name}
                                        {item.available === true && (
                                            <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                Available
                                            </span>
                                        )}
                                        {item.available === false && (
                                            <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                                                Taken
                                            </span>
                                        )}
                                    </div>
                                    {includeTitle && item.title ? (
                                        <div className="text-xs text-muted-foreground truncate">{item.title}</div>
                                    ) : null}
                                </div>
                            </div>

                            <div className="flex items-center">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 select-none text-muted-foreground hover:text-red-600 hover:bg-red-50"
                                    onClick={() => onDelete?.(item.name)}
                                    title="Remove this name"
                                >
                                    <Trash2 className="w-4 h-4" />
                                    <span className="sr-only">Delete</span>
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 ml-1 shrink-0"
                                    onClick={() => handleCopy(item.name, item.name)}
                                >
                                    {copiedField === item.name ? (
                                        <>
                                            <Check className="w-4 h-4 mr-2" />
                                            Copied
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-4 h-4 mr-2" />
                                            Copy
                                        </>
                                    )}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {canLoadMore ? (
                <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={handleLoadMoreClick}
                    disabled={isLoadingMore}
                >
                    {isLoadingMore ? (
                        <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Generating more...
                        </>
                    ) : (
                        <>
                            {visibleCount < items.length ? "Load more results" : "Generate more names"}
                            <ChevronDown className="w-4 h-4 ml-2" />
                        </>
                    )}
                </Button>
            ) : null}
        </div>
    );
}
