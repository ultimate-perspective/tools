"use client";

import { useState } from "react";
import { PinterestInput, ToneOptions, LengthOptions } from "@/types/pinterest";
import { ShopProduct } from "@/types/shop";
import { useShopProducts } from "@/hooks/shop";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkle, X } from "lucide-react";
import { LiaEtsy } from "react-icons/lia";
import { SiShopify } from "react-icons/si";

interface PinterestGeneratorFormProps {
    onGenerate: (data: PinterestInput) => void;
    isPending: boolean;
}

export default function PinterestGeneratorForm({ onGenerate, isPending }: PinterestGeneratorFormProps) {
    const [mode, setMode] = useState<'manual' | 'import'>('import');
    const [manualDescription, setManualDescription] = useState("");
    const [importUrl, setImportUrl] = useState("");
    const [platform, setPlatform] = useState<'etsy' | 'shopify'>('etsy');
    const [tone, setTone] = useState<ToneOptions>('formal');
    const [length, setLength] = useState<LengthOptions>('medium');
    const [includeHashtags, setIncludeHashtags] = useState(true);
    const [includeEmojis, setIncludeEmojis] = useState(true);

    // New state for selected product
    const [selectedProduct, setSelectedProduct] = useState<ShopProduct | null>(null);

    // Fetch products
    const { data: products, isLoading: isLoadingProducts, error: productsError } = useShopProducts(importUrl, platform);

    // Reset selection when URL or platform changes
    // (This might be better handled in a useEffect, or just let the user re-select)
    // Actually, distinct URLs usually mean new products.

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
            // For import mode, we pass the selected product details if available
            inputData = {
                mode: 'import',
                importInput: {
                    url: importUrl,
                    platform,
                    selectedProduct: selectedProduct ? {
                        title: selectedProduct.title,
                        description: selectedProduct.description
                    } : undefined
                },
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
                            <TabsTrigger value="import">Import from Shop</TabsTrigger>
                            <TabsTrigger value="manual">Manual Input</TabsTrigger>
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
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select platform" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="etsy">
                                                <div className="flex items-center gap-2">
                                                    <LiaEtsy className="text-etsy" />
                                                    Etsy
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="shopify">
                                                <div className="flex items-center gap-2">
                                                    <SiShopify className="text-shopify" />
                                                    Shopify
                                                </div>
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="sm:col-span-2 grid gap-2">
                                    <Label htmlFor="url">Shop URL</Label>
                                    <Input
                                        id="url"
                                        type="url"
                                        placeholder={platform === 'etsy' ? "https://www.etsy.com/shop/YourShopName" : "https://yourshop.com/products/..."}
                                        value={importUrl}
                                        onChange={(e) => {
                                            setImportUrl(e.target.value);
                                            setSelectedProduct(null); // Reset selection on URL change
                                        }}
                                        required={mode === 'import'}
                                    />
                                </div>
                            </div>

                            {/* Product List / Selection */}
                            {importUrl && (
                                <div className="mt-4 pt-4 border-t">
                                    {isLoadingProducts ? (
                                        <div className="flex items-center justify-center p-8 bg-muted/30 rounded-lg animate-pulse">
                                            <div className="text-sm text-muted-foreground flex items-center gap-2">
                                                <Sparkle className="w-4 h-4 animate-spin" />
                                                Fetching products...
                                            </div>
                                        </div>
                                    ) : productsError ? (
                                        <div className="p-4 bg-destructive/10 text-destructive text-sm rounded-lg">
                                            {productsError}
                                        </div>
                                    ) : products.length > 0 ? (
                                        <div className="space-y-4">
                                            <Label>Select a Product</Label>
                                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[400px] overflow-y-auto pr-2">
                                                {products.map((product) => (
                                                    <div
                                                        key={product.id || product.url}
                                                        onClick={() => setSelectedProduct(product)}
                                                        className={`relative group cursor-pointer border rounded-lg overflow-hidden transition-all ${selectedProduct?.url === product.url ? 'border-primary' : 'hover:border-primary/50'}`}
                                                    >
                                                        <div className="aspect-square bg-muted">
                                                            {product.image && (
                                                                <img
                                                                    src={product.image}
                                                                    alt={product.title}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            )}
                                                        </div>
                                                        <div className="p-2">
                                                            <h4 className="text-xs font-medium truncate" title={product.title}>{product.title}</h4>
                                                            {product.price && <p className="text-xs text-muted-foreground">{product.price}</p>}
                                                        </div>
                                                        {selectedProduct?.url === product.url && (
                                                            <div className="absolute top-2 right-2 w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">
                                                                ✓
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>

                                            {selectedProduct && (
                                                <div className="relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm animate-in fade-in slide-in-from-bottom-2">
                                                    <div className="grid grid-cols-[100px_1fr]">
                                                        {/* Image Section */}
                                                        <div className="relative aspect-square bg-muted">
                                                            {selectedProduct.image ? (
                                                                <img
                                                                    src={selectedProduct.image}
                                                                    alt={selectedProduct.title}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            ) : (
                                                                <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-muted/50">
                                                                    <Sparkle className="w-6 h-6 opacity-20" />
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* Content Section */}
                                                        <div className="p-4 flex flex-col justify-center min-w-0">
                                                            <div className="flex items-start justify-between gap-4">
                                                                <div className="space-y-1 min-w-0 flex-1">
                                                                    <div className="flex items-center gap-2">
                                                                        <h4 className="font-semibold text-base truncate pr-2" title={selectedProduct.title}>
                                                                            {selectedProduct.title}
                                                                        </h4>
                                                                        {selectedProduct.price && (
                                                                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground shrink-0">
                                                                                {selectedProduct.price}
                                                                            </span>
                                                                        )}
                                                                    </div>

                                                                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                                                                        {selectedProduct.description || "No description available"}
                                                                    </p>
                                                                </div>

                                                                <Button
                                                                    type="button"
                                                                    variant="ghost"
                                                                    size="icon"
                                                                    className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 -mt-2 -mr-2"
                                                                    onClick={() => setSelectedProduct(null)}
                                                                    title="Remove selection"
                                                                >
                                                                    <X className="h-4 w-4" />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="text-sm text-muted-foreground p-4 text-center">
                                            No products found. Please check the URL.
                                        </div>
                                    )}
                                </div>
                            )}
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
                                        className={`flex-1 capitalize shadow-none cursor-pointer ${length === l ? "bg-background text-foreground shadow-sm font-medium hover:bg-background cursor-default" : "text-muted-foreground hover:text-foreground"}`}
                                    >
                                        {l}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label
                                className="flex items-center justify-between cursor-pointer border rounded-xl p-4 shadow-sm bg-card hover:bg-accent/50 transition-colors"
                            >
                                <div className="flex flex-col items-start gap-1">
                                    <span className="font-medium text-sm">Include Hashtags</span>
                                    <span className="font-normal text-xs text-muted-foreground">Add relevant tags to your description</span>
                                </div>
                                <Switch
                                    checked={includeHashtags}
                                    onCheckedChange={setIncludeHashtags}
                                />
                            </label>

                            <label
                                className="flex items-center justify-between cursor-pointer border rounded-xl p-4 shadow-sm bg-card hover:bg-accent/50 transition-colors"
                            >
                                <div className="flex flex-col items-start gap-1">
                                    <span className="font-medium text-sm">Include Emojis</span>
                                    <span className="font-normal text-xs text-muted-foreground">Add relevant emojis to title & text</span>
                                </div>
                                <Switch
                                    checked={includeEmojis}
                                    onCheckedChange={setIncludeEmojis}
                                />
                            </label>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="flex justify-center pt-4 w-full">
                <button
                    type="submit"
                    disabled={isPending || (mode === 'import' && !selectedProduct)}
                    className={`
                        group relative flex items-center justify-center
                        w-full h-14 rounded-full
                        bg-[rgb(20,20,20)] border-none
                        font-semibold text-white
                        shadow-[0px_0px_0px_4px_rgba(180,160,255,0.253)]
                        cursor-pointer transition-all duration-300 overflow-hidden
                        hover:bg-brand
                        disabled:opacity-70 disabled:cursor-not-allowed
                        ${isPending ? "bg-brand" : ""}
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
                        {isPending ? "Generating..." : "Generate"}
                    </span>
                </button>
            </div>
        </form>
    );
}
