import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { Metadata } from "next";

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {};
    }

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            publishedTime: post.publishedAt,
            authors: [post.author],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // GEO: Article Schema for AI Retrieval
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.description,
        author: {
            "@type": "Person",
            "name": post.author,
        },
        datePublished: post.publishedAt,
    };

    return (
        <article className="container py-20 px-4 md:px-6 max-w-4xl mx-auto">
            <JsonLd schema={articleSchema} />

            <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-12 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
            </Link>

            <header className="mb-16">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                    </span>
                    <span className="flex items-center gap-1 hidden sm:flex">
                        <User className="h-4 w-4" />
                        {post.author}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-medium ml-auto">
                        {post.category}
                    </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
                    {post.title}
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-primary pl-6">
                    {post.description}
                </p>
            </header>

            {/* GEO: The content is rendered here. 
                Proper H2/H3 tags are expected within the markdown. */}
            <div
                className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <hr className="my-16 border-white/10" />

            <section className="text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to build your SaaS?</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Stop over-engineering and start shipping. Dazzcode builds institutional-grade SaaS products for strategic founders globally.
                </p>
                <Link href="/contact">
                    <Button size="lg">Book a Strategy Call</Button>
                </Link>
            </section>
        </article>
    );
}
