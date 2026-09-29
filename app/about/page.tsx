import Link from "next/link";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/seo/JsonLd";
import {
  Code2,
  Lock,
  Zap,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Server,
  Globe2,
  Building2,
  Terminal,
  Cpu,
  ArrowUpRight,
  Sparkles,
  Users2,
  Flame,
  Rocket,
  Search,
} from "lucide-react";

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://dazzcode.com/about#webpage",
        url: "https://dazzcode.com/about",
        name: "About Dazzcode | SaaS Engineering Agency & Product Lab",
        description:
          "Meet Dazzcode: We build transparent, investor-ready SaaS products, scalable web apps, and cloud systems for high-growth founders and businesses globally.",
        publisher: {
          "@type": "Organization",
          "@id": "https://dazzcode.com/#organization",
          name: "Dazzcode",
          url: "https://dazzcode.com",
          logo: "https://dazzcode.com/images/hero-saas-dashboard.jpg",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Nairobi",
            addressCountry: "KE",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dazzcode.com/about#breadcrumb",
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
            name: "About Us",
            item: "https://dazzcode.com/about",
          },
        ],
      },
    ],
  };

  const corePillars = [
    {
      title: "SaaS Platform Engineering",
      icon: Layers,
      href: "/services/saas-development",
      description:
        "We architect multi-tenant SaaS platforms with strict TypeScript type-safety, robust subscription billing, role-based access control, and scalable database schemas designed to pass technical due diligence.",
    },
    {
      title: "Codebase Audits & Optimization",
      icon: ShieldCheck,
      href: "/services/code-audit",
      description:
        "We inspect legacy and inherited repositories line-by-line to uncover security risks, eliminate N+1 query bottlenecks, and establish clear refactoring roadmaps without requiring panic rewrites.",
    },
    {
      title: "SaaS Scaling & High Concurrency",
      icon: Zap,
      href: "/services/saas-scaling",
      description:
        "We optimize database connection pooling, distributed Redis caching, and asynchronous job queues to handle rapid traffic spikes and achieve sub-50ms API response times.",
    },
    {
      title: "Proprietary Product Development",
      icon: Rocket,
      href: "/case-studies/dazzpos",
      description:
        "We build and operate our own software products—such as Dazzcode POS, an offline-first retail management system—applying the same high engineering standards we deliver to clients.",
    },
  ];

  const values = [
    {
      number: "01",
      title: "Terminal-Grade Logic & Type Safety",
      description:
        "We enforce strict end-to-end typing across client, API, and database layers with automated CI/CD checks on every commit. No sloppy shortcuts, no unvetted dependencies.",
    },
    {
      number: "02",
      title: "100% Client IP Ownership",
      description:
        "You own all source code, Git repositories, database migrations, and infrastructure configurations from day one. Zero proprietary vendor lock-in.",
    },
    {
      number: "03",
      title: "No Throwaway Agency Code",
      description:
        "We build MVPs and product foundations with modular, clean architecture so your codebase naturally scales into v2 and beyond without costly, painful rewrites.",
    },
    {
      number: "04",
      title: "Direct Engineer Collaboration",
      description:
        "You communicate directly with the senior software engineers who write your code, ensuring fast feedback loops, technical clarity, and zero loss in translation.",
    },
  ];

  const deliverySteps = [
    {
      step: "01",
      title: "Domain Modeling & Architecture",
      description:
        "We map your business domain into precise PostgreSQL schemas, API contracts, and user flows before writing a single line of frontend code.",
    },
    {
      step: "02",
      title: "Fixed-Milestone Agile Sprints",
      description:
        "Bi-weekly development sprints with live staging environments so you can test real, functional software every week with transparent progress.",
    },
    {
      step: "03",
      title: "Automated QA & Security Review",
      description:
        "Rigorous automated integration tests, concurrency load simulation, and OWASP Top 10 vulnerability hardening before launch.",
    },
    {
      step: "04",
      title: "Production Deployment & Handoff",
      description:
        "Zero-downtime deployment to hardened cloud or VPS infrastructure, complete with automated backups, monitoring, and full repository transfer.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAF9] text-[#12201B]">
      <JsonLd schema={structuredData} />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-[#E1E7E4]">
        <div className="absolute inset-0 grid-bg opacity-70 pointer-events-none" />
        <div className="container px-4 md:px-6 max-w-5xl mx-auto relative z-10 text-center">
         

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#0F172A] leading-[1.05] mb-6">
            We Build Software That Scales With Conviction
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#52605B] leading-relaxed mb-8 max-w-3xl mx-auto">
            Dazzcode is a dedicated software engineering studio. We partner with ambitious founders and growing companies to architect, build, audit, and scale high-performance SaaS platforms, custom web applications, and resilient cloud systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base font-bold bg-[#059669] hover:bg-[#047857] text-white shadow-md cursor-pointer">
                Work With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 text-base font-semibold border-[#E1E7E4] bg-white hover:bg-[#F8FAF9] text-[#12201B] cursor-pointer">
                Explore Services
              </Button>
            </Link>
          </div>

          {/* Quick Metrics / Proof Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-[#E1E7E4] text-left">
            <div className="p-4 rounded-xl bg-white border border-[#E1E7E4] shadow-xs">
              <p className="text-[11px] font-mono text-[#52605B] uppercase tracking-wider">Architecture</p>
              <p className="text-xl sm:text-2xl font-black text-[#0F172A] mt-1">Multi-Tenant</p>
              <p className="text-xs text-[#059669] font-medium mt-0.5">Strict Data Isolation</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E1E7E4] shadow-xs">
              <p className="text-[11px] font-mono text-[#52605B] uppercase tracking-wider">Code Quality</p>
              <p className="text-xl sm:text-2xl font-black text-[#0F172A] mt-1">100% Typed</p>
              <p className="text-xs text-[#059669] font-medium mt-0.5">TypeScript & Zod</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E1E7E4] shadow-xs">
              <p className="text-[11px] font-mono text-[#52605B] uppercase tracking-wider">Target Latency</p>
              <p className="text-xl sm:text-2xl font-black text-[#0F172A] mt-1">&lt; 50 ms</p>
              <p className="text-xs text-[#059669] font-medium mt-0.5">Optimized Indexing</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E1E7E4] shadow-xs">
              <p className="text-[11px] font-mono text-[#52605B] uppercase tracking-wider">IP Rights</p>
              <p className="text-xl sm:text-2xl font-black text-[#0F172A] mt-1">100% Client</p>
              <p className="text-xs text-[#059669] font-medium mt-0.5">Zero Vendor Lock-in</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE ORIGIN STORY / WHY WE STARTED */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E1E7E4]">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block">
              Origin & Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight leading-tight">
              Why We Started Dazzcode
            </h2>
            <div className="space-y-5 text-base sm:text-lg text-[#52605B] leading-relaxed">
              <p className="text-[#0F172A] font-semibold text-lg sm:text-xl border-l-4 border-[#059669] pl-4 py-1">
                We founded Dazzcode to fix what is broken about outsourced software engineering: messy code, missed timelines, bloated invoices, and products that collapse under real traffic.
              </p>
              <p>
                Too many founders and business leaders are caught between two extremes: generic outsourcing shops that deliver unmaintainable spaghetti code with zero documentation, or massive enterprise consultancies that charge six figures before delivering a single line of working code.
              </p>
              <p>
                We built Dazzcode as a high-conviction engineering laboratory. We combine the technical depth of senior software architects with the speed and agility of an elite product squad. We take pride in craftsmanship, deterministic data pipelines, and creating software assets that founders are proud to show investors and customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO - CORE CAPABILITIES */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E1E7E4]">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-3">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              Engineering Pillars
            </h2>
            <p className="text-[#52605B] text-base sm:text-lg mt-3">
              We focus on areas where engineering precision directly impacts product performance and business valuation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {corePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Link
                  key={pillar.title}
                  href={pillar.href}
                  className="group p-8 rounded-2xl bg-[#FFFFFF] border border-[#E1E7E4] hover:border-[#059669]/50 transition duration-300 shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center text-[#059669] group-hover:scale-105 transition duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F172A] flex items-center justify-between">
                      {pillar.title}
                      <ArrowUpRight className="w-5 h-5 text-[#52605B] group-hover:text-[#059669] transition" />
                    </h3>
                    <p className="text-sm text-[#52605B] leading-relaxed">{pillar.description}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#E1E7E4] text-xs font-mono font-bold text-[#059669]">
                    Learn more about our approach &rarr;
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. OUR ENGINEERING VALUES */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E1E7E4]">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-3">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              How We Think & Build
            </h2>
            <p className="text-[#52605B] text-base sm:text-lg mt-3">
              Four fundamental values govern every commit, architectural decision, and client relationship at Dazzcode.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-8 rounded-2xl bg-[#F8FAF9] border border-[#E1E7E4] space-y-3"
              >
                <div className="text-xs font-mono font-bold text-[#059669] uppercase tracking-wider">
                  {v.number} · Ethos
                </div>
                <h3 className="text-xl font-bold text-[#0F172A]">{v.title}</h3>
                <p className="text-sm text-[#52605B] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW WE DELIVER SOFTWARE */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E1E7E4]">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-3">
              Delivery Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              A Disciplined, Predictable Workflow
            </h2>
            <p className="text-[#52605B] text-base sm:text-lg mt-3">
              From day one to production rollout, our process eliminates ambiguity and delivers working software on schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverySteps.map((s) => (
              <div
                key={s.step}
                className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E1E7E4] space-y-3 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center font-mono font-bold text-[#059669] text-sm">
                  {s.step}
                </div>
                <h3 className="text-base font-bold text-[#0F172A]">{s.title}</h3>
                <p className="text-xs text-[#52605B] leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GLOBAL FOOTPRINT & LOCAL ROOTS */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E1E7E4]">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
             
              <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
                Global Standards. Deep Regional Context.
              </h2>
              <p className="text-base sm:text-lg text-[#52605B] leading-relaxed">
                Dazzcode operates from Nairobi, Kenya, building software for international startups and ambitious enterprises across the UK, US, East Africa, and beyond.
              </p>
              <p className="text-sm text-[#52605B] leading-relaxed">
                Whether implementing international subscription billing with Stripe, optimizing multi-tenant databases for EU/US clients, or engineering instant M-Pesa STK Push workflows and offline-first POS systems in Africa, our engineering team brings battle-tested expertise to every market.
              </p>
              <div className="pt-2 flex flex-wrap gap-3 text-xs font-mono text-[#0F172A]">
                <Link href="/kenya" className="inline-flex items-center gap-1 text-[#059669] font-bold hover:underline">
                  Kenya Hub <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="/east-africa/saas-development" className="inline-flex items-center gap-1 text-[#059669] font-bold hover:underline">
                  East Africa Hub <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="/uk/saas-development" className="inline-flex items-center gap-1 text-[#059669] font-bold hover:underline">
                  UK Hub <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="/us/saas-development" className="inline-flex items-center gap-1 text-[#059669] font-bold hover:underline">
                  US Hub <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl bg-[#F8FAF9] border border-[#E1E7E4] p-6 space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#0F172A] font-bold pb-2 border-b border-[#E1E7E4]">
                Our Tech Stack Standards
              </h3>
              <div className="space-y-2.5 text-xs text-[#52605B]">
                <div className="flex items-start gap-2">
                  <Code2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block">Frontend & Full-Stack</strong>
                    <span>Next.js App Router, React Server Components, TypeScript, Tailwind CSS</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Server className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block">Backend & Database</strong>
                    <span>PostgreSQL, Prisma / Drizzle ORM, Redis, Node.js, Go</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Cpu className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block">Infrastructure & DevOps</strong>
                    <span>Docker, Linux VPS (Hetzner / AWS / DigitalOcean), GitHub Actions CI/CD</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Lock className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block">Payments & Security</strong>
                    <span>Stripe, LemonSqueezy, M-Pesa Daraja API, OAuth 2.0, OWASP Top 10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CONVERSION CTA */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] relative overflow-hidden">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center space-y-8">
        

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight leading-tight">
            Ready to Build Software That Lasts?
          </h2>

          <p className="text-base sm:text-lg text-[#52605B] max-w-2xl mx-auto leading-relaxed">
            Whether you are launching a new SaaS MVP, scaling an existing application, or auditing legacy software, our senior engineering team is ready to help.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base font-bold bg-[#059669] hover:bg-[#047857] text-white shadow-md cursor-pointer">
                Book a Technical Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/case-studies" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 text-base font-semibold border-[#E1E7E4] bg-white hover:bg-[#F8FAF9] text-[#12201B] cursor-pointer">
                View Case Studies
              </Button>
            </Link>
          </div>

          {/* Quick links footer */}
          <div className="pt-8 border-t border-[#E1E7E4] max-w-3xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-[#52605B]">
              <Link href="/services/saas-development" className="hover:text-[#059669] underline">
                SaaS Development
              </Link>
              <span>·</span>
              <Link href="/services/saas-mvp-development" className="hover:text-[#059669] underline">
                SaaS MVP Launch
              </Link>
              <span>·</span>
              <Link href="/services/code-audit" className="hover:text-[#059669] underline">
                Code Audits
              </Link>
              <span>·</span>
              <Link href="/services/saas-scaling" className="hover:text-[#059669] underline">
                Performance Scaling
              </Link>
              <span>·</span>
              <Link href="/services/vps-deployment" className="hover:text-[#059669] underline">
                VPS Deployment
              </Link>
              <span>·</span>
              <Link href="/services/ai-automation" className="hover:text-[#059669] underline">
                AI Automation
              </Link>
              <span>·</span>
              <Link href="/blog" className="hover:text-[#059669] underline">
                Engineering Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
