import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dazzcode | Scalable SaaS Development",
    template: "%s | Dazzcode",
  },
  description: "Dazzcode builds scalable SaaS products and helps businesses turn ideas into reliable software. Expert Next.js, TypeScript, and Cloud engineering.",
  keywords: ["SaaS Development", "Software Agency", "Next.js Developers", "Scalable Software", "Dazzcode"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dazzcode.com",
    title: "Dazzcode | Scalable SaaS Development",
    description: "We build scalable SaaS products and help businesses turn ideas into reliable software.",
    siteName: "Dazzcode",
  },
  metadataBase: new URL("https://dazzcode.com"),
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
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
