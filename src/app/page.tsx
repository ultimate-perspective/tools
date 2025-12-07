import type { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Free AI Tools for Creators",
  description:
    "Design Instantly offers free AI-powered tools to create stunning Pinterest titles, descriptions, and social media content. Perfect for Etsy sellers, Shopify owners, and content creators.",
  openGraph: {
    title: "Design Instantly | Free AI-Powered Design Tools for Creators",
    description:
      "Create stunning Pinterest titles, descriptions, and social media content in seconds with free AI-powered tools.",
    url: "https://designinstantly.com",
  },
  alternates: {
    canonical: "https://designinstantly.com",
  },
};

export default function Home() {
  return <HomeContent />;
}
