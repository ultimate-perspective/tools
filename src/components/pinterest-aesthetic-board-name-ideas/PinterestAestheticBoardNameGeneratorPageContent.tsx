"use client";

import PinterestBoardNameGeneratorForm from "@/components/pinterest-board-name-generator/PinterestBoardNameGeneratorForm"; // Reusing form for now, it's generic enough
import PinterestAestheticBoardNameGeneratorResult from "./PinterestAestheticBoardNameGeneratorResult";
import { usePinterestAestheticBoardNameGenerator } from "@/hooks/pinterest";
import { useState } from "react";
import PinterestAestheticBoardNameGeneratorGuide from "./PinterestAestheticBoardNameGeneratorGuide";
import PinterestAestheticBoardNameGeneratorFAQ from "./PinterestAestheticBoardNameGeneratorFAQ";
import CTA from "@/components/common/CTA";
import { PinterestBoardNameGeneratorOutput } from "@/types/pinterest/board-name-generator";

export default function PinterestAestheticBoardNameGeneratorPageContent() {
    const { mutate, isPending } = usePinterestAestheticBoardNameGenerator();
    const [result, setResult] = useState<PinterestBoardNameGeneratorOutput | null>(null);

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-black pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <article className="max-w-7xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
                        Aesthetic Pinterest Board Name Ideas
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Discover the perfect aesthetic for your boards. Whether you love <span className="text-gray-900 font-medium dark:text-gray-200">Soft Life</span>, <span className="text-gray-900 dark:text-gray-200 font-medium">Dark Academia</span>, or <span className="text-gray-900 font-medium dark:text-gray-200">Cottagecore</span> vibes.
                    </p>
                </header>

                <div className="space-y-10" role="region" aria-label="Aesthetic Board Name Generator Tool">
                    <section className="w-full" aria-labelledby="form-heading">
                        <h2 id="form-heading" className="sr-only">Generator Form</h2>
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
                        <h2 id="results-heading" className="sr-only">Generated Aesthetic Names</h2>
                        <PinterestAestheticBoardNameGeneratorResult
                            data={result}
                        />
                    </section>
                </div>

                <CTA variant="card" className="mt-12" />

                <section aria-labelledby="guide-heading">
                    <PinterestAestheticBoardNameGeneratorGuide />
                </section>

                <section aria-labelledby="faq-heading">
                    <PinterestAestheticBoardNameGeneratorFAQ />
                </section>
            </article>
        </main>
    );
}
