"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Layers,
  Sparkles,
  ShieldCheck,
  Globe,
  Database,
  RefreshCw,
  Briefcase,
  Store,
  LineChart,
  Code2,
  ChevronRight,
  Rocket,
  Cpu,
  Server,
  Zap,
  Check,
  BarChart3,
  Users,
  Building2,
  TrendingUp,
  ShieldAlert,
  ArrowUpRight,
  HelpCircle,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroServicesCarousel from "@/components/sections/HeroServicesCarousel";
import JsonLd from "@/components/seo/JsonLd";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      question:"Who is dazzcode?",
      answer:"saas development company based in kenya serving clients across east africa, the uk, and the us."
    },
    {
      question: "What does Dazzcode do as a SaaS development company?",
      answer:
        "Dazzcode is a software engineering company providing services across the entire software lifecycle: Build → Audit → Fix → Deploy → Scale. We build custom SaaS platforms, launch startup MVPs in 4 to 6 weeks, conduct deep codebase audits, deploy applications to Linux VPS servers with Docker and Nginx, and optimize platforms for high concurrency.",
    },
    {
      question: "How much does custom SaaS development & MVP engineering cost?",
      answer:
        "Costs typically range between $1000 to $7,500 (or KES 30,000 to KES 900,000) for a focused SaaS MVP development sprint, depending on feature depth, multi-tenancy architecture complexity, and payment gateway requirements. We provide transparent, fixed-milestone pricing with zero surprise hourly overruns.",
    },
    {
      question: "How long does it take to build and launch a SaaS MVP?",
      answer:
        "Most production-ready SaaS product development sprints take 4 to 6 weeks. We work in rapid weekly iterations with live staging preview deployments every Friday, allowing you to test core SaaS workflows continuously.",
    },
    {
      question: "What is included in a Dazzcode SaaS code audit?",
      answer:
        "Our comprehensive code audit inspects application architecture, TypeScript type safety, database index bottlenecks, SQL query efficiency (eliminating N+1 issues), API latency, security vulnerabilities (OWASP compliance), and technical debt, delivering an actionable engineering remediation roadmap.",
    },
    {
      question: "Do you handle VPS server deployment for Next.js, Node.js, and Docker?",
      answer:
        "Yes. We specialize in robust Linux server deployment and VPS deployment on Hetzner, DigitalOcean, and AWS EC2. We deploy Next.js apps to VPS with Docker Compose, Node.js runtime, Nginx reverse proxies, automated SSL certificates, PM2 process management, and GitHub Actions push-to-deploy CI/CD pipelines.",
    },
    {
      question: "How do you work with businesses in Kenya, East Africa, the UK, and the US?",
      answer:
        "Headquartered in Nairobi, Kenya, we work globally across distributed teams. For Kenyan and East African clients, we provide native M-Pesa Daraja 2.0 API integration, multi-currency accounting, and offline-first POS systems. For UK and US clients, we offer synchronous GMT/EST timezone collaboration, GBP/USD milestone billing, and SOC2-ready codebases.",
    },
    {
      question: "Who owns the code and intellectual property?",
      answer:
        "You do. We provide 100% intellectual property (IP) transfer from day one. You own all GitHub repositories, database instances, and architecture runbooks with zero vendor lock-in.",
    },
    {
      question: "What technologies do you use for SaaS application development?",
      answer:
        "We engineer production platforms using Next.js (App Router), React, TypeScript, Tailwind CSS, PostgreSQL, Redis, Node.js, Go, Docker, and AI workflow automation tooling (OpenAI GPT-4o, Claude 3.5).",
    },
    {
      question:"Saas development framework for MVP",
      answer:"Our preferred stack for rapid SaaS MVP development balances speed, scalability, and developer experience: Next.js for the frontend, TypeScript for type safety, Tailwind CSS for styling, PostgreSQL with Supabase for the database, Redis for caching, and Node.js with Go for backend services."
    },
    {
      question:"do you build ai saas applications?",
      answer:"we engineer AI-powered SaaS solutions by integrating LLM APIs (OpenAI GPT-4o, Claude 3.5) into custom Next.js applications. Common patterns include internal tools with RAG (Retrieval-Augmented Generation), agentic workflow automation for operations, intelligent chatbots, and AI-driven data analytics platforms."
    }
  ];

  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://dazzcode.com/#organization",
        name: "Dazzcode",
        url: "https://dazzcode.com",
        logo: "https://dazzcode.com/images/logo.png",
        description: "Dazzcode is a premier SaaS development company providing custom SaaS engineering, SaaS MVP launches, code audits, Linux VPS deployment, and multi-tenant SaaS scaling.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Nairobi",
          addressCountry: "KE",
        },
        sameAs: [
          "https://twitter.com/dazzcode",
          "https://instagram.com/dazzcode",
          "https://facebook.com/dazzcodeofficial",
          "https://github.com/dazzcode",
          "https://linkedin.com/company/dazzcode",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://dazzcode.com/#website",
        url: "https://dazzcode.com",
        name: "Dazzcode",
        description: "Build, Fix & Scale Your SaaS. SaaS development company based in Kenya serving clients across East Africa, the UK, and the US.",
        publisher: {
          "@id": "https://dazzcode.com/#organization",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://dazzcode.com/#faq",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-[#F8FAF9] text-[#12201B]">
      <JsonLd schema={jsonLdData} />

      {/* ---------------------------------------------------- */}
      {/* 1. HERO SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto relative z-10 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Hero Left Content */}
            <div className="flex-1 text-left max-w-2xl">
              {/* Static H1 */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.02] mb-6 text-[#12201B]">
                Build, Fix & Scale Your SaaS
              </h1>

              {/* Supporting text */}
              <p className="text-lg md:text-xl text-[#52615B] mb-8 leading-relaxed font-normal">
                Dazzcode helps startups and growing businesses build SaaS products, launch production MVPs in 4–6 weeks, audit existing codebases, deploy to Linux VPS servers, and scale software architectures.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-14 px-8 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl transition-all shadow-[0_4px_20px_rgba(5,150,105,0.25)] cursor-pointer"
                  >
                    Start a Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-14 px-7 text-sm font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3] hover:text-[#12201B] rounded-xl text-[#12201B] shadow-xs cursor-pointer"
                  >
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Right Visual */}
            <div className="flex-1 w-full max-w-2xl relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#059669]/15 via-[#10B981]/10 to-[#059669]/10 rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-85 transition duration-700 pointer-events-none" />
              <div className="relative rounded-[2rem] border border-[#E2EAE6] bg-[#FFFFFF] shadow-2xl overflow-hidden">
                <Image
                  src="/images/hero-saas-dashboard.jpg"
                  alt="Dazzcode SaaS Product Engineering and Analytics Dashboard"
                  width={1200}
                  height={900}
                  priority
                  className="w-full h-auto object-cover rounded-[1.9rem] transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
            </div>
          </div>

          {/* Hero Services Carousel (Accessible, Crawlable Supplementary Element) */}
          <HeroServicesCarousel />
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. TRUST / PROOF SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="py-14 border-b border-[#E2EAE6] bg-[#FFFFFF]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#52615B]">
              Engineering trusted by startups, SMEs, and growth companies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] text-center shadow-xs">
              <div className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight">4–6 Wks</div>
              <div className="text-xs font-mono text-[#52615B] mt-1 uppercase tracking-wider">MVP Launch Velocity</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] text-center shadow-xs">
              <div className="text-3xl md:text-4xl font-black text-[#059669] tracking-tight">50+</div>
              <div className="text-xs font-mono text-[#52615B] mt-1 uppercase tracking-wider">Retail POS Terminals Active</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] text-center shadow-xs">
              <div className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight">&lt; 50ms</div>
              <div className="text-xs font-mono text-[#52615B] mt-1 uppercase tracking-wider">Target API Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. WHO WE HELP */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Who We Help
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#12201B] tracking-tight mb-5">
              Software Engineering for Every Stage
            </h2>
            <p className="text-base md:text-lg text-[#52615B] leading-relaxed">
              Whether you are turning a validated idea into a working MVP or untangling technical debt in an established SaaS, we plug in where you need us most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] hover:border-[#059669]/50 hover:shadow-lg transition-all group flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F1F5F3] border border-[#E2EAE6] flex items-center justify-center text-[#059669] font-bold mb-5 font-mono">
                  01
                </div>
                <h3 className="text-lg font-bold text-[#12201B] mb-2 tracking-tight group-hover:text-[#059669] transition-colors">
                  I have an idea
                </h3>
                <p className="text-[#52615B] text-xs leading-relaxed mb-6">
                  Turn a validated concept into an investor-ready SaaS MVP in 4 to 6 weeks with clean architecture and subscription billing.
                </p>
              </div>
              <Link
                href="/services/saas-mvp-development"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#059669] hover:text-[#10B981]"
              >
                <span>Build an MVP</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] hover:border-[#059669]/50 hover:shadow-lg transition-all group flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F1F5F3] border border-[#E2EAE6] flex items-center justify-center text-[#059669] font-bold mb-5 font-mono">
                  02
                </div>
                <h3 className="text-lg font-bold text-[#12201B] mb-2 tracking-tight group-hover:text-[#059669] transition-colors">
                  I already have a SaaS
                </h3>
                <p className="text-[#52615B] text-xs leading-relaxed mb-6">
                  Add high-value features, integrate deterministic AI workflows, or scale underlying database architecture for growing customer load.
                </p>
              </div>
              <Link
                href="/services/saas-scaling"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#059669] hover:text-[#10B981]"
              >
                <span>Scale platform</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] hover:border-[#059669]/50 hover:shadow-lg transition-all group flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F1F5F3] border border-[#E2EAE6] flex items-center justify-center text-[#059669] font-bold mb-5 font-mono">
                  03
                </div>
                <h3 className="text-lg font-bold text-[#12201B] mb-2 tracking-tight group-hover:text-[#059669] transition-colors">
                  My code needs an audit
                </h3>
                <p className="text-[#52615B] text-xs leading-relaxed mb-6">
                  Inspect technical debt, slow database query plans, and security vulnerabilities to prepare for due diligence or major refactoring.
                </p>
              </div>
              <Link
                href="/services/code-audit"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#059669] hover:text-[#10B981]"
              >
                <span>Request audit</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] hover:border-[#059669]/50 hover:shadow-lg transition-all group flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F1F5F3] border border-[#E2EAE6] flex items-center justify-center text-[#059669] font-bold mb-5 font-mono">
                  04
                </div>
                <h3 className="text-lg font-bold text-[#12201B] mb-2 tracking-tight group-hover:text-[#059669] transition-colors">
                  I need custom software
                </h3>
                <p className="text-[#52615B] text-xs leading-relaxed mb-6">
                  Replace manual spreadsheets and disconnected tools with custom web applications designed around your exact business logic.
                </p>
              </div>
              <Link
                href="/services/web-application-development"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#059669] hover:text-[#10B981]"
              >
                <span>Explore software</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. WHAT WE BUILD (PERMANENT CRAWLABLE SERVICES) */}
      {/* ---------------------------------------------------- */}
      <section id="services" className="py-24 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Core Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#12201B] tracking-tight mb-5">
              Software Engineering Across the Entire Lifecycle
            </h2>
            <p className="text-base md:text-lg text-[#52615B] leading-relaxed">
              We provide full-lifecycle engineering services designed to translate technical architecture into revenue-generating business assets.
            </p>
          </div>

          {/* Alternating Crawlable Services List */}
          <div className="space-y-16">
            {/* Service 1: SaaS Development */}
            <div className="p-8 md:p-12 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-xs">
              <div className="max-w-2xl">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#059669] font-bold block mb-2">
                  01 · SaaS Development Company
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight mb-4">
                  Custom SaaS Development Services
                </h3>
                <p className="text-sm md:text-base text-[#52615B] leading-relaxed mb-6">
                  End-to-end engineering of multi-tenant SaaS platforms with strict TypeScript type-safety, robust subscription billing (Stripe, M-Pesa), team role permissions, and scalable PostgreSQL database models.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-mono text-[#52615B]">Next.js App Router</span>
                  <span className="px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-mono text-[#52615B]">Multi-Tenant RLS</span>
                  <span className="px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-mono text-[#52615B]">Stripe & M-Pesa</span>
                </div>
              </div>
              <Link href="/services/saas-development" className="shrink-0">
                <Button className="h-12 px-6 text-xs font-bold uppercase tracking-wider bg-[#059669] hover:bg-[#10B981] text-white rounded-xl shadow-xs cursor-pointer">
                  <span>Explore SaaS Development</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Service 2: SaaS MVP */}
            <div className="p-8 md:p-12 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-xs">
              <div className="max-w-2xl">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#059669] font-bold block mb-2">
                  02 · Rapid Launch Sprint
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight mb-4">
                  SaaS MVP Development (4–6 Weeks)
                </h3>
                <p className="text-sm md:text-base text-[#52615B] leading-relaxed mb-6">
                  From validated idea to live production software in weeks. We isolate your core value loop, build clean user onboarding, and launch an investor-ready asset without accumulating technical debt.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-mono text-[#52615B]">4–6 Week Launch</span>
                  <span className="px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-mono text-[#52615B]">100% IP Ownership</span>
                  <span className="px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-mono text-[#52615B]">Fixed Milestone Pricing</span>
                </div>
              </div>
              <Link href="/services/saas-mvp-development" className="shrink-0">
                <Button className="h-12 px-6 text-xs font-bold uppercase tracking-wider bg-[#059669] hover:bg-[#10B981] text-white rounded-xl shadow-xs cursor-pointer">
                  <span>Explore MVP Services</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Service 3: Code Audit */}
            <div className="p-8 md:p-12 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-xs">
              <div className="max-w-2xl">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#059669] font-bold block mb-2">
                  03 · Technical Due Diligence
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight mb-4">
                  SaaS Code Audit & Architecture Review
                </h3>
                <p className="text-sm md:text-base text-[#52615B] leading-relaxed mb-6">
                  Senior engineers inspect your codebase, profile slow database queries, evaluate security vulnerabilities against OWASP standards, and deliver an actionable technical debt remediation roadmap.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-mono text-[#52615B]">PostgreSQL EXPLAIN Plans</span>
                  <span className="px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-mono text-[#52615B]">OWASP Security Check</span>
                  <span className="px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-mono text-[#52615B]">Due Diligence Ready</span>
                </div>
              </div>
              <Link href="/services/code-audit" className="shrink-0">
                <Button className="h-12 px-6 text-xs font-bold uppercase tracking-wider bg-[#059669] hover:bg-[#10B981] text-white rounded-xl shadow-xs cursor-pointer">
                  <span>Explore Code Audit</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Service 4: SaaS Scaling */}
            <div className="p-8 md:p-12 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-xs">
              <div className="max-w-2xl">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#059669] font-bold block mb-2">
                  04 · Performance & Concurrency
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight mb-4">
                  SaaS Scaling & Performance Optimization
                </h3>
                <p className="text-sm md:text-base text-[#52615B] leading-relaxed mb-6">
                  Scale your application to handle 10,000+ active users. We eliminate N+1 queries, configure PgBouncer connection pooling, add Redis caching, and slash hosting compute bills by 40–70%.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-mono text-[#52615B]">Sub-50ms API Latency</span>
                  <span className="px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-mono text-[#52615B]">PgBouncer Pooling</span>
                  <span className="px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-mono text-[#52615B]">Zero Downtime Hotfix</span>
                </div>
              </div>
              <Link href="/services/saas-scaling" className="shrink-0">
                <Button className="h-12 px-6 text-xs font-bold uppercase tracking-wider bg-[#059669] hover:bg-[#10B981] text-white rounded-xl shadow-xs cursor-pointer">
                  <span>Explore SaaS Scaling</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Service 5: VPS Deployment */}
            <div className="p-8 md:p-12 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-xs">
              <div className="max-w-2xl">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#059669] font-bold block mb-2">
                  05 · Infrastructure & DevOps
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight mb-4">
                  VPS Server Deployment for Next.js & Docker
                </h3>
                <p className="text-sm md:text-base text-[#52615B] leading-relaxed mb-6">
                  Deploy Next.js apps, Node.js APIs, and Docker containers to hardened Linux VPS servers (Hetzner, DigitalOcean, AWS EC2) with Nginx reverse proxies, SSL automation, and GitHub Actions CI/CD.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-mono text-[#52615B]">Next.js Standalone</span>
                  <span className="px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-mono text-[#52615B]">Docker Compose</span>
                  <span className="px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-mono text-[#52615B]">Push-to-Deploy CI/CD</span>
                </div>
              </div>
              <Link href="/services/vps-deployment" className="shrink-0">
                <Button className="h-12 px-6 text-xs font-bold uppercase tracking-wider bg-[#059669] hover:bg-[#10B981] text-white rounded-xl shadow-xs cursor-pointer">
                  <span>Explore VPS Deployment</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Service 6: Web Applications */}
            <div className="p-8 md:p-12 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-xs">
              <div className="max-w-2xl">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#059669] font-bold block mb-2">
                  06 · Bespoke Business Software
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight mb-4">
                  Custom Web Application Development
                </h3>
                <p className="text-sm md:text-base text-[#52615B] leading-relaxed mb-6">
                  We engineer interactive web applications, client portals, and multi-location inventory platforms tailored to your business operations without per-seat licensing fees.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-mono text-[#52615B]">Client Portals</span>
                  <span className="px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-mono text-[#52615B]">Custom Ledgers</span>
                  <span className="px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-mono text-[#52615B]">No Per-Seat Fees</span>
                </div>
              </div>
              <Link href="/services/web-application-development" className="shrink-0">
                <Button className="h-12 px-6 text-xs font-bold uppercase tracking-wider bg-[#059669] hover:bg-[#10B981] text-white rounded-xl shadow-xs cursor-pointer">
                  <span>Explore Web Applications</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Service 7: AI Automation */}
            <div className="p-8 md:p-12 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-xs">
              <div className="max-w-2xl">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#059669] font-bold block mb-2">
                  07 · Practical Intelligence
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight mb-4">
                  AI & Business Workflow Automation
                </h3>
                <p className="text-sm md:text-base text-[#52615B] leading-relaxed mb-6">
                  Eliminate repetitive manual tasks with deterministic LLM pipelines, automated document parsing, and real-time lead qualification integrated directly with your CRM and database.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-mono text-[#52615B]">Structured JSON Outputs</span>
                  <span className="px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-mono text-[#52615B]">CRM Webhook Sync</span>
                  <span className="px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-mono text-[#52615B]">Zero Hallucination</span>
                </div>
              </div>
              <Link href="/services/ai-automation" className="shrink-0">
                <Button className="h-12 px-6 text-xs font-bold uppercase tracking-wider bg-[#059669] hover:bg-[#10B981] text-white rounded-xl shadow-xs cursor-pointer">
                  <span>Explore AI Automation</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 7. SELECTED CASE STUDIES */}
      {/* ---------------------------------------------------- */}
      <section id="selected-work" className="py-24 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Selected Work
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#12201B] tracking-tight mb-5">
              Production Software Case Studies
            </h2>
            <p className="text-base text-[#52615B]">
              Real engineering problems, architectural decisions, and verifiable production metrics.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Case Study 1: DazzPOS */}
            <div className="p-8 md:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs flex flex-col justify-between group hover:border-[#059669]/50 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#ECFDF5] text-[#059669] text-xs font-mono font-bold">
                    Retail & Offline-First POS
                  </span>
                  <span className="text-xs font-mono text-[#52615B]">Kenya & East Africa</span>
                </div>
                <h3 className="text-2xl font-black text-[#12201B] tracking-tight mb-3 group-hover:text-[#059669] transition-colors">
                  DazzPOS: Offline-First Multi-Store Point of Sale
                </h3>
                <p className="text-sm text-[#52615B] leading-relaxed mb-6">
                  Engineered an offline-first Point of Sale application supporting 50+ retail checkout counters across Kenya. Featuring sub-120ms barcode scans and instant Safaricom M-Pesa STK Push callbacks with zero downtime during network outages.
                </p>
                <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] mb-6">
                  <div>
                    <span className="text-xl font-black text-[#059669] block">99.99%</span>
                    <span className="text-[11px] font-mono text-[#52615B]">Sync Reliability</span>
                  </div>
                  <div>
                    <span className="text-xl font-black text-[#059669] block">&lt; 120ms</span>
                    <span className="text-[11px] font-mono text-[#52615B]">Barcode Latency</span>
                  </div>
                </div>
              </div>
              <Link href="/case-studies/dazzpos">
                <Button variant="outline" className="w-full h-11 text-xs font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3] rounded-xl text-[#12201B] cursor-pointer">
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Case Study 2: AI Lead Automation */}
            <div className="p-8 md:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs flex flex-col justify-between group hover:border-[#059669]/50 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#ECFDF5] text-[#059669] text-xs font-mono font-bold">
                    AI Workflow Automation
                  </span>
                  <span className="text-xs font-mono text-[#52615B]">B2B SaaS</span>
                </div>
                <h3 className="text-2xl font-black text-[#12201B] tracking-tight mb-3 group-hover:text-[#059669] transition-colors">
                  AI Lead Automation: Qualification & CRM Pipeline
                </h3>
                <p className="text-sm text-[#52615B] leading-relaxed mb-6">
                  Replaced 22 hours of weekly manual sales prospecting with an automated AI pipeline that enriches incoming company data, qualifies intent via structured LLMs, and drafts personalized sales responses in under 2 minutes.
                </p>
                <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] mb-6">
                  <div>
                    <span className="text-xl font-black text-[#059669] block">&lt; 2 Mins</span>
                    <span className="text-[11px] font-mono text-[#52615B]">Lead Response Time</span>
                  </div>
                  <div>
                    <span className="text-xl font-black text-[#059669] block">22 Hrs/Wk</span>
                    <span className="text-[11px] font-mono text-[#52615B]">Manual Time Saved</span>
                  </div>
                </div>
              </div>
              <Link href="/case-studies/ai-lead-automation">
                <Button variant="outline" className="w-full h-11 text-xs font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3] rounded-xl text-[#12201B] cursor-pointer">
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 8. WHY DAZZCODE */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              The Engineering Difference
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#12201B] tracking-tight mb-5">
              Why Founders & CTOs Work with Dazzcode
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-center justify-center text-[#059669] mb-6 shadow-xs">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-3">Institutional Code Quality</h3>
              <p className="text-sm text-[#52615B] leading-relaxed">
                Strict TypeScript compilation, automated unit/integration tests, and clean architecture built to pass investor technical due diligence.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-center justify-center text-[#059669] mb-6 shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-3">100% IP & Zero Lock-in</h3>
              <p className="text-sm text-[#52615B] leading-relaxed">
                You receive full ownership of Git repositories, database infrastructure, and deployment keys with zero proprietary license locks.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-center justify-center text-[#059669] mb-6 shadow-xs">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-3">Predictable Milestone Pricing</h3>
              <p className="text-sm text-[#52615B] leading-relaxed">
                Fixed-scope sprint deliverables with live staging deployments every Friday. No open-ended hourly billing creep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 9. HOW WE BUILD */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight">
              Problem → Decision → Build → Result
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#059669] text-white flex items-center justify-center font-mono font-bold text-xs mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Scope & Defense</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Map data models and isolate real friction points before writing any code.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#059669] text-white flex items-center justify-center font-mono font-bold text-xs mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Architecture</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Design multi-tenant PostgreSQL schemas, auth hierarchies, and payment rails.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#059669] text-white flex items-center justify-center font-mono font-bold text-xs mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Agile Sprints</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Bi-weekly production delivery with live staging previews every Friday.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#059669] text-white flex items-center justify-center font-mono font-bold text-xs mb-4">
                04
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Production Deploy</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Harden Linux VPS deployment, automated backups, and complete IP transfer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 10. TECHNOLOGY STACK */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
            Technical Stack
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight mb-10">
            Battle-Tested Modern Technologies
          </h2>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Next.js App Router",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "PostgreSQL",
              "Prisma / Drizzle",
              "Redis Caching",
              "Docker Compose",
              "Ubuntu Linux VPS",
              "Nginx Reverse Proxy",
              "Safaricom M-Pesa API",
              "Stripe Billing",
              "OpenAI GPT-4o",
              "BullMQ Queues"
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] text-xs font-mono font-medium text-[#12201B] hover:border-[#059669] hover:bg-[#ECFDF5] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* 12. TESTIMONIALS */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Client Feedback
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight">
              What Founders Say About Dazzcode
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <p className="text-sm md:text-base text-[#52615B] leading-relaxed italic mb-6">
                "Dazzcode engineered our offline-first retail system with incredible precision. Even when our internet drops, checkout cashiers keep scanning items and processing M-Pesa payments without missing a single sale."
              </p>
              <div>
                <div className="font-bold text-[#12201B]">Retail Chain Operations Director</div>
                <div className="text-xs font-mono text-[#059669]">DazzPOS Customer · Kenya</div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <p className="text-sm md:text-base text-[#52615B] leading-relaxed italic mb-6">
                "We needed a technical team to audit our Next.js codebase and optimize slow queries before raising our Seed round. Dazzcode delivered an exact remediation punch-list that cut our p95 latency by 80%."
              </p>
              <div>
                <div className="font-bold text-[#12201B]">SaaS Founder & CTO</div>
                <div className="text-xs font-mono text-[#059669]">B2B Workflow Platform · UK</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 13. FAQ SECTION */}
      {/* ---------------------------------------------------- */}
      <section id="faq" className="py-24 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight">
              SaaS Development & Engineering FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#E2EAE6] bg-[#FFFFFF] shadow-xs overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-[#12201B] hover:text-[#059669] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#52615B] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#059669]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-[#52615B] leading-relaxed border-t border-[#E2EAE6]/50 pt-4">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 14. FINAL CTA SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 bg-[#12201B] text-white relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#10B981] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <Clock className="w-3.5 h-3.5" />
            <span>Sprint Openings Available</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
            Ready to Build, Audit or Scale Your SaaS?
          </h2>

          <p className="text-base md:text-lg text-[#E2EAE6]/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a strategy review with our lead software engineers. We will inspect your requirements, eliminate execution risks, and provide transparent milestone estimates.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl transition-all shadow-[0_4px_20px_rgba(5,150,105,0.4)] cursor-pointer"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-7 text-sm font-bold uppercase tracking-wider border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-xl cursor-pointer"
              >
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}