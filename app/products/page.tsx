import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { products } from "@/lib/data";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata = {
    title: "Dazzcode Products | Scalable SaaS Solutions",
    description: "Explore the types of SaaS products we build. From complex platforms to mobile-responsive MVPs.",
};

export default function ProductsPage() {
    return (
        <div className="container py-20 px-4 md:px-6">
            <div className="mb-20">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Product Expertise</h1>
                <p className="text-xl text-muted-foreground max-w-3xl">
                    We don&apos;t just write code; we engineer products.
                    Our focus is on creating value-driven, scalable software assets for our clients.
                </p>
            </div>

            {/* Product Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-24">
                {products.map((product, index) => {
                    const Icon = product.icon;
                    return (
                        <Link key={index} href={`/products/${product.slug}`} className="group block h-full">
                            <Card className="overflow-hidden border-white/10 bg-background hover:border-primary/50 transition-colors h-full flex flex-col">
                                <div className="h-48 bg-gradient-to-br from-secondary/20 to-primary/10 flex items-center justify-center border-b border-white/5 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <Icon className="h-16 w-16 text-primary/80 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                                </div>
                                <CardContent className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{product.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                                        {product.description}
                                    </p>
                                    <div className="flex items-center text-sm font-medium text-primary">
                                        View Details <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    );
                })}
            </div>

            {/* Featured Case / Highlight */}
            <div className="rounded-3xl bg-secondary/10 border border-white/5 p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <div className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary mb-4">
                            Featured Solution
                        </div>
                        <h2 className="text-3xl font-bold mb-4">E-Commerce Analytics Engine</h2>
                        <p className="text-muted-foreground mb-6 text-lg">
                            We built a high-performance analytics platform for a retail client, processing millions of events in real-time.
                            Built with Next.js, Serverless Functions, and TimescaleDB.
                        </p>
                        <Link href="/contact">
                            <Button variant="outline" className="gap-2">
                                Start Your Product <ArrowUpRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/3 aspect-square rounded-2xl bg-gradient-to-tr from-primary/20 to-secondary/20 flex items-center justify-center border border-white/10">
                        <span className="text-muted-foreground font-mono text-sm">[Project Screenshot Placeholder]</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
