import { cn } from "@/lib/utils"
import { TrendingUp, Sparkle, Download, Wand2, CalendarClock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CTAProps {
    className?: string
    variant?: "default" | "card"
}

export default function CTA({ className, variant = "default" }: CTAProps) {
    if (variant === "card") {
        return <CTACard className={className} />
    }
    return <CTASection className={className} />
}

function CTASection({ className }: { className?: string }) {
    return (
        <section className={cn("relative overflow-hidden bg-background py-16 md:py-24 border-t", className)}>
            {/* Pattern */}
            <div
                className="absolute inset-0 opacity-[0.4]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    maskImage: "radial-gradient(circle at center, black 40%, transparent 80%)"
                }}
            />

            <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 text-center">

                {/* Eyebrow */}
                <span className="mb-6 inline-block rounded-full bg-muted/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm border border-border/50">
                    Selling on <span className="text-foreground font-semibold">Etsy</span> or <span className="text-foreground font-semibold">Shopify</span>?
                </span>

                {/* Heading */}
                <div className="flex flex-col items-center justify-center text-center">
                    <h2 className="text-3xl font-semibold tracking-tighter text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
                        Automate your social media to generate <span className="text-pinterest">more sales</span>
                    </h2>
                </div>

                {/* Subtext */}
                <p className="mx-auto mt-6 max-w-3xl text-xl text-muted-foreground font-light leading-relaxed">
                    Stop wasting hours on design. Automatically create and schedule high-converting content that drives free traffic and revenue to your store.
                </p>

                {/* CTA Button - Lime Sticker Style */}
                <div className="mt-6 flex justify-center pb-8">
                    <div className="relative group mt-4">
                        <a
                            href="/generate-pins"
                            className="cursor-pointer py-2 relative h-12 rounded-full border-2 border-black bg-brand px-8 text-xl font-bold text-white shadow-[5px_5px_0px_0px_#000000] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0px_0px_#000000] hover:bg-brand active:shadow-none active:translate-x-[5px] active:translate-y-[5px]"
                        >
                            Get Started for Free
                        </a>
                        <Sparkle className="absolute -right-2 -top-4 h-8 w-8 fill-white text-black stroke-[1.5px] animate-pulse z-10" />
                    </div>
                </div>

                {/* Icons Row */}
                <div className="mt-6 flex flex-wrap item-center justify-center gap-12 text-muted-foreground/80">
                    <IconItem icon={Download} label="IMPORT" />
                    <IconItem icon={Wand2} label="GENERATE" />
                    <IconItem icon={CalendarClock} label="SCHEDULE" />
                    <IconItem icon={TrendingUp} label="SCALE" />
                </div>
            </div>
        </section>
    )
}

function CTACard({ className }: { className?: string }) {
    return (
        <Card className={cn("overflow-hidden border-2", className)}>
            <CardHeader className="text-center pb-2 pt-10 px-6 sm:px-10">
                <div className="mx-auto mb-6 rounded-full bg-muted/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm border border-border/50 w-fit">
                    Selling on <span className="text-foreground font-semibold">Etsy</span> or <span className="text-foreground font-semibold">Shopify</span>?
                </div>
                <CardTitle className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl max-w-2xl mx-auto leading-tight">
                    Automate your social media to generate <span className="text-pinterest">more sales</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 text-center px-6 sm:px-10 pb-12">
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground font-light leading-relaxed">
                    Stop wasting hours on design. Automatically create and schedule high-converting content that drives free traffic and revenue to your store.
                </p>

                {/* CTA Button - Lime Sticker Style */}
                <div className="flex justify-center py-2">
                    <div className="relative group">
                        <a
                            href="/generate-pins"
                            className="cursor-pointer flex items-center justify-center py-2 relative h-12 rounded-full border-2 border-black bg-brand px-8 text-lg font-bold text-white shadow-[5px_5px_0px_0px_#000000] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0px_0px_#000000] hover:bg-brand active:shadow-none active:translate-x-[5px] active:translate-y-[5px]"
                        >
                            Get Started for Free
                        </a>
                        <Sparkle className="absolute -right-2 -top-4 h-6 w-6 fill-white text-black stroke-[1.5px] animate-pulse z-10" />
                    </div>
                </div>

                {/* Icons Row */}
                <div className="flex flex-wrap item-center justify-center gap-x-8 gap-y-6 text-muted-foreground/80 pt-2">
                    <IconItem icon={Download} label="IMPORT" />
                    <IconItem icon={Wand2} label="GENERATE" />
                    <IconItem icon={CalendarClock} label="SCHEDULE" />
                    <IconItem icon={TrendingUp} label="SCALE" />
                </div>
            </CardContent>
        </Card>
    )
}

function IconItem({
    icon: Icon,
    label,
}: {
    icon: React.ElementType
    label: string
}) {
    return (
        <div className="flex flex-col items-center gap-3 transition-all hover:text-foreground hover:scale-110 cursor-default">
            <Icon className="h-6 w-6 stroke-[1.5]" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase">{label}</span>
        </div>
    )
}
