"use client";

import { PinterestBoardNameGeneratorOutput, PinterestBoardTone } from "@/types/pinterest/board-name-generator";
import { Copy, Check, Smile, Briefcase, MessageCircle, Sparkles, Coffee, Minus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface PinterestBoardNameGeneratorResultProps {
    data: PinterestBoardNameGeneratorOutput | null;
}

const TONE_CONFIG: Record<PinterestBoardTone, { icon: React.ReactNode; color: string; borderColor: string; bg: string }> = {
    Neutral: {
        icon: <Minus className="w-5 h-5" />,
        color: "text-slate-600",
        borderColor: "border-slate-200",
        bg: "bg-slate-50"
    },
    Aesthetic: {
        icon: <Sparkles className="w-5 h-5" />,
        color: "text-rose-600",
        borderColor: "border-rose-200",
        bg: "bg-rose-50"
    },
    Witty: {
        icon: <Smile className="w-5 h-5" />,
        color: "text-orange-500",
        borderColor: "border-orange-200",
        bg: "bg-orange-50"
    },
    Minimalist: {
        icon: <Minus className="w-5 h-5" />,
        color: "text-gray-900 dark:text-gray-100",
        borderColor: "border-gray-200 dark:border-gray-700",
        bg: "bg-gray-50 dark:bg-gray-800"
    },
    Educational: {
        icon: <Briefcase className="w-5 h-5" />,
        color: "text-blue-600",
        borderColor: "border-blue-200",
        bg: "bg-blue-50"
    },
    Luxurious: {
        icon: <Sparkles className="w-5 h-5" />,
        color: "text-amber-600",
        borderColor: "border-amber-200",
        bg: "bg-amber-50"
    },
    Action: {
        icon: <Sparkles className="w-5 h-5" />,
        color: "text-red-600",
        borderColor: "border-red-200",
        bg: "bg-red-50"
    },
    Poetic: {
        icon: <MessageCircle className="w-5 h-5" />,
        color: "text-purple-600",
        borderColor: "border-purple-200",
        bg: "bg-purple-50"
    },
    Trendy: {
        icon: <Sparkles className="w-5 h-5" />,
        color: "text-pink-600",
        borderColor: "border-pink-200",
        bg: "bg-pink-50"
    },
    Motivational: {
        icon: <Coffee className="w-5 h-5" />,
        color: "text-emerald-600",
        borderColor: "border-emerald-200",
        bg: "bg-emerald-50"
    },
};

export default function PinterestBoardNameGeneratorResult({ data }: PinterestBoardNameGeneratorResultProps) {
    const [copiedField, setCopiedField] = useState<string | null>(null);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(text);
        setTimeout(() => setCopiedField(null), 2000);
    };

    if (!data) {
        return (
            <div className="w-full rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-800 p-12">
                <div className="flex flex-col items-center justify-center text-center text-muted-foreground">
                    <div className="w-20 h-20 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center mb-6">
                        <span className="text-4xl">📍</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Ready to Generate</h3>
                    <p className="text-sm max-w-sm mx-auto leading-relaxed">
                        Enter your board topic above to generate aesthetic, SEO-optimized names in 6 distinct styles.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                    Your Board Names
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-bold border border-red-200">
                    {data.groups.reduce((acc, g) => acc + g.names.length, 0)} Ideas
                </span>
            </div>

            {/* CSS Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.groups.map((group) => {
                    const config = TONE_CONFIG[group.tone] || TONE_CONFIG.Neutral;

                    return (
                        <div
                            key={group.tone}
                            className={cn(
                                "rounded-xl border-2 bg-white dark:bg-gray-900 transition-all duration-300 hover:shadow-lg overflow-hidden flex flex-col h-full",
                                config.borderColor
                            )}
                        >
                            <div className={cn("p-4 border-b flex items-center gap-3", config.bg, config.borderColor)}>
                                <div className={cn("p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm", config.color)}>
                                    {config.icon}
                                </div>
                                <h3 className={cn("font-bold text-lg", config.color)}>
                                    {group.tone}
                                </h3>
                            </div>

                            <div className="p-3 grid gap-2">
                                {group.names.map((name, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => handleCopy(name)}
                                        className="
                                            group relative flex items-center justify-between 
                                            p-3 rounded-lg 
                                            bg-gray-50 dark:bg-gray-800/50 
                                            hover:bg-gray-100 dark:hover:bg-gray-800 
                                            border border-transparent hover:border-gray-200 dark:hover:border-gray-700
                                            cursor-pointer transition-all duration-200
                                        "
                                    >
                                        <span className="font-medium text-gray-700 dark:text-gray-200 text-sm truncate pr-8">
                                            {name}
                                        </span>

                                        <div className="absolute right-3 flex items-center">
                                            {copiedField === name ? (
                                                <span className="flex items-center text-green-600 text-xs font-medium animate-in fade-in zoom-in duration-200">
                                                    <Check className="w-3.5 h-3.5 mr-1" />
                                                    Copied
                                                </span>
                                            ) : (
                                                <Copy className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
