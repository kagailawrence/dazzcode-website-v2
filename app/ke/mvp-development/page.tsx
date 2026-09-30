import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/seo/JsonLd";
import {
  ArrowRight,
  CheckCircle2,
  Rocket,
  Layers,
  Zap,
  HelpCircle,
  Building2,
  Clock,
  ShieldCheck,
  CreditCard,
  ArrowUpRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Startup MVP Development in Kenya | 4-6 Week Launch | Dazzcode",
  description: "Dazzcode is Kenya's leading MVP development company. We build production-ready Minimum Viable Products for Kenyan and East African startup founders in 4 to 6 weeks with M-Pesa integration.",
  keywords: [
    "MVP development Kenya",
    "MVP development company Kenya",
    "startup MVP development Kenya",
    "SaaS MVP Kenya",
    "minimum viable product Kenya",
    "Nairobi startup development"
  ],
  alternates: {
    canonical: "https://dazzcode.com/kenya/mvp-development",
  },
  openGraph: {
    title: "Startup MVP Development in Kenya | Dazzcode",
    description: "Launch your startup MVP in Kenya in 4 to 6 weeks. Lean engineering, M-Pesa payment integration, and 100% intellectual property ownership.",
    url: "https://dazzcode.com/kenya/mvp-development",
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

export default function KenyaMVPPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dazzcode.com/kenya/mvp-development#service",
        name: "Startup MVP Development in Kenya",
        description: "Accelerated Minimum Viable Product (MVP) development for Kenyan startups and founders. Turn validated ideas into market-ready software in 4 to 6 weeks.",
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
        serviceType: "MVP development Kenya",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dazzcode.com/kenya/mvp-development#breadcrumb",
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
            name: "MVP Development",
            item: "https://dazzcode.com/kenya/mvp-development",
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
            <Link href="/kenya" className="hover:text-[#059669] transition-colors">Kenya</Link>
            <span>/</span>
            <span className="text-[#12201B] font-semibold">MVP Development</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECFDF5] border border-[#059669]/20 text-[#059669] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <Rocket className="w-3.5 h-3.5" />
            <span>Kenya Startup Acceleration</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-[#12201B] mb-6">
            Startup MVP Development in Kenya
          </h1>

          <p className="text-lg md:text-xl text-[#52615B] leading-relaxed max-w-3xl mb-8">
            Launch your software product in 4 to 6 weeks. We help Kenyan founders and business leaders turn validated concepts into production-ready MVPs with clean Next.js architecture, M-Pesa billing, and institutional code standards.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl transition-all shadow-[0_4px_20px_rgba(5,150,105,0.25)] cursor-pointer"
              >
                Validate Your MVP Idea
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/services/saas-mvp-development">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-7 text-sm font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3] rounded-xl text-[#12201B] shadow-xs cursor-pointer"
              >
                Global MVP Program
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#E2EAE6] text-xs font-mono text-[#52615B]">
            <div>
              <span className="text-[#059669] font-bold block">4–6 Weeks</span>
              <span>Launch Velocity</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">M-Pesa STK</span>
              <span>Built-in Billing</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">Next.js + SQL</span>
              <span>Scalable Stack</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">100% IP</span>
              <span>Zero Lock-in</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Week Sprint Breakdown */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Execution Roadmap
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Our 4–6 Week Kenya MVP Build Process
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#059669] text-white flex items-center justify-center font-mono font-bold text-xs mb-4">
                W1
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Scope & Architecture</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                We trim non-essential features, define database schemas, and map the primary revenue workflow.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#059669] text-white flex items-center justify-center font-mono font-bold text-xs mb-4">
                W2
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Auth & Scaffold</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Setting up user authentication, database models, team roles, and initial dashboard UI.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#059669] text-white flex items-center justify-center font-mono font-bold text-xs mb-4">
                W3-4
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">Core Logic & M-Pesa</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Building the core product value engine, Safaricom Daraja STK push, and automated email/SMS.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#059669] text-white flex items-center justify-center font-mono font-bold text-xs mb-4">
                W5-6
              </div>
              <h3 className="text-base font-bold text-[#12201B] mb-2">QA & Live Launch</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Security hardening, mobile responsive checks, live domain DNS cutover, and repository handoff.
              </p>
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
                Kenya Startup Work
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight mb-2">
                From Concept to 50+ Retail Branches
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed">
                See how DazzPOS went from an initial MVP architecture into a full production offline-first retail system running across Kenya.
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

      {/* Bottom CTA */}
      <section className="py-20 bg-[#12201B] text-white">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Have a Startup Idea to Launch in Kenya?
          </h2>
          <p className="text-sm md:text-base text-[#E2EAE6]/80 mb-8 max-w-xl mx-auto">
            Book a scoping session with our Nairobi team to turn your vision into an investor-ready software asset.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="h-14 px-8 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl transition-all shadow-[0_4px_20px_rgba(5,150,105,0.4)] cursor-pointer"
            >
              Start an MVP Sprint
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
