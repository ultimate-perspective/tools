"use client";

import { useState } from "react";
import { InstagramUsernameGeneratorInput } from "@/types/instagram/username-generator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Sparkle, AtSign } from "lucide-react";

interface InstagramUsernameToolFormProps {
    onGenerate: (data: InstagramUsernameGeneratorInput) => void;
    isPending: boolean;
}

export default function InstagramUsernameToolForm({ onGenerate, isPending }: InstagramUsernameToolFormProps) {
    const [username, setUsername] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const cleaned = username.replace(/^@/, "").trim();
        if (!cleaned) return;
        onGenerate({ username: cleaned });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <Card>
                <CardHeader className="border-b gap-0">
                    <CardTitle className="flex items-center gap-2">
                        <AtSign className="w-5 h-5 text-gray-500" aria-hidden="true" />
                        Your Desired Username
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid gap-2">
                        <Label htmlFor="username">Instagram Username <span className="text-red-500">*</span></Label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm select-none">@</span>
                            <Input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value.replace(/\s/g, "").toLowerCase())}
                                className="pl-7"
                                placeholder="yourdesiredusername"
                                maxLength={30}
                                required
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                spellCheck={false}
                            />
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Enter the username you want. We&apos;ll generate creative variations and check if they&apos;re available on Instagram.
                        </p>
                    </div>
                </CardContent>
            </Card>

            <div className="flex justify-center pt-4 w-full">
                <button
                    type="submit"
                    disabled={isPending || !username.trim()}
                    className={`
                        group relative flex items-center justify-center
                        w-full h-14 rounded-full
                        bg-[rgb(20,20,20)] border-none
                        font-semibold text-white
                        shadow-[0px_0px_0px_4px_rgba(249,115,22,0.253)]
                        cursor-pointer transition-all duration-300 overflow-hidden
                        hover:bg-orange-600
                        disabled:opacity-70 disabled:cursor-not-allowed
                        ${isPending ? "bg-orange-600" : ""}
                    `}
                >
                    <span className={`
                        w-4 h-4 transition-all duration-300
                        ${isPending ? "-translate-y-[220%]" : "group-hover:-translate-y-[220%]"}
                    `}>
                        <Sparkle size={16} />
                    </span>

                    <span className={`
                        absolute text-white flex items-center justify-center gap-2
                        transition-all duration-300
                        transform
                        ${isPending
                            ? "translate-y-0 opacity-100"
                            : "translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                        }
                    `}>
                        {isPending && <Sparkle size={16} className="animate-spin" />}
                        {isPending ? "Checking availability..." : "Check Availability"}
                    </span>
                </button>
            </div>
        </form>
    );
}
