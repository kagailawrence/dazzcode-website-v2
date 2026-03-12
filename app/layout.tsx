import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import StructuredData from "@/components/seo/StructuredData";
import JsonLd from "@/components/seo/JsonLd";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dazzcode | Expert SaaS Development Agency",
    template: "%s | Dazzcode",
  },
  description: "We help founders launch, fix, and scale revenue-generating SaaS products built on institutional-grade engineering using Next.js and TypeScript.",
  keywords: [
    "SaaS development",
    "MVP launch",
    "Next.js agency",
    "TypeScript engineers",
    "SaaS audit",
    "fractional CTO",
    "Nairobi tech agency",
    "Africa SaaS"
  ],
  authors: [{ name: "Dazzcode Team", url: "https://dazzcode.com" }],
  creator: "Dazzcode",
  publisher: "Dazzcode",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dazzcode.com",
    title: "Dazzcode | Expert SaaS Development Agency",
    description: "We help founders launch, fix, and scale revenue-generating SaaS products built on institutional-grade engineering using Next.js and TypeScript.",
    siteName: "Dazzcode",
    images: [
      {
        url: "/images/og-image.png", // Assuming this will be created or exists
        width: 1200,
        height: 630,
        alt: "Dazzcode SaaS Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dazzcode | Expert SaaS Development Agency",
    description: "We help founders launch, fix, and scale revenue-generating SaaS products built on institutional-grade engineering using Next.js and TypeScript.",
    creator: "@dazzcode",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  metadataBase: new URL("https://dazzcode.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${dmSans.variable} antialiased min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white`}
      >
        <StructuredData />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
