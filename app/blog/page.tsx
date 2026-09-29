import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/blog";
import { ArrowRight, BookOpen } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import BlogSearchAndFilter from "@/components/blog/BlogSearchAndFilter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS Engineering & Architecture Blog | Dazzcode",
  description: "In-depth technical guides, architecture checklists, database optimization strategies, and real-world pricing guides for building and scaling SaaS platforms.",
  keywords: [
    "SaaS engineering blog",
    "SaaS development cost",
    "SaaS architecture checklist",
    "Next.js VPS deployment",
    "PostgreSQL multi-tenancy",
    "M-Pesa SaaS integration",
    "SOC2 ready architecture",
    "Dazzcode blog",
  ],
  alternates: {
    canonical: "https://dazzcode.com/blog",
  },
  openGraph: {
    title: "SaaS Engineering & Architecture Blog | Dazzcode",
    description: "In-depth technical guides, architecture checklists, database optimization strategies, and real-world pricing guides for building and scaling SaaS platforms.",
    url: "https://dazzcode.com/blog",
    siteName: "Dazzcode",
    type: "website",
    images: [
      {
        url: "/images/hero-saas-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "Dazzcode Engineering Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Engineering & Architecture Blog | Dazzcode",
    description: "In-depth technical guides, architecture checklists, and real-world pricing guides for building and scaling SaaS platforms.",
    images: ["/images/hero-saas-dashboard.jpg"],
  },
};

export default function BlogListingPage() {
  const blogPosts = getAllPosts();

  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://dazzcode.com/blog#blog",
        name: "Dazzcode SaaS Engineering & Architecture Blog",
        description: "In-depth technical guides, architecture checklists, and real-world pricing guides for building and scaling SaaS products.",
        url: "https://dazzcode.com/blog",
        publisher: {
          "@type": "Organization",
          name: "Dazzcode",
          url: "https://dazzcode.com",
          logo: "https://dazzcode.com/images/logo.png",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dazzcode.com/blog#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://dazzcode.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://dazzcode.com/blog",
          },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAF9] text-[#12201B]">
      <JsonLd schema={blogSchema} />

      {/* Hero Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECFDF5] border border-[#059669]/20 text-[#059669] text-xs font-mono font-bold uppercase tracking-wider mb-6">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Engineering & Architecture Knowledge Base</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-[#12201B] mb-6">
            SaaS Engineering & Architecture Blog
          </h1>

          <p className="text-lg md:text-xl text-[#52615B] leading-relaxed max-w-3xl mx-auto mb-10">
            Real architectural blueprints, honest pricing guides, and technical checklists for building, auditing, deploying, and scaling SaaS platforms.
          </p>

          {/* Interactive Search & Category Filter */}
          <BlogSearchAndFilter posts={blogPosts} />
        </div>
      </section>

      {/* Conversion CTA */}
      <section className="py-20 bg-[#12201B] text-white">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Have a Specific Software Challenge?
          </h2>
          <p className="text-sm md:text-base text-[#E2EAE6]/80 mb-8 max-w-xl mx-auto leading-relaxed">
            We regularly write guides based on questions from founders and CTOs. Book a discussion with our engineering architects.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="h-14 px-8 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl transition-all shadow-[0_4px_20px_rgba(5,150,105,0.4)] cursor-pointer"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
