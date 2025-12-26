import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, Rocket, ShieldCheck } from "lucide-react";

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
            Build Scalable SaaS <br className="hidden md:block" /> Without The Chaos.
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up delay-100">
            We help founders and businesses turn complex ideas into reliable, high-performance software.
            From MVP to IPO, we handle the engineering && SAAS Marketing.
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
          <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">Powering Next-Gen Software With</p>
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
                <h3 className="text-xl font-bold mb-3">Clean Architecture</h3>
                <p className="text-muted-foreground">
                  We write code that is easy to read, test, and scale. No spaghetti code that requires a rewrite in 6 months.
                </p>
              </CardContent>
            </Card>
            <Card className="glass-dark hover:bg-secondary/20 transition-colors border-white/5">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-500 mb-6">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Rapid Delivery</h3>
                <p className="text-muted-foreground">
                  Our pre-built SaaS modules for Auth, Payments, and Admin panels let us focus on your unique features.
                </p>
              </CardContent>
            </Card>
            <Card className="glass-dark hover:bg-secondary/20 transition-colors border-white/5">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-lg bg-green-500/20 flex items-center justify-center text-green-500 mb-6">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Enterprise Security</h3>
                <p className="text-muted-foreground">
                  Bank-grade security practices, OWASP compliance, and data encryption standard in every project.
                </p>
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

            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Stop Guessing. Start Building.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 relative z-10">
              Schedule a free 15-minute technical consultation. We&apos;ll tell you if your idea is feasible and how to build it.
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
