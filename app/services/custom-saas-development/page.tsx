import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/seo/JsonLd";
import CustomSaasHeroPreview from "@/components/sections/CustomSaasHeroPreview";
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
  Briefcase,
  Building2,
  Users,
  Cpu,

} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom SaaS Development Company | Dazzcode",
  description:
    "Dazzcode is a Custom SaaS Development Company We design, build, deploy, audit and scale SaaS products from MVP to production.",
  keywords: [
    "custom SaaS development company",
    "custom SaaS development",
    "custom SaaS development services",
    "custom SaaS development agency",
    "custom SaaS software development",
    "custom SaaS application development",
    "SaaS development company",
    "SaaS development services",
    "SaaS development agency",
    "SaaS application development",
    "SaaS product development",
    "SaaS product development company",
    "SaaS software development",
    "SaaS software development company",
    "SaaS application development company",
    "custom SaaS software development company",
    "SaaS engineering company",
    "SaaS engineering services",
    "SaaS technology company",
    "SaaS development partner",
    "multi-tenant SaaS architecture",
    "SaaS subscription billing",
    "SaaS role based access control",
    "SaaS code audit",
    "SaaS performance optimization",
    "SaaS VPS deployment",
    "SaaS development Kenya",
    "custom SaaS development Kenya",
    "SaaS development company Kenya",
    "SaaS developers Nairobi",
    "SaaS development company UK",
    "SaaS development company US"
  ],
  alternates: {
    canonical: "https://dazzcode.com/services/custom-saas-development",
    languages: {
      "en": "https://dazzcode.com/services/custom-saas-development",
      "en-KE": "https://dazzcode.com/ke/saas-development-company",
      "en-GB": "https://dazzcode.com/uk/saas-development",
      "en-US": "https://dazzcode.com/us/saas-development",
      "x-default": "https://dazzcode.com/services/custom-saas-development",
    },
  },
  openGraph: {
    title: "Custom SaaS Development Company | Build & Scale SaaS Products | Dazzcode",
    description:
      "Dazzcode designs, builds, deploys, audits and scales custom SaaS platforms for startups and growing companies worldwide. Build → Audit → Fix → Deploy → Scale.",
    url: "https://dazzcode.com/services/custom-saas-development",
    siteName: "Dazzcode",
    images: [
      {
        url: "/images/hero-saas-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "Custom SaaS Development Company - Dazzcode",
      },
    ],
  },
};

