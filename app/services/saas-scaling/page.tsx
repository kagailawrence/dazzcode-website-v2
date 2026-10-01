import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  Activity,
  Server,
  Database,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Clock,
  Code2,
  HardDrive,
  RefreshCw,
  Search,
  Check,
  X,
  Sparkles,
  Gauge,
  Sliders,
  DollarSign,
  Globe2,
  Terminal,
  HelpCircle,
  BarChart3,
  FileCode2,
  Lock,
  ArrowUpRight,
  ChevronRight,
  Building2,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SaasScalingHeroPreview from "@/components/sections/SaasScalingHeroPreview";
import SaasScalingLeadForm from "@/components/sections/SaasScalingLeadForm";

export const metadata: Metadata = {
  title: "SaaS Scaling & Performance Optimization | Dazzcode",
  description:
    "Scale your SaaS with better performance, database optimization, architecture improvements and reliable infrastructure with Dazzcode.",
  keywords: [
    "SaaS scaling",
    "SaaS scaling services",
    "SaaS scaling company",
    "SaaS scaling agency",
    "SaaS performance optimization",
    "SaaS performance optimization services",
    "SaaS scalability",
    "SaaS scalability services",
    "SaaS performance tuning",
    "SaaS application performance",
    "SaaS infrastructure optimization",
    "SaaS database optimization",
    "SaaS backend optimization",
    "SaaS speed optimization",
    "SaaS technical scaling",
    "scale a SaaS application",
    "scaling SaaS applications",
    "SaaS optimization",
    "SaaS performance audit",
    "SaaS scaling Kenya",
    "SaaS scaling company in Kenya",
    "SaaS development company Kenya"
  ],
  alternates: {
    canonical: "https://dazzcode.com/services/saas-scaling",
    languages: {
      "en": "https://dazzcode.com/services/saas-scaling",
      "en-GB": "https://dazzcode.com/uk/saas-scaling",
      "en-US": "https://dazzcode.com/us/saas-scaling",
      "x-default": "https://dazzcode.com/services/saas-scaling"
    }
  },
  openGraph: {
    title: "SaaS Scaling & Performance Optimization | Dazzcode",
    description:
      "Scale your SaaS with better performance, database optimization, architecture improvements and reliable infrastructure. Dazzcode helps growing SaaS products handle more users and workload.",
    url: "https://dazzcode.com/services/saas-scaling",
    siteName: "Dazzcode",
    images: [
      {
        url: "https://dazzcode.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "SaaS Scaling & Performance Optimization - Dazzcode"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Scaling & Performance Optimization | Dazzcode",
    description:
      "Scale your SaaS with better performance, database optimization, architecture improvements and reliable infrastructure."
  }
};

const scalingFaqs = [
  {
    q: "What is SaaS scaling?",
    a: "SaaS scaling is the engineering discipline of increasing an existing cloud software application's capacity to handle higher concurrent users, larger datasets, higher transaction volumes, and heavier background workloads without suffering performance degradation, unmanageable cloud costs, or system downtime."
  },
  {
    q: "How do I know if my SaaS needs scaling?",
    a: "Common indicators include slow page and dashboard load times, sluggish API response latencies, database CPU spikes during business hours, background job queue backups, rising cloud and VPS infrastructure bills, tenant lock contention, or instability during marketing campaigns and traffic peaks."
  },
  {
    q: "What is SaaS performance optimization?",
    a: "SaaS performance optimization is the targeted process of measuring and eliminating specific technical bottlenecks across your software stack—such as slow SQL queries, missing database indexes, blocking backend code, bloated frontend JavaScript bundles, memory leaks, and inefficient background queues—to maximize throughput and minimize latency."
  },
  {
    q: "How do you make a SaaS application faster?",
    a: "We follow a systematic engineering cycle: 1) Measure baseline p95/p99 latencies and resource consumption, 2) Profile backend execution paths and SQL execution plans, 3) Optimize expensive queries with composite indexes and keyset pagination, 4) Implement surgical caching (Redis/Edge KV), 5) Move heavy tasks to asynchronous worker queues, and 6) Fine-tune production server and connection pool parameters."
  },
  {
    q: "Can you optimize an existing SaaS?",
    a: "Yes. Our core service is engineered specifically for existing codebases. You do not need to rebuild your software from scratch to scale. We inspect, optimize, and refactor the exact codebase you already have while maintaining 100% production uptime and backwards compatibility."
  },
  {
    q: "Can you optimize PostgreSQL performance?",
    a: "Yes. Dazzcode specializes in PostgreSQL performance engineering. We run EXPLAIN ANALYZE on slow queries, design composite and partial indexes, eliminate sequential table scans, implement Keyset/Cursor pagination, configure PgBouncer connection pooling, tune autovacuum parameters, and optimize multi-tenant Row-Level Security (RLS)."
  },
  {
    q: "Can you optimize a Next.js SaaS?",
    a: "Yes. For Next.js applications, we optimize rendering strategies (React Server Components vs. Client Components), reduce client-side bundle weight, implement granular data caching with fetch tags, eliminate unnecessary re-renders, optimize Core Web Vitals (LCP, INP, CLS), and fine-tune Node.js/Docker server runtime memory."
  },
  {
    q: "Can you optimize Node.js applications?",
    a: "Yes. We identify and eliminate event loop blocking operations, memory leaks, unhandled promise rejections, inefficient JSON serialization, and slow I/O calls in Express, Fastify, NestJS, and standalone Node.js microservices or worker processes."
  },
  {
    q: "Do I need microservices to scale my SaaS?",
    a: "No. A well-structured modular monolith can comfortably scale to hundreds of thousands of active users and millions of monthly requests when properly indexed, cached, and deployed. We only recommend microservices or workload decoupling when there is an indisputable operational or organizational justification."
  },
  {
    q: "Does scaling require Kubernetes?",
    a: "No. Kubernetes introduces massive operational complexity that most growing SaaS products simply do not need. Clean Docker containers running on tuned Linux VPS nodes behind Nginx or Caddy reverse proxies provide immense speed, stability, and predictable costs with a fraction of the overhead."
  },
  {
    q: "Can a monolith scale?",
    a: "Absolutely. Some of the world's highest-traffic platforms run on monolithic architectures. Monoliths scale effectively by scaling database queries, introducing background worker processes, separating file compute, adding Redis caching, and running multiple stateless application instances behind a reverse proxy or load balancer."
  },
  {
    q: "Can you scale a multi-tenant SaaS?",
    a: "Yes. We resolve multi-tenant scaling challenges such as 'noisy neighbor' resource hogging, tenant data isolation, tenant-scoped indexing, organization-level rate limiting, quota enforcement, and tenant-aware caching."
  },
  {
    q: "Can you optimize my VPS?",
    a: "Yes. We configure and tune Linux servers (Ubuntu/Debian) on Hetzner, DigitalOcean, Linode, AWS EC2, and other VPS providers. We configure kernel sysctl parameters, Nginx/Caddy reverse proxies, TLS 1.3 optimization, Docker resource constraints, log rotation, and automated daily backups."
  },
  {
    q: "Can you reduce SaaS infrastructure costs?",
    a: "Yes. By optimizing database query efficiency, removing bloated managed cloud tiers, eliminating runaway API polling, and right-sizing server capacity, our optimizations frequently reduce ongoing cloud infrastructure bills by 40% to 75% while simultaneously increasing speed."
  },
  {
    q: "Can you improve API performance?",
    a: "Yes. We reduce API endpoint latency by stripping bloated JSON payloads, eliminating N+1 database queries, introducing response caching with HTTP ETags or Redis, enforcing rate limits, and offloading compute-heavy tasks into background worker queues."
  },
  {
    q: "Can you optimize background jobs?",
    a: "Yes. We restructure job queues using Redis (BullMQ/Sidekiq) or PostgreSQL-based queues, establish dedicated worker pools for heavy compute (PDF generation, bulk data imports, email broadcasts), prevent worker memory exhaustion, and implement robust retry and dead-letter queue (DLQ) mechanics."
  },
  {
    q: "Do I need a code audit before scaling?",
    a: "If your technical bottlenecks are already known and verified through logs or monitoring, we can dive directly into optimization. However, if your team is unsure why the application is slow or failing under load, our SaaS Code Audit & Architecture Review provides the fastest, most structured diagnostic starting point."
  },
  {
    q: "Can you work with code written by another developer?",
    a: "Yes. Most codebases we scale were originally built by outsourced agencies, former co-founders, or offshore teams. We specialize in rapidly auditing, understanding, and improving existing real-world codebases without disruption."
  },
  {
    q: "Will you rewrite my SaaS?",
    a: "We avoid proposing full rewrites whenever possible. Complete rewrites carry high risk, long development delays, and business disruption. In almost all cases, surgical refactoring, query optimization, and architectural decoupling achieve the necessary scaling goals faster and more safely."
  },
  {
    q: "Can you help after the optimization work?",
    a: "Yes. Dazzcode provides ongoing fractional engineering, monthly performance monitoring, database maintenance, and scaling advisory support to ensure your SaaS continues performing flawlessly as traffic multiplies."
  },
  {
    q: "Do you work with SaaS companies outside Kenya?",
    a: "Yes. Dazzcode is headquartered in Nairobi, Kenya, and works remotely with SaaS founders, startups, and software companies across the United Kingdom, North America, Europe, East Africa, and worldwide under strict mutual NDAs."
  }
];

export default function SaasScalingPage() {
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
        "@id": "https://dazzcode.com/services/saas-scaling#service",
        "name": "SaaS Scaling & Performance Optimization",
        "provider": {
          "@id": "https://dazzcode.com/#organization"
        },
        "description":
          "Scale your SaaS with better performance, database optimization, architecture improvements, and reliable infrastructure. Dazzcode helps growing SaaS products handle more users, more data, and heavier workloads without runaway costs.",
        "areaServed": "Global",
        "serviceType": "SaaS Scaling & Technical Performance Engineering",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "Custom Scope",
          "url": "https://dazzcode.com/services/saas-scaling"
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
            "name": "SaaS Scaling & Performance",
            "item": "https://dazzcode.com/services/saas-scaling"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": scalingFaqs.map((faq) => ({
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
      {/* 5. HERO SECTION */}
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
            <span className="text-[#12201B] font-semibold">SaaS Scaling & Performance</span>
          </nav>

       

          {/* Main H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-[#12201B] mb-4">
            Make Your SaaS Faster, More Reliable and Ready to Scale
          </h1>

          <p className="text-xl md:text-2xl font-bold text-[#059669] mb-6">
            Your SaaS is growing. Your infrastructure needs to keep up.
          </p>

          {/* Supporting Copy */}
          <p className="text-lg md:text-xl text-[#52615B] leading-relaxed max-w-3xl mb-8 font-normal">
            When users, traffic and data grow, the architecture that worked for an MVP can start becoming a bottleneck. Dazzcode helps identify and fix the technical limits holding your SaaS back.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
            <Link href="#contact">
              <Button
                size="lg"
                className="w-full sm:w-auto h-13 px-8 text-sm font-bold uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] shadow-lg shadow-[#059669]/20 rounded-xl transition-all cursor-pointer"
              >
                <Zap className="w-4 h-4 mr-2" />
                Scale My SaaS
              </Button>
            </Link>

            <Link href="#bottlenecks">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-13 px-7 text-sm font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3] rounded-xl text-[#12201B] cursor-pointer"
              >
                Find My Bottlenecks
              </Button>
            </Link>
          </div>

          {/* Supporting microcopy */}
          <div className="text-xs text-[#52615B] font-mono flex flex-wrap items-center gap-2 mb-8">
            <span className="font-semibold text-[#12201B]">Performance</span>
            <span>•</span>
            <span className="font-semibold text-[#12201B]">Architecture</span>
            <span>•</span>
            <span className="font-semibold text-[#12201B]">Database</span>
            <span>•</span>
            <span className="font-semibold text-[#12201B]">Infrastructure</span>
          </div>

          {/* 6. HERO VISUAL (Interactive Component) */}
          <SaasScalingHeroPreview />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. PROBLEM SECTION */}
      {/* ========================================================================= */}
      <section id="bottlenecks" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              REALITY OF SOFTWARE GROWTH
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Your SaaS Can Work Fine Until Growth Exposes the Weaknesses
            </h2>
          </div>

          <div className="prose prose-lg text-[#52615B] leading-relaxed space-y-6 mb-12">
            <p>
              In the early stages of a SaaS product, raw performance rarely feels like a blocker. With ten or fifty concurrent users and a modest database table of a few thousand rows, even unindexed SQL queries, unoptimized React state re-renders, and synchronous background routines execute in fractions of a second.
            </p>
            <p>
              As your paying customer base expands, new organizations onboard, and telemetry multiplies, scaling problems rarely arrive as an immediate, clean crash. Instead, they manifest gradually as subtle systemic friction:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-[#12201B] mb-2">Creeping Latency</h3>
              <p className="text-sm text-[#52615B] leading-relaxed">
                Pages and primary dashboards that used to open instantly take 4 to 8 seconds to load as aggregate calculations lock production tables.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-[#12201B] mb-2">Database Exhaustion</h3>
              <p className="text-sm text-[#52615B] leading-relaxed">
                PostgreSQL connection pools saturate, query execution times spike unpredictably, and memory consumption grows disproportionately.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-[#12201B] mb-2">Async Queue Stalls</h3>
              <p className="text-sm text-[#52615B] leading-relaxed">
                Transactional emails, webhook notifications, data imports, and report generation queues back up, creating customer-facing delays.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#F0FDF4] border border-[#A7F3D0] text-[#065F46] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-base text-[#047857] mb-1">
                The First Step Is Measurement & Diagnosis
              </h4>
              <p className="text-sm text-[#065F46]">
                A SaaS does not necessarily need major infrastructure changes simply because user count increases. We identify exact software bottlenecks first.
              </p>
            </div>
            <Link href="#contact" className="shrink-0">
              <Button size="sm" className="bg-[#059669] text-white hover:bg-[#047857] font-bold text-xs uppercase tracking-wider rounded-xl">
                Find My Bottlenecks
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. WARNING SIGNS YOUR SAAS NEEDS SCALING */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              DIAGNOSTIC CHECKLIST
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Is Your SaaS Starting to Hit Its Limits?
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              If your development team or customers are experiencing any of these common warning signs, your architecture requires focused performance tuning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] hover:border-[#059669] transition-all shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#DC2626] bg-[#FEF2F2] px-2.5 py-1 rounded-full">
                  User Experience
                </span>
                <Clock className="w-5 h-5 text-[#52615B]" />
              </div>
              <h3 className="font-bold text-lg text-[#12201B] mb-2">Slow Application</h3>
              <p className="text-sm text-[#52615B] leading-relaxed">
                Users are waiting longer for pages and interactive actions. Buttons lag after clicking, and full page refreshes feel heavy.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] hover:border-[#059669] transition-all shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#DC2626] bg-[#FEF2F2] px-2.5 py-1 rounded-full">
                  API Health
                </span>
                <Zap className="w-5 h-5 text-[#52615B]" />
              </div>
              <h3 className="font-bold text-lg text-[#12201B] mb-2">Slow API Latency</h3>
              <p className="text-sm text-[#52615B] leading-relaxed">
                Requests that used to return in 50ms are taking 800ms to 2.5 seconds, risking HTTP 504 gateway timeout errors under load.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] hover:border-[#059669] transition-all shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#DC2626] bg-[#FEF2F2] px-2.5 py-1 rounded-full">
                  Database
                </span>
                <Database className="w-5 h-5 text-[#52615B]" />
              </div>
              <h3 className="font-bold text-lg text-[#12201B] mb-2">Database Bottlenecks</h3>
              <p className="text-sm text-[#52615B] leading-relaxed">
                Queries become slow as data volume scales. Tables lack composite indexes, causing full sequential table scans and CPU lockups.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] hover:border-[#059669] transition-all shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#DC2626] bg-[#FEF2F2] px-2.5 py-1 rounded-full">
                  Compute
                </span>
                <Cpu className="w-5 h-5 text-[#52615B]" />
              </div>
              <h3 className="font-bold text-lg text-[#12201B] mb-2">Server Overload</h3>
              <p className="text-sm text-[#52615B] leading-relaxed">
                Server CPU or memory regularly approaches 85–100% capacity during normal working hours without an abnormal surge in traffic.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] hover:border-[#059669] transition-all shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#DC2626] bg-[#FEF2F2] px-2.5 py-1 rounded-full">
                  Background Jobs
                </span>
                <Layers className="w-5 h-5 text-[#52615B]" />
              </div>
              <h3 className="font-bold text-lg text-[#12201B] mb-2">Background Job Delays</h3>
              <p className="text-sm text-[#52615B] leading-relaxed">
                Emails, scheduled reports, batch imports, or asynchronous jobs are backing up in Redis/queue storage and failing to process in real time.
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] hover:border-[#059669] transition-all shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#DC2626] bg-[#FEF2F2] px-2.5 py-1 rounded-full">
                  Cloud Spend
                </span>
                <DollarSign className="w-5 h-5 text-[#52615B]" />
              </div>
              <h3 className="font-bold text-lg text-[#12201B] mb-2">Increasing Infrastructure Costs</h3>
              <p className="text-sm text-[#52615B] leading-relaxed">
                Your AWS, GCP, or VPS cloud hosting invoice is growing faster than revenue as you continuously upgrade instance sizes to mask code flaws.
              </p>
            </div>

            {/* Card 7 */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] hover:border-[#059669] transition-all shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#DC2626] bg-[#FEF2F2] px-2.5 py-1 rounded-full">
                  DevOps
                </span>
                <RefreshCw className="w-5 h-5 text-[#52615B]" />
              </div>
              <h3 className="font-bold text-lg text-[#12201B] mb-2">Deployment Problems</h3>
              <p className="text-sm text-[#52615B] leading-relaxed">
                Deploying new releases increasingly causes intermittent downtime, database migration locks, or memory spikes that require server reboots.
              </p>
            </div>

            {/* Card 8 */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] hover:border-[#059669] transition-all shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#DC2626] bg-[#FEF2F2] px-2.5 py-1 rounded-full">
                  Traffic Spikes
                </span>
                <Activity className="w-5 h-5 text-[#52615B]" />
              </div>
              <h3 className="font-bold text-lg text-[#12201B] mb-2">Traffic Spikes & Downtime</h3>
              <p className="text-sm text-[#52615B] leading-relaxed">
                The application becomes sluggish or throws 502/503 errors whenever marketing runs a campaign, sends a newsletter, or hits peak business hours.
              </p>
            </div>

            {/* Card 9 */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] hover:border-[#059669] transition-all shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#DC2626] bg-[#FEF2F2] px-2.5 py-1 rounded-full">
                  Code Health
                </span>
                <Code2 className="w-5 h-5 text-[#52615B]" />
              </div>
              <h3 className="font-bold text-lg text-[#12201B] mb-2">Growing Technical Debt</h3>
              <p className="text-sm text-[#52615B] leading-relaxed">
                The codebase has become tangled, making it risky and difficult to add new features without inadvertently slowing down existing modules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. SCALING IS MORE THAN MORE SERVERS */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block">
                ENGINEERING DISCIPLINE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
                Scaling Your SaaS Isn&apos;t Just About Adding More Servers
              </h2>
              <p className="text-base text-[#52615B] leading-relaxed">
                When an application slows down, the instinctive reaction is often to upgrade cloud instance tiers—moving from 4 vCPUs to 16 vCPUs, or doubling RAM.
              </p>
              <p className="text-base text-[#52615B] leading-relaxed">
                While larger servers can temporarily mask software inefficiency, they never cure the root cause. Throwing hardware at unoptimized software is expensive, unsustainable, and often delays inevitable failure.
              </p>
              <div className="p-4 rounded-xl bg-[#F8FAF9] border-l-4 border-[#059669] text-sm text-[#12201B] font-medium italic">
                &ldquo;Before adding infrastructure, find out what is actually slowing the system down.&rdquo;
              </div>
            </div>

            <div className="md:col-span-5 p-6 rounded-3xl bg-[#12201B] text-white shadow-xl">
              <h3 className="font-black text-lg text-[#10B981] mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Root Causes Hardware Cannot Fix
              </h3>
              <ul className="space-y-3 font-mono text-xs text-[#E2EAE6]">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>Unindexed SQL queries executing full table scans</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>N+1 database queries inside iterative application loops</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>Synchronous I/O operations blocking the event loop</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>Unbounded memory leaks accumulating across long-running workers</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>Bloated API payloads transmitting megabytes of redundant data</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>Absence of strategic multi-level caching</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. WHAT DAZZCODE OPTIMIZES */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              HOLISTIC PERFORMANCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              SaaS Performance Optimization Across the Stack
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              True software scalability requires seamless coordination between frontend rendering, backend execution, database IOPS, and production infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. Frontend */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#12201B] mb-2">Frontend Performance</h3>
                <p className="text-xs text-[#52615B] mb-4">
                  Eliminating render lag and optimizing Core Web Vitals so the user interface feels instant.
                </p>
                <ul className="text-xs text-[#52615B] space-y-2 font-mono">
                  <li>• Core Web Vitals (LCP, INP, CLS)</li>
                  <li>• Bundle size reduction & code splitting</li>
                  <li>• React Server Component hydration</li>
                  <li>• Lazy loading & asset compression</li>
                  <li>• Redundant re-render elimination</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F1F5F3] text-[11px] font-mono text-[#059669] font-semibold">
                Fast Interactive UI
              </div>
            </div>

            {/* 2. Backend */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#12201B] mb-2">Backend & API Optimization</h3>
                <p className="text-xs text-[#52615B] mb-4">
                  Streamlining API endpoints, business logic algorithms, and asynchronous request handling.
                </p>
                <ul className="text-xs text-[#52615B] space-y-2 font-mono">
                  <li>• Low-latency JSON serialization</li>
                  <li>• Non-blocking async I/O flow</li>
                  <li>• Request rate limiting & throttling</li>
                  <li>• Memory allocation profiling</li>
                  <li>• Webhook delivery concurrency</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F1F5F3] text-[11px] font-mono text-[#059669] font-semibold">
                Sub-50ms API Latency
              </div>
            </div>

            {/* 3. Database */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#12201B] mb-2">Database Performance</h3>
                <p className="text-xs text-[#52615B] mb-4">
                  Eliminating slow queries and designing high-efficiency indexing strategies for large datasets.
                </p>
                <ul className="text-xs text-[#52615B] space-y-2 font-mono">
                  <li>• Composite & partial indexes</li>
                  <li>• Keyset/cursor-based pagination</li>
                  <li>• Connection pooling (PgBouncer)</li>
                  <li>• Join optimization & query plans</li>
                  <li>• Table partitioning for log data</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F1F5F3] text-[11px] font-mono text-[#059669] font-semibold">
                PostgreSQL & MySQL Tuning
              </div>
            </div>

            {/* 4. Caching */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#12201B] mb-2">Multi-Level Caching</h3>
                <p className="text-xs text-[#52615B] mb-4">
                  Serving repetitive reads directly from memory with robust cache invalidation rules.
                </p>
                <ul className="text-xs text-[#52615B] space-y-2 font-mono">
                  <li>• Redis in-memory key-value caching</li>
                  <li>• Edge HTTP caching & ETags</li>
                  <li>• Tagged cache invalidation</li>
                  <li>• Frequent query result memoization</li>
                  <li>• Stale-while-revalidate patterns</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F1F5F3] text-[11px] font-mono text-[#059669] font-semibold">
                90%+ Cache Hit Ratios
              </div>
            </div>

            {/* 5. Background Jobs */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#12201B] mb-2">Background Worker Queues</h3>
                <p className="text-xs text-[#52615B] mb-4">
                  Decoupling heavy tasks from web requests so user actions remain snappy and responsive.
                </p>
                <ul className="text-xs text-[#52615B] space-y-2 font-mono">
                  <li>• BullMQ / Redis asynchronous queues</li>
                  <li>• Priority queues & worker pools</li>
                  <li>• Sandboxed PDF & report exports</li>
                  <li>• Automatic retries & Dead-Letter Queues</li>
                  <li>• Worker memory isolation</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F1F5F3] text-[11px] font-mono text-[#059669] font-semibold">
                Zero Request Blockage
              </div>
            </div>

            {/* 6. Infrastructure */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#12201B] mb-2">Infrastructure & VPS</h3>
                <p className="text-xs text-[#52615B] mb-4">
                  Configuring hardened Linux servers, container runtimes, and reverse proxies for maximum throughput.
                </p>
                <ul className="text-xs text-[#52615B] space-y-2 font-mono">
                  <li>• Linux kernel sysctl performance tuning</li>
                  <li>• Nginx / Caddy reverse proxy caching</li>
                  <li>• Docker container resource sizing</li>
                  <li>• Automated zero-downtime deploys</li>
                  <li>• Encrypted daily automated backups</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F1F5F3] text-[11px] font-mono text-[#059669] font-semibold">
                Reliable Production Uptime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. DATABASE OPTIMIZATION */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              CORE STORAGE LAYER
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Optimize the Database Before It Becomes the Bottleneck
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-sm text-[#52615B] leading-relaxed">
            <p>
              In over 80% of scaling investigations, database performance is the single largest factor constraining SaaS growth. When queries do not utilize efficient indexes, the database engine must scan millions of records on disk for every single HTTP request.
            </p>
            <p>
              Dazzcode works with PostgreSQL and MySQL to investigate database performance issues at both the query execution level and the system architectural level—without requiring risky schema migrations or data loss.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-sm text-[#12201B] mb-1">EXPLAIN ANALYZE</div>
              <p className="text-xs text-[#52615B]">
                Profiling real query cost trees and disk page buffers to pinpoint expensive node scans.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-sm text-[#12201B] mb-1">Composite Indexes</div>
              <p className="text-xs text-[#52615B]">
                Creating multi-column B-tree and partial indexes that match exact WHERE and ORDER BY clauses.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-sm text-[#12201B] mb-1">Keyset Pagination</div>
              <p className="text-xs text-[#52615B]">
                Replacing slow OFFSET queries with high-speed seek-based cursor pagination for massive tables.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-sm text-[#12201B] mb-1">PgBouncer Pooling</div>
              <p className="text-xs text-[#52615B]">
                Eliminating connection churn by multiplexing thousands of client connections across lightweight worker threads.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#F0FDF4] border border-[#A7F3D0] text-xs text-[#065F46] font-mono">
            <strong>PostgreSQL Specialization:</strong> Dazzcode works with PostgreSQL and can investigate database performance issues at the query, index, configuration, and architecture level.
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12 & 13. API & FRONTEND PERFORMANCE */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: API Performance */}
            <div className="p-8 rounded-3xl bg-white border border-[#E2EAE6] shadow-xs">
              <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
                BACKEND & API
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#12201B] tracking-tight mb-4">
                Faster APIs, Better User Experience
              </h2>
              <p className="text-sm text-[#52615B] leading-relaxed mb-6">
                Optimizing backend APIs often improves both frontend responsiveness and infrastructure efficiency simultaneously. When an endpoint returns a concise, pre-computed payload in 20ms instead of 600ms, the entire application breathes easier.
              </p>
              <ul className="space-y-2.5 text-xs font-mono text-[#12201B]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Payload size minimization & field filtering</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Elimination of N+1 database queries inside resolvers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Strategic HTTP ETag and Redis response caching</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Intelligent rate limiting & DDoS edge protection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Asynchronous queuing for slow third-party API webhooks</span>
                </li>
              </ul>
            </div>

            {/* Right: Frontend Performance */}
            <div className="p-8 rounded-3xl bg-white border border-[#E2EAE6] shadow-xs">
              <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
                CLIENT EXPERIENCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#12201B] tracking-tight mb-4">
                Improve the Experience Users Actually Feel
              </h2>
              <p className="text-sm text-[#52615B] leading-relaxed mb-6">
                No matter how fast your database is, if your client-side bundle is bloated with hundreds of kilobytes of unused JavaScript, users will perceive your SaaS as slow and clunky.
              </p>
              <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] text-xs text-[#52615B] mb-6">
                <strong className="text-[#12201B]">Next.js Performance:</strong> For Next.js applications, optimization may involve rendering strategy (Server Components vs Client Components), granular data fetching, caching, bundle size reduction and Node.js server performance.
              </div>
              <ul className="space-y-2.5 text-xs font-mono text-[#12201B]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Optimizing Core Web Vitals (LCP, INP, CLS)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Code splitting & route-based dynamic imports</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Modern image formats (AVIF/WebP) & responsive sizes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Elimination of expensive React render loops</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 14 & 15. INFRASTRUCTURE SCALING & MONOLITH VS MICROSERVICES */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              PRACTICAL INFRASTRUCTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Scale the Infrastructure Around the Product
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              Infrastructure should match real business workloads, not architectural fashion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-base text-[#12201B] mb-2">1. Vertical Scaling</div>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Allocating more dedicated CPU cores, RAM, and NVMe IOPS to an existing server to maximize single-node efficiency.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-base text-[#12201B] mb-2">2. Service Separation</div>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Isolating heavy components: moving PostgreSQL and Redis onto dedicated nodes away from the application runtime.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-base text-[#12201B] mb-2">3. Worker Decoupling</div>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Running asynchronous queue workers on separate background compute nodes so web traffic is never starved of CPU.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-base text-[#12201B] mb-2">4. Load Balancing</div>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Distributing web traffic across multiple stateless application instances behind an Nginx or HAProxy reverse proxy.
              </p>
            </div>
          </div>

          {/* Monolith vs Microservices Callout */}
          <div className="p-8 rounded-3xl bg-[#12201B] text-white shadow-xl">
            <div className="max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#10B981] font-bold block mb-2">
                DAZZCODE ARCHITECTURAL PRINCIPLE
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-4">
                Don&apos;t Turn a Working SaaS Into Microservices Just Because You Can
              </h3>
              <p className="text-sm text-[#A7B9B2] leading-relaxed mb-6">
                A well-structured monolith can scale significantly. Microservices introduce substantial operational overhead, network latency between internal services, complex distributed transactions, deployment fragility, and difficult monitoring.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-[#E2EAE6]">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <strong className="text-[#10B981] block mb-1">When Microservices Make Sense:</strong>
                  <span>Distinct operational teams, genuinely isolated high-compute workloads, or independent regulatory compliance domains.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <strong className="text-[#EF4444] block mb-1">The Microservices Trap:</strong>
                  <span>Splitting an MVP into 15 microservices prematurely creates distributed latency and debugging nightmares without solving code-level bottlenecks.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 16. SAAS MULTI-TENANT SCALING */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              MULTI-TENANCY AT SCALE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Scaling Multi-Tenant SaaS Applications
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              Multi-tenant B2B SaaS architectures present unique scaling challenges as different customer organizations generate wildly uneven workloads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] shadow-xs">
              <h3 className="font-bold text-lg text-[#12201B] mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#059669]" />
                The &ldquo;Noisy Neighbor&rdquo; Challenge
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                When a single enterprise customer triggers a massive bulk export or syncs 100,000 records, unisolated systems can exhaust database connections, causing slowdowns for every other tenant on the platform.
              </p>
              <div className="text-xs font-mono text-[#059669] font-semibold">
                ✓ Solution: Organization-scoped rate limits, fair-share worker queues, and tenant query isolation.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] shadow-xs">
              <h3 className="font-bold text-lg text-[#12201B] mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#059669]" />
                Tenant Data Isolation & RLS
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                As tables scale to millions of rows, ensuring complete tenant isolation without degrading query speeds requires disciplined schema indexing and PostgreSQL Row-Level Security (RLS) optimization.
              </p>
              <div className="text-xs font-mono text-[#059669] font-semibold">
                ✓ Solution: Composite tenant indexes `(org_id, created_at DESC)` and indexed RLS policies.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 17 & 18. PERFORMANCE MEASUREMENT & OBSERVABILITY */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block">
                DATA-DRIVEN METHODOLOGY
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
                You Can&apos;t Optimize What You Don&apos;t Measure
              </h2>
              <p className="text-base text-[#52615B] leading-relaxed">
                Performance tuning without telemetry is guesswork. Dazzcode establishes clear, verified baseline measurements before making a single code modification.
              </p>
              <div className="p-5 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] font-mono text-xs text-[#065F46] space-y-2">
                <div className="font-bold text-sm text-[#047857]">The Optimization Cycle:</div>
                <div className="flex items-center gap-2 font-bold text-xs flex-wrap">
                  <span>Measure Baseline</span>
                  <span>→</span>
                  <span>Diagnose Root Cause</span>
                  <span>→</span>
                  <span>Implement Change</span>
                  <span>→</span>
                  <span>Measure Again</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-6 p-6 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <h3 className="font-bold text-lg text-[#12201B] mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#059669]" />
                Know What Your SaaS Is Doing in Production
              </h3>
              <p className="text-xs text-[#52615B] mb-4">
                Scaling without observability makes production incidents impossible to diagnose quickly. We implement lightweight, high-signal telemetry:
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white border border-[#E2EAE6]">
                  <span className="font-bold text-[#12201B] block">p95 / p99 Latency</span>
                  <span className="text-[#52615B] text-[11px]">Real tail-end response times</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E2EAE6]">
                  <span className="font-bold text-[#12201B] block">Slow Query Logging</span>
                  <span className="text-[#52615B] text-[11px]">Auto-capturing queries &gt;50ms</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E2EAE6]">
                  <span className="font-bold text-[#12201B] block">Error Tracking</span>
                  <span className="text-[#52615B] text-[11px]">Sentry structured stack traces</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E2EAE6]">
                  <span className="font-bold text-[#12201B] block">Queue Lag Alerts</span>
                  <span className="text-[#52615B] text-[11px]">Proactive worker telemetry</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 19 & 20. SECURITY & INFRASTRUCTURE COST OPTIMIZATION */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Security during scaling */}
            <div className="p-8 rounded-3xl bg-white border border-[#E2EAE6] shadow-xs">
              <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
                SECURITY INTEGRITY
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#12201B] tracking-tight mb-4">
                Scaling Shouldn&apos;t Mean Creating New Security Problems
              </h2>
              <p className="text-sm text-[#52615B] leading-relaxed mb-6">
                When systems are hastily modified for speed, developers frequently bypass authorization middleware or cache sensitive data carelessly. We ensure caching, tenant isolation, API rate limiting, and database access controls remain rock-solid.
              </p>
              <div className="p-4 rounded-xl bg-[#FEF2F2] border border-[#FECACA] text-xs text-[#991B1B]">
                <strong>Scope Clarity:</strong> Performance optimization is not a substitute for a dedicated penetration test or formal compliance security assessment.
              </div>
            </div>

            {/* Cost Optimization */}
            <div className="p-8 rounded-3xl bg-white border border-[#E2EAE6] shadow-xs">
              <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
                COST EFFICIENCY
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#12201B] tracking-tight mb-4">
                Scale Without Wasting Infrastructure Spend
              </h2>
              <p className="text-sm text-[#52615B] leading-relaxed mb-6">
                Many growing SaaS startups overpay significantly for managed cloud services (RDS, ElastiCache, NAT gateways, managed Kubernetes) when tuned, dedicated Linux VPS instances deliver superior performance at 50% to 80% lower cost.
              </p>
              <div className="p-4 rounded-xl bg-[#F0FDF4] border border-[#DCFCE7] text-xs text-[#166534]">
                <strong>Goal:</strong> Get the performance, reliability, and capacity you need from infrastructure that is appropriate for the workload.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 21 & 22. VPS DEPLOYMENT & WHEN TO SCALE */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
                PRODUCTION HARDENING
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#12201B] tracking-tight mb-4">
                VPS and Production Infrastructure Optimization
              </h2>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                Dazzcode optimizes Linux VPS servers (Ubuntu/Debian on Hetzner, DigitalOcean, AWS) for maximum application throughput:
              </p>
              <ul className="text-xs text-[#52615B] space-y-2 font-mono">
                <li>• Nginx / Caddy reverse proxies with HTTP/2 & HTTP/3</li>
                <li>• Docker container resource limits and restart policies</li>
                <li>• Automated SSL/TLS renewal with Let&apos;s Encrypt</li>
                <li>• Automated offsite encrypted daily backups</li>
                <li>• Systemd process managers and log rotation</li>
              </ul>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
                TIMING & PRUDENCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#12201B] tracking-tight mb-4">
                When Should You Start Scaling Your SaaS?
              </h2>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                You shouldn&apos;t wait until the system suffers catastrophic downtime during an executive demo or peak sales hour. Signals to scale include:
              </p>
              <ul className="text-xs text-[#52615B] space-y-2 font-mono">
                <li>• Consistent performance degradation across release cycles</li>
                <li>• Rapidly increasing database row volume (&gt;100k records)</li>
                <li>• Customer complaints regarding sluggish dashboard pages</li>
                <li>• Upcoming marketing campaigns or high-traffic enterprise launches</li>
              </ul>
              <div className="mt-4 p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] text-xs text-[#52615B]">
                <em>Note: Scaling too early creates unnecessary architectural complexity. Optimize when actual workloads demand it.</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 23. DAZZCODE SCALING PROCESS (9 STEPS) */}
      {/* ========================================================================= */}
      <section id="process" className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              ENGINEERING WORKFLOW
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Our 9-Step SaaS Scaling Process
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              A structured, scientific engineering methodology from initial telemetry audit to continuous production monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Understand the Problem",
                desc: "Identify what is slow, unreliable, or unexpectedly expensive in the current application workflow."
              },
              {
                step: "02",
                title: "Establish Baselines",
                desc: "Measure current p95/p99 latencies, database query duration, CPU/memory usage, and error frequencies."
              },
              {
                step: "03",
                title: "Find Bottlenecks",
                desc: "Profile frontend bundles, backend endpoint execution paths, slow SQL logs, and third-party APIs."
              },
              {
                step: "04",
                title: "Prioritize Remediation",
                desc: "Rank identified bottlenecks by business impact and implementation effort for maximum immediate ROI."
              },
              {
                step: "05",
                title: "Targeted Optimization",
                desc: "Execute surgical fixes: composite indexing, non-blocking async workers, connection pooling, and caching."
              },
              {
                step: "06",
                title: "Load & Stress Testing",
                desc: "Simulate concurrent peak traffic using synthetic load testing tools to verify stability under stress."
              },
              {
                step: "07",
                title: "Deploy Carefully",
                desc: "Roll out optimizations using zero-downtime deployment pipelines with rapid rollback safeguards."
              },
              {
                step: "08",
                title: "Production Monitoring",
                desc: "Measure post-deployment performance against initial baselines to confirm verified speed gains."
              },
              {
                step: "09",
                title: "Continuous Discipline",
                desc: "Establish ongoing query monitoring and alerting so software scaling remains an enduring engineering practice."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#E2EAE6] hover:border-[#059669] transition-all shadow-xs relative">
                <span className="text-2xl font-black font-mono text-[#059669]/30 mb-2 block">
                  {item.step}
                </span>
                <h3 className="font-bold text-base text-[#12201B] mb-2">{item.title}</h3>
                <p className="text-xs text-[#52615B] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 24. WHAT WE CAN HELP WITH (10 SERVICES) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              SERVICES SCOPE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              SaaS Scaling & Optimization Services
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              Targeted technical capabilities designed to solve specific scaling challenges across your product lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: Zap,
                title: "Performance Optimization",
                desc: "Improve slow pages, dashboards, API latency, and heavy backend business operations."
              },
              {
                icon: Database,
                title: "Database Optimization",
                desc: "Profile PostgreSQL and MySQL queries, eliminate sequential table scans, and build composite indexes."
              },
              {
                icon: Layers,
                title: "Architecture Optimization",
                desc: "Resolve system bottlenecks, decoupled dependencies, and architectural constraints."
              },
              {
                icon: Server,
                title: "Infrastructure Scaling",
                desc: "Prepare servers, Linux VPS nodes, and reverse proxies for sustained multi-thousand user traffic."
              },
              {
                icon: Activity,
                title: "API Optimization",
                desc: "Reduce endpoint response times, serialize payloads efficiently, and implement rate limits."
              },
              {
                icon: RefreshCw,
                title: "Background Job Optimization",
                desc: "Structure Redis/BullMQ worker queues to process heavy tasks asynchronously without blocking."
              },
              {
                icon: Sparkles,
                title: "Multi-Tier Caching",
                desc: "Introduce Redis in-memory caching and Edge HTTP caching with predictable invalidation rules."
              },
              {
                icon: Gauge,
                title: "Monitoring & Observability",
                desc: "Implement Sentry error tracking, APM metrics, uptime alerts, and slow query telemetry."
              },
              {
                icon: DollarSign,
                title: "Cloud Cost Optimization",
                desc: "Audit bloated infrastructure tiers and right-size capacity to reduce monthly cloud invoices."
              },
              {
                icon: Code2,
                title: "Technical Debt Reduction",
                desc: "Clean up fragile legacy modules and refactor spaghetti code holding back your product roadmap."
              }
            ].map((service, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center shrink-0">
                  <service.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#12201B] mb-1">{service.title}</h3>
                  <p className="text-xs text-[#52615B] leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="#contact">
              <Button size="lg" className="bg-[#059669] text-white hover:bg-[#10B981] font-bold text-xs uppercase tracking-wider rounded-xl h-12 px-8">
                Talk to a SaaS Engineer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 25 & 26. EXISTING SAAS CODEBASE & REWRITE VS REFACTOR */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="p-8 md:p-12 rounded-3xl bg-white border border-[#E2EAE6] shadow-xs space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
                EXISTING CODEBASE FRIENDLY
              </span>
              <h2 className="text-3xl font-black text-[#12201B] tracking-tight mb-4">
                Already Have a SaaS? We Can Work With What You Have
              </h2>
              <p className="text-base text-[#52615B] leading-relaxed mb-6">
                You don&apos;t necessarily need to rebuild your SaaS to scale it. Dazzcode works directly inside your existing codebase, determining whether the right approach is surgical query optimization, modular refactoring, background queue decoupling, or infrastructure tuning.
              </p>
              <div className="p-4 rounded-xl bg-[#F0FDF4] border border-[#DCFCE7] text-xs text-[#065F46] flex items-center justify-between flex-wrap gap-3">
                <span>
                  Unsure where your bottlenecks originate? Start with our comprehensive codebase evaluation.
                </span>
                <Link href="/services/saas-code-audit" className="font-bold text-[#059669] hover:underline flex items-center gap-1">
                  SaaS Code Audit & Architecture Review <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="pt-8 border-t border-[#E2EAE6]">
              <h3 className="text-2xl font-black text-[#12201B] tracking-tight mb-4">
                Do You Need to Rewrite Your SaaS?
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                Many agencies default to recommending expensive complete rewrites because it is easier for them than understanding existing code. We take the opposite approach. A rewrite should only be considered when obsolete legacy frameworks or fundamental design flaws make incremental remediation economically unviable.
              </p>
              <p className="text-sm text-[#52615B] leading-relaxed font-semibold text-[#12201B]">
                In the vast majority of cases, targeted refactoring and incremental migration deliver the necessary scalability with zero downtime, substantially lower costs, and zero disruption to your paying customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 27. CASE STUDIES (VERIFIED WORK) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              PROVEN RESULTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              SaaS Performance & Scaling Work
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              Real-world engineering case studies showcasing measured performance gains and architectural optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#059669] bg-[#ECFDF5] px-2.5 py-1 rounded-full">
                    Multi-Tenant Retail SaaS
                  </span>
                  <span className="text-xs font-mono text-[#52615B]">DazzPOS System</span>
                </div>
                <h3 className="text-xl font-bold text-[#12201B] mb-2">
                  Scaling Multi-Tenant Inventory & Real-Time Checkout Under Heavy Store Traffic
                </h3>
                <div className="space-y-3 text-xs text-[#52615B] leading-relaxed mb-6 font-mono">
                  <div>
                    <strong className="text-[#12201B]">Problem:</strong> Sequential table scans during daily inventory aggregations caused checkout timeouts across multi-branch stores.
                  </div>
                  <div>
                    <strong className="text-[#12201B]">Bottleneck:</strong> Unindexed tenant relations and unpooled database connections.
                  </div>
                  <div>
                    <strong className="text-[#12201B]">Work:</strong> Composite B-tree indexes, PgBouncer connection pooling, Redis sales caching, and BullMQ async receipt generation.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2EAE6] grid grid-cols-3 gap-2 text-center font-mono">
                <div className="p-2 rounded-xl bg-white border border-[#E2EAE6]">
                  <div className="text-base font-bold text-[#059669]">42ms</div>
                  <div className="text-[10px] text-[#52615B]">p95 Latency (was 1.8s)</div>
                </div>
                <div className="p-2 rounded-xl bg-white border border-[#E2EAE6]">
                  <div className="text-base font-bold text-[#059669]">0%</div>
                  <div className="text-[10px] text-[#52615B]">Checkout Timeouts</div>
                </div>
                <div className="p-2 rounded-xl bg-white border border-[#E2EAE6]">
                  <div className="text-base font-bold text-[#059669]">100%</div>
                  <div className="text-[10px] text-[#52615B]">Tenant Isolation</div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#059669] bg-[#ECFDF5] px-2.5 py-1 rounded-full">
                    High-Throughput SaaS Pipeline
                  </span>
                  <span className="text-xs font-mono text-[#52615B]">AI Lead Automation</span>
                </div>
                <h3 className="text-xl font-bold text-[#12201B] mb-2">
                  Optimizing Asynchronous AI Scraping & Lead Enrichment Throughput
                </h3>
                <div className="space-y-3 text-xs text-[#52615B] leading-relaxed mb-6 font-mono">
                  <div>
                    <strong className="text-[#12201B]">Problem:</strong> Synchronous AI webhook callbacks and scraping workers were crashing Node.js processes due to heap memory exhaustion.
                  </div>
                  <div>
                    <strong className="text-[#12201B]">Bottleneck:</strong> Event loop blocking operations and absence of worker sandboxing.
                  </div>
                  <div>
                    <strong className="text-[#12201B]">Work:</strong> Isolated Docker worker pools, Redis-backed rate throttles, exponential backoff retries, and pgvector query indexing.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2EAE6] grid grid-cols-3 gap-2 text-center font-mono">
                <div className="p-2 rounded-xl bg-white border border-[#E2EAE6]">
                  <div className="text-base font-bold text-[#059669]">12x</div>
                  <div className="text-[10px] text-[#52615B]">Queue Throughput</div>
                </div>
                <div className="p-2 rounded-xl bg-white border border-[#E2EAE6]">
                  <div className="text-base font-bold text-[#059669]">65%</div>
                  <div className="text-[10px] text-[#52615B]">VPS Cost Reduction</div>
                </div>
                <div className="p-2 rounded-xl bg-white border border-[#E2EAE6]">
                  <div className="text-base font-bold text-[#059669]">99.98%</div>
                  <div className="text-[10px] text-[#52615B]">Job Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 28. WHY DAZZCODE */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              WHY PARTNER WITH DAZZCODE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              A Technical Partner for Growing SaaS Products
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              We combine deep systems engineering rigor with pragmatic business understanding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Full-Stack Understanding</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Scaling bottlenecks cross frontend, backend, database, and infrastructure boundaries. We debug and tune the entire system cohesively.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Practical Architecture</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                We select technologies based on verified engineering requirements, not buzzwords. No unnecessary microservices or runaway cloud complexity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Gauge className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Performance Before Hype</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                We measure the actual bottleneck with query profilers and telemetry before proposing changes, avoiding wasteful premature rewrites.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Existing-Code Friendly</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                We respect and improve what already works. We can work with codebases written by previous developers or legacy agencies seamlessly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Kenya-Based, Globally Focused</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Headquartered in Nairobi, Kenya, Dazzcode engineers scalable architectures for high-growth startups locally in East Africa and globally across the UK and US.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Confidential & Secure</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                All client source code, database architectures, and telemetry data are handled under strict mutual Non-Disclosure Agreements (NDAs).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 29. PRICING SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="p-8 md:p-12 rounded-3xl bg-[#12201B] text-white shadow-xl">
            <div className="max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#10B981] font-bold block mb-2">
                TRANSPARENT ENGAGEMENT
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
                How Much Does SaaS Scaling Cost?
              </h2>
              <p className="text-base text-[#A7B9B2] leading-relaxed mb-6">
                Because scaling bottlenecks vary widely—ranging from single missing composite indexes to extensive asynchronous queue decoupling and VPS reconfigurations—we do not publish arbitrary fixed prices.
              </p>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 font-mono text-xs text-[#E2EAE6] space-y-2 mb-8">
                <div className="font-bold text-white text-sm">Key Scoping Factors:</div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#C5D5CF]">
                  <li>• Codebase size & framework stack</li>
                  <li>• Database size & query complexity</li>
                  <li>• Peak concurrent users & req/sec</li>
                  <li>• Severity of active bottlenecks</li>
                  <li>• Asynchronous worker requirements</li>
                  <li>• Production deployment & testing scope</li>
                </ul>
              </div>
              <p className="text-sm font-mono text-[#10B981] font-bold mb-6">
                Scaling projects are scoped transparently after understanding the system and the bottlenecks.
              </p>
              <Link href="#contact">
                <Button size="lg" className="bg-[#059669] text-white hover:bg-[#10B981] font-bold text-xs uppercase tracking-wider rounded-xl h-12 px-8">
                  Request a Scaling Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 30. FAQ SECTION */}
      {/* ========================================================================= */}
      <section id="faq" className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              SaaS Scaling & Optimization FAQs
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              Clear, transparent answers to technical and operational questions regarding our scaling services.
            </p>
          </div>

          <div className="space-y-4">
            {scalingFaqs.map((faq, idx) => (
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
      {/* 31. INTERNAL LINKING & SERVICE ECOSYSTEM */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              ENGINEERING ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Related Engineering Services
            </h2>
            <p className="text-base text-[#52615B] mt-2">
              Explore Dazzcode&apos;s specialized technical capabilities across the software lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/saas-code-audit" className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] hover:border-[#059669] transition-all group">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#059669] font-bold block mb-2">
                Diagnostic Starting Point
              </span>
              <h3 className="font-bold text-base text-[#12201B] group-hover:text-[#059669] transition-colors mb-2 flex items-center justify-between">
                <span>SaaS Code Audit & Architecture Review</span>
                <ArrowUpRight className="w-4 h-4 text-[#52615B] group-hover:text-[#059669]" />
              </h3>
              <p className="text-xs text-[#52615B]">
                Unsure where your performance bottlenecks lie? Get an independent 10-dimension evaluation of your codebase and architecture.
              </p>
            </Link>

            <Link href="/services/saas-mvp-development" className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] hover:border-[#059669] transition-all group">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#059669] font-bold block mb-2">
                Early Stage Founders
              </span>
              <h3 className="font-bold text-base text-[#12201B] group-hover:text-[#059669] transition-colors mb-2 flex items-center justify-between">
                <span>SaaS MVP Development</span>
                <ArrowUpRight className="w-4 h-4 text-[#52615B] group-hover:text-[#059669]" />
              </h3>
              <p className="text-xs text-[#52615B]">
                Building a brand new product from scratch? Launch a focused, scalable MVP with multi-tenancy and Stripe billing in 4–8 weeks.
              </p>
            </Link>

            <Link href="/services/custom-saas-development" className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] hover:border-[#059669] transition-all group">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#059669] font-bold block mb-2">
                End-to-End Build
              </span>
              <h3 className="font-bold text-base text-[#12201B] group-hover:text-[#059669] transition-colors mb-2 flex items-center justify-between">
                <span>Custom SaaS Development</span>
                <ArrowUpRight className="w-4 h-4 text-[#52615B] group-hover:text-[#059669]" />
              </h3>
              <p className="text-xs text-[#52615B]">
                Comprehensive full-lifecycle engineering for bespoke cloud software applications, APIs, and scalable web platforms.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 33. SUPPORTING BLOG CLUSTER */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              TECHNICAL KNOWLEDGE BASE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              SaaS Scaling & Architecture Guides
            </h2>
            <p className="text-base text-[#52615B] mt-2">
              Deep-dive engineering articles and performance optimization tutorials from our systems architects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            {[
              "How to Scale a SaaS Application",
              "When Should You Scale Your SaaS?",
              "How to Improve SaaS Application Performance",
              "How to Optimize PostgreSQL for SaaS",
              "How to Scale a Node.js SaaS Application",
              "How to Optimize a Next.js SaaS Application",
              "Does Your SaaS Need Microservices?",
              "Can a Monolith Scale?",
              "How to Reduce SaaS Infrastructure Costs",
              "SaaS Database Scaling Strategies",
              "How to Handle Traffic Spikes in SaaS",
              "How to Scale a Multi-Tenant SaaS",
              "Redis and SaaS Caching Best Practices",
              "How to Monitor SaaS Performance in Production",
              "SaaS Performance Metrics Every Founder Should Track",
              "How to Find a SaaS Performance Bottleneck",
              "SaaS Infrastructure: VPS vs Cloud",
              "How to Optimize API Performance",
              "How to Reduce Database Query Time",
              "When Should You Rewrite a SaaS?"
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
      {/* 35 & 38 & 39. FINAL CTA & LEAD CONVERSION SECTION */}
      {/* ========================================================================= */}
      <section id="contact" className="py-20 md:py-28 bg-[#FFFFFF]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              START SCALING TODAY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#12201B] tracking-tight">
              Make Your SaaS Ready for Growth
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              Don&apos;t scale blindly. Measure the system, find the bottleneck, fix the right problem, and scale with confidence.
            </p>
          </div>

          <SaasScalingLeadForm />
        </div>
      </section>
    </div>
  );
}
