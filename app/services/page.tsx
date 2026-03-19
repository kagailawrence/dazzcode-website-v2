import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { services } from "@/lib/data";
import { ArrowRight } from "lucide-react";

import { FAQ_SCHEMA } from "@/lib/geo-content";
import JsonLd from "@/components/seo/JsonLd";

export const metadata = {
    title: "SaaS Development Services | Dazzcode",
    description: "Discover our institutional-grade SaaS engineering services. From custom MVPs to enterprise cloud engineering and high-performance automation.",
};

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
        <div className="min-h-screen grid-bg pt-32 pb-20">
            <JsonLd schema={FAQ_SCHEMA} />
            {serviceSchemas.map((schema, i) => (
                <JsonLd key={i} schema={schema} />
            ))}
            <div className="container px-4 md:px-6">
                <div className="text-left max-w-4xl mb-16 md:mb-24">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 md:mb-8 tracking-tighter text-gradient leading-[0.9]">Strategic <br className="hidden sm:block" /> Engineering <br className="hidden sm:block" /> Protocols</h1>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                        Launch, Fix, and Scale your product with institutional-grade logic.
                        Specialized in cloud-native architectures and high-performance SaaS environments.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-32">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Link key={index} href={`/services/${service.slug}`} className="group block">
                                <Card className="h-full bg-surface border-white/5 hover:border-primary/30 transition-all duration-300">
                                    <CardContent className="p-8 md:p-10 flex flex-col h-full">
                                        <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl bg-surface-light border border-white/5 flex items-center justify-center text-primary mb-6 md:mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-500">
                                            <Icon className="h-6 w-6 md:h-7 md:w-7" />
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-black mb-4 uppercase tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed mb-8 md:mb-10 flex-1 text-sm md:text-base">
                                            {service.description}
                                        </p>
                                        <div className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-primary group opacity-60 group-hover:opacity-100 transition-all">
                                            Execute Protocol <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    })}
                </div>

                <div className="glass-card rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-20 flex flex-col items-center text-center md:text-left md:flex-row md:justify-between gap-10 md:gap-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 blur-[100px] pointer-events-none" />
                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter text-white uppercase">Need a custom stack?</h2>
                        <p className="text-lg md:text-xl text-muted-foreground">We tailor our engineering to fit your industry specific scale requirements.</p>
                    </div>
                    <Link href="/contact" className="relative z-10 w-full md:w-auto">
                        <Button size="lg" className="h-16 px-12 text-lg font-bold w-full md:w-auto">Request Transmission</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

