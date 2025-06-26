import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AI Research Hub",
    template: "%s | AI Research Hub",
  },
  description: "Exploring the frontiers of artificial intelligence, neural networks, and machine learning through research, experimentation, and open science.",
  keywords: ["AI", "artificial intelligence", "machine learning", "neural networks", "research", "deep learning"],
  authors: [{ name: "AI Research Hub" }],
  creator: "AI Research Hub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ai-research-hub.com",
    title: "AI Research Hub",
    description: "Exploring the frontiers of artificial intelligence, neural networks, and machine learning.",
    siteName: "AI Research Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Research Hub",
    description: "Exploring the frontiers of artificial intelligence, neural networks, and machine learning.",
    creator: "@airesearchhub",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 