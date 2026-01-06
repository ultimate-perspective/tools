import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import Providers from "@/components/Providers";
import "./globals.css";
import Footer from "@/components/common/Footer";
import CTA from "@/components/common/CTA";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Design Instantly Tools",
    template: "%s | Design Instantly Tools",
  },
  description: "Free design tools for creators and developers.",
  openGraph: {
    title: "Design Instantly Tools",
    description: "Free design tools for creators and developers.",
    url: "https://designinstantly.com",
    siteName: "Design Instantly",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Instantly Tools",
    description: "Free design tools for creators and developers.",
  },
  icons: {
    icon: [
      { url: '/free-tools/logo/png/icon_light.png', media: '(prefers-color-scheme: light)' },
      { url: '/free-tools/logo/png/icon_dark.png', media: '(prefers-color-scheme: dark)' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
          <CTA />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
