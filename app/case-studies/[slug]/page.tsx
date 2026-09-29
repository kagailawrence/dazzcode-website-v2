import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "@/lib/data";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/seo/JsonLd";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Layers,
  Rocket,
  ShieldCheck,
  Zap,
  Code2,
  Database,
  Server,
  ArrowUpRight,
  TrendingUp,
  Cpu
} from "lucide-react";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return {
      title: "Case Study Not Found | Dazzcode",
    };
  }

  return {
    title: `${study.title} | Dazzcode Case Study`,
    description: study.summary,
    keywords: [
      `${study.slug} case study`,
      study.title,
      ...study.tags,
      "SaaS architecture case study",
      "Dazzcode client work",
    ],
    alternates: {
      canonical: `https://dazzcode.com/case-studies/${slug}`,
    },
    openGraph: {
      title: `${study.title} | Dazzcode Case Study`,
      description: study.summary,
      url: `https://dazzcode.com/case-studies/${slug}`,
      siteName: "Dazzcode",
      images: [
        {
          url: "/images/hero-saas-dashboard.jpg",
          width: 1200,
          height: 630,
          alt: study.title,
        },
      ],
      type: "article",
    },
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://dazzcode.com/case-studies/${study.slug}#article`,
        headline: study.title,
        description: study.summary,
        author: {
          "@type": "Organization",
          name: "Dazzcode Team",
          url: "https://dazzcode.com",
        },
        publisher: {
          "@type": "Organization",
          name: "Dazzcode",
          logo: {
            "@type": "ImageObject",
            url: "https://dazzcode.com/images/logo.png",
          },
        },
        image: "https://dazzcode.com/images/hero-saas-dashboard.jpg",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://dazzcode.com/case-studies/${study.slug}#breadcrumb`,
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
            name: "Case Studies",
            item: "https://dazzcode.com/case-studies",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: study.title,
            item: `https://dazzcode.com/case-studies/${study.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAF9] text-[#12201B]">
      <JsonLd schema={structuredData} />

      {/* Header / Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-[#52615B] mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#059669] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-[#059669] transition-colors">Case Studies</Link>
            <span>/</span>
            <span className="text-[#12201B] font-semibold">{study.title.split(":")[0]}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="px-3.5 py-1 rounded-full bg-[#ECFDF5] border border-[#059669]/20 text-[#059669] text-xs font-mono font-bold uppercase tracking-wider">
              {study.category}
            </span>
            <span className="text-xs font-mono text-[#52615B]">· {study.client}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.08] text-[#12201B] mb-6">
            {study.title}
          </h1>

          <p className="text-lg md:text-xl text-[#52615B] leading-relaxed mb-10 max-w-3xl">
            {study.description}
          </p>

          {/* Key Metrics Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 md:p-8 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-md">
            {study.metrics.map((m, index) => (
              <div key={index}>
                <span className="text-3xl md:text-4xl font-black text-[#059669] tracking-tight block">
                  {m.value}
                </span>
                <span className="text-xs font-mono text-[#52615B] mt-1 block">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Case Study Body (Problem -> Decision -> Build -> Result) */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl space-y-16">
          {/* 1. Problem */}
          <div className="p-8 md:p-10 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEE2E2] text-[#DC2626] text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <span>01 · The Problem</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight mb-4">
              {study.problem.heading}
            </h2>
            <p className="text-base text-[#52615B] leading-relaxed mb-6">
              {study.problem.description}
            </p>
            <div className="space-y-3">
              {study.problem.challenges.map((c, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-[#52615B]">
                  <span className="w-5 h-5 rounded bg-[#FEE2E2] text-[#DC2626] flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">✕</span>
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Decision */}
          <div className="p-8 md:p-10 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0E7FF] text-[#4F46E5] text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <span>02 · Architectural Decision</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight mb-4">
              {study.decision.heading}
            </h2>
            <p className="text-base text-[#52615B] leading-relaxed mb-6">
              {study.decision.description}
            </p>
            <div className="space-y-3">
              {study.decision.architectureChoices.map((c, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-[#12201B] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#4F46E5] shrink-0 mt-0.5" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Build */}
          <div className="p-8 md:p-10 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3C7] text-[#D97706] text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <span>03 · The Build</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight mb-4">
              {study.build.heading}
            </h2>
            <p className="text-base text-[#52615B] leading-relaxed mb-6">
              {study.build.description}
            </p>

            <div className="mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#52615B] block mb-3">
                Technologies Utilized
              </span>
              <div className="flex flex-wrap gap-2">
                {study.build.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-mono text-[#12201B]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#E2EAE6]">
              {study.build.keyFeatures.map((f, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-[#52615B]">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Result */}
          <div className="p-8 md:p-10 rounded-3xl bg-[#ECFDF5] border border-[#059669]/30 shadow-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#059669] text-white text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <span>04 · The Result</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight mb-4">
              {study.result.heading}
            </h2>
            <p className="text-base text-[#52615B] leading-relaxed mb-6">
              {study.result.description}
            </p>
            <div className="space-y-3">
              {study.result.outcomes.map((o, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-[#12201B] font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span>{o}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lessons Learned */}
          <div className="p-8 md:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
            <h3 className="text-xl font-bold text-[#12201B] mb-4">
              Key Engineering Lessons Learned
            </h3>
            <ul className="space-y-3 text-sm text-[#52615B]">
              {study.lessonsLearned.map((lesson, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#059669] font-bold font-mono">→</span>
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Services */}
          <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] text-center">
            <h3 className="text-lg font-bold text-[#12201B] mb-4">
              Related Engineering Services
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {study.relatedServices.map((rel, i) => (
                <Link
                  key={i}
                  href={rel.href}
                  className="px-4 py-2 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] hover:border-[#059669] hover:text-[#059669] text-xs font-bold transition-colors shadow-xs"
                >
                  {rel.title} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#12201B] text-white">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Need Similar Architecture for Your Business?
          </h2>
          <p className="text-sm md:text-base text-[#E2EAE6]/80 mb-8 max-w-xl mx-auto">
            Book a strategy discussion with Dazzcode's lead software engineers.
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
