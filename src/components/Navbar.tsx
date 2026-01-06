"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, Type, ShoppingBag, Calculator, Home, ArrowRight, X } from "lucide-react";
import { useState, ElementType } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-gray-100 dark:border-zinc-800 pr-(--removed-body-scroll-bar-size) transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="shrink-0">
                            <Link
                                href="/"
                                onClick={() => setOpen(false)}
                                className="block transition-transform duration-200 hover:scale-105 active:scale-95"
                            >
                                <img
                                    src="/free-tools/logo/png/logo_light.png"
                                    alt="Design Instantly Logo"
                                    className="h-10 w-auto dark:hidden"
                                />
                                <img
                                    src="/free-tools/logo/png/logo_dark.png"
                                    alt="Design Instantly Logo"
                                    className="h-10 w-auto hidden dark:block"
                                />
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-4">
                                <Button
                                    variant="ghost"
                                    asChild
                                    className="text-sm font-medium transition-all duration-200 hover:scale-105"
                                >
                                    <Link href="/">Home</Link>
                                </Button>
                                <Button
                                    asChild
                                    className="text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
                                >
                                    <a href="https://designinstantly.com" target="_blank" rel="noopener noreferrer">
                                        Get Started
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* Mobile menu (Sheet) */}
                        <div className="md:hidden">
                            <Sheet open={open} onOpenChange={setOpen}>
                                <SheetTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        aria-label="Open menu"
                                        className="transition-transform duration-200 hover:scale-110 active:scale-95"
                                    >
                                        <Menu className="h-6 w-6" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent
                                    side="right"
                                    className="w-[300px] sm:w-[400px] p-0 flex flex-col [&>button:first-of-type]:hidden"
                                >
                                    <SheetTitle className="sr-only">Mobile Menu</SheetTitle>

                                    {/* Mobile Header - Fixed */}
                                    <div className="flex items-center justify-between px-6 py-5 border-b border-border/40 bg-background/80 backdrop-blur-sm shrink-0">
                                        <Link
                                            href="/"
                                            onClick={() => setOpen(false)}
                                            className="flex items-center gap-2 transition-transform duration-200 hover:scale-105 active:scale-95"
                                        >
                                            <img
                                                src="/free-tools/logo/png/logo_light.png"
                                                alt="Design Instantly Logo"
                                                className="h-8 w-auto dark:hidden"
                                            />
                                            <img
                                                src="/free-tools/logo/png/logo_dark.png"
                                                alt="Design Instantly Logo"
                                                className="h-8 w-auto hidden dark:block"
                                            />
                                        </Link>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => setOpen(false)}
                                            className="h-8 w-8 transition-all duration-200 hover:rotate-90"
                                            aria-label="Close menu"
                                        >
                                            <X className="h-5 w-5" />
                                        </Button>
                                    </div>

                                    {/* Scrollable Content */}
                                    <div className="flex-1 overflow-y-auto px-2 py-2">
                                        <div className="flex flex-col gap-1 mb-8">
                                            <MobileLink
                                                href="/"
                                                label="Home"
                                                icon={Home}
                                                onClick={() => setOpen(false)}
                                                delay={0}
                                            />
                                        </div>

                                        <div className="px-3 mb-3 text-xs font-semibold text-muted-foreground/60 uppercase tracking-widest">
                                            Free Tools
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <MobileLink
                                                href="/pinterest-title-description-generator"
                                                label="Pinterest Generator"
                                                icon={Type}
                                                onClick={() => setOpen(false)}
                                                delay={1}
                                            />
                                            <MobileLink
                                                href="/etsy-listing-generator"
                                                label="Etsy Listings"
                                                icon={ShoppingBag}
                                                onClick={() => setOpen(false)}
                                                delay={2}
                                            />
                                            <MobileLink
                                                href="/etsy-profit-calculator"
                                                label="Profit Calculator"
                                                icon={Calculator}
                                                onClick={() => setOpen(false)}
                                                isNew
                                                delay={3}
                                            />
                                        </div>
                                    </div>

                                    {/* Mobile Footer - Fixed */}
                                    <div className="px-6 py-6 border-t border-border/40 bg-background/80 backdrop-blur-sm shrink-0">
                                        <div className="bg-gradient-to-br from-muted/40 to-muted/20 rounded-xl p-5 border border-border/50 transition-all duration-300 hover:shadow-lg hover:border-border">
                                            <p className="text-sm font-semibold text-foreground mb-1">
                                                Unlock full potential
                                            </p>
                                            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                                                Automate your design workflow today.
                                            </p>
                                            <Button
                                                asChild
                                                className="w-full font-semibold shadow-md transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                                                size="sm"
                                            >
                                                <a href="https://designinstantly.com" target="_blank" rel="noopener noreferrer">
                                                    Get Started
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Spacer to prevent content overlap */}
            <div className="h-16" />
        </>
    );
}

function MobileLink({
    href,
    icon: Icon,
    label,
    onClick,
    isNew,
    delay = 0
}: {
    href: string
    icon?: ElementType
    label: string
    onClick: () => void
    isNew?: boolean
    delay?: number
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href={href}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                "flex items-center justify-between h-11 px-4 rounded-lg text-sm font-medium",
                "text-muted-foreground transition-all duration-200",
                "hover:bg-muted/80 hover:text-foreground hover:scale-[1.02] hover:shadow-sm",
                "active:scale-[0.98]",
                "animate-in slide-in-from-right-5 fade-in"
            )}
            style={{
                animationDelay: `${delay * 50}ms`,
                animationDuration: "300ms",
                animationFillMode: "backwards"
            }}
        >
            <div className="flex items-center gap-3">
                {Icon && (
                    <Icon
                        className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            isHovered && "scale-110"
                        )}
                    />
                )}
                <span className={cn(!Icon && "pl-1")}>{label}</span>
            </div>
            {isNew && (
                <span className="flex items-center gap-1 rounded-full bg-brand/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-brand animate-pulse">
                    New
                </span>
            )}
        </Link>
    );
}