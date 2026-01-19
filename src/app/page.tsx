import type { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";
import { Graph } from "schema-dts";

export const metadata: Metadata = {
  title: "Free AI Tools for Ecommerce Sellers | Design Instantly",
  description:
    "Design Instantly provides free AI tools to help ecommerce sellers create high-quality marketing content across platforms. Ideal for Etsy, Shopify, Amazon, and online stores.",
  openGraph: {
    title: "Design Instantly — Free AI Tools for Ecommerce Sellers",
    description:
      "Create marketing content faster with free AI tools built for ecommerce sellers across all platforms.",
    url: "https://www.designinstantly.com/free-tools",
    siteName: "Design Instantly",
    type: "website",
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
