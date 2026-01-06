"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"
import { EtsyCalculatorResults } from "@/utils/engines/EtsyProfitCalculatorEngine"
import { InfoTooltip } from "@/components/common/InfoTooltip"

interface ResultsCardProps {
    results: EtsyCalculatorResults
    onReset: () => void
}

export default function ResultsCard({ results, onReset }: ResultsCardProps) {
    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(val)
    }

    const formatPercent = (val: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'percent',
            minimumFractionDigits: 1,
            maximumFractionDigits: 1
        }).format(val / 100)
    }

    // Determine colors
    const profitColor = results.netProfit >= 0 ? "text-green-600" : "text-red-600"

    return (
        <Card className="shadow-sm">
            <CardContent className="space-y-6">
                {/* Net Profit Hero */}
                <div className="space-y-1">
                    <h3 className="text-gray-500 font-medium text-sm uppercase tracking-wide">Estimated Net Profit</h3>
                    <div className="flex items-baseline justify-start gap-2">
                        <span className={cn("text-5xl font-extrabold tracking-tight", profitColor)}>
                            {formatCurrency(results.netProfit)}
                        </span>
                        <span className="text-gray-400 text-lg font-medium">/ sale</span>
                    </div>
                </div>

                {/* 3-Col Grid Metrics */}
                <div className="grid grid-cols-3 gap-4 border-y border-gray-100 dark:border-gray-800 py-6">
                    <div className="text-center space-y-1">
                        <div className="text-xs text-gray-500 uppercase font-semibold">Total Costs</div>
                        <div className="text-lg font-bold text-gray-900 dark:text-gray-100">
                            {formatCurrency(results.totalCosts)}
                        </div>
                    </div>
                    <div className="text-center space-y-1 border-x border-gray-100 dark:border-gray-800">
                        <div className="text-xs text-gray-500 uppercase font-semibold">Total Fees</div>
                        <div className="text-lg font-bold text-gray-900 dark:text-gray-100">
                            {formatCurrency(results.totalFees)}
                        </div>
                    </div>
                    <div className="text-center space-y-1">
                        <div className="text-xs text-gray-500 uppercase font-semibold">Profit %</div>
                        <div className={cn("text-lg font-bold", profitColor)}>
                            {formatPercent(results.profitMargin)}
                        </div>
                    </div>
                </div>

                {/* Breakdown & List */}
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between items-center mb-3">
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Breakdown</h4>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-3 w-full flex rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 mb-3">
                            <div style={{ width: `${results.breakdown.profitPct}%` }} className="bg-green-500" />
                            <div style={{ width: `${results.breakdown.feesPct}%` }} className="bg-red-500" />
                            <div style={{ width: `${results.breakdown.productCostPct}%` }} className="bg-blue-500" />
                            <div style={{ width: `${results.breakdown.shippingPct}%` }} className="bg-gray-300 dark:bg-gray-600" />
                        </div>

                        {/* Legend */}
                        <div className="flex flex-wrap gap-4 text-[10px] md:text-xs font-medium text-gray-500">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                Profit
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                Fees
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                Product Cost
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600" />
                                Shipping
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3 text-sm pt-2">
                        <div className="flex justify-between items-center text-base font-bold text-gray-900 dark:text-white">
                            <span>Total Revenue</span>
                            <span>{formatCurrency(results.totalRevenue)}</span>
                        </div>
                        <div className="flex justify-between items-center text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-1.5">
                                <span>Listing Fee</span>
                                <InfoTooltip text="Etsy charges a flat $0.20 listing fee for every item listed on their marketplace (active for 4 months)." />
                            </div>
                            <span>- {formatCurrency(results.listingFee)}</span>
                        </div>
                        <div className="flex justify-between items-center text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-1.5">
                                <span>Transaction Fee (6.5%)</span>
                                <InfoTooltip text="Etsy charges a 6.5% transaction fee on the total sale price, including shipping and gift wrap costs." />
                            </div>
                            <span>- {formatCurrency(results.transactionFee)}</span>
                        </div>
                        <div className="flex justify-between items-center text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-1.5">
                                <span>Processing Fee</span>
                                <InfoTooltip text="Etsy Payments charges a processing fee on the total sale amount. For US sellers, this is typically 3% + $0.25. Rates vary by country." />
                            </div>
                            <span>- {formatCurrency(results.processingFee)}</span>
                        </div>
                        {results.adCost > 0 && (
                            <div className="flex justify-between items-center text-red-500 font-medium">
                                <span>Ads Cost</span>
                                <span>- {formatCurrency(results.adCost)}</span>
                            </div>
                        )}
                        <div className="flex justify-between items-center text-gray-600 dark:text-gray-400">
                            <span>Cost of Goods & Shipping</span>
                            <span>- {formatCurrency(results.totalCosts)}</span>
                        </div>
                    </div>
                </div>

                <Button
                    variant="outline"
                    className="w-full border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900"
                    onClick={onReset}
                >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Reset Calculator
                </Button>
            </CardContent>
        </Card>
    )
}
