import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Check, CheckCircle2, Code2, Rocket, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[100px]"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8 animate-fade-in">
            Accepting New Projects for Q3
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent animate-slide-up">
            De-Risk Your Technical Execution. <br className="hidden md:block" /> Accelerate Time-to-Value.
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up delay-100">
            Fractional Engineering Leadership & Venture Scalability.
            Transform your roadmap into a deployed asset without the overhead of a full-time executive team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-200">
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto shadow-[0_0_30px_-5px_var(--color-primary)] hover:shadow-[0_0_50px_-5px_var(--color-primary)] transition-all duration-300">
                Start Your Build
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg w-full sm:w-auto glass hover:bg-white/5">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof / Tech Stack */}
      <section className="py-12 border-y border-white/5 bg-black/20">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">Built on Institutional-Grade Standards</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Tech logos placeholders */}
            <span className="text-xl font-bold flex items-center gap-2"><div className="h-3 w-3 bg-white rounded-full"></div> Next.js</span>
            <span className="text-xl font-bold flex items-center gap-2"><div className="h-3 w-3 bg-blue-400 rounded-full"></div> TypeScript</span>
            <span className="text-xl font-bold flex items-center gap-2"><div className="h-3 w-3 bg-cyan-400 rounded-full"></div> Tailwind</span>
            <span className="text-xl font-bold flex items-center gap-2"><div className="h-3 w-3 bg-green-400 rounded-full"></div> Node.js</span>
            <span className="text-xl font-bold flex items-center gap-2"><div className="h-3 w-3 bg-green-400 rounded-full"></div> Go</span>
            <span className="text-xl font-bold flex items-center gap-2"><div className="h-3 w-3 bg-green-400 rounded-full"></div> Rust</span>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-secondary/5">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-dark hover:bg-secondary/20 transition-colors border-white/5">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500 mb-6">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Asset Value Preservation</h3>
                <p className="text-muted-foreground">
                  We engineer software as a long-term asset. Modular, documented, and built to avoid the compound interest of technical debt.
                </p>
              </CardContent>
            </Card>
            <Card className="glass-dark hover:bg-secondary/20 transition-colors border-white/5">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-500 mb-6">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Strategic Velocity</h3>
                <p className="text-muted-foreground">
                  Speed is a competitive moat. We deploy modular architecture to shorten feedback loops and accelerate market validation.
                </p>
              </CardContent>
            </Card>
            <Card className="glass-dark hover:bg-secondary/20 transition-colors border-white/5">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-lg bg-green-500/20 flex items-center justify-center text-green-500 mb-6">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Enterprise Readiness</h3>
                <p className="text-muted-foreground">
                  Unlock upmarket revenue. SOC-2 ready architecture and compliance-first engineering to satisfy enterprise procurement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-black/40">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the right engagement model for your stage. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Foundation Tier */}
            <Card className="glass-dark hover:bg-secondary/20 transition-all duration-300 border-white/5 flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-24 bg-blue-500/10 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 group-hover:bg-blue-500/20 transition-colors"></div>
              <CardContent className="p-8 flex-1 flex flex-col relative z-10">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">Foundation</h3>
                  <p className="text-sm font-medium text-blue-400 mb-4 uppercase tracking-widest">Validate Without Regret</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">$3k - $6k</span>
                  </div>
                  <p className="text-muted-foreground mt-4 text-sm">
                    Best for early-stage founders launching an MVP to test the market.
                  </p>
                </div>

                <div className="flex-1 space-y-4 mb-8">
                  {[
                    "SaaS architecture design",
                    "MVP scope definition",
                    "Backend + frontend setup",
                    "Auth, roles, core workflows",
                    "Deployment & basic monitoring",
                    "4–6 weeks timeline"
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-blue-500" />
                      </div>
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="w-full">
                  <Button className="w-full bg-secondary/50 hover:bg-blue-600/20 hover:text-blue-400 border border-white/5" variant="outline">
                    Start Validation
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Growth Tier */}
            <Card className="glass-dark bg-secondary/10 hover:bg-secondary/30 transition-all duration-300 border-primary/20 flex flex-col relative overflow-hidden group transform md:-translate-y-4 shadow-2xl shadow-primary/5">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
              <div className="absolute top-0 right-0 p-24 bg-primary/10 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 group-hover:bg-primary/20 transition-colors"></div>

              <CardContent className="p-8 flex-1 flex flex-col relative z-10">
                <div className="mb-8">
                  <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Growth</h3>
                  <p className="text-sm font-medium text-primary mb-4 uppercase tracking-widest">Scale Without Breaking</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">$8k - $15k</span>
                  </div>
                  <p className="text-muted-foreground mt-4 text-sm">
                    For funded or revenue-generating SaaS needing scale and performance.
                  </p>
                </div>

                <div className="flex-1 space-y-4 mb-8">
                  {[
                    "Everything in Foundation",
                    "Scalable backend architecture",
                    "Performance optimization",
                    "Database design & indexing",
                    "Security hardening",
                    "CI/CD pipelines",
                    "Analytics & observability",
                    "8–12 weeks timeline"
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground/90">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="w-full">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25">
                    Scale Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Partner Tier */}
            <Card className="glass-dark hover:bg-secondary/20 transition-all duration-300 border-white/5 flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-24 bg-purple-500/10 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 group-hover:bg-purple-500/20 transition-colors"></div>
              <CardContent className="p-8 flex-1 flex flex-col relative z-10">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">Partner</h3>
                  <p className="text-sm font-medium text-purple-400 mb-4 uppercase tracking-widest">Replace an Engineering Team</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">$2.5k - $6k</span>
                    <span className="text-muted-foreground text-sm">/mo</span>
                  </div>
                  <p className="text-muted-foreground mt-4 text-sm">
                    Dedicated technical execution for serious founders and enterprises.
                  </p>
                </div>

                <div className="flex-1 space-y-4 mb-8">
                  {[
                    "Owner-level technical decisions",
                    "Dedicated SaaS team",
                    "Roadmap planning",
                    "Continuous delivery",
                    "Scaling & optimization",
                    "Priority support",
                    "Monthly retainer"
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-purple-500" />
                      </div>
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="w-full">
                  <Button className="w-full bg-secondary/50 hover:bg-purple-600/20 hover:text-purple-400 border border-white/5" variant="outline">
                    Partner With Us
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="rounded-3xl bg-gradient-to-r from-secondary to-background border border-white/10 p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-primary/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Secure Your Technical Partner.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 relative z-10">
              Eliminate execution risk. Schedule a strategic consultation to validate your technical roadmap.
            </p>
            <Link href="/contact" className="relative z-10">
              <Button size="lg" className="h-14 px-10 text-lg">
                Book Your Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
