"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, Layers, Rocket, Globe, Sparkles, Server, ShieldCheck, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

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
    title: "Custom SaaS Development",
    shortDesc: "End-to-end SaaS development services & scalable architecture.",
    fullDesc: "As a specialized SaaS development company, we build multi-tenant SaaS platforms with strict type-safety, subscription billing, and institutional SaaS architecture designed for seamless SaaS scaling.",
    highlights: ["Multi-Tenant SaaS Architecture", "SaaS Scaling & Security", "Next.js & TypeScript"],
    href: "/services/saas-development",
    icon: Layers,
  },
  {
    id: "saas-mvp",
    tag: "02 · Rapid Launch",
    title: "SaaS MVP Development",
    shortDesc: "From validated idea to production-ready SaaS product development.",
    fullDesc: "Accelerate your market entry with focused SaaS MVP development. We engineer clean, investor-ready SaaS application development that validates your business model in 4 to 6 weeks.",
    highlights: ["SaaS Product Development", "4–6 Week MVP Launch", "100% IP Ownership"],
    href: "/services/saas-development",
    icon: Rocket,
  },
  {
    id: "web-apps",
    tag: "03 · Custom Systems",
    title: "Web Applications & E-Commerce",
    shortDesc: "Custom web applications, client portals & WooCommerce integrations.",
    fullDesc: "We build custom web applications and streamline retail workflows with custom APIs, real-time ledgers, and bidirectional WooCommerce synchronization for growing businesses.",
    highlights: ["Custom Web Applications", "WooCommerce Integration", "REST & GraphQL APIs"],
    href: "/services/saas-api-development",
    icon: Globe,
  },
  {
    id: "vps-deploy",
    tag: "04 · Cloud Infrastructure",
    title: "VPS Server Deployment",
    shortDesc: "Deploy Next.js app to VPS, Node.js VPS deployment & Linux servers.",
    fullDesc: "Full-stack SaaS deployment and Linux server deployment. We deploy Next.js apps to VPS environments with Docker VPS deployment, Nginx reverse proxies, SSL automation, and CI/CD pipelines.",
    highlights: ["Deploy Next.js to VPS", "Node.js & Docker VPS", "Linux Server Deployment"],
    href: "/services/saas-platform-engineering",
    icon: Server,
  },
  {
    id: "code-audit-ai",
    tag: "05 · Optimization & AI",
    title: "Code Audit & AI Automation",
    shortDesc: "Technical code audit, performance tuning & practical AI automation.",
    fullDesc: "Comprehensive code audit to eliminate technical debt, optimize database indexes, and inject practical AI automation workflows directly into your core business loops.",
    highlights: ["Comprehensive Code Audit", "AI Automation Workflows", "Database Optimization"],
    href: "/services/maintenance-scaling",
    icon: ShieldCheck,
  },
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
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const activeSlide = serviceSlides[currentIndex];
  const IconComponent = activeSlide.icon;

  return (
    <div
      className="w-full max-w-6xl mx-auto mt-14 pt-8 border-t border-[#E2EAE6]"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Dazzcode Core Engineering Capabilities"
    >
      {/* Top bar with heading + indicators */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#059669]">
            Core Disciplines
          </span>
          <span className="text-xs font-mono text-[#52615B]">
            ({currentIndex + 1} of {serviceSlides.length})
          </span>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause auto-rotation" : "Resume auto-rotation"}
            className="p-1.5 rounded-lg text-[#52615B] hover:text-[#12201B] hover:bg-[#F1F5F3] transition-colors cursor-pointer"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={prevSlide}
            aria-label="Previous service"
            className="p-1.5 rounded-lg text-[#52615B] hover:text-[#12201B] hover:bg-[#F1F5F3] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next service"
            className="p-1.5 rounded-lg text-[#52615B] hover:text-[#12201B] hover:bg-[#F1F5F3] transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main interactive slide card */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="rounded-2xl border border-[#E2EAE6] bg-[#FFFFFF] p-6 sm:p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
      >
        <div className="grid md:grid-cols-12 gap-6 items-center">
          {/* Left info */}
          <div className="md:col-span-8 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#059669] bg-[#ECFDF5] border border-[#A7F3D0] px-2.5 py-0.5 rounded-md">
                {activeSlide.tag}
              </span>
              <span className="text-xs font-mono text-[#52615B]">Production Tier</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#12201B] tracking-tight flex items-center gap-2.5">
              <IconComponent className="w-6 h-6 text-[#059669]" />
              {activeSlide.title}
            </h3>

            <p className="text-sm sm:text-base text-[#52615B] leading-relaxed">
              {activeSlide.fullDesc}
            </p>

            {/* Highlights pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {activeSlide.highlights.map((item) => (
                <span
                  key={item}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6] text-[#12201B]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right action block */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end justify-center border-t md:border-t-0 md:border-l border-[#E2EAE6] pt-4 md:pt-0 md:pl-6">
            <p className="text-xs font-mono text-[#52615B] mb-3 text-left md:text-right">
              {activeSlide.shortDesc}
            </p>
            <Link
              href={activeSlide.href}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#12201B] text-white hover:bg-[#059669] text-xs font-bold uppercase tracking-wider transition-all shadow-sm group"
            >
              <span>Explore Capability</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Slide navigation tabs at bottom */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mt-6 pt-6 border-t border-[#E2EAE6]">
          {serviceSlides.map((slide, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                className={`text-left p-2.5 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#ECFDF5] border-[#10B981] text-[#059669] shadow-xs"
                    : "bg-[#F8FAF9] border-[#E2EAE6] text-[#52615B] hover:text-[#12201B] hover:bg-[#F1F5F3]"
                }`}
              >
                <div className="text-[10px] font-mono uppercase tracking-wider font-semibold opacity-75">
                  0{idx + 1}
                </div>
                <div className="text-xs font-bold truncate mt-0.5">
                  {slide.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