const saasFaqs = [
  {
    q: "What is custom SaaS development?",
    a: "Custom SaaS (Software as a Service) development is the process of engineering a proprietary cloud application delivered to users over the web on a subscription or tiered basis. Unlike generic off-the-shelf software, custom SaaS is built specifically around your unique business workflows, pricing models, user permissions, and proprietary data structures."
  },
  {
    q: "What is the difference between custom SaaS and regular software development?",
    a: "A standard website or single-user software only serves one visitor or one local installation. A custom SaaS application is architected for multi-tenancy, where multiple distinct organizations share the platform while their data, users, and billing remain strictly isolated. SaaS also requires built-in subscription billing, role-based permissions (RBAC), self-service onboarding, usage metering, and automated background jobs."
  },
  {
    q: "How much does custom SaaS development cost?",
    a: "Custom SaaS development pricing depends on the product's scope, number of user roles, database complexity, subscription billing models (e.g., flat rate vs. usage-based), third-party API integrations, and infrastructure requirements. Because requirements vary substantially from foundational MVPs to multi-branch enterprise platforms, Dazzcode provides transparent, fixed-milestone estimates based on an initial scoping sprint."
  },
  {
    q: "How long does it take to build a SaaS product?",
    a: "A focused SaaS MVP typically takes 4 to 8 weeks to design, develop, test, and deploy to production. Larger enterprise platforms with complex multi-role workflows and extensive third-party integrations usually take 2 to 4 months. We build in iterative bi-weekly sprints so you can test working software every single week."
  },
  {
    q: "Can you build a SaaS from just an idea or specification?",
    a: "Yes. We regularly partner with non-technical founders, domain experts, and business leaders to turn high-level concepts into production software. We assist with product scoping, UX wireframing, technical architecture planning, database modeling, and full-stack development."
  },
  {
    q: "Can you build a multi-tenant SaaS application?",
    a: "Yes. Multi-tenancy is at the core of our engineering practice. We design multi-tenant architectures using PostgreSQL row-level security (RLS) or schema-isolated models, ensuring that organization data, user memberships, and audit trails remain completely separated and secure."
  },
  {
    q: "Can you integrate Stripe and international payment gateways?",
    a: "Yes. We build robust payment integrations with Stripe (Checkout, Elements, Billing, Customer Portal, Webhooks) and LemonSqueezy for global subscription management, usage-based metering, automatic tax calculation, and failed payment dunning workflows."
  },
  {
    q: "Can you integrate Safaricom M-Pesa for Kenyan and East African billing?",
    a: "Yes. For products operating in Kenya and East Africa, we integrate Safaricom Daraja API 2.0 for automated Lipa na M-Pesa STK Push prompts, instant callback webhook reconciliation, transaction logs, and local invoice settlement."
  },
  {
    q: "Can you work with an existing SaaS product?",
    a: "Yes. We don't just build from greenfield. If you have an existing SaaS application experiencing bugs, slow query performance, security vulnerabilities, or technical debt, we can step in to audit the codebase, refactor problematic modules, add new features, and modernize your architecture."
  },
  {
    q: "What does a SaaS code audit include?",
    a: "A SaaS code audit provides a comprehensive health assessment of your application. We inspect backend API performance, database query efficiency, security vulnerabilities (OWASP Top 10), authentication flow risks, dependency hygiene, and frontend bundle size. You receive a prioritized remediation roadmap ranking issues by business impact."
  },
  {
    q: "Can you deploy a SaaS application on a Linux VPS or cloud server?",
    a: "Yes. We manage production deployment from day one. We containerize applications using Docker, configure Nginx/Caddy reverse proxies, provision automated SSL certificates, configure Linux VPS servers (such as Hetzner, DigitalOcean, or AWS), and set up daily automated database backups."
  },
  {
    q: "Can you help scale an existing SaaS that is getting slow?",
    a: "Yes. We optimize database indexes, implement Redis in-memory caching for tenant state, offload heavy tasks to BullMQ background workers, tune connection pools (PgBouncer), and optimize frontend bundle delivery to achieve sub-50ms response times under load."
  },
  {
    q: "Who owns the code and intellectual property?",
    a: "You retain 100% complete ownership of all source code, database schemas, digital assets, and server credentials. We hand over Git repositories upon milestone completion with full documentation and zero vendor lock-in."
  },
  {
    q: "Do you work with international clients outside Kenya?",
    a: "Yes. While Dazzcode is headquartered in Nairobi, Kenya, we work seamlessly with startup founders, product companies, and technical teams across the UK, US, Europe, East Africa, and worldwide via structured asynchronous workflows, GitHub, and scheduled video check-ins."
  },
  {
    q: "Do you build AI-powered features into SaaS products?",
    a: "Yes. We integrate Large Language Models (OpenAI, Anthropic), vector embeddings (pgvector), automated document parsing, intelligent semantic search, and AI workflow auto-responders into custom SaaS products."
  },
  {
    q: "What technologies do you use for custom SaaS development?",
    a: "Our core production stack includes Next.js (App Router), TypeScript, React, Node.js, Go, PostgreSQL, Redis, Docker, Tailwind CSS, and Linux VPS infrastructure. We choose technologies based on reliability, performance, and long-term maintainability."
  },
  {
    q: "Do you provide post-launch maintenance and support?",
    a: "Yes. Software requires ongoing care. Dazzcode offers continuous post-launch support, security patch management, uptime monitoring, performance tuning, and Phase 2 feature sprint development as your user base expands."
  },
  {
    q: "Can we start with a lean SaaS MVP first?",
    a: "Yes. In fact, we often recommend starting with a focused SaaS MVP (4 to 8 weeks) to validate customer demand and onboarding funnels with real paying users before investing in a broader multi-module platform."
  }
];

export default function CustomSaasDevelopmentPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dazzcode.com/services/custom-saas-development#service",
        name: "Custom SaaS Development Company",
        description:
          "Dazzcode provides custom SaaS development for startups and growing businesses. We design, build, deploy, audit and scale SaaS products from MVP to production.",
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
        serviceType: "Custom SaaS Development Company",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dazzcode.com/services/custom-saas-development#breadcrumb",
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
            name: "Custom SaaS Development",
            item: "https://dazzcode.com/services/custom-saas-development",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://dazzcode.com/services/custom-saas-development#faq",
        mainEntity: saasFaqs.map((faq) => ({
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
            <span className="text-[#12201B] font-semibold">Custom SaaS Development</span>
          </nav>

          {/* Main H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-[#12201B] mb-6">
            Custom SaaS Development for Products Built to Grow
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg md:text-xl text-[#52615B] leading-relaxed max-w-3xl mb-4 font-normal">
            We design and build custom SaaS products around your customers, business model and workflows — from the first release to a platform that can grow with your users.
          </p>
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
            <Link href="#contact">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl transition-all shadow-[0_4px_20px_rgba(5,150,105,0.25)] cursor-pointer"
              >
                Start Your SaaS Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-7 text-sm font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3] rounded-xl text-[#12201B] shadow-xs cursor-pointer"
              >
                See Our Work
              </Button>
            </Link>
            <Link href="/services/code-audit" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#059669] hover:underline px-2 py-2">
              Request a Technical Review →
            </Link>
          </div>

          {/* Micro-copy */}
          <div className="text-xs font-mono text-[#52615B] flex flex-wrap items-center gap-x-3 gap-y-1 pt-2">
            <span className="font-semibold text-[#12201B]">Multi-Tenant Architecture</span>
            <span>•</span>
            <span className="font-semibold text-[#12201B]">Subscription Billing</span>
            <span>•</span>
            <span className="font-semibold text-[#12201B]">Role-Based Access (RBAC)</span>
            <span>•</span>
            <span className="font-semibold text-[#12201B]">Linux VPS Deployment</span>
          </div>

          {/* Interactive Hero Visual Preview */}
          <CustomSaasHeroPreview />
        </div>
      </section>

      {/* 2. IMMEDIATE TRUST & PROOF SECTION */}
      <section className="py-12 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="text-2xl md:text-3xl font-black text-[#059669]">Build → Scale</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">Full Product Lifecycle</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="text-2xl md:text-3xl font-black text-[#059669]">100% IP</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">Full Code & Data Ownership</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="text-2xl md:text-3xl font-black text-[#059669]">Type-Safe</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">Next.js + TypeScript + SQL</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="text-2xl md:text-3xl font-black text-[#059669]">Global Reach</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">Kenya · UK · US · Worldwide</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM SECTION: BUILDING A SAAS IS MORE THAN BUILDING SCREENS */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Architectural Complexity
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Building a SaaS Is More Than Building Screens
            </h2>
            <p className="text-base text-[#52615B] mt-4 leading-relaxed">
              Anyone can put together a nice visual frontend template. But a real, production-ready SaaS requires an entire invisible engineering engine behind the user interface to operate securely, bill customers accurately, and scale under load.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-3">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Organizations & Multi-Tenancy</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Keeping customer data strictly separated with row-level security so Tenant A can never view or modify Tenant B&apos;s records.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-3">
                <Lock className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Role Permissions (RBAC)</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Granular permission controls ensuring team members only access what their specific role (Admin, Manager, Staff, Auditor) permits.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-3">
                <CreditCard className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Billing & Proration Logic</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Handling tier upgrades, seat licensing, failed payment webhooks, invoice receipts, and automated customer grace periods.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-3">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Background Worker Queues</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Offloading heavy report generation, bulk email dispatch, and webhook processing so user interactions remain instantaneous.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-3">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Admin Backoffice Tools</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Giving your internal team full operational control over users, plans, system health, audit logs, and account support.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-3">
                <Server className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Production Deployment & SLA</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Configuring reliable Linux servers, reverse proxies, automated SSL renewals, and daily encrypted backups for 99.9% uptime.
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
              Client Partnerships
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Who We Build For
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              We partner with founders and business leaders across diverse stages of the product lifecycle.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Startup Founders</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                You have a validated idea and need a production-ready software asset—not a throwaway prototype—that can onboard paying users and pass technical due diligence.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Growing SaaS Businesses</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                You already have customers but your application is hitting performance walls, database bottlenecks, or technical debt that slows down new feature releases.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Internal Tool Modernizers</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                You rely on chaotic spreadsheets, manual emails, or legacy databases and want to turn your proven internal process into a modern proprietary SaaS tool.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Existing Product Owners</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Your current product works but needs targeted architectural refactoring, new third-party integrations, modern authentication, or deployment modernization.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Teams Needing Engineering Capacity</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Your in-house engineers are focused on core operations and need an experienced senior software partner to design and ship critical product modules.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">AI-Driven SaaS Builders</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                You want to embed semantic search, automated retrieval-augmented generation (RAG), or intelligent LLM automation into customer-facing workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHAT WE BUILD */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Product Categories
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Custom SaaS Products Built Around Your Business
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              We engineer custom software applications tailored to your exact industry workflows and commercial models.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Customer-Facing SaaS</h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                Subscription portals, self-service client accounts, interactive dashboards, and paid digital platforms designed for high user engagement.
              </p>
              <span className="text-xs font-mono text-[#059669]">Stripe & Subscriptions Integrated</span>
            </div>

            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Multi-Tenant B2B SaaS</h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                Platforms sold to companies where each organization manages their own users, teams, permissions, and payment plans securely.
              </p>
              <span className="text-xs font-mono text-[#059669]">Tenant Data Isolation</span>
            </div>

            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Internal Operations SaaS</h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                Custom business software, staff dispatch consoles, inventory tracking systems, and automated administrative workflow applications.
              </p>
              <Link href="/services/web-application-development" className="text-xs font-bold text-[#059669] hover:underline flex items-center gap-1">
                Web App Development <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-lg font-bold text-[#12201B] mb-2">AI-Powered SaaS</h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                Applications where Large Language Models, semantic search, vector embeddings, and automated document ingestion form the core user experience.
              </p>
              <Link href="/services/ai-automation" className="text-xs font-bold text-[#059669] hover:underline flex items-center gap-1">
                AI Automation Services <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Vertical Industry Platforms</h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                Specialized platforms for logistics, property management, retail POS, healthcare clinics, school administration, or agricultural supply chains.
              </p>
              <Link href="/case-studies/dazzpos" className="text-xs font-bold text-[#059669] hover:underline flex items-center gap-1">
                See DazzPOS Case Study <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-lg font-bold text-[#12201B] mb-2">SaaS MVP Builds</h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                Lean, 4 to 8-week production builds focused strictly on validating your core commercial hypothesis with early adopters.
              </p>
              <Link href="/services/saas-mvp-development" className="text-xs font-bold text-[#059669] hover:underline flex items-center gap-1">
                Explore SaaS MVPs <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CORE SAAS BUILDING BLOCKS */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Production Architecture
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              The Building Blocks of a Production SaaS
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              Every custom platform we engineer incorporates these ten foundational building blocks:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs">
            <div className="p-5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-[#12201B] mb-1">1. Authentication</div>
              <div className="text-[#52615B]">Magic links, OAuth, secure password hashing, and multi-factor authentication.</div>
            </div>
            <div className="p-5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-[#12201B] mb-1">2. Orgs & Teams</div>
              <div className="text-[#52615B]">Multi-tenant organization accounts, team invitations, and workspace switching.</div>
            </div>
            <div className="p-5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-[#12201B] mb-1">3. Role Permissions</div>
              <div className="text-[#52615B]">Granular RBAC controls ensuring strict least-privilege data access.</div>
            </div>
            <div className="p-5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-[#12201B] mb-1">4. Subscriptions & Billing</div>
              <div className="text-[#52615B]">Stripe webhooks, pricing tiers, usage metering, and automated invoice downloads.</div>
            </div>
            <div className="p-5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-[#12201B] mb-1">5. User Dashboards</div>
              <div className="text-[#52615B]">Fast, responsive Next.js client dashboards with live metric counters and data tables.</div>
            </div>
            <div className="p-5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-[#12201B] mb-1">6. APIs & Integrations</div>
              <div className="text-[#52615B]">REST & GraphQL endpoints, third-party webhook receivers, and API key management.</div>
            </div>
            <div className="p-5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-[#12201B] mb-1">7. Notifications</div>
              <div className="text-[#52615B]">Automated transactional emails, SMS alerts, WhatsApp routing, and in-app toasts.</div>
            </div>
            <div className="p-5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-[#12201B] mb-1">8. Admin Backoffice</div>
              <div className="text-[#52615B]">Tenant impersonation, plan overrides, user suspension, and dispute resolution tools.</div>
            </div>
            <div className="p-5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-[#12201B] mb-1">9. Product Analytics</div>
              <div className="text-[#52615B]">Privacy-first event tracking, user activation metrics, and retention telemetry.</div>
            </div>
            <div className="p-5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-[#12201B] mb-1">10. Background Queues</div>
              <div className="text-[#52615B]">BullMQ & Redis workers handling asynchronous exports, sync jobs, and retries.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MULTI-TENANT ARCHITECTURE DEEP DIVE */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="p-8 md:p-12 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-sm">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
                Security & Isolation
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight mb-4">
                Built for Multi-Tenant SaaS
              </h2>
              <p className="text-sm md:text-base text-[#52615B] leading-relaxed mb-6">
                A multi-tenant SaaS allows multiple customers or organizations to use the same platform while keeping their data, users, and billing strictly separated. We design multi-tenant architectures from day one so you never risk embarrassing cross-tenant data leaks.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 border-t border-[#E2EAE6] text-xs">
              <div>
                <h4 className="font-bold text-[#12201B] mb-1">Row-Level Security (RLS)</h4>
                <p className="text-[#52615B] leading-relaxed">
                  PostgreSQL database policies automatically filter queries by organization ID at the database level.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#12201B] mb-1">Tenant-Aware Middleware</h4>
                <p className="text-[#52615B] leading-relaxed">
                  Type-safe API middleware validates session tokens and org memberships before executing any handler logic.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#12201B] mb-1">Custom Domain Routing</h4>
                <p className="text-[#52615B] leading-relaxed">
                  Optional subdomain routing (e.g., <code className="text-[#059669]">tenant.yourproduct.com</code>) or white-label custom domains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CUSTOM VS OFF-THE-SHELF SOFTWARE */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Strategic Evaluation
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Custom SaaS vs. Off-the-Shelf Software
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              Your business doesn&apos;t have to fit rigid third-party tools. Custom development creates a durable intellectual property asset.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#E2EAE6] bg-[#FFFFFF] shadow-xs">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-[#F8FAF9] border-b border-[#E2EAE6] font-mono text-[#52615B]">
                  <th className="p-4 font-bold">Dimension</th>
                  <th className="p-4 font-bold text-[#059669]">Custom SaaS Platform (Dazzcode)</th>
                  <th className="p-4 font-bold">Generic Off-the-Shelf Software</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2EAE6]">
                <tr>
                  <td className="p-4 font-bold text-[#12201B]">Workflow Alignment</td>
                  <td className="p-4 font-semibold text-[#059669]">Engineered 100% around your exact business process</td>
                  <td className="p-4 text-[#52615B]">You must adapt your team&apos;s workflow to fit the tool</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#12201B]">Product Roadmap</td>
                  <td className="p-4 font-semibold text-[#059669]">You dictate features, priorities, and release timing</td>
                  <td className="p-4 text-[#52615B]">You wait months/years for vendor backlog requests</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#12201B]">Integrations</td>
                  <td className="p-4 font-semibold text-[#059669]">Direct integration with your internal APIs, databases, or ERPs</td>
                  <td className="p-4 text-[#52615B]">Limited to pre-approved app store marketplace plugins</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#12201B]">Asset & IP Ownership</td>
                  <td className="p-4 font-semibold text-[#059669]">You own 100% of the code, database, and enterprise value</td>
                  <td className="p-4 text-[#52615B]">Zero equity; perpetual monthly seat subscription fees</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#12201B]">Commercial Potential</td>
                  <td className="p-4 font-semibold text-[#059669]">Can be commercialized and sold to other industry peers</td>
                  <td className="p-4 text-[#52615B]">Always remains someone else&apos;s commercial product</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 9. ALREADY HAVE A SAAS? (AUDIT, FIX & SCALE PATHWAYS) */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Existing Codebase Support
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Already Have a SaaS? We Can Start From Where You Are
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              You don&apos;t necessarily need to rewrite everything. Dazzcode can step in to audit, stabilize, refactor, and scale your existing codebase.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-3">
                  <Search className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-[#12201B] mb-2">1. Technical Code Audit</h3>
                <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                  We inspect your repositories, database models, and API endpoints to identify security flaws, query bottlenecks, and technical debt.
                </p>
              </div>
              <Link href="/services/code-audit" className="text-xs font-bold text-[#059669] hover:underline flex items-center gap-1">
                Explore Code Audits <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-3">
                  <RefreshCw className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-[#12201B] mb-2">2. Surgical Refactoring</h3>
                <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                  We rewrite problematic database queries, migrate un-typed code to strict TypeScript, and fix silent payment webhook bugs.
                </p>
              </div>
              <span className="text-xs font-mono text-[#52615B]">Zero-Downtime Migration</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-3">
                  <Server className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-[#12201B] mb-2">3. VPS Deployment</h3>
                <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                  We migrate your application away from overpriced $500+/mo cloud platforms to optimized, dockerized Linux VPS infrastructure.
                </p>
              </div>
              <Link href="/services/vps-deployment" className="text-xs font-bold text-[#059669] hover:underline flex items-center gap-1">
                Explore VPS Hosting <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-3">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-[#12201B] mb-2">4. Performance Scaling</h3>
                <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                  We implement Redis caching, PgBouncer connection pooling, and background worker queues to handle 10x user concurrency.
                </p>
              </div>
              <Link href="/services/saas-scaling" className="text-xs font-bold text-[#059669] hover:underline flex items-center gap-1">
                Explore SaaS Scaling <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. SAAS DEVELOPMENT PROCESS (8 STEPS) */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Engineering Lifecycle
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              How We Build Your SaaS
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              A structured, transparent engineering lifecycle designed to eliminate technical risk and deliver working software every sprint.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-[#059669] text-white flex items-center justify-center font-mono font-bold shrink-0">
                01
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#12201B] mb-1">Understand & Problem Definition</h3>
                <p className="text-[#52615B] leading-relaxed">
                  We dissect your business model, target customer personas, unit economics, and primary commercial objectives.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-[#059669] text-white flex items-center justify-center font-mono font-bold shrink-0">
                02
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#12201B] mb-1">Scope & Backlog Prioritization</h3>
                <p className="text-[#52615B] leading-relaxed">
                  We define essential core workflows, separate Phase 1 MVP features from Phase 2 items, and map user stories.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-[#059669] text-white flex items-center justify-center font-mono font-bold shrink-0">
                03
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#12201B] mb-1">UI/UX Journey Design</h3>
                <p className="text-[#52615B] leading-relaxed">
                  We design clean, intuitive web application flows, navigation structures, and accessible design system components.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-[#059669] text-white flex items-center justify-center font-mono font-bold shrink-0">
                04
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#12201B] mb-1">System & Database Architecture</h3>
                <p className="text-[#52615B] leading-relaxed">
                  We model relational PostgreSQL schemas, multi-tenant isolation rules, API contracts, and queue pipelines.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-[#059669] text-white flex items-center justify-center font-mono font-bold shrink-0">
                05
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#12201B] mb-1">Full-Stack Sprint Development</h3>
                <p className="text-[#52615B] leading-relaxed">
                  Bi-weekly sprints with live staging deploys. We engineer type-safe React/Next.js frontends and robust backend APIs.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-[#059669] text-white flex items-center justify-center font-mono font-bold shrink-0">
                06
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#12201B] mb-1">Automated QA & Security Hardening</h3>
                <p className="text-[#52615B] leading-relaxed">
                  Integration tests, payment webhook simulations, database query profiling, and role-permission security checks.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-[#059669] text-white flex items-center justify-center font-mono font-bold shrink-0">
                07
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#12201B] mb-1">Production VPS Deployment</h3>
                <p className="text-[#52615B] leading-relaxed">
                  We provision Linux servers, Docker containers, SSL certs, DNS cutovers, and hand over Git repositories.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#ECFDF5] border border-[#059669]/30 flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-[#059669] text-white flex items-center justify-center font-mono font-bold shrink-0">
                08
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#059669] mb-1">Post-Launch Scaling & Improvement</h3>
                <p className="text-[#064E3B] leading-relaxed">
                  Continuous performance telemetry, database index tuning, and evidence-based Phase 2 feature releases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. TECHNOLOGY STACK */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Core Engineering Stack
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              We Choose Technology Based on What the Product Needs
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              Standard, battle-tested technologies that eliminate vendor lock-in and make hiring in-house developers straightforward.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="text-base font-bold text-[#12201B]">Next.js & React</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">App Router & Server Components</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="text-base font-bold text-[#12201B]">TypeScript</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">End-to-End Type Safety</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="text-base font-bold text-[#12201B]">PostgreSQL</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">Multi-Tenant RLS Database</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="text-base font-bold text-[#12201B]">Node.js & Go</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">High-Throughput Micro-services</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="text-base font-bold text-[#12201B]">Redis & BullMQ</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">Caching & Background Queues</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="text-base font-bold text-[#12201B]">Docker & Linux</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">VPS Container Orchestration</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="text-base font-bold text-[#12201B]">Stripe & Subscriptions</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">Recurring Billing & Customer Portals</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="text-base font-bold text-[#12201B]">Tailwind CSS</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">Accessible Design Systems</div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. DELIVERABLES & OWNERSHIP */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="p-8 md:p-12 rounded-3xl bg-[#ECFDF5] border border-[#059669]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#059669] block mb-2">
                100% Intellectual Property
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight mb-3">
                Your Product. Your Code. Your Data.
              </h2>
              <p className="text-sm text-[#064E3B] leading-relaxed mb-4">
                We believe in zero agency lock-in. When we build your SaaS, you receive complete ownership of all Git repositories, PostgreSQL database schemas, Figma design tokens, Docker runbooks, and server credentials.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs font-mono text-[#064E3B]">
                <span className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" /> Full Git Source Code
                </span>
                <span className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" /> Database Schemas & Migrations
                </span>
                <span className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" /> Server Root Credentials
                </span>
                <span className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" /> Architecture Documentation
                </span>
              </div>
            </div>
            <Link href="#contact" className="shrink-0">
              <Button
                className="h-12 px-6 text-xs font-bold uppercase tracking-wider bg-[#059669] text-white hover:bg-[#047857] rounded-xl cursor-pointer"
              >
                Start Your SaaS Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 13. SELECTED WORK / CASE STUDIES */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Proven Delivery
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Selected SaaS & Software Builds
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              Real platforms engineered for real businesses with verified architectural outcomes:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Case Study 1: DazzPOS */}
            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#059669] block mb-2">
                  Case Study · Multi-Store SaaS
                </span>
                <h3 className="text-2xl font-black text-[#12201B] tracking-tight mb-3">
                  DazzPOS: Offline-First Retail Platform
                </h3>
                <div className="space-y-2 text-xs text-[#52615B] leading-relaxed mb-6">
                  <p><strong>The Problem:</strong> Multi-branch retail stores experienced revenue disruption and stock discrepancies whenever local internet connections dropped.</p>
                  <p><strong>The Approach:</strong> Architected an offline-first caching layer with IndexedDB/SQLite on client terminals and background queue synchronization with a central PostgreSQL cluster.</p>
                  <p><strong>The Build:</strong> Next.js App Router, multi-tenant organization switching, Safaricom M-Pesa Daraja STK integration, and automated inventory reconciliation.</p>
                  <p><strong>The Result:</strong> 50+ retail terminals operating with zero checkout downtime during network drops.</p>
                </div>
              </div>
              <Link href="/case-studies/dazzpos">
                <Button
                  variant="outline"
                  className="w-full h-11 text-xs font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#059669] hover:text-white rounded-xl transition-colors cursor-pointer"
                >
                  <span>Read Full Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Case Study 2: AI Lead Automation */}
            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#059669] block mb-2">
                  Case Study · AI & Workflow Engine
                </span>
                <h3 className="text-2xl font-black text-[#12201B] tracking-tight mb-3">
                  Automated WhatsApp Lead Qualification
                </h3>
                <div className="space-y-2 text-xs text-[#52615B] leading-relaxed mb-6">
                  <p><strong>The Problem:</strong> A commercial services firm was losing 40%+ of prospective inbound leads due to slow 4-hour manual WhatsApp reply times.</p>
                  <p><strong>The Approach:</strong> Built a custom retrieval-augmented generation (RAG) backend connected to WhatsApp webhooks and company service databases.</p>
                  <p><strong>The Build:</strong> Vector knowledge store (pgvector), instant quote calculator logic, CRM webhook triggers, and automated calendar scheduling links.</p>
                  <p><strong>The Result:</strong> Average lead response latency cut from 4 hours to under 45 seconds, generating a 3x increase in qualified consultations.</p>
                </div>
              </div>
              <Link href="/case-studies/ai-lead-automation">
                <Button
                  variant="outline"
                  className="w-full h-11 text-xs font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#059669] hover:text-white rounded-xl transition-colors cursor-pointer"
                >
                  <span>Read Full Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 14. PRICING & SCOPING SECTION */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Transparent Pricing
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Custom SaaS Development Pricing
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              We scope SaaS builds by milestones to eliminate cost surprises and maintain strict budget discipline.
            </p>
          </div>

          <div className="p-8 md:p-10 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs max-w-3xl mx-auto">
            <div className="text-center pb-6 border-b border-[#E2EAE6] mb-6">
              <span className="text-xs font-mono font-bold uppercase text-[#059669] tracking-wider block mb-1">
                Fixed-Milestone Scoping
              </span>
              <div className="text-3xl font-black text-[#12201B]">
                Custom Quote Based on Product Scope
              </div>
              <p className="text-xs text-[#52615B] mt-2">
                We define exact deliverables, acceptance criteria, and milestone timelines upfront before writing code.
              </p>
            </div>

            <div className="space-y-4 text-xs text-[#52615B] mb-8">
              <div className="font-bold text-[#12201B] font-mono uppercase tracking-wider">
                What Factors Affect Your SaaS Cost?
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span><strong>Workflows & Screens:</strong> Complexity and volume of custom UI journeys.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span><strong>Multi-Tenancy & Roles:</strong> Granularity of permission matrices (RBAC).</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span><strong>Billing Logic:</strong> Stripe subscriptions, usage metering, or custom payment gateways.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span><strong>Integrations:</strong> Custom ERPs, legacy databases, SMS, or AI vectors.</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-12 px-8 text-xs font-bold uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl transition-all cursor-pointer"
                >
                  Request a Project Scope
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="https://wa.me/254740938029" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-12 px-6 text-xs font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3] rounded-xl text-[#12201B] cursor-pointer"
                >
                  Discuss on WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 15. BUILT IN KENYA, READY FOR GLOBAL MARKETS */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Global Delivery
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Built in Kenya. Ready for Global Markets.
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              We combine senior software craftsmanship with deep knowledge of local African commerce and international SaaS standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-xs">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="font-bold text-[#12201B] mb-2 text-sm">Kenya & East Africa</div>
              <p className="text-[#52615B] leading-relaxed mb-4">
                Headquartered in Nairobi with native understanding of Safaricom Daraja, mobile money, offline-first connectivity, and regional business dynamics.
              </p>
              <Link href="/ke/saas-development-company" className="font-bold text-[#059669] hover:underline">
                Kenya Regional Hub →
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="font-bold text-[#12201B] mb-2 text-sm">United Kingdom & Europe</div>
              <p className="text-[#52615B] leading-relaxed mb-4">
                Convenient timezone alignment (EAT is only 2–3 hours ahead of London) with strict GDPR compliance and senior TypeScript engineering.
              </p>
              <Link href="/uk/saas-development" className="font-bold text-[#059669] hover:underline">
                UK Regional Hub →
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="font-bold text-[#12201B] mb-2 text-sm">United States & International</div>
              <p className="text-[#52615B] leading-relaxed mb-4">
                Collaborating with US startups via structured asynchronous delivery, sprint planning, and daily GitHub progress updates.
              </p>
              <Link href="/us/saas-development" className="font-bold text-[#059669] hover:underline">
                US Regional Hub →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 16. WHY DAZZCODE */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Differentiators
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Why Partner With Dazzcode?
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              We aren&apos;t just code executors. We act as technical product co-thinkers who help you build viable, scalable businesses.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-base font-bold text-[#12201B] mb-2">Product Thinking</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                We help decide what should be built, not just how to code it. We evaluate user onboarding funnels, retention loops, and scope discipline.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-base font-bold text-[#12201B] mb-2">Technical Depth</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Frontend, backend, relational database schema design, third-party APIs, and Linux VPS infrastructure handled under one roof.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-base font-bold text-[#12201B] mb-2">Existing Codebase Support</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                We can step into legacy or troubled codebases, audit technical debt, fix critical vulnerabilities, and refactor without downtime.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-base font-bold text-[#12201B] mb-2">Production DevOps Included</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                We don&apos;t abandon you at local development. We configure Linux servers, Docker, SSL certs, and DNS records so your SaaS runs 24/7.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-base font-bold text-[#12201B] mb-2">Continuous Growth Support</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                We stick around post-launch to monitor error rates, optimize slow queries, manage dependency upgrades, and ship Phase 2 features.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-base font-bold text-[#12201B] mb-2">Zero Lock-In Guarantee</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                You own 100% of your source code, database architecture, and hosting accounts from day one with complete handover documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 17. COMPREHENSIVE FAQ SECTION */}
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
              Everything you need to know about building, auditing, and scaling custom SaaS software with Dazzcode.
            </p>
          </div>

          <div className="space-y-4">
            {saasFaqs.map((faq, idx) => (
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

      {/* 18. STREAMLINED CONTACT & LEAD FORM */}
      <section id="contact" className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Start Your Build
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Discuss Your SaaS Project
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              Reach out directly on WhatsApp for an immediate engineering conversation or send your project details through our contact form.
            </p>
          </div>

          <WooCommerceLeadForm />
        </div>
      </section>

      {/* 19. FINAL LIGHT-THEME CTA */}
      <section className="py-20 bg-[#ECFDF5] border-t border-[#059669]/20 text-center">
        <div className="container px-4 md:px-6 mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#059669]/30 text-[#059669] text-xs font-mono font-bold uppercase mb-6">
            <span>HAVE A SAAS PRODUCT TO BUILD, FIX OR SCALE?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#12201B] mb-4">
            Build → Audit → Fix → Deploy → Scale
          </h2>
          <p className="text-sm md:text-base text-[#064E3B] mb-8 max-w-xl mx-auto leading-relaxed">
            Tell us what you&apos;re building, where you&apos;re stuck, or what needs to change. We&apos;ll help you work out the exact technical roadmap.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#contact">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#047857] rounded-xl transition-all shadow-md cursor-pointer"
              >
                Start Your Project
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
