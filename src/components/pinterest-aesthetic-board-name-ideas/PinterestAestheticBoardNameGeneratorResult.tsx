"use client";

import { PinterestBoardNameGeneratorOutput } from "@/types/pinterest/board-name-generator";
import { Copy, Check, Sparkles, Moon, Cloud, Search } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface PinterestAestheticBoardNameGeneratorResultProps {
    data: PinterestBoardNameGeneratorOutput | null;
}

// Map sub-aesthetic tones to specific visuals
const AESTHETIC_CONFIG: Record<string, { icon: React.ReactNode; color: string; borderColor: string; bg: string }> = {
    "Soft / Cozy": {
        icon: <Cloud className="w-5 h-5" />,
        color: "text-stone-600 dark:text-stone-300",
        borderColor: "border-stone-200 dark:border-stone-800",
        bg: "bg-stone-50/50 dark:bg-stone-900/10"
    },
    "Dark / Moody": {
        icon: <Moon className="w-5 h-5" />,
        color: "text-zinc-800 dark:text-zinc-300",
        borderColor: "border-zinc-200 dark:border-zinc-800",
        bg: "bg-zinc-50 dark:bg-zinc-900"
    },
    "Minimalist": {
        icon: <Search className="w-5 h-5" />,
        color: "text-gray-600 dark:text-gray-300",
        borderColor: "border-gray-200 dark:border-gray-800",
        bg: "bg-white dark:bg-black"
    },
    "Fantasy / Ethereal": {
        icon: <Sparkles className="w-5 h-5" />,
        color: "text-neutral-600 dark:text-neutral-300",
        borderColor: "border-neutral-200 dark:border-neutral-800",
        bg: "bg-neutral-50/50 dark:bg-neutral-900/10"
    }
};

export default function PinterestAestheticBoardNameGeneratorResult({ data }: PinterestAestheticBoardNameGeneratorResultProps) {
    const [copiedField, setCopiedField] = useState<string | null>(null);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(text);
        setTimeout(() => setCopiedField(null), 2000);
    };

    if (!data) {
        return (
            <div className="w-full rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-800 p-12 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <div className="flex flex-col items-center justify-center text-center text-muted-foreground">
                    <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-6 animate-pulse">
                        <Sparkles className="w-10 h-10 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Find Your Aesthetic</h3>
                    <p className="text-sm max-w-sm mx-auto leading-relaxed">
                        Enter a topic to generate 20+ curated aesthetic names across Soft, Dark, Minimalist, and Fantasy styles.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex items-center gap-2 mb-6 justify-center">
                <Sparkles className="w-5 h-5 text-gray-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Curated Aesthetics
                </h2>
                <Sparkles className="w-5 h-5 text-gray-400" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.groups.map((group) => {
                    // Fallback config if tone key doesn't match exactly (e.g. from prompt variations)
                    // We try to match partial strings if exact match fails
                    let toneKey = group.tone as string;
                    if (!AESTHETIC_CONFIG[toneKey]) {
                        if (toneKey.includes("Soft")) toneKey = "Soft / Cozy";
                        else if (toneKey.includes("Dark")) toneKey = "Dark / Moody";
                        else if (toneKey.includes("Minimalist")) toneKey = "Minimalist";
                        else if (toneKey.includes("Fantasy")) toneKey = "Fantasy / Ethereal";
                        else toneKey = "Soft / Cozy"; // Default
                    }

                    const config = AESTHETIC_CONFIG[toneKey];

                    return (
                        <div
                            key={group.tone}
                            className={cn(
                                "rounded-2xl border bg-white dark:bg-gray-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden",
                                config.borderColor
                            )}
                        >
                            <div className={cn("p-4 border-b flex items-center gap-3", config.bg, config.borderColor)}>
                                <div className={cn("p-2 rounded-full bg-white/80 dark:bg-gray-800 shadow-sm backdrop-blur-sm", config.color)}>
                                    {config.icon}
                                </div>
                                <h3 className={cn("font-bold text-lg tracking-wide", config.color)}>
                                    {group.tone}
                                </h3>
                            </div>

                            <div className="p-4 grid gap-3">
                                {group.names.map((name, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => handleCopy(name)}
                                        className="
                                            group relative flex items-center justify-between 
                                            px-4 py-3 rounded-xl
                                            bg-gray-50/50 dark:bg-gray-800/30
                                            hover:bg-white dark:hover:bg-gray-800 
                                            border border-transparent hover:border-rose-100 dark:hover:border-rose-900
                                            shadow-sm hover:shadow-md
                                            cursor-pointer transition-all duration-300
                                        "
                                    >
                                        <span className="font-medium text-gray-600 dark:text-gray-300 text-sm tracking-wide">
                                            {name}
                                        </span>

                                        <div className="flex items-center pl-4">
                                            {copiedField === name ? (
                                                <span className="text-emerald-500">
                                                    <Check className="w-4 h-4" />
                                                </span>
                                            ) : (
                                                <Copy className="w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-rose-400" />
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
