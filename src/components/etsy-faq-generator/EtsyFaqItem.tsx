"use client";

import { useState } from "react";
import { EtsyFaqItem as FaqItemType, FAQ_CATEGORY_LABELS } from "@/types/etsy/faq-generator";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RefreshCw, Copy, Trash2, Check, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface EtsyFaqItemProps {
    faq: FaqItemType;
    onRewrite: (id: string) => void;
    onDelete: (id: string) => void;
    onCopy: (id: string) => void;
    onAnswerChange: (id: string, answer: string) => void;
    isRewriting: boolean;
    copiedId: string | null;
}

export default function EtsyFaqItemComponent({
    faq,
    onRewrite,
    onDelete,
    onCopy,
    onAnswerChange,
    isRewriting,
    copiedId,
}: EtsyFaqItemProps) {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editedAnswer, setEditedAnswer] = useState(faq.answer);

    const handleSaveEdit = () => {
        onAnswerChange(faq.id, editedAnswer);
        setIsEditing(false);
    };

    const handleCancelEdit = () => {
        setEditedAnswer(faq.answer);
        setIsEditing(false);
    };

    const isCopied = copiedId === faq.id;

    return (
        <Card className={`transition-all duration-300 ${faq.isDeleted ? 'opacity-50' : 'hover:shadow-md'}`}>
            <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="flex items-start gap-3 text-left w-full group"
                        >
                            <span className="mt-1 text-muted-foreground transition-transform duration-200">
                                {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                            </span>
                            <div className="flex-1">
                                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                                    {faq.question}
                                </h3>
                                <div className="mt-2">
                                    <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-gray-500/10 uppercase tracking-wide">
                                        {FAQ_CATEGORY_LABELS[faq.category]}
                                    </span>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1 shrink-0">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onRewrite(faq.id)}
                            disabled={isRewriting || faq.isDeleted}
                            className="h-8 px-3 text-xs font-medium"
                        >
                            <RefreshCw className={`h-3.5 w-3.5 mr-1.5 ${isRewriting ? 'animate-spin' : ''}`} />
                            Rewrite
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => onCopy(faq.id)}
                            disabled={faq.isDeleted}
                            className="h-8 w-8 hover:bg-green-50 hover:text-green-600 transition-colors"
                        >
                            {isCopied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => onDelete(faq.id)}
                            disabled={faq.isDeleted}
                            className="h-8 w-8 text-muted-foreground hover:text-red-600 hover:bg-red-50 transition-colors"
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Answer */}
                <div className={`grid transition-[grid-template-rows] duration-200 ease-out ${isExpanded ? 'grid-rows-[1fr] mt-4' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden ml-7">
                        {isEditing ? (
                            <div className="space-y-3">
                                <Textarea
                                    value={editedAnswer}
                                    onChange={(e) => setEditedAnswer(e.target.value)}
                                    className="min-h-[120px] text-base resize-none"
                                />
                                <div className="flex gap-2 justify-end">
                                    <Button size="sm" variant="outline" onClick={handleCancelEdit}>Cancel</Button>
                                    <Button size="sm" onClick={handleSaveEdit}>Save Changes</Button>
                                </div>
                            </div>
                        ) : (
                            <div
                                onClick={() => !faq.isDeleted && setIsEditing(true)}
                                className={`
                                    relative p-4 rounded-lg bg-secondary/30 text-base leading-relaxed text-foreground
                                    border border-transparent
                                    ${!faq.isDeleted ? 'cursor-text hover:border-border hover:bg-secondary/50 transition-all' : ''}
                                `}
                            >
                                {faq.answer}
                            </div>
                        )}
                        <div className="mt-2 text-xs font-medium text-muted-foreground text-right flex items-center justify-end gap-1">
                            <span>{faq.wordCount} words</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
