"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Store, MessageSquare, Sparkles, RefreshCw, Copy, Trash2, Check, ChevronDown, ChevronUp } from "lucide-react";
import { InfoTooltip } from "@/components/common/InfoTooltip";
import { useState, useCallback, useMemo } from "react";
import { EtsyFaqItem, EtsyFaqCategory, EtsyFaqDashboardStats, FAQ_CATEGORY_LABELS } from "@/types/etsy/faq-generator";
import { useEtsyFaqGenerator, useEtsyFaqRewrite } from "@/hooks/etsy";
import EtsyFaqDashboard from "./EtsyFaqDashboard";
import EtsyFaqGeneratorGuide from "./EtsyFaqGeneratorGuide";
import EtsyFaqGeneratorFAQ from "./EtsyFaqGeneratorFAQ";
import CTA from "@/components/common/CTA";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

// Generate unique IDs for FAQs
function generateId(): string {
    return `faq-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Count words in a string
function countWords(text: string): number {
    return text.split(/\s+/).filter(Boolean).length;
}

export default function EtsyFaqGeneratorPageContent() {
    const [shopName, setShopName] = useState("");
    const [productsSold, setProductsSold] = useState("");
    const [faqs, setFaqs] = useState<EtsyFaqItem[]>([]);

    // UI States
    const [rewritingId, setRewritingId] = useState<string | null>(null);
    const [copiedId, setCopiedId] = useState<string | null>(null);
    const [copiedAll, setCopiedAll] = useState(false);

    const { mutate: generateFaqs, isPending: isGenerating } = useEtsyFaqGenerator();
    const { mutate: rewriteFaq } = useEtsyFaqRewrite();

    const handleGenerate = useCallback(() => {
        if (!shopName || !productsSold) return;

        generateFaqs(
            {
                shopName,
                productsSold,
                existingFaqIds: faqs.map(f => f.id),
            },
            {
                onSuccess: (result) => {
                    const newFaqs: EtsyFaqItem[] = result.faqs.map((faq) => ({
                        id: generateId(),
                        question: faq.question,
                        answer: faq.answer,
                        category: faq.category as EtsyFaqCategory,
                        wordCount: countWords(faq.answer),
                        status: 'needs_review',
                        isRewritten: false,
                        isDeleted: false,
                    }));
                    setFaqs(prev => [...prev, ...newFaqs]);
                },
            }
        );
    }, [generateFaqs, faqs, shopName, productsSold]);

    const handleRewrite = useCallback((id: string) => {
        const faq = faqs.find(f => f.id === id);
        if (!faq) return;

        setRewritingId(id);
        rewriteFaq(
            {
                shopName,
                productsSold,
                faq: {
                    question: faq.question,
                    answer: faq.answer,
                    category: faq.category,
                },
            },
            {
                onSuccess: (result) => {
                    setFaqs(prev => prev.map(f =>
                        f.id === id ? {
                            ...f,
                            question: result.question,
                            answer: result.answer,
                            category: result.category as EtsyFaqCategory,
                            wordCount: countWords(result.answer),
                            isRewritten: true,
                            status: 'needs_review' as const,
                        } : f
                    ));
                    setRewritingId(null);
                },
                onError: () => setRewritingId(null),
            }
        );
    }, [faqs, shopName, productsSold, rewriteFaq]);

    const handleDelete = useCallback((id: string) => {
        setFaqs(prev => prev.map(f =>
            f.id === id ? { ...f, isDeleted: true } : f
        ));
    }, []);

    const handleCopy = useCallback((id: string) => {
        const faq = faqs.find(f => f.id === id);
        if (faq) {
            const text = `Q: ${faq.question}\nA: ${faq.answer}`;
            navigator.clipboard.writeText(text);
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000);

            setFaqs(prev => prev.map(f =>
                f.id === id ? { ...f, status: 'ready' as const } : f
            ));
        }
    }, [faqs]);

    const handleCopyAll = useCallback(() => {
        const activeFaqs = faqs.filter(f => !f.isDeleted);
        if (activeFaqs.length === 0) return;

        const text = activeFaqs.map(f => `Q: ${f.question}\nA: ${f.answer}`).join('\n\n');
        navigator.clipboard.writeText(text);
        setCopiedAll(true);
        setTimeout(() => setCopiedAll(false), 2000);

        setFaqs(prev => prev.map(f =>
            !f.isDeleted ? { ...f, status: 'ready' as const } : f
        ));
    }, [faqs]);

    const handleAnswerChange = useCallback((id: string, answer: string) => {
        setFaqs(prev => prev.map(f =>
            f.id === id ? {
                ...f,
                answer,
                wordCount: countWords(answer),
                status: 'ready' as const
            } : f
        ));
    }, []);

    // Stats Calculation
    const stats: EtsyFaqDashboardStats = useMemo(() => {
        const activeFaqs = faqs.filter(f => !f.isDeleted);
        return {
            totalGenerated: faqs.length,
            saved: activeFaqs.filter(f => f.status === 'ready').length,
            rewritten: faqs.filter(f => f.isRewritten).length,
            deleted: faqs.filter(f => f.isDeleted).length,
            ready: activeFaqs.filter(f => f.status === 'ready').length,
            needsReview: activeFaqs.filter(f => f.status === 'needs_review').length,
            notStarted: activeFaqs.filter(f => f.status === 'not_started').length,
        };
    }, [faqs]);

    const hasGenerated = faqs.length > 0;
    const activeFaqs = faqs.filter(f => !f.isDeleted);
    const isValid = shopName.trim().length > 0 && productsSold.trim().length > 0;

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-black pt-16 pb-12 px-4 sm:px-6 lg:px-8">
            <article className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="mb-16 flex flex-col items-center text-center">
                    <div className="mb-6 inline-flex item-center justify-center rounded-full border border-orange-200 bg-orange-50/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#F1641E] backdrop-blur-sm dark:border-orange-900/30 dark:bg-orange-900/10 dark:text-orange-400">
                        Free Etsy Seller Tool
                    </div>

                    <h1 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
                        Etsy FAQ Generator
                    </h1>

                    <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed text-muted-foreground">
                        Generate professional, helpful FAQs for your Etsy shop in seconds.
                        Reduce buyer questions and build trust with clear answers.
                    </p>
                </header>

                <div className="flex flex-col lg:flex-row gap-6 items-start">
                    {/* Left Column: Form & Results */}
                    <section className="w-full lg:w-3/5" aria-labelledby="generator-heading">
                        <h2 id="generator-heading" className="sr-only">Generator Form & Results</h2>
                        <Card className="shadow-sm">
                            <CardHeader className="border-b gap-0">
                                <CardTitle className="flex items-center gap-2 text-base font-semibold text-gray-900 dark:text-gray-100">
                                    <Store className="w-5 h-5 text-gray-500" aria-hidden="true" />
                                    Shop Details
                                </CardTitle>
                            </CardHeader>
                            {/* Section 1: Shop Details */}
                            <div className="border-b">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pb-6">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Label htmlFor="shopName" className="text-sm font-medium text-gray-700 dark:text-gray-300">Shop Name</Label>
                                            <InfoTooltip text="Your Etsy shop name as it appears on your storefront" />
                                        </div>
                                        <div className="flex rounded-md shadow-sm">
                                            <div className="inline-flex items-center rounded-l-md border border-r-0 border-input bg-gray-50/50 px-3 text-muted-foreground sm:text-sm">
                                                @
                                            </div>
                                            <Input
                                                id="shopName"
                                                value={shopName}
                                                onChange={(e) => setShopName(e.target.value)}
                                                placeholder="VintageVibes"
                                                className="rounded-l-none -ml-px bg-white dark:bg-gray-950 focus-visible:ring-1 focus-visible:ring-offset-0"
                                                disabled={isGenerating}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Label htmlFor="productsSold" className="text-sm font-medium text-gray-700 dark:text-gray-300">Products Sold</Label>
                                            <InfoTooltip text="Describe the types of products you sell in your shop" />
                                        </div>
                                        <Input
                                            id="productsSold"
                                            value={productsSold}
                                            onChange={(e) => setProductsSold(e.target.value)}
                                            placeholder="Handmade jewelry, digital planners..."
                                            className="bg-white dark:bg-gray-950 shadow-sm focus-visible:ring-1 focus-visible:ring-offset-0"
                                            disabled={isGenerating}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Generated FAQs */}
                            {hasGenerated && (
                                <div className="border-b pb-6 space-y-4">
                                    <CardHeader className="border-b gap-0">
                                        <CardTitle className="flex items-center gap-2 text-base font-semibold text-gray-900 dark:text-gray-100">
                                            <MessageSquare className="w-5 h-5 text-gray-500" aria-hidden="true" />
                                            Generated FAQs
                                            <Badge variant="secondary" className="self-end bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400 px-3 py-1 text-xs font-medium">
                                                {activeFaqs.length} Generated
                                            </Badge>
                                        </CardTitle>
                                    </CardHeader>

                                    <div className="space-y-3 px-6 pb-6">
                                        {activeFaqs.map((faq) => (
                                            <FaqItem
                                                key={faq.id}
                                                faq={faq}
                                                onRewrite={handleRewrite}
                                                onDelete={handleDelete}
                                                onCopy={handleCopy}
                                                onAnswerChange={handleAnswerChange}
                                                isRewriting={rewritingId === faq.id}
                                                isCopied={copiedId === faq.id}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Footer: Generate Button */}
                            <div className="px-6 bg-gray-50/30 dark:bg-gray-900/10">
                                <button
                                    onClick={handleGenerate}
                                    disabled={isGenerating || !isValid}
                                    className={`
                                        group relative flex items-center justify-center
                                        w-full h-14 rounded-xl
                                        bg-[rgb(20,20,20)] border-none
                                        font-semibold text-white
                                        shadow-[0px_0px_0px_4px_rgba(249,115,22,0.253)]
                                        cursor-pointer transition-all duration-300 overflow-hidden
                                        hover:bg-orange-600
                                        disabled:opacity-70 disabled:cursor-not-allowed
                                        ${isGenerating ? "bg-orange-600" : ""}
                                    `}
                                >
                                    <span className={`
                                        w-4 h-4 transition-all duration-300
                                        ${isGenerating ? "-translate-y-[220%]" : "group-hover:-translate-y-[220%]"}
                                    `}>
                                        <Sparkles size={16} aria-hidden="true" />
                                    </span>

                                    <span className={`
                                        absolute text-white flex items-center justify-center gap-2
                                        transition-all duration-300
                                        transform
                                        ${isGenerating
                                            ? "translate-y-0 opacity-100"
                                            : "translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                                        }
                                    `}>
                                        {isGenerating && <Sparkles size={16} className="animate-spin" aria-hidden="true" />}
                                        {isGenerating ? "Generating..." : (hasGenerated ? "Add more FAQs" : "Generate FAQs")}
                                    </span>
                                </button>
                            </div>
                        </Card>
                    </section>

                    {/* Right Column: Dashboard */}
                    <aside className="w-full lg:w-2/5 lg:sticky lg:top-22 space-y-6" aria-label="FAQ Dashboard">
                        <EtsyFaqDashboard
                            stats={stats}
                            onCopyAll={handleCopyAll}
                            isCopied={copiedAll}
                        />
                    </aside>
                </div>

                <CTA variant="card" className="mt-12" />

                <section aria-labelledby="guide-heading">
                    <EtsyFaqGeneratorGuide />
                </section>

                <section aria-labelledby="faq-heading">
                    <EtsyFaqGeneratorFAQ />
                </section>
            </article>
        </main>
    );
}

function FaqItem({
    faq,
    onRewrite,
    onDelete,
    onCopy,
    onAnswerChange,
    isRewriting,
    isCopied
}: {
    faq: EtsyFaqItem,
    onRewrite: (id: string) => void,
    onDelete: (id: string) => void,
    onCopy: (id: string) => void,
    onAnswerChange: (id: string, text: string) => void,
    isRewriting: boolean,
    isCopied: boolean
}) {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editedAnswer, setEditedAnswer] = useState(faq.answer);

    const handleSave = () => {
        onAnswerChange(faq.id, editedAnswer);
        setIsEditing(false);
    };

    return (
        <div className="border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-sm transition-shadow duration-200 bg-white dark:bg-black p-5">
            <div className="flex items-start gap-4">

                <div className="flex-1 space-y-3">
                    {/* Header Row */}
                    <div className="flex items-start justify-between gap-4">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="mt-1 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none cursor-pointer"
                            aria-label={isExpanded ? "Collapse FAQ" : "Expand FAQ"}
                        >
                            {isExpanded ? <ChevronUp className="w-4 h-4" aria-hidden="true" /> : <ChevronDown className="w-4 h-4" aria-hidden="true" />}
                        </button>
                        <div className="space-y-1.5 w-full">
                            <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 leading-tight">
                                {faq.question}
                            </h4>
                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                {FAQ_CATEGORY_LABELS[faq.category]}
                            </div>
                        </div>

                        <div className="flex items-center gap-1.5">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => onRewrite(faq.id)}
                                disabled={isRewriting}
                                className="h-8 px-3 text-xs font-medium border-gray-200 hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:hover:bg-gray-800"
                                aria-label="Rewrite this FAQ"
                            >
                                <RefreshCw className={`w-3 h-3 mr-1.5 ${isRewriting ? 'animate-spin' : ''}`} aria-hidden="true" />
                                Rewrite
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => onCopy(faq.id)}
                                className="h-8 w-8 text-gray-400 hover:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                                aria-label="Copy this FAQ"
                            >
                                {isCopied ? <Check className="w-4 h-4 text-green-600" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => onDelete(faq.id)}
                                className="h-8 w-8 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                                aria-label="Delete this FAQ"
                            >
                                <Trash2 className="w-4 h-4" aria-hidden="true" />
                            </Button>
                        </div>
                    </div>

                    {/* Answer Box */}
                    {isExpanded && (
                        <div className="relative pt-1">
                            {isEditing ? (
                                <div className="space-y-2">
                                    <Textarea
                                        value={editedAnswer}
                                        onChange={(e) => setEditedAnswer(e.target.value)}
                                        className="min-h-[100px] bg-gray-50 dark:bg-gray-900 resize-none text-sm"
                                        aria-label="Edit Answer"
                                    />
                                    <div className="flex gap-2 justify-end">
                                        <Button size="sm" variant="ghost" onClick={() => setIsEditing(false)}>Cancel</Button>
                                        <Button size="sm" onClick={handleSave}>Save Changes</Button>
                                    </div>
                                </div>
                            ) : (
                                <div
                                    onClick={() => setIsEditing(true)}
                                    className="group relative p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg text-sm text-gray-600 dark:text-gray-300 leading-relaxed cursor-text hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-800"
                                    role="button"
                                    aria-label="Click to edit answer"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            setIsEditing(true);
                                        }
                                    }}
                                >
                                    {faq.answer}
                                    <div className="absolute bottom-2 right-3 text-[10px] text-gray-400 font-medium">
                                        {faq.wordCount} words
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
