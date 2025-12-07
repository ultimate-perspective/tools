import { Metadata } from "next";
import PinterestGeneratorPageContent from "@/components/pinterest-title-description-generator/PinterestGeneratorPageContent";

export const metadata: Metadata = {
    title: "Pinterest Title & Description Generator",
    description: "Create viral-worthy Pinterest titles and descriptions in seconds. Optimized for Etsy, Shopify, and more.",
};

export default function PinterestGeneratorPage() {
    return <PinterestGeneratorPageContent />;
}

