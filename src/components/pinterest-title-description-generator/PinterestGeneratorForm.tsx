"use client";

import { useState } from "react";
import { PinterestInput, ToneOptions, LengthOptions } from "@/types/pinterest";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

interface PinterestGeneratorFormProps {
    onGenerate: (data: PinterestInput) => void;
    isPending: boolean;
}

export default function PinterestGeneratorForm({ onGenerate, isPending }: PinterestGeneratorFormProps) {
    const [mode, setMode] = useState<'manual' | 'import'>('manual');
    const [manualDescription, setManualDescription] = useState("");
    const [importUrl, setImportUrl] = useState("");
    const [platform, setPlatform] = useState<'etsy' | 'shopify'>('etsy');
    const [tone, setTone] = useState<ToneOptions>('formal');
    const [length, setLength] = useState<LengthOptions>('medium');
    const [includeHashtags, setIncludeHashtags] = useState(true);
    const [includeEmojis, setIncludeEmojis] = useState(true);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const config = {
            tone,
            length,
            includeHashtags,
            includeEmojis,
        };

        let inputData: PinterestInput;

        if (mode === 'manual') {
            inputData = {
                mode: 'manual',
                manualInput: { description: manualDescription },
                config,
            };
        } else {
            inputData = {
                mode: 'import',
                importInput: { url: importUrl, platform },
                config,
            };
        }

        onGenerate(inputData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {/* Source Material Section */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs">1</span>
                        Source Material
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Tabs value={mode} onValueChange={(v) => setMode(v as 'manual' | 'import')} className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-6">
                            <TabsTrigger value="manual">Manual Input</TabsTrigger>
                            <TabsTrigger value="import">Import URL</TabsTrigger>
                        </TabsList>

                        <TabsContent value="manual" className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="description">Product Description</Label>
                                <Textarea
                                    id="description"
                                    placeholder="Describe your product in detail... (e.g. Handmade ceramic vase with blue floral patterns)"
                                    className="min-h-[150px]"
                                    value={manualDescription}
                                    onChange={(e) => setManualDescription(e.target.value)}
                                    required={mode === 'manual'}
                                />
                            </div>
                        </TabsContent>

                        <TabsContent value="import" className="space-y-4">
                            <div className="grid gap-4 sm:grid-cols-3">
                                <div className="sm:col-span-1 grid gap-2">
                                    <Label>Platform</Label>
                                    <Select value={platform} onValueChange={(v) => setPlatform(v as 'etsy' | 'shopify')}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select platform" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="etsy">Etsy</SelectItem>
                                            <SelectItem value="shopify">Shopify</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="sm:col-span-2 grid gap-2">
                                    <Label htmlFor="url">Product URL</Label>
                                    <Input
                                        id="url"
                                        type="url"
                                        placeholder="https://..."
                                        value={importUrl}
                                        onChange={(e) => setImportUrl(e.target.value)}
                                        required={mode === 'import'}
                                    />
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>

            {/* Configuration Section */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs">2</span>
                        Configuration
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-4">
                        <Label>Tone of Voice</Label>
                        <div className="grid grid-cols-2 gap-2">
                            {(['formal', 'casual', 'sale', 'witty', 'exciting'] as ToneOptions[]).map((t) => (
                                <Button
                                    key={t}
                                    type="button"
                                    variant={tone === t ? "default" : "outline"}
                                    onClick={() => setTone(t)}
                                    className="w-full justify-start capitalize"
                                >
                                    {t}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-4">
                            <Label>Description Length</Label>
                            <div className="flex p-1 bg-muted rounded-lg">
                                {(['small', 'medium', 'large'] as LengthOptions[]).map((l) => (
                                    <Button
                                        key={l}
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => setLength(l)}
                                        className={`flex-1 capitalize shadow-none ${length === l ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"}`}
                                    >
                                        {l}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between space-x-4 border p-3 rounded-lg">
                                <Label htmlFor="hashtags" className="flex flex-col gap-1 cursor-pointer">
                                    <span className="font-medium">Include Hashtags</span>
                                    <span className="font-normal text-xs text-muted-foreground">Add relevant tags to your description</span>
                                </Label>
                                <Switch
                                    id="hashtags"
                                    checked={includeHashtags}
                                    onCheckedChange={setIncludeHashtags}
                                />
                            </div>

                            <div className="flex items-center justify-between space-x-4 border p-3 rounded-lg">
                                <Label htmlFor="emojis" className="flex flex-col gap-1 cursor-pointer">
                                    <span className="font-medium">Include Emojis</span>
                                    <span className="font-normal text-xs text-muted-foreground">Add relevant emojis to title & text</span>
                                </Label>
                                <Switch
                                    id="emojis"
                                    checked={includeEmojis}
                                    onCheckedChange={setIncludeEmojis}
                                />
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Button type="submit" size="lg" className="w-full text-lg h-14" disabled={isPending}>
                {isPending ? (
                    <>Generating...</>
                ) : (
                    <>Generate Content</>
                )}
            </Button>
        </form>
    );
}
