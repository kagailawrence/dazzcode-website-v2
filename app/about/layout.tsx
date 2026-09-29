import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dazzcode | SaaS Engineering Agency & Product Lab",
  description:
    "Meet Dazzcode: We build transparent, investor-ready SaaS products, scalable web apps, and cloud systems for high-growth founders and businesses globally.",
  keywords: [
    "about Dazzcode",
    "SaaS development agency",
    "SaaS engineering team",
    "custom SaaS development company",
    "hire SaaS engineers",
    "full stack SaaS developers",
    "investor ready SaaS engineering",
    "cloud architecture engineers",
    "software engineers Nairobi",
  ],
  alternates: {
    canonical: "https://dazzcode.com/about",
  },
  openGraph: {
    title: "About Dazzcode | SaaS Engineering Agency & Product Lab",
    description:
      "Meet Dazzcode: We build transparent, investor-ready SaaS products, scalable web apps, and cloud systems for high-growth founders and businesses globally.",
    url: "https://dazzcode.com/about",
    siteName: "Dazzcode",
    type: "website",
    images: [
      {
        url: "/images/hero-saas-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "About Dazzcode - SaaS Engineering Agency & Product Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Dazzcode | SaaS Engineering Agency",
    description:
      "Meet Dazzcode: We build transparent, investor-ready SaaS products, scalable web apps, and cloud systems for high-growth founders and businesses globally.",
    images: ["/images/hero-saas-dashboard.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
