import type { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";
import { Graph } from "schema-dts";

export const metadata: Metadata = {
  title: "Free AI Tools for Creators",
  description:
    "Design Instantly offers free AI-powered tools to create stunning Pinterest titles, descriptions, and social media content. Perfect for Etsy sellers, Shopify owners, and content creators.",
  openGraph: {
    title: "Design Instantly | Free AI-Powered Design Tools for Creators",
    description:
      "Create stunning Pinterest titles, descriptions, and social media content in seconds with free AI-powered tools.",
    url: "https://www.designinstantly.com/free-tools",
  },
  alternates: {
    canonical: "https://www.designinstantly.com/free-tools",
  },
};

const jsonLd: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'Design Instantly Tools',
      url: 'https://www.designinstantly.com/free-tools'
    },
    {
      '@type': 'Organization',
      name: 'Design Instantly',
      url: 'https://www.designinstantly.com',
      logo: 'https://www.designinstantly.com/free-tools/logo/png/icon_light.png'
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeContent />
    </>
  );
}
