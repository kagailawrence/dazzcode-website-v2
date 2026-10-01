import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/seo/JsonLd";
import SaasCodeAuditHeroPreview from "@/components/sections/SaasCodeAuditHeroPreview";
import WooCommerceLeadForm from "@/components/sections/WooCommerceLeadForm";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Globe,
  Rocket,
  Layers,
  Code2,
  ShieldCheck,
  ShieldAlert,
  Search,
  Zap,
  Smartphone,
  CreditCard,
  Database,
  Server,
  RefreshCw,
  TrendingUp,
  MessageSquare,
  Lock,
  Calendar,
  AlertTriangle,
  Clock,
  Briefcase,
  Building2,
  Users,
  Cpu,
  Laptop,
  Check,
  X,
  FileCode2,
  AlertOctagon,
  Info,
  FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "SaaS Code Audit & Architecture Review | Dazzcode",
  description:
    "Dazzcode reviews code quality, architecture, security, performance, technical debt and scalability.",
  keywords: [
    "SaaS code audit",
    "SaaS architecture review",
    "SaaS code audit services",
    "SaaS code audit company",
    "SaaS code audit agency",
    "SaaS technical audit",
    "SaaS architecture audit",
    "SaaS code review",
    "SaaS technical review",
    "SaaS codebase audit",
    "SaaS software audit",
    "SaaS security audit",
    "SaaS performance audit",
    "SaaS technical due diligence",
    "review my SaaS code",
    "audit my software",
    "SaaS technical debt",
    "SaaS scalability audit",
    "SaaS code audit Kenya",
    "SaaS code audit Nairobi",
    "code audit Kenya",
    "software code audit Kenya",
    "SaaS code audit UK",
    "SaaS code audit USA",
    "SaaS code audit in canada"
  ],
  alternates: {
    canonical: "https://dazzcode.com/services/saas-code-audit",
    languages: {
      "en": "https://dazzcode.com/services/saas-code-audit",
      "en-GB": "https://dazzcode.com/uk/code-audit",
      "en-US": "https://dazzcode.com/us/code-audit",
      "x-default": "https://dazzcode.com/services/saas-code-audit",
    },
  },
  openGraph: {
    title: "SaaS Code Audit & Architecture Review | Dazzcode",
    description:
      "Get an independent SaaS code audit and architecture review. Understand the health of your codebase, identify risks, and get a practical remediation roadmap.",
    url: "https://dazzcode.com/services/saas-code-audit",
    siteName: "Dazzcode",
    images: [
      {
        url: "/images/hero-saas-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "SaaS Code Audit & Architecture Review - Dazzcode",
      },
    ],
  },
};

