"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-gray-100 dark:border-zinc-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" onClick={() => setOpen(false)}>
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
                                <Button variant="ghost" asChild className="text-sm font-medium">
                                    <Link href="/">Home</Link>
                                </Button>
                                <Button asChild className="text-sm font-medium">
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
                                    <Button variant="ghost" size="icon" aria-label="Open menu">
                                        <Menu className="h-6 w-6" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                                    <div className="flex flex-col gap-4 mt-8">
                                        <Button variant="ghost" asChild className="justify-start text-lg px-2" onClick={() => setOpen(false)}>
                                            <Link href="/">Home</Link>
                                        </Button>
                                        <Button asChild className="justify-start text-lg px-2 mt-4">
                                            <a href="https://designinstantly.com" target="_blank" rel="noopener noreferrer">
                                                Get Started
                                            </a>
                                        </Button>
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
