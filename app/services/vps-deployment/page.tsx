import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Server,
  Database,
  Lock,
  Globe,
  Terminal,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  Zap,
  HardDrive,
  GitBranch,
  Radio,
  FileCode2,
  Box,
  Network,
  Clock,
  Code2,
  Activity,
  AlertTriangle,
  HelpCircle,
  TrendingUp,
  DollarSign,
  ChevronRight,
  ArrowUpRight,
  Users,
  Building2,
  Check,
  X,
  Sparkles,
  Search,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import VpsDeploymentHeroPreview from "@/components/sections/VpsDeploymentHeroPreview";
import VpsDeploymentLeadForm from "@/components/sections/VpsDeploymentLeadForm";

export const metadata: Metadata = {
  title: "VPS Deployment for Next.js, Node.js & Docker | Dazzcode",
  description:
    "Deploy your Next.js, Node.js or Docker SaaS to a production VPS with Dazzcode. We handle Linux setup, Docker, reverse proxy, SSL, domains, databases and deployment configuration.",
  keywords: [
    "VPS deployment",
    "VPS deployment services",
    "VPS deployment company",
    "VPS server deployment",
    "SaaS VPS deployment",
    "Next.js VPS deployment",
    "Next.js deployment on VPS",
    "Node.js VPS deployment",
    "Node.js deployment on VPS",
    "Docker VPS deployment",
    "Docker deployment services",
    "Docker Compose VPS",
    "deploy Next.js to VPS",
    "deploy Node.js to VPS",
    "deploy SaaS to VPS",
    "VPS hosting for Next.js",
    "VPS hosting for Node.js",
    "Linux VPS deployment",
    "production VPS setup",
    "VPS server setup",
    "SaaS deployment services",
    "SaaS deployment company",
    "VPS deployment Kenya",
    "VPS deployment Nairobi",
    "VPS deployment company Kenya"
  ],
  alternates: {
    canonical: "https://dazzcode.com/services/vps-deployment",
    languages: {
      "en": "https://dazzcode.com/services/vps-deployment",
      "x-default": "https://dazzcode.com/services/vps-deployment"
    }
  },
  openGraph: {
    title: "VPS Deployment for Next.js, Node.js & Docker | Dazzcode",
    description:
      "Deploy your Next.js, Node.js or Docker SaaS to a production VPS. Dazzcode handles Linux setup, Docker, reverse proxy, SSL, domains, databases and deployment configuration.",
    url: "https://dazzcode.com/services/vps-deployment",
    siteName: "Dazzcode",
    images: [
      {
        url: "https://dazzcode.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "VPS Deployment for Next.js, Node.js & Docker SaaS - Dazzcode"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "VPS Deployment for Next.js, Node.js & Docker | Dazzcode",
    description:
      "Deploy your Next.js, Node.js or Docker SaaS to a production VPS with Linux, Docker, Nginx, SSL, and automated CI/CD."
  }
};

const vpsFaqs = [
  {
    q: "Can you deploy a Next.js application to a VPS?",
    a: "Yes. We configure Next.js applications using standalone output builds, running as a lean Node.js process or inside a lightweight Docker container behind an Nginx reverse proxy with gzip/Brotli compression, SSL termination, and image optimization."
  },
  {
    q: "Can you deploy Node.js applications to a VPS?",
    a: "Yes. We deploy Node.js backend services, REST/GraphQL APIs, Express, Fastify, and NestJS applications with process management, environment variables, health checks, and database connection pooling."
  },
  {
    q: "Can you deploy Docker applications?",
    a: "Yes. We specialize in containerized deployments. We write and optimize multi-stage Dockerfiles, configure container resource limits, manage bridge networks, and set up automatic restart policies."
  },
  {
    q: "Can you configure Docker Compose on a VPS?",
    a: "Yes. We configure multi-container production stacks using Docker Compose to orchestrate your frontend application, backend API, PostgreSQL database, Redis in-memory cache, and Nginx reverse proxy within an isolated internal bridge network."
  },
  {
    q: "Can you deploy PostgreSQL?",
    a: "Yes. We configure production PostgreSQL instances with persistent Docker volume mappings, secure authentication credentials, connection pooling (PgBouncer where needed), and automated offsite encrypted backups."
  },
  {
    q: "Can you configure Redis?",
    a: "Yes. We configure Redis instances for in-memory session caching, API response memoization, rate-limiting, and asynchronous background worker queues (BullMQ/Sidekiq)."
  },
  {
    q: "Can you connect my domain to the VPS?",
    a: "Yes. We configure DNS A records, CNAME records, and subdomains (such as app.yourdomain.com, api.yourdomain.com, and admin.yourdomain.com) with proper TTL settings and reverse proxy host headers."
  },
  {
    q: "Can you configure SSL?",
    a: "Yes. We implement Let's Encrypt SSL/TLS 1.3 certificates using Certbot with automated cron renewal scripts, HTTP-to-HTTPS redirects, and modern security headers (HSTS, CSP, X-Frame-Options)."
  },
  {
    q: "Can you migrate my existing SaaS?",
    a: "Yes. We migrate applications from local machines, shared hosting, bloated PaaS platforms (Vercel, Heroku, Render, AWS), or older servers onto dedicated Linux VPS instances with structured data migration and minimal downtime."
  },
  {
    q: "Can you deploy an application built by another developer?",
    a: "Yes. Most codebases we deploy were built by outsourced agencies, freelance developers, or previous technical co-founders. We inspect the repository, configure required environment variables, and get it running cleanly in production."
  },
  {
    q: "Can you troubleshoot my existing VPS?",
    a: "Yes. If your current server is throwing 502 Bad Gateway errors, running out of memory, stuck in Docker restart loops, or failing SSL renewals, we offer rapid diagnostic and repair interventions."
  },
  {
    q: "Can you configure GitHub Actions?",
    a: "Yes. We build automated GitHub Actions workflows that automatically build Docker images and execute zero-downtime rolling deploys via SSH whenever code is pushed to your main branch."
  },
  {
    q: "Can you set up CI/CD?",
    a: "Yes. We configure automated push-to-deploy pipelines with build validation, automated container pruning, and post-deploy health check verifications."
  },
  {
    q: "Can you configure backups?",
    a: "Yes. We configure automated daily database dumps that are compressed, encrypted, and synced to offsite S3-compatible cloud storage (AWS S3, Cloudflare R2, or Wasabi) with retention policies."
  },
  {
    q: "Can you monitor my VPS?",
    a: "Yes. We set up server health telemetry, uptime monitors, error tracking (Sentry), disk space alerts, and CPU/memory threshold notifications."
  },
  {
    q: "Is a VPS suitable for SaaS?",
    a: "Yes. A modern $20–$50/month Linux VPS (with dedicated NVMe SSDs and multi-core CPUs) provides substantially more raw compute, predictable costs, and zero timeout limits compared to restrictive serverless platforms."
  },
  {
    q: "How much does VPS deployment cost?",
    a: "Our fixed-fee deployment setups start from affordable one-time engagement tiers based on the number of services, database requirements, and CI/CD automation needs. You retain 100% ownership of your VPS server account."
  },
  {
    q: "How long does deployment take?",
    a: "A standard Next.js / Node.js and Docker stack deployment typically takes 24 to 48 hours from repository and server access handover."
  },
  {
    q: "Do I need Docker?",
    a: "Docker is highly recommended because it guarantees your application runs in an identical, isolated environment across any Linux distribution, simplifying future migrations and rollbacks."
  },
  {
    q: "Do I need Nginx or Traefik?",
    a: "Yes. A reverse proxy like Nginx or Traefik is essential for handling public HTTP/HTTPS traffic, terminating SSL certificates, compressing static assets, and forwarding requests to internal application ports."
  },
  {
    q: "Can my Next.js frontend and Node.js API run on the same VPS?",
    a: "Yes. A single VPS can easily host your Next.js frontend, Node.js API, PostgreSQL database, and Redis cache using Docker Compose and Nginx subdomain routing (app.domain.com and api.domain.com)."
  },
  {
    q: "Should PostgreSQL run on the same VPS?",
    a: "For MVPs, early-stage, and mid-sized SaaS platforms, running PostgreSQL on the same VPS via persistent Docker volumes is fast, cost-effective, and simple. As data grows to tens of millions of rows, the database can easily be decoupled onto a dedicated database node."
  },
  {
    q: "Can you deploy multiple applications on one VPS?",
    a: "Yes. Using Nginx virtual hosts and Docker container isolation, multiple independent SaaS applications or client staging environments can run efficiently on a single VPS."
  },
  {
    q: "Can you scale my VPS later?",
    a: "Yes. You can vertically scale your VPS (upgrading CPU/RAM) with a simple server reboot, or separate your database and worker processes across multiple nodes as traffic demands."
  },
  {
    q: "Do you provide ongoing server maintenance?",
    a: "Yes. Dazzcode offers optional monthly VPS maintenance covering Linux security patches, Docker updates, database backup verifications, and 24/7 uptime monitoring."
  },
  {
    q: "Can you deploy SaaS applications outside Kenya?",
    a: "Yes. While Dazzcode is headquartered in Nairobi, Kenya, we deploy and manage VPS infrastructure globally on Hetzner (Germany/Finland/US), DigitalOcean, AWS EC2, and Linode for international clients across the UK, US, and Europe."
  }
];

export default function VpsDeploymentPage() {
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
        "@id": "https://dazzcode.com/services/vps-deployment#service",
        "name": "VPS Deployment for Next.js, Node.js & Docker SaaS",
        "provider": {
          "@id": "https://dazzcode.com/#organization"
        },
        "description":
          "Deploy your Next.js, Node.js or Docker SaaS to a production Linux VPS. Dazzcode handles server hardening, Docker Compose, Nginx reverse proxies, SSL certificates, domains, databases, and CI/CD automation.",
        "areaServed": "Global",
        "serviceType": "Linux VPS Deployment & DevOps Engineering",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "Custom Scope",
          "url": "https://dazzcode.com/services/vps-deployment"
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
            "name": "VPS Deployment",
            "item": "https://dazzcode.com/services/vps-deployment"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": vpsFaqs.map((faq) => ({
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
            <span className="text-[#12201B] font-semibold">VPS Deployment</span>
          </nav>

          {/* Main H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-[#12201B] mb-4">
            Deploy Your Next.js, Node.js or Docker SaaS to a Production VPS
          </h1>

          <p className="text-xl md:text-2xl font-bold text-[#059669] mb-6">
            Your SaaS works locally. Let&apos;s get it running properly in production.
          </p>

          {/* Supporting Copy */}
          <p className="text-lg md:text-xl text-[#52615B] leading-relaxed max-w-3xl mb-8 font-normal">
            From a working application on your laptop to a secure production server. Dazzcode handles the infrastructure, deployment and configuration needed to get your SaaS online.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
            <Link href="#contact">
              <Button
                size="lg"
                className="w-full sm:w-auto h-13 px-8 text-sm font-bold uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] shadow-lg shadow-[#059669]/20 rounded-xl transition-all cursor-pointer"
              >
                <Server className="w-4 h-4 mr-2" />
                Deploy My SaaS
              </Button>
            </Link>

            <Link href="#included">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-13 px-7 text-sm font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3] rounded-xl text-[#12201B] cursor-pointer"
              >
                See What&apos;s Included
              </Button>
            </Link>
          </div>

          {/* Supporting text */}
          <div className="text-xs text-[#52615B] font-mono flex flex-wrap items-center gap-2 mb-8">
            <span className="font-semibold text-[#12201B]">Linux</span>
            <span>•</span>
            <span className="font-semibold text-[#12201B]">Docker</span>
            <span>•</span>
            <span className="font-semibold text-[#12201B]">Next.js</span>
            <span>•</span>
            <span className="font-semibold text-[#12201B]">Node.js</span>
            <span>•</span>
            <span className="font-semibold text-[#12201B]">SSL</span>
            <span>•</span>
            <span className="font-semibold text-[#12201B]">Domains</span>
          </div>

          {/* 6. HERO VISUAL (Interactive Component) */}
          <VpsDeploymentHeroPreview />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. PROBLEM SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              BEYOND LOCALHOST
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Getting a SaaS Into Production Is More Than Running <code className="text-[#059669] font-mono bg-[#ECFDF5] px-2 py-0.5 rounded">npm start</code>
            </h2>
          </div>

          <div className="prose prose-lg text-[#52615B] leading-relaxed space-y-6 mb-12">
            <p>
              On a developer&apos;s laptop, everything runs inside a relaxed, single-user environment. There are no SSL certificate expiration checks, no public IP port scans, no concurrent connection limits, and no persistent volume backup routines to configure.
            </p>
            <p>
              Moving a software application into a live production environment introduces real-world operational challenges that do not exist locally:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-[#12201B] mb-2">Security & Firewalls</h3>
              <p className="text-sm text-[#52615B] leading-relaxed">
                Exposing database or Redis ports directly to the internet invites automated botnet attacks within minutes. Proper UFW rules and SSH hardening are mandatory.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-[#12201B] mb-2">Reverse Proxy & SSL</h3>
              <p className="text-sm text-[#52615B] leading-relaxed">
                Routing subdomains (`app.`, `api.`, `admin.`) to internal container ports with TLS 1.3 encryption and automated certificate renewals.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-[#12201B] mb-2">Persistence & Backups</h3>
              <p className="text-sm text-[#52615B] leading-relaxed">
                Preventing accidental data loss during container restarts and configuring automated, offsite database dumps with encryption.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#F0FDF4] border border-[#A7F3D0] text-[#065F46] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-base text-[#047857] mb-1">
                Configured for Reliability & Security
              </h4>
              <p className="text-sm text-[#065F46]">
                A production server needs to be configured for long-term stability—not just made to run the application once.
              </p>
            </div>
            <Link href="#contact" className="shrink-0">
              <Button size="sm" className="bg-[#059669] text-white hover:bg-[#047857] font-bold text-xs uppercase tracking-wider rounded-xl">
                Deploy My Application
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. WHO THIS SERVICE IS FOR */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              TARGET AUDIENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Who Needs VPS Deployment?
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              We partner with technical founders, growing businesses, and developers who need dependable production infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] hover:border-[#059669] transition-all shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">SaaS Founders</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                You have a validated product ready for paying customers and need a robust, fixed-cost production server.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] hover:border-[#059669] transition-all shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Startups</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                You need enterprise-grade Linux and Docker infrastructure without the overhead of hiring a full-time DevOps engineer.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] hover:border-[#059669] transition-all shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Software Developers</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                You love writing application code but prefer having a systems expert configure Nginx, SSL, UFW, and CI/CD pipelines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] hover:border-[#059669] transition-all shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Digital Agencies</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                You build custom web apps for clients and need a dependable technical partner to handle server setup and client handoffs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] hover:border-[#059669] transition-all shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Established Businesses</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                You have internal business applications or portals requiring secure, dedicated hosting with automated backups.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] hover:border-[#059669] transition-all shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">PaaS Migrations</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                You are tired of unpredictable Vercel/Heroku bandwidth bills and want to migrate to a predictable $20–$50/mo VPS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. WHAT WE DEPLOY */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              TECHNOLOGY SUPPORT
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Applications We Can Deploy
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              We deploy full modern software stacks using battle-tested Linux and container standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-sm text-[#12201B] mb-1">Next.js</div>
              <p className="text-[11px] text-[#52615B] font-sans">App Router, SSR, Server Actions, Standalone output.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-sm text-[#12201B] mb-1">Node.js</div>
              <p className="text-[11px] text-[#52615B] font-sans">Express, Fastify, NestJS, and REST/GraphQL APIs.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-sm text-[#12201B] mb-1">Docker</div>
              <p className="text-[11px] text-[#52615B] font-sans">Multi-stage builds, minimal alpine images, isolated runs.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-sm text-[#12201B] mb-1">Docker Compose</div>
              <p className="text-[11px] text-[#52615B] font-sans">Multi-container orchestration and bridge networking.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-sm text-[#12201B] mb-1">PostgreSQL</div>
              <p className="text-[11px] text-[#52615B] font-sans">Persistent storage, connection limits, and auto-backups.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-sm text-[#12201B] mb-1">Redis</div>
              <p className="text-[11px] text-[#52615B] font-sans">In-memory caching, rate-limiting, and async queues.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-sm text-[#12201B] mb-1">Background Workers</div>
              <p className="text-[11px] text-[#52615B] font-sans">BullMQ, Python workers, and async queue processors.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-sm text-[#12201B] mb-1">Cron Jobs</div>
              <p className="text-[11px] text-[#52615B] font-sans">Scheduled batch tasks, daily reports, and cleanup routines.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-sm text-[#12201B] mb-1">REST & GraphQL APIs</div>
              <p className="text-[11px] text-[#52615B] font-sans">Secure API endpoints with rate limits and TLS termination.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="font-bold text-sm text-[#12201B] mb-1">Full SaaS Stacks</div>
              <p className="text-[11px] text-[#52615B] font-sans">Frontend + Backend API + DB + Redis + Nginx on one VPS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. WHAT IS INCLUDED */}
      {/* ========================================================================= */}
      <section id="included" className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              COMPREHENSIVE SCOPE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              What&apos;s Included in a VPS Deployment?
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              We handle every layer of the deployment process from raw OS provisioning to post-launch validation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">1. Linux VPS Hardening</h3>
              <ul className="text-xs text-[#52615B] space-y-1.5 font-mono">
                <li>• Ubuntu 24.04 / Debian LTS installation</li>
                <li>• Dedicated sudo non-root user setup</li>
                <li>• SSH key authentication (passwords disabled)</li>
                <li>• UFW firewall rules (only 22, 80, 443 open)</li>
                <li>• Fail2ban brute force defense</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Box className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">2. Docker & Container Setup</h3>
              <ul className="text-xs text-[#52615B] space-y-1.5 font-mono">
                <li>• Optimized multi-stage Dockerfile</li>
                <li>• Docker Compose production configuration</li>
                <li>• Isolated internal container bridge network</li>
                <li>• Volume persistence for databases & media</li>
                <li>• Automatic container restart policies</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">3. Nginx Reverse Proxy</h3>
              <ul className="text-xs text-[#52615B] space-y-1.5 font-mono">
                <li>• Nginx virtual host configurations</li>
                <li>• HTTP/2 & TLS 1.3 optimization</li>
                <li>• Gzip & Brotli static asset compression</li>
                <li>• Client real IP & header forwarding</li>
                <li>• Request rate-limiting & buffer limits</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">4. Domain & SSL Setup</h3>
              <ul className="text-xs text-[#52615B] space-y-1.5 font-mono">
                <li>• DNS A & CNAME record routing</li>
                <li>• Subdomain routing (`app.`, `api.`)</li>
                <li>• Let&apos;s Encrypt SSL automated generation</li>
                <li>• Auto-renewal cron job verification</li>
                <li>• Automatic HTTP to HTTPS redirects</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">5. Database & Persistent Data</h3>
              <ul className="text-xs text-[#52615B] space-y-1.5 font-mono">
                <li>• PostgreSQL / MySQL production setup</li>
                <li>• Dedicated Docker persistent volume</li>
                <li>• Initial schema migration verification</li>
                <li>• Redis in-memory cache configuration</li>
                <li>• Connection pooling tuning</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <GitBranch className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">6. CI/CD & Runbook</h3>
              <ul className="text-xs text-[#52615B] space-y-1.5 font-mono">
                <li>• GitHub Actions automated deploy script</li>
                <li>• Zero-downtime rolling restart trigger</li>
                <li>• Encrypted daily S3 backup script</li>
                <li>• Complete server runbook & credentials</li>
                <li>• 14-day post-launch deployment warranty</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link href="#contact">
              <Button size="lg" className="bg-[#059669] text-white hover:bg-[#10B981] font-bold text-xs uppercase tracking-wider rounded-xl h-12 px-8">
                See What Your Deployment Needs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11 & 12. PRODUCTION ARCHITECTURE & DOCKER DEPLOYMENT */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block">
                SYSTEM ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
                A Production Setup That Matches Your SaaS
              </h2>
              <p className="text-base text-[#52615B] leading-relaxed">
                We design deployment architectures tailored to your application&apos;s real-world traffic requirements. Whether you are running a single-server monolithic SaaS or decoupling background workers, everything is engineered for clean maintainability.
              </p>
              <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] text-xs font-mono text-[#52615B] space-y-2">
                <div className="font-bold text-[#12201B]">Why Docker on VPS?</div>
                <p className="text-[11px] leading-relaxed">
                  Docker isolates dependencies, guarantees reproducible runtimes, eliminates &ldquo;works on my machine&rdquo; bugs, and enables instant rollback to previous container tags if a regression occurs.
                </p>
              </div>
            </div>

            <div className="md:col-span-6 p-6 rounded-3xl bg-[#12201B] text-white shadow-xl font-mono text-xs">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-[#10B981] font-bold">
                <span>Production VPS Topology</span>
                <span>Single Node Setup</span>
              </div>
              <pre className="text-[11px] leading-relaxed text-[#A7B9B2] overflow-x-auto">
{`Internet Users
  │
  ▼ (HTTPS :443)
Cloudflare / DNS
  │
  ▼
Nginx Reverse Proxy (Host)
  │
  ├──► [Subdomain: app.] ──► Next.js Container (:3000)
  ├──► [Subdomain: api.] ──► Node.js API (:4000)
  │
  ▼ (Internal Bridge Network: 172.20.0.0/16)
┌───────────────────────────────────────────────┐
│ Docker Compose Isolated Stack                │
│                                               │
│  ├── App / Next.js Server                    │
│  ├── Node.js / Background Workers            │
│  ├── Redis 7 (In-Memory Queue & Session)      │
│  └── PostgreSQL 16 (Persistent Named Volume)  │
└───────────────────────────────────────────────┘`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13 & 14. NEXT.JS & NODE.JS VPS DEPLOYMENT */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Next.js Card */}
            <div className="p-8 rounded-3xl bg-white border border-[#E2EAE6] shadow-xs">
              <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
                FRONTEND & FULL-STACK
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#12201B] tracking-tight mb-4">
                Next.js VPS Deployment
              </h2>
              <p className="text-sm text-[#52615B] leading-relaxed mb-6">
                Next.js has official standalone output support that compiles your entire application into a minimal Node.js server. We configure production Next.js deployments for maximum speed:
              </p>
              <ul className="space-y-2.5 text-xs font-mono text-[#12201B]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>`output: &apos;standalone&apos;` multi-stage Docker build</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Nginx static asset caching for `/_next/static/`</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Zero serverless cold starts or timeout limits</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Support for React Server Components & Server Actions</span>
                </li>
              </ul>
            </div>

            {/* Node.js Card */}
            <div className="p-8 rounded-3xl bg-white border border-[#E2EAE6] shadow-xs">
              <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
                BACKEND & APIS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#12201B] tracking-tight mb-4">
                Node.js VPS Deployment
              </h2>
              <p className="text-sm text-[#52615B] leading-relaxed mb-6">
                For standalone Node.js APIs (Express, Fastify, NestJS), we engineer high-concurrency production runtime environments:
              </p>
              <ul className="space-y-2.5 text-xs font-mono text-[#12201B]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Proper Linux signal handling (`SIGTERM` / `SIGINT` grace)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Node.js production heap memory limit tuning</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Container health checks and auto-restart policies</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>PostgreSQL connection pooling via PgBouncer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 15, 16 & 17. DOMAIN, SSL, SECRETS & SECURITY */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              SECURITY & HARDENING
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Enterprise Security & Zero-Leak Secrets Management
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              We apply practical, defense-in-depth security hardening appropriate to your deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Domain & SSL Routing</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Configuring DNS records, subdomains, Let&apos;s Encrypt automated SSL renewal, TLS 1.3 ciphers, and automatic HTTP-to-HTTPS redirection.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Production Secrets Hygiene</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Separating Development, Staging, and Production environment variables. Zero credentials or database passwords committed to Git.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Linux Server Hardening</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                SSH key-only authentication, disabled root login, UFW firewall closing all internal ports, Fail2ban intrusion blocking, and automated kernel security updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 18, 19, 20 & 21. DATABASE, BACKUPS, CI/CD & MONITORING */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] shadow-xs">
              <div className="font-bold text-sm text-[#12201B] mb-2 flex items-center gap-2">
                <Database className="w-4 h-4 text-[#059669]" />
                Persistent Storage
              </div>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Database containers run with persistent named volumes so data is never lost during container upgrades or reboots.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] shadow-xs">
              <div className="font-bold text-sm text-[#12201B] mb-2 flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-[#059669]" />
                Encrypted Backups
              </div>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Automated daily cron jobs dump, compress, encrypt, and upload PostgreSQL backups to offsite S3 cloud storage.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] shadow-xs">
              <div className="font-bold text-sm text-[#12201B] mb-2 flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-[#059669]" />
                GitHub Actions CI/CD
              </div>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Automate your workflow: pushing code to your main branch builds Docker images and triggers zero-downtime rolling deploys.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] shadow-xs">
              <div className="font-bold text-sm text-[#12201B] mb-2 flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#059669]" />
                Telemetry & Logs
              </div>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Docker log rotation, CPU/RAM threshold alerts, Sentry error tracking, and external uptime heartbeat monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 22 & 23. SAAS MIGRATION & TROUBLESHOOTING */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Migration Card */}
            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
                SEAMLESS TRANSITION
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#12201B] tracking-tight mb-4">
                Moving an Existing SaaS to a VPS
              </h2>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                We safely migrate applications from Vercel, Heroku, Render, AWS, or older servers to modern Linux VPS hosts:
              </p>
              <div className="space-y-2 font-mono text-xs text-[#12201B]">
                <div>1. Inspect existing repository & environment dependencies</div>
                <div>2. Provision & harden target Linux VPS server</div>
                <div>3. Configure Docker Compose & persistent volumes</div>
                <div>4. Migrate database schema and production records</div>
                <div>5. Configure DNS records, SSL, and switch traffic</div>
              </div>
            </div>

            {/* Troubleshooting Card */}
            <div className="p-8 rounded-3xl bg-[#12201B] text-white shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#10B981] font-bold block mb-2">
                  EMERGENCY INTERVENTION
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
                  Already Have a VPS That Isn&apos;t Working Properly?
                </h2>
                <p className="text-sm text-[#A7B9B2] leading-relaxed mb-4">
                  If your server is throwing 502 Bad Gateway errors, running out of memory, stuck in Docker reboot loops, or failing SSL renewals, we can diagnose and fix it rapidly.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#E2EAE6] mb-6">
                  <div>• 502/504 Gateway Timeouts</div>
                  <div>• Docker Restart Loops</div>
                  <div>• SSL Certificate Failures</div>
                  <div>• Memory & Disk Exhaustion</div>
                </div>
              </div>

              <Link href="#contact">
                <Button size="lg" className="w-full bg-[#059669] hover:bg-[#10B981] text-white font-bold text-xs uppercase tracking-wider rounded-xl">
                  Fix My VPS Deployment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 24 & 25. VPS VS CLOUD & SCALING BEYOND ONE VPS */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="p-8 md:p-12 rounded-3xl bg-white border border-[#E2EAE6] shadow-xs space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
                PRACTICAL INFRASTRUCTURE
              </span>
              <h2 className="text-3xl font-black text-[#12201B] tracking-tight mb-4">
                Is a VPS Right for Your SaaS?
              </h2>
              <p className="text-base text-[#52615B] leading-relaxed">
                A VPS is ideal when you want high performance, dedicated CPU/RAM resources, zero timeout constraints, and predictable hosting bills ($20–$50/mo). If your application requires multi-region serverless deployments or complex enterprise compliance, managed cloud platforms may be appropriate. We help you choose infrastructure based on real requirements.
              </p>
            </div>

            <div className="pt-8 border-t border-[#E2EAE6]">
              <h3 className="text-2xl font-black text-[#12201B] tracking-tight mb-4">
                What Happens When Your SaaS Outgrows One VPS?
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-4">
                A single high-spec VPS can easily handle hundreds of thousands of monthly requests. As traffic scales further, the architecture progresses logically:
              </p>
              <div className="p-4 rounded-xl bg-[#F0FDF4] border border-[#DCFCE7] text-xs text-[#065F46] font-mono flex items-center justify-between flex-wrap gap-3">
                <span>
                  <strong>Scaling Roadmap:</strong> Single VPS → Vertical Core Upgrade → Decoupled Database Node → Load Balanced App Cluster.
                </span>
                <Link href="/services/saas-scaling" className="font-bold text-[#059669] hover:underline flex items-center gap-1">
                  SaaS Scaling & Performance Services <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 26. WHY DAZZCODE */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              WHY PARTNER WITH DAZZCODE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Why Deploy Your SaaS With Dazzcode?
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              We combine deep application software engineering with production Linux systems expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">App + Infra Understanding</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                We understand both the Next.js/Node.js application code and the underlying Linux operating system it runs upon.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Box className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Docker Container Mastery</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                We engineer lean multi-stage Docker builds that consume minimal RAM and restart instantaneously under failure conditions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Security-Conscious Setup</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                SSH key-only access, least-privilege containers, isolated database networks, and automated offsite encrypted backups.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Full Ownership & Control</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                You retain 100% ownership of your VPS server account and code repository. No vendor lock-in or proprietary hosting markup.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Kenya-Based, Global Delivery</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Operating from Nairobi, Kenya, we deploy and manage production VPS servers globally on Hetzner, DigitalOcean, and AWS.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <FileCode2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Complete Handover Runbook</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                We deliver a comprehensive server administration guide so your internal developers can deploy updates with ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 27 & 28. PRICING & MAINTENANCE */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              TRANSPARENT SCOPING
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              VPS Deployment Cost & Packages
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              Transparent, fixed-fee deployment packages with zero hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-3xl bg-white border border-[#E2EAE6] flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-xs font-mono font-bold text-[#52615B] uppercase block mb-1">Package 01</span>
                <h3 className="text-xl font-bold text-[#12201B] mb-2">Basic Deployment</h3>
                <p className="text-xs text-[#52615B] mb-4">
                  Ideal for a single Next.js or Node.js application requiring production VPS setup, domain, and SSL.
                </p>
                <ul className="text-xs font-mono text-[#52615B] space-y-2 border-t border-[#F1F5F3] pt-4">
                  <li>• 1 Application process / Dockerfile</li>
                  <li>• Linux VPS provisioning & hardening</li>
                  <li>• Nginx reverse proxy + SSL auto-renewal</li>
                  <li>• Custom domain & DNS routing</li>
                  <li>• Handover documentation</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E2EAE6]">
                <Link href="#contact">
                  <Button variant="outline" className="w-full text-xs font-mono uppercase tracking-wider border-[#E2EAE6]">
                    Select Basic
                  </Button>
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border-2 border-[#059669] flex flex-col justify-between shadow-lg relative">
              <div className="absolute -top-3 right-6 bg-[#059669] text-white text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
                Most Popular
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#059669] uppercase block mb-1">Package 02</span>
                <h3 className="text-xl font-bold text-[#12201B] mb-2">Multi-Service SaaS Stack</h3>
                <p className="text-xs text-[#52615B] mb-4">
                  Full SaaS deployment: Frontend + API + PostgreSQL + Redis + GitHub Actions CI/CD.
                </p>
                <ul className="text-xs font-mono text-[#52615B] space-y-2 border-t border-[#F1F5F3] pt-4">
                  <li>• Everything in Basic Deployment</li>
                  <li>• Docker Compose multi-container stack</li>
                  <li>• PostgreSQL database + Redis in-memory</li>
                  <li>• Subdomain routing (`app.`, `api.`)</li>
                  <li>• GitHub Actions push-to-deploy CI/CD</li>
                  <li>• Automated encrypted offsite S3 backups</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E2EAE6]">
                <Link href="#contact">
                  <Button className="w-full bg-[#059669] hover:bg-[#10B981] text-white text-xs font-mono uppercase tracking-wider">
                    Select Full Stack
                  </Button>
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E2EAE6] flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-xs font-mono font-bold text-[#52615B] uppercase block mb-1">Package 03</span>
                <h3 className="text-xl font-bold text-[#12201B] mb-2">Migration & Troubleshooting</h3>
                <p className="text-xs text-[#52615B] mb-4">
                  Migrating a live application from Vercel/Heroku or troubleshooting broken production servers.
                </p>
                <ul className="text-xs font-mono text-[#52615B] space-y-2 border-t border-[#F1F5F3] pt-4">
                  <li>• Live database migration & data sync</li>
                  <li>• Zero-downtime DNS cutover planning</li>
                  <li>• 502/504 error diagnosis & repair</li>
                  <li>• Container reboot loop resolution</li>
                  <li>• 30-day extended support warranty</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E2EAE6]">
                <Link href="#contact">
                  <Button variant="outline" className="w-full text-xs font-mono uppercase tracking-wider border-[#E2EAE6]">
                    Select Migration
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] text-xs text-[#065F46] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <strong className="text-[#047857] block mb-0.5">Optional Ongoing VPS Maintenance:</strong>
              <span>We provide monthly OS updates, Docker patches, security monitoring, and backup verifications.</span>
            </div>
            <Link href="#contact" className="shrink-0 font-bold text-[#059669] hover:underline">
              Ask About VPS Maintenance →
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 29. CASE STUDIES */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              PROVEN DEPLOYMENTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              VPS & SaaS Deployment Projects
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              Verified production setups delivering high uptime and low fixed infrastructure costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#059669] bg-[#ECFDF5] px-2.5 py-1 rounded-full">
                  Retail Point-of-Sale
                </span>
                <span className="text-xs font-mono text-[#52615B]">DazzPOS System</span>
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-2">
                Production Linux VPS Deployment for Multi-Store Retail Sync Engine
              </h3>
              <div className="space-y-2 text-xs text-[#52615B] leading-relaxed mb-6 font-mono">
                <div><strong>Stack:</strong> Next.js 15, Node.js API, PostgreSQL 16, Redis, Docker Compose</div>
                <div><strong>Host:</strong> Hetzner Cloud Dedicated NVMe VPS (Germany)</div>
                <div><strong>Outcome:</strong> 99.98% uptime, sub-45ms latency, $35/mo fixed hosting cost.</div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#059669] bg-[#ECFDF5] px-2.5 py-1 rounded-full">
                  AI Automation Pipeline
                </span>
                <span className="text-xs font-mono text-[#52615B]">AI Lead Automation</span>
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-2">
                Containerized VPS Stack with Redis Queues & Automated CI/CD
              </h3>
              <div className="space-y-2 text-xs text-[#52615B] leading-relaxed mb-6 font-mono">
                <div><strong>Stack:</strong> Next.js App, Node.js Workers, BullMQ, pgvector, GitHub Actions</div>
                <div><strong>Host:</strong> DigitalOcean 16GB Dedicated Droplet</div>
                <div><strong>Outcome:</strong> Automated push-to-deploy pipeline with zero serverless timeout limits.</div>
              </div>
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
              VPS Deployment FAQs
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              Clear technical answers regarding Next.js, Node.js, Docker, databases, and Linux server configurations.
            </p>
          </div>

          <div className="space-y-4">
            {vpsFaqs.map((faq, idx) => (
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
      {/* 31. INTERNAL LINKING */}
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/saas-scaling" className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] hover:border-[#059669] transition-all group">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#059669] font-bold block mb-2">
                High Concurrency
              </span>
              <h3 className="font-bold text-base text-[#12201B] group-hover:text-[#059669] transition-colors mb-2 flex items-center justify-between">
                <span>SaaS Scaling & Performance</span>
                <ArrowUpRight className="w-4 h-4 text-[#52615B] group-hover:text-[#059669]" />
              </h3>
              <p className="text-xs text-[#52615B]">
                Is your existing SaaS experiencing database slowdowns or CPU spikes? We optimize queries, caching, and server concurrency.
              </p>
            </Link>

            <Link href="/services/saas-code-audit" className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] hover:border-[#059669] transition-all group">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#059669] font-bold block mb-2">
                Code Review
              </span>
              <h3 className="font-bold text-base text-[#12201B] group-hover:text-[#059669] transition-colors mb-2 flex items-center justify-between">
                <span>SaaS Code Audit</span>
                <ArrowUpRight className="w-4 h-4 text-[#52615B] group-hover:text-[#059669]" />
              </h3>
              <p className="text-xs text-[#52615B]">
                Get an independent 10-dimension evaluation of your application source code, security, and architecture before launch.
              </p>
            </Link>

            <Link href="/services/saas-mvp-development" className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] hover:border-[#059669] transition-all group">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#059669] font-bold block mb-2">
                New Products
              </span>
              <h3 className="font-bold text-base text-[#12201B] group-hover:text-[#059669] transition-colors mb-2 flex items-center justify-between">
                <span>SaaS MVP Development</span>
                <ArrowUpRight className="w-4 h-4 text-[#52615B] group-hover:text-[#059669]" />
              </h3>
              <p className="text-xs text-[#52615B]">
                Building a new product? Turn your validated idea into a production SaaS in 4–8 weeks with multi-tenancy and Stripe billing.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 32. SUPPORTING BLOG CLUSTER */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              DEVOPS GUIDES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              VPS & Docker Engineering Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            {[
              "How to Deploy Next.js to a VPS",
              "How to Deploy Node.js to a VPS",
              "How to Deploy Docker on a VPS",
              "How to Deploy a SaaS Application to a VPS",
              "How to Deploy Next.js With Docker",
              "How to Deploy Node.js With Docker",
              "Next.js VPS Deployment Guide",
              "Node.js VPS Deployment Guide",
              "Docker vs PM2 for Node.js Deployment",
              "Nginx vs Traefik for Docker Applications",
              "How to Configure SSL on a VPS",
              "How to Connect a Domain to a VPS",
              "How to Secure a Linux VPS",
              "How to Deploy PostgreSQL on a VPS",
              "How to Back Up PostgreSQL on a VPS",
              "How to Set Up Docker Compose on a VPS",
              "How to Set Up CI/CD for a VPS",
              "VPS vs Cloud Hosting for SaaS",
              "How Much Does VPS Hosting Cost in Kenya?",
              "How to Move a SaaS From One VPS to Another"
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
      {/* 38 & 39. FINAL CTA & INTAKE FORM */}
      {/* ========================================================================= */}
      <section id="contact" className="py-20 md:py-28 bg-[#FFFFFF]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              LAUNCH YOUR SAAS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#12201B] tracking-tight">
              Get Your SaaS Into Production
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              Your application deserves a production environment configured for the way it actually works.
            </p>
          </div>

          <VpsDeploymentLeadForm />
        </div>
      </section>
    </div>
  );
}
