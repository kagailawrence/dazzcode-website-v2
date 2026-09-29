import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/seo/JsonLd";
import {
  ArrowRight,
  CheckCircle2,
  DollarSign,
  ShieldCheck,
  Zap,
  HelpCircle,
  Building2,
  Code2,
  ArrowUpRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "SaaS Development Company US | Custom SaaS Engineering | Dazzcode",
  description: "Dazzcode is a dedicated SaaS development company working with US startups and growing software companies. We engineer production-grade multi-tenant SaaS products, MVPs, and scalable cloud architectures with transparent milestone pricing.",
  keywords: [
    "SaaS development company US",
    "SaaS development USA",
    "SaaS development company USA",
    "SaaS development agency",
    "SaaS product development",
    "SaaS developers",
    "custom SaaS development",
    "Next.js SaaS development agency"
  ],
  alternates: {
    canonical: "https://dazzcode.com/us/saas-development",
    languages: {
      "en": "https://dazzcode.com/services/saas-development",
      "en-KE": "https://dazzcode.com/kenya/saas-development-company",
      "en-GB": "https://dazzcode.com/uk/saas-development",
      "en-US": "https://dazzcode.com/us/saas-development",
      "x-default": "https://dazzcode.com/services/saas-development",
    },
  },
  openGraph: {
    title: "SaaS Development Company US | Dazzcode",
    description: "Launch, fix, and scale your SaaS with Dazzcode. Senior-led full-stack engineering, rapid 4-6 week MVPs, and institutional codebases for US founders.",
    url: "https://dazzcode.com/us/saas-development",
    siteName: "Dazzcode",
    images: [
      {
        url: "/images/hero-saas-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "SaaS Development Company US - Dazzcode",
      },
    ],
  },
};

