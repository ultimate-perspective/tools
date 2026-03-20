"use client";

import { InstagramUsernameGeneratorOutput } from "@/types/instagram/username-generator";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Check, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface InstagramUsernameToolResultProps {
    data: InstagramUsernameGeneratorOutput | null;
}

export default function InstagramUsernameToolResult({ data }: InstagramUsernameToolResultProps) {
    const [copiedUsername, setCopiedUsername] = useState<string | null>(null);

    const handleCopy = (username: string) => {
        navigator.clipboard.writeText(`@${username}`);
        setCopiedUsername(username);
        setTimeout(() => setCopiedUsername(null), 2000);
    };

    if (!data) {
        return (
            <Card className="border-dashed">
                <CardContent className="flex flex-col items-center justify-center h-[260px] text-center p-6 text-muted-foreground">
                    <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mb-4">
                        <span className="text-2xl">@</span>
                    </div>
                    <h3 className="text-lg font-medium mb-2">Ready to Check</h3>
                    <p className="text-sm max-w-xs">
                        Enter your desired Instagram username above to check its availability and generate creative variations.
                    </p>
                </CardContent>
            </Card>
        );
    }

    const availableCount = data.usernames.filter((u) => u.available === true).length;
    const totalCount = data.usernames.length;

    return (
        <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between">
                <div className="text-xs tracking-wider font-semibold text-muted-foreground">AVAILABILITY RESULTS</div>
                <div className="text-xs text-muted-foreground">
                    <span className="text-green-600 font-semibold">{availableCount}</span> of {totalCount} available
                </div>
            </div>

            <div className="space-y-3">
                {data.usernames.map((item, idx) => (
                    <Card
                        key={`${item.username}-${idx}`}
                        className={`border group transition-colors ${
                            item.isOriginal
                                ? "border-orange-500/40 bg-orange-50/30 dark:bg-orange-900/10"
                                : "hover:border-orange-500/50"
                        }`}
                    >
                        <CardContent className="flex items-center justify-between">
                            <div className="flex items-center gap-3 overflow-hidden">
                                <div className={`w-8 h-8 rounded-md flex shrink-0 items-center justify-center text-sm font-semibold ${
                                    item.isOriginal
                                        ? "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400"
                                        : "bg-muted text-muted-foreground"
                                }`}>
                                    {item.isOriginal ? "✦" : idx}
                                </div>
                                <div className="space-y-0.5 min-w-0">
                                    <div className="font-semibold leading-none truncate flex items-center gap-2">
                                        <span className="text-muted-foreground font-normal">@</span>{item.username}
                                        {item.isOriginal && (
                                            <span className="inline-flex items-center rounded-full bg-orange-50 dark:bg-orange-900/30 px-2 py-0.5 text-xs font-medium text-orange-700 dark:text-orange-400 ring-1 ring-inset ring-orange-600/20">
                                                Original
                                            </span>
                                        )}
                                        {item.available === true && (
                                            <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/20 dark:text-green-400">
                                                ✓ Available
                                            </span>
                                        )}
                                        {item.available === false && (
                                            <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 dark:bg-red-900/20 dark:text-red-400">
                                                ✗ Taken
                                            </span>
                                        )}
                                        {item.available === null && (
                                            <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-0.5 text-xs font-medium text-gray-500 ring-1 ring-inset ring-gray-400/20 dark:bg-gray-800 dark:text-gray-400">
                                                Unknown
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        instagram.com/{item.username}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center shrink-0 gap-1">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8"
                                    onClick={() => handleCopy(item.username)}
                                    title="Copy username"
                                >
                                    {copiedUsername === item.username ? (
                                        <>
                                            <Check className="w-4 h-4 mr-1.5" />
                                            Copied
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-4 h-4 mr-1.5" />
                                            Copy
                                        </>
                                    )}
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8"
                                    asChild
                                >
                                    <a
                                        href={`https://www.instagram.com/${item.username}/`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="View on Instagram"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        <span className="sr-only">View on Instagram</span>
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
