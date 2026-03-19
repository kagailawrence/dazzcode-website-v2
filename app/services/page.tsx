"use client";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import Link from "next/link";
import { services } from "@/lib/data";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { motion } from "framer-motion";

import { FAQ_SCHEMA } from "@/lib/geo-content";
import JsonLd from "@/components/seo/JsonLd";

const MotionLink = motion.create(Link);

export default function ServicesPage() {
    const serviceSchemas = services.map(service => ({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": service.title,
        "provider": {
            "@type": "Organization",
            "name": "Dazzcode"
        },
        "description": service.description
    }));

    return (
        <div className="min-h-screen grid-bg pt-32 pb-20 overflow-x-hidden">
            <JsonLd schema={FAQ_SCHEMA} />
            {serviceSchemas.map((schema, i) => (
                <JsonLd key={i} schema={schema} />
            ))}
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
                            Engineering Services
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 md:mb-8 tracking-tighter text-gradient leading-[0.9]">Strategic <br /> Protocols.</h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Launch, Fix, and Scale your product with institutional-grade logic.
                            Specialized in cloud-native architectures and high-performance SaaS environments.
                        </p>
                    </motion.div>

                    <div className="lg:w-2/3">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6">
                            {services.map((service, index) => {
                                const Icon = service.icon;
                                // Varied spans for Bento effect
                                const spanClass = index % 3 === 0 ? "xl:col-span-4" : "xl:col-span-2";
                                
                                return (
                                    <MotionLink 
                                        key={index} 
                                        href={`/services/${service.slug}`} 
                                        className={spanClass}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <SpotlightCard className="h-full group">
                                            <CardContent className="p-8 md:p-10 flex flex-col h-full relative overflow-hidden">
                                                {/* Decorative background elements */}
                                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 blur-[40px] rounded-full group-hover:bg-primary/10 transition-colors" />
                                                
                                                <div className="h-14 w-14 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-500 relative z-10">
                                                    <Icon className="h-7 w-7" />
                                                </div>
                                                
                                                <h3 className="text-xl md:text-2xl font-black mb-4 uppercase tracking-tight group-hover:text-primary transition-colors relative z-10">
                                                    {service.title}
                                                </h3>
                                                <p className="text-muted-foreground leading-relaxed mb-8 md:mb-10 flex-1 text-sm md:text-base relative z-10">
                                                    {service.description}
                                                </p>
                                                <div className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-primary group opacity-60 group-hover:opacity-100 transition-all relative z-10">
                                                    EXECUTE PROTOCOL <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                                                </div>
                                            </CardContent>
                                        </SpotlightCard>
                                    </MotionLink>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-[2.5rem] p-8 md:p-20 flex flex-col items-center text-center md:text-left md:flex-row md:justify-between gap-10 md:gap-12 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-primary/5 blur-[100px] pointer-events-none" />
                    <div className="relative z-10 max-w-2xl">
                        <div className="inline-block rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-[10px] font-bold text-primary mb-6 uppercase tracking-widest">
                            Custom Solutions
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter text-white uppercase leading-[0.9]">Need a <br className="hidden sm:block" /> custom stack?</h2>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">We tailor our engineering to fit your industry specific scale requirements. From custom AI pipelines to deep infrastructure audits.</p>
                    </div>
                    <Link href="/contact" className="relative z-10 w-full md:w-auto">
                        <Button size="lg" className="px-10 font-black uppercase tracking-widest h-16 w-full md:w-auto text-lg">
                            Request Transmission <ArrowUpRight className="ml-2 h-6 w-6" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}



