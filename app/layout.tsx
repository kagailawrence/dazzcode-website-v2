import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
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

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dazzcode | SaaS Development Company & Custom SaaS Engineering",
    template: "%s | Dazzcode",
  },
  description: "Dazzcode is  SaaS development company providing custom SaaS development services, SaaS MVP development, code audits, AI automation, and robust VPS server deployment.",
  keywords: [
    "SaaS development company",
    "SaaS development",
    "SaaS development services",
    "SaaS product development",
    "SaaS application development",
    "custom SaaS development",
    "SaaS MVP development",
    "code audit",
    "MVP",
    "multi-tenant SaaS",
    "web applications",
    "SaaS architecture",
    "SaaS scaling",
    "AI automation",
    "woocommerce",
    "VPS server deployment",
    "deploy Next.js app to VPS",
    "Node.js VPS deployment",
    "Docker VPS deployment",
    "Linux server deployment",
    "SaaS deployment"
  ],
  authors: [{ name: "Dazzcode Team", url: "https://dazzcode.com" }],
  creator: "Dazzcode",
  publisher: "Lawrence Maina Kagai (Dazzcode)",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dazzcode.com",
    title: "Dazzcode | SaaS Development Company & Custom SaaS Engineering",
    description: "Premier SaaS development company providing custom SaaS development services, SaaS MVP development, code audits, AI automation, and robust VPS server deployment.",
    siteName: "Dazzcode",
    images: [
      {
        url: "/images/hero-saas-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "Dazzcode SaaS Development Company & Engineering Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dazzcode | SaaS Development Company & Custom SaaS Engineering",
    description: "Premier SaaS development company providing custom SaaS development services, SaaS MVP development, code audits, and VPS server deployment.",
    creator: "@dazzcode",
    images: ["/images/hero-saas-dashboard.jpg"],
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
        className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable} antialiased min-h-screen flex flex-col font-sans selection:bg-primary selection:text-black`}
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
