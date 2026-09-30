import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/seo/JsonLd";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Layout,
  Layers,
  Zap,
  HelpCircle,
  Building2,
  ShieldCheck,
  ArrowUpRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Application & Web Development Company in Kenya | Dazzcode",
  description: "Dazzcode is a top web development company in Kenya engineering high-performance web applications, customer portals, custom dashboards, and interactive platforms.",
  keywords: [
    "web development company Kenya",
    "website development company Kenya",
    "web developers Kenya",
    "web application development Kenya",
    "custom web applications Nairobi",
    "Next.js web developers Kenya"
  ],
  alternates: {
    canonical: "https://dazzcode.com/ke/web-development-company",
  },
  openGraph: {
    title: "Web Application & Web Development Company in Kenya | Dazzcode",
    description: "Engineer interactive, high-performance web applications and business portals with Kenya's leading full-stack developers.",
    url: "https://dazzcode.com/ke/web-development-company",
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
};

export default function KenyaWebDevelopmentPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dazzcode.com/ke/web-development-company#service",
        name: "Web Development Company in Kenya",
        description: "Full-stack web application development services in Kenya. Engineering custom client portals, internal dashboards, and transactional web apps.",
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
        serviceType: "web development company Kenya",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dazzcode.com/ke/web-development-company#breadcrumb",
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
            name: "Web Development Company",
            item: "https://dazzcode.com/ke/web-development-company",
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
            <span className="text-[#12201B] font-semibold">Web Development</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECFDF5] border border-[#059669]/20 text-[#059669] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <Globe className="w-3.5 h-3.5" />
            <span>Full-Stack Web Engineering</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-[#12201B] mb-6">
            Web Application & Web Development Company in Kenya
          </h1>

          <p className="text-lg md:text-xl text-[#52615B] leading-relaxed max-w-3xl mb-8">
            Beyond standard marketing websites, Dazzcode engineers rich, interactive web applications. From custom client portals and booking platforms to data-driven web software with real-time M-Pesa transactions.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl transition-all shadow-[0_4px_20px_rgba(5,150,105,0.25)] cursor-pointer"
              >
                Scope Your Web Application
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/services/web-application-development">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-7 text-sm font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3] rounded-xl text-[#12201B] shadow-xs cursor-pointer"
              >
                Global Web Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Website vs Web Application Clarification */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Clear Architectural Distinction
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              Marketing Websites vs. High-Performance Web Applications
            </h2>
            <p className="text-base text-[#52615B] leading-relaxed">
              Many agencies in Nairobi build static WordPress templates. At Dazzcode, we build production web applications that execute business logic, manage user permissions, and handle high-volume database transactions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <h3 className="text-lg font-mono uppercase tracking-wider text-[#52615B] font-bold mb-4">
                Basic Marketing Websites
              </h3>
              <ul className="space-y-3 text-sm text-[#52615B]">
                <li className="flex items-start gap-2">
                  <span className="text-[#52615B] font-mono">•</span>
                  <span>Static company brochures & contact forms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#52615B] font-mono">•</span>
                  <span>Generic WordPress / Wix template themes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#52615B] font-mono">•</span>
                  <span>No user authentication or private dashboards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#52615B] font-mono">•</span>
                  <span>Vulnerable to plugin bloat and security leaks</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#ECFDF5] border border-[#059669]/30 shadow-xs">
              <h3 className="text-lg font-mono uppercase tracking-wider text-[#059669] font-bold mb-4">
                Dazzcode Custom Web Applications
              </h3>
              <ul className="space-y-3 text-sm text-[#12201B] font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span>Interactive user dashboards with role-based permissions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span>Custom PostgreSQL databases modeling complex business data</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span>Automated M-Pesa STK Push payment and webhook reconciliation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span>Built with Next.js, React, and TypeScript for sub-100ms speeds</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              FAQ
            </span>
            <h2 className="text-3xl font-black text-[#12201B] tracking-tight">
              Web Application Development in Kenya
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <h3 className="text-base font-bold text-[#12201B] mb-2 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                <span>Can our web application be installed as a mobile app on Android / iPhone?</span>
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed pl-8">
                Yes. We build Progressive Web Applications (PWAs) that can be installed on staff and customer home screens without going through App Store approval, with offline capability and instant push updates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <h3 className="text-base font-bold text-[#12201B] mb-2 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                <span>What tech stack do you use for web development?</span>
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed pl-8">
                We engineer with Next.js (App Router), React, TypeScript, Tailwind CSS, and PostgreSQL backed by Node.js or Go microservices. This delivers institutional security and high Google Lighthouse performance scores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#12201B] text-white">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Ready to Build a Fast, Scalable Web Application?
          </h2>
          <p className="text-sm md:text-base text-[#E2EAE6]/80 mb-8 max-w-xl mx-auto">
            Contact Dazzcode in Nairobi to discuss scoping, timelines, and technical architecture.
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
