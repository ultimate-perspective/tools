"use client";

import EtsyBioGeneratorForm from "./EtsyBioGeneratorForm";
import EtsyBioGeneratorResult from "./EtsyBioGeneratorResult";
import { useEtsyBioGenerator } from "@/hooks/etsy";
import EtsyBioGeneratorGuide from "./EtsyBioGeneratorGuide";
import EtsyBioGeneratorFAQ from "./EtsyBioGeneratorFAQ";
import CTA from "@/components/common/CTA";

export default function EtsyBioGeneratorPageContent() {
    const { mutate, isPending, data } = useEtsyBioGenerator();

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-black pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <article className="max-w-7xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
                        Free Etsy Bio Generator
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Create a compelling, SEO-optimized Etsy shop bio that tells your story and connects with buyers. Stand out with a professional About section in seconds.
                    </p>
                </header>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start" role="region" aria-label="Etsy Bio Generator Tool">
                    {/* Left Column: Form */}
                    <section className="w-full lg:w-3/5" aria-labelledby="form-heading">
                        <h2 id="form-heading" className="sr-only">Bio Generator Form</h2>
                        <EtsyBioGeneratorForm onGenerate={mutate} isPending={isPending} />
                    </section>

                    {/* Right Column: Results */}
                    <aside className="w-full lg:w-2/5 sticky top-24" aria-labelledby="results-heading">
                        <h2 id="results-heading" className="sr-only">Generated Bio Results</h2>
                        <EtsyBioGeneratorResult data={data || null} />
                    </aside>
                </div>

                <CTA variant="card" className="mt-12" />

                <section aria-labelledby="guide-heading">
                    <EtsyBioGeneratorGuide />
                </section>

                <section aria-labelledby="faq-heading">
                    <EtsyBioGeneratorFAQ />
                </section>
            </article>
        </main>
    );
}