const auditFaqs = [
  {
    q: "What is a SaaS code audit?",
    a: "A SaaS code audit is an in-depth, independent technical review of your application's source code, database architecture, API designs, third-party dependencies, security configurations, and deployment pipelines. The objective is to identify hidden technical debt, performance bottlenecks, and security vulnerabilities before they impact paying customers or escalate development costs."
  },
  {
    q: "What is a SaaS architecture review?",
    a: "An architecture review assesses how your software components interact, how data flows between your frontend, backend, background workers, and database, and whether your system boundaries can support higher concurrency and multi-tenant growth without requiring a complete rewrite."
  },
  {
    q: "How much does a SaaS code audit cost?",
    a: "SaaS code audit pricing is tailored specifically to your application's architecture, total lines of code, database complexity, number of repositories, and specific goals (such as an internal health check, developer handover, or institutional investor due diligence). Rather than open-ended hourly billing, Dazzcode provides a transparent, fixed-scope quote after a brief initial discovery review of your tech stack."
  },
  {
    q: "How long does a SaaS code audit take?",
    a: "A standard codebase audit takes 3 to 7 business days from the moment read-only repository access is granted. We deliver a detailed written report alongside a 60-minute technical debrief call with our Lead Systems Architect."
  },
  {
    q: "What do you check during a code audit?",
    a: "We inspect 10 foundational dimensions: 1) System Architecture & Boundaries, 2) Code Quality & Maintainability, 3) Database Schemas & Slow Queries, 4) API Consistency & Validation, 5) Application Security (OWASP Top 10), 6) Performance & Caching, 7) Technical Debt & Fragility, 8) Scalability & Multi-Tenancy, 9) DevOps & VPS Deployment, and 10) Outdated or Vulnerable Dependencies."
  },
  {
    q: "Do you review the database and query performance?",
    a: "Yes. Database queries are the primary cause of SaaS slowdowns. We profile query execution plans (EXPLAIN ANALYZE in PostgreSQL/MySQL), identify missing composite indexes, detect N+1 query loops, check connection pooling configurations, and review tenant data isolation."
  },
  {
    q: "Do you review APIs and external integrations?",
    a: "Yes. We inspect REST and GraphQL endpoints for authentication validation, input payload sanitization, error response consistency, webhook idempotency (e.g., Stripe or payment provider callbacks), and rate limiting."
  },
  {
    q: "Do you check application security?",
    a: "Yes. We examine authentication mechanisms, session token storage, role-based access control (RBAC), SQL injection vectors, Cross-Site Scripting (XSS) risks, Insecure Direct Object References (IDOR), and hardcoded environment secrets."
  },
  {
    q: "Is a code audit the same as penetration testing?",
    a: "No. A code audit is an internal white-box source code and architectural review conducted from the inside out. Penetration testing is an external black-box hacking simulation attempting to breach live network perimeters. We clearly distinguish our architectural code audit from specialized pen testing."
  },
  {
    q: "Can you audit code written by another developer or agency?",
    a: "Yes. In fact, most of our audit clients inherited a codebase from an outsourced agency, previous contractor, or former co-founder. We provide an objective, unbiased evaluation of what was built, what works, and what needs remediation."
  },
  {
    q: "Can you audit a startup MVP?",
    a: "Yes. We frequently audit startup MVPs to help founders determine whether their codebase is stable enough to build Phase 2 features upon or whether technical debt must be addressed before onboarding paying users."
  },
  {
    q: "Will you tell me whether I should rewrite my SaaS?",
    a: "Yes. We provide clear, honest guidance on whether you should Keep, Refactor, Modernize, or Rewrite. We do not automatically recommend complete rewrites because surgical refactoring is usually faster, cheaper, and safer for business continuity."
  },
  {
    q: "Can you review modern Next.js and TypeScript applications?",
    a: "Yes. We specialize in modern Next.js (App Router, Server Components), TypeScript, React, Node.js, Go, Rust, and PostgreSQL architectures."
  },
  {
    q: "Can you review Docker containers and Linux VPS deployments?",
    a: "Yes. We inspect Dockerfiles, container resource limits, Nginx/Caddy reverse proxies, SSL certificate setups, and automated backup routines."
  },
  {
    q: "Do you work with Kenyan and East African companies?",
    a: "Yes. Dazzcode is headquartered in Nairobi, Kenya, and works closely with local startups, SMEs, and tech companies across Kenya and East Africa."
  },
  {
    q: "Do you work with international clients outside Kenya?",
    a: "Yes. We work remotely with SaaS founders, agencies, and investors across the UK, US, Europe, and worldwide under strict mutual Non-Disclosure Agreements (NDAs)."
  },
  {
    q: "Can Dazzcode fix the problems identified after the audit?",
    a: "Yes. If you choose, Dazzcode can execute the remediation roadmap through dedicated refactoring sprints, performance tuning, or ongoing software engineering support."
  },
  {
    q: "Do I have to hire Dazzcode for development after the audit?",
    a: "No. You are under zero obligation to hire us. The audit deliverable is a standalone, actionable document that you can hand to your existing internal team or another engineering partner to execute."
  }
];

