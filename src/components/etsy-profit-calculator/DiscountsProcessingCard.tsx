"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Banknote } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { handleEnterKeyDown } from "@/utils/keyboard"
import { InfoTooltip } from "@/components/common/InfoTooltip"

interface DiscountsProcessingCardProps {
    form: any
}

export default function DiscountsProcessingCard({ form }: DiscountsProcessingCardProps) {
    return (
        <Card>
            <CardHeader className="border-b h-auto flex flex-row items-center justify-between space-y-0">
                <CardTitle className="flex items-center gap-2 text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-100">
                    <Banknote className="w-5 h-5 text-gray-500" />
                    Payments and Discount
                </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <form.Field name="paymentProcessor">
                    {(field: any) => (
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Label>Payment Processor</Label>
                                <InfoTooltip text="Choose your payment processing provider." />
                            </div>
                            <Tabs
                                value={field.state.value}
                                onValueChange={field.handleChange}
                                className="w-full"
                            >
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="etsy_payments">Etsy Payments</TabsTrigger>
                                    <TabsTrigger value="paypal">PayPal</TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>
                    )}
                </form.Field>

                <form.Field name="discountOffered">
                    {(field: any) => (
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Label htmlFor="discountOffered">Discount Offered</Label>
                                <InfoTooltip text="Percentage discount you offer to customers." />
                            </div>
                            <div className="flex rounded-md shadow-xs">
                                <Input
                                    id="discountOffered"
                                    name={field.name}
                                    type="number"
                                    placeholder="0"
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    onKeyDown={handleEnterKeyDown}
                                    className="rounded-r-none border-r-0"
                                />
                                <div className="inline-flex items-center rounded-r-md border border-l-0 border-input bg-background px-3 text-muted-foreground sm:text-sm">
                                    %
                                </div>
                            </div>
                        </div>
                    )}
                </form.Field>

            </CardContent>
        </Card>
    )
}
