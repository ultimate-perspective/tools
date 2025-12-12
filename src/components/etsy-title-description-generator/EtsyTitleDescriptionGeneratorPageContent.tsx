"use client";

import EtsyTitleDescriptionGeneratorForm from "./EtsyTitleDescriptionGeneratorForm";
import EtsyTitleDescriptionGeneratorResult from "./EtsyTitleDescriptionGeneratorResult";
import { useEtsyTitleDescriptionGenerator } from "@/hooks/etsy";

export default function EtsyTitleDescriptionGeneratorPageContent() {
    const { mutate, isPending, data } = useEtsyTitleDescriptionGenerator();

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-black pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
                        Etsy Title & Description Generator
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Create high-converting, SEO-optimized Etsy listings in seconds. Stand out in search results with AI-crafted titles, descriptions, and tags.
                    </p>
                </header>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    {/* Left Column: Form */}
                    <section className="w-full lg:w-3/5" aria-label="Generator Configuration">
                        <EtsyTitleDescriptionGeneratorForm onGenerate={mutate} isPending={isPending} />
                    </section>

                    {/* Right Column: Results */}
                    <section className="w-full lg:w-2/5 sticky top-24" aria-label="Generated Results">
                        <EtsyTitleDescriptionGeneratorResult data={data || null} />
                    </section>
                </div>
            </div>
        </main>
    );
}
