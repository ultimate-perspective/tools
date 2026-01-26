"use client"

import { useForm } from "@tanstack/react-form"
import ProductShippingCard from "./ProductShippingCard"
import CostsCard from "./CostsCard"
import AdvertisingCard from "./AdvertisingCard"
import DiscountsProcessingCard from "./DiscountsProcessingCard"
import ResultsCard from "./ResultsCard"
import { EtsyProfitCalculatorEngine } from "@/utils/engines/EtsyProfitCalculatorEngine"
import EtsyProfitCalculatorGuide from "./EtsyProfitCalculatorGuide"
import EtsyProfitCalculatorFAQ from "./EtsyProfitCalculatorFAQ"
import CTA from "@/components/common/CTA"

const defaultValues = {
    sellingPrice: "",
    shippingCharged: "",
    itemCost: "",
    shippingCost: "",
    advertisingEnabled: false,
    adMethod: "offsite_ads",
    etsyAdsCost: "",
    offsiteFee: "15",
    discountOffered: "0",
    paymentProcessor: "etsy_payments",
}

export default function EtsyProfitCalculatorContent() {
    const form = useForm({
        defaultValues: defaultValues,
    })

    const handleReset = () => {
        form.reset()
    }

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-black pt-16 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <header className="mb-16 flex flex-col items-center text-center">
                    <div className="mb-6 inline-flex item-center justify-center rounded-full border border-orange-200 bg-orange-50/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#F1641E] backdrop-blur-sm dark:border-orange-900/30 dark:bg-orange-900/10 dark:text-orange-400">
                        Free Etsy Seller Tool
                    </div>

                    <h1 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
                        Etsy Profit Calculator
                    </h1>

                    <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed text-muted-foreground">
                        Calculate your exact Etsy fees, profit margins, and breakeven points in seconds.
                        Stop guessing and start pricing your products with confidence.
                    </p>
                </header>

                <div className="flex flex-col lg:flex-row gap-3 items-start">
                    {/* Left Column: Form */}
                    <section className="w-full lg:w-3/5 space-y-3" aria-label="Calculator Inputs">
                        <ProductShippingCard form={form} />
                        <CostsCard form={form} />
                        <AdvertisingCard form={form} />
                        <DiscountsProcessingCard form={form} />
                    </section>

                    {/* Right Column: Results */}
                    <aside className="w-full lg:w-2/5 lg:sticky lg:top-22 space-y-6" aria-label="Results">
                        <form.Subscribe
                            selector={(state: any) => state.values}
                        >
                            {(values: any) => {
                                const inputs = {
                                    sellingPrice: parseFloat(values.sellingPrice) || 0,
                                    shippingCharged: parseFloat(values.shippingCharged) || 0,
                                    itemCost: parseFloat(values.itemCost) || 0,
                                    shippingCost: parseFloat(values.shippingCost) || 0,
                                    advertisingEnabled: values.advertisingEnabled,
                                    adMethod: values.adMethod as "etsy_ads" | "offsite_ads",
                                    etsyAdsCost: parseFloat(values.etsyAdsCost) || 0,
                                    offsiteFee: parseFloat(values.offsiteFee) || 15,
                                    discountOffered: parseFloat(values.discountOffered) || 0,
                                    paymentProcessor: values.paymentProcessor as "etsy_payments" | "paypal"
                                }

                                const results = EtsyProfitCalculatorEngine.calculate(inputs)
                                return <ResultsCard results={results} onReset={handleReset} />
                            }}
                        </form.Subscribe>
                    </aside>
                </div>

                <CTA variant="card" className="mt-12" />

                <EtsyProfitCalculatorGuide />
                <EtsyProfitCalculatorFAQ />

            </div>
        </main>
    )
}