export default function SaasCodeAuditPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dazzcode.com/services/saas-code-audit#service",
        name: "SaaS Code Audit & Architecture Review",
        description:
          "Get an independent SaaS code audit and architecture review. Dazzcode reviews code quality, architecture, security, performance, technical debt and scalability.",
        provider: {
          "@type": "Organization",
          name: "Dazzcode",
          url: "https://dazzcode.com",
          logo: "https://dazzcode.com/images/logo.png",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Nairobi",
            addressCountry: "KE",
          },
        },
        areaServed: ["Kenya", "East Africa", "United Kingdom", "United States", "Worldwide"],
        serviceType: "SaaS Code Audit",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dazzcode.com/services/saas-code-audit#breadcrumb",
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
            name: "Services",
            item: "https://dazzcode.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "SaaS Code Audit",
            item: "https://dazzcode.com/services/saas-code-audit",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://dazzcode.com/services/saas-code-audit#faq",
        mainEntity: auditFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAF9] text-[#12201B]">
      <JsonLd schema={structuredData} />

      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono text-[#52615B] mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#059669] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#059669] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#12201B] font-semibold">SaaS Code Audit</span>
          </nav>

          {/* Main H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-[#12201B] mb-4">
            SaaS Code Audit & Architecture Review
          </h1>

          <p className="text-xl md:text-2xl font-bold text-[#059669] mb-6">
            Find the problems before they become expensive.
          </p>

          {/* Supporting Copy */}
          <p className="text-lg md:text-xl text-[#52615B] leading-relaxed max-w-3xl mb-8 font-normal">
            We inspect your existing codebase, architecture, database, APIs, security, performance and technical debt to show you what needs attention — and what doesn&apos;t.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
            <Link href="#contact">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl transition-all shadow-[0_4px_20px_rgba(5,150,105,0.25)] cursor-pointer"
              >
                Request a SaaS Audit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="#what-we-review">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-7 text-sm font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3] rounded-xl text-[#12201B] shadow-xs cursor-pointer"
              >
                See What We Review
              </Button>
            </Link>
            <span className="text-xs font-mono text-[#52615B] px-2 py-2">
              Kenya-based. Available for businesses and SaaS teams worldwide.
            </span>
          </div>

          {/* Micro-copy */}
          <div className="text-xs font-mono text-[#52615B] flex flex-wrap items-center gap-x-3 gap-y-1 pt-2">
            <span className="font-semibold text-[#12201B]">Architecture Review</span>
            <span>•</span>
            <span className="font-semibold text-[#12201B]">Database Query Profiling</span>
            <span>•</span>
            <span className="font-semibold text-[#12201B]">Security & RBAC Check</span>
            <span>•</span>
            <span className="font-semibold text-[#12201B]">Technical Due Diligence</span>
          </div>

          {/* Interactive Hero Visual Mockup */}
          <SaasCodeAuditHeroPreview />
        </div>
      </section>

      {/* 2. IMMEDIATE TRUST & PROOF SECTION */}
      <section className="py-12 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="text-2xl md:text-3xl font-black text-[#059669]">3–7 Days</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">Audit Turnaround</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="text-2xl md:text-3xl font-black text-[#059669]">Strict NDA</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">Confidential Review</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="text-2xl md:text-3xl font-black text-[#059669]">No Panic Rewrites</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">Pragmatic Refactoring</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="text-2xl md:text-3xl font-black text-[#059669]">Action Plan</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">Prioritized Severity Matrix</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE CORE PROBLEM */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Hidden Technical Debt
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Your SaaS Can Work and Still Have Serious Technical Problems
            </h2>
            <p className="text-base text-[#52615B] mt-4 leading-relaxed">
              A software application can look beautiful, have active paying customers, and function 95% of the time — while quietly accumulating architectural flaws that threaten your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-lg font-bold text-[#12201B] mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#059669]" />
                What You See on the Surface
              </h3>
              <ul className="space-y-3 text-xs text-[#52615B] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#059669] font-bold">•</span>
                  <span>Modern, clean UI design and marketing landing pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#059669] font-bold">•</span>
                  <span>Early customer signups and active daily users</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#059669] font-bold">•</span>
                  <span>Core features working under low test traffic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#059669] font-bold">•</span>
                  <span>Basic subscription payments processing normally</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#FEF2F2] border border-[#FCA5A5]/40 shadow-xs">
              <h3 className="text-lg font-bold text-[#DC2626] mb-4 flex items-center gap-2">
                <AlertOctagon className="w-5 h-5 text-[#DC2626]" />
                What Might Be Hiding Beneath
              </h3>
              <ul className="space-y-3 text-xs text-[#7F1D1D] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC2626] font-bold">•</span>
                  <span>Unindexed database queries that will freeze under 1,000 active users</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC2626] font-bold">•</span>
                  <span>Tightly coupled spaghetti code where small edits break unrelated features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC2626] font-bold">•</span>
                  <span>Silent webhook drops causing missing subscription updates and revenue leakage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC2626] font-bold">•</span>
                  <span>Fragile manual deployments that make new developers afraid to touch the code</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHO NEEDS A SAAS CODE AUDIT? */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Target Audience
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Who Needs a SaaS Code Audit?
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              Independent technical evaluations tailored for founders, executives, and engineering teams.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">SaaS Founders</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                You inherited or outsourced a codebase and need an objective, plain-English report on whether the software was engineered properly.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Startups With an MVP</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                You validated your initial prototype and want to know if the technical foundation can support serious feature expansion without breaking.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Growing SaaS Companies</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                New features are taking 4x longer to ship, bugs keep resurfacing, and your team is spending more time on maintenance than product innovation.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Businesses With Custom Software</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Your core business operations depend on custom software and you want an independent architectural assessment to mitigate operational risk.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Companies Changing Developers</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                A new development team or in-house hire needs to understand the existing system architecture and known risks before taking over development.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Investors & Acquirers</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                You are evaluating a software company for angel investment, Seed/Series A funding, or acquisition and need technical due diligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMMON WARNING SIGNS CHECKLIST */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Symptoms of Technical Debt
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Does Your Codebase Have These Warning Signs?
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              If you recognize 3 or more of these symptoms, an independent technical review will save you time and money.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
              <span>Every new feature seems noticeably harder and slower to build than the last.</span>
            </div>
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
              <span>Developers are visibly afraid to modify certain fragile areas of the system.</span>
            </div>
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
              <span>Small bug fixes keep unintentionally breaking unrelated features in production.</span>
            </div>
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
              <span>Your application or dashboards have become noticeably slower under load.</span>
            </div>
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
              <span>Database CPU spikes frequently and queries take seconds to resolve.</span>
            </div>
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
              <span>Nobody on the team fully understands the entire end-to-end architecture.</span>
            </div>
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
              <span>Architecture documentation, API contracts, and ERDs are completely missing.</span>
            </div>
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
              <span>The application relies heavily on outdated or unmaintained third-party packages.</span>
            </div>
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
              <span>Production errors are difficult to diagnose due to poor logging and telemetry.</span>
            </div>
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
              <span>Deployments are high-stress manual events that require late-night maintenance.</span>
            </div>
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
              <span>You are unsure whether your current server infrastructure can handle growth.</span>
            </div>
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
              <span>Your original agency or developer is no longer available to support the product.</span>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="#contact">
              <Button
                className="h-12 px-8 text-xs font-bold uppercase tracking-wider bg-[#059669] text-white hover:bg-[#047857] rounded-xl cursor-pointer"
              >
                Find Out What&apos;s Actually Wrong →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. WHAT WE REVIEW (10 CORE DIMENSIONS) */}
      <section id="what-we-review" className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Audit Scope
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              What We Review
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              We conduct a comprehensive, line-by-line inspection across 10 critical technical dimensions:
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col md:flex-row items-start justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-[#059669]">01</span>
                  <h3 className="text-base font-bold text-[#12201B]">Architecture & System Boundaries</h3>
                </div>
                <p className="text-xs text-[#52615B] leading-relaxed mb-3">
                  We review service boundaries, frontend/backend separation, dependency coupling, modularity, and maintainability.
                </p>
                <div className="text-xs font-mono text-[#059669] bg-[#FFFFFF] p-2.5 rounded-lg border border-[#E2EAE6]">
                  Key Question: Is the architecture helping the product or getting in its way?
                </div>
              </div>
              <span className="text-xs font-mono text-[#52615B] shrink-0">Structural Health</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col md:flex-row items-start justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-[#059669]">02</span>
                  <h3 className="text-base font-bold text-[#12201B]">Code Quality & TypeScript Strictness</h3>
                </div>
                <p className="text-xs text-[#52615B] leading-relaxed">
                  We inspect code readability, cyclomatic complexity, dead code, duplicated logic, error handling patterns, naming conventions, and type-safety coverage.
                </p>
              </div>
              <span className="text-xs font-mono text-[#52615B] shrink-0">Clean Code</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col md:flex-row items-start justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-[#059669]">03</span>
                  <h3 className="text-base font-bold text-[#12201B]">Database Schema & Query Performance</h3>
                </div>
                <p className="text-xs text-[#52615B] leading-relaxed">
                  PostgreSQL/MySQL schema design, foreign key constraints, migration integrity, missing composite indexes, N+1 query loops, and connection pool sizing.
                </p>
              </div>
              <span className="text-xs font-mono text-[#059669] shrink-0">High-Impact</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col md:flex-row items-start justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-[#059669]">04</span>
                  <h3 className="text-base font-bold text-[#12201B]">API Design & Third-Party Integrations</h3>
                </div>
                <p className="text-xs text-[#52615B] leading-relaxed">
                  REST/GraphQL endpoint consistency, input validation (Zod), status code correctness, webhook signature verification (Stripe, payment gateways), and timeout handlers.
                </p>
              </div>
              <span className="text-xs font-mono text-[#52615B] shrink-0">Integration Safety</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col md:flex-row items-start justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-[#059669]">05</span>
                  <h3 className="text-base font-bold text-[#12201B]">Application Security & Access Control</h3>
                </div>
                <p className="text-xs text-[#52615B] leading-relaxed mb-2">
                  Authentication token security, session management, Role-Based Access Control (RBAC), tenant data isolation, IDOR risks, and hardcoded secrets.
                </p>
                <div className="text-[11px] text-[#52615B] italic">
                  *Note: A code audit is an internal source code review. We clearly distinguish this from active external penetration testing.
                </div>
              </div>
              <span className="text-xs font-mono text-[#059669] shrink-0">OWASP Top 10</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col md:flex-row items-start justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-[#059669]">06</span>
                  <h3 className="text-base font-bold text-[#12201B]">Performance & Response Latency</h3>
                </div>
                <p className="text-xs text-[#52615B] leading-relaxed">
                  P95/P99 latency bottlenecks, server-side rendering efficiency, edge caching opportunities, background queues (BullMQ/Redis), and bundle size profiling.
                </p>
              </div>
              <span className="text-xs font-mono text-[#52615B] shrink-0">Latency Tuning</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col md:flex-row items-start justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-[#059669]">07</span>
                  <h3 className="text-base font-bold text-[#12201B]">Technical Debt & Fragility Mapping</h3>
                </div>
                <p className="text-xs text-[#52615B] leading-relaxed">
                  Cataloging workarounds, hardcoded business logic, tightly coupled modules, and areas that will become disproportionately expensive to modify later.
                </p>
              </div>
              <span className="text-xs font-mono text-[#52615B] shrink-0">Cost Prevention</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col md:flex-row items-start justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-[#059669]">08</span>
                  <h3 className="text-base font-bold text-[#12201B]">Scalability & Concurrency Readiness</h3>
                </div>
                <p className="text-xs text-[#52615B] leading-relaxed">
                  Reviewing state management, tenant isolation at scale, database connection limits, asynchronous job pipelines, and concurrent lock contention.
                </p>
              </div>
              <span className="text-xs font-mono text-[#52615B] shrink-0">Growth Planning</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col md:flex-row items-start justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-[#059669]">09</span>
                  <h3 className="text-base font-bold text-[#12201B]">Deployment & Infrastructure</h3>
                </div>
                <p className="text-xs text-[#52615B] leading-relaxed">
                  Docker container configurations, Linux VPS server hardening, Nginx/Caddy reverse proxies, automated SSL renewals, and automated backup routines.
                </p>
              </div>
              <span className="text-xs font-mono text-[#52615B] shrink-0">DevOps Health</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col md:flex-row items-start justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-[#059669]">10</span>
                  <h3 className="text-base font-bold text-[#12201B]">Dependencies & Vulnerability CVEs</h3>
                </div>
                <p className="text-xs text-[#52615B] leading-relaxed">
                  Automated package auditing for known security CVEs, unmaintained libraries, redundant dependencies, and upgrade risk paths.
                </p>
              </div>
              <span className="text-xs font-mono text-[#52615B] shrink-0">Package Security</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHAT YOU RECEIVE */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Tangible Deliverables
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              What You Get After the Audit
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              We don&apos;t just hand you an automated scan. You receive a structured, executive and engineering-grade deliverable package:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-3">
                <FileText className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Executive Summary</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                A plain-English strategic overview written for founders, investors, and non-technical stakeholders summarizing overall health.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-3">
                <AlertOctagon className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Risk Classification</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Issues categorized by verified severity (Critical, High, Medium, Low) so you know exactly what requires immediate action.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-3">
                <RefreshCw className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Prioritized Roadmap</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                A step-by-step engineering roadmap separating &quot;Fix Now (Week 1)&quot;, &quot;Fix Next Sprint&quot;, and &quot;Optional Improvements&quot;.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-3">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">60-Min Debrief Call</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                A live walkthrough with our Lead Systems Architect to answer questions from your team or prospective investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WE DON'T AUTOMATICALLY RECOMMEND A REWRITE */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="p-8 md:p-12 rounded-3xl bg-[#ECFDF5] border border-[#059669]/30">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
                Pragmatic Engineering
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight mb-4">
                We Don&apos;t Automatically Recommend a Rewrite
              </h2>
              <p className="text-sm md:text-base text-[#064E3B] leading-relaxed mb-6">
                Many development agencies conduct code reviews simply to tell founders: &quot;This code is terrible, you must throw it away and pay us $50,000 for a total rewrite.&quot;
              </p>
              <p className="text-sm text-[#064E3B] leading-relaxed mb-6">
                At Dazzcode, we take a disciplined, evidence-based approach. A difficult codebase does not automatically mean you need to start from scratch. Our audit categorizes the path forward:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs pt-4 border-t border-[#059669]/20">
              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                <div className="font-bold text-[#059669] mb-1">1. Keep</div>
                <div className="text-[#52615B]">The core foundation is fundamentally sound. Retain the architecture and build new features.</div>
              </div>
              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                <div className="font-bold text-[#059669] mb-1">2. Refactor</div>
                <div className="text-[#52615B]">Architecture is workable but specific queries or helper functions need surgical cleanup.</div>
              </div>
              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                <div className="font-bold text-[#059669] mb-1">3. Modernize</div>
                <div className="text-[#52615B]">Update outdated packages and migrate JavaScript to strict TypeScript types.</div>
              </div>
              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                <div className="font-bold text-[#059669] mb-1">4. Rebuild Components</div>
                <div className="text-[#52615B]">Re-engineer only the specific bottleneck modules (e.g., billing or reporting) while keeping the rest.</div>
              </div>
              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                <div className="font-bold text-[#059669] mb-1">5. Migrate Gradually</div>
                <div className="text-[#52615B]">Move features incrementally over time to avoid interrupting active customer revenue.</div>
              </div>
              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                <div className="font-bold text-[#DC2626] mb-1">6. Rewrite (Last Resort)</div>
                <div className="text-[#52615B]">Only recommended when verified security or structural flaws make refactoring more expensive than a new build.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. AUDIT PROCESS (7 STEPS) */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Step-by-Step Delivery
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              How Our SaaS Code Audit Works
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              A secure, confidential workflow from repository access to final remediation walkthrough.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-[#059669] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                01
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#12201B]">Discovery & Scoping</h3>
                <p className="text-xs text-[#52615B] mt-0.5">
                  We understand your business model, customer complaints, technical history, and key concerns.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-[#059669] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                02
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#12201B]">NDA & Read-Only Access</h3>
                <p className="text-xs text-[#52615B] mt-0.5">
                  We sign a mutual NDA and receive read-only Git repository access and staging environment credentials.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-[#059669] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                03
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#12201B]">Deep Technical Review</h3>
                <p className="text-xs text-[#52615B] mt-0.5">
                  Senior engineers analyze code quality, query execution plans, API security, and tenant isolation rules.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-[#059669] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                04
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#12201B]">Findings & Documentation</h3>
                <p className="text-xs text-[#52615B] mt-0.5">
                  We document issues with exact code snippets, query benchmarks, and severity classifications.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-[#059669] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                05
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#12201B]">Prioritization & Effort Estimation</h3>
                <p className="text-xs text-[#52615B] mt-0.5">
                  We categorize fixes into Urgent, Next Sprint, and Optional, providing estimated engineering hours.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-[#059669] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                06
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#12201B]">Report Delivery</h3>
                <p className="text-xs text-[#52615B] mt-0.5">
                  You receive the Executive Summary and Comprehensive Technical Action Plan.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#ECFDF5] border border-[#059669]/30 flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-[#059669] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                07
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#059669]">60-Minute Review & Strategy Call</h3>
                <p className="text-xs text-[#064E3B] mt-0.5">
                  Live walkthrough with our Lead Architect to address all questions and advise on next steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. AUDIT DEPTH TIERS & CUSTOM SCOPING */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Engagement Tiers
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              SaaS Code Audit Options
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              Fixed-fee, custom-scoped audit packages designed to give you total technical clarity without open-ended hourly billing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#52615B] block mb-1">
                  Tier 1
                </span>
                <h3 className="text-xl font-bold text-[#12201B] mb-2">Quick Technical Review</h3>
                <div className="text-2xl font-black text-[#12201B] mb-1">Custom Scope Quote</div>
                <div className="text-xs text-[#52615B] font-mono mb-4">Turnaround: 2–3 Days</div>
                <ul className="space-y-2.5 text-xs text-[#52615B] mb-6">
                  <li className="flex items-center gap-2">✓ Architecture high-level check</li>
                  <li className="flex items-center gap-2">✓ Major technical debt identification</li>
                  <li className="flex items-center gap-2">✓ Database schema sanity review</li>
                  <li className="flex items-center gap-2">✓ Summary findings report</li>
                </ul>
              </div>
              <Link href="#contact">
                <Button variant="outline" className="w-full text-xs font-bold uppercase border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3]">
                  Request Quick Review
                </Button>
              </Link>
            </div>

            <div className="p-7 rounded-2xl bg-[#FFFFFF] border-2 border-[#059669] shadow-md flex flex-col justify-between relative">
              <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#059669] text-white text-[10px] font-mono font-bold uppercase">
                Most Comprehensive
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#059669] block mb-1">
                  Tier 2
                </span>
                <h3 className="text-xl font-bold text-[#12201B] mb-2">Full SaaS Code Audit</h3>
                <div className="text-2xl font-black text-[#12201B] mb-1">Custom Scope Quote</div>
                <div className="text-xs text-[#52615B] font-mono mb-4">Turnaround: 4–6 Days</div>
                <ul className="space-y-2.5 text-xs text-[#52615B] mb-6">
                  <li className="flex items-center gap-2">✓ Complete 10-dimension code inspection</li>
                  <li className="flex items-center gap-2">✓ EXPLAIN ANALYZE slow query profiling</li>
                  <li className="flex items-center gap-2">✓ OWASP security & RBAC verification</li>
                  <li className="flex items-center gap-2">✓ Prioritized step-by-step action plan</li>
                  <li className="flex items-center gap-2">✓ 60-min Architect debrief call</li>
                </ul>
              </div>
              <Link href="#contact">
                <Button className="w-full text-xs font-bold uppercase bg-[#059669] text-white hover:bg-[#047857]">
                  Request Full Audit
                </Button>
              </Link>
            </div>

            <div className="p-7 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#52615B] block mb-1">
                  Tier 3
                </span>
                <h3 className="text-xl font-bold text-[#12201B] mb-2">Technical Due Diligence</h3>
                <div className="text-2xl font-black text-[#12201B] mb-1">Custom Due Diligence</div>
                <div className="text-xs text-[#52615B] font-mono mb-4">Turnaround: 5–7 Days</div>
                <ul className="space-y-2.5 text-xs text-[#52615B] mb-6">
                  <li className="flex items-center gap-2">✓ Institutional investor report format</li>
                  <li className="flex items-center gap-2">✓ IP, open-source license & risk analysis</li>
                  <li className="flex items-center gap-2">✓ Scalability & infrastructure cost audit</li>
                  <li className="flex items-center gap-2">✓ Technical leadership debrief</li>
                </ul>
              </div>
              <Link href="#contact">
                <Button variant="outline" className="w-full text-xs font-bold uppercase border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3]">
                  Discuss Due Diligence
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11. DEVELOPER HANDOVER & PREPARING FOR FUNDING */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#059669] block mb-2">
                Team Transition
              </span>
              <h3 className="text-2xl font-black text-[#12201B] tracking-tight mb-3">
                Taking Over From Another Developer?
              </h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                Before your new developer or agency begins writing code, an independent audit ensures they understand the actual state of the system, hidden gotchas, undocumented database models, and critical vulnerabilities.
              </p>
              <ul className="space-y-2 text-xs text-[#52615B] mb-6">
                <li>• Know what works, what is broken, and what is risky</li>
                <li>• Establish an objective baseline for developer onboarding</li>
                <li>• Prevent new developers from blaming previous teams for new delays</li>
              </ul>
              <Link href="#contact" className="text-xs font-bold text-[#059669] hover:underline flex items-center gap-1">
                Prepare Codebase for Handover <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#059669] block mb-2">
                Investment Readiness
              </span>
              <h3 className="text-2xl font-black text-[#12201B] tracking-tight mb-3">
                Preparing for Seed / Series A Due Diligence
              </h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                Investors and venture funds conduct technical due diligence before funding. Uncovering security vulnerabilities or fragile infrastructure during an investor review can stall or kill your funding round.
              </p>
              <ul className="space-y-2 text-xs text-[#52615B] mb-6">
                <li>• Fix security risks and data isolation flaws in advance</li>
                <li>• Demonstrate mature technical architecture documentation</li>
                <li>• Provide investors with an objective, senior-verified audit report</li>
              </ul>
              <Link href="#contact" className="text-xs font-bold text-[#059669] hover:underline flex items-center gap-1">
                Prepare for Technical Due Diligence <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 12. NEED MORE THAN AN AUDIT? (DEVELOPMENT PATHWAY) */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="p-8 md:p-10 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#059669] block mb-2">
                Execution Support
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight mb-2">
                Need Help Fixing the Issues We Identify?
              </h2>
              <p className="text-sm text-[#52615B] leading-relaxed">
                If your existing team doesn&apos;t have the capacity to execute the audit roadmap, Dazzcode can partner with you to refactor problematic queries, patch security risks, modernize your architecture, and optimize deployment.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link href="/services/custom-saas-development">
                <Button className="h-11 text-xs font-bold uppercase tracking-wider bg-[#059669] text-white hover:bg-[#047857]">
                  Custom SaaS Builds
                </Button>
              </Link>
              <Link href="/services/saas-scaling">
                <Button variant="outline" className="h-11 text-xs font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF]">
                  SaaS Scaling
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 13. CASE STUDIES / REAL FINDINGS */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Real Findings
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Technical Problems Are Easier to Fix When You Can See Them
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              Real examples of architectural issues uncovered and resolved during code audits:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#059669] block mb-2">
                Case Study · Database & Latency
              </span>
              <h3 className="text-xl font-black text-[#12201B] tracking-tight mb-3">
                DazzPOS: Database Query & Sync Audit
              </h3>
              <div className="space-y-2 text-xs text-[#52615B] leading-relaxed mb-6">
                <p><strong>Problem:</strong> Checkout latency was climbing past 4 seconds on busy retail terminals, with occasional database lock timeouts during peak hours.</p>
                <p><strong>Finding:</strong> Audit revealed missing composite indexes on transaction ledger tables and unbatched synchronous webhook calls.</p>
                <p><strong>Action:</strong> Added 3 targeted B-Tree indexes, implemented Redis connection pooling, and moved webhook syncs to BullMQ background workers.</p>
                <p><strong>Result:</strong> Query execution dropped from 4,800ms to 38ms (-99%), eliminating deadlocks across 50+ retail branches.</p>
              </div>
              <Link href="/case-studies/dazzpos">
                <Button variant="outline" className="w-full text-xs font-bold uppercase border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#059669] hover:text-white">
                  Read Case Study
                </Button>
              </Link>
            </div>

            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#059669] block mb-2">
                Case Study · Security & Webhooks
              </span>
              <h3 className="text-xl font-black text-[#12201B] tracking-tight mb-3">
                AI Lead Automation: Webhook Hardening
              </h3>
              <div className="space-y-2 text-xs text-[#52615B] leading-relaxed mb-6">
                <p><strong>Problem:</strong> Inbound lead automation experienced intermittent duplicate entries and dropped WhatsApp inquiry webhooks.</p>
                <p><strong>Finding:</strong> Webhook handler lacked idempotency keys and was blocking the main HTTP thread during LLM generation.</p>
                <p><strong>Action:</strong> Separated webhook receipt from LLM processing using async Redis queues with automatic idempotency deduplication.</p>
                <p><strong>Result:</strong> Zero dropped lead messages, with average WhatsApp qualification response latency reduced to under 45 seconds.</p>
              </div>
              <Link href="/case-studies/ai-lead-automation">
                <Button variant="outline" className="w-full text-xs font-bold uppercase border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#059669] hover:text-white">
                  Read Case Study
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 14. TECH STACK WE AUDIT & WHAT WE DO NOT DO */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#059669] block mb-2">
                Tech Stack
              </span>
              <h3 className="text-2xl font-black text-[#12201B] tracking-tight mb-3">
                We Review Modern SaaS Stacks
              </h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                We focus on technology ecosystems where our team has deep, senior-level architectural and production experience:
              </p>
              <div className="grid grid-cols-2 gap-2.5 text-xs font-mono text-[#12201B]">
                <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6]">Next.js & React</div>
                <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6]">TypeScript & Node.js</div>
                <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6]">PostgreSQL & MySQL</div>
                <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6]">Go & Rust</div>
                <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6]">Redis & BullMQ</div>
                <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6]">Docker & Linux VPS</div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#52615B] block mb-2">
                Clear Scope Boundaries
              </span>
              <h3 className="text-2xl font-black text-[#12201B] tracking-tight mb-3">
                What a Code Audit Is NOT
              </h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                To ensure total transparency, we clearly define what a codebase audit does not include:
              </p>
              <ul className="space-y-2.5 text-xs text-[#52615B]">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#DC2626]">•</span>
                  <span><strong>Not external penetration testing:</strong> We do not perform black-box network DDoS attacks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#DC2626]">•</span>
                  <span><strong>Not a legal compliance review:</strong> We assess technical security, not legal GDPR/HIPAA contracts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#DC2626]">•</span>
                  <span><strong>Not an automated linter dump:</strong> We provide real human engineer analysis, not 500 pages of automated noise.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 15. COMPREHENSIVE FAQ SECTION */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Clear Answers
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              Everything you need to know about our SaaS code audit and architecture review process.
            </p>
          </div>

          <div className="space-y-4">
            {auditFaqs.map((faq, idx) => (
              <details
                key={idx}
                className="group p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] open:border-[#059669]/40 open:shadow-sm transition-all"
              >
                <summary className="font-bold text-[#12201B] cursor-pointer list-none flex items-center justify-between gap-4 text-sm md:text-base">
                  <span>{faq.q}</span>
                  <span className="w-6 h-6 rounded-full bg-[#E2EAE6] text-[#52615B] flex items-center justify-center text-xs group-open:rotate-180 group-open:bg-[#059669] group-open:text-white transition-all shrink-0">
                    ↓
                  </span>
                </summary>
                <div className="text-xs md:text-sm text-[#52615B] leading-relaxed mt-4 pt-4 border-t border-[#E2EAE6]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 17. FINAL LIGHT-THEME CTA */}
      <section className="py-20 bg-[#ECFDF5] border-t border-[#059669]/20 text-center">
        <div className="container px-4 md:px-6 mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#059669]/30 text-[#059669] text-xs font-mono font-bold uppercase mb-6">
            <span>BEFORE YOU SPEND MORE ON DEVELOPMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#12201B] mb-4">
            Understand the Code You Already Have
          </h2>
          <p className="text-sm md:text-base text-[#064E3B] mb-8 max-w-xl mx-auto leading-relaxed">
            Get a practical technical assessment of your SaaS and a prioritized plan for what to fix, improve or leave alone.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#contact">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#047857] rounded-xl transition-all shadow-md cursor-pointer"
              >
                Request a SaaS Code Audit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="https://wa.me/254740938029" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-7 text-sm font-bold uppercase tracking-wider border-[#059669]/30 bg-[#FFFFFF] hover:bg-[#F8FAF9] rounded-xl text-[#12201B] cursor-pointer"
              >
                Chat on WhatsApp (+254 740 938 029)
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
