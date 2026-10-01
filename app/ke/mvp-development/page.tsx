import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/seo/JsonLd";
import MvpDevHeroPreview from "@/components/sections/MvpDevHeroPreview";
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
  Calendar,
  AlertTriangle,
  Clock,
  Briefcase,
  Building2,
  Users,
  Cpu,
  Laptop,
  Check,
  X
} from "lucide-react";

export const metadata: Metadata = {
  title: "MVP Development Kenya | Dazzcode",
  description:
    "Dazzcode provides MVP development in Kenya for startups and businesses. Turn your idea into a working web product.",
  keywords: [
    "MVP development Kenya",
    "MVP development company Kenya",
    "MVP development services Kenya",
    "startup MVP development Kenya",
    "startup MVP development company Kenya",
    "MVP developers Kenya",
    "MVP development Nairobi",
    "MVP development company Nairobi",
    "startup software development Kenya",
    "startup software development company Kenya",
    "software MVP development Kenya",
    "product development Kenya",
    "product development company Kenya",
    "software product development Kenya",
    "MVP software development Kenya",
    "MVP developer Kenya",
    "MVP development agency Kenya",
    "MVP development services Nairobi",
    "startup developers Kenya",
    "software developers for startups Kenya",
    "SaaS MVP development Kenya",
    "SaaS MVP Kenya",
    "SaaS development Kenya",
    "SaaS development company Kenya",
    "SaaS product development Kenya",
    "SaaS MVP development Nairobi",
    "SaaS developers Kenya",
    "SaaS application development Kenya",
    "SaaS startup development Kenya",
    "custom SaaS development Kenya",
    "turn idea into software Kenya",
    "turn idea into app Kenya",
    "MVP development cost Kenya",
    "how much does an MVP cost in Kenya",
    "how long does it take to build an MVP",
    "MVP development timeline Kenya"
  ],
  alternates: {
    canonical: "https://dazzcode.com/ke/mvp-development",
    languages: {
      "en": "https://dazzcode.com/services/saas-mvp-development",
      "en-KE": "https://dazzcode.com/ke/mvp-development",
      "x-default": "https://dazzcode.com/ke/mvp-development",
    },
  },
  openGraph: {
    title: "MVP Development Kenya | Startup MVP Development | Dazzcode",
    description:
      "Dazzcode builds production-ready MVPs for Kenyan startups, founders, and growing businesses. Turn your validated software idea into a working product.",
    url: "https://dazzcode.com/ke/mvp-development",
    siteName: "Dazzcode",
    images: [
      {
        url: "/images/hero-saas-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "Startup MVP Development in Kenya - Dazzcode",
      },
    ],
  },
};

const mvpFaqs = [
  {
    q: "What is MVP development?",
    a: "MVP (Minimum Viable Product) development is the process of building the first functional version of a software product containing only its core features. The goal is to get a usable product in front of real users as quickly as possible to validate the business idea, collect feedback, and iterate based on evidence rather than assumptions."
  },
  {
    q: "How much does MVP development cost in Kenya?",
    a: "MVP development cost in Kenya depends on the product's scope, feature count, authentication models, database architecture, third-party integrations (such as M-Pesa or SMS), and administrative tooling. Because scopes vary widely from simple workflow tools to multi-tenant SaaS platforms, Dazzcode provides custom quotes based on an initial scoping session to prevent scope creep."
  },
  {
    q: "How much does it cost to build an MVP in Nairobi?",
    a: "In Nairobi, custom MVP software development typically scales according to technical requirements. A focused web MVP with basic user workflows and payment integrations requires fewer engineering hours than an enterprise multi-branch system or complex marketplace. We outline exact deliverables and fixed milestones upfront so there are no unexpected budget surprises."
  },
  {
    q: "How long does it take to build an MVP in Kenya?",
    a: "A focused, well-scoped MVP typically takes 4 to 8 weeks from kickoff to production deployment. Timelines vary depending on design requirements, custom API integrations, authentication complexity, and feedback iteration speed. We prioritize core value workflows to ensure fast time-to-market."
  },
  {
    q: "Do you build SaaS MVPs in Kenya?",
    a: "Yes. We specialize in SaaS MVP engineering, including multi-tenant PostgreSQL databases, user authentication and team roles (RBAC), subscription billing, Safaricom M-Pesa STK push integration, admin management dashboards, and modern Next.js frontends."
  },
  {
    q: "Can you build an MVP from just an idea?",
    a: "Yes. We help non-technical founders and business owners translate high-level business ideas into structured technical roadmaps. During our initial scoping phase, we define user personas, map essential user journeys, separate must-have features from future backlog items, and design clickable UI prototypes."
  },
  {
    q: "Can you work from my existing Figma design or wireframes?",
    a: "Absolutely. If you already have Figma designs, wireframes, or product specs, we review them for technical feasibility, plan the database schema and API endpoints, and convert the designs into high-performance, responsive React/Next.js code."
  },
  {
    q: "Can you integrate Lipa na M-Pesa into an MVP?",
    a: "Yes. We integrate Safaricom's Daraja API 2.0 for instant Lipa na M-Pesa STK Push prompts, automated callback webhooks, transaction reconciliation, and automated invoice/receipt generation."
  },
  {
    q: "Can you integrate WhatsApp into our MVP?",
    a: "Yes. We can integrate WhatsApp deep-linking, automated lead routing, and WhatsApp Business API webhooks to allow your startup to communicate with users where they are most active."
  },
  {
    q: "Can you deploy my MVP to live infrastructure?",
    a: "Yes. We handle production deployment from day one. We set up dedicated Linux VPS servers, Docker containers, reverse proxies (Nginx/Caddy), automated SSL certificates, domain DNS configuration, and basic health monitoring so your software runs 24/7."
  },
  {
    q: "Can you host an MVP on a VPS in Kenya or globally?",
    a: "Yes. We configure and deploy applications on reliable VPS providers (such as Hetzner, DigitalOcean, or local Kenyan hosting providers) or serverless cloud platforms, matching your budget and latency needs."
  },
  {
    q: "Can you audit and improve an existing MVP?",
    a: "Yes. If an MVP was built by a previous team or freelance developer and suffers from bugs, slow performance, or technical debt, we conduct code audits to assess security, database bottlenecks, and architectural issues, then formulate a remediation plan."
  },
  {
    q: "What happens after the MVP launches?",
    a: "Launch is just the beginning. Dazzcode supports founders post-launch with bug fixes, performance monitoring, feature iterations (V2 roadmaps), technical SEO, server maintenance, and infrastructure scaling as user adoption grows."
  },
  {
    q: "Should I build a web app MVP or a mobile app MVP first?",
    a: "For most B2B products, SaaS platforms, and operational tools, a mobile-responsive web application is the most cost-effective and fastest way to validate an idea. It works seamlessly across all smartphones and desktops without app store approval delays or 30% commission fees. A native mobile app makes sense when hardware features (like background GPS or Bluetooth) are essential to the core problem."
  },
  {
    q: "Do I own 100% of the source code and intellectual property?",
    a: "Yes. You retain complete ownership of all source code, database architectures, digital assets, and infrastructure credentials. We hand over the Git repositories and deployment keys upon milestone completion."
  },
  {
    q: "Do you work with founders and startups outside Nairobi?",
    a: "Yes. While we are based in Kenya, we work with founders across Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, East Africa, and international founders launching products in African markets."
  }
];

export default function KenyaMVPDevelopmentPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dazzcode.com/ke/mvp-development#service",
        name: "Startup MVP Development in Kenya",
        description:
          "Dazzcode provides MVP development in Kenya for startups and businesses. Turn your idea into a working web or SaaS product with development, deployment and post-launch support.",
        provider: {
          "@type": "LocalBusiness",
          name: "Dazzcode Kenya",
          url: "https://dazzcode.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Nairobi",
            addressCountry: "KE",
          },
        },
        areaServed: {
          "@type": "Country",
          name: "Kenya",
        },
        serviceType: "MVP Development Kenya",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dazzcode.com/ke/mvp-development#breadcrumb",
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
            name: "Kenya",
            item: "https://dazzcode.com/ke",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Startup MVP Development",
            item: "https://dazzcode.com/ke/mvp-development",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://dazzcode.com/ke/mvp-development#faq",
        mainEntity: mvpFaqs.map((faq) => ({
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
            <Link href="/ke" className="hover:text-[#059669] transition-colors">Kenya</Link>
            <span>/</span>
            <span className="text-[#12201B] font-semibold">Startup MVP Development</span>
          </nav>

          {/* Single Main H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-[#12201B] mb-6">
            Startup MVP Development in Kenya
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg md:text-xl text-[#52615B] leading-relaxed max-w-3xl mb-4 font-normal">
            Have an idea for a software product? Dazzcode helps Kenyan startups and business founders turn validated ideas into focused, working MVPs that can be tested with real users and developed into scalable digital products.
          </p>

          <p className="text-base md:text-lg text-[#52615B] leading-relaxed max-w-3xl mb-8">
            From product scope definition and UX design to full-stack development, M-Pesa payment integration, and Linux VPS deployment, we engineer the technical foundation for your next stage of growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
            <Link href="#contact">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl transition-all shadow-[0_4px_20px_rgba(5,150,105,0.25)] cursor-pointer"
              >
                Build My MVP
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="https://wa.me/254740938029" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-7 text-sm font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3] rounded-xl text-[#12201B] shadow-xs cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#059669]" />
                Talk to an Engineer
              </Button>
            </Link>
            <Link href="/case-studies" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#059669] hover:underline px-2 py-2">
              See Our Work →
            </Link>
          </div>

          {/* Micro-copy */}
          <div className="text-xs font-mono text-[#52615B] flex flex-wrap items-center gap-x-3 gap-y-1 pt-2">
            <span className="font-semibold text-[#12201B]">SaaS MVPs</span>
            <span>•</span>
            <span className="font-semibold text-[#12201B]">Web Applications</span>
            <span>•</span>
            <span className="font-semibold text-[#12201B]">Internal Business Systems</span>
            <span>•</span>
            <span className="font-semibold text-[#12201B]">M-Pesa Integration</span>
          </div>

          {/* Interactive Hero Visual Mockup */}
          <MvpDevHeroPreview />
        </div>
      </section>

      {/* 2. IMMEDIATE TRUST & PROOF SECTION */}
      <section className="py-12 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="text-2xl md:text-3xl font-black text-[#059669]">4–8 Weeks</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">Typical Launch Sprint</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="text-2xl md:text-3xl font-black text-[#059669]">100% IP</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">Full Code Ownership</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="text-2xl md:text-3xl font-black text-[#059669]">M-Pesa Ready</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">Daraja STK Callback Setup</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="text-2xl md:text-3xl font-black text-[#059669]">Kenya + Global</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">Local & Cross-border Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO WE BUILD MVPS FOR */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Target Audience
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Who We Build MVPs For
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              We partner with individuals and organizations who need focused, functional software to test commercial demand.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                  <Rocket className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#12201B] mb-2">Startup Founders</h3>
                <p className="text-xs text-[#52615B] leading-relaxed">
                  You have a validated business idea and need a production-ready software product to onboard early users, demonstrate traction, or pitch to angel investors.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#12201B] mb-2">Entrepreneurs</h3>
                <p className="text-xs text-[#52615B] leading-relaxed">
                  You want to test whether real Kenyan or East African customers will actually use and pay for your proposed digital service before investing heavily in full-scale builds.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#12201B] mb-2">Existing Businesses</h3>
                <p className="text-xs text-[#52615B] leading-relaxed">
                  You have a manual internal process, spreadsheet-heavy dispatch routine, or WhatsApp ordering workflow that needs to be digitized into custom software.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#12201B] mb-2">SaaS Founders</h3>
                <p className="text-xs text-[#52615B] leading-relaxed">
                  You need the first working version of a subscription software product complete with tenant isolation, user permissions, automated billing, and essential workflows.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#12201B] mb-2">Digital Product Builders</h3>
                <p className="text-xs text-[#52615B] leading-relaxed">
                  You want to launch a new portal or marketplace platform incrementally without attempting to engineer the entire 3-year product roadmap on day one.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                  <Laptop className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#12201B] mb-2">Teams With a Prototype</h3>
                <p className="text-xs text-[#52615B] leading-relaxed">
                  You already have Figma designs, wireframes, or user flows created and need an experienced engineering team to translate them into secure, scalable code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT IS AN MVP? (EDUCATIONAL CLARITY) */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Product Definition
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              What Is an MVP?
            </h2>
            <p className="text-base text-[#52615B] mt-4 leading-relaxed">
              An <strong>MVP (Minimum Viable Product)</strong> is the first useful, working version of a software product. It focuses exclusively on solving the core problem for your target audience instead of attempting to build hundreds of speculative features at once.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#FEF2F2] border border-[#FCA5A5]/40">
              <div className="flex items-center gap-2 text-[#DC2626] font-mono text-xs font-bold uppercase tracking-wider mb-4">
                <X className="w-4 h-4" />
                <span>What an MVP Is NOT</span>
              </div>
              <ul className="space-y-3 text-xs text-[#7F1D1D] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span><strong>Not a broken or low-quality product:</strong> An MVP must be secure, fast, and bug-free for its core functionality.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span><strong>Not a static mockup or clickable slide deck:</strong> It is real software running on a live database.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span><strong>Not a half-finished application:</strong> The user journey from signup to completion must work smoothly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span><strong>Not a bloated kitchen sink:</strong> It excludes vanity analytics, redundant dashboards, and complex settings.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#ECFDF5] border border-[#059669]/30">
              <div className="flex items-center gap-2 text-[#059669] font-mono text-xs font-bold uppercase tracking-wider mb-4">
                <Check className="w-4 h-4" />
                <span>What a Useful MVP IS</span>
              </div>
              <ul className="space-y-3 text-xs text-[#064E3B] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span><strong>Focused on one primary problem:</strong> It provides a clear, unmistakable solution to a specific pain point.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span><strong>Usable by real customers:</strong> Users can sign up, perform tasks, and complete transactions independently.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span><strong>Measurable and testable:</strong> Founders can track real user activation, retention, and drop-off points.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span><strong>Architected for evolution:</strong> Built with clean code and standard databases so it can expand smoothly into V2.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY START WITH AN MVP? (BUILD LESS. LEARN FASTER) */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Commercial Value
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Build Less. Learn Faster.
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              Starting with a lean MVP protects your capital, reduces technical risk, and accelerates your learning curve.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="text-sm font-mono font-bold text-[#059669] mb-2">01</div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Validate Real Demand</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Discover whether customers will actually use and pay for your software before investing tens of thousands of dollars into speculative features.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="text-sm font-mono font-bold text-[#059669] mb-2">02</div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Eliminate Unused Features</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Industry research shows that 45%+ of features in traditional software products are never used. An MVP ensures you only build what delivers immediate value.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="text-sm font-mono font-bold text-[#059669] mb-2">03</div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Reach Users in Weeks</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Launch the core experience in 4 to 8 weeks rather than spending 9 months in isolated development while market opportunities shift.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="text-sm font-mono font-bold text-[#059669] mb-2">04</div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Data-Driven Iteration</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Use verified behavioral feedback, support tickets, and usage patterns to decide exactly which features belong in Phase 2 development.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="text-sm font-mono font-bold text-[#059669] mb-2">05</div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Preserve Working Capital</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Keep your startup's financial runway intact so you have adequate resources for sales, local customer acquisition, and marketing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="text-sm font-mono font-bold text-[#059669] mb-2">06</div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Solid Foundation for Scale</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                We build MVPs on robust Next.js and PostgreSQL architectures so you do not have to discard your codebase when traffic scales up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE DAZZCODE MVP APPROACH */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Engineering Strategy
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              We Don&apos;t Build the Entire Vision on Day One
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              Your long-term product roadmap may have 100 features. Your MVP should focus on the 5 essential workflows needed to validate product-market fit.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-8 h-8 rounded-full bg-[#E2EAE6] text-[#52615B] font-mono font-bold text-xs flex items-center justify-center mx-auto mb-3">
                1
              </div>
              <h3 className="text-sm font-bold text-[#12201B] mb-1">Full Vision</h3>
              <div className="text-xs text-[#52615B] font-mono mb-2">100+ Ideas & Features</div>
              <p className="text-[11px] text-[#52615B] leading-relaxed">
                All long-term aspirations, complex automation, and auxiliary modules mapped out on paper.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#ECFDF5] border border-[#059669]/30">
              <div className="w-8 h-8 rounded-full bg-[#059669] text-white font-mono font-bold text-xs flex items-center justify-center mx-auto mb-3">
                2
              </div>
              <h3 className="text-sm font-bold text-[#059669] mb-1">Focused MVP</h3>
              <div className="text-xs text-[#047857] font-mono mb-2">Core Workflow Engine</div>
              <p className="text-[11px] text-[#064E3B] leading-relaxed">
                The minimum essential features required to onboard a user and solve their primary problem.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-8 h-8 rounded-full bg-[#E2EAE6] text-[#52615B] font-mono font-bold text-xs flex items-center justify-center mx-auto mb-3">
                3
              </div>
              <h3 className="text-sm font-bold text-[#12201B] mb-1">Real Users</h3>
              <div className="text-xs text-[#52615B] font-mono mb-2">Direct Field Feedback</div>
              <p className="text-[11px] text-[#52615B] leading-relaxed">
                Early adopters use the live system, report bugs, request missing items, and pay for value.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-8 h-8 rounded-full bg-[#E2EAE6] text-[#52615B] font-mono font-bold text-xs flex items-center justify-center mx-auto mb-3">
                4
              </div>
              <h3 className="text-sm font-bold text-[#12201B] mb-1">Phase 2 (V2)</h3>
              <div className="text-xs text-[#52615B] font-mono mb-2">Evidence-Based Build</div>
              <p className="text-[11px] text-[#52615B] leading-relaxed">
                Features engineered strictly based on customer evidence rather than founder guesswork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MVP TYPES WE BUILD */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Product Categories
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              MVP Types We Build
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              We engineer custom software prototypes and functional MVPs across multiple digital architectures.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">SaaS MVPs</h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                Multi-tenant web applications with secure team authentication, role permissions (RBAC), subscription tiers, and automated M-Pesa billing.
              </p>
              <Link href="/services/saas-mvp-development" className="text-xs font-bold text-[#059669] hover:underline flex items-center gap-1">
                Explore SaaS MVP Services <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Web Application MVPs</h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                Interactive customer portals, client dashboards, booking engines, and internal workflow tools accessible from any modern browser.
              </p>
              <Link href="/ke/web-development" className="text-xs font-bold text-[#059669] hover:underline flex items-center gap-1">
                Web Development Services <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Marketplace MVPs</h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                Two-sided platforms connecting buyers and sellers, service providers and clients, or equipment owners with renters.
              </p>
              <span className="text-xs font-mono text-[#52615B]">Custom Workflow Scoping</span>
            </div>

            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Business Software MVPs</h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                Tailored operational systems that replace manual spreadsheets, paper forms, and WhatsApp groups for dispatch, stock, or invoicing.
              </p>
              <Link href="/ke/software-development-company" className="text-xs font-bold text-[#059669] hover:underline flex items-center gap-1">
                Custom Software in Kenya <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">AI MVPs</h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                Applications leveraging Large Language Models (LLMs), semantic vector search, automated document extraction, or intelligent WhatsApp auto-responders.
              </p>
              <Link href="/services/ai-automation" className="text-xs font-bold text-[#059669] hover:underline flex items-center gap-1">
                AI Automation Services <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Workflow Automation MVPs</h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                Specialized background services synchronizing payment webhooks, CRM records, SMS alerts, and accounting ledgers automatically.
              </p>
              <span className="text-xs font-mono text-[#52615B]">API & Webhook Integrations</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. KENYA-SPECIFIC MVP FEATURES */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Kenya-First Architecture
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Built for Kenyan Startups
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              We design software around the operational realities, payment channels, and connectivity constraints of the Kenyan business environment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Lipa na M-Pesa STK Push</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Connect your MVP to Safaricom&apos;s Daraja API for automated checkout prompts, instant payment confirmation webhooks, and zero manual reconciliation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Mobile-First Optimization</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Over 75% of Kenyan users access software on smartphones. We optimize every UI component, form, and workflow for fast loading on 3G and 4G networks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">WhatsApp Routing</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Integrate WhatsApp deep-links and automated messaging to enable instant user onboarding and customer support right where Kenyan buyers chat.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Kenyan Shillings & Tax Rules</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Native support for KES currency formatting, 16% VAT computations, withholding tax handling, and local eTIMS invoice numbering logic.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Cost-Optimized VPS Hosting</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Avoid inflated $500/month cloud bills. We deploy MVPs on high-performance Linux VPS servers or Docker environments that cost as little as $10–$25/month.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Local Data Compliance</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Architected with security best practices, data privacy controls, and encrypted user credentials aligned with Kenyan data protection guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. KENYAN STARTUP USE CASES */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Practical Applications
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              What Kenyan Founders Can Build
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              Examples of software products and commercial platforms Dazzcode can help you engineer:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="font-bold text-[#12201B] mb-1">Fintech & Micro-billing</div>
              <div className="text-[#52615B]">Subscription managers, bill splitters, savings group portals, and automated escrow tools.</div>
            </div>
            <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="font-bold text-[#12201B] mb-1">Logistics & Dispatch</div>
              <div className="text-[#52615B]">Waybill tracking, parcel drop-off booking, driver coordination, and delivery confirmation systems.</div>
            </div>
            <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="font-bold text-[#12201B] mb-1">Health & Clinic Portals</div>
              <div className="text-[#52615B]">Patient appointment booking, lab result delivery, doctor schedules, and digital prescription archives.</div>
            </div>
            <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="font-bold text-[#12201B] mb-1">Agri-tech & Supply Chain</div>
              <div className="text-[#52615B]">Produce collection centers, farmer payment logs, batch grading, and cold-chain monitoring portals.</div>
            </div>
            <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="font-bold text-[#12201B] mb-1">Property & Real Estate</div>
              <div className="text-[#52615B]">Tenant rent collection portals, automated water/service bill generators, and maintenance trackers.</div>
            </div>
            <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="font-bold text-[#12201B] mb-1">Education & E-learning</div>
              <div className="text-[#52615B]">Student fee management, digital exam portals, course distribution, and attendance recording.</div>
            </div>
            <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="font-bold text-[#12201B] mb-1">B2B Wholesale Portals</div>
              <div className="text-[#52615B]">Bulk pricing catalogs, distributor accounts, minimum order thresholds, and credit limit tracking.</div>
            </div>
            <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="font-bold text-[#12201B] mb-1">AI Document & Lead Tools</div>
              <div className="text-[#52615B]">Automated WhatsApp customer lead qualification, PDF invoice scanners, and customer support bots.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. WHAT GOES INTO YOUR MVP (SCOPE BREAKDOWN) */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Deliverables
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              What Goes Into Your MVP?
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              A complete, professionally engineered MVP includes all essential layers required for production operation:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <h3 className="text-base font-bold text-[#12201B] mb-3 flex items-center gap-2">
                <Search className="w-4 h-4 text-[#059669]" />
                1. Product Scoping & Journey Mapping
              </h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                We define core user personas, document primary workflows, and filter out non-essential feature ideas to keep the MVP lean and fast.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <h3 className="text-base font-bold text-[#12201B] mb-3 flex items-center gap-2">
                <Laptop className="w-4 h-4 text-[#059669]" />
                2. UI/UX Design & Clickable Flows
              </h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Clean, modern design system optimized for usability on both mobile screens and desktop monitors using Tailwind CSS and accessible tokens.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <h3 className="text-base font-bold text-[#12201B] mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#059669]" />
                3. Frontend Engineering (Next.js / React)
              </h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Fast, responsive user interface built with modern TypeScript, server components, client-side validation, and instant state updates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <h3 className="text-base font-bold text-[#12201B] mb-3 flex items-center gap-2">
                <Database className="w-4 h-4 text-[#059669]" />
                4. Backend API & PostgreSQL Database
              </h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Relational schema design, secure REST or GraphQL endpoints, indexing for query speed, and data integrity constraints.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <h3 className="text-base font-bold text-[#12201B] mb-3 flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#059669]" />
                5. Authentication & Role Permissions
              </h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Secure password hashing, email magic links or session cookies, and Role-Based Access Control (Super Admin, Staff, Customer).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <h3 className="text-base font-bold text-[#12201B] mb-3 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#059669]" />
                6. Payments & Daraja Webhooks
              </h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Lipa na M-Pesa STK push integration, callback verification, credit card processing (Stripe/Paystack where applicable), and automated invoicing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <h3 className="text-base font-bold text-[#12201B] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#059669]" />
                7. Admin Dashboard & Operations Tooling
              </h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                An internal administration interface allowing your team to manage users, view transaction logs, update records, and export reports.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <h3 className="text-base font-bold text-[#12201B] mb-3 flex items-center gap-2">
                <Server className="w-4 h-4 text-[#059669]" />
                8. Production Deployment & SSL
              </h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Configured Linux VPS deployment with Docker, Nginx reverse proxy, automated SSL certs, automated database backups, and custom domain setup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. WHAT WE DO NOT BUILD IN AN MVP */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Scope Discipline
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Your MVP Doesn&apos;t Need Everything
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              To launch on time and preserve capital, we advise Kenyan founders to leave these items for later phases:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="text-xs font-mono font-bold text-[#DC2626] mb-2">SKIP IN MVP</div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Microservices Architecture</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Premature distributed systems add massive infrastructure overhead. A clean, modular monolith is faster to build and easier to scale.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="text-xs font-mono font-bold text-[#DC2626] mb-2">SKIP IN MVP</div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Complex Custom Analytics</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Building custom reporting engines before you have active users wastes budget. Simple SQL queries and lightweight telemetry are plenty.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="text-xs font-mono font-bold text-[#DC2626] mb-2">SKIP IN MVP</div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Multiple Payment Gateways</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Launch with Safaricom M-Pesa (the dominant Kenyan method) first. Integrate secondary payment channels only when customer demand requests them.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="text-xs font-mono font-bold text-[#DC2626] mb-2">SKIP IN MVP</div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Dozens of User Roles</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Start with basic Admin, Staff, and User permissions instead of complex granular access control matrices that slow down development.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="text-xs font-mono font-bold text-[#DC2626] mb-2">SKIP IN MVP</div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Vanity Customizations</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Avoid customizable themes, dark-mode pickers, and excessive aesthetic options. Focus 100% of effort on solving the user&apos;s functional problem.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="text-xs font-mono font-bold text-[#DC2626] mb-2">SKIP IN MVP</div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Features Just Because Rivals Have Them</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Competitors with millions in funding have bloated backlogs. Your advantage as a startup is speed, simplicity, and superior customer focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. PROTOTYPE VS MVP VS FULL PRODUCT (COMPARISON TABLE) */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Stage Comparison
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Prototype vs. MVP vs. Full Product
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              Understanding where your project sits helps you allocate time, budget, and engineering resources effectively.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#E2EAE6] bg-[#FFFFFF] shadow-xs">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-[#F8FAF9] border-b border-[#E2EAE6] font-mono text-[#52615B]">
                  <th className="p-4 font-bold">Criteria</th>
                  <th className="p-4 font-bold">1. Prototype / Wireframe</th>
                  <th className="p-4 font-bold text-[#059669]">2. Minimum Viable Product (MVP)</th>
                  <th className="p-4 font-bold">3. Full Mature Product</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2EAE6]">
                <tr>
                  <td className="p-4 font-bold text-[#12201B]">Primary Goal</td>
                  <td className="p-4 text-[#52615B]">Test concept & visual user journey</td>
                  <td className="p-4 font-semibold text-[#059669]">Validate commercial demand & collect feedback</td>
                  <td className="p-4 text-[#52615B]">Scale market share & serve broad user segments</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#12201B]">Backend & Data</td>
                  <td className="p-4 text-[#52615B]">None (mock data or Figma clickable)</td>
                  <td className="p-4 font-semibold text-[#059669]">Real PostgreSQL database & APIs</td>
                  <td className="p-4 text-[#52615B]">Multi-region database, read replicas & caches</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#12201B]">Payments & Auth</td>
                  <td className="p-4 text-[#52615B]">Simulated buttons</td>
                  <td className="p-4 font-semibold text-[#059669]">Live Safaricom M-Pesa STK & secure login</td>
                  <td className="p-4 text-[#52615B]">Multi-currency, cards, invoices & automated dunning</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#12201B]">Typical Timeline</td>
                  <td className="p-4 text-[#52615B]">1 to 2 weeks</td>
                  <td className="p-4 font-semibold text-[#059669]">4 to 8 weeks</td>
                  <td className="p-4 text-[#52615B]">6 to 18+ months ongoing</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#12201B]">Initial Investment</td>
                  <td className="p-4 text-[#52615B]">Lowest</td>
                  <td className="p-4 font-semibold text-[#059669]">Moderate & highly controlled</td>
                  <td className="p-4 text-[#52615B]">Substantial long-term commitment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 13. WEB VS MOBILE MVP */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Platform Selection
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Should Your MVP Be a Web App or Mobile App?
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              Many Kenyan founders assume they must build an iOS and Android app first. Here is why a mobile-first web app is usually the smarter starting move:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#059669]/30 shadow-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFDF5] text-[#059669] text-xs font-mono font-bold mb-4">
                <span>RECOMMENDED FOR 85% OF MVPs</span>
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-3">Mobile-Responsive Web Application</h3>
              <ul className="space-y-3 text-xs text-[#52615B] leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span><strong>Zero App Store Friction:</strong> Users access the platform immediately via URL without downloading 50MB from the Play Store.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span><strong>Instant Bug Fixes:</strong> Deploy software improvements instantly without waiting 3–7 days for Apple or Google app reviews.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span><strong>One Unified Codebase:</strong> Runs identically on Android phones, iPhones, tablets, laptops, and desktop computers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span><strong>Lower Development Cost:</strong> Half the development budget compared to building separate iOS and Android native apps.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAF9] border border-[#E2EAE6] text-[#52615B] text-xs font-mono font-bold mb-4">
                <span>WHEN NATIVE MAKES SENSE</span>
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-3">Native Mobile App (iOS / Android)</h3>
              <ul className="space-y-3 text-xs text-[#52615B] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#E2EAE6] flex items-center justify-center text-[10px] font-bold text-[#52615B] shrink-0 mt-0.5">✓</span>
                  <span><strong>Hardware Sensors:</strong> Continuous background GPS tracking for ride-hailing drivers or delivery couriers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#E2EAE6] flex items-center justify-center text-[10px] font-bold text-[#52615B] shrink-0 mt-0.5">✓</span>
                  <span><strong>Bluetooth Peripherals:</strong> Direct hardware connections to thermal receipt printers or diagnostic tools.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#E2EAE6] flex items-center justify-center text-[10px] font-bold text-[#52615B] shrink-0 mt-0.5">✓</span>
                  <span><strong>Offline Field Storage:</strong> Complex offline operations where field teams sync data only once weekly.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 14. 7-STEP PRACTICAL PROCESS */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Step-by-Step Delivery
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              From Idea to Working Product
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              A transparent, structured engineering lifecycle that takes you from conceptual whiteboard to live production deployment.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#059669] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                  01
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#12201B]">Understand & Problem Definition</h3>
                  <p className="text-xs text-[#52615B] mt-1">
                    We learn about your business model, customer pain points, competitor landscape, and target metrics for success.
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-[#059669] shrink-0">Discovery</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#059669] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                  02
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#12201B]">Scope & Architecture</h3>
                  <p className="text-xs text-[#52615B] mt-1">
                    We separate must-have MVP features from future items, create database models, and map out API endpoints.
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-[#059669] shrink-0">Roadmapping</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#059669] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                  03
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#12201B]">UI/UX Flow Design</h3>
                  <p className="text-xs text-[#52615B] mt-1">
                    We design clean, intuitive user interfaces and wireframes for mobile and desktop screens.
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-[#059669] shrink-0">Prototyping</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#059669] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                  04
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#12201B]">Full-Stack Development</h3>
                  <p className="text-xs text-[#52615B] mt-1">
                    We build the Next.js frontend, backend APIs, database relations, and integrate Safaricom M-Pesa callbacks.
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-[#059669] shrink-0">Core Sprints</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#059669] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                  05
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#12201B]">Testing & Security Verification</h3>
                  <p className="text-xs text-[#52615B] mt-1">
                    End-to-end testing across devices, mobile networks, database queries, and payment webhook verification.
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-[#059669] shrink-0">QA & Hardening</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#059669] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                  06
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#12201B]">Live VPS Deployment</h3>
                  <p className="text-xs text-[#52615B] mt-1">
                    We set up the Linux production server, domain DNS records, automated SSL certificates, and hand over source code.
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-[#059669] shrink-0">Launch</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#ECFDF5] border border-[#059669]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#059669] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                  07
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#059669]">Learn, Iterate & Scale</h3>
                  <p className="text-xs text-[#064E3B] mt-1">
                    Review user telemetry, address live feedback, and plan high-ROI features for Phase 2 development.
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-[#059669] shrink-0">Post-Launch</span>
            </div>
          </div>
        </div>
      </section>

      {/* 15. TECHNOLOGY SECTION */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Technical Stack
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Modern, Maintainable Technologies
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              We select standard, battle-tested technologies so you are never locked into proprietary frameworks or obscure dependencies.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="text-base font-bold text-[#12201B]">Next.js & React</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">SSR & Edge Architecture</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="text-base font-bold text-[#12201B]">TypeScript</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">Type-Safe Codebase</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="text-base font-bold text-[#12201B]">PostgreSQL</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">Relational Database</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="text-base font-bold text-[#12201B]">Node.js & Go</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">High-Throughput APIs</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="text-base font-bold text-[#12201B]">Docker</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">Reproducible Containers</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="text-base font-bold text-[#12201B]">Linux / VPS</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">Low-Cost Infrastructure</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="text-base font-bold text-[#12201B]">Daraja 2.0</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">M-Pesa Payment APIs</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="text-base font-bold text-[#12201B]">Tailwind CSS</div>
              <div className="text-xs text-[#52615B] font-mono mt-1">Mobile-First UI</div>
            </div>
          </div>
        </div>
      </section>

      {/* 16. DEPLOYMENT SECTION */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="p-8 md:p-12 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#059669] block mb-2">
                Production Infrastructure
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight mb-3">
                Your MVP Doesn&apos;t End at &quot;It Works on My Laptop&quot;
              </h2>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                We don&apos;t just hand over a zipped folder of code and leave you stranded. Dazzcode provisions your Linux VPS, configures Docker containers, sets up automated SSL certificates, maps your domain DNS, and ensures your application stays online 24/7.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-[#52615B]">
                <span className="flex items-center gap-1.5 text-[#059669] font-semibold">
                  <CheckCircle2 className="w-4 h-4" /> Dockerized Deployment
                </span>
                <span className="flex items-center gap-1.5 text-[#059669] font-semibold">
                  <CheckCircle2 className="w-4 h-4" /> Free Automated SSL
                </span>
                <span className="flex items-center gap-1.5 text-[#059669] font-semibold">
                  <CheckCircle2 className="w-4 h-4" /> Automated Backups
                </span>
              </div>
            </div>
            <Link href="/services/vps-deployment" className="shrink-0">
              <Button
                variant="outline"
                className="h-12 px-6 text-xs font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#059669] hover:text-white rounded-xl text-[#12201B] transition-colors cursor-pointer"
              >
                Explore VPS Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 17. POST-LAUNCH & CONTINUED SUPPORT */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Lifecycle Support
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              What Happens After Launch?
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              MVP launch day is the start of your customer learning cycle. Dazzcode provides ongoing support to help you scale:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-3">
                <RefreshCw className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">1. Rapid Hotfixes</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Prompt resolution for any edge cases, browser quirks, or user feedback identified immediately following public launch.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-3">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">2. Phase 2 Features</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Prioritize and develop new modules, additional integrations, and workflow enhancements based on verified customer requests.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-3">
                <Server className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">3. Scaling & Caching</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Database index tuning, Redis caching layers, and VPS server scaling as user concurrency and database records grow.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-3">
                <Search className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">4. SEO & Visibility</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Continuous on-page and technical SEO to help prospective customers find your startup organically on Google searches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 18. ALREADY HAVE AN MVP? (CODE AUDIT CALLOUT) */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="p-8 md:p-10 rounded-3xl bg-[#ECFDF5] border border-[#059669]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#059669] block mb-2">
                Existing Software Review
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight mb-2">
                Already Have an MVP Built by Another Team?
              </h2>
              <p className="text-sm text-[#064E3B] leading-relaxed">
                You don&apos;t necessarily need to throw away your code and start from scratch. Dazzcode can perform an in-depth code audit to identify security risks, query bottlenecks, outdated dependencies, and technical debt, giving you a clear roadmap to repair or refactor.
              </p>
            </div>
            <Link href="/services/code-audit" className="shrink-0">
              <Button
                className="h-12 px-6 text-xs font-bold uppercase tracking-wider bg-[#059669] text-white hover:bg-[#047857] rounded-xl cursor-pointer"
              >
                Request a Code Audit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 19. SELECTED WORK / CASE STUDY */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Proven Delivery
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Products We&apos;ve Engineered
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              Real software built for real businesses with verified architectural outcomes:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Case Study 1: DazzPOS */}
            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#059669] block mb-2">
                  Case Study · Retail Systems
                </span>
                <h3 className="text-2xl font-black text-[#12201B] tracking-tight mb-3">
                  DazzPOS: Offline-First Retail System
                </h3>
                <div className="space-y-2 text-xs text-[#52615B] leading-relaxed mb-6">
                  <p><strong>Problem:</strong> Kenyan retail shops suffered checkout downtime whenever internet connections dropped, losing sales and confusing inventory tallies.</p>
                  <p><strong>Approach:</strong> Engineered an offline-first local database caching layer with automatic background sync upon internet reconnection.</p>
                  <p><strong>Build:</strong> Next.js frontend, SQLite/IndexedDB client caches, PostgreSQL cloud sync, and Safaricom M-Pesa STK integration.</p>
                  <p><strong>Result:</strong> Zero transaction loss during network outages across 50+ retail checkout terminals.</p>
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
                  Case Study · AI & WhatsApp
                </span>
                <h3 className="text-2xl font-black text-[#12201B] tracking-tight mb-3">
                  Automated WhatsApp Lead Qualification
                </h3>
                <div className="space-y-2 text-xs text-[#52615B] leading-relaxed mb-6">
                  <p><strong>Problem:</strong> A Kenyan service company was overwhelmed by hundreds of unvetted WhatsApp inquiries, with response times exceeding 4 hours.</p>
                  <p><strong>Approach:</strong> Built an intelligent retrieval engine connected to WhatsApp Business webhooks to answer FAQs and calculate quotes instantly.</p>
                  <p><strong>Build:</strong> LLM prompt chains with vector knowledge embeddings, CRM webhook routing, and automated calendar link triggers.</p>
                  <p><strong>Result:</strong> Average lead response time reduced from 4 hours to 45 seconds, with 3x increase in booked consultations.</p>
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

      {/* 20. PRICING & COST SECTION */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Transparent Investment
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              MVP Development Cost in Kenya
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              Because custom software requirements vary widely, we provide transparent, fixed-milestone quotes based on verified scope.
            </p>
          </div>

          <div className="p-8 md:p-10 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs max-w-3xl mx-auto">
            <div className="text-center pb-6 border-b border-[#E2EAE6] mb-6">
              <span className="text-xs font-mono font-bold uppercase text-[#059669] tracking-wider block mb-1">
                Custom MVP Scope
              </span>
              <div className="text-3xl font-black text-[#12201B]">
                Custom Quote Based on Product Scope
              </div>
              <p className="text-xs text-[#52615B] mt-2">
                Typical launch sprints range from 4 to 8 weeks with defined milestone deliverables.
              </p>
            </div>

            <div className="space-y-4 text-xs text-[#52615B] mb-8">
              <div className="font-bold text-[#12201B] font-mono uppercase tracking-wider">
                What Determines Your MVP Cost?
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span><strong>Feature Count:</strong> Number of distinct screens and workflows.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span><strong>User Roles:</strong> Granularity of permissions and admin controls.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span><strong>Integrations:</strong> M-Pesa, SMS gateways, Maps, or third-party APIs.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span><strong>Infrastructure:</strong> Linux VPS configuration and deployment setups.</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-12 px-8 text-xs font-bold uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl transition-all cursor-pointer"
                >
                  Get an MVP Estimate
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="https://wa.me/254740938029" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-12 px-6 text-xs font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3] rounded-xl text-[#12201B] cursor-pointer"
                >
                  Discuss My Idea on WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 21. WHY DAZZCODE */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Differentiators
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Why Partner With Dazzcode?
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              We combine deep technical engineering with commercial product discipline to help founders build viable businesses.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-base font-bold text-[#12201B] mb-2">Scope Before Code</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                We challenge feature assumptions and trim bloated backlogs before writing a single line of code, ensuring you spend money only where it generates business feedback.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-base font-bold text-[#12201B] mb-2">True Product Thinking</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                We aren&apos;t just task-takers. We act as technical product co-thinkers who help you evaluate unit economics, user onboarding funnels, and retention hooks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-base font-bold text-[#12201B] mb-2">Institutional Code Depth</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Our codebases follow clean separation of concerns, strict TypeScript types, and relational database indexing that external investors and CTOs respect.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-base font-bold text-[#12201B] mb-2">100% IP & Asset Ownership</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Zero agency lock-in. You own all Git repositories, Figma files, server credentials, and database schemas with complete documentation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-base font-bold text-[#12201B] mb-2">Local & Global Delivery</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Headquartered in Nairobi with deep knowledge of Safaricom Daraja, Kenyan business customs, and international software engineering standards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-base font-bold text-[#12201B] mb-2">End-to-End Support</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                From initial discovery through deployment, monitoring, code audits, SEO, and server scaling, we stick around after launch to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 22. COMPREHENSIVE FAQ SECTION */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Clear Answers
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              Everything you need to know about building a software MVP in Kenya with Dazzcode.
            </p>
          </div>

          <div className="space-y-4">
            {mvpFaqs.map((faq, idx) => (
              <details
                key={idx}
                className="group p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] open:bg-[#FFFFFF] open:border-[#059669]/40 open:shadow-sm transition-all"
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

      {/* 23. STREAMLINED LEAD FORM & CONTACT */}
      <section id="contact" className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Start Your Build
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Discuss Your MVP Idea
            </h2>
            <p className="text-sm text-[#52615B] mt-3">
              Reach out directly on WhatsApp for an immediate conversation or send your project details through our simple contact form.
            </p>
          </div>

          <WooCommerceLeadForm />
        </div>
      </section>
    </div>
  );
}
