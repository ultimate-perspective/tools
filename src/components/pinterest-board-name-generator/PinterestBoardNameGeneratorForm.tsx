"use client";

import { useState, useEffect } from "react";
import { PinterestBoardNameGeneratorInput } from "@/types/pinterest/board-name-generator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Sparkle, SlidersHorizontal } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Assuming these exist, otherwise I'll use standard select or check shadcn components

interface PinterestBoardNameGeneratorFormProps {
    onGenerate: (data: PinterestBoardNameGeneratorInput) => void;
    isPending: boolean;
}

const PLACEHOLDERS = [
    "Home decor ideas for small apartments...",
    "Healthy meal prep recipes for busy weeknights...",
    "Summer outfit inspiration for beach vacations...",
    "DIY woodworking projects for beginners..."
];

const LANGUAGES = [
    { value: "English", label: "English" },
    { value: "Spanish", label: "Spanish" },
    { value: "French", label: "French" },
    { value: "German", label: "German" },
    { value: "Italian", label: "Italian" },
    { value: "Portuguese", label: "Portuguese" },
];

export default function PinterestBoardNameGeneratorForm({ onGenerate, isPending }: PinterestBoardNameGeneratorFormProps) {
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [description, setDescription] = useState("");
    const [language, setLanguage] = useState("English");

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
            language
        });
    };

    const getPlaceholderClass = () => `transition-all duration-500 placeholder:transition-all placeholder:duration-500 ${isAnimating ? "placeholder:opacity-0" : "placeholder:opacity-100"}`;

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <Card>
                <CardHeader className="border-b gap-0">
                    <CardTitle className="flex items-center gap-2">
                        <SlidersHorizontal className="w-5 h-5 text-gray-500" aria-hidden="true" />
                        Board Details
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid gap-2">
                        <Label htmlFor="description">What&apos;s this board about? <span className="text-red-500">*</span></Label>
                        <Textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className={`min-h-[120px] ${!description ? getPlaceholderClass() : ""}`}
                            placeholder={PLACEHOLDERS[placeholderIndex]}
                            required
                        />
                        <p className="text-xs text-muted-foreground">Be specific about the content you&apos;ll pin to this board.</p>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="language">Language</Label>
                        <Select value={language} onValueChange={setLanguage}>
                            <SelectTrigger id="language">
                                <SelectValue placeholder="Select Language" />
                            </SelectTrigger>
                            <SelectContent>
                                {LANGUAGES.map((lang) => (
                                    <SelectItem key={lang.value} value={lang.value}>
                                        {lang.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
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
                        shadow-[0px_0px_0px_4px_rgba(230,0,35,0.25)] 
                        cursor-pointer transition-all duration-300 overflow-hidden
                        hover:bg-[#E60023]
                        focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-[#E60023]/50
                        disabled:opacity-70 disabled:cursor-not-allowed
                        ${isPending ? "bg-[#E60023]" : ""}
                    `}
                >
                    {/* Pinterest Brand Color is #E60023 */}
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
