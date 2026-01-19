"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Megaphone, CheckCircle2, Circle, Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { handleEnterKeyDown } from "@/utils/keyboard"
import { InfoTooltip } from "@/components/common/InfoTooltip"

interface AdvertisingCardProps {
    form: any
}

export default function AdvertisingCard({ form }: AdvertisingCardProps) {
    const [open, setOpen] = useState(false)

    return (
        <Card>
            <form.Field name="advertisingEnabled">
                {(field: any) => (
                    <CardHeader className={cn(
                        "h-auto flex flex-row items-center justify-between space-y-0",
                        field.state.value ? "border-b pb-4" : ""
                    )}>
                        <div className="flex items-center gap-2">
                            <CardTitle className="flex items-center gap-2 text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-100">
                                <Megaphone className="w-5 h-5 text-gray-500" />
                                Advertising
                            </CardTitle>
                            <InfoTooltip text="Configure your advertising costs and fees." />
                        </div>
                        <Switch
                            checked={field.state.value}
                            onCheckedChange={field.handleChange}
                        />
                    </CardHeader>
                )}
            </form.Field>

            <form.Subscribe
                selector={(state: any) => ({
                    enabled: state.values.advertisingEnabled,
                    method: state.values.adMethod,
                })}
            >
                {({ enabled, method }: any) => (
                    enabled && (
                        <CardContent className="space-y-6">
                            {/* Ad Method Selection */}
                            <form.Field name="adMethod">
                                {(field: any) => (
                                    <div className="flex items-center justify-between p-4 border rounded-lg bg-gray-50/50 mb-6">
                                        <div className="space-y-0.5">
                                            <Label htmlFor="adMethod" className="text-base font-medium">Advertising Method</Label>
                                            <p className="text-sm text-muted-foreground">Select the type of ads you use</p>
                                        </div>
                                        <Popover open={open} onOpenChange={setOpen}>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    aria-expanded={open}
                                                    className="w-[180px] justify-between bg-white font-normal"
                                                >
                                                    {field.state.value === "etsy_ads" && "Etsy Ads"}
                                                    {field.state.value === "offsite_ads" && "Offsite Ads"}
                                                    {!field.state.value && "Select method"}
                                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-[180px] p-0">
                                                <Command>
                                                    <CommandList>
                                                        <CommandGroup>
                                                            <CommandItem
                                                                value="etsy_ads"
                                                                onSelect={() => {
                                                                    field.handleChange("etsy_ads")
                                                                    setOpen(false)
                                                                }}
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        "mr-2 h-4 w-4",
                                                                        field.state.value === "etsy_ads" ? "opacity-100" : "opacity-0"
                                                                    )}
                                                                />
                                                                Etsy Ads
                                                            </CommandItem>
                                                            <CommandItem
                                                                value="offsite_ads"
                                                                onSelect={() => {
                                                                    field.handleChange("offsite_ads")
                                                                    setOpen(false)
                                                                }}
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        "mr-2 h-4 w-4",
                                                                        field.state.value === "offsite_ads" ? "opacity-100" : "opacity-0"
                                                                    )}
                                                                />
                                                                Offsite Ads
                                                            </CommandItem>
                                                        </CommandGroup>
                                                    </CommandList>
                                                </Command>
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                )}
                            </form.Field>

                            {/* Etsy Ads Input */}
                            {method === "etsy_ads" && (
                                <form.Field name="etsyAdsCost">
                                    {(field: any) => (
                                        <div className="space-y-2">
                                            <Label htmlFor="etsyAdsCost">Average Cost of Sale ($)</Label>
                                            <div className="flex rounded-md shadow-xs">
                                                <div className="inline-flex items-center rounded-l-md border border-r-0 border-input bg-background px-3 text-muted-foreground sm:text-sm">
                                                    $
                                                </div>
                                                <Input
                                                    id="etsyAdsCost"
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
                                            <p className="text-sm text-gray-500">
                                                Example: If you spent $1000 on ads and sold 10 units, cost per sale is $100.
                                            </p>
                                        </div>
                                    )}
                                </form.Field>
                            )}

                            {/* Offsite Ads Selection */}
                            {method === "offsite_ads" && (
                                <div className="bg-gray-50/50 p-4 rounded-lg border">
                                    <div className="flex items-center gap-2 mb-4">
                                        <h3 className="font-medium">Revenue Tier</h3>
                                        <InfoTooltip text="Etsy Offsite Ads fees depend on your shop's revenue over the last 365 days." />
                                    </div>

                                    <form.Field name="offsiteFee">
                                        {(field: any) => (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {/* Standard Option */}
                                                <div
                                                    onClick={() => field.handleChange("15")}
                                                    className={cn(
                                                        "bg-white p-4 rounded-lg border-2 cursor-pointer transition-all relative",
                                                        field.state.value === "15"
                                                            ? "border-brand ring-1 ring-brand/20"
                                                            : "border-gray-100 hover:border-gray-200"
                                                    )}
                                                >
                                                    <div className="flex justify-between items-start mb-2">
                                                        <span className={cn(
                                                            "text-xs font-bold uppercase tracking-wider",
                                                            field.state.value === "15" ? "text-brand" : "text-gray-400"
                                                        )}>
                                                            Standard
                                                        </span>
                                                        {field.state.value === "15" ? (
                                                            <CheckCircle2 className="w-5 h-5 text-brand" />
                                                        ) : (
                                                            <Circle className="w-5 h-5 text-gray-200" />
                                                        )}
                                                    </div>
                                                    <div className="text-2xl font-bold mb-1">15% Fee</div>
                                                    <div className="text-sm text-gray-500">&lt; $10k Revenue (in last 365 days)</div>
                                                </div>

                                                {/* High Volume Option */}
                                                <div
                                                    onClick={() => field.handleChange("12")}
                                                    className={cn(
                                                        "bg-white p-4 rounded-lg border-2 cursor-pointer transition-all relative",
                                                        field.state.value === "12"
                                                            ? "border-brand ring-1 ring-brand/20"
                                                            : "border-gray-100 hover:border-gray-200"
                                                    )}
                                                >
                                                    <div className="flex justify-between items-start mb-2">
                                                        <span className={cn(
                                                            "text-xs font-bold uppercase tracking-wider",
                                                            field.state.value === "12" ? "text-brand" : "text-gray-400"
                                                        )}>
                                                            High Volume
                                                        </span>
                                                        {field.state.value === "12" ? (
                                                            <CheckCircle2 className="w-5 h-5 text-brand" />
                                                        ) : (
                                                            <Circle className="w-5 h-5 text-gray-200" />
                                                        )}
                                                    </div>
                                                    <div className="text-2xl font-bold mb-1">12% Fee</div>
                                                    <div className="text-sm text-gray-500">&gt; $10k Revenue (in last 365 days)</div>
                                                </div>
                                            </div>
                                        )}
                                    </form.Field>
                                </div>
                            )}
                        </CardContent>
                    )
                )}
            </form.Subscribe>
        </Card>
    )
}
