import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Rocket,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Database,
  Layers,
  Zap,
  Clock,
  Terminal,
  Server,
  Activity,
  CreditCard,
  Cpu,
  Globe2,
  Users,
  Code2,
  Check,
  ChevronDown,
  Sparkles,
  Lock,
  MessageSquare,
  HelpCircle,
  Smartphone,
  BarChart3,
  AlertTriangle,
  Lightbulb,
  FileCode2,
  Target,
  RefreshCw,
  FolderTree,
  Sliders
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SaasMvpHeroPreview } from "@/components/sections/SaasMvpHeroPreview";
import WooCommerceLeadForm from "@/components/sections/WooCommerceLeadForm";

export const metadata: Metadata = {
  title: "SaaS MVP Development Company | Build & Launch Your MVP",
  description:
    "Create a focused SaaS MVP with Dazzcode. We help founders plan, build, deploy and launch scalable SaaS products without wasting time on unnecessary features.",
  keywords: [
    "SaaS MVP development",
    "SaaS MVP development company",
    "SaaS MVP development services",
    "SaaS MVP development agency",
    "SaaS MVP development company in Kenya",
    "SaaS MVP development Kenya",
    "SaaS MVP developers",
    "SaaS MVP development cost",
    "SaaS MVP development process",
    "SaaS product development",
    "SaaS product development company",
    "SaaS application development",
    "SaaS startup development",
    "custom SaaS MVP development",
    "MVP software development",
    "SaaS prototype development",
    "SaaS product launch",
    "SaaS development company",
    "build a SaaS MVP",
    "SaaS MVP development for startups"
  ],
  alternates: {
    canonical: "https://dazzcode.com/services/saas-mvp-development",
    languages: {
      "en": "https://dazzcode.com/services/saas-mvp-development",
      "en-KE": "https://dazzcode.com/ke/mvp-development"
    }
  },
  openGraph: {
    title: "SaaS MVP Development Company | Dazzcode",
    description:
      "Turn your validated SaaS idea into a high-performance, launchable product in 4–8 weeks with modern architecture, multi-tenancy, and automated billing.",
    url: "https://dazzcode.com/services/saas-mvp-development",
    siteName: "Dazzcode",
    images: [
      {
        url: "https://dazzcode.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dazzcode SaaS MVP Development"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS MVP Development Company | Dazzcode",
    description:
      "Turn your validated SaaS idea into a high-performance, launchable product with modern architecture, multi-tenancy, and automated billing."
  }
};

const mvpFaqs = [
  {
    q: "What is SaaS MVP development?",
    a: "SaaS MVP (Minimum Viable Product) development is the process of building the smallest, most focused version of a cloud software product that solves the core problem for target users. It allows founders to validate product-market fit, acquire early paying customers, and gather real-world usage telemetry without spending months building unrequested features."
  },
  {
    q: "How much does it cost to build a SaaS MVP?",
    a: "SaaS MVP development costs depend strictly on the complexity of your core workflow, user roles, database schema, and third-party integrations (such as Stripe or payment billing). Rather than hourly billing, Dazzcode scopes projects into clear, fixed-fee milestone sprints after an initial technical discovery session."
  },
  {
    q: "How long does it take to build a SaaS MVP?",
    a: "A focused, production-grade SaaS MVP typically takes 4 to 8 weeks from initial architecture design to production VPS deployment. Complex MVPs involving multi-party workflows, real-time engines, or specialized AI pipelines may require 8 to 12 weeks."
  },
  {
    q: "What should a SaaS MVP actually include?",
    a: "A good SaaS MVP includes: 1) Frictionless user authentication, 2) The single primary workflow that solves the user's biggest pain point, 3) Multi-tenant database isolation, 4) A clear path to monetization (automated subscription billing / Stripe), and 5) Foundational telemetry and error logging."
  },
  {
    q: "Can Dazzcode build a SaaS MVP in Kenya?",
    a: "Yes. Dazzcode is headquartered in Kenya and engineers SaaS applications for local startups and enterprises across Nairobi and East Africa, incorporating local payment integrations like Safaricom M-Pesa Daraja alongside global payment rails."
  },
  {
    q: "Can you build a SaaS MVP for international markets?",
    a: "Absolutely. We build software for founders and companies in the UK, United States, Europe, and globally. All codebases are engineered with standard TypeScript, Next.js, PostgreSQL, Docker, and Stripe billing."
  },
  {
    q: "Can you integrate global and regional payment gateways?",
    a: "Yes. We configure full Stripe Checkout and Customer Portal integrations supporting recurring tiers, usage metering, and invoice downloads, as well as regional payment gateways where required."
  },
  {
    q: "Can you build an AI SaaS MVP?",
    a: "Yes. When artificial intelligence provides genuine business utility, we integrate OpenAI, Anthropic Claude, LangChain, or custom vector embeddings (pgvector) for document extraction, smart summaries, semantic search, or automated agent workflows."
  },
  {
    q: "Can you build a multi-tenant SaaS?",
    a: "Yes. Multi-tenancy is standard in our SaaS architectures. We implement PostgreSQL Row-Level Security (RLS) or schema separation to ensure every customer organization's data remains strictly isolated and secure."
  },
  {
    q: "Should my SaaS MVP be scalable?",
    a: "Yes, but with practical engineering discipline. We build modular, type-safe architectures capable of growing to thousands of active organizations without requiring a rewrite, while avoiding over-engineered Kubernetes clusters before you have your first 100 users."
  },
  {
    q: "Can you deploy the SaaS MVP to production?",
    a: "Yes. We handle end-to-end production deployment on dedicated Linux VPS servers (Hetzner, DigitalOcean, AWS) with Docker, Nginx reverse proxies, automated SSL certificates, Redis background queues, and automated daily database backups."
  },
  {
    q: "What happens after the MVP is launched?",
    a: "After launch, Dazzcode remains available for ongoing feature iteration, performance optimization, database tuning, codebase audits, and scaling support as your paying user base expands."
  },
  {
    q: "Can you work with an existing Figma design?",
    a: "Yes. If you already have design assets in Figma, we translate them directly into clean, responsive, and accessible Tailwind/CSS components."
  },
  {
    q: "Can you help me decide what features belong in the MVP?",
    a: "Yes. One of our primary roles as your technical partner is helping you ruthlessly separate 'Must Have' core value workflows from 'Nice to Have' distractions that belong in post-launch phases."
  }
];

export default function SaasMvpDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://dazzcode.com/#organization",
        "name": "Dazzcode",
        "url": "https://dazzcode.com",
        "logo": "https://dazzcode.com/opengraph-image",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+254740938029",
          "contactType": "customer service",
          "areaServed": ["KE", "US", "GB", "UG", "TZ", "RW", "Global"],
          "availableLanguage": ["en"]
        }
      },
      {
        "@type": "Service",
        "@id": "https://dazzcode.com/services/saas-mvp-development#service",
        "name": "SaaS MVP Development Services",
        "provider": {
          "@id": "https://dazzcode.com/#organization"
        },
        "description":
          "End-to-end SaaS MVP development for high-conviction founders. We design, engineer, and deploy launch-ready SaaS products in 4 to 8 weeks with multi-tenant PostgreSQL architecture, subscription billing, and zero vendor lock-in.",
        "areaServed": "Global",
        "serviceType": "Software as a Service (SaaS) MVP Engineering",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "Custom Scope",
          "url": "https://dazzcode.com/services/saas-mvp-development"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://dazzcode.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://dazzcode.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "SaaS MVP Development",
            "item": "https://dazzcode.com/services/saas-mvp-development"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": mvpFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="bg-[#F8FAF9] text-[#12201B] min-h-screen font-sans selection:bg-[#059669] selection:text-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FAF9] to-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

        <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#52615B] mb-6">
            <Link href="/" className="hover:text-[#059669] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#059669] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#12201B] font-semibold">SaaS MVP Development</span>
          </nav>

          {/* Main H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-[#12201B] mb-4">
            SaaS MVP Development for High-Conviction Founders
          </h1>

          <p className="text-xl md:text-2xl font-bold text-[#059669] mb-6">
            Turn a strong SaaS idea into a focused, launchable product without wasting months building features nobody needs.
          </p>

          {/* Supporting Copy */}
          <p className="text-lg md:text-xl text-[#52615B] leading-relaxed max-w-3xl mb-8 font-normal">
            You have a problem worth solving. We turn it into a focused SaaS product that real users can actually use, test and pay for.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
            <Link href="#contact">
              <Button
                size="lg"
                className="w-full sm:w-auto h-13 px-8 text-sm font-bold uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] shadow-lg shadow-[#059669]/20 rounded-xl transition-all cursor-pointer"
              >
                <Rocket className="w-4 h-4 mr-2" />
                Build My SaaS MVP
              </Button>
            </Link>

            <Link href="#process">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-13 px-7 text-sm font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3] rounded-xl text-[#12201B] cursor-pointer"
              >
                See Our MVP Process
              </Button>
            </Link>
          </div>

          <div className="text-xs text-[#52615B] font-mono flex flex-wrap items-center gap-2 mb-12">
            <span className="font-semibold text-[#12201B]">Strategy</span>
            <span>•</span>
            <span className="font-semibold text-[#12201B]">Product Architecture</span>
            <span>•</span>
            <span className="font-semibold text-[#12201B]">Development</span>
            <span>•</span>
            <span className="font-semibold text-[#12201B]">Deployment</span>
          </div>

          {/* Interactive Hero Visual */}
          <SaasMvpHeroPreview />
        </div>
      </section>

      {/* 2. FOUNDER PROBLEM SECTION */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              The MVP Trap
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight">
              A SaaS MVP Is Not Your Entire Product
            </h2>
            <p className="text-base text-[#52615B] mt-4 leading-relaxed">
              Founders frequently fall into one of two dangerous traps when building their first software release:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#EF4444]/10 text-[#EF4444] flex items-center justify-center font-black mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-2">Mistake 1 — Building Too Little</h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                The product is so bare-bones or buggy that it cannot solve the customer&apos;s actual problem. Users bounce immediately because the core value cannot be experienced.
              </p>
              <div className="text-xs font-mono text-[#EF4444] font-semibold">
                Result: False negative signal that &quot;nobody wants this.&quot;
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#EF4444]/10 text-[#EF4444] flex items-center justify-center font-black mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-2">Mistake 2 — Building Too Much</h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                Months are spent engineering dozens of fringe features, complicated dashboards, nested settings, and unnecessary integrations that no paying customer has ever requested.
              </p>
              <div className="text-xs font-mono text-[#EF4444] font-semibold">
                Result: Depleted capital and delayed launch momentum.
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#ECFDF5] border border-[#059669]/20 text-center max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-[#12201B] mb-2">
              The Dazzcode Principle
            </h3>
            <p className="text-sm text-[#52615B] leading-relaxed">
              <strong>Build only what is necessary to prove the product&apos;s core value.</strong> Some SaaS products require complex workflows, integrations, or compliance—we build the smallest architecture that reliably validates the business.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT MAKES A GOOD SAAS MVP */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Core Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight">
              What Should a SaaS MVP Actually Include?
            </h2>
            <p className="text-base text-[#52615B] mt-4 leading-relaxed">
              Every production-grade SaaS MVP we engineer is built around 7 essential pillars:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold text-xs mb-4">1</div>
              <h3 className="text-base font-bold text-[#12201B] mb-1">A Clear Target User</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Specific buyer persona with a high willingness to adopt new software to fix an active headache.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold text-xs mb-4">2</div>
              <h3 className="text-base font-bold text-[#12201B] mb-1">A Specific Problem</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                One painful, measurable operational bottleneck rather than a vague generic tool.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold text-xs mb-4">3</div>
              <h3 className="text-base font-bold text-[#12201B] mb-1">A Core Workflow</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                The primary high-value journey users execute to achieve their desired outcome.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold text-xs mb-4">4</div>
              <h3 className="text-base font-bold text-[#12201B] mb-1">A Usable Interface</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Clean, intuitive UX that requires zero onboarding calls or 30-page manuals to understand.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold text-xs mb-4">5</div>
              <h3 className="text-base font-bold text-[#12201B] mb-1">Solid Technical Foundation</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                PostgreSQL database, session management, RBAC, background queues, and secure API boundaries.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold text-xs mb-4">6</div>
              <h3 className="text-base font-bold text-[#12201B] mb-1">A Path to Monetization</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Automated subscription billing, checkout flows, and tier management designed directly into the product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHO WE BUILD FOR */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Target Founders
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight">
              Who We Build SaaS MVPs For
            </h2>
            <p className="text-base text-[#52615B] mt-4 leading-relaxed">
              We partner with founders and companies at critical inflection points:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Validated Founders</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                You have conducted customer discovery, confirmed demand, and need a reliable technical team to execute the build.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Startup Teams</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                You have strong industry or sales expertise but lack internal full-stack software engineering capacity.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">SMEs Building SaaS</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                You want to productize an internal business workflow or manual spreadsheet into a recurring-revenue B2B SaaS.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-4">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Existing Businesses</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                You already have an active customer base and want to launch a complementary software product.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Technical Founders</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                You understand software engineering but need dedicated senior developers to accelerate development speed.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-4">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Non-Technical Founders</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                You understand the commercial opportunity and need a trusted technical co-founder equivalent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHEN YOU SHOULD NOT BUILD YET */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="p-8 md:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-2 block">
                Honest Advisory
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight">
                You May Not Need Development Yet
              </h2>
              <p className="text-xs text-[#52615B] mt-2 leading-relaxed">
                Development should not automatically be your first step. We advise delaying code when:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-xs text-[#52615B] mb-8">
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>The target customer is still broad and undefined</span>
              </div>
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>The problem has not been validated with actual users</span>
              </div>
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>Nobody has shown willingness or intent to pay</span>
              </div>
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>The core product workflow changes every few days</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#12201B] font-medium">
                Not sure whether your SaaS idea is ready for development? Talk to Dazzcode first.
              </div>
              <Link href="#contact" className="shrink-0">
                <Button size="sm" className="bg-[#059669] text-white hover:bg-[#10B981] font-bold text-xs">
                  Schedule Discovery Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHAT WE CAN BUILD INTO YOUR SAAS MVP */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Modular Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight">
              What We Can Build Into Your SaaS MVP
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              Features are selected based on what your product actually needs to validate its value proposition:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-xs">
            {[
              "User Authentication & OAuth",
              "Multi-Tenant Organizations",
              "Role-Based Access (RBAC)",
              "Customer Backoffice Dashboards",
              "Stripe Subscription Billing",
              "Automated Payment Webhooks",
              "PostgreSQL Row-Level Security",
              "Redis Background Job Queues",
              "Email & Magic Link Auth",
              "Transactional Event Webhooks",
              "Zod Request Validation",
              "REST & Webhook APIs",
              "Audit Logging & Security Trails",
              "S3 / Cloudflare R2 Uploads",
              "Real-time Event Webhooks",
              "AI Extraction & Summaries",
              "Search & Filter Engines",
              "CSV Data Export & Ingestion",
              "Automated Daily DB Backups",
              "Docker Production VPS Deploy"
            ].map((feat, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                <span className="text-[#12201B] font-medium">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SAAS ARCHITECTURE & SCALABILITY */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
                Engineering Discipline
              </span>
              <h2 className="text-3xl font-black text-[#12201B] tracking-tight mb-4">
                Build the MVP Without Painting Yourself Into a Corner
              </h2>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                <strong>MVP ≠ throwaway software.</strong> We write clean, type-safe code that can evolve as your product acquires users, while avoiding premature over-engineering.
              </p>
              <ul className="space-y-3 text-xs text-[#52615B]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span><strong>Modular Architecture:</strong> Clear separation between UI components, business services, and database queries.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span><strong>Relational Integrity:</strong> Strict PostgreSQL foreign keys, composite indexes, and data validation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span><strong>Sensible Scaling:</strong> Built to easily handle 10,000 active organizations without needing a costly architecture rewrite.</span>
                </li>
              </ul>
            </div>

            <div className="p-7 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <span className="text-xs font-mono font-bold uppercase text-[#059669] block mb-2">Architecture Checklist</span>
              <div className="space-y-2.5 font-mono text-xs text-[#52615B]">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">
                  <span>Type Safety</span>
                  <span className="text-[#059669] font-bold">100% Strict TypeScript</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">
                  <span>Data Isolation</span>
                  <span className="text-[#059669] font-bold">PostgreSQL RLS</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">
                  <span>Long Operations</span>
                  <span className="text-[#059669] font-bold">Async Redis Queue</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">
                  <span>Production Host</span>
                  <span className="text-[#059669] font-bold">Dockerized Linux VPS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. MVP DEVELOPMENT PROCESS */}
      <section id="process" className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Execution Roadmap
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight">
              From SaaS Idea to Launch
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              A structured 7-step engineering process designed for speed, clarity, and zero scope bloat:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                step: "01",
                title: "Understand the Product",
                desc: "Clarify target user persona, painful problem, commercial model, and the single core workflow."
              },
              {
                step: "02",
                title: "Define the MVP Scope",
                desc: "Ruthlessly separate 'Must Have' launch features from 'Later' distractions to protect timeline and budget."
              },
              {
                step: "03",
                title: "Technical Architecture",
                desc: "Design PostgreSQL database schema, multi-tenant boundaries, API contracts, and auth models."
              },
              {
                step: "04",
                title: "Product Design & UX",
                desc: "Create clean, responsive UI wireframes and user journeys focused on speed and simplicity."
              },
              {
                step: "05",
                title: "Iterative Development",
                desc: "Build the application in 2-week milestone sprints with continuous staging environment previews."
              },
              {
                step: "06",
                title: "Hardened Testing",
                desc: "Verify webhook replay protection, RBAC permission boundaries, slow query plans, and error states."
              },
              {
                step: "07",
                title: "Deploy & Launch",
                desc: "Production deployment on dedicated Linux VPS with SSL, telemetry, daily backups, and live user onboarding."
              }
            ].map((p, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex gap-4">
                <span className="text-xl font-black font-mono text-[#059669] shrink-0">{p.step}</span>
                <div>
                  <h3 className="text-base font-bold text-[#12201B] mb-1">{p.title}</h3>
                  <p className="text-xs text-[#52615B] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TIMELINE & MILESTONE SCOPING */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Predictable Delivery
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight">
              How Much Does It Cost & How Long Does It Take?
            </h2>
            <p className="text-base text-[#52615B] mt-4 leading-relaxed">
              We scope SaaS MVPs by milestone sprints rather than open-ended hourly billing:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#52615B] block mb-1">
                  Tier 1
                </span>
                <h3 className="text-xl font-bold text-[#12201B] mb-2">Focused SaaS MVP</h3>
                <div className="text-2xl font-black text-[#12201B] mb-1">Custom Scope Quote</div>
                <div className="text-xs text-[#52615B] font-mono mb-4">Timeline: 4–6 Weeks</div>
                <ul className="space-y-2 text-xs text-[#52615B] mb-6">
                  <li className="flex items-center gap-2">✓ Core single-purpose workflow</li>
                  <li className="flex items-center gap-2">✓ User auth & onboarding</li>
                  <li className="flex items-center gap-2">✓ PostgreSQL database schema</li>
                  <li className="flex items-center gap-2">✓ Production VPS deployment</li>
                </ul>
              </div>
              <Link href="#contact">
                <Button variant="outline" className="w-full text-xs font-bold uppercase border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3]">
                  Request Scope
                </Button>
              </Link>
            </div>

            <div className="p-7 rounded-2xl bg-[#FFFFFF] border-2 border-[#059669] shadow-md flex flex-col justify-between relative">
              <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#059669] text-white text-[10px] font-mono font-bold uppercase">
                Most Popular
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#059669] block mb-1">
                  Tier 2
                </span>
                <h3 className="text-xl font-bold text-[#12201B] mb-2">Growth-Ready SaaS MVP</h3>
                <div className="text-2xl font-black text-[#12201B] mb-1">Custom Scope Quote</div>
                <div className="text-xs text-[#52615B] font-mono mb-4">Timeline: 6–8 Weeks</div>
                <ul className="space-y-2 text-xs text-[#52615B] mb-6">
                  <li className="flex items-center gap-2">✓ Multi-tenant data isolation (RLS)</li>
                  <li className="flex items-center gap-2">✓ Stripe / Subscription billing</li>
                  <li className="flex items-center gap-2">✓ Role-based permissions (RBAC)</li>
                  <li className="flex items-center gap-2">✓ Redis background queue workers</li>
                  <li className="flex items-center gap-2">✓ Admin management backoffice</li>
                </ul>
              </div>
              <Link href="#contact">
                <Button className="w-full text-xs font-bold uppercase bg-[#059669] text-white hover:bg-[#047857]">
                  Request Growth Scope
                </Button>
              </Link>
            </div>

            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#52615B] block mb-1">
                  Tier 3
                </span>
                <h3 className="text-xl font-bold text-[#12201B] mb-2">Complex / AI SaaS MVP</h3>
                <div className="text-2xl font-black text-[#12201B] mb-1">Custom Scope Quote</div>
                <div className="text-xs text-[#52615B] font-mono mb-4">Timeline: 8–12 Weeks</div>
                <ul className="space-y-2 text-xs text-[#52615B] mb-6">
                  <li className="flex items-center gap-2">✓ AI pipeline / vector search</li>
                  <li className="flex items-center gap-2">✓ Third-party ERP / API integrations</li>
                  <li className="flex items-center gap-2">✓ Advanced multi-tier permissions</li>
                  <li className="flex items-center gap-2">✓ Real-time event streaming</li>
                </ul>
              </div>
              <Link href="#contact">
                <Button variant="outline" className="w-full text-xs font-bold uppercase border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3]">
                  Discuss Complex MVP
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. KENYA + INTERNATIONAL POSITIONING */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
                Global Standards, Local Depth
              </span>
              <h2 className="text-3xl font-black text-[#12201B] tracking-tight mb-4">
                SaaS MVP Development in Kenya and Beyond
              </h2>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                Dazzcode is a Kenya-based software engineering consultancy working with founders and businesses building SaaS products for Kenya, East Africa, the UK, the US, and international markets.
              </p>
              <div className="space-y-2 text-xs text-[#52615B]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Stripe recurring subscription billing for global customers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Regional payment workflows & integrations where applicable</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Mobile-first responsive design tailored to diverse bandwidth conditions</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <h3 className="text-lg font-bold text-[#12201B] mb-3">Kenya Regional Focus</h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                Looking specifically for Kenyan startup MVP development? Explore our dedicated <Link href="/ke/mvp-development" className="text-[#059669] font-bold underline">Startup MVP Development in Kenya</Link> hub.
              </p>
              <Link href="#contact" className="text-xs font-bold text-[#059669] flex items-center gap-1 hover:underline">
                Discuss Your SaaS Market Requirements <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CASE STUDIES */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Proven Delivery
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight">
              SaaS Products We&apos;ve Helped Build
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <span className="text-xs font-mono font-bold text-[#059669] uppercase tracking-wider block mb-2">
                Retail SaaS MVP
              </span>
              <h3 className="text-xl font-bold text-[#12201B] mb-2">DazzPOS Retail SaaS</h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                Engineered a high-concurrency cloud POS and inventory SaaS MVP with offline synchronization, automated payment integration, and multi-branch accounting.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-[#52615B] mb-4">
                <span className="px-2 py-0.5 rounded bg-[#F8FAF9] border border-[#E2EAE6]">Next.js</span>
                <span className="px-2 py-0.5 rounded bg-[#F8FAF9] border border-[#E2EAE6]">PostgreSQL RLS</span>
                <span className="px-2 py-0.5 rounded bg-[#F8FAF9] border border-[#E2EAE6]">Payment Webhooks</span>
              </div>
              <Link href="/case-studies/dazzpos" className="text-xs font-bold text-[#059669] hover:underline flex items-center gap-1">
                Read Full Case Study <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <span className="text-xs font-mono font-bold text-[#059669] uppercase tracking-wider block mb-2">
                B2B AI Automation
              </span>
              <h3 className="text-xl font-bold text-[#12201B] mb-2">AI Lead Qualification Engine</h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                Built an automated inbound lead qualification SaaS capturing WhatsApp and web inquiries, extracting intent via LLMs, and routing deals to CRM pipelines.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-[#52615B] mb-4">
                <span className="px-2 py-0.5 rounded bg-[#F8FAF9] border border-[#E2EAE6]">Node.js</span>
                <span className="px-2 py-0.5 rounded bg-[#F8FAF9] border border-[#E2EAE6]">WhatsApp Cloud API</span>
                <span className="px-2 py-0.5 rounded bg-[#F8FAF9] border border-[#E2EAE6]">OpenAI</span>
              </div>
              <Link href="/case-studies/ai-lead-automation" className="text-xs font-bold text-[#059669] hover:underline flex items-center gap-1">
                Read Full Case Study <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FROM MVP TO FULL SAAS */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Long-Term Partnership
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight">
              Your MVP Is the Beginning, Not the Finish Line
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              As your product acquires paying users, Dazzcode supports your scaling journey across all technical domains:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <Link href="/services/custom-saas-development" className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] hover:border-[#059669] transition-all group">
              <Code2 className="w-5 h-5 text-[#059669] mb-2" />
              <div className="font-bold text-[#12201B] group-hover:text-[#059669] mb-1">Custom SaaS Development</div>
              <p className="text-[#52615B] text-[11px]">Feature expansion and enterprise tooling.</p>
            </Link>

            <Link href="/services/saas-code-audit" className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] hover:border-[#059669] transition-all group">
              <ShieldCheck className="w-5 h-5 text-[#059669] mb-2" />
              <div className="font-bold text-[#12201B] group-hover:text-[#059669] mb-1">SaaS Code Audit</div>
              <p className="text-[#52615B] text-[11px]">Independent technical debt and query profiling.</p>
            </Link>

            <Link href="/services/saas-scaling" className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] hover:border-[#059669] transition-all group">
              <Activity className="w-5 h-5 text-[#059669] mb-2" />
              <div className="font-bold text-[#12201B] group-hover:text-[#059669] mb-1">SaaS Scaling & Speed</div>
              <p className="text-[#52615B] text-[11px]">PostgreSQL indexing, caching, and p95 latency.</p>
            </Link>

            <Link href="/services/vps-deployment" className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] hover:border-[#059669] transition-all group">
              <Server className="w-5 h-5 text-[#059669] mb-2" />
              <div className="font-bold text-[#12201B] group-hover:text-[#059669] mb-1">VPS Server Deployment</div>
              <p className="text-[#52615B] text-[11px]">Docker, Nginx reverse proxy, and zero-downtime CI/CD.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* 13. FAQ SECTION */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Clear Answers
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight">
              Frequently Asked Questions About SaaS MVP Development
            </h2>
          </div>

          <div className="space-y-4">
            {mvpFaqs.map((faq, i) => (
              <details
                key={i}
                className="group p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] open:border-[#059669]/40 transition-all"
              >
                <summary className="flex items-center justify-between cursor-pointer font-bold text-[#12201B] text-base list-none">
                  <span>{faq.q}</span>
                  <ChevronDown className="w-4 h-4 text-[#52615B] group-open:rotate-180 transition-transform" />
                </summary>
                <p className="text-xs md:text-sm text-[#52615B] mt-4 leading-relaxed border-t border-[#E2EAE6] pt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 14. FINAL CTA & CONTACT FORM */}
      <section id="contact" className="py-20 bg-[#FFFFFF]">
        <div className="container px-2 md:px-6 mx-auto max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Start Your MVP
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight">
              Have a SaaS Idea Worth Building?
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              Tell us what you&apos;re building, who it&apos;s for, and what problem it solves. We&apos;ll help you determine what the MVP actually needs—and what can wait.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <WooCommerceLeadForm />
          </div>
        </div>
      </section>
    </div>
  );
}
