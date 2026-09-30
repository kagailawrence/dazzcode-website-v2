import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/seo/JsonLd";
import ContactForm from "@/components/contact-form";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  CreditCard,
  Server,
  Zap,
  ShieldCheck,
  Code2,
  HelpCircle,
  Building2,
  Sparkles,
  Layers,
  ArrowUpRight,
  TrendingUp,
  Cpu,
  RefreshCw,
  Search,
  Package,
  Clock,
  Shield,
  Send,
  MessageSquare,
  Users,
  Compass,
  Rocket,
  Settings,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SaaS Development Company in Kenya | Dazzcode",
  description:
    "Dazzcode is a SaaS development company in Kenya building custom SaaS platforms, MVPs, and AI software for businesses in Kenya.",
  keywords: [
    "SaaS development company in Kenya",
    "SaaS development",
    "SaaS development services",
    "SaaS development company",
    "SaaS development agency",
    "SaaS development services Kenya",
    "SaaS development company Kenya",
    "SaaS development agency Kenya",
    "SaaS developers Kenya",
    "SaaS development Nairobi",
    "SaaS development East Africa",
    "custom SaaS development",
    "custom SaaS development services",
    "SaaS product development",
    "SaaS product development services",
    "SaaS application development",
    "SaaS application development services",
    "SaaS app development",
    "SaaS software development",
    "SaaS web development",
    "AI SaaS development",
    "AI SaaS development company",
    "micro SaaS development",
    "SaaS MVP development",
    "custom software development",
    "SaaS product development company",
    "SaaS application development company",
  ],
  alternates: {
    canonical: "https://dazzcode.com/ke/saas-development-company",
    languages: {
      "en": "https://dazzcode.com/services/saas-development",
      "en-KE": "https://dazzcode.com/ke/saas-development-company",
      "en-GB": "https://dazzcode.com/uk/saas-development",
      "en-US": "https://dazzcode.com/us/saas-development",
      "x-default": "https://dazzcode.com/services/saas-development",
    },
  },
  openGraph: {
    title: "SaaS Development Company in Kenya | Dazzcode",
    description:
      "Turn your software idea into a reliable, scalable SaaS product. Custom SaaS engineering, MVP development, AI features, deployment, and scaling.",
    url: "https://dazzcode.com/ke/saas-development-company",
    siteName: "Dazzcode",
    images: [
      {
        url: "/images/hero-saas-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "SaaS Development Company in Kenya - Dazzcode",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Development Company in Kenya | Dazzcode",
    description:
      "Custom SaaS platforms, MVPs, and AI business software built for businesses in Kenya, East Africa, and global markets.",
    images: ["/images/hero-saas-dashboard.jpg"],
  },
};

export default function KenyaSaaSPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dazzcode.com/ke/saas-development-company#service",
        name: "SaaS Development Company in Kenya",
        description:
          "Custom SaaS development and product engineering services for startups and established businesses in Kenya and East Africa. From product strategy and MVP launch to deployment and scaling.",
        provider: {
          "@type": "LocalBusiness",
          name: "Dazzcode",
          url: "https://dazzcode.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Nairobi",
            addressCountry: "KE",
          },
        },
        areaServed: [
          { "@type": "Country", name: "Kenya" },
          { "@type": "Country", name: "Uganda" },
          { "@type": "Country", name: "Tanzania" },
          { "@type": "Country", name: "Rwanda" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "United States" },
        ],
        serviceType: "SaaS Development Services",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dazzcode.com/ke/saas-development-company#breadcrumb",
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
            name: "SaaS Development Company",
            item: "https://dazzcode.com/ke/saas-development-company",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://dazzcode.com/ke/saas-development-company#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is SaaS development?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "SaaS development is the process of planning, designing, building, deploying, and maintaining software that customers access over the internet as an ongoing service, rather than installing it on local computers.",
            },
          },
          {
            "@type": "Question",
            name: "What does a SaaS development company do?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A SaaS development company handles the complete product lifecycle: defining product scope, building the database and user interfaces, setting up customer accounts, integrating payments (such as M-Pesa or card billing), deploying to live servers, and improving the product over time.",
            },
          },
          {
            "@type": "Question",
            name: "What services does Dazzcode provide for SaaS products?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Dazzcode provides end-to-end SaaS services including product strategy, custom SaaS development, SaaS MVP development, AI SaaS integrations, payment and API integrations, production deployment, codebase audits, and ongoing scaling support.",
            },
          },
          {
            "@type": "Question",
            name: "How much does SaaS development cost in Kenya?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "SaaS development costs depend on project scope, number of features, user roles, integrations, and whether you start with a focused MVP or a full platform. Focused MVPs typically start at accessible fixed milestones, while complex multi-tenant platforms require a larger investment.",
            },
          },
          {
            "@type": "Question",
            name: "How long does it take to build a SaaS product?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A focused SaaS MVP typically takes 4 to 6 weeks from kickoff to production launch. Larger custom SaaS applications with extensive workflows and multi-role permissions generally take 8 to 14 weeks.",
            },
          },
          {
            "@type": "Question",
            name: "Can you build a custom SaaS application for our business?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We engineer custom SaaS applications tailored specifically to your company's operational workflows, business rules, client roles, and reporting requirements.",
            },
          },
          {
            "@type": "Question",
            name: "Can you build an AI SaaS product?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We build AI SaaS products that solve practical business problems, such as automated document processing, intelligent customer assistants, automated reporting, and smart lead qualification.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between SaaS development and SaaS MVP development?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "SaaS MVP development focuses on building the essential core version of a product quickly to validate demand with real users. Full SaaS development covers the broader product lifecycle, advanced feature sets, and long-term scaling.",
            },
          },
          {
            "@type": "Question",
            name: "Can you improve or fix an existing SaaS application?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We perform deep codebase audits to identify performance bottlenecks, fix software bugs, clean up technical debt, and help you add new features reliably.",
            },
          },
          {
            "@type": "Question",
            name: "Can you deploy my SaaS application to live production?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We configure production servers, domains, HTTPS security, automated database backups, and monitoring systems so your SaaS runs reliably for paying customers.",
            },
          },
          {
            "@type": "Question",
            name: "Can you help scale an existing SaaS product as users grow?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We optimize database queries, caching, and server architecture to ensure your application remains fast as transaction volumes and active users increase.",
            },
          },
          {
            "@type": "Question",
            name: "Do you work with businesses outside Kenya?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. While Dazzcode is headquartered in Nairobi, Kenya, we work remotely with founders, startups, and businesses across East Africa, the United Kingdom, the United States, and international markets.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need an MVP before building a full SaaS product?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For new ideas and unproven markets, starting with a lean MVP is usually the safest approach. If your business model and customer demand are already validated, building a more comprehensive initial product can make sense.",
            },
          },
        ],
      },
    ],
  };

  const productTypes = [
    {
      title: "Custom SaaS Platforms",
      description:
        "Software architected specifically around your unique business model, customer workflows, and operational requirements.",
    },
    {
      title: "SaaS Web Applications",
      description:
        "Interactive online software that your customers and internal teams can access securely from any modern web browser.",
    },
    {
      title: "SaaS MVPs",
      description:
        "Lean first versions designed to test your product idea, gather real feedback, and start acquiring paying customers in 4 to 6 weeks.",
      href: "/services/saas-mvp-development",
    },
    {
      title: "AI SaaS Products",
      description:
        "Software applications that use artificial intelligence to automate repetitive tasks, extract data, and assist business decision-making.",
    },
    {
      title: "Business Management SaaS",
      description:
        "Specialized platforms for inventory management, sales tracking, invoicing, team collaboration, customer portals, and reporting.",
    },
    {
      title: "Micro SaaS Products",
      description:
        "Focused, lightweight software products built to solve one specific high-value problem for a targeted niche market.",
    },
  ];

  const services = [
    {
      number: "01",
      title: "SaaS Product Strategy",
      description:
        "We help you define product goals, identify the most important customer workflows, prioritize features, and establish a clear roadmap before writing code.",
    },
    {
      number: "02",
      title: "Custom SaaS Development",
      description:
        "We build your software around how your business actually runs, ensuring your team and customers don't have to force their workflows into generic templates.",
    },
    {
      number: "03",
      title: "SaaS MVP Development",
      description:
        "Get to market fast with a lean, functional product designed to validate market demand and test key assumptions with real paying users.",
      href: "/services/saas-mvp-development",
    },
    {
      number: "04",
      title: "SaaS Application Development",
      description:
        "Full-stack development covering client dashboards, administrative panels, user permissions, database design, and real-time data sync.",
    },
    {
      number: "05",
      title: "AI SaaS Development",
      description:
        "Integrate practical AI features such as intelligent document processing, customer support assistants, automated reporting, and lead scoring.",
    },
    {
      number: "06",
      title: "SaaS Integrations & Payments",
      description:
        "Connect your SaaS with essential tools including M-Pesa Daraja STK Push, Stripe, accounting software, CRMs, and third-party APIs.",
    },
    {
      number: "07",
      title: "Production Deployment",
      description:
        "We configure hardened cloud or Linux VPS servers, domain routing, SSL certificates, database backups, and monitoring so your product is live and secure.",
    },
    {
      number: "08",
      title: "Maintenance & Continuous Improvement",
      description:
        "Keep your product dependable after launch with regular updates, performance monitoring, bug fixes, and feature expansions.",
    },
    {
      number: "09",
      title: "Codebase Audit & Technical Cleanup",
      description:
        "If you already have a slow or buggy application, we inspect the code and database to eliminate technical debt and fix stability issues.",
      href: "/services/code-audit",
    },
    {
      number: "10",
      title: "SaaS Scaling Support",
      description:
        "Optimize database queries, background tasks, and server architecture to handle increasing traffic, more users, and higher transaction volumes.",
      href: "/services/saas-scaling",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Understand",
      description: "We learn about your business goals, target customers, and the core problem the software needs to solve.",
    },
    {
      step: "02",
      title: "Plan",
      description: "We map out user roles, database structure, core features, and a realistic milestone timeline.",
    },
    {
      step: "03",
      title: "Design",
      description: "We create intuitive interface layouts and user flows so the software is easy for non-technical users to navigate.",
    },
    {
      step: "04",
      title: "Build",
      description: "Our engineers build the application using reliable, clean code and structured data models.",
    },
    {
      step: "05",
      title: "Test",
      description: "We thoroughly check important workflows, payment flows, and data security before launching.",
    },
    {
      step: "06",
      title: "Deploy",
      description: "We move the product to a live production server with automated backups and security configuration.",
    },
    {
      step: "07",
      title: "Learn",
      description: "We review customer feedback and usage patterns to identify what is working and what to improve next.",
    },
    {
      step: "08",
      title: "Scale",
      description: "We optimize and enhance the software as your customer base and transaction volumes grow.",
    },
  ];

  const whyChoosePoints = [
    {
      title: "Business-First Approach",
      description: "We focus on what the software needs to achieve for your business and customers, not just writing code.",
    },
    {
      title: "Custom Solutions",
      description: "We build around your actual workflows rather than forcing you into restrictive templates or generic off-the-shelf software.",
    },
    {
      title: "Complete Lifecycle Support",
      description: "From the initial concept through planning, development, server deployment, and future updates, we guide you at every step.",
    },
    {
      title: "Practical, Reliable Engineering",
      description: "We build clean, maintainable software that solves actual operational problems without adding unnecessary complexity.",
    },
    {
      title: "100% Intellectual Property Ownership",
      description: "You retain full ownership of all source code, database instances, and project assets from day one with zero vendor lock-in.",
    },
    {
      title: "Based in Kenya, Serving Globally",
      description: "We understand local payment systems and trade realities in East Africa while collaborating seamlessly with remote clients in the UK and US.",
    },
  ];

  const faqs = [
    {
      question: "What is SaaS development?",
      answer:
        "SaaS development is the process of planning, designing, building, deploying, and maintaining software that customers access over the internet as an ongoing service, rather than installing it on local computers.",
    },
    {
      question: "What does a SaaS development company do?",
      answer:
        "A SaaS development company handles the complete product lifecycle: defining product scope, building the database and user interfaces, setting up customer accounts, integrating payments (such as M-Pesa or card billing), deploying to live servers, and improving the product over time.",
    },
    {
      question: "What services does a SaaS development company provide?",
      answer:
        "Dazzcode provides end-to-end SaaS services including product strategy, custom SaaS development, SaaS MVP development, AI SaaS integrations, payment and API integrations, production deployment, codebase audits, and ongoing scaling support.",
    },
    {
      question: "How much does SaaS development cost?",
      answer:
        "SaaS development costs depend on project scope, number of features, user roles, integrations, and whether you start with a focused MVP or a full platform. Focused MVPs typically start at accessible fixed milestones, while complex multi-tenant platforms require a larger investment.",
    },
    {
      question: "How long does it take to build a SaaS product?",
      answer:
        "A focused SaaS MVP typically takes 4 to 6 weeks from kickoff to production launch. Larger custom SaaS applications with extensive workflows and multi-role permissions generally take 8 to 14 weeks.",
    },
    {
      question: "Can you build a custom SaaS application?",
      answer:
        "Yes. We engineer custom SaaS applications tailored specifically to your company's operational workflows, business rules, client roles, and reporting requirements.",
    },
    {
      question: "Can you build an AI SaaS product?",
      answer:
        "Yes. We build AI SaaS products that solve practical business problems, such as automated document processing, intelligent customer assistants, automated reporting, and smart lead qualification.",
    },
    {
      question: "What is the difference between SaaS development and SaaS MVP development?",
      answer:
        "SaaS MVP development focuses on building the essential core version of a product quickly to validate demand with real users. Full SaaS development covers the broader product lifecycle, advanced feature sets, and long-term scaling.",
    },
    {
      question: "Can you improve an existing SaaS application?",
      answer:
        "Yes. We perform deep codebase audits to identify performance bottlenecks, fix software bugs, clean up technical debt, and help you add new features reliably.",
    },
    {
      question: "Can you deploy my SaaS application?",
      answer:
        "Yes. We configure production servers, domains, HTTPS security, automated database backups, and monitoring systems so your SaaS runs reliably for paying customers.",
    },
    {
      question: "Can you help scale an existing SaaS product?",
      answer:
        "Yes. We optimize database queries, caching, and server architecture to ensure your application remains fast as transaction volumes and active users increase.",
    },
    {
      question: "Do you work with businesses outside Kenya?",
      answer:
        "Yes. While Dazzcode is headquartered in Nairobi, Kenya, we work remotely with founders, startups, and businesses across East Africa, the United Kingdom, the United States, and international markets.",
    },
    {
      question: "Do I need an MVP before building a SaaS product?",
      answer:
        "For new ideas and unproven markets, starting with a lean MVP is usually the safest approach. If your business model and customer demand are already validated, building a more comprehensive initial product can make sense.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAF9] text-[#12201B]">
      <JsonLd schema={structuredData} />

      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#F8FAF9] border-b border-[#E2EAE6] relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-[#52615B] mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#059669] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/ke" className="hover:text-[#059669] transition-colors">Kenya</Link>
            <span>/</span>
            <span className="text-[#12201B] font-semibold">SaaS Development</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-[#12201B] mb-4">
            SaaS Development Company in Kenya
          </h1>

          <p className="text-2xl sm:text-3xl font-bold text-[#059669] tracking-tight mb-6">
            Build, Launch and Grow Your SaaS Product
          </p>

          <p className="text-lg md:text-xl text-[#52615B] leading-relaxed max-w-3xl mb-8">
            Dazzcode helps startups, businesses, and organizations turn software ideas into reliable SaaS products. Whether you are launching a new SaaS MVP, building custom business software, adding practical AI features, or scaling an existing application, we help you plan, build, deploy, and grow.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-sm font-bold uppercase tracking-wider bg-[#059669] text-white hover:bg-[#047857] rounded-xl transition-all shadow-md cursor-pointer"
              >
                Discuss Your SaaS Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="#services">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-7 text-sm font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3] rounded-xl text-[#12201B] cursor-pointer"
              >
                See How We Build
              </Button>
            </a>
          </div>

          {/* SaaS MVP Preview Mockup */}
          <div className="mb-14 relative rounded-2xl overflow-hidden border border-[#E2EAE6] bg-[#FFFFFF] shadow-xl">
            {/* App Window Chrome */}
            <div className="px-4 py-3 bg-[#F1F5F3] border-b border-[#E2EAE6] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#EF4444]/60 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#F59E0B]/60 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#10B981]/60 inline-block" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFFFFF] border border-[#E2EAE6] text-[11px] font-mono text-[#52615B]">
                <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
                <span>app.your-saas.com/dashboard</span>
              </div>
              <span className="text-[11px] font-mono font-semibold text-[#059669]">MVP Launch Ready</span>
            </div>

            {/* Product Interface Image */}
            <div className="relative aspect-[16/9] w-full bg-[#F8FAF9]">
              <Image
                src="/images/saas-mvp-hero.jpg"
                alt="SaaS MVP development and analytics dashboard interface built by Dazzcode"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
                className="object-cover object-top"
              />
            </div>

            {/* Floating Info Overlay */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-[#F8FAF9] via-[#FFFFFF] to-[#F8FAF9] border-t border-[#E2EAE6] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 font-medium text-[#12201B]">
                <span className="p-1.5 rounded-lg bg-[#059669]/10 text-[#059669]">
                  <Sparkles className="w-4 h-4" />
                </span>
                <span>From Idea to Validated MVP in <strong>4–6 Weeks</strong></span>
              </div>
              <Link
                href="/services/saas-mvp-development"
                className="inline-flex items-center gap-1 text-[#059669] font-bold hover:underline"
              >
                <span>Learn about SaaS MVP Development</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Value Journey Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-[#E2EAE6] text-xs font-mono text-[#52615B]">
            <div>
              <span className="text-[#059669] font-bold block">01 · Strategy</span>
              <span>Idea & Scope Definition</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">02 · Build</span>
              <span>Clean, Custom Software</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">03 · Launch</span>
              <span>Live Server Deployment</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">04 · Scale</span>
              <span>Performance & Growth</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BUSINESS PROBLEM SECTION */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              The Reality of Software Products
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              Building SaaS Is More Than Writing Software
            </h2>
            <p className="text-base sm:text-lg text-[#52615B] leading-relaxed">
              Writing code is only one part of building a successful SaaS product. For software to succeed in the market, it must solve a genuine business problem and provide a smooth, reliable experience for everyday users.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-2">
              <h3 className="font-bold text-[#12201B] text-base">Clear Business Purpose</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Solving a specific pain point so users understand the product&apos;s value immediately.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-2">
              <h3 className="font-bold text-[#12201B] text-base">Intuitive User Experience</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Simple interfaces that your customers and staff can learn within minutes without frustration.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-2">
              <h3 className="font-bold text-[#12201B] text-base">Secure User Accounts</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Safe login systems, team workspaces, and distinct roles for administrators and staff.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-2">
              <h3 className="font-bold text-[#12201B] text-base">Seamless Payments</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Automated subscription billing, M-Pesa STK Push workflows, and credit card processing.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-2">
              <h3 className="font-bold text-[#12201B] text-base">Reliable Deployment</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Stable production servers with automated backups, monitoring, and fast load speeds.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-2">
              <h3 className="font-bold text-[#12201B] text-base">Room to Grow</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                A clean software structure so you can add features as your customer base expands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT IS SAAS DEVELOPMENT? */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              Understanding the Basics
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              What Is SaaS Development?
            </h2>
            <div className="space-y-4 text-base text-[#52615B] leading-relaxed">
              <p>
                <strong>SaaS (Software as a Service)</strong> is software that customers access over the internet through a web browser or mobile app, rather than installing and maintaining it on their own computers.
              </p>
              <p>
                <strong>SaaS development</strong> is the end-to-end process of planning, designing, building, launching, and maintaining this software as an online service that users can subscribe to or access continuously.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#12201B] font-bold mb-4">
              Common Examples of SaaS Products
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs text-[#52615B]">
              <span className="p-3 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">CRM Platforms</span>
              <span className="p-3 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">Accounting Software</span>
              <span className="p-3 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">Point of Sale (POS)</span>
              <span className="p-3 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">Inventory Systems</span>
              <span className="p-3 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">Booking Platforms</span>
              <span className="p-3 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">Customer Portals</span>
              <span className="p-3 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">HR & Staff Software</span>
              <span className="p-3 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">AI Business Tools</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TYPES OF SAAS PRODUCTS WE BUILD */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              Product Categories
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              SaaS Products We Build
            </h2>
            <p className="text-base text-[#52615B] leading-relaxed">
              We engineer different types of SaaS applications based on your market, timeline, and business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productTypes.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col justify-between hover:border-[#059669]/40 transition duration-200"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#12201B] mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#52615B] leading-relaxed">{item.description}</p>
                </div>
                {item.href && (
                  <div className="mt-4 pt-3 border-t border-[#E2EAE6]">
                    <Link
                      href={item.href}
                      className="text-xs font-mono font-bold text-[#059669] hover:underline inline-flex items-center gap-1"
                    >
                      Explore MVP services <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SAAS DEVELOPMENT SERVICES (CORE SECTION) */}
      <section id="services" className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              End-to-End Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              SaaS Development Services
            </h2>
            <p className="text-base sm:text-lg text-[#52615B] leading-relaxed">
              We provide full-lifecycle SaaS engineering services to take your product from concept to a live, growing business asset.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((srv) => (
              <div
                key={srv.title}
                className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs flex flex-col justify-between hover:border-[#059669]/40 transition duration-200"
              >
                <div>
                  <span className="text-xs font-mono text-[#059669] font-bold block mb-2">
                    {srv.number} · Service
                  </span>
                  <h3 className="text-xl font-bold text-[#12201B] mb-3">{srv.title}</h3>
                  <p className="text-sm text-[#52615B] leading-relaxed">{srv.description}</p>
                </div>
                {srv.href && (
                  <div className="mt-6 pt-4 border-t border-[#E2EAE6]">
                    <Link
                      href={srv.href}
                      className="text-xs font-mono font-bold text-[#059669] hover:underline inline-flex items-center gap-1"
                    >
                      Learn more about this service <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CUSTOM SAAS DEVELOPMENT */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] block">
                Tailored for Your Workflow
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
                Custom SaaS Development for Your Business
              </h2>
              <p className="text-base text-[#52615B] leading-relaxed">
                Generic software often forces companies to change their daily operations just to fit a pre-made template. Custom SaaS development solves this by building software around how your business actually runs.
              </p>
              <p className="text-base font-semibold text-[#12201B] border-l-4 border-[#059669] pl-4 py-1">
                Your business does not have to change its entire workflow just to fit generic software.
              </p>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#12201B] font-bold pb-2 border-b border-[#E2EAE6]">
                What We Build Around:
              </h3>
              <ul className="space-y-2 text-xs text-[#52615B]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Your specific business processes & rules</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Role-based permissions for staff & managers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Local & international payment gateways</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Custom reporting & automated notifications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SAAS PRODUCT DEVELOPMENT (PROCESS) */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-14 text-center mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              Step-by-Step Delivery
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              SaaS Product Development From Idea to Launch
            </h2>
            <p className="text-base text-[#52615B] leading-relaxed">
              We follow a structured 8-step journey to ensure your software is delivered on schedule with clear milestones.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] space-y-2 shadow-xs"
              >
                <span className="w-9 h-9 rounded-xl bg-[#ECFDF5] text-[#059669] font-mono font-bold text-sm flex items-center justify-center mb-3">
                  {step.step}
                </span>
                <h3 className="font-bold text-[#12201B] text-base">{step.title}</h3>
                <p className="text-xs text-[#52615B] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. AI SAAS DEVELOPMENT */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              Practical Intelligence
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              AI SaaS Development
            </h2>
            <p className="text-base text-[#52615B] leading-relaxed">
              We focus on using AI where it provides a clear business benefit—reducing manual work, automating repetitive tasks, improving data accuracy, and creating a smoother customer experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-2">
              <h3 className="font-bold text-[#12201B] text-base">Automated Document Parsing</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Extracting structured data from receipts, invoices, and contracts into your database.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-2">
              <h3 className="font-bold text-[#12201B] text-base">Intelligent Customer Support</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Automated assistants that resolve common client questions using your business rules.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-2">
              <h3 className="font-bold text-[#12201B] text-base">Automated Lead Qualification</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Scoring inbound inquiries and routing high-value prospects directly to your sales team.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-2">
              <h3 className="font-bold text-[#12201B] text-base">Business Data Insights</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Turning complex sales and inventory numbers into clear weekly summary reports.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-2">
              <h3 className="font-bold text-[#12201B] text-base">Smart Recommendations</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Recommending relevant items, stock reorder alerts, and user action prompts.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-2">
              <h3 className="font-bold text-[#12201B] text-base">Workflow Automation</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Connecting multi-step business actions together without human bottlenecks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. MVP VS FULL SAAS PRODUCT */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              Strategic Decision
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              Should You Start With an MVP or Build the Full Product?
            </h2>
            <p className="text-base text-[#52615B] leading-relaxed">
              Choosing between a focused MVP and a comprehensive product depends on your market validation and business situation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] space-y-4 shadow-xs">
              <div className="inline-block px-3 py-1 rounded-full bg-[#ECFDF5] text-[#059669] text-xs font-mono font-bold">
                SaaS MVP (Minimum Viable Product)
              </div>
              <h3 className="text-xl font-bold text-[#12201B]">Best When Testing a New Idea</h3>
              <ul className="space-y-2 text-xs text-[#52615B]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>You need to validate market demand before major investment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>You want to launch quickly (4–6 weeks)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>You want real customer feedback to shape future features</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/services/saas-mvp-development"
                  className="text-xs font-mono font-bold text-[#059669] hover:underline inline-flex items-center gap-1"
                >
                  Explore MVP Development Services →
                </Link>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] space-y-4 shadow-xs">
              <div className="inline-block px-3 py-1 rounded-full bg-[#F1F5F3] text-[#12201B] text-xs font-mono font-bold">
                Full SaaS Platform
              </div>
              <h3 className="text-xl font-bold text-[#12201B]">Best When Demand Is Proven</h3>
              <ul className="space-y-2 text-xs text-[#52615B]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Your business model and customer base already exist</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>You are replacing an existing legacy operational system</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>The platform requires broad multi-tier permissions from day one</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="text-xs font-mono font-bold text-[#059669] hover:underline inline-flex items-center gap-1"
                >
                  Discuss Full Platform Scope →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. ALREADY HAVE A SAAS PRODUCT? */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="p-8 md:p-12 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] block">
              Existing Applications
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Already Have a SaaS Product?
            </h2>
            <p className="text-base sm:text-lg text-[#52615B] leading-relaxed max-w-3xl">
              If your current application is running slowly, experiencing frequent bugs, difficult to maintain, or struggling with new feature releases, you don&apos;t always need a costly rewrite.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm font-mono font-bold text-[#12201B]">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-[#E2EAE6]">Audit</span>
              <span>→</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-[#E2EAE6]">Fix</span>
              <span>→</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-[#E2EAE6]">Improve</span>
              <span>→</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-[#E2EAE6]">Deploy</span>
              <span>→</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]">Scale</span>
            </div>
            <div className="pt-2">
              <Link href="/services/code-audit">
                <Button variant="outline" className="border-[#E2EAE6] bg-white hover:bg-[#F1F5F3] font-bold text-xs uppercase tracking-wider cursor-pointer">
                  Learn About Code Audits & Cleanup
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11. DEPLOYMENT SECTION */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              Production Readiness
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              From Development to a Live SaaS Product
            </h2>
            <p className="text-base text-[#52615B] leading-relaxed">
              Building the software is only part of the journey. We configure live production environments so your SaaS runs smoothly for paying customers with zero unexpected surprises.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs text-[#52615B]">
            <div className="p-5 rounded-xl bg-white border border-[#E2EAE6] space-y-1">
              <strong className="text-[#12201B] block">Server Deployment</strong>
              <span>Optimized Linux VPS or cloud server setup.</span>
            </div>
            <div className="p-5 rounded-xl bg-white border border-[#E2EAE6] space-y-1">
              <strong className="text-[#12201B] block">Domains & HTTPS</strong>
              <span>Automated SSL certificate security configuration.</span>
            </div>
            <div className="p-5 rounded-xl bg-white border border-[#E2EAE6] space-y-1">
              <strong className="text-[#12201B] block">Database Backups</strong>
              <span>Daily offsite automated backups to protect your data.</span>
            </div>
            <div className="p-5 rounded-xl bg-white border border-[#E2EAE6] space-y-1">
              <strong className="text-[#12201B] block">Health Monitoring</strong>
              <span>Uptime tracking and rapid issue response.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 12. SAAS SCALING */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              Growing With Your Business
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              What Happens When Your SaaS Starts Growing?
            </h2>
            <p className="text-base text-[#52615B] leading-relaxed">
              As customer numbers and daily transactions increase, software needs adjustment to prevent slow pages or server bottlenecks. Dazzcode helps optimize database queries and server capacity so your product remains fast as it grows.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-[#12201B] text-base">Need help optimizing an active SaaS?</h3>
              <p className="text-xs text-[#52615B]">We inspect database performance and server loads to eliminate bottlenecks.</p>
            </div>
            <Link href="/services/saas-scaling">
              <Button variant="outline" className="border-[#E2EAE6] bg-white font-bold text-xs uppercase cursor-pointer shrink-0">
                View Scaling Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 13. WHY DAZZCODE? */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              Our Commitment
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              Why Businesses Choose Dazzcode for SaaS Development
            </h2>
            <p className="text-base sm:text-lg text-[#52615B] leading-relaxed">
              We focus on delivering dependable business software through practical engineering and transparent communication.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePoints.map((pt) => (
              <div
                key={pt.title}
                className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] space-y-2 shadow-xs"
              >
                <h3 className="font-bold text-[#12201B] text-base">{pt.title}</h3>
                <p className="text-xs text-[#52615B] leading-relaxed">{pt.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. LOCAL, REGIONAL & GLOBAL FOOTPRINT */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl space-y-12">
          {/* Kenya Focus */}
          <div className="p-8 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-3">
            <span className="text-xs font-mono font-bold uppercase text-[#059669]">Local Context</span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#12201B]">
              SaaS Development Company in Kenya
            </h2>
            <p className="text-sm text-[#52615B] leading-relaxed">
              Headquartered in Nairobi, Dazzcode understands the operational realities of Kenyan businesses—including M-Pesa Daraja STK Push workflows, mobile money reconciliations, intermittent internet handling, and local trade workflows.
            </p>
          </div>

          {/* East Africa & International */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-2">
              <h3 className="text-lg font-bold text-[#12201B]">SaaS for East Africa</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                We work remotely with businesses across Kenya, Uganda, Tanzania, and Rwanda, building software tailored for regional commerce and mobile money.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-2">
              <h3 className="text-lg font-bold text-[#12201B]">Global Client Delivery</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                We collaborate smoothly with remote founders and businesses in the UK, US, and international markets seeking dedicated software engineering partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 15. TECHNOLOGY & OUTCOMES */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              Reliable Tools
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              Technology We Use to Build SaaS Products
            </h2>
            <p className="text-base text-[#52615B] leading-relaxed">
              We select software tools based on business outcomes: fast response times, strong data security, simple maintenance, and predictable server costs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-[#52615B]">
            <div className="p-4 rounded-xl bg-white border border-[#E2EAE6]">
              <span className="text-[#059669] font-bold block">Next.js & React</span>
              <span>Fast user interfaces</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E2EAE6]">
              <span className="text-[#059669] font-bold block">TypeScript</span>
              <span>Reliable, error-checked code</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E2EAE6]">
              <span className="text-[#059669] font-bold block">PostgreSQL</span>
              <span>Secure, structured databases</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E2EAE6]">
              <span className="text-[#059669] font-bold block">Linux VPS & Cloud</span>
              <span>Low-cost, reliable hosting</span>
            </div>
          </div>
        </div>
      </section>

      {/* 16. COST SECTION */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] block">
            Transparent Investment
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
            How Much Does SaaS Development Cost?
          </h2>
          <p className="text-base text-[#52615B] leading-relaxed max-w-2xl mx-auto">
            SaaS development costs depend on project scope: the number of user roles, workflow complexity, payment gateways, and custom integrations. A small, focused MVP requires a very different investment from a large enterprise platform.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <Button size="lg" className="bg-[#059669] hover:bg-[#047857] text-white font-bold text-sm uppercase px-8 h-12 rounded-xl cursor-pointer">
                Discuss Your SaaS Project Scope
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 17. FAQS */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-6 rounded-2xl bg-white border border-[#E2EAE6] space-y-2 text-left"
              >
                <h3 className="text-base sm:text-lg font-bold text-[#12201B]">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-[#52615B] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 18. FINAL CTA & LEAD FORM */}
      <section className="py-20 md:py-28 bg-[#FFFFFF]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECFDF5] border border-[#059669]/20 text-[#059669] text-xs font-mono font-semibold">
                <span>Start Your SaaS Journey</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#12201B] tracking-tight leading-tight">
                Have a SaaS Product in Mind?
              </h2>
              <p className="text-base text-[#52615B] leading-relaxed">
                Whether you are validating a new idea, building a full custom platform, adding AI features, or scaling an existing application, we are ready to help you plan the next step.
              </p>
              <div className="space-y-2 text-xs text-[#52615B]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Direct response from senior software engineers within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Clear, fixed-milestone sprint pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>100% intellectual property ownership</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ContactForm />
            </div>
          </div>

          {/* Internal Links Footer */}
          <div className="mt-16 pt-8 border-t border-[#E2EAE6] text-center">
            <p className="text-xs font-mono uppercase text-[#52615B] mb-3">Related Software Services:</p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-[#52615B]">
              <Link href="/services/saas-mvp-development" className="hover:text-[#059669] underline">
                SaaS MVP Development
              </Link>
              <span>·</span>
              <Link href="/services/code-audit" className="hover:text-[#059669] underline">
                Code Audits
              </Link>
              <span>·</span>
              <Link href="/services/saas-scaling" className="hover:text-[#059669] underline">
                SaaS Scaling
              </Link>
              <span>·</span>
              <Link href="/case-studies/dazzpos" className="hover:text-[#059669] underline">
                POS Case Study
              </Link>
              <span>·</span>
              <Link href="/contact" className="hover:text-[#059669] underline">
                Contact Dazzcode
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
