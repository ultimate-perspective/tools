"use client";

import PinterestGeneratorForm from "@/components/pinterest-title-description-generator/PinterestGeneratorForm";
import PinterestGeneratorResult from "@/components/pinterest-title-description-generator/PinterestGeneratorResult";
import { usePinterestTitleDescription } from "@/hooks/pinterest";

export default function PinterestGeneratorPage() {
    const { mutate, isPending, data } = usePinterestTitleDescription();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
                        Pinterest Title & Description Generator
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Create viral-worthy Pinterest pins in seconds. Whether you're selling on Etsy, Shopify, or sharing your own manual creations, get optimized titles and descriptions tailored to your brand voice.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    {/* Left Column: Form */}
                    <div className="w-full lg:w-2/3">
                        <PinterestGeneratorForm onGenerate={mutate} isPending={isPending} />
                    </div>

                    {/* Right Column: Results */}
                    <div className="w-full lg:w-1/3 sticky top-24">
                        <PinterestGeneratorResult data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
}
