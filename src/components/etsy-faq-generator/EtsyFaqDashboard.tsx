"use client";

import { EtsyFaqDashboardStats } from "@/types/etsy/faq-generator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Copy, Check } from "lucide-react";

interface EtsyFaqDashboardProps {
    stats: EtsyFaqDashboardStats;
    onCopyAll: () => void;
    isCopied: boolean;
}

export default function EtsyFaqDashboard({ stats, onCopyAll, isCopied }: EtsyFaqDashboardProps) {
    const totalActive = stats.ready + stats.needsReview + stats.notStarted;
    const readyPercent = totalActive > 0 ? (stats.ready / totalActive) * 100 : 0;
    const needsReviewPercent = totalActive > 0 ? (stats.needsReview / totalActive) * 100 : 0;

    return (
        <Card className="shadow-sm sticky top-24">
            <CardHeader className="border-b gap-0">
                <CardTitle className="flex items-center gap-2 text-base font-semibold text-gray-900 dark:text-gray-100">
                    <LayoutDashboard className="w-5 h-5 text-gray-500" />
                    Dashboard Summary
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* FAQ Collection */}
                <div className="space-y-2">
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">FAQ Collection</h3>
                    <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                            {stats.totalGenerated - stats.deleted}
                        </span>
                        <span className="text-2xl font-medium text-gray-400">/ {stats.totalGenerated}</span>
                    </div>
                    <p className="text-sm text-gray-500 font-medium">Total Generated</p>
                </div>

                {/* 3-Col Grid Metrics */}
                <div className="grid grid-cols-3 gap-4 border-y border-gray-100 dark:border-gray-800 py-6">
                    <div className="text-center space-y-1">
                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Saved</div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            {stats.saved}
                        </div>
                    </div>
                    <div className="text-center space-y-1 border-x border-gray-100 dark:border-gray-800">
                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Rewritten</div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            {stats.rewritten}
                        </div>
                    </div>
                    <div className="text-center space-y-1">
                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Deleted</div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            {stats.deleted}
                        </div>
                    </div>
                </div>

                {/* Completion Breakdown */}
                <div className="space-y-4">
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Completion Breakdown</h4>
                        
                        {/* Progress Bar */}
                        <div className="h-2 w-full flex rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 mb-4">
                            <div style={{ width: `${readyPercent}%` }} className="bg-green-500 transition-all duration-500" />
                            <div style={{ width: `${needsReviewPercent}%` }} className="bg-amber-400 transition-all duration-500" />
                        </div>

                        {/* Legend */}
                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-sm">
                                <div className="flex items-center gap-2.5 text-gray-600 dark:text-gray-400">
                                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-sm" />
                                    <span className="font-medium">Ready</span>
                                </div>
                                <span className="font-bold text-gray-900 dark:text-gray-100">{stats.ready}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <div className="flex items-center gap-2.5 text-gray-600 dark:text-gray-400">
                                    <div className="w-2 h-2 rounded-full bg-amber-400 shadow-sm" />
                                    <span className="font-medium">Needs Review</span>
                                </div>
                                <span className="font-bold text-gray-900 dark:text-gray-100">{stats.needsReview}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <div className="flex items-center gap-2.5 text-gray-600 dark:text-gray-400">
                                    <div className="w-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700" />
                                    <span className="font-medium text-muted-foreground">Not Started</span>
                                </div>
                                <span className="font-bold text-gray-400">{stats.notStarted}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copy All Button */}
                <Button
                    className="w-full h-11 bg-gray-900 hover:bg-black text-white transition-all shadow-md active:scale-[0.98]"
                    onClick={onCopyAll}
                    disabled={stats.totalGenerated === 0 || stats.totalGenerated === stats.deleted}
                >
                    {isCopied ? (
                        <>
                            <Check className="w-4 h-4 mr-2" />
                            Copied to Clipboard
                        </>
                    ) : (
                        <>
                            <Copy className="w-4 h-4 mr-2" />
                            Copy All FAQs
                        </>
                    )}
                </Button>
            </CardContent>
        </Card>
    );
}
