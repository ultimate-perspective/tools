"use client";

import { useState, useEffect } from "react";
import { EtsyShopNameGeneratorInput } from "@/types/etsy/shop-name-generator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Sparkle, Store } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface EtsyShopNameGeneratorFormProps {
    onGenerate: (data: EtsyShopNameGeneratorInput) => void;
    isPending: boolean;
    includeTitle: boolean;
    onIncludeTitleChange: (value: boolean) => void;
}

const PLACEHOLDERS = [
    "Handmade ceramic jewelry with a bohemian vibe using natural earthy tones...",
    "Eco-friendly soy candles for weddings and special events...",
    "Digital planners and stickers for students and teachers...",
    "Custom engraved wooden cutting boards for housewarming gifts..."
];

export default function EtsyShopNameGeneratorForm({ onGenerate, isPending, includeTitle, onIncludeTitleChange }: EtsyShopNameGeneratorFormProps) {
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [description, setDescription] = useState("");

    // Rotating Placeholders Logic
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDERS.length);
                setIsAnimating(false);
            }, 500);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onGenerate({
            description,
            includeTitle
        });
    };

    const getPlaceholderClass = () => `transition-all duration-500 placeholder:transition-all placeholder:duration-500 ${isAnimating ? "placeholder:opacity-0" : "placeholder:opacity-100"}`;

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <Card>
                <CardHeader className="border-b gap-0">
                    <CardTitle className="flex items-center gap-2">
                        <Store className="w-5 h-5 text-gray-500" aria-hidden="true" />
                        Shop Details
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid gap-2">
                        <Label htmlFor="description">Describe your business <span className="text-red-500">*</span></Label>
                        <Textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className={`min-h-[120px] ${!description ? getPlaceholderClass() : ""}`}
                            placeholder={PLACEHOLDERS[placeholderIndex]}
                            required
                        />
                        <p className="text-xs text-muted-foreground">Be specific about what you sell and your style.</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Checkbox
                            id="includeTitle"
                            checked={includeTitle}
                            onCheckedChange={(v) => onIncludeTitleChange(v === true)}
                        />
                        <Label htmlFor="includeTitle" className="text-sm font-medium cursor-pointer">
                            Also generate Shop Title
                        </Label>
                    </div>
                </CardContent>
            </Card>

            <div className="flex justify-center pt-4 w-full">
                <button
                    type="submit"
                    disabled={isPending}
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
                        {isPending ? "Generating..." : "Generate Names"}
                    </span>
                </button>
            </div>
        </form>
    );
}
