"use client";

import PinterestGeneratorForm from "@/components/pinterest-title-description-generator/PinterestGeneratorForm";
import PinterestGeneratorResult from "@/components/pinterest-title-description-generator/PinterestGeneratorResult";
import PinterestGeneratorGuide from "@/components/pinterest-title-description-generator/PinterestGeneratorGuide";
import { usePinterestTitleDescription } from "@/hooks/pinterest";

export default function PinterestGeneratorPageContent() {
    const { mutate, isPending, data } = usePinterestTitleDescription();

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-black pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
                        Pinterest Title & Description Generator
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Create viral-worthy Pinterest pins in seconds. Whether you're selling on Etsy, Shopify, or sharing your own manual creations, get optimized titles and descriptions tailored to your brand voice.
                    </p>
                </header>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    {/* Left Column: Form */}
                    <section className="w-full lg:w-2/3" aria-label="Generator Configuration">
                        <PinterestGeneratorForm onGenerate={mutate} isPending={isPending} />
                    </section>

                    {/* Right Column: Results */}
                    <section className="w-full lg:w-1/3 sticky top-24" aria-label="Generated Results">
                        <PinterestGeneratorResult data={data} />
                    </section>
                </div>
                <PinterestGeneratorGuide />
            </div>
        </main>
    );
}
