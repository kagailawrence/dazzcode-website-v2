import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/data";
import JsonLd from "@/components/seo/JsonLd";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  Rocket,
  ShieldCheck,
  Server,
  Zap,
  ArrowUpRight,
  TrendingUp,
  Building2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies & Engineering Process | Dazzcode",
  description: "Explore real Dazzcode software case studies: DazzPOS offline-first retail POS in Kenya, AI lead automation pipelines, and high-concurrency SaaS platforms.",
  keywords: [
    "SaaS case studies",
    "software engineering case studies",
    "DazzPOS case study",
    "AI automation case study",
    "Next.js SaaS case studies",
    "offline-first architecture case study",
    "Dazzcode client work"
  ],
  alternates: {
    canonical: "https://dazzcode.com/case-studies",
  },
  openGraph: {
    title: "Software Engineering Case Studies | Dazzcode",
    description: "See how Dazzcode engineers production SaaS platforms and web applications. Problem → Decision → Build → Result.",
    url: "https://dazzcode.com/case-studies",
    siteName: "Dazzcode",
    images: [
      {
        url: "/images/hero-saas-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "Dazzcode Software Engineering Case Studies",
      },
    ],
  },
};

export default function CaseStudiesIndexPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "@id": "https://dazzcode.com/case-studies#list",
        name: "Dazzcode Case Studies",
        itemListElement: caseStudies.map((cs, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: cs.title,
          url: `https://dazzcode.com/case-studies/${cs.slug}`,
          description: cs.summary,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dazzcode.com/case-studies#breadcrumb",
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
            name: "Case Studies",
            item: "https://dazzcode.com/case-studies",
          },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAF9] text-[#12201B]">
      <JsonLd schema={structuredData} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECFDF5] border border-[#059669]/20 text-[#059669] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <span>Engineering in Production</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-[#12201B] mb-6">
            Real Software. Real Architecture. <br className="hidden sm:inline" />
            Verifiable Results.
          </h1>

          <p className="text-lg md:text-xl text-[#52615B] leading-relaxed max-w-3xl mx-auto mb-8">
            We don't make unsubstantiated claims. Explore our deep architectural case studies following the <strong className="text-[#12201B]">Problem → Decision → Build → Result</strong> framework.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="space-y-12">
            {caseStudies.map((study) => (
              <div
                key={study.slug}
                className="p-8 md:p-12 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] hover:border-[#059669]/50 hover:shadow-lg transition-all duration-300 shadow-xs"
              >
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#059669]/20 text-[#059669] text-xs font-mono font-bold">
                    {study.category}
                  </span>
                  <span className="text-xs font-mono text-[#52615B]">· {study.client}</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight mb-4">
                  {study.title}
                </h2>

                <p className="text-base text-[#52615B] leading-relaxed mb-8 max-w-3xl">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] mb-8">
                  {study.metrics.map((m, mIndex) => (
                    <div key={mIndex}>
                      <span className="text-2xl md:text-3xl font-black text-[#059669] tracking-tight block">
                        {m.value}
                      </span>
                      <span className="text-xs font-mono text-[#52615B] mt-1 block">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags & CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4 border-t border-[#E2EAE6]">
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2.5 py-1 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-mono text-[#52615B]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href={`/case-studies/${study.slug}`}>
                    <Button className="h-12 px-6 text-xs font-bold uppercase tracking-wider bg-[#059669] hover:bg-[#10B981] text-white rounded-xl shadow-xs cursor-pointer">
                      <span>Read Deep-Dive</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology / How We Build Section */}
      <section id="how-we-build" className="py-24 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight">
              The Problem → Decision → Build → Result Framework
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-mono font-bold text-sm mb-4">
                01
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Problem Mapping</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                We isolate real operational bottlenecks and user friction points before writing any code.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-mono font-bold text-sm mb-4">
                02
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Architectural Decision</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Choosing the right database schemas, caching layers, and tech stack to avoid costly pivots.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-mono font-bold text-sm mb-4">
                03
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Lean Agile Build</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Bi-weekly sprints with strict TypeScript typing, live staging, and automated CI/CD.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-mono font-bold text-sm mb-4">
                04
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Measurable Result</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Production launch with verified uptime, sub-100ms response targets, and full IP transfer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#12201B] text-white">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Have a Complex Software Project to Build?
          </h2>
          <p className="text-sm md:text-base text-[#E2EAE6]/80 mb-8 max-w-xl mx-auto">
            Talk directly to our systems engineers about your product roadmap and architecture requirements.
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
