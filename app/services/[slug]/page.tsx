import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/seo/JsonLd";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Zap,
  Code2,
  Lock,
  Layers,
  Sparkles,
  HelpCircle,
  Clock,
  ArrowUpRight,
  Server,
  Globe
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const staticSlugs = [
    "custom-saas-development",
    "saas-code-audit",
    "saas-mvp-development",
    "saas-scaling",
    "vps-deployment",
    "web-application-development"
  ];
  return services
    .filter((service) => !staticSlugs.includes(service.slug))
    .map((service) => ({
      slug: service.slug,
    }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Dazzcode",
    };
  }

  // Define hreflang alternates only when localized counterparts exist
  let alternates: Record<string, unknown> = {
    canonical: `https://dazzcode.com/services/${slug}`,
  };

  if (slug === "custom-saas-development" || slug === "saas-development") {
    alternates = {
      canonical: "https://dazzcode.com/services/custom-saas-development",
      languages: {
        "en": "https://dazzcode.com/services/custom-saas-development",
        "en-KE": "https://dazzcode.com/ke/saas-development-company",
        "en-GB": "https://dazzcode.com/uk/saas-development",
        "en-US": "https://dazzcode.com/us/saas-development",
        "x-default": "https://dazzcode.com/services/custom-saas-development",
      },
    };
  } else if (slug === "saas-code-audit" || slug === "code-audit") {
    alternates = {
      canonical: "https://dazzcode.com/services/saas-code-audit",
      languages: {
        "en": "https://dazzcode.com/services/saas-code-audit",
        "en-GB": "https://dazzcode.com/uk/code-audit",
        "en-US": "https://dazzcode.com/us/code-audit",
        "x-default": "https://dazzcode.com/services/saas-code-audit",
      },
    };
  } else if (slug === "saas-scaling") {
    alternates = {
      canonical: "https://dazzcode.com/services/saas-scaling",
      languages: {
        "en": "https://dazzcode.com/services/saas-scaling",
        "en-GB": "https://dazzcode.com/uk/saas-scaling",
        "en-US": "https://dazzcode.com/us/saas-scaling",
        "x-default": "https://dazzcode.com/services/saas-scaling",
      },
    };
  }

  return {
    title: `${service.title} | Dazzcode`,
    description: service.description,
    keywords: [
      service.primaryKeyword,
      ...service.secondaryKeywords,
      ...service.technicalCapabilities,
    ],
    alternates,
    openGraph: {
      title: `${service.title} | Dazzcode`,
      description: service.description,
      url: `https://dazzcode.com/services/${slug}`,
      siteName: "Dazzcode",
      images: [
        {
          url: "/images/hero-saas-dashboard.jpg",
          width: 1200,
          height: 630,
          alt: `${service.title} - Dazzcode Engineering`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Dazzcode`,
      description: service.description,
      images: ["/images/hero-saas-dashboard.jpg"],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  // Structured Data (Service + FAQ + Breadcrumbs)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://dazzcode.com/services/${service.slug}#service`,
        name: service.title,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: "Dazzcode",
          url: "https://dazzcode.com",
          logo: "https://dazzcode.com/images/logo.png",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Nairobi",
            addressCountry: "KE",
          },
        },
        areaServed: ["Kenya", "East Africa", "United Kingdom", "United States", "Worldwide"],
        serviceType: service.primaryKeyword,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://dazzcode.com/services/${service.slug}#breadcrumb`,
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
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `https://dazzcode.com/services/${service.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `https://dazzcode.com/services/${service.slug}#faq`,
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAF9] text-[#12201B]">
      <JsonLd schema={structuredData} />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-mono text-[#52615B] mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#059669] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#059669] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#12201B] font-semibold">{service.shortTitle || service.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#059669]/20 text-[#059669] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
                <Icon className="w-3.5 h-3.5" />
                <span>{service.primaryKeyword}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-[#12201B] mb-6">
                {service.hero.headline}
              </h1>

              <p className="text-lg md:text-xl text-[#52615B] leading-relaxed mb-8">
                {service.hero.subheadline}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link href={service.hero.ctaHref || "/contact"}>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-14 px-8 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl transition-all shadow-[0_4px_20px_rgba(5,150,105,0.25)] cursor-pointer"
                  >
                    {service.hero.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-14 px-7 text-sm font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3] hover:text-[#12201B] rounded-xl text-[#12201B] shadow-xs cursor-pointer"
                  >
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </div>

            {/* Quick Metrics / Summary Box */}
            <div className="w-full lg:w-80 p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-md">
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#52615B] mb-4">
                Engagement Details
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs text-[#52615B] block font-mono">Pricing Structure</span>
                  <span className="font-bold text-[#12201B]">{service.pricing.heading}</span>
                </div>
                <div className="h-px bg-[#E2EAE6]" />
                <div>
                  <span className="text-xs text-[#52615B] block font-mono">IP Ownership</span>
                  <span className="font-bold text-[#059669]">100% Client Ownership</span>
                </div>
                <div className="h-px bg-[#E2EAE6]" />
                <div>
                  <span className="text-xs text-[#52615B] block font-mono">Core Technologies</span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {service.technicalCapabilities.slice(0, 4).map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-[#F1F5F3] text-[11px] font-mono text-[#52615B]">
                        {tech.split(" ")[0]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMS / BOTTLENECKS SECTION */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              The Challenges We Solve
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight">
              {service.problems.heading}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {service.problems.points.map((point, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex items-start gap-4 shadow-xs hover:border-[#059669]/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FEE2E2] text-[#DC2626] flex items-center justify-center font-bold text-sm shrink-0 font-mono">
                  ✕
                </div>
                <p className="text-sm md:text-base text-[#52615B] leading-relaxed pt-0.5">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOLUTION & CORE ADVANTAGES */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              The Dazzcode Architecture
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              {service.solution.heading}
            </h2>
            <p className="text-base md:text-lg text-[#52615B] leading-relaxed">
              {service.solution.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {service.solution.features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <p className="text-sm md:text-base font-semibold text-[#12201B] leading-snug pt-1">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* Differentiators */}
          <div className="grid sm:grid-cols-3 gap-6 pt-4">
            {service.differentiators.map((diff, index) => {
              const DiffIcon = diff.icon;
              return (
                <div key={index} className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-4">
                    <DiffIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#12201B] mb-2">{diff.title}</h3>
                  <p className="text-xs text-[#52615B] leading-relaxed">{diff.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PROCESS STEP-BY-STEP */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Execution Roadmap
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight">
              How We Deliver {service.shortTitle || service.title}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col justify-between shadow-xs hover:border-[#059669]/50 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#059669] text-white flex items-center justify-center font-mono font-black text-sm mb-4 shadow-xs">
                    0{step.step}
                  </div>
                  <h3 className="text-base font-bold text-[#12201B] mb-2">{step.title}</h3>
                  <p className="text-xs text-[#52615B] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DELIVERABLES & TECHNICAL CAPABILITIES */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Deliverables */}
            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-sm">
              <h3 className="text-xl font-bold text-[#12201B] mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#059669]" />
                <span>What You Receive</span>
              </h3>
              <ul className="space-y-4">
                {service.deliverables.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-[#52615B]">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Capabilities */}
            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-sm">
              <h3 className="text-xl font-bold text-[#12201B] mb-6 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-[#059669]" />
                <span>Technical Stack & Standards</span>
              </h3>
              <ul className="space-y-4">
                {service.technicalCapabilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-[#52615B]">
                    <Zap className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. USE CASES & PRICING */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
                Typical Applications
              </span>
              <h2 className="text-3xl font-black text-[#12201B] tracking-tight mb-6">
                Who Needs {service.shortTitle || service.title}?
              </h2>
              <div className="space-y-3">
                {service.useCases.map((useCase, index) => (
                  <div key={index} className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] text-sm font-semibold text-[#12201B]">
                    {useCase}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#ECFDF5] to-[#F8FAF9] border border-[#059669]/20 shadow-md">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#059669] block mb-2">
                Commercial Overview
              </span>
              <h3 className="text-2xl font-black text-[#12201B] mb-3">
                {service.pricing.heading}
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed mb-6">
                {service.pricing.description}
              </p>
              <div className="space-y-2 mb-6 text-xs font-mono text-[#52615B]">
                <div className="flex items-center gap-2 text-[#059669]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Fixed-scope milestones</span>
                </div>
                <div className="flex items-center gap-2 text-[#059669]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>100% intellectual property transfer</span>
                </div>
                <div className="flex items-center gap-2 text-[#059669]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Direct senior engineer communication</span>
                </div>
              </div>
              <Link href="/contact" className="block">
                <Button className="w-full h-12 text-xs font-bold uppercase tracking-wider bg-[#059669] hover:bg-[#10B981] text-white rounded-xl shadow-sm cursor-pointer">
                  {service.hero.cta}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. RELATED CASE STUDY */}
      {service.relatedCaseStudy && (
        <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
          <div className="container px-4 md:px-6 mx-auto max-w-5xl">
            <div className="p-8 md:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#059669] block mb-2">
                  Featured Case Study
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight mb-2">
                  {service.relatedCaseStudy.title}
                </h3>
                <p className="text-sm text-[#52615B] leading-relaxed">
                  {service.relatedCaseStudy.summary}
                </p>
              </div>
              <Link href={`/case-studies/${service.relatedCaseStudy.slug}`} className="shrink-0">
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
      )}

      {/* 8. REGIONAL TARGETING LINKS */}
      {service.regionalLinks && service.regionalLinks.length > 0 && (
        <section className="py-16 bg-[#FFFFFF] border-b border-[#E2EAE6]">
          <div className="container px-4 md:px-6 mx-auto max-w-5xl">
            <div className="text-center mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#52615B]">
                Regional Service Locations
              </span>
              <h3 className="text-xl font-bold text-[#12201B] mt-1">
                Looking for {service.shortTitle || service.title} in your market?
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {service.regionalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] hover:border-[#059669] hover:bg-[#ECFDF5]/50 transition-all text-center group shadow-xs"
                >
                  <Globe className="w-4 h-4 text-[#059669] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-[#12201B] block group-hover:text-[#059669] transition-colors">
                    {link.label}
                  </span>
                  <span className="text-[10px] font-mono text-[#52615B] mt-1 block">
                    {link.region}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. FAQS SECTION */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight">
              Questions About {service.shortTitle || service.title}
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <div key={index} className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
                <h3 className="text-base font-bold text-[#12201B] mb-2 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-[#52615B] leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA SECTION */}
      <section className="py-24 bg-[#12201B] text-white relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#10B981] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <Clock className="w-3.5 h-3.5" />
            <span>Ready to Build?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
            Let's Engineer Your {service.shortTitle || service.title}
          </h2>

          <p className="text-base md:text-lg text-[#E2EAE6]/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a strategy discussion with our senior engineering team. We'll map your technical requirements, eliminate risks, and deliver transparent milestone estimates.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl transition-all shadow-[0_4px_20px_rgba(5,150,105,0.4)] cursor-pointer"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-7 text-sm font-bold uppercase tracking-wider border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-xl cursor-pointer"
              >
                Explore Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}