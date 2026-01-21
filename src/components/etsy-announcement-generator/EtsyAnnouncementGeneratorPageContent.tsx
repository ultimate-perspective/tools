"use client";

import EtsyAnnouncementGeneratorForm from "./EtsyAnnouncementGeneratorForm";
import EtsyAnnouncementGeneratorResult from "./EtsyAnnouncementGeneratorResult";
import { useEtsyAnnouncementGenerator } from "@/hooks/etsy";
import EtsyAnnouncementGeneratorGuide from "./EtsyAnnouncementGeneratorGuide";
import EtsyAnnouncementGeneratorFAQ from "./EtsyAnnouncementGeneratorFAQ";
import CTA from "@/components/common/CTA";
import { EtsyAnnouncementGeneratorInput, EtsyAnnouncementGeneratorOutput } from "@/types/etsy/announcement-generator";
import { useState } from "react";

export default function EtsyAnnouncementGeneratorPageContent() {
    const { mutate, isPending } = useEtsyAnnouncementGenerator();
    const [result, setResult] = useState<EtsyAnnouncementGeneratorOutput | null>(null);
    const [lastPayload, setLastPayload] = useState<EtsyAnnouncementGeneratorInput | null>(null);

    const handleGenerate = (data: EtsyAnnouncementGeneratorInput) => {
        setLastPayload(data);
        mutate(data, {
            onSuccess: (response) => {
                setResult(response);
            }
        });
    };

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-black pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <article className="max-w-7xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
                        Free Etsy Shop Announcement Generator
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Create professional, engaging shop announcements in seconds. Choose from 3 proven distinct styles to match your brand&apos;s voice.
                    </p>
                </header>

                <div className="space-y-10" role="region" aria-label="Etsy Announcement Generator Tool">
                    <section className="w-full mx-auto" aria-labelledby="form-heading">
                        <h2 id="form-heading" className="sr-only">Announcement Generator Form</h2>
                        <EtsyAnnouncementGeneratorForm
                            onGenerate={handleGenerate}
                            isPending={isPending}
                        />
                    </section>

                    {result && (
                        <section className="w-full mx-auto" aria-labelledby="results-heading">
                            <h2 id="results-heading" className="sr-only">Generated Announcements</h2>
                            <EtsyAnnouncementGeneratorResult
                                data={result}
                                onRegenerate={lastPayload ? () => handleGenerate(lastPayload) : undefined}
                                isRegenerating={isPending}
                            />
                        </section>
                    )}
                </div>

                <CTA variant="card" className="mt-12" />

                <section aria-labelledby="guide-heading">
                    <EtsyAnnouncementGeneratorGuide />
                </section>

                <section aria-labelledby="faq-heading">
                    <EtsyAnnouncementGeneratorFAQ />
                </section>
            </article>
        </main>
    );
}