export default function USSaaSPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dazzcode.com/us/saas-development#service",
        name: "SaaS Development Company US",
        description: "End-to-end SaaS development, MVP engineering, and architecture scaling for US tech startups and growth-stage companies.",
        provider: {
          "@type": "Organization",
          name: "Dazzcode",
          url: "https://dazzcode.com",
          logo: "https://dazzcode.com/images/logo.png",
        },
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        serviceType: "SaaS development company US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dazzcode.com/us/saas-development#breadcrumb",
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
            name: "SaaS Development",
            item: "https://dazzcode.com/us/saas-development",
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
            <Link href="/services/saas-development" className="hover:text-[#059669] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#12201B] font-semibold">US SaaS Development</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECFDF5] border border-[#059669]/20 text-[#059669] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <DollarSign className="w-3.5 h-3.5" />
            <span>US Commercial SaaS Engineering</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-[#12201B] mb-6">
            SaaS Development Company for US Startups & Enterprises
          </h1>

          <p className="text-lg md:text-xl text-[#52615B] leading-relaxed max-w-3xl mb-8">
            Dazzcode engineers scalable, investor-ready SaaS products for founders and engineering leaders across the United States. Combining senior-level full-stack development, modern Next.js and PostgreSQL architecture, and transparent milestone-based pricing.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl transition-all shadow-[0_4px_20px_rgba(5,150,105,0.25)] cursor-pointer"
              >
                Discuss Your US SaaS Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-7 text-sm font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3] rounded-xl text-[#12201B] shadow-xs cursor-pointer"
              >
                View Case Studies
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#E2EAE6] text-xs font-mono text-[#52615B]">
            <div>
              <span className="text-[#059669] font-bold block">4–6 Weeks</span>
              <span>Fast MVP Turnaround</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">USD Billing</span>
              <span>Fixed Milestone Sprints</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">SOC2 Ready</span>
              <span>Due Diligence Compliant</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">100% IP</span>
              <span>Zero Vendor Lock-in</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why US Founders Partner with Dazzcode */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Execution Velocity
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              Why US Founders Choose Dazzcode for SaaS Engineering
            </h2>
            <p className="text-base text-[#52615B] leading-relaxed">
              Hiring in the US is expensive and slow, while traditional offshore outsourcing frequently delivers unmaintainable spaghetti code. Dazzcode offers a senior engineering alternative that delivers institutional code quality at transparent milestone rates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-5">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                Institutional-Grade Codebases
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                We don't build throwaway prototypes. Every platform is engineered with strict TypeScript typing, comprehensive automated tests, clean schema boundaries, and documented APIs ready for institutional investor due diligence.
              </p>
              <ul className="space-y-1.5 text-xs text-[#52615B]">
                <li>✓ Next.js App Router & React Server Components</li>
                <li>✓ PostgreSQL schema modeling with Prisma / Drizzle</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                SOC2-Ready Architecture & Security
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                We implement role-based access control (RBAC), multi-tenant data partitioning, encrypted secrets management, and audit logging built to satisfy enterprise procurement and compliance standards.
              </p>
              <ul className="space-y-1.5 text-xs text-[#52615B]">
                <li>✓ OWASP Top 10 security compliance</li>
                <li>✓ Row-Level Security (RLS) data isolation</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-5">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                High-Velocity Bi-Weekly Sprints
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                You test working software every Friday on dedicated staging URLs. Our agile process ensures fast iterations, rapid feature delivery, and continuous founder alignment.
              </p>
              <ul className="space-y-1.5 text-xs text-[#52615B]">
                <li>✓ Live staging preview deployments</li>
                <li>✓ Direct senior engineer communication</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-5">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                Transparent Milestone-Based USD Pricing
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                No open-ended hourly billing or surprise invoices. We scope deliverables with fixed milestones, providing complete transparency and 100% IP transfer upon completion.
              </p>
              <ul className="space-y-1.5 text-xs text-[#52615B]">
                <li>✓ Predictable project budgeting in USD</li>
                <li>✓ Complete Git repository and cloud environment handoff</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Link US Services */}
      <section className="py-16 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <h3 className="text-xl font-bold text-[#12201B] mb-6 text-center">
            Other Engineering Services for US Clients
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link
              href="/us/code-audit"
              className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] hover:border-[#059669] transition-colors group shadow-xs"
            >
              <span className="text-xs font-mono text-[#059669] font-bold block mb-1">Codebase Review</span>
              <span className="text-base font-bold text-[#12201B] group-hover:text-[#059669] transition-colors">
                Software Code Audit US →
              </span>
              <p className="text-xs text-[#52615B] mt-2">
                Technical debt audits and pre-seed to Series A due diligence code reviews.
              </p>
            </Link>
            <Link
              href="/us/saas-scaling"
              className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] hover:border-[#059669] transition-colors group shadow-xs"
            >
              <span className="text-xs font-mono text-[#059669] font-bold block mb-1">Scale & Speed</span>
              <span className="text-base font-bold text-[#12201B] group-hover:text-[#059669] transition-colors">
                SaaS Scaling & Optimization US →
              </span>
              <p className="text-xs text-[#52615B] mt-2">
                High-concurrency performance engineering, database optimization, and cloud cost reduction.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              FAQ
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              SaaS Development for US Clients
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <h3 className="text-base font-bold text-[#12201B] mb-2 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                <span>How do we collaborate across US timezones?</span>
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed pl-8">
                We structure clear async workflows via Slack, GitHub PRs, and Loom video walkthroughs. We also schedule synchronous overlap during US morning hours (EST/CST) for live meetings, sprint reviews, and architectural planning.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <h3 className="text-base font-bold text-[#12201B] mb-2 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                <span>What are typical SaaS MVP project costs in USD?</span>
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed pl-8">
                Production-grade SaaS MVPs typically range from $3,000 to $7,500 depending on feature depth, third-party integrations, and user permission models. We deliver fixed-milestone quotes with zero hourly creep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#12201B] text-white">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Ready to Build Your SaaS Product?
          </h2>
          <p className="text-sm md:text-base text-[#E2EAE6]/80 mb-8 max-w-xl mx-auto">
            Schedule an architectural scoping session with Dazzcode's senior engineers.
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
