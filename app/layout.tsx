import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import StructuredData from "@/components/seo/StructuredData";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dazzcode | Expert SaaS Development & Engineering Agency",
    template: "%s | Dazzcode",
  },
  description: "Dazzcode builds high-performance SaaS products, MVPs, and enterprise-grade engineering solutions. We help founders ship faster with Next.js, TypeScript, and Cloud-native architectures.",
  keywords: [
    "SaaS Development Agency",
    "SaaS MVP Launch",
    "SaaS Audit & Cleanup",
    "Next.js Development",
    "TypeScript Engineering",
    "Cloud Native Apps",
    "SaaS Scaling",
    "Fractional CTO Services",
    "Enterprise Software Solutions"
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
    title: "Dazzcode | Expert SaaS Development & Engineering Agency",
    description: "Build, Fix, and Scale your SaaS with institutional-grade engineering. Ship faster, scale further.",
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
    title: "Dazzcode | Expert SaaS Development & Engineering Agency",
    description: "Ship Your SaaS Without the Technical Headache. Expert engineering for global founders.",
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
        className={`${outfit.variable} antialiased min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white`}
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
