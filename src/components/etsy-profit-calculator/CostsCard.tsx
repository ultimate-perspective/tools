"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Receipt } from "lucide-react"
import { handleEnterKeyDown } from "@/utils/keyboard"
import { InfoTooltip } from "@/components/common/InfoTooltip"

interface CostsCardProps {
    form: any
}

export default function CostsCard({ form }: CostsCardProps) {
    return (
        <Card>
            <CardHeader className="border-b h-auto flex flex-row items-center justify-between space-y-0">
                <CardTitle className="flex items-center gap-2 text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-100">
                    <Receipt className="w-5 h-5 text-gray-500" />
                    Costs
                </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <form.Field name="itemCost">
                    {(field: any) => (
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Label htmlFor="itemCost">Item Cost</Label>
                                <InfoTooltip text="The cost to produce or acquire the item." />
                            </div>
                            <div className="flex rounded-md shadow-xs">
                                <div className="inline-flex items-center rounded-l-md border border-r-0 border-input bg-background px-3 text-muted-foreground sm:text-sm">
                                    $
                                </div>
                                <Input
                                    id="itemCost"
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
                <form.Field name="shippingCost">
                    {(field: any) => (
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Label htmlFor="shippingCost">Shipping Cost</Label>
                                <InfoTooltip text="The actual cost to ship the item to the customer." />
                            </div>
                            <div className="flex rounded-md shadow-xs">
                                <div className="inline-flex items-center rounded-l-md border border-r-0 border-input bg-background px-3 text-muted-foreground sm:text-sm">
                                    $
                                </div>
                                <Input
                                    id="shippingCost"
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
        </Card>
    )
}
