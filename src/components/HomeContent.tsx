"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Type, ShoppingBag, Calculator, User, HelpCircle, Store } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import CTA from "@/components/common/CTA";

const tools = [
    {
        name: "Pinterest Title & Description Generator",
        description: "Generate SEO-optimized titles that drive clicks and engagement on Pinterest.",
        href: "/pinterest-title-description-generator",
        icon: Type,
        category: "Pinterest",
        isAvailable: true,
    },
    {
        name: "Etsy Listing Title & Description Generator",
        description: "Create high-converting, SEO-optimized Etsy titles, descriptions, and tags in seconds.",
        href: "/etsy-listing-title-description-generator",
        icon: ShoppingBag,
        category: "Etsy",
        isAvailable: true,
    },
    {
        name: "Etsy Bio Generator",
        description: "Generate a professional, SEO-optimized Etsy shop bio that tells your story and connects with buyers.",
        href: "/etsy-bio-generator",
        icon: User,
        category: "Etsy",
        isAvailable: true,
    },
    {
        name: "Etsy Profit Calculator",
        description: "Calculate your exact Etsy fees, profit margins, and actual earnings per sale.",
        href: "/etsy-profit-calculator",
        icon: Calculator,
        category: "Etsy",
        isAvailable: true,
    },
    {
        name: "Etsy FAQ Generator",
        description: "Generate professional FAQs for your shop to reduce buyer questions and build trust.",
        href: "/etsy-faq-generator",
        icon: HelpCircle,
        category: "Etsy",
        isAvailable: true,
    },
    {
        name: "Etsy Shop Name Generator",
        description: "Generate unique, memorable, and available Etsy shop names and SEO-friendly titles.",
        href: "/etsy-shop-name-generator",
        icon: Store,
        category: "Etsy",
        isAvailable: true,
    }
];

const categories = ["All", "Pinterest", "Etsy"];

export function HomeContent() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredTools = activeCategory === "All"
        ? tools
        : tools.filter(tool => tool.category === activeCategory);

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-muted/50 via-background to-background" />
                <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-16 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
                            <Sparkles className="h-4 w-4" aria-hidden="true" />
                            <span>100% Free Tools for Ecommerce Sellers</span>
                        </div>
                        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                            Free Tools to Design
                            <span className="block text-brand"> Instantly</span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
                            A curated collection of free AI-powered tools to help you create stunning content for Pinterest, Etsy,
                            Shopify, and social media. No signup required.
                        </p>
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <Button asChild size="lg" className="rounded-full px-8">
                                <a href="https://designinstantly.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2">
                                    <Zap className="h-4 w-4" aria-hidden="true" />
                                    Get Started
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                                </a>
                            </Button>
                            <Button variant="outline" asChild size="lg" className="rounded-full px-8">
                                <Link href="#tools" className="flex items-center gap-2">
                                    Browse Free Tools
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
                    <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        <div className="flex flex-col items-center gap-1 text-center">
                            <dt className="text-sm font-medium text-muted-foreground">Free Tools</dt>
                            <dd className="text-3xl font-bold text-foreground">{tools.length}+</dd>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-center">
                            <dt className="text-sm font-medium text-muted-foreground">Generations</dt>
                            <dd className="text-3xl font-bold text-foreground">10K+</dd>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-center">
                            <dt className="text-sm font-medium text-muted-foreground">Happy Sellers</dt>
                            <dd className="text-3xl font-bold text-foreground">2K+</dd>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-center">
                            <dt className="text-sm font-medium text-muted-foreground">Time Saved</dt>
                            <dd className="text-3xl font-bold text-foreground">500h+</dd>
                        </div>
                    </dl>
                </div>
            </section>

            {/* Tools Section */}
            <section id="tools" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Curated Collection of Free Tools
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Everything you need to create compelling content for your online business.
                    </p>
                </div>

                {/* Category Filter */}
                <div
                    className="mb-10 flex flex-wrap items-center justify-center gap-2"
                    role="tablist"
                    aria-label="Tool categories"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            role="tab"
                            aria-selected={activeCategory === category}
                            onClick={() => setActiveCategory(category)}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${activeCategory === category
                                ? "bg-foreground text-background"
                                : "border border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Tools Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredTools.map((tool) => (
                        <article
                            key={tool.name}
                            className={`group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all ${tool.isAvailable ? "hover:border-foreground/20 hover:shadow-lg" : "opacity-60"
                                }`}
                        >
                            {!tool.isAvailable && (
                                <span className="absolute top-4 right-4 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                                    Coming Soon
                                </span>
                            )}
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                                <tool.icon className="h-6 w-6 text-foreground" aria-hidden="true" />
                            </div>
                            <span className="mb-2 text-xs font-medium uppercase tracking-wider text-brand">{tool.category}</span>
                            <h3 className="mb-2 text-lg font-semibold text-foreground">
                                {tool.isAvailable ? (
                                    <Link href={tool.href} className="after:absolute after:inset-0">
                                        {tool.name}
                                    </Link>
                                ) : (
                                    tool.name
                                )}
                            </h3>
                            <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{tool.description}</p>
                            {tool.isAvailable && (
                                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-foreground">
                                    <span>Use Tool</span>
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </section>

            <CTA />

        </div>
    );
}
