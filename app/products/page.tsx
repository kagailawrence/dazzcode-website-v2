"use client";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import Link from "next/link";
import { products } from "@/lib/data";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

export default function ProductsPage() {
    return (
        <div className="min-h-screen grid-bg pt-32 pb-20 overflow-x-hidden">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">
                    <motion.div 
                        className="lg:w-1/3 lg:sticky lg:top-32 h-fit"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-[10px] font-bold text-primary mb-6 uppercase tracking-[0.2em]">
                            Product Ecosystem
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 md:mb-8 tracking-tighter text-gradient leading-[0.9]">
                            Engineering <br /> Assets.
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We don&apos;t just write code; we architect equity.
                            Our focus is on creating high-performance, institutional-grade software that scales as fast as your ambition.
                        </p>
                    </motion.div>

                    <div className="lg:w-2/3">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-6 gap-6">
                            {products.map((product, index) => {
                                const Icon = product.icon;
                                // Simple logic for Bento spans
                                const isLarge = index === 0 || index === 3;
                                const spanClass = isLarge ? "xl:col-span-4" : "xl:col-span-2";
                                
                                return (
                                    <MotionLink 
                                        key={index} 
                                        href={`/products/${product.slug}`} 
                                        className={spanClass}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <SpotlightCard className="h-full flex flex-col group">
                                            <div className="h-48 md:h-64 bg-surface-light flex items-center justify-center border-b border-white/5 relative overflow-hidden">
                                                {/* Decorative background elements */}
                                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 blur-[60px] rounded-full group-hover:bg-primary/10 transition-colors" />
                                                
                                                <div className="relative z-10 p-12 rounded-full bg-white/5 border border-white/5 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500">
                                                    <Icon className="h-10 w-10 md:h-16 md:w-16 text-primary" />
                                                </div>
                                            </div>
                                            <CardContent className="p-8 md:p-10 flex-1 flex flex-col">
                                                <h3 className="text-xl md:text-2xl font-black mb-4 tracking-tight uppercase group-hover:text-primary transition-colors">
                                                    {product.title}
                                                </h3>
                                                <p className="text-muted-foreground leading-relaxed mb-8 md:mb-10 flex-1 text-sm md:text-base">
                                                    {product.description}
                                                </p>
                                                <div className="flex items-center text-[10px] font-black text-primary uppercase tracking-[0.2em] group">
                                                    REVEAL PROTOCOL <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                                                </div>
                                            </CardContent>
                                        </SpotlightCard>
                                    </MotionLink>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Featured Case / Highlight */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="rounded-[2.5rem] glass-card p-8 md:p-20 relative overflow-hidden"
                >
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
                                <Button size="lg" className="w-full sm:w-auto px-10 font-black uppercase tracking-widest h-14">
                                    Start Your Product <ArrowUpRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                        <div className="w-full lg:w-1/3 aspect-video lg:aspect-square rounded-[2.5rem] bg-surface-light flex items-center justify-center border border-white/10 group overflow-hidden relative">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                            <div className="relative z-10 flex flex-col items-center gap-4">
                                <div className="h-20 w-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center animate-pulse">
                                    <div className="h-10 w-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                                </div>
                                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/60">
                                    Compiling Assets...
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}


