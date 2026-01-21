"use client";

import EtsyShopNameGeneratorForm from "./EtsyShopNameGeneratorForm";
import EtsyShopNameGeneratorResult from "./EtsyShopNameGeneratorResult";
import { useEtsyShopNameGenerator } from "@/hooks/etsy";
import EtsyShopNameGeneratorGuide from "./EtsyShopNameGeneratorGuide";
import EtsyShopNameGeneratorFAQ from "./EtsyShopNameGeneratorFAQ";
import CTA from "@/components/common/CTA";
import { useState } from "react";
import { EtsyShopNameGeneratorInput, EtsyShopNameGeneratorOutput } from "@/types/etsy/shop-name-generator";

export default function EtsyShopNameGeneratorPageContent() {
    const { mutate, isPending } = useEtsyShopNameGenerator();
    const [includeTitle, setIncludeTitle] = useState(true);
    const [allNames, setAllNames] = useState<EtsyShopNameGeneratorOutput['names']>([]);
    const [lastPayload, setLastPayload] = useState<EtsyShopNameGeneratorInput | null>(null);

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-black pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <article className="max-w-7xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
                        Free Etsy Shop Name Generator
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Generate unique, memorable, and SEO-friendly Etsy shop names in seconds. Find the perfect brand name for your creative business.
                    </p>
                </header>

                <div className="space-y-10" role="region" aria-label="Etsy Shop Name Generator Tool">
                    <section className="w-full" aria-labelledby="form-heading">
                        <h2 id="form-heading" className="sr-only">Shop Name Generator Form</h2>
                        <EtsyShopNameGeneratorForm
                            onGenerate={(payload) => {
                                setIncludeTitle(payload.includeTitle !== false);
                                setLastPayload(payload);
                                setAllNames([]);
                                mutate(payload, {
                                    onSuccess: (data) => {
                                        setAllNames(data.names);
                                    }
                                });
                            }}
                            isPending={isPending}
                            includeTitle={includeTitle}
                            onIncludeTitleChange={setIncludeTitle}
                        />
                    </section>

                    <section className="w-full" aria-labelledby="results-heading">
                        <h2 id="results-heading" className="sr-only">Generated Shop Names</h2>
                        <EtsyShopNameGeneratorResult
                            data={allNames.length > 0 ? { names: allNames } : null}
                            includeTitle={includeTitle}
                            onLoadMore={() => {
                                if (!lastPayload) return;
                                mutate(lastPayload, {
                                    onSuccess: (data) => {
                                        setAllNames(prev => {
                                            const existing = new Set(prev.map(n => n.name));
                                            const newNames = data.names.filter(n => !existing.has(n.name));
                                            return [...prev, ...newNames];
                                        });
                                    }
                                });
                            }}
                            isLoadingMore={isPending && allNames.length > 0}
                            onDelete={(nameToDelete) => {
                                setAllNames(prev => prev.filter(n => n.name !== nameToDelete));
                            }}
                        />
                    </section>
                </div>

                <CTA variant="card" className="mt-12" />

                <section aria-labelledby="guide-heading">
                    <EtsyShopNameGeneratorGuide />
                </section>

                <section aria-labelledby="faq-heading">
                    <EtsyShopNameGeneratorFAQ />
                </section>
            </article>
        </main>
    );
}
