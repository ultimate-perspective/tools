export interface EtsyCalculatorInputs {
    sellingPrice: number
    shippingCharged: number
    itemCost: number
    shippingCost: number
    advertisingEnabled: boolean
    adMethod: "etsy_ads" | "offsite_ads"
    etsyAdsCost: number
    offsiteFee: number // 12 or 15
    discountOffered: number // percentage
    paymentProcessor: "etsy_payments" | "paypal"
}

export interface EtsyCalculatorResults {
    revenue: number
    totalRevenue: number // after discount
    discountAmount: number

    listingFee: number
    transactionFee: number
    processingFee: number
    adCost: number
    totalFees: number

    totalCosts: number // item + shipping (actual)

    netProfit: number
    profitMargin: number
    roi: number

    breakdown: {
        profitPct: number
        feesPct: number
        productCostPct: number
        shippingPct: number
    }
}

export class EtsyProfitCalculatorEngine {
    static calculate(inputs: EtsyCalculatorInputs): EtsyCalculatorResults {
        // 1. Revenue
        const revenue = inputs.sellingPrice + inputs.shippingCharged;

        // If no revenue, return zero state (no fees applied)
        if (revenue <= 0) {
            const totalCosts = inputs.itemCost + inputs.shippingCost;
            return {
                revenue: 0,
                totalRevenue: 0,
                discountAmount: 0,
                listingFee: 0,
                transactionFee: 0,
                processingFee: 0,
                adCost: 0,
                totalFees: 0,
                totalCosts,
                netProfit: totalCosts > 0 ? -totalCosts : 0,
                profitMargin: 0,
                roi: 0,
                breakdown: {
                    profitPct: 0,
                    feesPct: 0,
                    productCostPct: 0,
                    shippingPct: 0
                }
            };
        }

        // 2. Discount
        // Discount usually applies to the item price, not shipping? 
        // Etsy coupons: "Percent off" applies to item price only.
        const discountAmount = inputs.sellingPrice * (inputs.discountOffered / 100);
        const totalRevenue = revenue - discountAmount;

        // 3. Fees
        const listingFee = 0.20;

        // Transaction Fee: 6.5% of the total revenue (including shipping)
        const transactionFee = totalRevenue * 0.065;

        // Processing Fee
        // Etsy Payments (US rates used as default): 3% + $0.25
        // PayPal: Typically 2.9% + $0.30
        let processingFeeRate = 0.03;
        let processingFeeFixed = 0.25;

        if (inputs.paymentProcessor === 'paypal') {
            // Standard PayPal domestic
            processingFeeRate = 0.029;
            processingFeeFixed = 0.30;
        }

        const processingFee = (totalRevenue * processingFeeRate) + processingFeeFixed;

        // Ad Costs
        let adCost = 0;
        if (inputs.advertisingEnabled) {
            if (inputs.adMethod === 'etsy_ads') {
                // User inputs the "Cost per sale" directly
                adCost = inputs.etsyAdsCost;
            } else {
                // Offsite Ads: percentage of total revenue (item + shipping - discount)
                // Note: Offsite ads fee is calculated on the amount the buyer pays (less tax), so it includes shipping.
                // It does NOT deduct the discount if the discount was a shop coupon? 
                // Actually, fees are usually on the transaction amount.
                // Let's assume on totalRevenue.
                adCost = totalRevenue * (inputs.offsiteFee / 100);

                // Cap offsite ad fee at $100 per order if necessary, but keep simple for now.
            }
        }

        const totalFees = listingFee + transactionFee + processingFee + adCost;

        // 4. Costs
        const totalCosts = inputs.itemCost + inputs.shippingCost;

        // 5. Profit
        const netProfit = totalRevenue - totalFees - totalCosts;

        // 6. Ratios
        // Margin = (Net Profit / Total Revenue) * 100
        const profitMargin = totalRevenue > 0 ? (netProfit / totalRevenue) * 100 : 0;

        // ROI = (Net Profit / Total Investment) * 100
        // Total Investment = Total Costs + Total Fees
        const totalInvestment = totalCosts + totalFees;
        const roi = totalInvestment > 0 ? (netProfit / totalInvestment) * 100 : 0;

        // 7. Breakdown Percentages for Progress Bar
        const safeRevenue = totalRevenue > 0 ? totalRevenue : 1; // avoid div/0

        // Just clamps for UI goodness
        const profitPct = Math.max(0, (netProfit / safeRevenue) * 100);
        const feesPct = (totalFees / safeRevenue) * 100;
        const productCostPct = (inputs.itemCost / safeRevenue) * 100;
        const shippingPct = (inputs.shippingCost / safeRevenue) * 100;

        return {
            revenue,
            totalRevenue,
            discountAmount,
            listingFee,
            transactionFee,
            processingFee,
            adCost,
            totalFees,
            totalCosts,
            netProfit,
            profitMargin,
            roi,
            breakdown: {
                profitPct,
                feesPct,
                productCostPct,
                shippingPct
            }
        };
    }
}