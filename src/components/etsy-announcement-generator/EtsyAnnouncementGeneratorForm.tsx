"use client";

import { useState } from "react";
import { EtsyAnnouncementGeneratorInput } from "@/types/etsy/announcement-generator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Store, Loader2 } from "lucide-react";

interface EtsyAnnouncementGeneratorFormProps {
    onGenerate: (data: EtsyAnnouncementGeneratorInput) => void;
    isPending: boolean;
}

const UPDATE_TYPES = [
    { value: "sale", label: "Run a Sale" },
    { value: "new_product", label: "New Product Launch" },
    { value: "restocked", label: "Restocked Item" },
    { value: "policy_update", label: "Shop Update / Policy Change" },
    { value: "custom", label: "General Update / Other" },
];

const UPDATE_DETAILS_PLACEHOLDERS: Record<string, string> = {
    sale: "e.g. 20% off all items, Buy 2 Get 1 Free",
    new_product: "e.g. Introducing our new handmade ceramic mugs",
    restocked: "e.g. Popular wooden coasters are back in stock",
    policy_update: "e.g. Updated shipping times, New return policy",
    custom: "e.g. Holiday hours, Thank you message",
};

export default function EtsyAnnouncementGeneratorForm({ onGenerate, isPending }: EtsyAnnouncementGeneratorFormProps) {
    const [formData, setFormData] = useState<EtsyAnnouncementGeneratorInput>({
        shopName: "",
        whatYouSell: "",
        updateType: "",
        updateDetails: "",
        callToAction: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onGenerate(formData);
    };

    return (
        <Card className="border-2 border-muted/50 shadow-sm">
            <CardHeader className="pb-4 border-b gap-0">
                <div className="flex items-center gap-2">
                    <Store className="w-5 h-5" />
                    <CardTitle className="font-medium">Shop Details</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="shopName" className="flex items-center gap-1 font-semibold text-muted-foreground">
                            Shop Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="shopName"
                            placeholder="e.g. The Rustic Oak"
                            value={formData.shopName}
                            onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
                            required
                            className="bg-background"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="whatYouSell" className="flex items-center gap-1 font-semibold text-muted-foreground">
                            What do you sell? <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                            id="whatYouSell"
                            placeholder="e.g. Custom engraved wooden cutting boards, handmade rustic decor, eco-friendly kitchenware..."
                            value={formData.whatYouSell}
                            onChange={(e) => setFormData({ ...formData, whatYouSell: e.target.value })}
                            required
                            className="bg-background min-h-[80px]"
                        />
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="updateType" className="font-semibold text-muted-foreground">
                                What&apos;s the update? <span className="text-red-500">*</span>
                            </Label>
                            <Select
                                value={formData.updateType}
                                onValueChange={(value) => setFormData({ ...formData, updateType: value })}
                                required
                            >
                                <SelectTrigger id="updateType" className="bg-background w-xs">
                                    <SelectValue placeholder="Select Update Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    {UPDATE_TYPES.map((type) => (
                                        <SelectItem key={type.value} value={type.value}>
                                            {type.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2 min-w-3xs grow">
                            <Label htmlFor="updateDetails" className="font-semibold text-muted-foreground">
                                Update Details
                            </Label>
                            <Input
                                id="updateDetails"
                                placeholder={UPDATE_DETAILS_PLACEHOLDERS[formData.updateType] || "e.g. 20% off all items"}
                                value={formData.updateDetails}
                                onChange={(e) => setFormData({ ...formData, updateDetails: e.target.value })}
                                className="bg-background"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="callToAction" className="font-semibold text-muted-foreground pb-1">
                            Call to Action <span className="text-muted-foreground font-normal">(Optional)</span>
                        </Label>
                        <Input
                            id="callToAction"
                            placeholder="e.g. Shop the sale now!"
                            value={formData.callToAction}
                            onChange={(e) => setFormData({ ...formData, callToAction: e.target.value })}
                            className="bg-background"
                        />
                    </div>

                    <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-[#111827] hover:bg-[#1f2937] text-white font-medium h-12 rounded-full mt-2"
                        disabled={isPending}
                    >
                        {isPending ? (
                            <>
                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                Generating Announcements...
                            </>
                        ) : (
                            <>
                                <Sparkles className="w-5 h-5 mr-2" />
                                Generate Announcements
                            </>
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
