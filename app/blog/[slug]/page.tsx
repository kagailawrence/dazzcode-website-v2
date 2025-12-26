import { blogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import type { Metadata } from "next";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "Post Not Found | Dazzcode Blog",
        };
    }

    return {
        title: `${post.title} | Dazzcode Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: ["Dazzcode Team"],
        },
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen py-24 pb-32">
            {/* Header */}
            <header className="container px-4 md:px-6 max-w-3xl mx-auto mb-16">
                <Link href="/blog">
                    <Button variant="ghost" className="pl-0 gap-2 mb-8 hover:bg-transparent hover:text-primary">
                        <ArrowLeft className="h-4 w-4" /> Back to Blog
                    </Button>
                </Link>

                <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {post.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" /> {post.readTime}
                    </span>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                    {post.title}
                </h1>

                <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground border border-white/5">
                            #{tag}
                        </span>
                    ))}
                </div>
            </header>

            {/* Content */}
            <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                <div
                    className="prose prose-invert prose-lg max-w-none 
                    prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
                    prose-p:text-muted-foreground prose-p:leading-relaxed
                    prose-strong:text-primary prose-strong:font-semibold
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    prose-code:text-primary prose-code:bg-primary/10 prose-code:rounded prose-code:px-1 prose-code:py-0.5 prose-code:before:content-none prose-code:after:content-none
                    prose-li:text-muted-foreground
                    "
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>

            {/* Footer / CTA */}
            <div className="container px-4 md:px-6 max-w-3xl mx-auto mt-20 pt-10 border-t border-white/10">
                <div className="bg-secondary/10 rounded-2xl p-8 flex flex-col items-center text-center space-y-4">
                    <h3 className="text-xl font-bold">Enjoyed this article?</h3>
                    <p className="text-muted-foreground">
                        We help SaaS founders solve these specific engineering challenges every day.
                    </p>
                    <Link href="/contact">
                        <Button>Discuss Your Project</Button>
                    </Link>
                </div>
            </div>
        </article>
    );
}
