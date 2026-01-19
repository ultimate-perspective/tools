"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ShoppingBag } from "lucide-react"
import { handleEnterKeyDown } from "@/utils/keyboard"
import { InfoTooltip } from "@/components/common/InfoTooltip"

interface ProductShippingCardProps {
    form: any
}

export default function ProductShippingCard({ form }: ProductShippingCardProps) {
    return (
        <Card>
            <CardHeader className="border-b h-auto flex flex-row items-center justify-between space-y-0">
                <CardTitle className="flex items-center gap-2 text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-100">
                    <ShoppingBag className="w-5 h-5 text-gray-500" />
                    Product & Shipping
                </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <form.Field name="sellingPrice">
                    {(field: any) => (
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Label htmlFor="sellingPrice">Selling Price</Label>
                                <InfoTooltip text="The price your customer pays for the product." />
                            </div>
                            <div className="flex rounded-md shadow-xs">
                                <div className="inline-flex items-center rounded-l-md border border-r-0 border-input bg-background px-3 text-muted-foreground sm:text-sm">
                                    $
                                </div>
                                <Input
                                    id="sellingPrice"
                                    name={field.name}
                                    type="number"
                                    placeholder="0"
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    onKeyDown={handleEnterKeyDown}
                                    className="rounded-l-none -ml-px"
                                />
                            </div>
                        </div>
                    )}
                </form.Field>
                <form.Field name="shippingCharged">
                    {(field: any) => (
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Label htmlFor="shippingCharged">Shipping Charged</Label>
                                <InfoTooltip text="How much you charge the customer for shipping." />
                            </div>
                            <div className="flex rounded-md shadow-xs">
                                <div className="inline-flex items-center rounded-l-md border border-r-0 border-input bg-background px-3 text-muted-foreground sm:text-sm">
                                    $
                                </div>
                                <Input
                                    id="shippingCharged"
                                    name={field.name}
                                    type="number"
                                    placeholder="0"
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    onKeyDown={handleEnterKeyDown}
                                    className="rounded-l-none -ml-px"
                                />
                            </div>
                        </div>
                    )}
                </form.Field>
            </CardContent>
        </Card >

    )
}
