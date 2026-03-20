"use client";

import InstagramUsernameToolForm from "./InstagramUsernameToolForm";
import InstagramUsernameToolResult from "./InstagramUsernameToolResult";
import InstagramUsernameToolGuide from "./InstagramUsernameToolGuide";
import InstagramUsernameToolFAQ from "./InstagramUsernameToolFAQ";
import CTA from "@/components/common/CTA";
import { useState } from "react";
import { useInstagramUsernameGenerator } from "@/hooks/instagram";
import { InstagramUsernameGeneratorOutput } from "@/types/instagram/username-generator";

export default function InstagramUsernameToolPageContent() {
    const { mutate, isPending } = useInstagramUsernameGenerator();
    const [result, setResult] = useState<InstagramUsernameGeneratorOutput | null>(null);

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-black pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <article className="max-w-7xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
                        Free Instagram Username Availability Checker
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Check if your desired Instagram username is taken. We generate AI-powered variations and check their availability in real time.
                    </p>
                </header>

                <div className="space-y-10" role="region" aria-label="Instagram Username Availability Checker">
                    <section className="w-full" aria-labelledby="form-heading">
                        <h2 id="form-heading" className="sr-only">Username Input Form</h2>
                        <InstagramUsernameToolForm
                            onGenerate={(payload) => {
                                setResult(null);
                                mutate(payload, {
                                    onSuccess: (data) => {
                                        setResult(data);
                                    },
                                });
                            }}
                            isPending={isPending}
                        />
                    </section>

                    <section className="w-full" aria-labelledby="results-heading">
                        <h2 id="results-heading" className="sr-only">Availability Results</h2>
                        <InstagramUsernameToolResult data={result} />
                    </section>
                </div>

                <CTA variant="card" className="mt-12" />

                <section aria-labelledby="guide-heading">
                    <InstagramUsernameToolGuide />
                </section>

                <section aria-labelledby="faq-heading">
                    <InstagramUsernameToolFAQ />
                </section>
            </article>
        </main>
    );
}
