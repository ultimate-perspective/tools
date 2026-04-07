import { cn } from "@/lib/utils"
import { TrendingUp, Sparkle, Download, Wand2, CalendarClock, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "motion/react"

const fromImages = [
    "/free-tools/transformed/before/1.avif",
    "/free-tools/transformed/before/2.avif",
    "/free-tools/transformed/before/3.avif",
    "/free-tools/transformed/before/4.webp",
    "/free-tools/transformed/before/5.avif",
    "/free-tools/transformed/before/6.avif",
    "/free-tools/transformed/before/7.avif",
    "/free-tools/transformed/before/8.avif",
    "/free-tools/transformed/before/9.webp",
];

const toImages = [
    "/free-tools/transformed/after/1.jpg",
    "/free-tools/transformed/after/2.jpg",
    "/free-tools/transformed/after/3.jpg",
    "/free-tools/transformed/after/4.jpg",
    "/free-tools/transformed/after/5.jpg",
    "/free-tools/transformed/after/6.jpg",
    "/free-tools/transformed/after/7.jpg",
    "/free-tools/transformed/after/8.jpg",
    "/free-tools/transformed/after/9.jpg",
    "/free-tools/transformed/after/10.jpg",
    "/free-tools/transformed/after/11.jpg",
    "/free-tools/transformed/after/12.jpg",
    "/free-tools/transformed/after/13.jpg",
    "/free-tools/transformed/after/14.jpg",
    "/free-tools/transformed/after/15.jpg",
];

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
                    Selling on <span className="text-foreground font-semibold">Etsy, WooCommerce</span> or <span className="text-foreground font-semibold">Shopify</span>?
                </span>

                {/* Heading */}
                <div className="flex flex-col items-center justify-center text-center">
                    <h2 className="text-3xl font-semibold tracking-tighter text-foreground sm:text-3xl md:text-4xl lg:text-5xl max-w-4xl">
                        Create & Schedule <span className="text-brand">30 Days</span> of Social Media Content for Your Store in <span className="text-brand">10 Minutes</span>
                    </h2>
                </div>

                {/* Subtext */}
                <p className="mx-auto mt-6 max-w-3xl text-xl text-muted-foreground font-light leading-relaxed">
                    Stop wasting hours on design. Automatically create and schedule high-converting content that drives free traffic and revenue to your store.
                </p>

                <ImageWallTransition className="mt-10" />

                {/* CTA Button - Lime Sticker Style */}
                <div className="mt-6 flex justify-center pb-8">
                    <div className="relative group mt-4">
                        <a
                            href="/generate"
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

function ImageWallTransition({ className }: { className?: string }) {
    const maxLength = Math.max(fromImages.length, toImages.length)
    const syncedFrom = Array.from({ length: maxLength }).map((_, i) => fromImages[i % fromImages.length])
    const syncedTo = Array.from({ length: maxLength }).map((_, i) => toImages[i % toImages.length])

    return (
        <div className={cn("relative w-full max-w-5xl overflow-hidden py-4 sm:py-5 mx-auto", className)}>
            <div
                className="relative overflow-hidden w-full flex"
                style={{
                    maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                }}
            >
                {/* Bottom Layer: To */}
                <div className="w-full relative">
                    <MarqueeLayer images={syncedTo} tone="to" />
                </div>

                {/* Top Layer: From (Masked to show only left half) */}
                <div
                    className="absolute inset-0 z-10"
                    style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }}
                >
                    <MarqueeLayer images={syncedFrom} tone="from" />
                </div>

                {/* Center visual divider */}
                <div className="absolute inset-y-0 left-1/2 z-20 flex flex-col items-center justify-center -translate-x-1/2 py-4 pointer-events-none">
                    <div className="w-px h-full border-l-[3px] border-dashed border-muted-foreground/30 shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
                </div>
            </div>
        </div>
    )
}

function MarqueeLayer({
    images,
    tone,
}: {
    images: string[]
    tone: "from" | "to"
}) {
    const doubled = [...images, ...images]

    return (
        <motion.div
            className="flex min-w-max gap-3 px-2 py-4"
            animate={{
                x: ["-50%", "0%"],
            }}
            transition={{
                repeat: Infinity,
                duration: images.length * 3.5,
                ease: "linear",
            }}
        >
            {doubled.map((src, index) => (
                <div
                    key={`${tone}-${index}`}
                    className={cn(
                        "group relative aspect-4/5 w-[110px] md:w-[150px] shrink-0 overflow-hidden rounded-2xl border bg-card shadow-md flex",
                        tone === "from"
                            ? "border-border/80"
                            : "border-brand/40"
                    )}
                >
                    <Image
                        src={src}
                        alt={tone === "from" ? "From this image" : "To this image"}
                        fill
                        className={cn(
                            "object-cover transition-all duration-500",
                            tone === "from"
                                ? "grayscale contrast-75 opacity-70"
                                : "grayscale-0 saturate-125"
                        )}
                        sizes="(max-width: 768px) 110px, 150px"
                        unoptimized
                    />
                    <div
                        className={cn(
                            "pointer-events-none absolute inset-0",
                            tone === "from"
                                ? "bg-linear-to-br from-slate-900/16 via-slate-800/10 to-slate-900/8"
                                : "bg-linear-to-br from-brand/24 via-transparent to-brand/8"
                        )}
                    />
                </div>
            ))}
        </motion.div>
    )
}

function CTACard({ className }: { className?: string }) {
    return (
        <Card className={cn("overflow-hidden border-2", className)}>
            <CardHeader className="text-center pb-2 pt-10 px-6 sm:px-10">
                <div className="mx-auto mb-6 rounded-full bg-muted/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm border border-border/50 w-fit">
                    Selling on <span className="text-foreground font-semibold">Etsy, WooCommerce</span> or <span className="text-foreground font-semibold">Shopify</span>?
                </div>
                <CardTitle className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl max-w-3xl mx-auto leading-tight">
                    Create & Schedule <span className="text-brand">30 Days</span> of Social Media Content for Your Store in <span className="text-brand">10 Minutes</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 text-center px-6 sm:px-10 pb-12">
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground font-light leading-relaxed">
                    Stop wasting hours on design. Automatically create and schedule high-converting content that drives free traffic and revenue to your store.
                </p>

                <ImageWallTransition className="mt-10" />

                {/* CTA Button - Lime Sticker Style */}
                <div className="flex justify-center py-2">
                    <div className="relative group">
                        <a
                            href={process.env.NEXT_PUBLIC_LANDING_URL}
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
