import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PackagePlus, Wallet, Settings2, TrendingUp, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function EtsyProfitCalculatorGuide() {
    return (
        <Card className="mt-12 border-none shadow-none bg-transparent">
            <CardHeader className="px-0">
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    How to use this Profit Calculator
                    <span className="text-muted-foreground font-normal text-lg hidden sm:inline-block">(Quick Guide)</span>
                </CardTitle>
                <p className="text-muted-foreground max-w-3xl">
                    Accurately pricing your items is crucial for success on Etsy. Follow these steps to uncover your clear profit margins.
                </p>
            </CardHeader>
            <CardContent className="px-0">
                <div className="grid md:grid-cols-2 gap-4">
                    {/* Step 1 */}
                    <div className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
                        <div className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-10 w-10 shrink-0 inline-flex items-center justify-center rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400">
                                    <PackagePlus className="h-5 w-5" />
                                </div>
                                <h3 className="font-semibold text-lg">1. Product Details</h3>
                            </div>
                            <p className="text-muted-foreground text-sm min-h-[60px]">
                                Enter what the customer pays: your <strong>Selling Price</strong> and any separate <strong>Shipping Charged</strong>.
                            </p>
                            <Link
                                href="https://help.etsy.com/hc/en-us/articles/115015628847"
                                target="_blank"
                                className="inline-flex items-center gap-1 text-xs font-medium text-orange-600 dark:text-orange-400 hover:underline"
                            >
                                Tips on Pricing your Listings <ExternalLink className="h-3 w-3" />
                            </Link>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
                        <div className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-10 w-10 shrink-0 inline-flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
                                    <Wallet className="h-5 w-5" />
                                </div>
                                <h3 className="font-semibold text-lg">2. Add Your Costs</h3>
                            </div>
                            <p className="text-muted-foreground text-sm min-h-[60px]">
                                Include your <strong>Item Cost</strong> (production/materials) and actual <strong>Shipping Cost</strong> (labels/packaging).
                            </p>
                            <Link
                                href="https://help.etsy.com/hc/en-us/articles/360000343368"
                                target="_blank"
                                className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                Understanding Shipping Costs <ExternalLink className="h-3 w-3" />
                            </Link>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
                        <div className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-10 w-10 shrink-0 inline-flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400">
                                    <Settings2 className="h-5 w-5" />
                                </div>
                                <h3 className="font-semibold text-lg">3. Configure Fees</h3>
                            </div>
                            <p className="text-muted-foreground text-sm min-h-[60px]">
                                Toggle <strong>Etsy Ads</strong> or <strong>Offsite Ads</strong> (15% or 12%) if applicable. Add any discounts you offer.
                            </p>
                            <Link
                                href="https://www.etsy.com/legal/fees/"
                                target="_blank"
                                className="inline-flex items-center gap-1 text-xs font-medium text-purple-600 dark:text-purple-400 hover:underline"
                            >
                                Official Fees Policy <ExternalLink className="h-3 w-3" />
                            </Link>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
                        <div className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-10 w-10 shrink-0 inline-flex items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400">
                                    <TrendingUp className="h-5 w-5" />
                                </div>
                                <h3 className="font-semibold text-lg">4. Analyze Profit</h3>
                            </div>
                            <p className="text-muted-foreground text-sm min-h-[60px]">
                                View your <strong>Net Profit</strong> and <strong>Margin</strong>. Adjust your pricing until you hit your target green numbers!
                            </p>
                            <Link
                                href="https://help.etsy.com/hc/en-us/articles/115014372467"
                                target="_blank"
                                className="inline-flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400 hover:underline"
                            >
                                How to Get Paid <ExternalLink className="h-3 w-3" />
                            </Link>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
