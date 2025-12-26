import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { Metadata } from "next";

interface ProductPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        return {
            title: "Product Not Found",
        };
    }

    return {
        title: `${product.title} | Dazzcode Products`,
        description: product.description,
    };
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    const Icon = product.icon;

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-secondary/20 to-background">
                <div className="container px-4 md:px-6 relative z-10">
                    <Link href="/products" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
                    </Link>

                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        <div className="p-6 bg-background rounded-2xl border border-white/10 shadow-2xl mb-8">
                            <Icon className="h-16 w-16 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">{product.title}</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                            {product.description}
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="h-12 px-8">Request Demo / Pricing</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Deep Dive Content */}
            <section className="py-20">
                <div className="container px-4 md:px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold mb-6">{product.details.heading}</h2>
                            <p className="text-lg text-muted-foreground mb-12">
                                {product.details.content}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {product.details.features.map((feature, i) => (
                                    <div key={i} className="p-6 rounded-xl border border-white/10 bg-secondary/5 hover:bg-secondary/10 transition-colors">
                                        <Check className="h-6 w-6 text-green-500 mb-4" />
                                        <h3 className="font-bold text-lg">{feature}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="rounded-2xl border border-white/10 bg-card p-8">
                                <h3 className="font-bold mb-6">Built With</h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.details.techStack.map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-secondary rounded-full text-sm font-medium text-secondary-foreground">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/10">
                                    <h4 className="font-bold mb-2">Perfect For</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• Growth-Stage Startups</li>
                                        <li>• Enterprise Retailers</li>
                                        <li>• Digital First Brands</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
