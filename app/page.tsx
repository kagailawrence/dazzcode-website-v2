"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, ChevronUp, Github, Users, Award } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { FAQ_SCHEMA, ENTITY_DESCRIPTION } from "@/lib/geo-content";
import ComparisonTable from "@/components/ComparisonTable";
import BookingFlow from "@/components/BookingFlow";
import { TypewriterTerminal } from "@/components/ui/TypewriterTerminal";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [showPricingDetails, setShowPricingDetails] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled * 100);

      if (scrolled > 0.4) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Dazzcode",
    "description": ENTITY_DESCRIPTION,
    "url": "https://dazzcode.com",
    "logo": "https://dazzcode.com/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "Kenya"
    },
    "priceRange": "$$$"
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <div
        className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%`, boxShadow: '0 0 10px var(--color-primary)' }}
      />

      <JsonLd schema={FAQ_SCHEMA} />
      <JsonLd schema={serviceSchema} />

      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${showStickyCta ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
          }`}
      >
        <Button
          size="lg"
          className="rounded-full shadow-[0_0_20px_-5px_var(--color-primary)] hover:scale-105 h-14 px-8 font-black uppercase tracking-widest"
          onClick={() => window.location.href = '#hero'}
        >
          Book a Call
        </Button>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden grid-bg min-h-[90vh] flex items-center">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="flex-1 text-left">
             
              
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-7xl font-black mb-8 md:mb-10 tracking-tighter leading-[0.8] text-gradient animate-reveal [animation-delay:200ms]">
               Secure Your Code <br /> Launch Your MVP <br /> Scale Your Future.
              </h1>
              
              <p className="text-lg md:text-2xl text-muted-foreground mb-10 md:mb-12 max-w-xl leading-relaxed animate-reveal [animation-delay:400ms]">
                We engineer institutional-grade software for high-growth teams. 
                Transparent, resilient, and investor-ready.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 animate-reveal [animation-delay:600ms]">
                <Link href="#pricing" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full h-14 md:h-16 px-10 md:px-12 text-base md:text-lg font-black uppercase tracking-widest">
                    Execute Protocol
                  </Button>
                </Link>
                <Link href="/services" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full h-14 md:h-16 px-8 md:px-10 text-base md:text-lg font-black uppercase tracking-widest border-white/10 hover:bg-white/5">
                    View Logic
                  </Button>
                </Link>
              </div>

              <div className="mt-12 md:mt-20 flex flex-wrap items-center gap-x-12 gap-y-8 animate-reveal [animation-delay:800ms]">
                <div>
                  <div className="text-3xl md:text-4xl font-black text-white tracking-tighter">40+</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold opacity-60">Deployments</div>
                </div>
                <div className="hidden sm:block w-px h-10 bg-white/10" />
                <div>
                  <div className="text-3xl md:text-4xl font-black text-white tracking-tighter">99.9%</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold opacity-60">Uptime Avg</div>
                </div>
                <div className="hidden sm:block w-px h-10 bg-white/10" />
                <div>
                  <div className="text-3xl md:text-4xl font-black text-white tracking-tighter">$12M+</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold opacity-60">Value Generated</div>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full max-w-2xl animate-reveal [animation-delay:1000ms]">
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                <Card className="glass-card rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 border-white/10 shadow-3xl transform hover:-translate-y-2 transition-all duration-700">
                  <TypewriterTerminal />
                  
                  <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-between border-t border-white/5 pt-6 md:pt-8 gap-6 sm:gap-0">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-8 w-8 md:h-10 md:w-10 rounded-full border-2 border-surface bg-surface-light flex items-center justify-center text-[8px] md:text-[10px] font-black text-primary ring-2 ring-transparent group-hover:ring-primary/20 transition-all">
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                      <div className="h-8 md:h-10 px-2 md:px-3 rounded-full border-2 border-surface bg-primary flex items-center justify-center text-[8px] md:text-[10px] font-black text-black ring-2 ring-transparent">
                        +14 TEAMS
                      </div>
                    </div>
                    <Button size="sm" variant="secondary" className="w-full sm:w-auto text-[10px] font-black tracking-[0.2em] uppercase h-10 px-6">
                      Launch Staging
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 border-y border-white/5 bg-white/[0.02] overflow-hidden">
        <div className="container px-4 text-center">
          <p className="text-[10px] font-bold text-muted-foreground mb-10 uppercase tracking-[0.3em]">Institutional-grade partners & alumni</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-3 font-black text-xl tracking-tighter"><Github className="h-6 w-6" /> TECHSTARS</div>
            <div className="flex items-center gap-3 font-black text-xl tracking-tighter"><Users className="h-6 w-6" /> YC FOUNDERS</div>
            <div className="flex items-center gap-3 font-black text-xl tracking-tighter"><Award className="h-6 w-6" /> SERIES A</div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-32 bg-background relative">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-gradient">Founders don't <br /> regret hiring us.</h2>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl">
              They regret the six months and $50k they spent on internal hiring or "low-code" agencies before finding a real engineering partner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-3xl glass-card relative group">
              <div className="flex mb-8 text-primary/40 group-hover:text-primary transition-colors">
                {"★★★★★".split("").map((s, i) => <span key={i} className="text-xl">{s}</span>)}
              </div>
              <p className="text-xl text-foreground/90 font-medium mb-10 leading-relaxed italic">
                "They took our legacy spaghetti code and turned it into a scalable platform. The audit was the best investment we made this year. Churn velocity dropped 30%."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-surface-light border border-white/10 flex items-center justify-center font-bold text-primary">JF</div>
                <div>
                  <p className="font-bold text-white tracking-tight">James F.</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">CTO, FinTech Startup</p>
                </div>
              </div>
            </div>

            <div className="p-10 rounded-3xl glass-card relative group">
              <div className="flex mb-8 text-primary/40 group-hover:text-primary transition-colors">
                {"★★★★★".split("").map((s, i) => <span key={i} className="text-xl">{s}</span>)}
              </div>
              <p className="text-xl text-foreground/90 font-medium mb-10 leading-relaxed italic">
                "Launched our MVP in 5 weeks. The architecture is so clean that our internal team took over with zero friction. We secured Seed funding 2 months later."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-surface-light border border-white/10 flex items-center justify-center font-bold text-primary">AM</div>
                <div>
                  <p className="font-bold text-white tracking-tight">Ali M.</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">Founder, AI SaaS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="how-we-build" className="py-32 bg-surface">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <span className="text-primary font-mono font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">The Protocol</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-gradient">We don't write <br /> code. We engineer <br /> assets.</h2>
              <p className="text-muted-foreground text-xl leading-relaxed">
                Most agencies build to finish. We build to scale. Our process is designed to survive technical due diligence and high-growth stress.
              </p>
            </div>

            <div className="space-y-12 border-l border-white/5 pl-12 relative">
              <div className="relative group">
                <div className="absolute -left-[53px] top-1.5 h-2 w-2 rounded-full bg-primary group-hover:scale-150 transition-transform shadow-[0_0_10px_var(--accent)]" />
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">1. Scope Mapping</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We strip away vanity features to define the "Core Engine" — the exact workflows necessary to convince early adopters to pay.
                </p>
              </div>
              <div className="relative group">
                <div className="absolute -left-[53px] top-1.5 h-2 w-2 rounded-full bg-white/20 group-hover:bg-primary transition-colors shadow-[0_0_10px_transparent] group-hover:shadow-[0_0_10px_var(--accent)]" />
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">2. Rapid Alpha</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Direct T3 Stack implementation. You get access to a live staging URL on day 3. Transparency is mandatory; you see every commit.
                </p>
              </div>
              <div className="relative group">
                <div className="absolute -left-[53px] top-1.5 h-2 w-2 rounded-full bg-white/20 group-hover:bg-primary transition-colors shadow-[0_0_10px_transparent] group-hover:shadow-[0_0_10px_var(--accent)]" />
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">3. Institutional Handoff</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Zero vendor lock-in. You receive full IP, inline documentation, and SOC2-ready databases ready for internal team handover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-background relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter text-gradient">Execution Packages</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Every week without institutional-grade architecture is a week of compounded technical debt. <br /> <span className="text-primary font-bold">Pick your speed.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            <Card className="flex flex-col group hover:translate-y-[-4px] transition-transform duration-500">
              <CardContent className="p-8 md:p-10 flex-1 flex flex-col">
                <div className="mb-8 border-b border-white/5 pb-8">
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight uppercase">SaaS Audit</h3>
                  <div className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">$500<span className="text-lg text-muted-foreground font-medium">+</span></div>
                  <p className="text-muted-foreground text-sm leading-relaxed">Stop the leak. We identify critical bottlenecks and security risks in your existing stack.</p>
                </div>
                <div className="flex-1 space-y-4 mb-10">
                  <div className="flex items-start gap-3"><Check className="h-4 w-4 text-primary shrink-0" /><span className="text-sm">Full Security Scan</span></div>
                  <div className="flex items-start gap-3"><Check className="h-4 w-4 text-primary shrink-0" /><span className="text-sm">Database Optimization</span></div>
                </div>
                <Button variant="outline" className="w-full" onClick={() => window.location.href = '#hero'}>Fix My Code</Button>
              </CardContent>
            </Card>

            <div className="relative group md:scale-105 z-10">
              <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/30 to-transparent rounded-[2rem] blur opacity-30 group-hover:opacity-60 transition-opacity" />
              <Card className="h-full border-primary/20 bg-surface-light relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                <CardContent className="p-8 md:p-10 flex-1 flex flex-col relative z-20">
                  <div className="mb-10">
                    <div className="inline-block rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-[10px] font-bold text-primary mb-6 uppercase tracking-widest">
                       Most popular selection
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">SaaS MVP Launch</h3>
                    <div className="text-5xl md:text-6xl font-black text-primary tracking-tighter mb-6">$2k<span className="text-lg text-muted-foreground font-medium"> - </span>$10k</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">The "Linear" approach. High-speed delivery of a premium, scalable product.</p>
                  </div>

                  <div className="flex-1 space-y-4 mb-12">
                    <div className="flex items-start gap-3"><Check className="h-5 w-5 text-primary shrink-0" /><span className="text-white text-sm font-semibold">T3 Stack Architecture</span></div>
                    <div className="flex items-start gap-3"><Check className="h-5 w-5 text-primary shrink-0" /><span className="text-white text-sm font-semibold">Custom Design System</span></div>
                    <div className="flex items-start gap-3"><Check className="h-5 w-5 text-primary shrink-0" /><span className="text-white text-sm font-semibold">4 Week Sprints</span></div>

                    <button
                      onClick={() => setShowPricingDetails(!showPricingDetails)}
                      className="flex items-center text-[10px] text-primary font-black uppercase tracking-[0.2em] mt-8 hover:opacity-80 transition-opacity"
                    >
                      {showPricingDetails ? <><ChevronUp className="mr-2 h-4 w-4" /> REVEAL LESS</> : <><ChevronDown className="mr-2 h-4 w-4" /> FULL PROTOCOL</>}
                    </button>

                    {showPricingDetails && (
                      <div className="pt-6 space-y-4 animate-reveal border-t border-white/5">
                        <div className="flex items-start gap-3"><Check className="h-4 w-4 text-muted-foreground/60 shrink-0" /><span className="text-muted-foreground text-sm">Auth & Role Workflows</span></div>
                        <div className="flex items-start gap-3"><Check className="h-4 w-4 text-muted-foreground/60 shrink-0" /><span className="text-muted-foreground text-sm">Managed CI/CD Pipeline</span></div>
                        <div className="flex items-start gap-3"><Check className="h-4 w-4 text-muted-foreground/60 shrink-0" /><span className="text-muted-foreground text-sm">SOC2-ready patterns</span></div>
                      </div>
                    )}
                  </div>

                  <Button size="lg" className="w-full" onClick={() => window.location.href = '#hero'}>Launch Product</Button>
                </CardContent>
              </Card>
            </div>

            <Card className="flex flex-col group hover:translate-y-[-4px] transition-transform duration-500">
              <CardContent className="p-8 md:p-10 flex-1 flex flex-col">
                <div className="mb-8 border-b border-white/5 pb-8">
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight uppercase">Institutional Scale</h3>
                  <div className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">$15k<span className="text-lg text-muted-foreground font-medium">+</span></div>
                  <p className="text-muted-foreground text-sm leading-relaxed">For funded startups needing rapid scale, AI integration, and complex data modeling.</p>
                </div>
                <div className="flex-1 space-y-4 mb-10">
                  <div className="flex items-start gap-3"><Check className="h-4 w-4 text-primary shrink-0" /><span className="text-sm">Advanced AI Tooling</span></div>
                  <div className="flex items-start gap-3"><Check className="h-4 w-4 text-primary shrink-0" /><span className="text-sm">Multitenant Core</span></div>
                </div>
                <Button variant="outline" className="w-full" onClick={() => window.location.href = '#hero'}>Scale Platform</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Booking Flow */}
      <section id="book-call" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
        <div className="container px-4 md:px-6 relative z-10 text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's talk execution.</h2>
          <p className="text-xl text-muted-foreground mb-4">
            Pick a time below. <strong className="text-white">14 founders</strong> booked calls this week.
          </p>
        </div>

        <div className="container px-4">
          <BookingFlow />
        </div>
      </section>
    </div>
  );
}
