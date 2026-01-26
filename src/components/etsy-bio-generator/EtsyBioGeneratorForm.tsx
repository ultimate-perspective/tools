"use client";

import { useState, useEffect } from "react";
import { EtsyBioGeneratorInput, EtsyBioTone } from "@/types/etsy/bio-generator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkle } from "lucide-react";

interface EtsyBioGeneratorFormProps {
    onGenerate: (data: EtsyBioGeneratorInput) => void;
    isPending: boolean;
}

const PLACEHOLDERS = {
    shopName: ["Luna & Leaf Jewelry", "Maple & Oak Woodworks", "Stitch & Story"],
    whatYouSell: [
        "Pressed flower necklaces and resin earrings",
        "Custom wooden cutting boards and kitchen accessories",
        "Hand-embroidered pet portraits on linen"
    ],
    whyYouStarted: [
        "I wanted to preserve the beauty of my grandmother's garden",
        "My dad taught me woodworking, and I fell in love with the craft",
        "After losing my dog, I started stitching pet portraits as a way to heal"
    ],
    howItsMade: [
        "Handmade by me using real pressed flowers and eco-friendly resin",
        "Hand-carved from sustainably sourced hardwoods in my home workshop",
        "Hand-embroidered by me using cotton thread on Belgian linen"
    ],
    location: ["Portland, Oregon", "Austin, Texas", "Brooklyn, New York"],
    targetAudience: ["Nature lovers and brides", "Home cooks who love rustic decor", "Pet parents who want lasting memories"]
};

const TONE_OPTIONS: { value: EtsyBioTone; label: string; description: string }[] = [
    { value: "professional", label: "Professional", description: "Polished and trustworthy" },
    { value: "friendly", label: "Friendly", description: "Warm and conversational" },
    { value: "playful", label: "Playful", description: "Fun and energetic" },
    { value: "heartfelt", label: "Heartfelt", description: "Emotional and sincere" },
    { value: "confident", label: "Confident", description: "Bold and modern" },
];

export default function EtsyBioGeneratorForm({ onGenerate, isPending }: EtsyBioGeneratorFormProps) {
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Form State
    const [shopName, setShopName] = useState("");
    const [whatYouSell, setWhatYouSell] = useState("");
    const [whyYouStarted, setWhyYouStarted] = useState("");
    const [howItsMade, setHowItsMade] = useState("");
    const [tone, setTone] = useState<EtsyBioTone>("friendly");
    const [location, setLocation] = useState("");
    const [targetAudience, setTargetAudience] = useState("");

    // Rotating Placeholders Logic
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setPlaceholderIndex((prev) => (prev + 1) % 3);
                setIsAnimating(false);
            }, 500);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onGenerate({
            shopName,
            whatYouSell,
            whyYouStarted,
            howItsMade,
            tone,
            location: location || undefined,
            targetAudience: targetAudience || undefined
        });
    };

    const getPlaceholderClass = () => `transition-all duration-500 placeholder:transition-all placeholder:duration-500 ${isAnimating ? "placeholder:opacity-0" : "placeholder:opacity-100"}`;

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {/* Card 1: Shop Identity */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs">1</span>
                        Shop Identity
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Shop Name */}
                    <div className="grid gap-2">
                        <Label htmlFor="shopName">Shop Name <span className="text-red-500">*</span></Label>
                        <Input
                            id="shopName"
                            value={shopName}
                            onChange={(e) => setShopName(e.target.value)}
                            className={!shopName ? getPlaceholderClass() : ""}
                            placeholder={PLACEHOLDERS.shopName[placeholderIndex]}
                            required
                        />
                    </div>

                    {/* What You Sell */}
                    <div className="grid gap-2">
                        <Label htmlFor="whatYouSell">What do you sell? <span className="text-red-500">*</span></Label>
                        <Textarea
                            id="whatYouSell"
                            value={whatYouSell}
                            onChange={(e) => setWhatYouSell(e.target.value)}
                            className={!whatYouSell ? getPlaceholderClass() : ""}
                            placeholder={PLACEHOLDERS.whatYouSell[placeholderIndex]}
                            required
                        />
                        <p className="text-xs text-muted-foreground">Briefly describe your main products or product categories.</p>
                    </div>
                </CardContent>
            </Card>

            {/* Card 2: Your Story */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs">2</span>
                        Your Story
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Why You Started */}
                    <div className="grid gap-2">
                        <Label htmlFor="whyYouStarted">Why did you start? <span className="text-red-500">*</span></Label>
                        <Textarea
                            id="whyYouStarted"
                            value={whyYouStarted}
                            onChange={(e) => setWhyYouStarted(e.target.value)}
                            className={!whyYouStarted ? getPlaceholderClass() : ""}
                            placeholder={PLACEHOLDERS.whyYouStarted[placeholderIndex]}
                            required
                        />
                        <p className="text-xs text-muted-foreground">One sentence about your origin story or motivation.</p>
                    </div>

                    {/* How It's Made */}
                    <div className="grid gap-2">
                        <Label htmlFor="howItsMade">How is it made? <span className="text-red-500">*</span></Label>
                        <Textarea
                            id="howItsMade"
                            value={howItsMade}
                            onChange={(e) => setHowItsMade(e.target.value)}
                            className={!howItsMade ? getPlaceholderClass() : ""}
                            placeholder={PLACEHOLDERS.howItsMade[placeholderIndex]}
                            required
                        />
                        <p className="text-xs text-muted-foreground">Describe your process and materials. Be honest if you use a print partner.</p>
                    </div>
                </CardContent>
            </Card>

            {/* Card 3: Additional Details */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs">3</span>
                        Additional Details
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Tone */}
                    <div className="grid gap-2">
                        <Label htmlFor="tone">Tone <span className="text-red-500">*</span></Label>
                        <Select value={tone} onValueChange={(value: EtsyBioTone) => setTone(value)}>
                            <SelectTrigger id="tone">
                                <SelectValue placeholder="Select a tone" />
                            </SelectTrigger>
                            <SelectContent>
                                {TONE_OPTIONS.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        <span className="font-medium">{option.label}</span>
                                        <span className="text-muted-foreground ml-2">— {option.description}</span>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <p className="text-xs text-muted-foreground">Choose the writing style that best fits your brand.</p>
                    </div>

                    {/* Location */}
                    <div className="grid gap-2">
                        <Label htmlFor="location">Location (optional)</Label>
                        <Input
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className={!location ? getPlaceholderClass() : ""}
                            placeholder={PLACEHOLDERS.location[placeholderIndex]}
                        />
                        <p className="text-xs text-muted-foreground">Where you&apos;re based. Helps with local SEO and buyer connection.</p>
                    </div>

                    {/* Target Audience */}
                    <div className="grid gap-2">
                        <Label htmlFor="targetAudience">Target Audience (optional)</Label>
                        <Input
                            id="targetAudience"
                            value={targetAudience}
                            onChange={(e) => setTargetAudience(e.target.value)}
                            className={!targetAudience ? getPlaceholderClass() : ""}
                            placeholder={PLACEHOLDERS.targetAudience[placeholderIndex]}
                        />
                        <p className="text-xs text-muted-foreground">Who are your ideal customers?</p>
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
                        {isPending ? "Generating..." : "Generate Bio"}
                    </span>
                </button>
            </div>
        </form>
    );
}
