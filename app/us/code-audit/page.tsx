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
  title: "Software Code Audit US | SaaS Technical Due Diligence | Dazzcode",
  description: "Dazzcode provides comprehensive software code audits and technical due diligence reviews for US startups, CTOs, and venture investors. Detect technical debt, security flaws, and architectural scaling limits.",
  keywords: [
    "software code audit US",
    "SaaS code audit",
    "codebase audit",
    "software architecture audit",
    "technical debt audit",
    "VC technical due diligence code audit",
    "due diligence code audit US"
  ],
  alternates: {
    canonical: "https://dazzcode.com/us/code-audit",
    languages: {
      "en": "https://dazzcode.com/services/code-audit",
      "en-GB": "https://dazzcode.com/uk/code-audit",
      "en-US": "https://dazzcode.com/us/code-audit",
      "x-default": "https://dazzcode.com/services/code-audit",
    },
  },
  openGraph: {
    title: "Software Code Audit US | Dazzcode",
    description: "Deep codebase inspection, security vulnerability assessment, and architectural due diligence for US SaaS platforms.",
    url: "https://dazzcode.com/us/code-audit",
    siteName: "Dazzcode",
    images: [
      {
        url: "/images/hero-saas-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "Software Code Audit US - Dazzcode",
      },
    ],
  },
};

export default function USCodeAuditPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dazzcode.com/us/code-audit#service",
        name: "Software Code Audit US",
        description: "Comprehensive software codebase audit, security review, and technical due diligence for US startups, founders, and investors.",
        provider: {
          "@type": "Organization",
          name: "Dazzcode",
          url: "https://dazzcode.com",
        },
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        serviceType: "software code audit US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dazzcode.com/us/code-audit#breadcrumb",
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
            name: "US",
            item: "https://dazzcode.com/us/saas-development",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Code Audit",
            item: "https://dazzcode.com/us/code-audit",
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
            <span className="text-[#12201B] font-semibold">US Code Audit</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECFDF5] border border-[#059669]/20 text-[#059669] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>US Technical Due Diligence</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-[#12201B] mb-6">
            Software Code Audit & Technical Due Diligence US
          </h1>

          <p className="text-lg md:text-xl text-[#52615B] leading-relaxed max-w-3xl mb-8">
            Untangle technical debt, identify security vulnerabilities, and evaluate software architecture health before raising Series A or acquiring a US tech product. We deliver deep, senior-led code inspections with prioritized remediation roadmaps.
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
                Global Audit Scope
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#E2EAE6] text-xs font-mono text-[#52615B]">
            <div>
              <span className="text-[#059669] font-bold block">5–7 Days</span>
              <span>Fast Turnaround</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">Fixed USD</span>
              <span>From $1,500</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">NDA Signed</span>
              <span>100% Confidential</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">Senior Led</span>
              <span>Deep Architecture Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Breakdown */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Inspection Framework
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              What Our US Codebase Audit Inspects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                1. Architectural Scalability & Tech Debt
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                We review component modularity, state management, dependency hygiene, and TypeScript coverage to evaluate long-term maintenance cost.
              </p>
              <ul className="space-y-1.5 text-xs text-[#52615B]">
                <li>✓ Next.js / React best practices</li>
                <li>✓ API contract design & decoupling</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                2. Database Query Plans & Indexing
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                We profile database execution plans (PostgreSQL, MySQL), examine table schema normalization, and detect unindexed queries causing CPU spikes.
              </p>
              <ul className="space-y-1.5 text-xs text-[#52615B]">
                <li>✓ Identification of slow N+1 query loops</li>
                <li>✓ Connection pooling & locking review</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                3. Security & SOC2 Compliance Readiness
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                Auditing user authentication mechanisms, session token handling, tenant data isolation, and known CVE vulnerabilities in third-party NPM packages.
              </p>
              <ul className="space-y-1.5 text-xs text-[#52615B]">
                <li>✓ OWASP Top 10 security inspection</li>
                <li>✓ Role-based access control (RBAC) audit</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                4. Actionable Remediation Roadmap
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                You get an Executive Summary for investors/boards and a detailed engineering punch-list categorized by severity with estimated refactoring effort.
              </p>
              <ul className="space-y-1.5 text-xs text-[#52615B]">
                <li>✓ Prioritized technical debt punch-list</li>
                <li>✓ 60-minute technical review debrief</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#12201B] text-white">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Need an Objective Codebase Review?
          </h2>
          <p className="text-sm md:text-base text-[#E2EAE6]/80 mb-8 max-w-xl mx-auto">
            Book a confidential code audit with Dazzcode. Mutual NDA signed before repository onboarding.
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
