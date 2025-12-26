import { services } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ChevronDown, Check } from "lucide-react";
import { Metadata } from "next";

interface ServicePageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `${service.title} | Dazzcode Services`,
        description: service.description,
    };
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <div className="flex flex-col min-h-screen">
            {/* 2.1 Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-background">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background pointer-events-none" />
                <div className="container px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto">
                    <Link href="/services" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                    </Link>

                    <div className="flex justify-center mb-8">
                        <div className="p-3 bg-primary/10 rounded-xl">
                            <Icon className="h-10 w-10 text-primary" />
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{service.hero.headline}</h1>
                    <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                        {service.hero.subheadline}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto">{service.hero.cta}</Button>
                        </Link>
                        <Link href="#process">
                            <Button variant="outline" size="lg" className="h-12 px-8 text-base w-full sm:w-auto">How We Work</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2.2 Problem Statement */}
            <section className="py-20 bg-secondary/5 border-y border-white/5">
                <div className="container px-4 md:px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-10 text-center">{service.problems.heading}</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {service.problems.points.map((point, i) => (
                                <div key={i} className="flex gap-4 p-6 bg-background rounded-xl border border-white/5 shadow-sm">
                                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                                        <span className="font-bold text-sm">!</span>
                                    </div>
                                    <p className="text-muted-foreground">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 2.3 & 2.4 Solution & Deliverables */}
            <section className="py-24">
                <div className="container px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">{service.solution.heading}</h2>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                {service.solution.description}
                            </p>

                            <div className="space-y-4 mb-10">
                                {service.solution.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-primary h-5 w-5 flex-shrink-0" />
                                        <span className="font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-secondary/10 rounded-2xl p-8 border border-white/10">
                            <h3 className="text-xl font-bold mb-6">What&apos;s Included</h3>
                            <ul className="space-y-4">
                                {service.deliverables.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                                        <Check className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2.5 Process */}
            <section id="process" className="py-24 bg-background relative">
                <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-16 text-center">How We Work</h2>
                    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-secondary before:to-transparent">
                        {service.process.map((step, i) => (
                            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-sm font-bold text-muted-foreground">
                                    {step.step}
                                </div>

                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-secondary/5 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                                    <h3 className="font-bold text-lg mb-2 text-primary">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2.6 Differentiators */}
            <section className="py-20">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {service.differentiators.map((diff, i) => {
                            // Dynamically render icon if provided, else fallback or omit
                            const DiffIcon = diff.icon;
                            return (
                                <div key={i} className="p-8 rounded-2xl bg-secondary/10 border border-white/5 text-center">
                                    {DiffIcon && (
                                        <div className="mx-auto h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
                                            <DiffIcon className="h-6 w-6" />
                                        </div>
                                    )}
                                    <h3 className="font-bold text-xl mb-3">{diff.title}</h3>
                                    <p className="text-muted-foreground">{diff.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* 2.7 Use Cases & Pricing */}
            <section className="py-20 bg-secondary/5 border-y border-white/5">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Who This Is For</h3>
                            <div className="flex flex-wrap gap-2">
                                {service.useCases.map((useCase, i) => (
                                    <span key={i} className="px-4 py-2 rounded-full bg-background border border-white/10 text-sm font-medium">
                                        {useCase}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-6">{service.pricing.heading}</h3>
                            <p className="text-muted-foreground mb-6">
                                {service.pricing.description}
                            </p>
                            <Link href="/contact">
                                <Button variant="outline">Request a Quote</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2.12 FAQ */}
            <section className="py-24 max-w-3xl mx-auto">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {service.faqs.map((faq, i) => (
                            <details key={i} className="group p-6 rounded-xl bg-secondary/5 border border-white/5 open:bg-secondary/10 transition-colors cursor-pointer">
                                <summary className="flex items-center justify-between font-medium list-none">
                                    {faq.question}
                                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                                </summary>
                                <p className="text-muted-foreground mt-4 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2.11 SEO Content Block */}
            <section className="py-12 border-t border-white/5">
                <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-4">{service.seoContent.heading}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        {service.seoContent.content}
                    </p>
                </div>
            </section>

            {/* 2.10 Conversion CTA */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
                <div className="container px-4 md:px-6 relative z-10 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Build Something Scalable?</h2>
                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                        Stop wasting time with technical debt. Partner with Dazzcode and launch your world-class software today.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="h-14 px-10 text-lg shadow-[0_0_40px_-10px_rgba(124,58,237,0.5)]">
                            Start Your Project
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
