"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Store,
  Code2,
  ShieldCheck,
  Search,
  FileCode2,
  Palette,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  LucideIcon
} from "lucide-react";

interface ServiceSlide {
  id: string;
  tag: string;
  title: string;
  price: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  ctaText: string;
  ctaAnchor: string;
  icon: LucideIcon;
}

const serviceSlides: ServiceSlide[] = [
  {
    id: "store-dev",
    tag: "01 · Complete Store Launch",
    title: "WooCommerce Store Development",
    price: "KSh 35,000",
    shortDesc: "Complete online shop setup with domain, hosting & M-Pesa.",
    fullDesc: "Professional WooCommerce store setup for Kenyan businesses ready to sell online. Includes WordPress configuration, mobile-friendly theme setup, product catalog, cart, checkout, M-Pesa integration, plus 1st year domain & hosting.",
    highlights: ["Domain & Hosting (Year 1)", "M-Pesa STK Push Checkout", "Mobile-First Storefront"],
    ctaText: "Build My Store",
    ctaAnchor: "#services",
    icon: Store,
  },
  {
    id: "custom-dev",
    tag: "02 · Advanced Engineering",
    title: "Custom WooCommerce Development",
    price: "KSh 45,000 – KSh 200,000",
    shortDesc: "Tailored checkouts, subscriptions, custom plugins & API integrations.",
    fullDesc: "For businesses whose requirements go beyond off-the-shelf templates. We engineer custom checkout flows, custom pricing logic, subscription and membership models, custom shipping calculators, and custom WooCommerce plugins.",
    highlights: ["Custom Checkout Rules", "Custom WooCommerce Plugins", "ERP & API Integrations"],
    ctaText: "Discuss Custom Requirements",
    ctaAnchor: "#services",
    icon: Code2,
  },
  {
    id: "maintenance",
    tag: "03 · Site Reliability & Security",
    title: "WooCommerce Basic Maintenance",
    price: "KSh 10,000 / year",
    shortDesc: "Core updates, security patches, live checks & troubleshooting.",
    fullDesc: "Keep your online store running reliably 24/7. We perform regular WordPress core updates, WooCommerce engine updates, plugin compatibility tests, security patching, uptime monitoring, and fix update-related glitches.",
    highlights: ["Automated Backups", "Plugin & Engine Updates", "Uptime & Security Monitoring"],
    ctaText: "Protect My Store",
    ctaAnchor: "#services",
    icon: ShieldCheck,
  },
  {
    id: "seo",
    tag: "04 · Organic Customer Traffic",
    title: "WooCommerce SEO for Kenyan Businesses",
    price: "KSh 20,000 / month",
    shortDesc: "Product page SEO, category ranking, technical audit & search visibility.",
    fullDesc: "Rank your products on Google where Kenyan customers are actively searching. We conduct Kenya-specific keyword research, optimize title tags and product meta descriptions, implement Product schema markup, and fix technical crawl bottlenecks.",
    highlights: ["Kenyan Keyword Strategy", "Product & Category SEO", "Google Search Console Tuning"],
    ctaText: "Start WooCommerce SEO",
    ctaAnchor: "#services",
    icon: Search,
  },
  {
    id: "code-audit",
    tag: "05 · Technical Deep-Dive",
    title: "WooCommerce Code Audit",
    price: "KSh 20,000 – KSh 50,000",
    shortDesc: "Performance debugging, plugin conflict resolution & technical debt cleanup.",
    fullDesc: "For existing stores that are slow, unstable, hard to update, or crashing during checkout. We analyze your theme files, custom PHP functions, database query bottlenecks, and plugin conflicts with an actionable remediation report.",
    highlights: ["Plugin Conflict Isolation", "Database Index Profiling", "Security & Speed Roadmap"],
    ctaText: "Request a Code Audit",
    ctaAnchor: "#services",
    icon: FileCode2,
  },
  {
    id: "templates",
    tag: "06 · Fast Turnaround",
    title: "WooCommerce Themes & Store Templates",
    price: "From KSh 10,000",
    shortDesc: "Ready-to-customize lightweight templates for rapid market entry.",
    fullDesc: "High-performance, pre-built store templates customized to your brand colors and catalog for businesses wanting a rapid, cost-effective launch without sacrificing mobile responsiveness or checkout speed.",
    highlights: ["Ready in 3–5 Days", "Mobile Responsive", "Clean Lightweight Code"],
    ctaText: "View Templates",
    ctaAnchor: "#services",
    icon: Palette,
  },
];

export default function WooCommerceServicesCarousel() {
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
    const interval = setInterval(nextSlide, 7000);
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
      className="mt-12 w-full max-w-5xl mx-auto rounded-3xl border border-[#E2EAE6] bg-[#FFFFFF] p-6 md:p-8 shadow-lg relative overflow-hidden group/carousel"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Dazzcode WooCommerce & Ecommerce Development Services"
    >
      {/* Background Accent Subtle Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#059669]/10 via-[#10B981]/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Header bar of carousel */}
      <div className="flex items-center justify-between border-b border-[#E2EAE6] pb-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#52615B]">
            Service Spectrum ({currentIndex + 1} / {serviceSlides.length})
          </span>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-lg border border-[#E2EAE6] text-[#52615B] hover:text-[#059669] hover:bg-[#F8FAF9] transition-colors cursor-pointer"
            aria-label={isPlaying ? "Pause automatic slide rotation" : "Start automatic slide rotation"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={prevSlide}
            className="p-2 rounded-lg border border-[#E2EAE6] text-[#52615B] hover:text-[#059669] hover:bg-[#F8FAF9] transition-colors cursor-pointer"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={nextSlide}
            className="p-2 rounded-lg border border-[#E2EAE6] text-[#52615B] hover:text-[#059669] hover:bg-[#F8FAF9] transition-colors cursor-pointer"
            aria-label="Next service"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Slide Body */}
      <div className="grid md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-8 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ECFDF5] border border-[#059669]/20 text-[#059669] text-xs font-mono font-bold tracking-wider uppercase">
              <IconComponent className="w-3.5 h-3.5" />
              <span>{currentSlide.tag}</span>
            </div>
            <span className="text-sm font-black text-[#059669] bg-[#F8FAF9] px-3 py-1 rounded-md border border-[#E2EAE6] font-mono">
              {currentSlide.price}
            </span>
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
          <a href={currentSlide.ctaAnchor} className="w-full sm:w-auto">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#059669] hover:bg-[#047857] text-white px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-[0_4px_14px_rgba(5,150,105,0.25)] hover:scale-[1.02] active:scale-95 cursor-pointer">
              <span>{currentSlide.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </a>
        </div>
      </div>

      {/* Indicator Bars */}
      <div className="flex items-center gap-2 mt-8 pt-4 border-t border-[#E2EAE6]">
        {serviceSlides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === idx
                ? "w-8 bg-[#059669]"
                : "w-2 bg-[#E2EAE6] hover:bg-[#52615B]"
            }`}
            aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
          />
        ))}
      </div>
    </div>
  );
}
