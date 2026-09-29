import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/seo/JsonLd";
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
  PhoneCall,
  ArrowUpRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "SaaS Development Company in Kenya | Dazzcode",
  description: "Dazzcode is a premier SaaS development company in Kenya. We engineer multi-tenant SaaS platforms with M-Pesa Daraja API integration, Next.js architecture, and institutional code quality for Kenyan startups and enterprises.",
  keywords: [
    "SaaS development company Kenya",
    "SaaS development Kenya",
    "SaaS developers Kenya",
    "SaaS development services Kenya",
    "SaaS application development Kenya",
    "M-Pesa SaaS integration",
    "Nairobi software engineering"
  ],
  alternates: {
    canonical: "https://dazzcode.com/kenya/saas-development-company",
    languages: {
      "en": "https://dazzcode.com/services/saas-development",
      "en-KE": "https://dazzcode.com/kenya/saas-development-company",
      "en-GB": "https://dazzcode.com/uk/saas-development",
      "en-US": "https://dazzcode.com/us/saas-development",
      "x-default": "https://dazzcode.com/services/saas-development",
    },
  },
  openGraph: {
    title: "SaaS Development Company in Kenya | Dazzcode",
    description: "Build, launch, and scale your SaaS in Kenya. Institutional engineering, multi-tenant architecture, and native M-Pesa API integration.",
    url: "https://dazzcode.com/kenya/saas-development-company",
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
};

