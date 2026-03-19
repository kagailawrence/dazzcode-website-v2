import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { products } from "@/lib/data";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata = {
    title: "SaaS Products | Dazzcode",
    description: "Explore our portfolio of scalable SaaS products and enterprise solutions. We engineer complex platforms focused on performance and revenue generation.",
};

export default function ProductsPage() {
    return (
        <div className="min-h-screen grid-bg pt-32 pb-20">
            <div className="container px-4 md:px-6">
                <div className="max-w-3xl mb-16 md:mb-24">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 md:mb-8 tracking-tighter text-gradient leading-[0.9]">Product <br className="hidden sm:block" /> Expertise</h1>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        We don&apos;t just write code; we engineer assets.
                        Our focus is on creating value-driven, institutional-grade software for high-growth teams.
                    </p>
                </div>

                {/* Product Categories */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-24 md:mb-32">
                    {products.map((product, index) => {
                        const Icon = product.icon;
                        return (
                            <Link key={index} href={`/products/${product.slug}`} className="group block">
                                <Card className="overflow-hidden flex flex-col h-full bg-surface">
                                    <div className="h-48 md:h-64 bg-surface-light flex items-center justify-center border-b border-white/5 relative overflow-hidden group-hover:bg-white/5 transition-colors">
                                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <Icon className="h-12 w-12 md:h-20 md:w-20 text-primary group-hover:scale-110 transition-transform duration-500 relative z-10" />
                                    </div>
                                    <CardContent className="p-8 md:p-10 flex-1 flex flex-col bg-surface/50 backdrop-blur-sm">
                                        <h3 className="text-xl md:text-2xl font-black mb-4 tracking-tight uppercase group-hover:text-primary transition-colors">{product.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed mb-8 md:mb-10 flex-1 text-sm md:text-base">
                                            {product.description}
                                        </p>
                                        <div className="flex items-center text-sm font-bold text-primary uppercase tracking-widest group">
                                            Transmission Logic <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    })}
                </div>

                {/* Featured Case / Highlight */}
                <div className="rounded-[2rem] md:rounded-[2.5rem] glass-card p-8 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center relative z-10 text-center lg:text-left">
                        <div className="flex-1 w-full text-left">
                            <div className="inline-block rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-[10px] font-bold text-primary mb-6 md:mb-8 uppercase tracking-widest">
                                Featured Protocol
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter text-white leading-[0.9] uppercase">E-Commerce <br className="hidden sm:block" /> Analytics Engine</h2>
                            <p className="text-muted-foreground mb-8 md:mb-10 text-lg md:text-xl leading-relaxed">
                                We engineered a high-performance analytics platform processing millions of events in real-time. SOC2-ready patterns with lock-free Redis queues.
                            </p>
                            <Link href="/contact" className="block sm:inline-block">
                                <Button size="lg" className="w-full sm:w-auto px-8 font-bold">
                                    Start Your Product <ArrowUpRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                        <div className="w-full lg:w-1/3 aspect-video lg:aspect-square rounded-[1.5rem] md:rounded-[2rem] bg-surface-light flex items-center justify-center border border-white/10 group overflow-hidden">
                            <div className="h-full w-full bg-gradient-to-tr from-primary/10 to-transparent flex items-center justify-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40 text-center px-10">
                                [ Institutional Architecture Map ]
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

