"use client";

import { usePinterestTitleDescription } from "@/hooks/pinterest";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check, Sparkles } from "lucide-react";
import { PinterestOutput } from "@/types/pinterest";

interface PinterestGeneratorResultProps {
    data?: PinterestOutput;
}

export default function PinterestGeneratorResult({ data }: PinterestGeneratorResultProps) {
    const [copiedField, setCopiedField] = useState<string | null>(null);

    if (!data) {
        return (
            <div className="h-full border border-dashed border-gray-200 dark:border-gray-800 rounded-xl flex flex-col items-center justify-center p-8 text-center space-y-3 bg-gray-50/50 dark:bg-gray-900/50 min-h-[400px]">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-black shadow-sm flex items-center justify-center border border-gray-100 dark:border-gray-800">
                    <Sparkles className="w-5 h-5 text-gray-400" />
                </div>
                <div className="space-y-1">
                    <h3 className="font-medium text-gray-900 dark:text-gray-100">Ready to Generate</h3>
                    <p className="text-sm text-gray-500 max-w-[200px] mx-auto">
                        Fill out the form and click generate to see your optimized content here.
                    </p>
                </div>
            </div>
        );
    }

    const handleCopy = (text: string, field: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Title Section */}
            <div className="group space-y-3">
                <div className="flex items-center justify-between">
                    <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">Title</label>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleCopy(data.title, 'title')}
                        className="h-6 w-6 text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                        {copiedField === 'title' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    </Button>
                </div>
                <div className="p-4 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-xl shadow-sm hover:border-gray-200 dark:hover:border-zinc-700 transition-all duration-300">
                    <p className="text-sm font-medium leading-relaxed text-gray-900 dark:text-gray-100">
                        {data.title}
                    </p>
                </div>
            </div>

            {/* Description Section */}
            <div className="group space-y-3">
                <div className="flex items-center justify-between">
                    <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">Description</label>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleCopy(data.description, 'description')}
                        className="h-6 w-6 text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                        {copiedField === 'description' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    </Button>
                </div>
                <div className="p-4 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-xl shadow-sm hover:border-gray-200 dark:hover:border-zinc-700 transition-all duration-300">
                    <p className="text-sm leading-7 text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
                        {data.description}
                    </p>
                </div>
            </div>

            {/* Hashtags Section */}
            {data.hashtags.length > 0 && (
                <div className="group space-y-3">
                    <div className="flex items-center justify-between">
                        <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">Hashtags</label>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleCopy(data.hashtags.join(' '), 'hashtags')}
                            className="h-6 w-6 text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                        >
                            {copiedField === 'hashtags' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {data.hashtags.map((tag, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-50 dark:bg-zinc-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-zinc-800"
                            >
                                #{tag.replace(/^#/, '')}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
