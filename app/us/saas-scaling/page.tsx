import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/seo/JsonLd";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Zap,
  Server,
  Lock,
  Database,
  Building2,
  HelpCircle,
  ArrowUpRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "SaaS Scaling Services US | Performance Optimization | Dazzcode",
  description: "Dazzcode provides high-concurrency SaaS scaling and performance optimization services for US startups. Fix database bottlenecks, lower cloud compute costs, and scale your application effortlessly.",
  keywords: [
    "SaaS scaling services US",
    "SaaS performance optimization",
    "scale SaaS application",
    "SaaS architecture",
    "software scaling",
    "PostgreSQL performance optimization",
    "Next.js scaling agency US"
  ],
  alternates: {
    canonical: "https://dazzcode.com/us/saas-scaling",
    languages: {
      "en": "https://dazzcode.com/services/saas-scaling",
      "en-GB": "https://dazzcode.com/uk/saas-scaling",
      "en-US": "https://dazzcode.com/us/saas-scaling",
      "x-default": "https://dazzcode.com/services/saas-scaling",
    },
  },
  openGraph: {
    title: "SaaS Scaling Services US | Dazzcode",
    description: "Scale your US SaaS application without crashing or exploding AWS/Vercel compute costs. Senior-led performance engineering.",
    url: "https://dazzcode.com/us/saas-scaling",
    siteName: "Dazzcode",
    images: [
      {
        url: "/images/hero-saas-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "SaaS Scaling Services US - Dazzcode",
      },
    ],
  },
};

export default function USSaaSScalingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dazzcode.com/us/saas-scaling#service",
        name: "SaaS Scaling Services US",
        description: "High-concurrency SaaS scaling, database optimization, and cloud performance engineering for US software companies.",
        provider: {
          "@type": "Organization",
          name: "Dazzcode",
          url: "https://dazzcode.com",
        },
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        serviceType: "SaaS scaling services US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dazzcode.com/us/saas-scaling#breadcrumb",
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
            name: "US",
            item: "https://dazzcode.com/us/saas-development",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "SaaS Scaling",
            item: "https://dazzcode.com/us/saas-scaling",
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
            <Link href="/services/saas-scaling" className="hover:text-[#059669] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#12201B] font-semibold">US SaaS Scaling</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECFDF5] border border-[#059669]/20 text-[#059669] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>US High-Concurrency Scaling</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-[#12201B] mb-6">
            SaaS Scaling & Performance Optimization US
          </h1>

          <p className="text-lg md:text-xl text-[#52615B] leading-relaxed max-w-3xl mb-8">
            Scale your SaaS application to handle rapid customer growth with sub-50ms response times. We eliminate slow database queries, implement distributed Redis caching, and re-architect cloud infrastructure to cut compute bills by 40–70%.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl transition-all shadow-[0_4px_20px_rgba(5,150,105,0.25)] cursor-pointer"
              >
                Talk to a Scaling Engineer
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/services/saas-scaling">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-7 text-sm font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3] rounded-xl text-[#12201B] shadow-xs cursor-pointer"
              >
                Global Scaling Services
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#E2EAE6] text-xs font-mono text-[#52615B]">
            <div>
              <span className="text-[#059669] font-bold block">&lt; 50ms</span>
              <span>Target Latency</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">40–70%</span>
              <span>Hosting Cost Reduction</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">Zero Downtime</span>
              <span>Hot Migration Sprints</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">10k+ MAU</span>
              <span>Tested Scale</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Architectural Interventions
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              How We Future-Proof US SaaS Platforms
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-5">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                PostgreSQL Profiling & Index Strategy
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                We trace slow query logs with EXPLAIN ANALYZE, eliminating expensive sequential table scans and deadlock contentions on critical relational tables.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-5">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-3">
                Connection Pooling & Background Job Queues
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                Deploying PgBouncer connection pooling and BullMQ asynchronous background queues to process heavy exports and notifications without blocking API threads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#12201B] text-white">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Need to Optimize Your US SaaS Performance?
          </h2>
          <p className="text-sm md:text-base text-[#E2EAE6]/80 mb-8 max-w-xl mx-auto">
            Book a technical consultation with our senior systems engineers.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="h-14 px-8 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl transition-all shadow-[0_4px_20px_rgba(5,150,105,0.4)] cursor-pointer"
            >
              Request a Scaling Review
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
