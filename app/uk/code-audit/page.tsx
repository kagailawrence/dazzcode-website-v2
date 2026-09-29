import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/seo/JsonLd";
import {
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  Code2,
  Lock,
  Zap,
  HelpCircle,
  Building2,
  ArrowUpRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Software Code Audit UK | SaaS Technical Due Diligence | Dazzcode",
  description: "Dazzcode provides comprehensive software code audits and technical due diligence reviews for UK startups, CTOs, and investment syndicates. Uncover technical debt, security risks, and architecture bottlenecks.",
  keywords: [
    "software code audit UK",
    "SaaS code audit UK",
    "codebase audit UK",
    "software architecture audit UK",
    "technical debt audit UK",
    "due diligence code audit London"
  ],
  alternates: {
    canonical: "https://dazzcode.com/uk/code-audit",
    languages: {
      "en": "https://dazzcode.com/services/code-audit",
      "en-GB": "https://dazzcode.com/uk/code-audit",
      "en-US": "https://dazzcode.com/us/code-audit",
      "x-default": "https://dazzcode.com/services/code-audit",
    },
  },
  openGraph: {
    title: "Software Code Audit UK | Dazzcode",
    description: "Deep codebase inspection, security vulnerability assessment, and architectural due diligence for UK SaaS platforms.",
    url: "https://dazzcode.com/uk/code-audit",
    siteName: "Dazzcode",
    images: [
      {
        url: "/images/hero-saas-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "Software Code Audit UK - Dazzcode",
      },
    ],
  },
};

export default function UKCodeAuditPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dazzcode.com/uk/code-audit#service",
        name: "Software Code Audit UK",
        description: "Comprehensive software codebase audit, security review, and technical due diligence for UK startups and investors.",
        provider: {
          "@type": "Organization",
          name: "Dazzcode",
          url: "https://dazzcode.com",
        },
        areaServed: {
          "@type": "Country",
          name: "United Kingdom",
        },
        serviceType: "software code audit UK",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dazzcode.com/uk/code-audit#breadcrumb",
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
            name: "UK",
            item: "https://dazzcode.com/uk/saas-development",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Code Audit",
            item: "https://dazzcode.com/uk/code-audit",
          },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAF9] text-[#12201B]">
      <JsonLd schema={structuredData} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <nav className="flex items-center gap-2 text-xs font-mono text-[#52615B] mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#059669] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services/code-audit" className="hover:text-[#059669] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#12201B] font-semibold">UK Code Audit</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECFDF5] border border-[#059669]/20 text-[#059669] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>UK Technical Due Diligence</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-[#12201B] mb-6">
            Software Code Audit & Technical Due Diligence UK
          </h1>

          <p className="text-lg md:text-xl text-[#52615B] leading-relaxed max-w-3xl mb-8">
            Identify critical technical debt, uncover security vulnerabilities, and evaluate software architecture viability before raising capital or acquiring a UK tech asset. We deliver deep, senior-led code reviews with actionable remediation plans.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl transition-all shadow-[0_4px_20px_rgba(5,150,105,0.25)] cursor-pointer"
              >
                Book a Technical Review
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/services/code-audit">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-7 text-sm font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3] rounded-xl text-[#12201B] shadow-xs cursor-pointer"
              >
                Global Audit Details
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#E2EAE6] text-xs font-mono text-[#52615B]">
            <div>
              <span className="text-[#059669] font-bold block">5–7 Days</span>
              <span>Delivery Turnaround</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">Fixed GBP</span>
              <span>From £1,200</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">NDA Protected</span>
              <span>100% Confidential</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">Senior Review</span>
              <span>No Automated Fluff</span>
            </div>
          </div>
        </div>
      </section>

      {/* What the UK Code Audit Covers */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Inspection Framework
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              Comprehensive Codebase & Architecture Analysis
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                1. Architecture & Maintainability
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                We inspect domain boundaries, coupling, state management, and dependency hygiene to determine if new features can be shipped safely without breaking existing routes.
              </p>
              <ul className="space-y-1.5 text-xs text-[#52615B]">
                <li>✓ TypeScript type-safety & linting rules</li>
                <li>✓ Code modularity & component separation</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                2. Database & Query Performance
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                We profile SQL queries, analyze EXPLAIN plans, review table indexing, and check connection pooling to detect bottlenecks before traffic spikes crash the database.
              </p>
              <ul className="space-y-1.5 text-xs text-[#52615B]">
                <li>✓ PostgreSQL / MySQL index profiling</li>
                <li>✓ N+1 query issue detection</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                3. Security & UK GDPR Alignment
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                We audit authentication flows, role-based permissions, exposed environment variables, and NPM vulnerability trees against OWASP standards.
              </p>
              <ul className="space-y-1.5 text-xs text-[#52615B]">
                <li>✓ OWASP Top 10 vulnerability checks</li>
                <li>✓ Auth token security & secrets isolation</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                4. Prioritized Engineering Action Plan
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                You receive an executive summary for investors and a categorized technical roadmap with high, medium, and low priority tasks and estimated effort.
              </p>
              <ul className="space-y-1.5 text-xs text-[#52615B]">
                <li>✓ Actionable step-by-step remediation plan</li>
                <li>✓ 60-minute debrief call with our Lead Architect</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#12201B] text-white">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Need a Confidential Code Review?
          </h2>
          <p className="text-sm md:text-base text-[#E2EAE6]/80 mb-8 max-w-xl mx-auto">
            Book a code audit for your UK startup or tech acquisition target. NDA signed before repo access.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="h-14 px-8 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl transition-all shadow-[0_4px_20px_rgba(5,150,105,0.4)] cursor-pointer"
            >
              Book a Code Audit
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
