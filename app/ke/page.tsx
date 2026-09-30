import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/seo/JsonLd";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Layers,
  Rocket,
  ShieldCheck,
  Building2,
  CreditCard,
  Zap,
  HelpCircle,
  Clock,
  ArrowUpRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "SaaS & Software Development in Kenya | Dazzcode Nairobi",
  description: "Dazzcode is a Kenya-based software engineering and SaaS development company headquartered in Nairobi. We build custom software, SaaS MVPs, web applications, and M-Pesa integrated platforms.",
  keywords: [
    "SaaS development company Kenya",
    "software development company Kenya",
    "web development company Kenya",
    "MVP development Kenya",
    "software developers Nairobi",
    "M-Pesa API integration developers"
  ],
  alternates: {
    canonical: "https://dazzcode.com/ke",
  },
  openGraph: {
    title: "SaaS & Software Development in Kenya | Dazzcode",
    description: "Kenya-based engineering team building high-performance SaaS, custom software, and M-Pesa integrated applications for Kenyan and global businesses.",
    url: "https://dazzcode.com/ke",
    siteName: "Dazzcode",
    images: [
      {
        url: "/images/hero-saas-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "Dazzcode Software Engineering Kenya",
      },
    ],
  },
};

export default function KenyaHubPage() {
  const regionalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://dazzcode.com/ke#business",
        name: "Dazzcode Kenya",
        description: "Premier software development and SaaS engineering company headquartered in Nairobi, Kenya.",
        url: "https://dazzcode.com/ke",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Nairobi",
          addressCountry: "KE",
        },
        areaServed: {
          "@type": "Country",
          name: "Kenya",
        },
        priceRange: "KES / USD",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dazzcode.com/ke#breadcrumb",
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
        ],
      },
    ],
  };

  const pages = [
    {
      title: "SaaS Development Company in Kenya",
      href: "/ke/saas-development-company",
      keyword: "SaaS development company Kenya",
      desc: "Architecting multi-tenant, cloud-native SaaS platforms with M-Pesa billing, scalable PostgreSQL, and institutional codebases.",
    },
    {
      title: "Custom Software Development Company",
      href: "/ke/software-development-company",
      keyword: "software development company Kenya",
      desc: "Replacing manual spreadsheets and disjointed tools with tailored operational software built for Kenyan enterprise workflows.",
    },
    {
      title: "Web Application Development Company",
      href: "/ke/web-development-company",
      keyword: "web development company Kenya",
      desc: "High-performance business web applications, customer self-service portals, and e-commerce integrations beyond basic websites.",
    },
    {
      title: "Startup MVP Development in Kenya",
      href: "/ke/mvp-development",
      keyword: "MVP development Kenya",
      desc: "Fast 4–6 week production-ready MVP launches for Kenyan and East African founders validating new digital business models.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAF9] text-[#12201B]">
      <JsonLd schema={regionalSchema} />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECFDF5] border border-[#059669]/20 text-[#059669] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <span>Nairobi, Kenya Headquarters</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-[#12201B] mb-6">
            Software & SaaS Engineering <br className="hidden sm:inline" />
            in Kenya
          </h1>

          <p className="text-lg md:text-xl text-[#52615B] leading-relaxed max-w-3xl mx-auto mb-8">
            Dazzcode is a Nairobi-headquartered software engineering company. We engineer production SaaS products, custom business software, and high-performance web applications tailored to the Kenyan and East African commercial landscape.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-mono text-[#52615B]">
            <div className="flex items-center gap-1.5 text-[#059669]">
              <CheckCircle2 className="w-4 h-4" />
              <span>Safaricom M-Pesa Daraja Integration</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5 text-[#059669]">
              <CheckCircle2 className="w-4 h-4" />
              <span>Offline-First POS & Inventory Architecture</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5 text-[#059669]">
              <CheckCircle2 className="w-4 h-4" />
              <span>Local & Global Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Kenya Commercial Pages */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Commercial Capabilities
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Dedicated Software Services in Kenya
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pages.map((p, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] hover:border-[#059669]/50 hover:shadow-lg transition-all flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#059669] font-bold block mb-2">
                    {p.keyword}
                  </span>
                  <h3 className="text-2xl font-black text-[#12201B] tracking-tight mb-3 group-hover:text-[#059669] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#52615B] leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>
                <Link href={p.href}>
                  <Button
                    variant="outline"
                    className="w-full h-11 text-xs font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#059669] hover:text-white rounded-xl transition-colors cursor-pointer"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Kenya Case Study */}
      <section className="py-20 bg-[#F8FAF9] border-t border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="p-8 md:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#059669] block mb-2">
                Kenya Case Study
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight mb-2">
                DazzPOS Multi-Store Retail POS
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed">
                Offline-first Point of Sale and inventory engine running in active retail outlets across Kenya, featuring automated M-Pesa STK Push payment callbacks and sub-second barcode scans.
              </p>
            </div>
            <Link href="/case-studies/dazzpos" className="shrink-0">
              <Button
                variant="outline"
                className="h-12 px-6 text-xs font-bold uppercase tracking-wider border-[#E2EAE6] hover:bg-[#F1F5F3] rounded-xl text-[#12201B] cursor-pointer"
              >
                Read Kenya Case Study
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-[#12201B] text-white">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Building Software for the Kenyan Market?
          </h2>
          <p className="text-sm md:text-base text-[#E2EAE6]/80 mb-8 max-w-xl mx-auto">
            Schedule a consultation with our Nairobi engineering team to discuss architecture, timeline, and milestone costs.
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
