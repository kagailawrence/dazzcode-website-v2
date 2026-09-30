import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/seo/JsonLd";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  Building2,
  Layers,
  Zap,
  HelpCircle,
  ShieldCheck,
  ArrowUpRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Software Development Company in Kenya | Custom Business Software | Dazzcode",
  description: "Dazzcode is a custom software development company in Kenya. We engineer bespoke business management systems, enterprise ERPs, inventory portals, and operational software for Kenyan companies.",
  keywords: [
    "software development company Kenya",
    "custom software development Kenya",
    "software developers Kenya",
    "software development services Kenya",
    "custom software Nairobi",
    "business management software Kenya"
  ],
  alternates: {
    canonical: "https://dazzcode.com/ke/software-development-company",
  },
  openGraph: {
    title: "Software Development Company in Kenya | Dazzcode",
    description: "Custom software engineering for Kenyan businesses and enterprises. Replace manual spreadsheets with bespoke operational software.",
    url: "https://dazzcode.com/ke/software-development-company",
    siteName: "Dazzcode",
    images: [
      {
        url: "/images/hero-saas-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "Software Development Company in Kenya - Dazzcode",
      },
    ],
  },
};

export default function KenyaSoftwareDevelopmentPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dazzcode.com/ke/software-development-company#service",
        name: "Custom Software Development Company in Kenya",
        description: "Bespoke software development for Kenyan SMEs and growing enterprises. Building operational workflow engines, inventory systems, and custom database software.",
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
        serviceType: "software development company Kenya",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dazzcode.com/ke/software-development-company#breadcrumb",
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
            name: "Software Development Company",
            item: "https://dazzcode.com/ke/software-development-company",
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
            <Link href="/ke" className="hover:text-[#059669] transition-colors">Kenya</Link>
            <span>/</span>
            <span className="text-[#12201B] font-semibold">Software Development</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECFDF5] border border-[#059669]/20 text-[#059669] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <Building2 className="w-3.5 h-3.5" />
            <span>Kenya Custom Software Engineering</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-[#12201B] mb-6">
            Custom Software Development Company in Kenya
          </h1>

          <p className="text-lg md:text-xl text-[#52615B] leading-relaxed max-w-3xl mb-8">
            We engineer custom software systems for Kenyan companies seeking to replace manual paperwork and rigid off-the-shelf software with tailored, automated digital platforms built specifically for their business operations.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl transition-all shadow-[0_4px_20px_rgba(5,150,105,0.25)] cursor-pointer"
              >
                Discuss Your Software Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/services/web-application-development">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-7 text-sm font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3] rounded-xl text-[#12201B] shadow-xs cursor-pointer"
              >
                Explore Web Apps
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Custom Software Solutions */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Operational Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight">
              Software Engineered for Kenyan Business Operations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-5 font-mono font-bold">
                01
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                Multi-Branch Inventory & Warehouse Portals
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                Track stock transfers across Nairobi, Mombasa, Kisumu, and Eldoret warehouses in real-time. Automated reorder thresholds, barcode scanning, and FIFO cost accounting.
              </p>
              <ul className="space-y-1 text-xs text-[#52615B]">
                <li>✓ Multi-location transfer reconciliation</li>
                <li>✓ Low-stock SMS alerts to procurement teams</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-5 font-mono font-bold">
                02
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                Automated Invoicing & M-Pesa Ledger Systems
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                Eliminate manual bank statement and Paybill matching. Our custom financial modules automatically match M-Pesa reference codes to client invoice line items in seconds.
              </p>
              <ul className="space-y-1 text-xs text-[#52615B]">
                <li>✓ Real-time Safaricom Daraja reconciliation</li>
                <li>✓ Automated KRA-compliant PDF invoice generation</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-5 font-mono font-bold">
                03
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                Field Logistics & Delivery Dispatch Software
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                Mobile-optimized dispatch web applications for drivers and field agents with offline digital signatures, proof of delivery photo capture, and GPS timestamping.
              </p>
              <ul className="space-y-1 text-xs text-[#52615B]">
                <li>✓ Offline mobile browser capability</li>
                <li>✓ Route and delivery milestone tracking</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-5 font-mono font-bold">
                04
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                B2B Client & Supplier Self-Service Portals
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                Give corporate clients a branded portal to place purchase orders, view statement balances, download statements, and initiate support requests 24/7.
              </p>
              <ul className="space-y-1 text-xs text-[#52615B]">
                <li>✓ Role-based staff access levels</li>
                <li>✓ Zero per-seat monthly license fees</li>
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
                Proven Software in Production
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight mb-2">
                DazzPOS: Custom Retail Infrastructure
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed">
                Discover how we engineered custom retail POS software that eliminated network downtime across 50+ Kenyan store locations with offline synchronization.
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
              Custom Software Development in Kenya
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <h3 className="text-base font-bold text-[#12201B] mb-2 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                <span>Why choose custom software instead of buying existing commercial tools?</span>
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed pl-8">
                Existing SaaS platforms often lack deep M-Pesa integration, charge expensive per-user monthly subscription fees in USD, and force your business to change its proven workflows to match the software. Custom software is 100% owned by your company and built to fit your exact operational logic.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <h3 className="text-base font-bold text-[#12201B] mb-2 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                <span>How long does it take to develop custom software?</span>
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed pl-8">
                Focused business software modules typically launch in 4 to 8 weeks through phased milestone sprints. We deploy working software to staging weekly so you can test features with real company data continuously.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#12201B] text-white">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Ready to Digitize Your Kenyan Operations?
          </h2>
          <p className="text-sm md:text-base text-[#E2EAE6]/80 mb-8 max-w-xl mx-auto">
            Book a meeting with Dazzcode's software engineering team in Nairobi.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="h-14 px-8 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl transition-all shadow-[0_4px_20px_rgba(5,150,105,0.4)] cursor-pointer"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
