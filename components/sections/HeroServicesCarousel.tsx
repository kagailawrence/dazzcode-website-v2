"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Layers,
  Rocket,
  Globe,
  Server,
  ShieldAlert,
  TrendingUp,
  Cpu,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Store
} from "lucide-react";

interface ServiceSlide {
  id: string;
  tag: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  href: string;
  icon: typeof Layers;
}

const serviceSlides: ServiceSlide[] = [
  {
    id: "saas-dev",
    tag: "01 · Core Engineering",
    title: "SaaS Development",
    shortDesc: "End-to-end custom SaaS development & scalable architecture.",
    fullDesc: "As a dedicated SaaS development company, we build multi-tenant SaaS platforms with strict type-safety, subscription billing, and institutional architecture.",
    highlights: ["Multi-Tenant Architecture", "Strict TypeScript & Next.js", "Subscription Billing"],
    href: "/services/custom-saas-development",
    icon: Layers,
  },
  {
    id: "saas-mvp",
    tag: "02 · Rapid Launch",
    title: "SaaS MVP Development",
    shortDesc: "From validated idea to production launch in 4 to 6 weeks.",
    fullDesc: "Accelerate your market entry with focused SaaS MVP development. We engineer clean, investor-ready MVPs that validate your business model fast.",
    highlights: ["4–6 Week Launch", "Investor-Ready Codebase", "100% IP Ownership"],
    href: "/services/saas-mvp-development",
    icon: Rocket,
  },
  {
    id: "code-audit",
    tag: "03 · Technical Due Diligence",
    title: "SaaS Code Audit",
    shortDesc: "Technical code audit, security reviews & architecture analysis.",
    fullDesc: "Comprehensive codebase audits to eliminate technical debt, profile slow PostgreSQL queries, and prepare for investor due diligence.",
    highlights: ["Deep Static & Query Profiling", "OWASP Security Check", "Prioritized Roadmap"],
    href: "/services/saas-code-audit",
    icon: ShieldAlert,
  },
  {
    id: "saas-scaling",
    tag: "04 · Concurrency & Speed",
    title: "SaaS Scaling",
    shortDesc: "Performance optimization, database tuning & sub-50ms latency.",
    fullDesc: "Scale your software to thousands of users without crashing or exploding server costs. Query indexing, connection pooling, and edge caching.",
    highlights: ["Sub-50ms API Latency", "PostgreSQL Indexing", "Cloud Cost Reduction"],
    href: "/services/saas-scaling",
    icon: TrendingUp,
  },
  {
    id: "vps-deploy",
    tag: "05 · Linux Infrastructure",
    title: "VPS Deployment",
    shortDesc: "Deploy Next.js, Node.js & Docker on high-performance Linux VPS.",
    fullDesc: "Full-stack SaaS deployment and Linux server deployment. Docker Compose, Nginx reverse proxies, SSL automation, and GitHub Actions CI/CD.",
    highlights: ["Next.js Standalone VPS", "Docker & Nginx Setup", "Push-to-Deploy CI/CD"],
    href: "/services/vps-deployment",
    icon: Server,
  },
  {
    id: "web-apps",
    tag: "06 · Custom Software",
    title: "Web Application Development",
    shortDesc: "Custom business web applications, client portals & ERPs.",
    fullDesc: "We build custom web applications and operational client portals with custom database schemas and real-time ledger synchronization.",
    highlights: ["Custom Operational Logic", "Interactive Dashboards", "No Per-Seat Fees"],
    href: "/services/web-application-development",
    icon: Globe,
  },
  {
    id: "ai-auto",
    tag: "07 · Intelligent Workflows",
    title: "AI & Automation",
    shortDesc: "Practical AI integration, document extraction & workflow automation.",
    fullDesc: "Automate repetitive business workflows with deterministic LLM pipelines, automated document parsing, and lead qualification integrations.",
    highlights: ["Structured JSON Outputs", "Zero Hallucination Bounds", "Webhook Automation"],
    href: "/services/ai-automation",
    icon: Cpu,
  },
  {
    id: "ecommerce",
    tag: " 08 · Online Store Management",
    title: "Ecommerce Development",
    shortDesc: "Custom ecommerce stores, woocommerce customization, and plugins",
    fullDesc: "We build custom ecommerce stores and customize woocommerce to fit your business needs. We also create custom plugins to add new features to your store.",
    highlights: ["Custom E-commerce Stores", "Woocommerce Customization", "Custom Plugins"],
    href: "/services/ecommerce",
    icon:Store
  }
];

export default function HeroServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % serviceSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + serviceSlides.length) % serviceSlides.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentSlide = serviceSlides[currentIndex];
  const IconComponent = currentSlide.icon;

  return (
    <div
      className="mt-16 w-full max-w-5xl mx-auto rounded-3xl border border-[#E2EAE6] bg-[#FFFFFF] p-6 md:p-8 shadow-lg relative overflow-hidden group/carousel"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Dazzcode Software Engineering Services"
    >
      {/* Background Accent Subtle Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#059669]/10 via-[#10B981]/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Header bar of carousel */}
      <div className="flex items-center justify-between border-b border-[#E2EAE6] pb-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#52615B]">
            Services We Offer ({currentIndex + 1} / {serviceSlides.length})
          </span>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-lg border border-[#E2EAE6] text-[#52615B] hover:text-[#059669] hover:bg-[#F8FAF9] transition-colors"
            aria-label={isPlaying ? "Pause automatic slide rotation" : "Start automatic slide rotation"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={prevSlide}
            className="p-2 rounded-lg border border-[#E2EAE6] text-[#52615B] hover:text-[#059669] hover:bg-[#F8FAF9] transition-colors"
            aria-label="Previous capability"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={nextSlide}
            className="p-2 rounded-lg border border-[#E2EAE6] text-[#52615B] hover:text-[#059669] hover:bg-[#F8FAF9] transition-colors"
            aria-label="Next capability"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Slide Body */}
      <div className="grid md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ECFDF5] border border-[#059669]/20 text-[#059669] text-xs font-mono font-bold tracking-wider uppercase">
            <IconComponent className="w-3.5 h-3.5" />
            <span>{currentSlide.tag}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#12201B]">
            {currentSlide.title}
          </h3>

          <p className="text-sm sm:text-base text-[#52615B] leading-relaxed">
            {currentSlide.fullDesc}
          </p>

          {/* Highlights tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {currentSlide.highlights.map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6] text-xs font-mono text-[#52615B]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right CTA Button Box */}
        <div className="md:col-span-4 flex flex-col justify-center items-start md:items-end md:border-l md:border-[#E2EAE6] md:pl-6">
          <p className="text-xs text-[#52615B] mb-4 text-left md:text-right hidden sm:block">
            {currentSlide.shortDesc}
          </p>
          <Link href={currentSlide.href} className="w-full sm:w-auto">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#059669] hover:bg-[#10B981] text-white px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-[0_4px_14px_rgba(5,150,105,0.25)] hover:scale-[1.02] active:scale-95 cursor-pointer">
              <span>View Service Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>

      {/* Indicator Bars */}
      <div className="flex items-center gap-2 mt-8 pt-4 border-t border-[#E2EAE6]">
        {serviceSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === idx
                ? "w-8 bg-[#059669]"
                : "w-2 bg-[#E2EAE6] hover:bg-[#52615B]"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
