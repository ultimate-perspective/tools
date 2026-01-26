"use client";

import PinterestBoardNameGeneratorForm from "./PinterestBoardNameGeneratorForm";
import PinterestBoardNameGeneratorResult from "./PinterestBoardNameGeneratorResult";
import { usePinterestBoardNameGenerator } from "@/hooks/pinterest";
import { useState } from "react";
import PinterestBoardNameGeneratorGuide from "./PinterestBoardNameGeneratorGuide";
import PinterestBoardNameGeneratorFAQ from "./PinterestBoardNameGeneratorFAQ";
import CTA from "@/components/common/CTA";
import { PinterestBoardNameGeneratorOutput } from "@/types/pinterest/board-name-generator";

export default function PinterestBoardNameGeneratorPageContent() {
    const { mutate, isPending } = usePinterestBoardNameGenerator();
    const [result, setResult] = useState<PinterestBoardNameGeneratorOutput | null>(null);

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-black pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <article className="max-w-7xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
                        Free Pinterest Board Name Generator
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Generate unique, aesthetic, and SEO-friendly Pinterest board names in seconds.
                        Optimize your profile and get more views with the perfect board titles.
                    </p>
                </header>

                <div className="space-y-10" role="region" aria-label="Pinterest Board Name Generator Tool">
                    <section className="w-full" aria-labelledby="form-heading">
                        <h2 id="form-heading" className="sr-only">Board Name Generator Form</h2>
                        <PinterestBoardNameGeneratorForm
                            onGenerate={(payload) => {
                                setResult(null);
                                mutate(payload, {
                                    onSuccess: (data) => {
                                        setResult(data);
                                    }
                                });
                            }}
                            isPending={isPending}
                        />
                    </section>

                    <section className="w-full" aria-labelledby="results-heading">
                        <h2 id="results-heading" className="sr-only">Generated Board Names</h2>
                        <PinterestBoardNameGeneratorResult
                            data={result}
                        />
                    </section>
                </div>

                <CTA variant="card" className="mt-12" />

                <section aria-labelledby="guide-heading">
                    <PinterestBoardNameGeneratorGuide />
                </section>

                <section aria-labelledby="faq-heading">
                    <PinterestBoardNameGeneratorFAQ />
                </section>
            </article>
        </main>
    );
}
