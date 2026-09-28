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
  Layers3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroProductPreview from "@/components/sections/HeroProductPreview";
import HeroServicesCarousel from "@/components/sections/HeroServicesCarousel";
import JsonLd from "@/components/seo/JsonLd";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "How much does custom SaaS development & MVP engineering cost?",
      answer:
        "Costs typically range between $3,000 to $12,000 for a focused SaaS MVP development sprint, depending on scope, multi-tenant SaaS architecture complexity, third-party APIs, and subscription billing integrations. As a dedicated SaaS development company, we provide transparent, fixed-milestone pricing with zero hidden hourly overruns.",
    },
    {
      question: "How long does SaaS MVP development take?",
      answer:
        "Most production-ready SaaS product development and MVP launches take 4 to 6 weeks. We work in rapid weekly iterations with live staging deployments every Friday, allowing you to test core SaaS application development workflows continuously.",
    },
    {
      question: "Do you handle VPS server deployment for Next.js, Node.js, and Docker?",
      answer:
        "Yes. We specialize in robust SaaS deployment, Linux server deployment, and VPS server deployment. We deploy Next.js apps to VPS with Docker VPS deployment, Node.js VPS deployment, Nginx reverse proxies, automated SSL certificates, PM2 process management, and GitHub Actions CI/CD pipelines.",
    },
    {
      question: "What is included in a Dazzcode SaaS code audit?",
      answer:
        "Our comprehensive code audit inspects application architecture, TypeScript type safety, database index bottlenecks, query efficiency (eliminating N+1 issues), API latency, security vulnerabilities (OWASP compliance), and technical debt, delivering an actionable engineering remediation roadmap.",
    },
    {
      question: "Can you build custom web applications and integrate with WooCommerce?",
      answer:
        "Yes. In addition to standalone SaaS platforms, we engineer custom web applications, operational client portals, and bidirectional WooCommerce integrations to synchronize inventories, orders, customer records, and payment webhooks.",
    },
    {
      question: "Can you help with SaaS scaling and existing product refactoring?",
      answer:
        "Yes. A core part of our SaaS development services involves auditing, refactoring, and scaling existing web applications. We optimize database pooling, modernize legacy components, integrate practical AI automation, and scale multi-tenant architectures without interrupting active paying users.",
    },
    {
      question: "Do you work with international and Kenyan businesses?",
      answer:
        "Yes. We work globally with founders and enterprises across North America, Europe, Africa, and the Middle East, while also supporting Kenyan businesses with local payment gateways (M-Pesa API integration) and offline-resilient POS systems.",
    },
    {
      question: "What technologies do you use for SaaS application development?",
      answer:
        "We engineer production platforms using Next.js (App Router), TypeScript, Tailwind CSS, PostgreSQL, Node.js, Go, Rust, Docker, and AI automation tooling (OpenAI, Claude, LangChain). We select technologies strictly for long-term scalability and business performance.",
    },
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
        description: "Dazzcode is a premier SaaS development company providing custom SaaS development services, SaaS MVP development, code audits, AI automation, and VPS server deployment.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Nairobi",
          addressCountry: "Kenya",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://dazzcode.com/#website",
        url: "https://dazzcode.com",
        name: "Dazzcode",
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
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden grid-bg bg-[#F8FAF9]">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Hero Left Content */}
            <div className="flex-1 text-left max-w-2xl">

              {/* H1 */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.02] mb-6 text-[#12201B] animate-reveal [animation-delay:100ms]">
                Build Your SaaS
              </h1>

              {/* Supporting text */}
              <p className="text-lg md:text-xl text-[#52615B] mb-8 leading-relaxed font-normal animate-reveal [animation-delay:200ms]">
                From SaaS MVP development to deep code audits, VPS server deployment, and multi-tenant SaaS scaling, Dazzcode helps startups and growing businesses build, launch, and scale serious software products.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10 animate-reveal [animation-delay:300ms]">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-14 px-8 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl transition-all shadow-[0_4px_20px_rgba(5,150,105,0.25)] cursor-pointer"
                  >
                    Start a Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="#selected-work">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-14 px-7 text-sm font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3] hover:text-[#12201B] rounded-xl text-[#12201B] shadow-xs cursor-pointer"
                  >
                    See Our Work
                  </Button>
                </Link>
              </div>

              {/* Trust checklist */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-[#52615B] animate-reveal [animation-delay:400ms]">
                <div className="flex items-center gap-1.5 text-[#059669]">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Multi-tenant SaaS</span>
                </div>
                <span className="text-[#E2EAE6]">|</span>
                <div className="flex items-center gap-1.5 text-[#059669]">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Fixed milestone sprints</span>
                </div>
                <span className="text-[#E2EAE6] hidden sm:inline">|</span>
                <div className="hidden sm:flex items-center gap-1.5 text-[#059669]">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Linux & Docker VPS deployment</span>
                </div>
              </div>
            </div>

            {/* Hero Right Visual: High-Quality SaaS Dashboard Image */}
            <div className="flex-1 w-full max-w-2xl animate-reveal [animation-delay:300ms] relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#059669]/15 via-[#10B981]/10 to-[#059669]/10 rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-85 transition duration-700 pointer-events-none" />
              <div className="relative rounded-[2rem] border border-[#E2EAE6] bg-[#FFFFFF] shadow-2xl overflow-hidden">
                <Image
                  src="/images/hero-saas-dashboard.jpg"
                  alt="Dazzcode SaaS Analytics and Product Engineering Dashboard"
                  width={1200}
                  height={900}
                  priority
                  className="w-full h-auto object-cover rounded-[1.9rem] transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
            </div>
          </div>

          {/* Hero Services Carousel */}
          <HeroServicesCarousel />
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. TRUST / CREDIBILITY SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="py-14 border-y border-[#E2EAE6] bg-[#FFFFFF]">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#52615B]">
              Trusted engineering for startups and growing businesses
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] text-center shadow-xs">
              <div className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight">6+ Years</div>
              <div className="text-xs font-mono text-[#52615B] mt-1 uppercase tracking-wider">Engineering Experience</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] text-center shadow-xs">
              <div className="text-3xl md:text-4xl font-black text-[#059669] tracking-tight">500+</div>
              <div className="text-xs font-mono text-[#52615B] mt-1 uppercase tracking-wider">Businesses Supported</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] text-center shadow-xs">
              <div className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight">SaaS & Apps</div>
              <div className="text-xs font-mono text-[#52615B] mt-1 uppercase tracking-wider">Production Software</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] text-center shadow-xs">
              <div className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight">Kenya + Global</div>
              <div className="text-xs font-mono text-[#52615B] mt-1 uppercase tracking-wider">Distributed Reach</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. WHO WE HELP (AUDIENCE IDENTIFICATION) */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 md:py-32 bg-[#F8FAF9] relative">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Who We Help
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#12201B] tracking-tight mb-5">
              Software for teams at every stage
            </h2>
            <p className="text-base md:text-lg text-[#52615B] leading-relaxed">
              Whether you are turning a validated idea into a working MVP or untangling technical debt in an established product, we plug in where you need us most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] hover:border-[#059669]/50 hover:shadow-lg transition-all group flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F1F5F3] border border-[#E2EAE6] flex items-center justify-center text-[#059669] font-bold mb-5 font-mono">
                  01
                </div>
                <h3 className="text-xl font-bold text-[#12201B] mb-3 tracking-tight group-hover:text-[#059669] transition-colors">
                  I have an idea
                </h3>
                <p className="text-[#52615B] text-sm leading-relaxed mb-6">
                  Turn a validated idea into a working MVP with clean architecture, real user workflows, and investor-ready technical standards.
                </p>
              </div>
              <Link
                href="/services/saas-development"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#059669] hover:text-[#10B981] group-hover:underline"
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
                <h3 className="text-xl font-bold text-[#12201B] mb-3 tracking-tight group-hover:text-[#059669] transition-colors">
                  I already have a SaaS
                </h3>
                <p className="text-[#52615B] text-sm leading-relaxed mb-6">
                  Add features, improve database performance, integrate practical AI, or scale your underlying architecture for growing customer load.
                </p>
              </div>
              <Link
                href="/services/saas-platform-engineering"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#059669] hover:text-[#10B981] group-hover:underline"
              >
                <span>Scale your platform</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] hover:border-[#059669]/50 hover:shadow-lg transition-all group flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F1F5F3] border border-[#E2EAE6] flex items-center justify-center text-[#059669] font-bold mb-5 font-mono">
                  03
                </div>
                <h3 className="text-xl font-bold text-[#12201B] mb-3 tracking-tight group-hover:text-[#059669] transition-colors">
                  My software needs fixing
                </h3>
                <p className="text-[#52605B] text-sm leading-relaxed mb-6">
                  Audit technical debt, slow database queries, architecture flaws, and reliability bottlenecks to stabilize your engineering foundation.
                </p>
              </div>
              <Link
                href="/services/maintenance-scaling"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#059669] hover:text-[#10B981] group-hover:underline"
              >
                <span>Request a code audit</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] hover:border-[#059669]/50 hover:shadow-lg transition-all group flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F1F5F3] border border-[#E2EAE6] flex items-center justify-center text-[#059669] font-bold mb-5 font-mono">
                  04
                </div>
                <h3 className="text-xl font-bold text-[#12201B] mb-3 tracking-tight group-hover:text-[#059669] transition-colors">
                  My business needs custom software
                </h3>
                <p className="text-[#52605B] text-sm leading-relaxed mb-6">
                  Replace manual workflows and disconnected spreadsheets with custom business software designed specifically around your operational model.
                </p>
              </div>
              <Link
                href="/services/saas-api-development"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#059669] hover:text-[#10B981] group-hover:underline"
              >
                <span>Explore custom software</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. WHAT WE BUILD (LARGE ALTERNATING SECTIONS) */}
      {/* ---------------------------------------------------- */}
      <section id="services" className="py-24 md:py-32 bg-[#FFFFFF] border-t border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              What We Build
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#12201B] tracking-tight mb-4">
              SaaS development services & product engineering
            </h2>
            <p className="text-[#52605B] text-base md:text-lg">
              As a dedicated SaaS development company, we provide end-to-end custom SaaS development, rapid MVP engineering, WooCommerce integration, and VPS server deployment.
            </p>
          </div>

          <div className="space-y-24 md:space-y-36">
            {/* SERVICE 1: Custom SaaS Development (Text LEFT, Visual RIGHT) */}
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] text-xs font-mono font-bold">
                  01 · Core Engineering
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
                  Custom SaaS Development
                </h3>
                <p className="text-base text-[#52605B] leading-relaxed">
                  Production-grade SaaS product development built from initial concept through high-volume scale. We engineer multi-tenant SaaS platforms with robust SaaS architecture, end-to-end type safety, subscription billing, and seamless SaaS scaling.
                </p>

                <ul className="space-y-3 pt-2 font-mono text-xs text-[#12201B]">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Multi-tenant SaaS architecture with organization role hierarchies</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Stripe, LemonSqueezy & M-Pesa automated subscription billing</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>SaaS scaling architecture with sub-100ms API response times</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>SOC2-ready code standards with full IP and repository ownership</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <Link
                    href="/services/saas-development"
                    className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#059669] hover:text-[#10B981] transition-colors group"
                  >
                    <span>Explore SaaS Development Services</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Visual: SaaS Multi-Tenant Management Platform */}
              <div className="lg:col-span-7 rounded-3xl border border-[#E2EAE6] bg-[#F8FAF9] p-6 sm:p-8 shadow-md">
                <div className="flex items-center justify-between border-b border-[#E2EAE6] pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                    <span className="ml-2 text-xs font-mono font-bold text-[#12201B]">saas.platform.dazzcode.cloud</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#059669] bg-[#ECFDF5] px-2.5 py-0.5 rounded-md font-bold">
                    Multi-Tenant SaaS v3.1
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5 font-mono text-center">
                  <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-2xs">
                    <div className="text-[10px] text-[#52605B] uppercase">Active Orgs</div>
                    <div className="text-xl font-black text-[#12201B] mt-0.5">142</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-2xs">
                    <div className="text-[10px] text-[#52605B] uppercase">Monthly MRR</div>
                    <div className="text-xl font-black text-[#059669] mt-0.5">$38.4k</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-2xs">
                    <div className="text-[10px] text-[#52605B] uppercase">API Uptime</div>
                    <div className="text-xl font-black text-[#12201B] mt-0.5">99.98%</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] space-y-3 font-mono text-xs shadow-2xs">
                  <div className="flex justify-between text-[#12201B] font-bold border-b border-[#E2EAE6] pb-2">
                    <span>Organization Tenant</span>
                    <span>Plan / Status</span>
                  </div>
                  <div className="flex justify-between items-center text-[#52615B]">
                    <span className="text-[#12201B] font-medium">Acme Logistics Inc.</span>
                    <span className="text-[#059669] font-bold px-2 py-0.5 rounded bg-[#ECFDF5]">Enterprise · Active</span>
                  </div>
                  <div className="flex justify-between items-center text-[#52615B]">
                    <span className="text-[#12201B] font-medium">Kipawa Retail Network</span>
                    <span className="text-[#059669] font-bold px-2 py-0.5 rounded bg-[#ECFDF5]">Pro · Active</span>
                  </div>
                  <div className="flex justify-between items-center text-[#52615B]">
                    <span className="text-[#12201B] font-medium">Nairobi Health Cloud</span>
                    <span className="text-[#059669] font-bold px-2 py-0.5 rounded bg-[#ECFDF5]">Custom · Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SERVICE 2: SaaS MVP Development (Visual LEFT, Text RIGHT) */}
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Visual: 4-Week Sprint Launch Timeline */}
              <div className="lg:col-span-7 order-2 lg:order-1 rounded-3xl border border-[#E2EAE6] bg-[#F8FAF9] p-6 sm:p-8 shadow-md">
                <div className="flex items-center justify-between border-b border-[#E2EAE6] pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-[#059669]" />
                    <span className="text-xs font-mono font-bold text-[#12201B]">4-Week SaaS MVP Launch Sprint</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#059669] bg-[#ECFDF5] px-2.5 py-0.5 rounded-md font-bold">
                    Week 4 of 4
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-center justify-between shadow-2xs">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#ECFDF5] text-[#059669] font-bold flex items-center justify-center text-[10px]">W1</span>
                      <div>
                        <span className="text-[#12201B] font-bold block">Scope Mapping & Schema Architecture</span>
                        <span className="text-[11px] text-[#52615B]">ERD, auth flows, and PRD finalized</span>
                      </div>
                    </div>
                    <span className="text-[#059669] font-bold">Completed</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-center justify-between shadow-2xs">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#ECFDF5] text-[#059669] font-bold flex items-center justify-center text-[10px]">W2</span>
                      <div>
                        <span className="text-[#12201B] font-bold block">Core SaaS Application Development</span>
                        <span className="text-[11px] text-[#52615B]">Next.js routes, PostgreSQL migrations, RBAC</span>
                      </div>
                    </div>
                    <span className="text-[#059669] font-bold">Completed</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-center justify-between shadow-2xs">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#ECFDF5] text-[#059669] font-bold flex items-center justify-center text-[10px]">W3</span>
                      <div>
                        <span className="text-[#12201B] font-bold block">Client Portal & Billing Integration</span>
                        <span className="text-[11px] text-[#52615B]">Stripe webhooks, email queues, UI polish</span>
                      </div>
                    </div>
                    <span className="text-[#059669] font-bold">Completed</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-between shadow-2xs">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#059669] text-white font-bold flex items-center justify-center text-[10px]">W4</span>
                      <div>
                        <span className="text-[#12201B] font-bold block">Production Launch & CI/CD Handoff</span>
                        <span className="text-[11px] text-[#52615B]">DNS live, smoke tested, repo transfer</span>
                      </div>
                    </div>
                    <span className="text-[#059669] font-bold">LIVE STAGING</span>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] text-xs font-mono font-bold">
                  02 · Fast-Track Launch
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
                  SaaS MVP Development
                </h3>
                <p className="text-base text-[#52615B] leading-relaxed">
                  Turn a validated idea into a focused, launch-ready MVP. We engineer clean, investor-ready SaaS product development designed to validate market demand in 4 to 6 weeks.
                </p>

                <ul className="space-y-3 pt-2 font-mono text-xs text-[#12201B]">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Strict 4–6 week SaaS MVP development sprint</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Live staging URL demo every Friday</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Institutional SaaS application development quality</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Zero vendor lock-in; you own 100% of the IP</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <Link
                    href="/services/saas-mvp-development"
                    className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#059669] hover:text-[#10B981] transition-colors group"
                  >
                    <span>Explore SaaS MVP Development</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* SERVICE 3: Web Applications & WooCommerce (Text LEFT, Visual RIGHT) */}
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] text-xs font-mono font-bold">
                  03 · Operational Systems
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
                  Web Applications & E-Commerce
                </h3>
                <p className="text-base text-[#52615B] leading-relaxed">
                  Custom web applications built around operational workflows. We replace error-prone spreadsheets with custom client portals, real-time ledgers, and seamless WooCommerce integrations.
                </p>

                <ul className="space-y-3 pt-2 font-mono text-xs text-[#12201B]">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Custom web applications tailored to business logic</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>WooCommerce API sync for inventory, orders & payment hooks</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>High-throughput RESTful & GraphQL backend APIs</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Automated reporting, PDF generation & data exports</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <Link
                    href="/services/web-application-development"
                    className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#059669] hover:text-[#10B981] transition-colors group"
                  >
                    <span>Explore Web Applications</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Visual: Operations & Warehouse Ledger Dashboard */}
              <div className="lg:col-span-7 rounded-3xl border border-[#E2EAE6] bg-[#F8FAF9] p-6 sm:p-8 shadow-md">
                <div className="flex items-center justify-between border-b border-[#E2EAE6] pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#059669]" />
                    <span className="text-xs font-mono font-bold text-[#12201B]">Enterprise Logistics & WooCommerce Sync</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#059669] bg-[#ECFDF5] px-2.5 py-0.5 rounded-md font-bold">
                    WooCommerce Live Sync
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5 font-mono text-center">
                  <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-2xs">
                    <div className="text-[10px] text-[#52605B] uppercase">SKUs Tracked</div>
                    <div className="text-xl font-black text-[#12201B] mt-0.5">10,480</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-2xs">
                    <div className="text-[10px] text-[#52605B] uppercase">Sync Accuracy</div>
                    <div className="text-xl font-black text-[#059669] mt-0.5">99.8%</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-2xs col-span-2 sm:col-span-1">
                    <div className="text-[10px] text-[#52605B] uppercase">Time Saved</div>
                    <div className="text-xl font-black text-[#059669] mt-0.5">14 hrs/wk</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] space-y-2.5 font-mono text-xs shadow-2xs">
                  <div className="flex justify-between text-[#12201B] font-bold border-b border-[#E2EAE6] pb-2">
                    <span>Recent Automated Events</span>
                    <span>Status</span>
                  </div>
                  <div className="flex justify-between items-center text-[#52615B]">
                    <span>WooCommerce order #9821 auto-decremented SKU-402</span>
                    <span className="text-[#059669] font-bold">Synced</span>
                  </div>
                  <div className="flex justify-between items-center text-[#52615B]">
                    <span>Regional Branch #02 FIFO rebalanced</span>
                    <span className="text-[#059669] font-bold">Synced</span>
                  </div>
                  <div className="flex justify-between items-center text-[#52615B]">
                    <span>Low threshold alert: SKU-9042 below 15 units</span>
                    <span className="text-amber-600 font-bold">Alert Triggered</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SERVICE 4: VPS Server Deployment (Visual LEFT, Text RIGHT) */}
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Visual: VPS Server Deployment & Docker Telemetry */}
              <div className="lg:col-span-7 order-2 lg:order-1 rounded-3xl border border-[#E2EAE6] bg-[#F8FAF9] p-6 sm:p-8 shadow-md">
                <div className="flex items-center justify-between border-b border-[#E2EAE6] pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <Server className="w-4 h-4 text-[#059669]" />
                    <span className="text-xs font-mono font-bold text-[#12201B]">Linux Server & Docker VPS Deployment</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#059669] bg-[#ECFDF5] px-2.5 py-0.5 rounded-md font-bold">
                    Next.js + Nginx + SSL
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-2xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[#12201B] font-bold">Deploy Next.js App to VPS (Ubuntu 24.04 LTS)</span>
                      <span className="text-[#059669] font-bold">Status: Active</span>
                    </div>
                    <p className="text-[11px] text-[#52615B]">
                      Docker multi-stage build, standalone Next.js runtime, reverse proxy with Caddy/Nginx, automatic SSL renewal.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-2xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[#12201B] font-bold">Node.js VPS Deployment & PM2 Cluster</span>
                      <span className="text-[#059669] font-bold">Zero-Downtime</span>
                    </div>
                    <p className="text-[11px] text-[#52615B]">
                      Cluster mode across all CPU cores with automatic crash restarts and memory leak guards.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] shadow-2xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[#059669] font-bold">CI/CD Automated GitHub Actions Pipeline</span>
                      <span className="text-[10px] text-[#059669] font-bold">Deployed in 38s</span>
                    </div>
                    <p className="text-[11px] text-[#12201B]">
                      Push to main branch triggers automated test run, container compilation, and blue-green server deployment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] text-xs font-mono font-bold">
                  04 · DevOps & Cloud Infrastructure
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
                  VPS Server Deployment
                </h3>
                <p className="text-base text-[#52615B] leading-relaxed">
                  Reliable SaaS deployment and Linux server deployment. We deploy Next.js apps to VPS hosting environments (Hetzner, DigitalOcean, AWS EC2) with Docker VPS deployment, Node.js VPS deployment, and automated CI/CD pipelines.
                </p>

                <ul className="space-y-3 pt-2 font-mono text-xs text-[#12201B]">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Deploy Next.js app to VPS with standalone Docker containers</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Node.js VPS deployment with PM2 zero-downtime cluster reload</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Linux server deployment with hardened firewall & automated SSL</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Automated GitHub Actions CI/CD for continuous SaaS deployment</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <Link
                    href="/services/saas-platform-engineering"
                    className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#059669] hover:text-[#10B981] transition-colors group"
                  >
                    <span>Explore VPS Server Deployment</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* SERVICE 5: Code Audit & AI Automation (Text LEFT, Visual RIGHT) */}
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] text-xs font-mono font-bold">
                  05 · Optimization & AI
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
                  Code Audit & AI Automation
                </h3>
                <p className="text-base text-[#52615B] leading-relaxed">
                  We perform surgical code audits to eliminate technical debt and database bottlenecks, while integrating practical AI automation workflows directly into your core business loops.
                </p>

                <ul className="space-y-3 pt-2 font-mono text-xs text-[#12201B]">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Comprehensive code audit covering architecture & security</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>PostgreSQL database indexing & query optimization</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Practical AI automation with Claude, OpenAI & LangChain</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Autonomous lead qualification and CRM synchronizations</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <Link
                    href="/services/maintenance-scaling"
                    className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#059669] hover:text-[#10B981] transition-colors group"
                  >
                    <span>Explore Code Audits & AI Automation</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Visual: AI Autonomous Pipeline Engine */}
              <div className="lg:col-span-7 rounded-3xl border border-[#E2EAE6] bg-[#F8FAF9] p-6 sm:p-8 shadow-md">
                <div className="flex items-center justify-between border-b border-[#E2EAE6] pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#059669]" />
                    <span className="text-xs font-mono font-bold text-[#12201B]">Autonomous AI Workflow Engine</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#059669] bg-[#ECFDF5] px-2.5 py-0.5 rounded-md font-bold">
                    Claude 3.5 + GPT-4o
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-2xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[#059669] font-bold">01 · Inbound Intake & Parsing</span>
                      <span className="text-[10px] text-[#52615B]">120ms</span>
                    </div>
                    <p className="text-[11px] text-[#52615B]">
                      Raw form submission & email body parsed into structured JSON schema with intent classification.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-2xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[#059669] font-bold">02 · Qualification Scoring & Enrichment</span>
                      <span className="text-[10px] text-[#52615B]">450ms</span>
                    </div>
                    <p className="text-[11px] text-[#52615B]">
                      Buyer budget, company size, and urgency evaluated; lead assigned intent score of 94/100.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] shadow-2xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[#059669] font-bold">03 · Autonomous Action & Dispatch</span>
                      <span className="text-[10px] text-[#059669] font-bold">Dispatched</span>
                    </div>
                    <p className="text-[11px] text-[#12201B]">
                      CRM deal created, personalized proposal outline drafted, and calendar booking link delivered in 45s.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. SELECTED WORK / CASE STUDIES */}
      {/* ---------------------------------------------------- */}
      <section id="selected-work" className="py-24 md:py-32 bg-[#F8FAF9] relative">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Selected Work
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#12201B] tracking-tight mb-4">
              Built for real-world problems
            </h2>
            <p className="text-[#52605B] text-base md:text-lg">
              Real software deployed to production. Here are selected projects solving real-world operational challenges.
            </p>
          </div>

          <div className="space-y-12">
            {/* Case Study 1: DazzPOS */}
            <div className="rounded-3xl border border-[#E2EAE6] bg-[#FFFFFF] overflow-hidden hover:border-[#059669]/50 shadow-xs hover:shadow-xl transition-all">
              <div className="grid lg:grid-cols-12 gap-8 p-8 md:p-12 items-center">
                <div className="lg:col-span-5 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] text-xs font-mono font-bold">
                    Retail & POS SaaS
                  </div>
                  <h3 className="text-3xl font-black text-[#12201B] tracking-tight">DazzPOS</h3>
                  <p className="text-base text-[#52605B] leading-relaxed">
                    Offline-first Point of Sale SaaS engineered for high-volume retail businesses. Keeps checkout lines moving instantly even during total internet or power cuts.
                  </p>

                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-mono text-[#12201B] font-semibold uppercase tracking-wider">Key Modules:</p>
                    <div className="flex flex-wrap gap-2">
                      {["Sales", "Inventory", "Branches", "Payments", "Reporting"].map((mod) => (
                        <span key={mod} className="text-xs font-mono px-3 py-1 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6] text-[#12201B]">
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-6">
                    <Link href="/products/dazzpos-system">
                      <Button className="bg-[#059669] text-white font-bold text-xs uppercase tracking-wider px-5 rounded-xl hover:bg-[#10B981] shadow-xs cursor-pointer">
                        View Case Study →
                      </Button>
                    </Link>
                    <span className="text-xs font-mono text-[#059669] font-medium">50+ Active Locations</span>
                  </div>
                </div>

                {/* Visual Preview */}
                <div className="lg:col-span-7 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] p-5 md:p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono border-b border-[#E2EAE6] pb-3">
                    <span className="text-[#12201B] font-bold flex items-center gap-2">
                      <Store className="w-4 h-4 text-[#059669]" />
                      DazzPOS Cashier & Branch Engine
                    </span>
                    <span className="text-[#059669] font-bold">● 100% Offline Ready</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center font-mono">
                    <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-2xs">
                      <div className="text-[10px] text-[#52605B] uppercase">Sync Latency</div>
                      <div className="text-lg font-bold text-[#12201B] mt-0.5">&lt; 30ms</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-2xs">
                      <div className="text-[10px] text-[#52605B] uppercase">Local DB</div>
                      <div className="text-lg font-bold text-[#12201B] mt-0.5">SQLite Sync</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-2xs">
                      <div className="text-[10px] text-[#52605B] uppercase">Checkout Uptime</div>
                      <div className="text-lg font-bold text-[#059669] mt-0.5">100.0%</div>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] text-xs text-[#52615B] font-mono space-y-2 shadow-2xs">
                    <div className="flex justify-between text-[#12201B] font-medium">
                      <span>Live Session: Main Counter · Branch #01</span>
                      <span className="text-[#059669] font-bold">KES 485,200 Processed Today</span>
                    </div>
                    <p className="text-[11px] text-[#52615B]">
                      Automatic background cloud reconciliations over WebSocket with zero interruption to active barcode scanning lanes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2: AI Lead Automation */}
            <div className="rounded-3xl border border-[#E2EAE6] bg-[#FFFFFF] overflow-hidden hover:border-[#059669]/50 shadow-xs hover:shadow-xl transition-all">
              <div className="grid lg:grid-cols-12 gap-8 p-8 md:p-12 items-center">
                <div className="lg:col-span-5 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] text-xs font-mono font-bold">
                    AI & Workflow Automation
                  </div>
                  <h3 className="text-3xl font-black text-[#12201B] tracking-tight">AI Lead & Sales Automation</h3>
                  <p className="text-base text-[#52605B] leading-relaxed">
                    AI-powered lead qualification and sales orchestration. Ingests inquiries, extracts intent, scores buyer readiness, and coordinates instant follow-ups.
                  </p>

                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-mono text-[#12201B] font-semibold uppercase tracking-wider">Key Capabilities:</p>
                    <div className="flex flex-wrap gap-2">
                      {["Lead Scoring", "Auto-Qualification", "CRM Sync", "Instant Routing"].map((mod) => (
                        <span key={mod} className="text-xs font-mono px-3 py-1 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6] text-[#12201B]">
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-6">
                    <Link href="/products/seo-automation-suite">
                      <Button className="bg-[#059669] text-white font-bold text-xs uppercase tracking-wider px-5 rounded-xl hover:bg-[#10B981] shadow-xs cursor-pointer">
                        View Case Study →
                      </Button>
                    </Link>
                    <span className="text-xs font-mono text-[#059669] font-medium">45s Avg Response Time</span>
                  </div>
                </div>

                {/* Visual Preview */}
                <div className="lg:col-span-7 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] p-5 md:p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono border-b border-[#E2EAE6] pb-3">
                    <span className="text-[#12201B] font-bold flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#059669]" />
                      Autonomous Inbound Intake Loop
                    </span>
                    <span className="text-[#059669] font-bold">● Active Pipeline</span>
                  </div>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-3 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] flex items-center justify-between shadow-2xs">
                      <span className="text-[#12201B]">Inbound Lead: Enterprise FinTech ($20k ARR)</span>
                      <span className="text-[#059669] font-bold">Score 96/100 · High Intent</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] flex items-center justify-between shadow-2xs">
                      <span className="text-[#12201B]">Autonomous Action: CRM deal mapped + calendar sent</span>
                      <span className="text-[#059669]">Dispatched in 42s</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] text-xs text-[#52615B] font-mono flex justify-between items-center shadow-2xs">
                    <span>Outcome: +38% Close Rate on inbound inquiries</span>
                    <span className="text-[#12201B] font-bold">Zero Lead Leakage</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 3: Enterprise Inventory Engine */}
            <div className="rounded-3xl border border-[#E2EAE6] bg-[#FFFFFF] overflow-hidden hover:border-[#059669]/50 shadow-xs hover:shadow-xl transition-all">
              <div className="grid lg:grid-cols-12 gap-8 p-8 md:p-12 items-center">
                <div className="lg:col-span-5 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] text-xs font-mono font-bold">
                    Custom Web Application
                  </div>
                  <h3 className="text-3xl font-black text-[#12201B] tracking-tight">Enterprise Inventory Platform</h3>
                  <p className="text-base text-[#52615B] leading-relaxed">
                    Custom stock management replacing spreadsheets. Connects 4 regional warehouses with live SKU tracking, automated purchase orders, and predictive restock alerts.
                  </p>

                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-mono text-[#12201B] font-semibold uppercase tracking-wider">Key Modules:</p>
                    <div className="flex flex-wrap gap-2">
                      {["Warehouse Sync", "FIFO Tracking", "Supplier POs", "Barcode Scans"].map((mod) => (
                        <span key={mod} className="text-xs font-mono px-3 py-1 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6] text-[#12201B]">
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-6">
                    <Link href="/products/inventory-manager">
                      <Button className="bg-[#059669] text-white font-bold text-xs uppercase tracking-wider px-5 rounded-xl hover:bg-[#10B981] shadow-xs cursor-pointer">
                        View Case Study →
                      </Button>
                    </Link>
                    <span className="text-xs font-mono text-[#059669] font-medium">10,000+ SKUs Tracked</span>
                  </div>
                </div>

                {/* Visual Preview */}
                <div className="lg:col-span-7 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] p-5 md:p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono border-b border-[#E2EAE6] pb-3">
                    <span className="text-[#12201B] font-bold flex items-center gap-2">
                      <Database className="w-4 h-4 text-[#059669]" />
                      Real-Time Inventory Ledger
                    </span>
                    <span className="text-[#059669] font-bold">● 4 Warehouses Synced</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center font-mono">
                    <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-2xs">
                      <div className="text-[10px] text-[#52605B] uppercase">Stock Accuracy</div>
                      <div className="text-lg font-bold text-[#059669] mt-0.5">99.8%</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-2xs">
                      <div className="text-[10px] text-[#52605B] uppercase">Discrepancies</div>
                      <div className="text-lg font-bold text-[#12201B] mt-0.5">Zero</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] col-span-2 sm:col-span-1 shadow-2xs">
                      <div className="text-[10px] text-[#52605B] uppercase">Hours Saved</div>
                      <div className="text-lg font-bold text-[#059669] mt-0.5">14 hrs/wk</div>
                    </div>
                  </div>
                  <p className="text-xs text-[#52615B] font-mono bg-[#FFFFFF] p-3 rounded-lg border border-[#E2EAE6] shadow-2xs">
                    Eliminated stockouts across regional branches with automated threshold purchase order dispatches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 6. WHY DAZZCODE (ACTUAL DIFFERENTIATION) */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 md:py-32 bg-[#FFFFFF] border-t border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Why Dazzcode
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#12201B] tracking-tight mb-4">
              Engineering with the business in mind
            </h2>
            <p className="text-[#52605B] text-base md:text-lg">
              We avoid hollow buzzwords. Here are genuine reasons founders and product leaders choose to work with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] hover:border-[#059669]/50 hover:shadow-lg transition-all shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-center justify-center text-[#059669] mb-6 shadow-xs">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#12201B] mb-3 tracking-tight">
                Product Thinking
              </h3>
              <p className="text-[#52615B] text-sm leading-relaxed">
                We consider the problem and business outcome, not only the feature request. We evaluate customer retention loops, conversion barriers, and commercial ROI.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] hover:border-[#059669]/50 hover:shadow-lg transition-all shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-center justify-center text-[#059669] mb-6 shadow-xs">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#12201B] mb-3 tracking-tight">
                Senior Engineering
              </h3>
              <p className="text-[#52615B] text-sm leading-relaxed">
                Experienced developers work directly on your product. You communicate directly with the engineers writing your code, eliminating misunderstandings.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] hover:border-[#059669]/50 hover:shadow-lg transition-all shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-center justify-center text-[#059669] mb-6 shadow-xs">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#12201B] mb-3 tracking-tight">
                Built to Scale
              </h3>
              <p className="text-[#52615B] text-sm leading-relaxed">
                Architecture designed to evolve smoothly as the product grows. We engineer normalized schemas, connection pooling, and decoupled APIs that don&apos;t collapse under load.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] hover:border-[#059669]/50 hover:shadow-lg transition-all shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-center justify-center text-[#059669] mb-6 shadow-xs">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#12201B] mb-3 tracking-tight">
                Existing Product Friendly
              </h3>
              <p className="text-[#52615B] text-sm leading-relaxed">
                We can work with existing codebases and help improve what is already there. We perform surgical audits, fix bottlenecks, and refactor incrementally with zero downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 7. HOW WE BUILD (5-STEP PROCESS) */}
      {/* ---------------------------------------------------- */}
      <section id="how-we-build" className="py-24 md:py-32 bg-[#F8FAF9] relative">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              How We Build
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#12201B] tracking-tight mb-4">
              From idea to production
            </h2>
            <p className="text-[#52605B] text-base md:text-lg">
              A transparent, disciplined path that reduces uncertainty at every phase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] relative group hover:border-[#059669]/50 hover:shadow-md transition-all shadow-xs">
              <div className="text-3xl font-black text-[#059669] mb-3 font-mono">01</div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Understand</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Learn the business, users, goals, and technical context before writing code.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] relative group hover:border-[#059669]/50 hover:shadow-md transition-all shadow-xs">
              <div className="text-3xl font-black text-[#059669] mb-3 font-mono">02</div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Plan</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Define scope, architecture, data schemas, priorities, and sprint roadmap.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] relative group hover:border-[#059669]/50 hover:shadow-md transition-all shadow-xs">
              <div className="text-3xl font-black text-[#059669] mb-3 font-mono">03</div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Build</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Develop in focused iterations with continuous feedback and Friday staging demos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] relative group hover:border-[#059669]/50 hover:shadow-md transition-all shadow-xs">
              <div className="text-3xl font-black text-[#059669] mb-3 font-mono">04</div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Launch</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Deploy to production, configure analytics, monitor, test, and measure.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] relative group hover:border-[#059669]/50 hover:shadow-md transition-all shadow-xs">
              <div className="text-3xl font-black text-[#059669] mb-3 font-mono">05</div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Scale</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Improve the product as customers, active traffic, and requirements grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 8. TECHNOLOGIES */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 bg-[#FFFFFF] border-y border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
            Technologies
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight mb-4">
            Built with modern technology
          </h2>
          <p className="text-sm md:text-base text-[#52615B] max-w-2xl mx-auto mb-10">
            We choose technology strictly based on product stability, performance, and long-term maintainability.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 max-w-4xl mx-auto">
            {[
              { name: "Next.js", desc: "React Framework" },
              { name: "TypeScript", desc: "Type Safety" },
              { name: "Node.js", desc: "Backend Services" },
              { name: "Go", desc: "High Concurrency" },
              { name: "Rust", desc: "Low Latency" },
              { name: "PostgreSQL", desc: "Relational Data" },
              { name: "Docker", desc: "Containerization" },
              { name: "AI / LLMs", desc: "OpenAI, Claude ..." },
            ].map((tech) => (
              <div
                key={tech.name}
                className="px-5 py-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] hover:border-[#059669]/50 transition-all text-left flex items-center gap-3 shadow-2xs"
              >
                <div className="w-2 h-2 rounded-full bg-[#059669]" />
                <div>
                  <span className="font-bold text-[#12201B] text-sm block">{tech.name}</span>
                  <span className="text-[10px] font-mono text-[#52615B]">{tech.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 9. WHO WE WORK WITH (USE CASES) */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 md:py-32 bg-[#F8FAF9]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Who We Work With
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#12201B] tracking-tight mb-4">
              Engineered for ambitious teams
            </h2>
            <p className="text-[#52615B] text-base md:text-lg">
              Focused software engineering across high-value business sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] hover:border-[#059669]/50 hover:shadow-md transition-all shadow-xs">
              <div className="text-xs font-mono text-[#059669] font-bold mb-2">01 · Early Stage</div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Startups</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                MVPs and new SaaS products launched quickly to validate demand and attract capital.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] hover:border-[#059669]/50 hover:shadow-md transition-all shadow-xs">
              <div className="text-xs font-mono text-[#059669] font-bold mb-2">02 · Scale-ups</div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Growing Businesses</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Custom software replacing error-prone spreadsheets and manual bottlenecks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] hover:border-[#059669]/50 hover:shadow-md transition-all shadow-xs">
              <div className="text-xs font-mono text-[#059669] font-bold mb-2">03 · Product Teams</div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">SaaS Companies</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Platform engineering, refactoring technical debt, and integrating LLM features.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] hover:border-[#059669]/50 hover:shadow-md transition-all shadow-xs">
              <div className="text-xs font-mono text-[#059669] font-bold mb-2">04 · Operations</div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Workflow Modernizers</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Replacing legacy manual procedures with structured, auditable web applications.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] hover:border-[#059669]/50 hover:shadow-md transition-all shadow-xs">
              <div className="text-xs font-mono text-[#059669] font-bold mb-2">05 · Strategic</div>
              <h3 className="text-lg font-bold text-[#12201B] mb-2">Agencies & Partners</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Senior engineering firepower and architectural guidance for complex technical deliverables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 10. TESTIMONIALS */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 md:py-32 bg-[#FFFFFF] border-t border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#12201B] tracking-tight mb-4">
              What founders & operators say
            </h2>
            <p className="text-[#52615B] text-base md:text-lg">
              Genuine feedback on real collaborations and engineering results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col justify-between hover:shadow-lg transition-all shadow-xs">
              <p className="text-sm md:text-base text-[#12201B] leading-relaxed italic mb-8">
                &ldquo;Dazzcode helped us take our internal operations from spreadsheets to a working platform that our store managers actually use every day. The rollout was seamless.&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#E2EAE6]">
                <div className="w-10 h-10 rounded-full bg-[#ECFDF5] text-[#059669] font-bold flex items-center justify-center text-xs border border-[#A7F3D0]">
                  DM
                </div>
                <div>
                  <div className="font-bold text-[#12201B] text-sm">David M.</div>
                  <div className="text-[11px] font-mono text-[#52615B]">Operations Director, Retail Group</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col justify-between hover:shadow-lg transition-all shadow-xs">
              <p className="text-sm md:text-base text-[#12201B] leading-relaxed italic mb-8">
                &ldquo;They audited our codebase, eliminated our database bottlenecks, and gave us the confidence to pitch enterprise clients without fearing server downtime.&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#E2EAE6]">
                <div className="w-10 h-10 rounded-full bg-[#ECFDF5] text-[#059669] font-bold flex items-center justify-center text-xs border border-[#A7F3D0]">
                  SN
                </div>
                <div>
                  <div className="font-bold text-[#12201B] text-sm">Sarah N.</div>
                  <div className="text-[11px] font-mono text-[#52615B]">Founder, B2B SaaS</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col justify-between hover:shadow-lg transition-all shadow-xs">
              <p className="text-sm md:text-base text-[#12201B] leading-relaxed italic mb-8">
                &ldquo;We launched our MVP in under 5 weeks. The architecture is clean, well-documented, and our internal team took over the repository with zero friction.&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#E2EAE6]">
                <div className="w-10 h-10 rounded-full bg-[#ECFDF5] text-[#059669] font-bold flex items-center justify-center text-xs border border-[#A7F3D0]">
                  MK
                </div>
                <div>
                  <div className="font-bold text-[#12201B] text-sm">Michael K.</div>
                  <div className="text-[11px] font-mono text-[#52615B]">Co-Founder, Logistics Tech</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 11. OPTIONAL ENTRY OFFER (SAAS AUDIT) */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 bg-[#F8FAF9] border-t border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="p-8 md:p-12 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] hover:border-[#059669]/40 relative overflow-hidden shadow-md">
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="space-y-4 max-w-xl">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#059669]">
                  Not sure what needs to be built or fixed?
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight">
                  Start with a SaaS Code Audit & Architecture Review
                </h3>
                <div className="text-2xl font-black text-[#059669] font-mono">
                  From $800
                </div>
                <p className="text-sm text-[#52615B] leading-relaxed">
                  We inspect your SaaS architecture, codebase health, database indexing, API latency, security vulnerabilities, and deployment pipeline, delivering a prioritized engineering remediation roadmap.
                </p>
              </div>

              <div className="shrink-0">
                <Link href="/contact?service=audit">
                  <Button
                    size="lg"
                    className="h-14 px-8 font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl shadow-xs cursor-pointer"
                  >
                    Get a Technical Review →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 12. FAQ SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 md:py-32 bg-[#FFFFFF] border-t border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#12201B] tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#52615B] text-base">
              Clear answers to common questions about working with Dazzcode.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] overflow-hidden transition-colors shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-[#12201B] hover:text-[#059669] transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base md:text-lg">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#52615B] transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180 text-[#059669]" : ""
                        }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-[#52615B] leading-relaxed border-t border-[#E2EAE6] pt-4 animate-reveal">
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
      {/* 13. FINAL CTA */}
      {/* ---------------------------------------------------- */}
      <section className="py-28 md:py-36 bg-[#ECFDF5] border-t border-[#E2EAE6] relative overflow-hidden text-center">
        <div className="container px-4 md:px-6 mx-auto max-w-3xl relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#12201B] tracking-tight leading-tight">
            Have a product to build, <br />
            fix, or scale?
          </h2>

          <p className="text-base md:text-xl text-[#52615B] max-w-xl mx-auto leading-relaxed">
            Tell us what you&apos;re working on and where you&apos;re stuck. We&apos;ll help you figure out the next step.
          </p>

          <div className="pt-2">
            <Link href="/contact">
              <Button
                size="lg"
                className="h-16 px-10 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl shadow-[0_4px_25px_rgba(5,150,105,0.25)] transition-all cursor-pointer"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

         
        </div>
      </section>
    </div>
  );
}