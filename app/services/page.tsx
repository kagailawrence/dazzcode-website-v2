import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { services } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Dazzcode Services | SaaS Development & Engineering",
    description: "Expert SaaS development services. From custom MVPs to enterprise cloud engineering and automation.",
};

export default function ServicesPage() {
    return (
        <div className="container py-20 px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">World-Class Engineering Services</h1>
                <p className="text-xl text-muted-foreground">
                    We provide the technical expertise to turn your business requirements into powerful software solutions.
                    Specialized in modern web technologies and cloud-native architectures.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <Link key={index} href={`/services/${service.slug}`} className="group block h-full">
                            <Card className="h-full bg-secondary/10 border-white/5 hover:bg-secondary/20 transition-all hover:-translate-y-1">
                                <CardContent className="p-8 flex flex-col h-full">
                                    <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                                        {service.description}
                                    </p>
                                    <div className="flex items-center text-sm font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    );
                })}
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/30 rounded-3xl p-12 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <h2 className="text-3xl font-bold mb-2">Need a Custom Solution?</h2>
                    <p className="text-muted-foreground">We tailor our services to fit your specific industry needs.</p>
                </div>
                <Link href="/contact">
                    <Button size="lg" className="h-12 px-8">Get a Quote</Button>
                </Link>
            </div>
        </div>
    );
}
