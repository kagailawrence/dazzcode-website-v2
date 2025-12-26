import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { CheckCircle2, Code2, Database, Layout, GitBranch, Rocket } from "lucide-react";

export const metadata = {
    title: "How We Build | Dazzcode Engineering Process",
    description: "Our transparent, agile development process. From database design to deployment, see how we build scalable SaaS.",
};

export default function CaseStudiesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
                <div className="container px-4 md:px-6 relative z-10 text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6 animate-fade-in">
                        Engineering Process
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight animate-slide-up">
                        How We Build Software
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-10 animate-slide-up delay-100">
                        We don&apos;t just write code. We engineer systems. Our process is designed to eliminate risk and deliver high-performance SaaS products.
                    </p>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-24 bg-secondary/5">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">The Dazzcode Methodology</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Step 1 */}
                        <div className="relative group">
                            <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/20 -z-10 group-last:hidden"></div>
                            <div className="bg-card border border-white/10 p-6 rounded-2xl h-full hover:border-primary/40 transition-colors">
                                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl mb-4 shadow-[0_0_15px_-3px_var(--color-primary)]">1</div>
                                <h3 className="text-xl font-bold mb-2">Discovery & Architecture</h3>
                                <p className="text-muted-foreground text-sm">
                                    We don&apos;t start coding until we have a schema. We map out data models (`schema.prisma`) and user flows first.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative group">
                            <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/20 -z-10 group-last:hidden"></div>
                            <div className="bg-card border border-white/10 p-6 rounded-2xl h-full hover:border-primary/40 transition-colors">
                                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl mb-4  shadow-[0_0_15px_-3px_var(--color-primary)]">2</div>
                                <h3 className="text-xl font-bold mb-2">Sprint Development</h3>
                                <p className="text-muted-foreground text-sm">
                                    Bi-weekly sprints with clear deliverables. You get a staging link to see progress every week. No black boxes.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative group">
                            <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/20 -z-10 group-last:hidden"></div>
                            <div className="bg-card border border-white/10 p-6 rounded-2xl h-full hover:border-primary/40 transition-colors">
                                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl mb-4  shadow-[0_0_15px_-3px_var(--color-primary)]">3</div>
                                <h3 className="text-xl font-bold mb-2">Testing & QA</h3>
                                <p className="text-muted-foreground text-sm">
                                    Automated tests ensuring your checkout flows works. Load testing to ensure you can handle 10k users.
                                </p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="relative group">
                            <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/20 -z-10 group-last:hidden"></div>
                            <div className="bg-card border border-white/10 p-6 rounded-2xl h-full hover:border-primary/40 transition-colors">
                                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl mb-4  shadow-[0_0_15px_-3px_var(--color-primary)]">4</div>
                                <h3 className="text-xl font-bold mb-2">Deploy & Scale</h3>
                                <p className="text-muted-foreground text-sm">
                                    Production deployment to AWS or Vercel edge network. Setting up monitoring, logging, and backups.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-24">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">Recent Work</h2>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Project 1 */}
                        <Card className="glass-dark border-white/5 overflow-hidden group">
                            <div className="h-64 bg-gradient-to-br from-blue-900/50 to-slate-900/50 p-8 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                <Layout className="h-24 w-24 text-blue-400 opacity-50" />
                            </div>
                            <CardContent className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">DazzPOS Retail System</h3>
                                        <div className="flex gap-2">
                                            <span className="px-2 py-1 rounded bg-secondary text-xs font-mono">Next.js</span>
                                            <span className="px-2 py-1 rounded bg-secondary text-xs font-mono">Offline-First</span>
                                        </div>
                                    </div>
                                    <Link href="/products/dazzpos-system">
                                        <Button size="icon" variant="ghost"><Rocket className="h-5 w-5" /></Button>
                                    </Link>
                                </div>
                                <p className="text-muted-foreground mb-6">
                                    A complex offline-first Point of Sale system capable of syncing thousands of transactions once back online.
                                    Built with IndexedDB and Replicache.
                                </p>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 100% Offline Capability</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Sub-second transaction time</li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Project 2 */}
                        <Card className="glass-dark border-white/5 overflow-hidden group">
                            <div className="h-64 bg-gradient-to-br from-purple-900/50 to-slate-900/50 p-8 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                <Code2 className="h-24 w-24 text-purple-400 opacity-50" />
                            </div>
                            <CardContent className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">Algo-Trading Engine</h3>
                                        <div className="flex gap-2">
                                            <span className="px-2 py-1 rounded bg-secondary text-xs font-mono">Rust</span>
                                            <span className="px-2 py-1 rounded bg-secondary text-xs font-mono">WebSockets</span>
                                        </div>
                                    </div>
                                    <Link href="/products/trading-bot-systems">
                                        <Button size="icon" variant="ghost"><Rocket className="h-5 w-5" /></Button>
                                    </Link>
                                </div>
                                <p className="text-muted-foreground mb-6">
                                    High-frequency trading system handling thousands of signals per second.
                                    Featured a React frontend with 60FPS real-time chart updates.
                                </p>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Multi-exchange support</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Zero-downtime deployment</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Stack */}
            <section className="py-24 bg-black/20 border-t border-white/5">
                <div className="container px-4 md:px-6 text-center">
                    <h2 className="text-2xl font-bold mb-12">Our Core Stack</h2>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "AWS", "Vercel", "Docker", "Stripe", "Redis"].map(tech => (
                            <div key={tech} className="px-6 py-3 rounded-xl bg-secondary/10 border border-white/5 text-lg font-medium hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
