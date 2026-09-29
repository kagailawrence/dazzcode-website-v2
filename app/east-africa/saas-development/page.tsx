import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/seo/JsonLd";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Layers,
  CreditCard,
  Server,
  Zap,
  HelpCircle,
  Building2,
  ShieldCheck,
  ArrowUpRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "SaaS Development for East Africa | Multi-Country Architecture | Dazzcode",
  description: "Dazzcode engineers multi-country SaaS platforms across East Africa (Kenya, Uganda, Tanzania, Rwanda). Multi-currency payments (M-Pesa, MTN MoMo, Airtel Money), cross-border data sync, and low-latency cloud infrastructure.",
  keywords: [
    "SaaS development East Africa",
    "software development East Africa",
    "SaaS development Africa",
    "custom software East Africa",
    "software development Kenya Uganda Tanzania Rwanda",
    "mobile money integration East Africa"
  ],
  alternates: {
    canonical: "https://dazzcode.com/east-africa/saas-development",
  },
  openGraph: {
    title: "SaaS Development for East Africa | Dazzcode",
    description: "Engineer scalable, multi-country SaaS platforms across East Africa. Multi-currency, mobile money integration, and offline-first data sync.",
    url: "https://dazzcode.com/east-africa/saas-development",
    siteName: "Dazzcode",
    images: [
      {
        url: "/images/hero-saas-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "SaaS Development for East Africa - Dazzcode",
      },
    ],
  },
};

export default function EastAfricaSaaSPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dazzcode.com/east-africa/saas-development#service",
        name: "SaaS Development for East Africa",
        description: "Multi-country software and SaaS development services for businesses operating across Kenya, Uganda, Tanzania, and Rwanda.",
        provider: {
          "@type": "Organization",
          name: "Dazzcode",
          url: "https://dazzcode.com",
          logo: "https://dazzcode.com/images/logo.png",
        },
        areaServed: [
          { "@type": "Country", name: "Kenya" },
          { "@type": "Country", name: "Uganda" },
          { "@type": "Country", name: "Tanzania" },
          { "@type": "Country", name: "Rwanda" },
        ],
        serviceType: "SaaS development East Africa",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dazzcode.com/east-africa/saas-development#breadcrumb",
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
            name: "East Africa",
            item: "https://dazzcode.com/east-africa/saas-development",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "SaaS Development",
            item: "https://dazzcode.com/east-africa/saas-development",
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
            <Link href="/services" className="hover:text-[#059669] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#12201B] font-semibold">East Africa SaaS</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECFDF5] border border-[#059669]/20 text-[#059669] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <Globe className="w-3.5 h-3.5" />
            <span>Regional Software Engineering · EAC Region</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-[#12201B] mb-6">
            SaaS Development for East Africa
          </h1>

          <p className="text-lg md:text-xl text-[#52615B] leading-relaxed max-w-3xl mb-8">
            Building software across East Africa requires specialized regional engineering. We design and build multi-country SaaS platforms with unified multi-currency accounting (KES, UGX, TZS, RWF, USD), regional mobile money gateways (M-Pesa, MTN MoMo, Airtel Money), and offline-first synchronization.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl transition-all shadow-[0_4px_20px_rgba(5,150,105,0.25)] cursor-pointer"
              >
                Discuss East Africa SaaS
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/case-studies/dazzpos">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-7 text-sm font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3] rounded-xl text-[#12201B] shadow-xs cursor-pointer"
              >
                View Regional Case Study
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#E2EAE6] text-xs font-mono text-[#52615B]">
            <div>
              <span className="text-[#059669] font-bold block">4+ Countries</span>
              <span>KE · UG · TZ · RW</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">Mobile Money</span>
              <span>M-Pesa · MTN · Airtel</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">Multi-Currency</span>
              <span>KES, UGX, TZS, RWF</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">Offline-First</span>
              <span>Network Resilient</span>
            </div>
          </div>
        </div>
      </section>

      {/* East African Regional Engineering Challenges & Solutions */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Regional Technical Architecture
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              Solving the Technical Complexities of Cross-Border East African Software
            </h2>
            <p className="text-base text-[#52615B] leading-relaxed">
              Operating digital software across Kenya, Uganda, Tanzania, and Rwanda presents unique engineering hurdles around payment rails, foreign exchange volatility, and diverse connectivity conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-5">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                Unified Regional Payment Orchestration
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                Instead of integrating dozens of disconnected telco APIs, we build unified payment abstraction layers that route transactions seamlessly through M-Pesa (Kenya/Tanzania), MTN Mobile Money (Uganda/Rwanda), and Airtel Money with automated webhook reconciliation.
              </p>
              <ul className="space-y-1.5 text-xs text-[#52615B]">
                <li>✓ Multi-carrier STK Push routing</li>
                <li>✓ Unified transaction status ledger</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-5">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                Multi-Currency & FX Exchange Accounting
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                We structure database ledgers with base-currency normalization, real-time FX rate sync, and localized invoicing formats supporting Kenya KES, Uganda UGX, Tanzania TZS, Rwanda RWF, and international USD billing.
              </p>
              <ul className="space-y-1.5 text-xs text-[#52615B]">
                <li>✓ Dual-ledger currency tracking</li>
                <li>✓ Automated central rate conversion</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-5">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                Regional Edge Routing & Low-Latency Hosting
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                Hosting servers exclusively in North America adds 250ms+ latency to East African users. We deploy edge routing with Cloudflare CDN nodes in Nairobi, Mombasa, and Dar es Salaam, combined with optimized VPS backend clusters.
              </p>
              <ul className="space-y-1.5 text-xs text-[#52615B]">
                <li>✓ Regional edge asset caching</li>
                <li>✓ Sub-100ms API response targets</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                Cross-Border Tenant & Tax Isolation
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                Comply with differing local regulations across EAC partner states. We structure multi-tenant data residency rules and automated VAT/withholding tax calculation tailored to each country's fiscal requirements.
              </p>
              <ul className="space-y-1.5 text-xs text-[#52615B]">
                <li>✓ Country-level data partitioning</li>
                <li>✓ Localized tax and fiscal receipt schemas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Callout */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="p-8 md:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#059669] block mb-2">
                Regional Case Study
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight mb-2">
                DazzPOS: East African Multi-Store Retail Engine
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed">
                Learn how our offline-first architecture powered thousands of retail transactions with instant local mobile money synchronization across commercial retail locations.
              </p>
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

      {/* FAQs */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              FAQ
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              SaaS Development in East Africa
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <h3 className="text-base font-bold text-[#12201B] mb-2 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                <span>How do you handle mobile money across different East African countries?</span>
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed pl-8">
                We integrate unified regional aggregators (such as Pesapal, Flutterwave, or direct telco APIs) that support Safaricom M-Pesa in Kenya and Tanzania, MTN MoMo in Uganda and Rwanda, and Airtel Money across the region.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <h3 className="text-base font-bold text-[#12201B] mb-2 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                <span>Can the application operate during intermittent internet outages?</span>
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed pl-8">
                Yes. We specialize in offline-first progressive web architectures where client devices store local transactions in encrypted IndexedDB queues, synchronizing automatically once an active cellular or broadband connection is re-established.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#12201B] text-white">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Scaling Your Software Across East Africa?
          </h2>
          <p className="text-sm md:text-base text-[#E2EAE6]/80 mb-8 max-w-xl mx-auto">
            Speak directly with Dazzcode's regional systems architects to plan your cross-border digital platform.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="h-14 px-8 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl transition-all shadow-[0_4px_20px_rgba(5,150,105,0.4)] cursor-pointer"
            >
              Start a Regional Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