export default function KenyaSaaSPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dazzcode.com/kenya/saas-development-company#service",
        name: "SaaS Development Company in Kenya",
        description: "Custom SaaS development and engineering services for Kenyan startups and enterprises, featuring M-Pesa automated subscription billing, multi-tenant database isolation, and scalable Next.js architecture.",
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
        serviceType: "SaaS development company Kenya",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dazzcode.com/kenya/saas-development-company#breadcrumb",
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
            item: "https://dazzcode.com/kenya",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "SaaS Development Company",
            item: "https://dazzcode.com/kenya/saas-development-company",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://dazzcode.com/kenya/saas-development-company#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can you integrate M-Pesa into a SaaS recurring subscription model?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We integrate Safaricom's Daraja 2.0 API with STK Push for initial checkout, automated webhook listeners for real-time payment confirmation, and automated renewal reminder prompts via SMS or WhatsApp.",
            },
          },
          {
            "@type": "Question",
            name: "How much does it cost to build a SaaS application in Kenya?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "SaaS MVP development for Kenyan startups typically ranges from KES 400,000 to KES 1,200,000 depending on features, multi-tenancy complexity, and payment gateway requirements.",
            },
          },
          {
            "@type": "Question",
            name: "Where should Kenyan SaaS applications be hosted for low latency?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We deploy applications using global Edge CDNs with localized edge caches in Nairobi, or configure high-performance Linux VPS instances in Johannesburg or European regions (Hetzner/AWS) delivering sub-80ms response times across Kenya.",
            },
          },
          {
            "@type": "Question",
            name: "Do we own 100% of the code and intellectual property?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Dazzcode delivers 100% intellectual property ownership to your company upon milestone completion. You receive full GitHub repository access and database keys with zero vendor lock-in.",
            },
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
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-[#52615B] mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#059669] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/kenya" className="hover:text-[#059669] transition-colors">Kenya</Link>
            <span>/</span>
            <span className="text-[#12201B] font-semibold">SaaS Development</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECFDF5] border border-[#059669]/20 text-[#059669] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <Building2 className="w-3.5 h-3.5" />
            <span>Nairobi Tech Ecosystem</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-[#12201B] mb-6">
            SaaS Development Company in Kenya
          </h1>

          <p className="text-lg md:text-xl text-[#52615B] leading-relaxed max-w-3xl mb-8">
            We engineer institutional-grade SaaS platforms for Kenyan startups, scaleups, and SMEs. Combining modern cloud architecture (Next.js, TypeScript, PostgreSQL) with native Kenyan payment rails (M-Pesa STK Push, Pesapal) and offline-resilient capabilities.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl transition-all shadow-[0_4px_20px_rgba(5,150,105,0.25)] cursor-pointer"
              >
                Start Your SaaS in Kenya
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/case-studies/dazzpos">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-7 text-sm font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3] rounded-xl text-[#12201B] shadow-xs cursor-pointer"
              >
                View Kenya Case Study
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#E2EAE6] text-xs font-mono text-[#52615B]">
            <div>
              <span className="text-[#059669] font-bold block">HQ Nairobi</span>
              <span>Local Engineering Team</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">Daraja 2.0</span>
              <span>M-Pesa STK & C2B</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">4–6 Weeks</span>
              <span>Rapid MVP Launch</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">100% IP</span>
              <span>Full Code Ownership</span>
            </div>
          </div>
        </div>
      </section>

      {/* Kenya-Specific Engineering Features */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Built for Local Realities
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              What Kenyan SaaS Founders & Businesses Need
            </h2>
            <p className="text-base text-[#52615B] leading-relaxed">
              Building software in Kenya requires more than generic templates. Kenyan users expect seamless mobile money checkout, instant WhatsApp notifications, resilience during intermittent internet connections, and zero latency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-5">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                Seamless M-Pesa & Card Billing Integration
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                We integrate Safaricom's Daraja 2.0 API directly into your SaaS checkout workflow. Customers receive an automated STK Push on their mobile phone, and our webhook listeners verify payment in under 3 seconds to unlock platform access instantly.
              </p>
              <ul className="space-y-2 text-xs font-mono text-[#52615B]">
                <li className="flex items-center gap-2 text-[#059669]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>STK Push (Lipa na M-Pesa Online)</span>
                </li>
                <li className="flex items-center gap-2 text-[#059669]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>C2B & B2C Automated Reconciliations</span>
                </li>
                <li className="flex items-center gap-2 text-[#059669]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Dual billing: KES via M-Pesa + USD via Stripe</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-5">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                Offline-First & Intermittent Connectivity Architecture
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                Kenyan business operations cannot grind to a halt when fiber or mobile data drops. We engineer client-side local caching (IndexedDB) with deterministic background synchronization queues so staff keep working smoothly offline.
              </p>
              <ul className="space-y-2 text-xs font-mono text-[#52615B]">
                <li className="flex items-center gap-2 text-[#059669]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Local IndexedDB transaction ledgers</span>
                </li>
                <li className="flex items-center gap-2 text-[#059669]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Auto-conflict resolution on reconnection</span>
                </li>
                <li className="flex items-center gap-2 text-[#059669]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Optimized for low-bandwidth 3G/4G networks</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                Multi-Tenant Architecture & Data Isolation
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                Whether you are building a B2B SaaS for Kenyan law firms, logistics companies, or retail chains, we structure rigorous organization-level data partitioning, role-based access control, and audit logs that meet Kenya Data Protection Act standards.
              </p>
              <ul className="space-y-2 text-xs font-mono text-[#52615B]">
                <li className="flex items-center gap-2 text-[#059669]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Row-Level Security (RLS) in PostgreSQL</span>
                </li>
                <li className="flex items-center gap-2 text-[#059669]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Admin, Manager, and Staff RBAC hierarchies</span>
                </li>
                <li className="flex items-center gap-2 text-[#059669]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Kenya Data Protection compliance ready</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-5">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                Cost-Effective Cloud & Linux VPS Deployment
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                Avoid spiraling dollar-denominated cloud hosting bills. We configure production Linux VPS servers (Hetzner, Contabo, AWS) with Docker Compose, automated backups, and Nginx reverse proxies, keeping monthly infrastructure costs low.
              </p>
              <ul className="space-y-2 text-xs font-mono text-[#52615B]">
                <li className="flex items-center gap-2 text-[#059669]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Predictable KES-equivalent hosting costs</span>
                </li>
                <li className="flex items-center gap-2 text-[#059669]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Automated daily offsite database backups</span>
                </li>
                <li className="flex items-center gap-2 text-[#059669]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Push-to-deploy CI/CD pipelines via GitHub</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Kenya Case Study */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="p-8 md:p-12 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFDF5] text-[#059669] text-xs font-mono font-semibold mb-3">
                <span>Featured Kenya Case Study</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight mb-3">
                DazzPOS: Offline-First Retail Architecture for Kenyan Stores
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                We engineered an offline-first Point of Sale application supporting 50+ retail checkout counters across Kenya. With sub-120ms barcode scanning and instant M-Pesa STK Push callbacks, stores processed over 45,000 daily sales without checkout interruptions during network drops.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-[#52615B]">
                <span className="text-[#059669] font-bold">✓ 50+ Retail Locations</span>
                <span className="text-[#059669] font-bold">✓ Zero Outage Downtime</span>
                <span className="text-[#059669] font-bold">✓ M-Pesa Webhook Sync</span>
              </div>
            </div>
            <Link href="/case-studies/dazzpos" className="shrink-0">
              <Button
                variant="outline"
                className="h-12 px-6 text-xs font-bold uppercase tracking-wider border-[#E2EAE6] hover:bg-[#F1F5F3] rounded-xl text-[#12201B] cursor-pointer"
              >
                Read Case Study
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Kenyan Services */}
      <section className="py-16 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <h3 className="text-xl font-bold text-[#12201B] mb-6 text-center">
            Explore Other Software Services in Kenya
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/kenya/software-development-company"
              className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] hover:border-[#059669] transition-colors group"
            >
              <span className="text-xs font-mono text-[#059669] font-bold block mb-1">Custom Software</span>
              <span className="text-sm font-bold text-[#12201B] group-hover:text-[#059669] transition-colors">
                Software Development Kenya →
              </span>
            </Link>
            <Link
              href="/kenya/web-development-company"
              className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] hover:border-[#059669] transition-colors group"
            >
              <span className="text-xs font-mono text-[#059669] font-bold block mb-1">Web Applications</span>
              <span className="text-sm font-bold text-[#12201B] group-hover:text-[#059669] transition-colors">
                Web Development Kenya →
              </span>
            </Link>
            <Link
              href="/kenya/mvp-development"
              className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] hover:border-[#059669] transition-colors group"
            >
              <span className="text-xs font-mono text-[#059669] font-bold block mb-1">Startup Launches</span>
              <span className="text-sm font-bold text-[#12201B] group-hover:text-[#059669] transition-colors">
                MVP Development Kenya →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Kenya SaaS FAQs */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              SaaS Development in Kenya
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-base font-bold text-[#12201B] mb-2 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                <span>Can you integrate M-Pesa into a SaaS recurring subscription model?</span>
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed pl-8">
                Yes. We integrate Safaricom's Daraja 2.0 API with STK Push for initial checkout, automated webhook listeners for real-time payment confirmation, and automated renewal reminder prompts via SMS or WhatsApp.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-base font-bold text-[#12201B] mb-2 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                <span>How much does it cost to build a SaaS application in Kenya?</span>
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed pl-8">
                SaaS MVP development for Kenyan startups typically ranges from KES 400,000 to KES 1,200,000 depending on features, multi-tenancy complexity, and payment gateway requirements. We work in fixed-milestone deliverables.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-base font-bold text-[#12201B] mb-2 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                <span>Where should Kenyan SaaS applications be hosted for low latency?</span>
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed pl-8">
                We deploy applications using global Edge CDNs with localized edge caches in Nairobi, or configure high-performance Linux VPS instances in Johannesburg or European regions delivering sub-80ms response times across Kenya.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
              <h3 className="text-base font-bold text-[#12201B] mb-2 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                <span>Do we own 100% of the code and intellectual property?</span>
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed pl-8">
                Yes. Dazzcode delivers 100% intellectual property ownership to your company upon milestone completion. You receive full GitHub repository access and database keys with zero vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#12201B] text-white">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Ready to Build Your SaaS in Kenya?
          </h2>
          <p className="text-sm md:text-base text-[#E2EAE6]/80 mb-8 max-w-xl mx-auto">
            Talk directly to our Nairobi-based software architects. We will review your product requirements and outline a concrete timeline and budget.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="h-14 px-8 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl transition-all shadow-[0_4px_20px_rgba(5,150,105,0.4)] cursor-pointer"
            >
              Book a Strategy Call
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
