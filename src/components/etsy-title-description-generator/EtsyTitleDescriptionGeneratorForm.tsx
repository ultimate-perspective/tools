"use client";

import { useState, useEffect } from "react";
import { EtsyTitleDescriptionGeneratorInput } from "@/types/etsy";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sparkle } from "lucide-react";
import { EtsyFieldInfo } from "./EtsyFieldInfo";

interface EtsyTitleDescriptionGeneratorFormProps {
    onGenerate: (data: EtsyTitleDescriptionGeneratorInput) => void;
    isPending: boolean;
}

const PLACEHOLDERS = {
    product: ["ceramic coffee mug", "gold moonstone ring", "cotton t‑shirt"],
    details: ["sage green, 100% ceramic, 12oz", "14k gold vermeil, size 7", "100% organic cotton, unisex M"],
    specialFeatures: ["handmade, each piece unique", "vintage 1970s style", "eco-friendly dyes, pre-shrunk"],
    targetAudience: ["coffee lovers", "new parents", "eco-conscious gift-givers"],
    additionalInfo: ["dishwasher safe", "includes gift box", "free shipping worldwide"]
};

export default function EtsyTitleDescriptionGeneratorForm({ onGenerate, isPending }: EtsyTitleDescriptionGeneratorFormProps) {
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Form State
    const [product, setProduct] = useState("");
    const [details, setDetails] = useState("");
    const [specialFeatures, setSpecialFeatures] = useState("");
    const [targetAudience, setTargetAudience] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");

    // Rotating Placeholders Logic
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setPlaceholderIndex((prev) => (prev + 1) % 3);
                setIsAnimating(false);
            }, 500); // fade out duration
        }, 4000); // 4 seconds visible

        return () => clearInterval(interval);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onGenerate({
            product,
            details,
            specialFeatures,
            targetAudience,
            additionalInfo
        });
    };

    const getPlaceholderClass = () => `transition-all duration-500 placeholder:transition-all placeholder:duration-500 ${isAnimating ? "placeholder:opacity-0" : "placeholder:opacity-100"}`;

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs">1</span>
                        Product Details
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* What are you selling? */}
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="product">What are you selling? <span className="text-red-500">*</span></Label>
                            <EtsyFieldInfo
                                title="Product Name"
                                description="The core item you are selling. Be direct and specific."
                                examples={["Ceramic Coffee Mug", "Gold Moonstone Ring", "Vintage Denim Jacket"]}
                                tips={["Use the main noun that customers would search for.", "Keep it simple; add details in other fields."]}
                            />
                        </div>
                        <div className="relative">
                            <Input
                                id="product"
                                value={product}
                                onChange={(e) => setProduct(e.target.value)}
                                className={!product ? getPlaceholderClass() : ""}
                                placeholder={PLACEHOLDERS.product[placeholderIndex]}
                                required
                            />
                        </div>
                    </div>

                    {/* Key Details */}
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="details">Key details (color, material, size) <span className="text-red-500">*</span></Label>
                            <EtsyFieldInfo
                                title="Key Attributes"
                                description="Objective facts about the product. These are crucial for the title."
                                examples={["Sage Green, Stoneware, 12oz", "14k Gold Vermeil, Size 7", "100% Cotton, Unisex Medium"]}
                                tips={["List the 3 most important traits: Color, Material, Size.", "Focus on objective, visible descriptors."]}
                                warnings={["Avoid subjective words like 'beautiful' or 'cute' here."]}
                            />
                        </div>
                        <Textarea
                            id="details"
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            className={!details ? getPlaceholderClass() : ""}
                            placeholder={PLACEHOLDERS.details[placeholderIndex]}
                            required
                        />
                    </div>

                    {/* What makes it special? */}
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="specialFeatures">What makes it special? (2–3 points) <span className="text-red-500">*</span></Label>
                            <EtsyFieldInfo
                                title="Unique Selling Points"
                                description="Why should someone buy this specific item? Used for description hooks."
                                examples={["Hand-thrown on a wheel", "Uses eco-friendly non-toxic glazes", "Vintage 1970s authentic"]}
                                tips={["Highlight craftsmanship or origin.", "Mention unique processes or limited availability."]}
                            />
                        </div>
                        <Textarea
                            id="specialFeatures"
                            value={specialFeatures}
                            onChange={(e) => setSpecialFeatures(e.target.value)}
                            className={!specialFeatures ? getPlaceholderClass() : ""}
                            placeholder={PLACEHOLDERS.specialFeatures[placeholderIndex]}
                            required
                        />
                    </div>

                    {/* Target Audience */}
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="targetAudience">Target use case / audience (optional)</Label>
                            <EtsyFieldInfo
                                title="Use Case & Audience"
                                description="Who is this for and how will they use it? Helps with tags."
                                examples={["Coffee lovers who want a cozy morning", "Gift for mom", "Boho kitchen decor"]}
                                tips={["Mention specific occasions (Wedding, Birthday).", "Define the style (Boho, Minimalist, Rustic)."]}
                                warnings={["Don't spam generic 'For Her' unless relevant."]}
                            />
                        </div>
                        <Textarea
                            id="targetAudience"
                            value={targetAudience}
                            onChange={(e) => setTargetAudience(e.target.value)}
                            className={!targetAudience ? getPlaceholderClass() : ""}
                            placeholder={PLACEHOLDERS.targetAudience[placeholderIndex]}
                        />
                    </div>

                    {/* Additional Info */}
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="additionalInfo">Additional information (optional)</Label>
                            <EtsyFieldInfo
                                title="Logistics & Extras"
                                description="Final details for the description block."
                                examples={["Dishwasher safe", "Ships in 24 hours", "Includes free gift box"]}
                                tips={["Include care instructions.", "Mention packaging or shipping speed."]}
                            />
                        </div>
                        <Textarea
                            id="additionalInfo"
                            value={additionalInfo}
                            onChange={(e) => setAdditionalInfo(e.target.value)}
                            className={!additionalInfo ? getPlaceholderClass() : ""}
                            placeholder={PLACEHOLDERS.additionalInfo[placeholderIndex]}
                        />
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
                        {isPending ? "Generating..." : "Generate Listing"}
                    </span>
                </button>
            </div>
        </form>
    );
}
