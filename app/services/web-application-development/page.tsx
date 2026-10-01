import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Database,
  Users,
  CreditCard,
  Layers,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  BarChart3,
  MessageSquare,
  HardDrive,
  Box,
  Building2,
  Workflow,
  Sparkles,
  Sliders,
  Code2,
  Clock,
  HelpCircle,
  Smartphone,
  Server,
  Lock,
  ArrowUpRight,
  ChevronRight,
  Check,
  X,
  FileCode2,
  Cpu,
  Activity,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomWebApplicationHeroPreview from "@/components/sections/CustomWebApplicationHeroPreview";
import CustomWebApplicationLeadForm from "@/components/sections/CustomWebApplicationLeadForm";

export const metadata: Metadata = {
  title: "Custom Web Application Development Company | Dazzcode",
  description:
    "Build custom web applications designed around your business. Dazzcode develops dashboards, portals, SaaS platforms, workflow systems and custom business software in Kenya and beyond.",
  keywords: [
    "custom web application development",
    "custom web application development company",
    "custom web application development services",
    "web application development company",
    "web application development agency",
    "custom web app development",
    "custom web app development company",
    "custom web application development Kenya",
    "web application development Kenya",
    "web application development company Kenya",
    "web application developers Kenya",
    "custom software development",
    "custom software development company",
    "business web application development",
    "web based application development",
    "enterprise web application development",
    "web application development services",
    "custom business software",
    "business application development",
    "web portal development",
    "web-based software development",
    "custom dashboard development",
    "internal business application development",
    "SaaS web application development"
  ],
  alternates: {
    canonical: "https://dazzcode.com/services/web-application-development",
    languages: {
      "en": "https://dazzcode.com/services/web-application-development",
      "x-default": "https://dazzcode.com/services/web-application-development"
    }
  },
  openGraph: {
    title: "Custom Web Application Development Company | Dazzcode",
    description:
      "Build custom web applications designed around your business. Dazzcode develops dashboards, portals, SaaS platforms, workflow systems and custom business software.",
    url: "https://dazzcode.com/services/web-application-development",
    siteName: "Dazzcode",
    images: [
      {
        url: "https://dazzcode.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Custom Web Application Development Company - Dazzcode"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Application Development Company | Dazzcode",
    description:
      "Build custom web applications designed around your business workflows with modern Next.js, TypeScript, and PostgreSQL."
  }
};

const webAppFaqs = [
  {
    q: "What is custom web application development?",
    a: "Custom web application development is the process of designing, engineering, and deploying bespoke software accessed via a web browser that is built specifically to support your organization's unique operational workflows, data structures, user roles, and integrations—unlike generic off-the-shelf software."
  },
  {
    q: "What is the difference between a website and a web application?",
    a: "A marketing website primarily presents static or informational content for visitors to read. A web application is an interactive software platform that allows authenticated users to complete complex tasks, manage databases, execute transactions, process workflows, and interact with real-time data."
  },
  {
    q: "How much does custom web application development cost in Kenya?",
    a: "Custom web application pricing depends entirely on project complexity, user roles, database schema size, and third-party integrations (such as M-Pesa or accounting tools). Rather than charging open-ended hourly rates or recurring per-seat user fees, Dazzcode provides transparent, fixed-scope milestone quotes following an initial discovery session."
  },
  {
    q: "How long does it take to build a web application?",
    a: "A focused internal tool, customer portal, or business management system typically takes 4 to 8 weeks to design, develop, test, and deploy. Complex enterprise platforms or multi-tenant marketplaces may require 8 to 14 weeks."
  },
  {
    q: "Can you build a custom business management system?",
    a: "Yes. We build centralized business management systems that digitize core operations—such as multi-branch inventory, sales tracking, staff task management, document approvals, and automated financial reconciliations."
  },
  {
    q: "Can you build a customer portal?",
    a: "Yes. We engineer secure, self-service customer portals where clients can view order statuses, manage subscription profiles, submit service requests, download invoices, and execute payments."
  },
  {
    q: "Can you build an internal company application?",
    a: "Yes. We specialize in replacing error-prone spreadsheets and manual paper trails with custom internal business tools that automate data entry and enforce operational validation rules."
  },
  {
    q: "Can you build a SaaS application?",
    a: "Yes. We build subscription-based SaaS products with multi-tenant database isolation, automated Stripe and M-Pesa billing, tiered user permissions, and telemetry monitoring."
  },
  {
    q: "Can you integrate M-Pesa?",
    a: "Yes. We integrate Safaricom M-Pesa Daraja APIs—including instant STK Push (Lipa na M-Pesa Online), C2B automated webhook payment confirmation, B2C automated disbursements, and transaction status queries."
  },
  {
    q: "Can you integrate third-party APIs?",
    a: "Yes. We integrate REST and GraphQL APIs for payment processors (Stripe, PayPal), communication platforms (WhatsApp Cloud API, Africa's Talking SMS, SendGrid), accounting software (QuickBooks, Xero), and CRMs."
  },
  {
    q: "Can you add AI to a web application?",
    a: "Yes. Where artificial intelligence delivers genuine utility, we integrate OpenAI, Anthropic Claude, LangChain, or pgvector embeddings for document extraction, semantic search, automated classification, and conversational assistants."
  },
  {
    q: "Can you work with an existing application?",
    a: "Yes. We can inherit, audit, refactor, and extend existing web applications built by previous agencies or internal developers without requiring a full rewrite."
  },
  {
    q: "Can you modernize an old web application?",
    a: "Yes. We modernize legacy applications by decoupling frontend user interfaces into fast Next.js apps, restructuring backend databases, adding mobile responsiveness, and automating deployments."
  },
  {
    q: "Can you deploy the application?",
    a: "Yes. We handle production deployment on dedicated Linux VPS servers (Hetzner, DigitalOcean, AWS) using Docker Compose, Nginx reverse proxies, automated SSL certificates, and CI/CD pipelines."
  },
  {
    q: "Can you host the application on a VPS?",
    a: "Yes. We configure hardened Linux VPS environments that deliver high performance, dedicated resources, and fixed hosting costs without expensive cloud per-user markups."
  },
  {
    q: "Can you build multi-tenant applications?",
    a: "Yes. We implement robust multi-tenant architectures using PostgreSQL Row-Level Security (RLS) or schema separation to guarantee complete data isolation between customer organizations."
  },
  {
    q: "Can you build role-based access control?",
    a: "Yes. We configure granular Role-Based Access Control (RBAC) allowing you to define exact permissions for Super Admins, Branch Managers, Operational Staff, and External Customers."
  },
  {
    q: "Can you build dashboards and reporting?",
    a: "Yes. We build interactive analytics dashboards with real-time charts, date filtering, audit trails, and automated 1-click PDF/CSV export capabilities."
  },
  {
    q: "Can you build mobile-responsive applications?",
    a: "Yes. Every web application we build is mobile-responsive with touch-friendly controls and Progressive Web App (PWA) capabilities for seamless operation on smartphones and tablets."
  },
  {
    q: "Can you work with startups?",
    a: "Yes. We work closely with early-stage startups to scope and build launchable, scalable software products within practical budgets and timelines."
  },
  {
    q: "Do you work with businesses outside Kenya?",
    a: "Yes. Dazzcode is headquartered in Nairobi, Kenya, and works remotely with founders, enterprises, and agencies across the United Kingdom, United States, Europe, and East Africa under strict mutual NDAs."
  },
  {
    q: "Do you provide ongoing maintenance?",
    a: "Yes. We offer optional ongoing maintenance covering security updates, server monitoring, database backups, performance optimization, and new feature sprints."
  },
  {
    q: "Should I build custom software or use existing software?",
    a: "If an existing off-the-shelf software tool solves 90%+ of your problem affordably without forcing you to compromise your core workflow, standard software is often the right choice. Custom software development makes sense when your workflows are unique, standard tools are too restrictive, or recurring per-seat fees become prohibitive."
  }
];

export default function WebApplicationDevelopmentPage() {
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
        "@id": "https://dazzcode.com/services/web-application-development#service",
        "name": "Custom Web Application Development Company",
        "provider": {
          "@id": "https://dazzcode.com/#organization"
        },
        "description":
          "Custom web application development company building bespoke business software, customer portals, dashboards, workflow systems, and SaaS platforms in Kenya and globally.",
        "areaServed": "Global",
        "serviceType": "Custom Web Application Engineering",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "Custom Scope",
          "url": "https://dazzcode.com/services/web-application-development"
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
            "name": "Custom Web Application Development",
            "item": "https://dazzcode.com/services/web-application-development"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": webAppFaqs.map((faq) => ({
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
      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ========================================================================= */}
      {/* 6. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FAF9] to-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

        <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#52615B] mb-6">
            <Link href="/" className="hover:text-[#059669] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#059669] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#12201B] font-semibold">Web Application Development</span>
          </nav>

          {/* Main H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-[#12201B] mb-4">
            Custom Web Applications Built Around Your Business
          </h1>

          <p className="text-xl md:text-2xl font-bold text-[#059669] mb-6">
            Build a web application around the way your business actually works.
          </p>

          {/* Supporting Copy */}
          <p className="text-lg md:text-xl text-[#52615B] leading-relaxed max-w-3xl mb-8 font-normal">
            Off-the-shelf software doesn&apos;t always fit the way your business works. Dazzcode builds custom web applications that connect your workflows, data, users and systems in one place.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
            <Link href="#contact">
              <Button
                size="lg"
                className="w-full sm:w-auto h-13 px-8 text-sm font-bold uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] shadow-lg shadow-[#059669]/20 rounded-xl transition-all cursor-pointer"
              >
                <Zap className="w-4 h-4 mr-2" />
                Build My Web Application
              </Button>
            </Link>

            <Link href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-13 px-7 text-sm font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3] rounded-xl text-[#12201B] cursor-pointer"
              >
                Discuss My Project
              </Button>
            </Link>
          </div>

          {/* Supporting microcopy */}
          <div className="text-xs text-[#52615B] font-mono flex flex-wrap items-center gap-2 mb-8">
            <span className="font-semibold text-[#12201B]">Strategy</span>
            <span>•</span>
            <span className="font-semibold text-[#12201B]">UX/UI</span>
            <span>•</span>
            <span className="font-semibold text-[#12201B]">Development</span>
            <span>•</span>
            <span className="font-semibold text-[#12201B]">Integrations</span>
            <span>•</span>
            <span className="font-semibold text-[#12201B]">Deployment</span>
          </div>

          {/* 7. HERO VISUAL (Interactive Component) */}
          <CustomWebApplicationHeroPreview />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8 & 9. PROBLEM WITH OFF-THE-SHELF SOFTWARE & WHAT IS A WEB APP */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              WHY CUSTOM SOFTWARE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              When Standard Software Doesn&apos;t Fit Your Workflow
            </h2>
          </div>

          <div className="prose prose-lg text-[#52615B] leading-relaxed space-y-6 mb-12">
            <p>
              Most growing businesses reach a stage where off-the-shelf software packages become restrictive, disconnected, or prohibitively expensive. When you are forced to alter your operational processes to fit into someone else&apos;s software constraints, efficiency plummets and staff resort to scattered spreadsheets.
            </p>
            <div className="p-4 rounded-xl bg-[#F8FAF9] border-l-4 border-[#059669] text-base text-[#12201B] font-medium italic">
              &ldquo;Your software should fit your business—not force your business into someone else&apos;s workflow.&rdquo;
            </div>
            <p>
              If an existing tool already solves your problem well, off-the-shelf software is often the right choice. But when your business requires unique approval flows, multi-tier permissions, specialized integrations (like M-Pesa or internal ERPs), or proprietary reporting, custom development delivers an unmatched operational advantage.
            </p>
          </div>

          {/* Web App vs Website Distinction */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] text-[#52615B] border border-[#E2EAE6] flex items-center justify-center font-bold mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-[#12201B] mb-2">Marketing Website</h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                Primarily presents static or informational content. Visitors read articles, browse catalogs, and fill out simple contact forms.
              </p>
              <div className="text-[11px] font-mono text-[#52615B]">
                Goal: Inform & generate initial inquiries
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0]">
              <div className="w-10 h-10 rounded-xl bg-[#059669] text-white flex items-center justify-center font-bold mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-[#047857] mb-2">Custom Web Application</h3>
              <p className="text-xs text-[#065F46] leading-relaxed mb-4">
                Interactive cloud software. Authenticated users perform complex tasks, execute multi-step workflows, query databases, and manage live operations.
              </p>
              <div className="text-[11px] font-mono text-[#059669] font-bold">
                Goal: Run & automate core business operations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. WHAT WE BUILD (11 WEB APP TYPES) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              SOFTWARE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Custom Web Applications We Build
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              Tailored software systems engineered to solve concrete business and customer challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Building2,
                title: "Business Management Systems",
                desc: "Manage daily operations, users, multi-branch workflows, staff tasks, and executive reporting in one place."
              },
              {
                icon: Users,
                title: "Customer & Client Portals",
                desc: "Provide customers with secure self-service access to account data, order tracking, quotes, and official invoices."
              },
              {
                icon: BarChart3,
                title: "Admin & Executive Dashboards",
                desc: "Centralize business metrics, revenue telemetry, staff activity logs, and real-time operational alerts."
              },
              {
                icon: Workflow,
                title: "Internal Business Applications",
                desc: "Replace fragile spreadsheets and manual data entry with structured, validated relational database workflows."
              },
              {
                icon: Rocket,
                title: "SaaS Software Platforms",
                desc: "Engineer subscription-based cloud software with multi-tenancy, user tiers, and automated recurring billing."
              },
              {
                icon: Clock,
                title: "Booking & Reservation Systems",
                desc: "Automate appointment scheduling, resource allocation, customer calendars, and SMS/WhatsApp confirmations."
              },
              {
                icon: Box,
                title: "Inventory & Stock Systems",
                desc: "Track product stock movements across multiple warehouses, manage suppliers, and automate low-stock alerts."
              },
              {
                icon: CheckCircle2,
                title: "Multi-Step Workflow Engines",
                desc: "Automate document review pipelines, multi-tier management approvals, and operational handoffs."
              },
              {
                icon: Globe,
                title: "Custom B2B Marketplaces",
                desc: "Connect buyers and vendors on a tailored web platform with automated commission splits and escrow."
              },
              {
                icon: FileCode2,
                title: "Reporting & Audit Platforms",
                desc: "Centralize historical data and generate instant, exportable 1-click PDF/CSV reports and financial summaries."
              },
              {
                icon: Zap,
                title: "API-Powered Integrations",
                desc: "Connect external ERPs, CRMs, WhatsApp bots, and M-Pesa payment gateways into a unified software core."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#E2EAE6] hover:border-[#059669] transition-all shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-[#12201B] mb-2">{item.title}</h3>
                  <p className="text-xs text-[#52615B] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="#contact">
              <Button size="lg" className="bg-[#059669] text-white hover:bg-[#10B981] font-bold text-xs uppercase tracking-wider rounded-xl h-12 px-8">
                Plan My Application
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11 & 12. WHO WE BUILD FOR & SIGNS YOU NEED CUSTOM SOFTWARE */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-16">
            <div className="md:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block">
                AUDIENCE & USE CASES
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
                Custom Web Applications for Growing Businesses
              </h2>
              <p className="text-base text-[#52615B] leading-relaxed">
                Whether you are modernizing legacy operations or building a novel software product, we engineer software tailored to your stage.
              </p>

              <div className="space-y-3 font-mono text-xs text-[#12201B]">
                <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <strong className="text-[#059669] block">Startups & Founders:</strong>
                  <span>Launch launchable, scalable web products with zero vendor lock-in.</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <strong className="text-[#059669] block">SMEs & Growing Companies:</strong>
                  <span>Replace manual spreadsheets and disconnected tools with one central system.</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <strong className="text-[#059669] block">Established Enterprises:</strong>
                  <span>Build specialized portals, custom permissions, and internal workflow tools.</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <h3 className="text-xl font-bold text-[#12201B] mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#059669]" />
                Signs Your Business Needs Custom Software
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#52615B] font-mono">
                <div className="p-2.5 rounded-lg bg-white border border-[#E2EAE6]">
                  • Staff rely heavily on multiple messy spreadsheets
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#E2EAE6]">
                  • Different internal tools don&apos;t communicate
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#E2EAE6]">
                  • Employees manually copy-paste data between apps
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#E2EAE6]">
                  • Preparing weekly reports takes hours or days
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#E2EAE6]">
                  • Clients repeatedly call staff for basic order updates
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#E2EAE6]">
                  • Standard SaaS tools charge excessive per-user fees
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#E2EAE6]">
                  • You need multi-branch role permissions
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#E2EAE6]">
                  • You need custom M-Pesa & WhatsApp integrations
                </div>
              </div>

              <div className="mt-6 p-3.5 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] text-xs text-[#065F46]">
                <em>If an existing tool already solves your problem well, custom development may be unnecessary. We help you evaluate which approach makes financial and operational sense.</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13 & 14. DISCOVERY BEFORE DEVELOPMENT */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              DISCOVERY & PLANNING
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              We Start With the Business Problem, Not the Framework
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              Software engineering shouldn&apos;t start with choosing a tech stack. We map your business goals, user personas, approval workflows, and data relationships first.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] shadow-xs">
              <span className="text-xs font-mono text-[#059669] font-bold block mb-2">Step 01</span>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Understand the Users</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Who will use the application? Admins, field operators, finance teams, or external paying customers?
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] shadow-xs">
              <span className="text-xs font-mono text-[#059669] font-bold block mb-2">Step 02</span>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Map Core Workflows</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                What does each user need to accomplish step-by-step from initial action to final status completion?
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] shadow-xs">
              <span className="text-xs font-mono text-[#059669] font-bold block mb-2">Step 03</span>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Define Permissions</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Who can view, create, edit, approve, or export specific data? Ensuring strict operational segregation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] shadow-xs">
              <span className="text-xs font-mono text-[#059669] font-bold block mb-2">Step 04</span>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Identify Integrations</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                What external APIs need to connect? M-Pesa, WhatsApp, CRMs, email servers, or accounting software?
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] shadow-xs">
              <span className="text-xs font-mono text-[#059669] font-bold block mb-2">Step 05</span>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Relational Data Model</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Structure PostgreSQL tables, relations, and indexes to guarantee high-speed querying as data scales.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] shadow-xs">
              <span className="text-xs font-mono text-[#059669] font-bold block mb-2">Step 06</span>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Prioritize Release Phases</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Separate high-priority core operational features from secondary enhancements to get into production fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 15, 16, 17 & 18. TECHNOLOGY, UX/UI, BACKEND & DATABASE */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              MODERN ENGINEERING STACK
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Full-Stack Web Application Engineering
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              We select modern, type-safe technologies based on project requirements—never bloated legacy frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Frontend & UX/UI</h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                Clean, accessible, and fast interfaces built with Next.js 15, React, TypeScript, and responsive Tailwind CSS.
              </p>
              <ul className="text-[11px] font-mono text-[#12201B] space-y-1">
                <li>• Responsive on mobile & desktop</li>
                <li>• Intuitive dashboard UX/UI</li>
                <li>• Fast interactive client state</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Backend & APIs</h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                Reliable business logic engines built with Node.js, Go, or Rust with strict payload validation and error logging.
              </p>
              <ul className="text-[11px] font-mono text-[#12201B] space-y-1">
                <li>• REST & GraphQL API endpoints</li>
                <li>• Background worker queues</li>
                <li>• Automated webhook handlers</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">PostgreSQL Database</h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                Robust relational schema design with composite indexes, foreign keys, automated migrations, and connection pooling.
              </p>
              <ul className="text-[11px] font-mono text-[#12201B] space-y-1">
                <li>• Sub-20ms query latency</li>
                <li>• Multi-tenant Row-Level Security</li>
                <li>• Daily encrypted offsite backups</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 19 & 20. AUTHENTICATION, RBAC & INTEGRATIONS */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#E2EAE6] shadow-xs">
              <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
                ACCESS CONTROL
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#12201B] tracking-tight mb-4">
                Control Who Can Access What
              </h2>
              <p className="text-sm text-[#52615B] leading-relaxed mb-6">
                We implement fine-grained Role-Based Access Control (RBAC) ensuring employees, managers, and external clients only access the exact data relevant to their role:
              </p>
              <ul className="space-y-2 text-xs font-mono text-[#12201B]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Admin: Complete system configuration, financial audits & user management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Manager: Branch operations, approval pipelines & operational reports</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Staff: Task execution, inventory logging & order processing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Customer: Self-service profile, order tracking & PDF invoice download</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E2EAE6] shadow-xs">
              <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
                CONNECTED ECOSYSTEM
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#12201B] tracking-tight mb-4">
                Connect to Tools You Already Use
              </h2>
              <p className="text-sm text-[#52615B] leading-relaxed mb-6">
                We connect your custom web application to your existing communication, payment, and financial tools through robust API webhooks:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#12201B]">
                <div className="p-2.5 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">• Safaricom M-Pesa Daraja</div>
                <div className="p-2.5 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">• WhatsApp Cloud API</div>
                <div className="p-2.5 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">• QuickBooks & Xero</div>
                <div className="p-2.5 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">• Stripe & Credit Cards</div>
                <div className="p-2.5 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">• Africa&apos;s Talking SMS</div>
                <div className="p-2.5 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">• OpenAI & Claude APIs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 21 & 22. AI INTEGRATION & KENYA CAPABILITIES */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
                PRACTICAL AI
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#12201B] tracking-tight mb-4">
                Add AI Where It Creates Real Value
              </h2>
              <p className="text-sm text-[#52615B] leading-relaxed mb-6">
                AI should solve concrete workflow bottlenecks rather than just acting as a marketing gimmick. We integrate targeted AI capabilities:
              </p>
              <ul className="text-xs font-mono text-[#52615B] space-y-2">
                <li>• Automated PDF invoice & document data extraction</li>
                <li>• Natural language semantic search across business records</li>
                <li>• Automated customer lead qualification & categorization</li>
                <li>• Context-aware internal support bots linked to your knowledge base</li>
              </ul>
              <div className="mt-6 pt-4 border-t border-[#E2EAE6]">
                <Link href="/services/ai-automation" className="text-xs font-mono font-bold text-[#059669] hover:underline flex items-center gap-1">
                  Explore AI Automation Services <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
                LOCAL MARKET DEPTH
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#12201B] tracking-tight mb-4">
                Custom Web Applications for Kenyan Businesses
              </h2>
              <p className="text-sm text-[#52615B] leading-relaxed mb-6">
                Based in Nairobi, Dazzcode understands the operational realities of Kenyan enterprises and East African markets:
              </p>
              <ul className="text-xs font-mono text-[#52615B] space-y-2">
                <li>• Seamless M-Pesa STK Push and C2B automated ledger reconciliation</li>
                <li>• WhatsApp-first notification dispatch and order tracking</li>
                <li>• Multi-branch stock management across Kenyan counties</li>
                <li>• Mobile-first responsiveness and low-bandwidth optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 27. CUSTOM VS OFF-THE-SHELF COMPARISON TABLE */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              DECISION FRAMEWORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Custom Software vs Off-the-Shelf Software
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              An honest comparison to help you determine which approach fits your company&apos;s current operational stage.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-[#E2EAE6] bg-white shadow-xs">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="bg-[#12201B] text-white border-b border-[#E2EAE6]">
                  <th className="p-4 font-bold">Requirement</th>
                  <th className="p-4 font-bold text-[#A7B9B2]">Off-the-Shelf Software</th>
                  <th className="p-4 font-bold text-[#10B981]">Custom Web Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2EAE6] text-[#12201B]">
                <tr>
                  <td className="p-4 font-bold">Workflow Fit</td>
                  <td className="p-4 text-[#52615B]">Forces business into generic template</td>
                  <td className="p-4 font-bold text-[#059669]">Engineered 100% around your exact process</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Licensing Fees</td>
                  <td className="p-4 text-[#52615B]">Expensive per-seat recurring monthly taxes</td>
                  <td className="p-4 font-bold text-[#059669]">$0 per-seat fee — unlimited internal staff</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Custom Integrations</td>
                  <td className="p-4 text-[#52615B]">Limited to vendor&apos;s pre-built plugins</td>
                  <td className="p-4 font-bold text-[#059669]">Connects to any custom API, M-Pesa, ERP</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Data & Code Ownership</td>
                  <td className="p-4 text-[#52615B]">Vendor owns infrastructure & database</td>
                  <td className="p-4 font-bold text-[#059669]">You own 100% of your source code & data</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Scalability</td>
                  <td className="p-4 text-[#52615B]">Upgrades get exponentially expensive</td>
                  <td className="p-4 font-bold text-[#059669]">Runs on cost-effective, dedicated Linux VPS</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 28. DEVELOPMENT PROCESS (8 STEPS) */}
      {/* ========================================================================= */}
      <section id="process" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Our 8-Step Development Process
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              From initial business discovery to production deployment and long-term improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understand your business goals, staff, and core operational pain points." },
              { step: "02", title: "Requirements", desc: "Define precise user workflows, role permissions, and API integrations." },
              { step: "03", title: "Architecture", desc: "Design PostgreSQL schema models, backend API routes, and security boundaries." },
              { step: "04", title: "UX/UI Design", desc: "Wireframe intuitive dashboards and interactive customer portals." },
              { step: "05", title: "Development", desc: "Full-stack Next.js, Node.js, and database engineering in agile sprints." },
              { step: "06", title: "Testing", desc: "Validate permissions, mobile responsiveness, and payment webhook edge cases." },
              { step: "07", title: "Deployment", desc: "Launch to production Linux VPS with Nginx, SSL, and automated CI/CD." },
              { step: "08", title: "Improvement", desc: "Monitor usage, gather team feedback, and iterate on high-value features." }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] hover:border-[#059669] transition-all">
                <span className="text-2xl font-black font-mono text-[#059669]/30 mb-2 block">{item.step}</span>
                <h3 className="font-bold text-base text-[#12201B] mb-1">{item.title}</h3>
                <p className="text-xs text-[#52615B] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 32. WHY DAZZCODE */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              WHY PARTNER WITH DAZZCODE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Why Build Your Web Application With Dazzcode?
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              We are a dedicated software engineering partner focused on business utility and long-term maintainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Software Engineering Focus</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                We are not a generic website agency; we engineer complex, reliable web software platforms and operational backends.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Full-Stack Capability</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Frontend, backend, relational databases, Docker containerization, and production VPS deployment under one roof.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Business-First Discovery</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                We take the time to understand your operational bottlenecks before writing a single line of code.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">100% Code & Data Ownership</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                You own all intellectual property, repository code, and database records upon project completion.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Kenya-Based, Global Delivery</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Headquartered in Nairobi with deep local payment expertise while delivering enterprise software globally.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Existing-System Friendly</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                We can modernize and refactor existing applications instead of automatically proposing expensive rewrites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 33. CASE STUDIES */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              PROVEN RESULTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Custom Web Applications We&apos;ve Built
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              Real-world business systems engineered and deployed by Dazzcode.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#059669] bg-[#ECFDF5] px-2.5 py-1 rounded-full">
                  Retail Point-of-Sale & Inventory
                </span>
                <span className="text-xs font-mono text-[#52615B]">DazzPOS Platform</span>
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-2">
                Multi-Store Retail & Inventory Web Application
              </h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-6 font-mono">
                Engineered a unified web app replacing manual spreadsheets with real-time stock sync, multi-branch cashier terminals, offline resilience, and automatic M-Pesa reconciliation.
              </p>
              <div className="pt-4 border-t border-[#E2EAE6] grid grid-cols-3 gap-2 text-center font-mono">
                <div className="p-2 rounded-xl bg-white border border-[#E2EAE6]">
                  <div className="text-base font-bold text-[#059669]">100%</div>
                  <div className="text-[10px] text-[#52615B]">Stock Accuracy</div>
                </div>
                <div className="p-2 rounded-xl bg-white border border-[#E2EAE6]">
                  <div className="text-base font-bold text-[#059669]">&lt; 2s</div>
                  <div className="text-[10px] text-[#52615B]">M-Pesa STK Sync</div>
                </div>
                <div className="p-2 rounded-xl bg-white border border-[#E2EAE6]">
                  <div className="text-base font-bold text-[#059669]">0</div>
                  <div className="text-[10px] text-[#52615B]">Per-Seat Fees</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#059669] bg-[#ECFDF5] px-2.5 py-1 rounded-full">
                  Operations Portal
                </span>
                <span className="text-xs font-mono text-[#52615B]">AI Lead Automation</span>
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-2">
                Automated Lead Qualification & Enrichment Portal
              </h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-6 font-mono">
                Built an asynchronous web application with BullMQ worker queues, pgvector AI search, and automated email dispatch that replaced 20 hours/week of manual copy-paste research.
              </p>
              <div className="pt-4 border-t border-[#E2EAE6] grid grid-cols-3 gap-2 text-center font-mono">
                <div className="p-2 rounded-xl bg-white border border-[#E2EAE6]">
                  <div className="text-base font-bold text-[#059669]">12x</div>
                  <div className="text-[10px] text-[#52615B]">Processing Speed</div>
                </div>
                <div className="p-2 rounded-xl bg-white border border-[#E2EAE6]">
                  <div className="text-base font-bold text-[#059669]">20 hrs</div>
                  <div className="text-[10px] text-[#52615B]">Saved Weekly</div>
                </div>
                <div className="p-2 rounded-xl bg-white border border-[#E2EAE6]">
                  <div className="text-base font-bold text-[#059669]">100%</div>
                  <div className="text-[10px] text-[#52615B]">Automated CRM Sync</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 34. FAQ SECTION */}
      {/* ========================================================================= */}
      <section id="faq" className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Custom Web Application FAQs
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              Clear, transparent answers regarding technology, pricing, timelines, and deployment.
            </p>
          </div>

          <div className="space-y-4">
            {webAppFaqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#E2EAE6] shadow-xs">
                <h3 className="font-bold text-base text-[#12201B] mb-2 flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-[#52615B] leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 35. INTERNAL LINKING */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              ENGINEERING ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Related Software Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/saas-mvp-development" className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] hover:border-[#059669] transition-all group">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#059669] font-bold block mb-2">
                Subscription Products
              </span>
              <h3 className="font-bold text-base text-[#12201B] group-hover:text-[#059669] transition-colors mb-2 flex items-center justify-between">
                <span>SaaS MVP Development</span>
                <ArrowUpRight className="w-4 h-4 text-[#52615B] group-hover:text-[#059669]" />
              </h3>
              <p className="text-xs text-[#52615B]">
                Building a recurring subscription SaaS product? Launch your validated MVP in 4–8 weeks with multi-tenancy and Stripe billing.
              </p>
            </Link>

            <Link href="/services/saas-scaling" className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] hover:border-[#059669] transition-all group">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#059669] font-bold block mb-2">
                High Concurrency
              </span>
              <h3 className="font-bold text-base text-[#12201B] group-hover:text-[#059669] transition-colors mb-2 flex items-center justify-between">
                <span>SaaS Scaling & Performance</span>
                <ArrowUpRight className="w-4 h-4 text-[#52615B] group-hover:text-[#059669]" />
              </h3>
              <p className="text-xs text-[#52615B]">
                Is your existing web application slowing down under traffic? We profile queries, optimize caching, and eliminate bottlenecks.
              </p>
            </Link>

            <Link href="/services/vps-deployment" className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] hover:border-[#059669] transition-all group">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#059669] font-bold block mb-2">
                DevOps & Hosting
              </span>
              <h3 className="font-bold text-base text-[#12201B] group-hover:text-[#059669] transition-colors mb-2 flex items-center justify-between">
                <span>VPS Deployment Services</span>
                <ArrowUpRight className="w-4 h-4 text-[#52615B] group-hover:text-[#059669]" />
              </h3>
              <p className="text-xs text-[#52615B]">
                Deploy your Next.js, Node.js or Docker web application to a production Linux VPS with Nginx, SSL, and automated CI/CD.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 36. SUPPORTING BLOG CLUSTER */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              KNOWLEDGE BASE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Web Application Engineering Guides
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            {[
              "What Is Custom Web Application Development?",
              "Custom Web Application vs Website: What's the Difference?",
              "How Much Does Web Application Development Cost in Kenya?",
              "How Long Does It Take to Build a Web Application?",
              "Custom Software vs Off-the-Shelf Software",
              "How to Choose a Web Application Development Company",
              "How to Build a Business Management System",
              "How to Build a Customer Portal",
              "How to Build an Internal Business Application",
              "Web Application Development Process Explained",
              "How Much Does Custom Software Cost in Kenya?",
              "How to Build a Multi-Tenant Web Application",
              "How to Add M-Pesa to a Web Application",
              "How to Integrate APIs Into a Web Application",
              "How to Add AI to a Web Application",
              "Next.js Web Application Development",
              "Node.js Web Application Development",
              "How to Deploy a Web Application to a VPS",
              "How to Maintain Custom Business Software",
              "When Should You Build Custom Software?"
            ].map((title, idx) => (
              <Link
                key={idx}
                href="/blog"
                className="p-3.5 rounded-xl bg-white border border-[#E2EAE6] hover:border-[#059669] hover:text-[#059669] transition-all flex items-center justify-between group"
              >
                <span className="text-[#12201B] group-hover:text-[#059669] line-clamp-1">{title}</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#52615B] group-hover:text-[#059669] shrink-0 ml-2" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 43 & 44. FINAL CTA & INTAKE FORM */}
      {/* ========================================================================= */}
      <section id="contact" className="py-20 md:py-28 bg-[#FFFFFF]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              START YOUR PROJECT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#12201B] tracking-tight">
              Let&apos;s Build Your Web Application
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              Your business has a unique workflow. Let&apos;s build software designed around it.
            </p>
          </div>

          <CustomWebApplicationLeadForm />
        </div>
      </section>
    </div>
  );
}
