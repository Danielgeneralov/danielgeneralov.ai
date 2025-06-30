import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Daniel Generalov",
    template: "%s | Daniel Generalov",
  },
  description: "AI enthusiast on a learning journey. Building cool projects, experimenting with neural networks, and sharing what I discover along the way. Join me as I dive deep into transformers, attention mechanisms, and all things AI!",
  keywords: ["AI", "artificial intelligence", "machine learning", "neural networks", "transformers", "attention mechanisms", "learning", "projects", "experiments", "AI enthusiast"],
  authors: [{ name: "Daniel Generalov" }],
  creator: "Daniel Generalov",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danielgeneralov.com",
    title: "Daniel Generalov - AI Enthusiast & Learner",
    description: "AI enthusiast on a learning journey. Building cool projects, experimenting with neural networks, and sharing discoveries along the way.",
    siteName: "Daniel Generalov",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Generalov - AI Enthusiast & Learner",
    description: "AI enthusiast on a learning journey. Building cool projects, experimenting with neural networks, and sharing discoveries along the way.",
    creator: "@danielgeneralov",
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