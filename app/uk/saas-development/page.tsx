import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/seo/JsonLd";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  HelpCircle,
  Building2,
  Code2,
  ArrowUpRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "SaaS Development Company UK | B2B SaaS Engineering | Dazzcode",
  description: "Dazzcode is a dedicated SaaS development company working with UK startups and scaleups. We build scalable multi-tenant SaaS products, MVPs, and cloud platforms with GMT timezone alignment and GBP milestone pricing.",
  keywords: [
    "SaaS development company UK",
    "SaaS development UK",
    "SaaS development agency UK",
    "SaaS product development UK",
    "SaaS developers UK",
    "custom SaaS engineering London",
    "Next.js SaaS developers UK"
  ],
  alternates: {
    canonical: "https://dazzcode.com/uk/saas-development",
    languages: {
      "en": "https://dazzcode.com/services/saas-development",
      "en-KE": "https://dazzcode.com/kenya/saas-development-company",
      "en-GB": "https://dazzcode.com/uk/saas-development",
      "en-US": "https://dazzcode.com/us/saas-development",
      "x-default": "https://dazzcode.com/services/saas-development",
    },
  },
  openGraph: {
    title: "SaaS Development Company UK | Dazzcode",
    description: "Accelerate your SaaS roadmap. High-velocity full-stack engineering, GMT timezone collaboration, and institutional-grade codebases for UK founders.",
    url: "https://dazzcode.com/uk/saas-development",
    siteName: "Dazzcode",
    images: [
      {
        url: "/images/hero-saas-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "SaaS Development Company UK - Dazzcode",
      },
    ],
  },
};

