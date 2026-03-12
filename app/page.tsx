"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, ChevronDown, ChevronUp, Github, Users, Award } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { FAQ_SCHEMA, ENTITY_DESCRIPTION } from "@/lib/geo-content";
import ComparisonTable from "@/components/ComparisonTable";
import BookingFlow from "@/components/BookingFlow";
import SaasQuiz from "@/components/SaasQuiz";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [showPricingDetails, setShowPricingDetails] = useState(false);

  // UX: Make Progress Visible + Act of Repetition (Sticky CTA)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled * 100);

      // Show sticky CTA after 40% scroll depth
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
      {/* UX: Make Progress Visible - 1px Cyan Top Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%`, boxShadow: '0 0 10px var(--color-primary)' }}
      />

      <JsonLd schema={FAQ_SCHEMA} />
      <JsonLd schema={serviceSchema} />

      {/* UX: Sticky Book A Call Button (Automate the Act of Repetition) */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${showStickyCta ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
          }`}
      >
        <Button
          size="lg"
          className="rounded-full shadow-[0_0_20px_-5px_var(--color-primary)] hover:scale-105 h-14 px-8"
          onClick={() => window.location.href = '#book-call'}
        >
          Book a Call
        </Button>
      </div>

      {/* Hero Section (Dual Process: System 1 Emotional Hit) */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="orb orb-1 opacity-50"></div>
          <div className="orb orb-2 opacity-50"></div>
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[100px]"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10 text-center">
          {/* UX: Create Urgency without being manipulative */}


          {/* UX: Hook Trigger. Specific Pain + Bold Benefit. */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent">
            Stop burning runway <br className="hidden md:block" /> on bad code.
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            We build institutional-grade SaaS architecture for strategic founders.
            Delivered in weeks, not months.
          </p>

          {/* UX: ONE glowing CTA. Top of funnel: Low commitment. */}
          <div className="flex justify-center mb-16">
            <Button
              onClick={() => window.location.href = '#how-we-build'}
              size="lg"
              className="h-16 px-10 text-lg w-full sm:w-auto shadow-[0_0_40px_-5px_var(--color-primary)] hover:shadow-[0_0_60px_-5px_var(--color-primary)] transition-all duration-300"
            >
              See how we build <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* UX: System 1 Social Proof - Visual Numbers Hit < 3s */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8 border-t border-white/5">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-white mb-1">12</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Products Launched</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-white mb-1">$2M+</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Client Revenue</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-white mb-1">5 Wks</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Avg. Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* UX: Deploy Strong Authority (As seen on / Trusted by) */}
      <section className="py-12 border-y border-white/5 bg-black/20 overflow-hidden">
        <div className="container px-4 text-center">
          <p className="text-xs font-bold text-muted-foreground mb-8 uppercase tracking-widest">Built to survive technical due diligence</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
            <div className="flex items-center gap-2 font-bold text-xl"><Github className="h-6 w-6" /> Techstars Alumni</div>
            <div className="flex items-center gap-2 font-bold text-xl"><Users className="h-6 w-6" /> YC Founders</div>
            <div className="flex items-center gap-2 font-bold text-xl"><Award className="h-6 w-6" /> Series A Verified</div>
          </div>
        </div>
      </section>

      {/* UX: Social Proof HIGHER in the page before pricing */}
      <section className="py-24 bg-background border-b border-white/5 relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/5 to-transparent pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Founders don't regret hiring us.</h2>
            <p className="text-muted-foreground text-xl">
              They regret the $20k they spent on a cheap agency before finding us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-10 rounded-3xl bg-secondary/10 border border-white/5 hover:border-primary/20 transition-colors">
              <div className="flex mb-6 text-primary">
                {"★★★★★".split("").map((s, i) => <span key={i} className="text-2xl">{s}</span>)}
              </div>
              <p className="text-lg text-foreground/90 italic mb-8 leading-relaxed">
                "They took our legacy spaghetti code and turned it into a scalable platform that actually holds up during peak traffic. The audit was the best investment we made this year. Churn velocity dropped 30%."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500"></div>
                <div>
                  <p className="font-bold text-white">James F.</p>
                  <p className="text-sm text-muted-foreground">CTO, FinTech Startup</p>
                </div>
              </div>
            </div>

            <div className="p-10 rounded-3xl bg-secondary/10 border border-white/5 hover:border-primary/20 transition-colors">
              <div className="flex mb-6 text-primary">
                {"★★★★★".split("").map((s, i) => <span key={i} className="text-2xl">{s}</span>)}
              </div>
              <p className="text-lg text-foreground/90 italic mb-8 leading-relaxed">
                "Launched our MVP in 5 weeks. The architecture is so clean that our internal team took over with zero friction. We secured Seed funding 2 months later because the tech passed D.D. perfectly."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
                <div>
                  <p className="font-bold text-white">Ali M.</p>
                  <p className="text-sm text-muted-foreground">Founder, AI SaaS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UX: System 2 - Detailed "How We Build" Section */}
      <section id="how-we-build" className="py-24 bg-black/40">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Process</span>
            <h2 className="text-3xl md:text-5xl font-bold">We don't just write code. <br /> We engineer assets.</h2>
          </div>

          <div className="space-y-12 border-l border-white/10 pl-8 ml-4 md:ml-0 relative">
            <div className="relative">
              <div className="absolute -left-[41px] top-1 h-6 w-6 rounded-full bg-primary/20 border-2 border-primary"></div>
              <h3 className="text-2xl font-bold text-white mb-2">1. Scope Mapping</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Before writing a single line of code, we strip away vanity features. We define the exact workflows necessary to convince early adopters to enter their credit card details.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-1 h-6 w-6 rounded-full bg-primary/20 border-2 border-primary"></div>
              <h3 className="text-2xl font-bold text-white mb-2">2. Lean Production</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We develop in 1-week sprints using the T3 Stack (Next.js, TypeScript). You get access to a live staging URL on day 3. Transparency is mandatory; you see what we build as we build it.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-1 h-6 w-6 rounded-full bg-primary/20 border-2 border-primary"></div>
              <h3 className="text-2xl font-bold text-white mb-2">3. Institutional Handoff</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We design architecture to be handed over. You receive 100% of the IP, full inline documentation, and SOC2-ready databases, ensuring no vendor lock-in when you hire internally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UX: Gamification / Investment Loop (Nir Eyal Hook Model) */}
      <section className="py-24 border-y border-white/5 bg-background relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Are you ready to build?</h2>
            <p className="text-xl text-muted-foreground mb-4">Find out exactly what your next step should be.</p>
          </div>
          <SaasQuiz />
        </div>
      </section>

      {/* UX: Pricing / Loss Aversion */}
      <section className="py-24 bg-black/40">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing.</h2>
            {/* UX: Leverage Loss Aversion */}
            <p className="text-xl text-amber-500/90 font-medium">
              Every week without a proper architecture costs you in technical debt and delayed funding.
            </p>
          </div>

          {/* UX: Avoid Choice Overload - Visually suppress outer tiers, prioritize Middle */}
          <div className="grid md:grid-cols-3 gap-8 max-w-[75rem] mx-auto">
            {/* Audit Tier */}
            <Card className="glass-dark border-white/5 opacity-80 hover:opacity-100 flex flex-col">
              <CardContent className="p-8 flex-1 flex flex-col">
                <div className="mb-6 border-b border-white/5 pb-6">
                  <h3 className="text-xl font-bold text-white mb-2">SaaS Audit</h3>
                  <div className="text-3xl font-bold text-white">$800+</div>
                  <p className="text-muted-foreground text-sm mt-3">Founders who delay fixing their codebase spend 3x more on engineering 6 months later.</p>
                </div>
                <div className="flex-1"></div>
                <Button variant="outline" className="w-full mt-6" onClick={() => window.location.href = '#book-call'}>Fix Codebase</Button>
              </CardContent>
            </Card>

            {/* Default/Cheating Action - Highlight Middle Tier */}
            <Card className="glass border-primary/20 shadow-[-10px_0_50px_-15px_var(--color-primary)] flex flex-col scale-105 z-10 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-primary"></div>
              <CardContent className="p-10 flex-1 flex flex-col relative z-20">
                <div className="mb-6 mb-8">
                  <div className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary mb-4">
                    Most Popular Choice
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">SaaS MVP Launch</h3>
                  <div className="text-5xl font-bold text-white mb-4">$3k - $6k</div>
                  <p className="text-muted-foreground text-sm">Best for early-stage founders launching an MVP to test the market quickly and reliably.</p>
                </div>

                {/* UX: Hide granular feature lists behind a toggle to clear distractions */}
                <div className="flex-1 space-y-4 mb-8">
                  <div className="flex items-start gap-3"><Check className="h-5 w-5 text-primary shrink-0" /><span className="text-white text-sm">Full architecture design</span></div>
                  <div className="flex items-start gap-3"><Check className="h-5 w-5 text-primary shrink-0" /><span className="text-white text-sm">Frontend + Backend setup</span></div>
                  <div className="flex items-start gap-3"><Check className="h-5 w-5 text-primary shrink-0" /><span className="text-white text-sm">4-6 weeks delivery</span></div>

                  <button
                    onClick={() => setShowPricingDetails(!showPricingDetails)}
                    className="flex items-center text-xs text-primary font-bold uppercase tracking-wider mt-4"
                  >
                    {showPricingDetails ? <><ChevronUp className="mr-1 h-4 w-4" /> Hide Scope</> : <><ChevronDown className="mr-1 h-4 w-4" /> View Full Scope</>}
                  </button>

                  {showPricingDetails && (
                    <div className="pt-2 space-y-3 animate-fade-in border-t border-white/5">
                      <div className="flex items-start gap-3"><Check className="h-4 w-4 text-muted-foreground shrink-0" /><span className="text-muted-foreground text-sm">Auth & Role workflows</span></div>
                      <div className="flex items-start gap-3"><Check className="h-4 w-4 text-muted-foreground shrink-0" /><span className="text-muted-foreground text-sm">Database indexing</span></div>
                      <div className="flex items-start gap-3"><Check className="h-4 w-4 text-muted-foreground shrink-0" /><span className="text-muted-foreground text-sm">Deployment & CI/CD</span></div>
                    </div>
                  )}
                </div>

                <Button className="w-full h-12 text-lg" onClick={() => window.location.href = '#book-call'}>Launch MVP</Button>
              </CardContent>
            </Card>

            {/* Growth Tier */}
            <Card className="glass-dark border-white/5 opacity-80 hover:opacity-100 flex flex-col">
              <CardContent className="p-8 flex-1 flex flex-col">
                <div className="mb-6 border-b border-white/5 pb-6">
                  <h3 className="text-xl font-bold text-white mb-2">SaaS Growth</h3>
                  <div className="text-3xl font-bold text-white">$8k+</div>
                  <p className="text-muted-foreground text-sm mt-3">For funded SaaS needing AI integration and high-performance scale.</p>
                </div>
                <div className="flex-1"></div>
                <Button variant="outline" className="w-full mt-6" onClick={() => window.location.href = '#book-call'}>Scale Product</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <ComparisonTable />

      {/* UX: High Commitment Action / Booking Flow */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
        <div className="container px-4 md:px-6 relative z-10 text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's talk execution.</h2>
          {/* Elicit Implementation Intentions & Add Social Proof */}
          <p className="text-xl text-muted-foreground mb-4">
            Pick a time below. <strong className="text-white">14 founders</strong> booked calls this week.
          </p>
        </div>

        <div className="container px-4">
          <BookingFlow />
        </div>
      </section>

      {/* Remove previous FAQ as it distracts. Dual Process logic handled by process + tables above. */}
    </div>
  );
}
