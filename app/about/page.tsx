"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen grid-bg pt-32 pb-20 overflow-x-hidden">
            <div className="container px-4 md:px-6 max-w-5xl mx-auto">
                <motion.div 
                    className="text-center mb-16 md:mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-[10px] font-bold text-primary mb-6 uppercase tracking-[0.2em]">
                        Engineering Ethos
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-gradient leading-[0.9]">The Collective</h1>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        We are a high-stakes engineering laboratory dedicated to building institutional-grade software.
                        We believe in terminal-grade logic, radical transparency, and absolute IP ownership.
                    </p>
                </motion.div>
                
                <MotionLink 
                    href="/contact"
                    className="block"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <SpotlightCard className="p-8 md:p-24 text-center relative overflow-hidden mb-16 md:mb-24">
                        <div className="absolute inset-0 bg-primary/5 blur-[120px] pointer-events-none" />
                        <div className="inline-block rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-[10px] font-bold text-primary mb-6 uppercase tracking-widest">
                            The Mission Protocol
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase text-white leading-[0.9]">Institutional <br /> Bridge.</h2>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            To bridge the gap between non-technical founders and world-class software engineering protocols. 
                            We don't just ship features; we deploy resilient software assets designed to pass rigorous technical due diligence.
                        </p>
                    </SpotlightCard>
                </MotionLink>

                <div className="text-center">
                    <Link href="/contact" className="block sm:inline-block w-full sm:w-auto">
                        <Button size="lg" className="h-16 px-12 text-lg font-black uppercase tracking-widest w-full sm:w-auto">
                            Work With Us <ArrowUpRight className="ml-2 h-6 w-6" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

const MotionLink = motion.create(Link);


