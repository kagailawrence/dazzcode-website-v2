import Link from "next/link";
import { Button } from "@/components/ui/button";
import { blogPosts, allCategories } from "@/lib/blog";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata = {
    title: "SaaS Knowledge Hub | Dazzcode Blog",
    description: "Insights on SaaS engineering, product strategy, and scaling from the Dazzcode team.",
};

export default function BlogListingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
                <div className="container px-4 md:px-6 relative z-10 text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                        Engineering & Growth Insights
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">The SaaS Knowledge Hub</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                        We share everything we learn about building, scaling, and maintaining high-performance software products.
                    </p>

                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {allCategories.map((cat) => (
                            <span key={cat} className="px-3 py-1 rounded-full border border-white/10 bg-secondary/5 text-sm font-medium text-muted-foreground hover:text-white hover:border-primary/50 transition-colors cursor-pointer">
                                {cat}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="pb-24">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col h-full bg-secondary/5 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/20 transition-all hover:-translate-y-1">
                                <div className="p-6 flex-1 flex flex-col">
                                    {/* Meta */}
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3" />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            {post.readTime}
                                        </span>
                                    </div>

                                    {/* Title & Excerpt */}
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                                        {post.excerpt}
                                    </p>

                                    {/* Tags & CTA */}
                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex gap-2">
                                            <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-medium">
                                                {post.category}
                                            </span>
                                        </div>
                                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter / CTA */}
            <section className="py-20 border-t border-white/5">
                <div className="container px-4 md:px-6 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Have a Question?</h2>
                    <p className="text-muted-foreground mb-8">
                        We often write articles based on client questions. If you have a specific technical or product challenge, let us know.
                    </p>
                    <Link href="/contact">
                        <Button variant="outline" size="lg">Ask a Question</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