export default function UKSaaSPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dazzcode.com/uk/saas-development#service",
        name: "SaaS Development Company UK",
        description: "B2B SaaS development and architecture engineering for UK startups and growth-stage platforms, featuring Next.js, TypeScript, and GDPR-compliant cloud infrastructure.",
        provider: {
          "@type": "Organization",
          name: "Dazzcode",
          url: "https://dazzcode.com",
          logo: "https://dazzcode.com/images/logo.png",
        },
        areaServed: {
          "@type": "Country",
          name: "United Kingdom",
        },
        serviceType: "SaaS development company UK",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dazzcode.com/uk/saas-development#breadcrumb",
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
            name: "SaaS Development",
            item: "https://dazzcode.com/uk/saas-development",
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
            <span className="text-[#12201B] font-semibold">UK SaaS Development</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECFDF5] border border-[#059669]/20 text-[#059669] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <Clock className="w-3.5 h-3.5" />
            <span>UK Timezone Aligned · GMT / BST</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-[#12201B] mb-6">
            SaaS Development Company for UK Startups & Scaleups
          </h1>

          <p className="text-lg md:text-xl text-[#52615B] leading-relaxed max-w-3xl mb-8">
            Dazzcode partners with UK-based founders, CTOs, and product teams to build, rescue, and scale serious SaaS products. Combining high-velocity sprint execution, institutional TypeScript architecture, and seamless GMT working day collaboration.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl transition-all shadow-[0_4px_20px_rgba(5,150,105,0.25)] cursor-pointer"
              >
                Discuss Your UK Project
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
              <span className="text-[#059669] font-bold block">GMT Overlap</span>
              <span>Full Workday Alignment</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">GBP Billing</span>
              <span>Predictable Milestones</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">UK GDPR</span>
              <span>Data Protection Ready</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">100% IP</span>
              <span>Direct GitHub Transfer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why UK Founders Choose Dazzcode */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Engineering Value
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              High-Velocity SaaS Engineering Tailored for the UK Market
            </h2>
            <p className="text-base text-[#52615B] leading-relaxed">
              London and regional UK startups face astronomical agency day rates and slow hiring cycles. Dazzcode delivers senior-level full-stack engineering with predictable pricing and zero communication friction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-5">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                Seamless GMT / BST Working Day Timezone Alignment
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                Our team operates in East Africa Time (EAT), which is just 2 to 3 hours ahead of London. Your UK team has 6+ hours of direct synchronous overlap every day for standups, Slack huddles, and PR reviews.
              </p>
              <ul className="space-y-1.5 text-xs text-[#52615B]">
                <li>✓ Real-time Slack/Teams collaboration</li>
                <li>✓ Same-day turnaround on urgent production PRs</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                UK GDPR & Data Protection Compliance
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                We engineer data models with strict tenant isolation, encrypted data at rest and in transit, consent management workflows, and audit logging to ensure full compliance with the UK Data Protection Act and GDPR.
              </p>
              <ul className="space-y-1.5 text-xs text-[#52615B]">
                <li>✓ London/EU AWS/Vercel hosting regions</li>
                <li>✓ Clean data retention and deletion workflows</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-5">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                Modern T3 & Next.js Architecture
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                We build with Next.js App Router, React Server Components, TypeScript, and PostgreSQL. You receive an institutional-grade codebase designed to pass technical due diligence from UK angel and venture capital syndicates.
              </p>
              <ul className="space-y-1.5 text-xs text-[#52615B]">
                <li>✓ Strict TypeScript type-safety end-to-end</li>
                <li>✓ Automated CI/CD and unit/integration testing</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-5">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                Predictable Fixed GBP Milestone Sprints
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                Eliminate open-ended hourly billing risks. We work in fixed-scope milestone sprints priced in GBP (£), delivering working, deployable code every two weeks with live staging environments.
              </p>
              <ul className="space-y-1.5 text-xs text-[#52615B]">
                <li>✓ Clear milestone deliverables and acceptance criteria</li>
                <li>✓ 100% intellectual property ownership from day one</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Link UK Services */}
      <section className="py-16 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <h3 className="text-xl font-bold text-[#12201B] mb-6 text-center">
            Other Engineering Services for UK Clients
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link
              href="/uk/code-audit"
              className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] hover:border-[#059669] transition-colors group shadow-xs"
            >
              <span className="text-xs font-mono text-[#059669] font-bold block mb-1">Code Review</span>
              <span className="text-base font-bold text-[#12201B] group-hover:text-[#059669] transition-colors">
                Software Code Audit UK →
              </span>
              <p className="text-xs text-[#52615B] mt-2">
                Technical debt audits and due diligence code reviews for UK founders and investors.
              </p>
            </Link>
            <Link
              href="/uk/saas-scaling"
              className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] hover:border-[#059669] transition-colors group shadow-xs"
            >
              <span className="text-xs font-mono text-[#059669] font-bold block mb-1">Performance Tuning</span>
              <span className="text-base font-bold text-[#12201B] group-hover:text-[#059669] transition-colors">
                SaaS Scaling & Optimization UK →
              </span>
              <p className="text-xs text-[#52615B] mt-2">
                Database query tuning, caching, and infrastructure cost optimization.
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
              SaaS Development for UK Clients
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <h3 className="text-base font-bold text-[#12201B] mb-2 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                <span>How do you handle communication and meetings with UK teams?</span>
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed pl-8">
                We are just 2 to 3 hours ahead of London (GMT/BST), giving us extensive real-time daily overlap. We participate in daily Slack huddles, bi-weekly sprint reviews, and provide dedicated async video walkthroughs for every staging deploy.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <h3 className="text-base font-bold text-[#12201B] mb-2 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                <span>Can we pay invoices in British Pounds (GBP)?</span>
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed pl-8">
                Yes. We offer seamless GBP invoicing via UK bank transfer (Sort Code / Account Number) or Wise with fixed-milestone sprint pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#12201B] text-white">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Building a SaaS for the UK or International Market?
          </h2>
          <p className="text-sm md:text-base text-[#E2EAE6]/80 mb-8 max-w-xl mx-auto">
            Book an introductory technical review with our lead architects. We will discuss your technical requirements and provide clear milestone timelines.
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
