import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/seo/JsonLd";
import WebDevHeroPreview from "@/components/sections/WebDevHeroPreview";
import WooCommerceLeadForm from "@/components/sections/WooCommerceLeadForm";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Globe,
  Layout,
  Layers,
  Code2,
  ShieldCheck,
  Search,
  FileCode2,
  Zap,
  Smartphone,
  CreditCard,
  Database,
  Server,
  RefreshCw,
  TrendingUp,
  MessageSquare,
  Lock,
  Calendar,
  DollarSign,
  AlertTriangle,
  Clock,
  Briefcase,
  Building2,
  Users
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Company Kenya | Dazzcode",
  description:
    "Dazzcode builds professional websites and custom web applications for Kenyan businesses, startups and growing organizations.",
  keywords: [
    "web development company Kenya",
    "website development company Kenya",
    "web development Kenya",
    "web developer Kenya",
    "web developers Kenya",
    "web development services Kenya",
    "website development Kenya",
    "website developers Kenya",
    "website development services Kenya",
    "web design and development Kenya",
    "web design company Kenya",
    "web design Kenya",
    "professional web development Kenya",
    "custom web development Kenya",
    "custom website development Kenya",
    "custom website developer Kenya",
    "web application development Kenya",
    "web application developer Kenya",
    "web application developers Kenya",
    "web application development company Kenya",
    "web application development services Kenya",
    "custom web application development Kenya",
    "web app development Kenya",
    "web app developer Kenya",
    "web application developer Nairobi",
    "web development company Nairobi",
    "website development company Nairobi",
    "web developer Nairobi",
    "web development Nairobi",
    "web design Nairobi",
    "website developer Nairobi",
    "custom business software Kenya",
    "customer portal development Kenya",
    "website development cost Kenya",
    "web application cost Kenya",
    "M-Pesa website integration Kenya"
  ],
  alternates: {
    canonical: "https://dazzcode.com/ke/web-development-in-kenya",
    languages: {
      "en": "https://dazzcode.com/services/web-application-development",
      "en-KE": "https://dazzcode.com/ke/web-development-in-kenya",
      "x-default": "https://dazzcode.com/ke/web-development-in-kenya",
    },
  },
  openGraph: {
    title: "Web Development Company Kenya | Web Applications & Websites | Dazzcode",
    description:
      "Dazzcode builds professional websites and custom web applications for Kenyan businesses, startups and growing organizations. Development, SEO and ongoing support.",
    url: "https://dazzcode.com/ke/web-development",
    siteName: "Dazzcode",
    images: [
      {
        url: "/images/hero-saas-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "Web Development Company in Kenya - Dazzcode",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company Kenya | Dazzcode",
    description:
      "Professional websites and custom web applications built for Kenyan businesses, startups, and growing teams. Fast, secure, and M-Pesa integrated.",
    images: ["/images/hero-saas-dashboard.jpg"],
  },
};

export default function KenyaWebDevelopmentPage() {
  const faqs = [
    {
      question: "How much does website development cost in Kenya?",
      answer: "Professional business website development at Dazzcode starts from KSh 25,000 for standard business websites. The final price depends on the number of pages, custom design requirements, integrations (such as WhatsApp or M-Pesa), and functionality.",
    },
    {
      question: "How much does a website cost in Kenya?",
      answer: "A standard informative company website typically ranges between KSh 25,000 and KSh 60,000 depending on content volume, branding customization, and on-page SEO setup. Complex multi-page portals or online stores require a tailored scope.",
    },
    {
      question: "How much does a web application cost in Kenya?",
      answer: "Custom web applications start from KSh 25,000 for focused tools and scale depending on feature complexity, user authentication roles, database schema design, third-party API integrations, and workflow automation requirements.",
    },
    {
      question: "What is the difference between a website and a web application?",
      answer: "A website is primarily informational—it helps customers find your business, read about your services, and contact you. A web application is an interactive software system accessed through a browser where users log in, manage data, track orders, generate reports, or execute business workflows.",
    },
    {
      question: "Do you build custom web applications in Kenya?",
      answer: "Yes. We engineer custom web applications such as client portals, booking systems, multi-branch inventory managers, staff dashboards, and internal business platforms tailored specifically to how your team operates.",
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Yes. If your current website is slow, outdated, difficult to navigate on mobile devices, or not generating customer inquiries, we can modernize the design, speed up page loads, and restructure it for search engines.",
    },
    {
      question: "Can you integrate M-Pesa into my website or web app?",
      answer: "Yes. We integrate Safaricom Lipa na M-Pesa STK Push, Paybill, and Buy Goods payment workflows using the official Daraja API for instant payment prompts and automated order verification.",
    },
    {
      question: "Can you integrate WhatsApp into my website?",
      answer: "Yes. We implement direct WhatsApp click-to-chat triggers, floating reachout buttons, and automated message templates so prospective clients can message your team instantly.",
    },
    {
      question: "Do you provide website SEO in Kenya?",
      answer: "Yes. We offer ongoing SEO services at around KSh 20,000 per month. This includes Kenyan keyword research, on-page optimization, title tags, meta descriptions, image optimization, schema markup, and Google Search Console indexing.",
    },
    {
      question: "How much does SEO cost in Kenya?",
      answer: "Our ongoing SEO service for Kenyan business websites is around KSh 20,000 per month, focused on improving organic search visibility, local map pack presence, and qualified search traffic.",
    },
    {
      question: "Can you deploy my web application on a VPS server?",
      answer: "Yes. We configure hardened Linux VPS instances (Hetzner, DigitalOcean, AWS) with Docker, Nginx reverse proxies, SSL automation, automated backups, and push-to-deploy CI/CD pipelines.",
    },
    {
      question: "Can you audit existing website or application code?",
      answer: "Yes. We perform thorough technical code audits to identify security vulnerabilities, slow database queries, plugin conflicts, and architectural technical debt in existing codebases.",
    },
    {
      question: "Can you maintain my website after launch?",
      answer: "Yes. We provide continuous maintenance, security updates, uptime monitoring, bug fixes, and technical support so your site remains online and secure.",
    },
    {
      question: "Do you work with businesses outside Nairobi?",
      answer: "Yes. While Dazzcode is headquartered in Nairobi, we work remotely and on-site with businesses across Mombasa, Kisumu, Nakuru, Eldoret, and all parts of Kenya, as well as international clients.",
    },
    {
      question: "How long does website development take?",
      answer: "A standard business website typically takes 1 to 2 weeks from kickoff to launch. Custom web applications and platforms usually take 3 to 6 weeks depending on feature scope and database workflows.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dazzcode.com/ke/web-development#service",
        name: "Web Development Company in Kenya",
        description:
          "Professional website development and custom web application engineering in Kenya. Building company websites, client portals, internal business systems, M-Pesa integrations, and ongoing SEO.",
        provider: {
          "@type": "LocalBusiness",
          name: "Dazzcode",
          url: "https://dazzcode.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Nairobi",
            addressCountry: "KE",
          },
        },
        areaServed: [
          { "@type": "Country", name: "Kenya" },
          { "@type": "City", name: "Nairobi" },
          { "@type": "City", name: "Mombasa" },
          { "@type": "City", name: "Kisumu" },
          { "@type": "City", name: "Nakuru" },
          { "@type": "City", name: "Eldoret" },
        ],
        serviceType: "Web Development & Web Application Development Services",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Web Development Services in Kenya",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Business Website Development",
                description: "Professional responsive company websites with mobile optimization, contact funnels, and WhatsApp integration.",
              },
              price: "25000",
              priceCurrency: "KES",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Web Application Development",
                description: "Bespoke web applications, customer portals, staff dashboards, and operational database systems.",
              },
              price: "25000",
              priceCurrency: "KES",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Website SEO for Kenyan Businesses",
                description: "Monthly on-page, technical, and local SEO services to improve organic Google search rankings in Kenya.",
              },
              price: "20000",
              priceCurrency: "KES",
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dazzcode.com/ke/web-development#breadcrumb",
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
            name: "Web Development",
            item: "https://dazzcode.com/ke/web-development",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://dazzcode.com/ke/web-development#faq",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
    ],
  };

  const audienceGroups = [
    {
      title: "Small Businesses",
      tag: "Company Presence",
      desc: "Professional websites that help customers find your business, understand your services, view your location, and contact you directly.",
      features: ["Mobile responsive layout", "WhatsApp reachout", "Clear service pages", "Google Maps & contact funnel"],
    },
    {
      title: "Growing Businesses",
      tag: "Operations & Sales",
      desc: "High-performance websites and custom software designed to support expanding sales, customer accounts, and daily operations.",
      features: ["Lead generation funnels", "Client management portals", "Automated invoicing", "M-Pesa payment integration"],
    },
    {
      title: "Startups & Innovators",
      tag: "MVPs & SaaS",
      desc: "Fast-loading landing pages, production-ready MVPs, customer dashboards, and custom web applications to validate market demand.",
      features: ["Fast 4–6 week launch", "User authentication (RBAC)", "PostgreSQL database", "100% IP code ownership"],
    },
    {
      title: "Service Businesses",
      tag: "Bookings & Inquiries",
      desc: "Law firms, healthcare clinics, consultants, logistics providers, and appointment businesses accepting online bookings and inquiries.",
      features: ["Booking calendars", "Service quote calculators", "Client onboarding", "Automated email/SMS alerts"],
    },
    {
      title: "Product Businesses",
      tag: "Catalogs & Commerce",
      desc: "Distributors, wholesalers, and retail brands showcasing product lines, digital catalogs, and custom ordering systems.",
      features: ["Product catalog browsing", "Wholesale pricing logic", "M-Pesa checkout", "Inventory sync"],
    },
    {
      title: "Organizations & Teams",
      tag: "Internal Systems",
      desc: "Institutions replacing messy spreadsheets and disconnected tools with custom web dashboards, approval workflows, and staff portals.",
      features: ["Internal staff roles", "Custom data filters", "Secure access control", "Zero per-seat licensing fees"],
    },
  ];

  const coreServices = [
    {
      number: "01",
      title: "Business Website Development",
      price: "From KSh 25,000",
      priceSubtitle: "Final price depends on pages, design requirements & integrations",
      description: "Professional website development for businesses that need a clean, credible online presence that turns visitors into paying customers.",
      scopeItems: [
        "Responsive, mobile-first design optimized for smartphones",
        "Essential business pages (Home, About, Services, Work, Contact)",
        "Direct WhatsApp integration and interactive lead capture forms",
        "Fast page load speeds and Google Core Web Vitals optimization",
        "Basic technical SEO, meta descriptions, and Google indexing",
        "Google Maps integration and local contact information",
        "Clean, modern typography and brand color styling",
        "Admin capability to easily update content and news",
      ],
      ctaText: "Build My Website →",
      ctaAnchor: "#lead-form",
    },
    {
      number: "02",
      title: "Custom Web Application Development",
      price: "From KSh 25,000",
      priceSubtitle: "Priced according to feature scope, workflows & database complexity",
      description: "Custom software engineering for businesses that need an interactive online system rather than just a marketing website.",
      scopeItems: [
        "Customer portals, client workspaces, and staff management dashboards",
        "User authentication with role-based access control (RBAC)",
        "Custom PostgreSQL / MySQL database schemas modeled around your workflow",
        "Safaricom M-Pesa Daraja STK Push payment and automated webhooks",
        "Custom business logic, reporting filters, and data export tools",
        "Third-party API integrations (CRMs, SMS gateways, ERP systems)",
        "Built with Next.js, React, and TypeScript for sub-100ms response times",
        "Full intellectual property transfer with zero vendor lock-in",
      ],
      ctaText: "Discuss My Web Application →",
      ctaAnchor: "#lead-form",
    },
    {
      number: "03",
      title: "Website Redesign & Optimization",
      price: "Custom Quote",
      priceSubtitle: "Based on current website state & improvement requirements",
      description: "Modernize an existing website that is slow, hard to navigate on mobile, outdated in appearance, or failing to generate inquiries.",
      scopeItems: [
        "Visual refresh with modern, clean UI and high-trust typography",
        "Mobile layout restructuring for smartphone users",
        "Page speed optimization and image asset compression",
        "Conversion funnel improvements and clearer call-to-actions",
        "Fixing broken links, crawl errors, and technical debt",
        "Search engine indexing cleanup and URL redirect preservation",
        "Security hardening and elimination of vulnerable plugins",
        "Seamless migration to fast hosting without losing traffic",
      ],
      ctaText: "Improve My Website →",
      ctaAnchor: "#lead-form",
    },
    {
      number: "04",
      title: "SEO for Kenyan Websites",
      price: "Around KSh 20,000 / month",
      priceSubtitle: "Designed to improve organic visibility & attract relevant visitors",
      description: "Help your business get found by customers in Nairobi and across Kenya who are actively searching for your services on Google.",
      scopeItems: [
        "Commercial keyword research tailored to Kenyan search intent",
        "On-page optimization of page titles, meta descriptions, and H1/H2 tags",
        "Local SEO signals and Google Search Console monitoring",
        "JSON-LD structured data schema (LocalBusiness / Service)",
        "Internal linking structure to channel ranking authority",
        "Content strategy recommendations for high-intent queries",
        "Technical crawlability checks and XML sitemap maintenance",
        "Transparent monthly reporting on search visibility progress",
      ],
      ctaText: "Start SEO →",
      ctaAnchor: "#lead-form",
    },
  ];

  const whyChooseDazzcode = [
    {
      icon: Briefcase,
      title: "Business-First Development",
      desc: "We focus on what the software or website needs to achieve for your business—attracting clients, automating tasks, or streamlining operations—not just writing code.",
    },
    {
      icon: RefreshCw,
      title: "Build + Technical Support",
      desc: "We don't disappear after launching your website. We provide continuous maintenance, security updates, server monitoring, and feature additions as you grow.",
    },
    {
      icon: Code2,
      title: "Custom When Necessary",
      desc: "We don't force every business into a rigid generic template. If your operations require custom database logic or specialized portals, we engineer exactly what you need.",
    },
    {
      icon: Zap,
      title: "Complete Technical Depth",
      desc: "Our engineering capabilities span modern frontend frameworks (Next.js/React), backend APIs, database design, Linux VPS deployment, and search engine optimization.",
    },
    {
      icon: Globe,
      title: "Kenya + Global Capability",
      desc: "Headquartered in Nairobi, Kenya, we understand local payment systems and commercial workflows while building software that meets international engineering standards.",
    },
    {
      icon: Lock,
      title: "100% IP & Asset Ownership",
      desc: "You retain full ownership of all source code, domain names, databases, and assets from day one with zero vendor lock-in or recurring platform commissions.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Understand",
      desc: "We learn about your business goals, target audience, everyday operational workflows, and what success looks like.",
    },
    {
      step: "02",
      title: "Plan",
      desc: "We map out page structure, feature requirements, user roles, database models, and a clear milestone timeline.",
    },
    {
      step: "03",
      title: "Design",
      desc: "We design clean, intuitive interface layouts that make it easy for your customers and team to navigate effortlessly.",
    },
    {
      step: "04",
      title: "Build",
      desc: "We develop the website or web application using clean TypeScript, modern responsive styling, and secure database connections.",
    },
    {
      step: "05",
      title: "Launch",
      desc: "We configure your domain, deploy the application to a secure server with SSL encryption, test live workflows, and make it live.",
    },
    {
      step: "06",
      title: "Improve",
      desc: "We assist with ongoing SEO, routine maintenance, speed tuning, and building new features as your business scales.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAF9] text-[#12201B]">
      <JsonLd schema={structuredData} />

      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#F8FAF9] border-b border-[#E2EAE6] relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-[#52615B] mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#059669] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/ke" className="hover:text-[#059669] transition-colors">Kenya</Link>
            <span>/</span>
            <span className="text-[#12201B] font-semibold">Web Development</span>
          </nav>

          {/* Single Main H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-[#12201B] mb-5">
            Web Development Company in Kenya
          </h1>

          <p className="text-2xl sm:text-3xl font-bold text-[#059669] tracking-tight mb-6">
            Professional Websites & Custom Web Applications
          </p>

          <p className="text-lg md:text-xl text-[#52615B] leading-relaxed max-w-3xl mb-8">
            Dazzcode builds professional websites and custom web applications for Kenyan businesses, startups and growing teams. From a simple business website to a custom platform, we build software around what your business needs.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
            <a href="#lead-form" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-sm font-bold uppercase tracking-wider bg-[#059669] text-white hover:bg-[#047857] rounded-xl transition-all shadow-md cursor-pointer"
              >
                Build My Website
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <a href="#lead-form" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-7 text-sm font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3] rounded-xl text-[#12201B] cursor-pointer"
              >
                Build a Web Application
              </Button>
            </a>
          </div>

          {/* Hero Micro-Copy */}
          <p className="text-xs font-mono uppercase tracking-widest text-[#52615B] mb-12">
            Websites · Web Applications · Business Systems · SEO
          </p>

          {/* Hero Interactive Visual Preview */}
          <WebDevHeroPreview />

          {/* Value Journey Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-[#E2EAE6] text-xs font-mono text-[#52615B]">
            <div>
              <span className="text-[#059669] font-bold block">01 · Websites</span>
              <span>From KSh 25,000</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">02 · Web Apps</span>
              <span>Portals & Dashboards</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">03 · Integrations</span>
              <span>M-Pesa & WhatsApp</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">04 · Support</span>
              <span>SEO & VPS Hosting</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST SECTION */}
      <section className="py-14 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <span className="text-2xl sm:text-3xl font-black text-[#059669] block">8+ Years</span>
              <span className="text-xs font-mono text-[#52615B] mt-1 block">Full-Stack Experience</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <span className="text-2xl sm:text-3xl font-black text-[#059669] block">100%</span>
              <span className="text-xs font-mono text-[#52615B] mt-1 block">IP & Code Ownership</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <span className="text-2xl sm:text-3xl font-black text-[#059669] block">Sub-1s</span>
              <span className="text-xs font-mono text-[#52615B] mt-1 block">Mobile Load Speed</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <span className="text-2xl sm:text-3xl font-black text-[#059669] block">Nairobi HQ</span>
              <span className="text-xs font-mono text-[#52615B] mt-1 block">Kenya & Global Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO WE BUILD FOR */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              Audience & Use Cases
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              Web Solutions for Kenyan Businesses
            </h2>
            <p className="text-base sm:text-lg text-[#52615B] leading-relaxed">
              We design and develop digital solutions tailored to the practical needs of businesses at different growth stages across Kenya.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audienceGroups.map((group) => (
              <div
                key={group.title}
                className="p-7 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] flex flex-col justify-between hover:border-[#059669]/40 hover:shadow-lg transition-all duration-200"
              >
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md bg-[#ECFDF5] text-[#059669] text-[11px] font-mono font-bold mb-3">
                    {group.tag}
                  </span>
                  <h3 className="text-xl font-bold text-[#12201B] mb-2">{group.title}</h3>
                  <p className="text-xs sm:text-sm text-[#52615B] leading-relaxed mb-6">{group.desc}</p>
                </div>
                <div className="pt-4 border-t border-[#E2EAE6] space-y-1.5">
                  {group.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#52615B]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WEBSITE VS WEB APPLICATION */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              Understanding Your Requirements
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              Do You Need a Website or a Web Application?
            </h2>
            <p className="text-base sm:text-lg text-[#52615B] leading-relaxed">
              Choosing the right type of development ensures your investment directly addresses what your business needs without unnecessary costs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Website Card */}
            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#12201B]">A Business Website</h3>
                    <p className="text-xs font-mono text-[#52615B]">Informational & Marketing</p>
                  </div>
                </div>

                <p className="text-sm font-semibold text-[#059669] mb-4">
                  &quot;A website helps people find and understand your business.&quot;
                </p>

                <p className="text-xs sm:text-sm text-[#52615B] leading-relaxed mb-6">
                  Best when prospective clients primarily need to learn about what you do, check your credentials, and reach out:
                </p>

                <ul className="space-y-2.5 text-xs text-[#52615B]">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Learn about your company story and team</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> See detailed services and past projects</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Request a quote or send an inquiry</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Find your office location and contact details</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Read business insights and blog articles</li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E2EAE6]">
                <a href="#lead-form" className="block w-full">
                  <Button variant="outline" className="w-full text-xs font-bold uppercase tracking-wider border-[#E2EAE6] rounded-xl cursor-pointer">
                    Build My Website →
                  </Button>
                </a>
              </div>
            </div>

            {/* Web Application Card */}
            <div className="p-8 rounded-3xl bg-[#ECFDF5] border border-[#059669]/30 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#059669] text-white flex items-center justify-center font-bold">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#12201B]">A Web Application</h3>
                    <p className="text-xs font-mono text-[#059669] font-bold">Interactive Software System</p>
                  </div>
                </div>

                <p className="text-sm font-semibold text-[#059669] mb-4">
                  &quot;A web application lets people actually use a system online.&quot;
                </p>

                <p className="text-xs sm:text-sm text-[#52615B] leading-relaxed mb-6">
                  Best when your users, clients, or staff need to interact with data, perform transactions, or execute workflows:
                </p>

                <ul className="space-y-2.5 text-xs text-[#12201B] font-medium">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Log in with secure user roles & permissions</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Submit forms, track requests, and manage records</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> View private analytics and client dashboards</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Process M-Pesa STK Push payments & auto-reconcile</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Manage inventory, bookings, or operational workflows</li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-[#059669]/20">
                <a href="#lead-form" className="block w-full">
                  <Button className="w-full text-xs font-bold uppercase tracking-wider bg-[#059669] text-white hover:bg-[#047857] rounded-xl shadow-sm cursor-pointer">
                    Discuss My Web Application →
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a href="#lead-form" className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#059669] hover:underline">
              <span>Not sure which one you need? Talk to Dazzcode</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 5. CORE SERVICES SECTION ("WHAT WE BUILD") */}
      <section id="services" className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              Core Engineering Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              What We Build
            </h2>
            <p className="text-base sm:text-lg text-[#52615B] leading-relaxed">
              From fast, professional business websites to complex web applications and search optimization, we provide end-to-end technical execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreServices.map((srv) => (
              <div
                key={srv.title}
                className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs flex flex-col justify-between hover:border-[#059669]/40 hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-xs font-mono text-[#059669] font-bold">
                      {srv.number} · Service
                    </span>
                    <span className="text-base font-black text-[#059669] font-mono bg-[#F8FAF9] px-3 py-1 rounded-lg border border-[#E2EAE6]">
                      {srv.price}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-[#12201B] tracking-tight mb-1">
                    {srv.title}
                  </h3>
                  <p className="text-xs font-mono text-[#52615B] mb-4">{srv.priceSubtitle}</p>

                  <p className="text-sm text-[#52615B] leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  <div className="space-y-2.5 mb-6 pt-4 border-t border-[#E2EAE6]">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#12201B] block mb-2">
                      Key Deliverables & Scope:
                    </span>
                    {srv.scopeItems.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#52615B] leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#059669] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2EAE6]">
                  <a href={srv.ctaAnchor} className="block w-full">
                    <Button
                      variant="outline"
                      className="w-full h-12 text-xs font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#059669] hover:text-white rounded-xl transition-colors cursor-pointer"
                    >
                      {srv.ctaText}
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CUSTOM BUSINESS SYSTEMS (WHEN A NORMAL WEBSITE ISN'T ENOUGH) */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] block">
                Beyond Standard Websites
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
                When a Normal Website Isn&apos;t Enough
              </h2>
              <p className="text-base text-[#52615B] leading-relaxed">
                If your business is currently running on endless spreadsheets, manual WhatsApp messages, and disconnected tools, a standard marketing website will not solve your core operational bottlenecks.
              </p>
              <p className="text-base font-semibold text-[#12201B] border-l-4 border-[#059669] pl-4 py-1">
                We build web applications engineered around the exact way your team and clients work.
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-[#52615B] pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Customer self-service portals and order tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Multi-branch inventory and stock management systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Custom CRM-style client databases and interaction logs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Automated PDF invoice generation and M-Pesa reconciliation</span>
                </div>
              </div>
              <div className="pt-3">
                <a href="#lead-form">
                  <Button className="h-12 px-6 text-xs font-bold uppercase tracking-wider bg-[#059669] hover:bg-[#047857] text-white rounded-xl shadow-sm cursor-pointer">
                    Discuss a Custom Business System →
                  </Button>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] p-7 space-y-4">
              <h3 className="text-lg font-bold text-[#12201B]">Common Business Systems We Build</h3>
              <div className="space-y-3 text-xs text-[#52615B]">
                <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                  <strong className="text-[#12201B] block mb-0.5">Booking & Scheduling Platforms</strong>
                  <span>Online appointment booking, client reminders, and deposit payments.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                  <strong className="text-[#12201B] block mb-0.5">Internal Staff & Operations Portals</strong>
                  <span>Multi-role access for managers, staff, and accountants with structured workflows.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                  <strong className="text-[#12201B] block mb-0.5">Custom SaaS MVPs</strong>
                  <span>Fast 4 to 6 week MVP development for founders launching new software ideas.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. KENYA-SPECIFIC FEATURES */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              Local Commercial Alignment
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              Built for Kenyan Businesses
            </h2>
            <p className="text-base sm:text-lg text-[#52615B] leading-relaxed">
              We design and engineer websites and software around the actual ways Kenyan customers browse, communicate, and pay.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] border border-[#059669]/20 flex items-center justify-center text-[#059669]">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B]">M-Pesa STK Push Integration</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Connect your website or web app to Safaricom Daraja API for instant mobile PIN prompts and automated order updates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] border border-[#059669]/20 flex items-center justify-center text-[#059669]">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B]">WhatsApp Business Connect</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Enable customers to start conversations with your sales team immediately through structured click-to-chat triggers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] border border-[#059669]/20 flex items-center justify-center text-[#059669]">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B]">Mobile-First Responsiveness</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Over 85% of Kenyan web traffic comes from smartphones. We guarantee smooth rendering and fast mobile navigation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] border border-[#059669]/20 flex items-center justify-center text-[#059669]">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B]">Kenyan Shillings (KSh)</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Present clear pricing in local KSh with optional multi-currency switching for East African and international clients.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] border border-[#059669]/20 flex items-center justify-center text-[#059669]">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B]">Local SEO Optimization</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Rank for local search terms used by customers in Nairobi, Mombasa, Kisumu, Nakuru, and across Kenya.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] border border-[#059669]/20 flex items-center justify-center text-[#059669]">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B]">Dedicated VPS Deployment</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Deploy your application to production-hardened Linux VPS servers with automated daily backups and SSL security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. M-PESA SECTION */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6]">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ECFDF5] border border-[#059669]/20 text-[#059669] text-xs font-mono font-bold uppercase">
                  <span>Daraja API 2.0 Integration</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
                  Connect Your Website to M-Pesa
                </h2>
                <p className="text-sm sm:text-base text-[#52615B] leading-relaxed">
                  Accept payments directly through your website or web application. Whether you need to collect service deposits, invoice payments, booking fees, or product checkouts, we integrate automated Safaricom M-Pesa STK Push prompts.
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-[#52615B] pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Customer enters phone number → instant PIN prompt fires</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Automated webhook updates system ledger and dispatches receipts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Supports Paybill, Buy Goods Till, and B2C disbursement workflows</span>
                  </div>
                </div>
                <div className="pt-3">
                  <a href="#lead-form">
                    <Button className="h-12 px-6 text-xs font-bold uppercase tracking-wider bg-[#059669] hover:bg-[#047857] text-white rounded-xl shadow-sm cursor-pointer">
                      Ask About M-Pesa Integration →
                    </Button>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] p-6 space-y-3 text-xs font-mono text-[#52615B] shadow-xs">
                <span className="text-[#059669] font-bold block pb-2 border-b border-[#E2EAE6]">
                  ⚡ Daraja STK Push Flow
                </span>
                <p>1. User selects service: &quot;Consultation Deposit (KSh 3,000)&quot;</p>
                <p>2. Enters Safaricom line: 07XX XXX XXX</p>
                <p>3. Prompt appears on mobile phone screen</p>
                <p>4. User enters M-Pesa PIN</p>
                <p>5. Webhook settles in 0.8s; appointment confirmed automatically</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. VPS / DEPLOYMENT SECTION */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] block">
                Infrastructure & Reliability
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
                We Can Take Your Application From Code to Live
              </h2>
              <p className="text-base text-[#52615B] leading-relaxed">
                Your application is not finished when the code is written. It needs to be deployed properly, secured against vulnerabilities, and kept running without unexpected downtime.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs text-[#52615B] pt-2">
                <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                  <strong className="text-[#12201B] block">Linux VPS Provisioning</strong>
                  <span>Hetzner, DigitalOcean & AWS</span>
                </div>
                <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                  <strong className="text-[#12201B] block">Nginx & SSL Automation</strong>
                  <span>HTTPS with auto-renewal</span>
                </div>
                <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                  <strong className="text-[#12201B] block">Docker Orchestration</strong>
                  <span>Containerized isolated stacks</span>
                </div>
                <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                  <strong className="text-[#12201B] block">Automated Backups</strong>
                  <span>Encrypted offsite daily cron</span>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/services/vps-deployment"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#059669] hover:underline"
                >
                  <span>Learn about our Linux VPS Deployment services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-3xl bg-[#12201B] text-[#E2EAE6] p-7 space-y-4 font-mono text-xs shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 text-[11px] text-[#10B981]">
                <span>SERVER_DEPLOYMENT_HEALTH</span>
                <span>STATUS: 99.9% UPTIME</span>
              </div>
              <div className="space-y-2 text-[#E2EAE6]/90">
                <p>❯ OS: Ubuntu 24.04 LTS (Non-root, UFW Hardened)</p>
                <p>❯ Proxy: Nginx Reverse Proxy with Brotli & HTTP/2</p>
                <p>❯ Runtime: Next.js Standalone Node Server</p>
                <p>❯ Database: PostgreSQL 16 with Index Tuning</p>
                <p>❯ SSL: Let&apos;s Encrypt TLS 1.3 Strict Auto-Renew</p>
                <p>❯ CI/CD: Push-to-Deploy GitHub Actions Pipeline</p>
              </div>
              <div className="pt-3 border-t border-white/10 text-[10px] text-[#E2EAE6]/60">
                Production-grade server architecture ensuring fast and reliable performance.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. MAINTENANCE & CODE AUDIT */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Maintenance */}
            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-[#12201B]">Keep Your Website Running</h3>
              <p className="text-xs sm:text-sm text-[#52615B] leading-relaxed">
                Websites and software require routine maintenance to remain secure and dependable. We handle software updates, security patch tests, uptime checks, bug fixes, and performance tuning.
              </p>
              <ul className="space-y-2 text-xs text-[#52615B] pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Regular software & dependency updates</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Security patch application and firewall checks</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Automated daily database backups</li>
              </ul>
              <div className="pt-4">
                <a href="#lead-form">
                  <Button variant="outline" className="text-xs font-bold uppercase tracking-wider border-[#E2EAE6] rounded-xl cursor-pointer">
                    Ask About Maintenance →
                  </Button>
                </a>
              </div>
            </div>

            {/* Code Audit */}
            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold">
                <FileCode2 className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-[#12201B]">Already Have a Website or Web App?</h3>
              <p className="text-xs sm:text-sm text-[#52615B] leading-relaxed">
                You do not necessarily have to rebuild everything from scratch. Dazzcode can perform a thorough code audit to identify technical debt, slow database queries, security vulnerabilities, and stability bottlenecks.
              </p>
              <ul className="space-y-2 text-xs text-[#52615B] pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Code quality and architectural inspection</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Database query optimization and index profiling</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Prioritized engineering remediation roadmap</li>
              </ul>
              <div className="pt-4">
                <Link href="/services/code-audit">
                  <Button variant="outline" className="text-xs font-bold uppercase tracking-wider border-[#E2EAE6] rounded-xl cursor-pointer">
                    Request a Code Audit →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. PRICING & COST FACTORS */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Transparent Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              Web Development Pricing in Kenya
            </h2>
            <p className="text-sm sm:text-base text-[#52615B] leading-relaxed">
              Transparent pricing with no surprise hourly overruns. Every project is scoped with clear milestones and defined deliverables.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-14">
            {/* Website */}
            <div className="p-7 rounded-3xl bg-[#FFFFFF] border-2 border-[#059669] flex flex-col justify-between shadow-md relative">
              <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#059669] text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                Company Presence
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#059669] font-bold block mb-1">Business Website</span>
                <h3 className="text-xl font-bold text-[#12201B] mb-2">Professional Website</h3>
                <p className="text-2xl font-black text-[#059669] font-mono mb-2">From KSh 25,000</p>
                <p className="text-xs text-[#52615B] leading-relaxed mb-5">
                  Responsive design, essential pages, contact forms, WhatsApp button, and mobile optimization.
                </p>
                <ul className="space-y-2 text-xs text-[#52615B] border-t border-[#E2EAE6] pt-4">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Responsive mobile layout</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> WhatsApp & contact funnels</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Basic technical SEO setup</li>
                </ul>
              </div>
              <a href="#lead-form" className="mt-6 block">
                <Button className="w-full text-xs font-bold uppercase tracking-wider bg-[#059669] text-white hover:bg-[#047857] rounded-xl shadow-sm cursor-pointer">
                  Build My Website
                </Button>
              </a>
            </div>

            {/* Web App */}
            <div className="p-7 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#52615B] font-bold block mb-1">Custom Software</span>
                <h3 className="text-xl font-bold text-[#12201B] mb-2">Web Application</h3>
                <p className="text-2xl font-black text-[#059669] font-mono mb-2">From KSh 25,000</p>
                <p className="text-xs text-[#52615B] leading-relaxed mb-5">
                  Client portals, internal dashboards, booking systems, and database workflows. Final price depends on complexity.
                </p>
                <ul className="space-y-2 text-xs text-[#52615B] border-t border-[#E2EAE6] pt-4">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> User accounts & role permissions</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Custom database architecture</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> M-Pesa & third-party APIs</li>
                </ul>
              </div>
              <a href="#lead-form" className="mt-6 block">
                <Button variant="outline" className="w-full text-xs font-bold uppercase tracking-wider border-[#E2EAE6] rounded-xl cursor-pointer">
                  Discuss Web App
                </Button>
              </a>
            </div>

            {/* SEO */}
            <div className="p-7 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#52615B] font-bold block mb-1">Search Growth</span>
                <h3 className="text-xl font-bold text-[#12201B] mb-2">Website SEO</h3>
                <p className="text-2xl font-black text-[#059669] font-mono mb-2">Around KSh 20,000 <span className="text-xs font-normal text-[#52615B]">/ mo</span></p>
                <p className="text-xs text-[#52615B] leading-relaxed mb-5">
                  Kenyan keyword research, on-page SEO, technical indexing, and local Google visibility optimization.
                </p>
                <ul className="space-y-2 text-xs text-[#52615B] border-t border-[#E2EAE6] pt-4">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Commercial keyword targeting</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Structured data schema markup</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Monthly progress reporting</li>
                </ul>
              </div>
              <a href="#lead-form" className="mt-6 block">
                <Button variant="outline" className="w-full text-xs font-bold uppercase tracking-wider border-[#E2EAE6] rounded-xl cursor-pointer">
                  Start SEO
                </Button>
              </a>
            </div>
          </div>

          {/* Cost Drivers Explanation */}
          <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] space-y-6 shadow-xs">
            <h3 className="text-xl font-bold text-[#12201B]">What Affects Web Development Costs in Kenya?</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-[#52615B]">
              <div>
                <strong className="text-[#12201B] text-sm block mb-1">1. Number of Pages</strong>
                <span>A 5-page company website takes less time to build than a 25-page multi-service corporate website.</span>
              </div>
              <div>
                <strong className="text-[#12201B] text-sm block mb-1">2. Custom Design vs Template</strong>
                <span>Tailored brand identities and interactive UI animations require more specialized design work.</span>
              </div>
              <div>
                <strong className="text-[#12201B] text-sm block mb-1">3. Features & User Roles</strong>
                <span>Client accounts, staff permission levels, and private dashboards increase database complexity.</span>
              </div>
              <div>
                <strong className="text-[#12201B] text-sm block mb-1">4. Integrations</strong>
                <span>Connecting Safaricom M-Pesa STK Push, SMS gateways, CRMs, or accounting tools involves API configuration.</span>
              </div>
              <div>
                <strong className="text-[#12201B] text-sm block mb-1">5. Custom Business Logic</strong>
                <span>Specialized calculators, booking algorithms, and multi-step approvals take additional engineering time.</span>
              </div>
              <div>
                <strong className="text-[#12201B] text-sm block mb-1">6. Hosting & Infrastructure</strong>
                <span>Deploying to hardened Linux VPS servers with automated backups provides enterprise reliability.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. SELECTED WORK */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              Proven Delivery
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              Selected Work
            </h2>
            <p className="text-base text-[#52615B] leading-relaxed">
              Explore how Dazzcode engineers high-performance web applications and digital platforms for Kenyan businesses.
            </p>
          </div>

          <div className="p-8 md:p-10 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#059669] block">
                Case Study · DazzPOS Platform
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight">
                DazzPOS Multi-Store Retail Web Application
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed">
                Offline-first retail POS and inventory management platform operating in active retail outlets across Kenya, featuring sub-second barcode scans and automated Safaricom M-Pesa STK Push payment callbacks.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono text-[#52615B]">
                <span className="px-2.5 py-1 rounded-md bg-[#FFFFFF] border border-[#E2EAE6]">Next.js & TypeScript</span>
                <span className="px-2.5 py-1 rounded-md bg-[#FFFFFF] border border-[#E2EAE6]">M-Pesa Daraja API</span>
                <span className="px-2.5 py-1 rounded-md bg-[#FFFFFF] border border-[#E2EAE6]">Sub-50ms API Latency</span>
              </div>
            </div>
            <Link href="/case-studies/dazzpos" className="shrink-0">
              <Button
                variant="outline"
                className="h-12 px-6 text-xs font-bold uppercase tracking-wider border-[#E2EAE6] hover:bg-[#FFFFFF] rounded-xl text-[#12201B] cursor-pointer"
              >
                Read Case Study
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 13. WHY DAZZCODE */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              Differentiators
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              Why Dazzcode
            </h2>
            <p className="text-base sm:text-lg text-[#52615B] leading-relaxed">
              We combine deep full-stack software engineering with practical commercial understanding to deliver digital assets that perform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseDazzcode.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-7 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] space-y-3 shadow-xs hover:border-[#059669]/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] border border-[#059669]/20 flex items-center justify-center text-[#059669]">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#12201B]">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#52615B] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14. PROCESS */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              Clear Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              How We Build
            </h2>
            <p className="text-base sm:text-lg text-[#52615B] leading-relaxed">
              We follow a simple, structured 6-step engineering methodology to take your project from discovery to a live, dependable product.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="p-7 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-3"
              >
                <span className="text-xs font-mono font-black text-[#059669] block">
                  STEP {step.step}
                </span>
                <h3 className="text-lg font-bold text-[#12201B]">{step.title}</h3>
                <p className="text-xs sm:text-sm text-[#52615B] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. LOCATION SIGNALS */}
      <section className="py-14 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#059669] block mb-2">
            Nationwide Reach
          </span>
          <p className="text-sm sm:text-base text-[#52615B] max-w-2xl mx-auto leading-relaxed">
            Headquartered in Nairobi, Dazzcode works with businesses and startups across <strong>Nairobi, Mombasa, Kisumu, Nakuru, Eldoret</strong>, and all 47 counties in Kenya, as well as international remote clients.
          </p>
        </div>
      </section>

      {/* 16. FAQ SECTION */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-[#52615B] leading-relaxed">
              Have questions about website costs, web applications, M-Pesa integration, or SEO in Kenya? Find straightforward answers below.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] transition-colors open:bg-white open:border-[#059669]/40 shadow-xs"
              >
                <summary className="flex items-center justify-between font-bold text-sm sm:text-base text-[#12201B] cursor-pointer list-none">
                  <span>{faq.question}</span>
                  <span className="text-[#059669] group-open:rotate-180 transition-transform duration-200 shrink-0 ml-4 font-mono font-bold">
                    ↓
                  </span>
                </summary>
                <p className="text-xs sm:text-sm text-[#52615B] leading-relaxed mt-4 pt-4 border-t border-[#E2EAE6]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 17. INTERNAL CROSS-LINKS */}
      <section className="py-16 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#52615B] block mb-4">
            Related Engineering Services
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs">
            <Link href="/services/saas-development" className="p-3 rounded-xl bg-white border border-[#E2EAE6] hover:border-[#059669] text-[#12201B] font-semibold transition-colors text-center">
              SaaS Development
            </Link>
            <Link href="/ke/woocommerce-development" className="p-3 rounded-xl bg-white border border-[#E2EAE6] hover:border-[#059669] text-[#12201B] font-semibold transition-colors text-center">
              WooCommerce Kenya
            </Link>
            <Link href="/services/code-audit" className="p-3 rounded-xl bg-white border border-[#E2EAE6] hover:border-[#059669] text-[#12201B] font-semibold transition-colors text-center">
              Code Audit
            </Link>
            <Link href="/services/saas-scaling" className="p-3 rounded-xl bg-white border border-[#E2EAE6] hover:border-[#059669] text-[#12201B] font-semibold transition-colors text-center">
              SaaS Scaling
            </Link>
            <Link href="/services/vps-deployment" className="p-3 rounded-xl bg-white border border-[#E2EAE6] hover:border-[#059669] text-[#12201B] font-semibold transition-colors text-center">
              VPS Deployment
            </Link>
            <Link href="/blog" className="p-3 rounded-xl bg-white border border-[#E2EAE6] hover:border-[#059669] text-[#12201B] font-semibold transition-colors text-center">
              Engineering Blog
            </Link>
          </div>
        </div>
      </section>

      {/* 18. FINAL CTA & LEAD FORM */}
      <section id="lead-form" className="py-24 bg-[#FFFFFF] relative">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Start Your Project
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              Need a Website or Web Application?
            </h2>
            <p className="text-base text-[#52615B] leading-relaxed">
              Tell us what you&apos;re trying to build, improve, or automate. We will get back to you with clear milestone pricing and practical recommendations.
            </p>
          </div>

          <WooCommerceLeadForm />
        </div>
      </section>
    </div>
  );
}
