import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/seo/JsonLd";
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  Rocket,
  ShieldAlert,
  TrendingUp,
  Server,
  Globe,
  Cpu,
  ArrowUpRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "SaaS & Software Engineering Services | Dazzcode",
  description: "Explore Dazzcode's full software lifecycle services: SaaS development, SaaS MVP launches, code audits, SaaS scaling, VPS server deployments, custom web apps, and AI workflow automation.",
  keywords: [
    "SaaS development services",
    "SaaS development company",
    "SaaS MVP development",
    "code audit",
    "SaaS scaling",
    "VPS deployment",
    "custom web application development",
    "AI automation"
  ],
  alternates: {
    canonical: "https://dazzcode.com/services",
  },
  openGraph: {
    title: "SaaS & Software Engineering Services | Dazzcode",
    description: "Build, audit, deploy, and scale your software products with Dazzcode's institutional-grade engineering services.",
    url: "https://dazzcode.com/services",
    siteName: "Dazzcode",
    images: [
      {
        url: "/images/hero-saas-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "Dazzcode Software Engineering Services",
      },
    ],
  },
};

export default function ServicesOverviewPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "@id": "https://dazzcode.com/services#list",
        name: "Dazzcode Engineering Services",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          url: `https://dazzcode.com/services/${service.slug}`,
          description: service.description,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dazzcode.com/services#breadcrumb",
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
            name: "Services",
            item: "https://dazzcode.com/services",
          },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAF9] text-[#12201B]">
      <JsonLd schema={serviceSchema} />

      {/* Hero Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECFDF5] border border-[#059669]/20 text-[#059669] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <span>Software Lifecycle Engineering</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-[#12201B] mb-6">
            Build, Audit, Deploy & Scale <br className="hidden sm:inline" />
            Your Software
          </h1>

          <p className="text-lg md:text-xl text-[#52615B] leading-relaxed max-w-3xl mx-auto mb-10">
            Dazzcode is an engineering partner across your entire software lifecycle. From high-speed SaaS MVP development to deep codebase audits and high-concurrency cloud scaling.
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-xs font-mono text-[#52615B]">
            <span className="px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">Build</span>
            <span className="text-[#059669]">→</span>
            <span className="px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">Audit</span>
            <span className="text-[#059669]">→</span>
            <span className="px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">Fix</span>
            <span className="text-[#059669]">→</span>
            <span className="px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">Deploy</span>
            <span className="text-[#059669]">→</span>
            <span className="px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">Scale</span>
          </div>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.slug}
                  className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] hover:border-[#059669]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group shadow-xs"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-center justify-center text-[#059669] mb-6 group-hover:scale-110 group-hover:bg-[#059669] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#059669] font-bold block mb-2">
                      0{index + 1} · {service.primaryKeyword}
                    </span>

                    <h2 className="text-2xl font-black text-[#12201B] tracking-tight mb-3 group-hover:text-[#059669] transition-colors">
                      {service.title}
                    </h2>

                    <p className="text-sm text-[#52615B] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-8">
                      {service.solution.features.slice(0, 3).map((feat, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2 text-xs text-[#52615B]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href={`/services/${service.slug}`} className="block">
                    <Button
                      variant="outline"
                      className="w-full h-11 text-xs font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#059669] hover:text-white hover:border-[#059669] rounded-xl transition-colors cursor-pointer"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-2" />
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regional Servicing CTA Banner */}
      <section className="py-16 bg-[#F8FAF9] border-t border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-black text-[#12201B] tracking-tight mb-3">
            Looking for Regional Software Development?
          </h2>
          <p className="text-sm text-[#52615B] max-w-2xl mx-auto mb-8">
            Dazzcode is headquartered in Nairobi, Kenya, engineering software for clients across East Africa, the United Kingdom, and the United States.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/ke/saas-development-company" className="px-5 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-bold text-[#12201B] hover:border-[#059669] hover:text-[#059669] transition-colors shadow-xs">
              Kenya SaaS Engineering
            </Link>
            <Link href="/east-africa/saas-development" className="px-5 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-bold text-[#12201B] hover:border-[#059669] hover:text-[#059669] transition-colors shadow-xs">
              East Africa Regional Hub
            </Link>
            <Link href="/uk/saas-development" className="px-5 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-bold text-[#12201B] hover:border-[#059669] hover:text-[#059669] transition-colors shadow-xs">
              UK SaaS Development
            </Link>
            <Link href="/us/saas-development" className="px-5 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-bold text-[#12201B] hover:border-[#059669] hover:text-[#059669] transition-colors shadow-xs">
              US SaaS Development
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#12201B] text-white">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Need a Custom Architecture or Code Audit?
          </h2>
          <p className="text-sm md:text-base text-[#E2EAE6]/80 mb-8 max-w-xl mx-auto">
            Discuss your requirements with our senior engineers and get a direct technical recommendation.
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
