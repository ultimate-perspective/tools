import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import Providers from "@/components/Providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  metadataBase: new URL("https://designinstantly.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
