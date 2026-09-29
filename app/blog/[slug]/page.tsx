import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  ArrowUpRight,
  Sparkles,
  Layers,
  ShieldCheck,
  TrendingUp,
  Server
} from "lucide-react";
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
    return {
      title: "Article Not Found | Dazzcode",
    };
  }

  return {
    title: `${post.title} | Dazzcode Engineering Blog`,
    description: post.description,
    keywords: [
      post.title,
      post.category,
      `${post.category} SaaS`,
      "SaaS development guide",
      "Next.js SaaS architecture",
      "SaaS engineering best practices",
      "Dazzcode blog",
    ],
    alternates: {
      canonical: `https://dazzcode.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      url: `https://dazzcode.com/blog/${slug}`,
      siteName: "Dazzcode",
      images: [
        {
          url: "/images/hero-saas-dashboard.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/images/hero-saas-dashboard.jpg"],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  // Article Schema for SEO & GEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://dazzcode.com/blog/${post.slug}#article`,
        headline: post.title,
        description: post.description,
        author: {
          "@type": "Person",
          name: post.author,
          url: "https://dazzcode.com/about",
        },
        publisher: {
          "@type": "Organization",
          name: "Dazzcode",
          url: "https://dazzcode.com",
          logo: {
            "@type": "ImageObject",
            url: "https://dazzcode.com/images/logo.png",
          },
        },
        datePublished: post.publishedAt,
        image: "https://dazzcode.com/images/hero-saas-dashboard.jpg",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://dazzcode.com/blog/${post.slug}`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://dazzcode.com/blog/${post.slug}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://dazzcode.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://dazzcode.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `https://dazzcode.com/blog/${post.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAF9] text-[#12201B]">
      <JsonLd schema={articleSchema} />

      {/* Article Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-mono text-[#52615B] mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#059669] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#059669] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#12201B] font-semibold line-clamp-1">{post.title}</span>
          </nav>

          {/* Meta Badges */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#52615B] mb-6">
            <span className="px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#059669]/20 text-[#059669] font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          {/* Post Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.08] text-[#12201B] mb-6">
            {post.title}
          </h1>

          {/* Lead Summary */}
          <p className="text-lg md:text-xl text-[#52615B] leading-relaxed border-l-4 border-[#059669] pl-6 py-1 bg-[#FFFFFF] rounded-r-2xl border-y border-r border-[#E2EAE6] shadow-xs">
            {post.description}
          </p>

          {/* Author snippet */}
          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-[#E2EAE6] text-xs font-mono text-[#52615B]">
            <div className="w-9 h-9 rounded-full bg-[#059669] text-white flex items-center justify-center font-bold text-sm">
              LM
            </div>
            <div>
              <div className="font-bold text-[#12201B] text-sm">{post.author}</div>
              <div className="text-[#52615B]">Software Architect at Dazzcode</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body with Sidebar Table of Contents */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Article Content Column */}
            <div className="lg:col-span-8">
              {/* Rendered HTML content */}
              <div
                className="blog-content leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.htmlContent }}
              />

              {/* In-Article Contextual CTA Banner */}
              <div className="my-12 p-8 rounded-3xl bg-gradient-to-br from-[#ECFDF5] via-[#F8FAF9] to-[#FFFFFF] border border-[#059669]/30 shadow-md">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#059669] block mb-2">
                  Engineering Partnership
                </span>
                <h3 className="text-xl md:text-2xl font-black text-[#12201B] tracking-tight mb-3">
                  Need Help Implementing This in Your Product?
                </h3>
                <p className="text-sm text-[#52615B] leading-relaxed mb-6">
                  Dazzcode engineers production-ready SaaS platforms, conducts deep codebase audits, and deploys high-concurrency cloud systems for startups and growing businesses.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact">
                    <Button className="h-11 px-6 text-xs font-bold uppercase tracking-wider bg-[#059669] hover:bg-[#10B981] text-white rounded-xl shadow-xs cursor-pointer">
                      <span>Book a Technical Call</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" className="h-11 px-5 text-xs font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3] text-[#12201B] rounded-xl cursor-pointer">
                      Explore Services
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Author Bio Box */}
              <div className="mt-12 p-6 md:p-8 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#059669] text-white flex items-center justify-center font-bold text-base shrink-0">
                  LM
                </div>
                <div>
                  <h4 className="font-bold text-[#12201B] text-base mb-1">
                    Written by {post.author}
                  </h4>
                  <p className="text-xs md:text-sm text-[#52615B] leading-relaxed mb-3">
                    Lead software systems architect at Dazzcode. Specializing in multi-tenant SaaS architecture, PostgreSQL query tuning, Next.js performance, and scalable cloud engineering.
                  </p>
                  <Link href="/about" className="text-xs font-bold text-[#059669] hover:underline inline-flex items-center">
                    <span>About Dazzcode Engineering</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar on Desktop */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                {/* Table of Contents */}
                {post.tableOfContents && post.tableOfContents.length > 0 && (
                  <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#12201B] mb-4 pb-2 border-b border-[#E2EAE6]">
                      <BookOpen className="w-3.5 h-3.5 text-[#059669]" />
                      <span>Table of Contents</span>
                    </div>
                    <nav className="space-y-2 text-xs">
                      {post.tableOfContents.map((item, idx) => (
                        <a
                          key={idx}
                          href={`#${item.id}`}
                          className={`block text-[#52615B] hover:text-[#059669] transition-colors py-1 ${
                            item.level === 3 ? "pl-3 text-[11px]" : "font-semibold text-[#12201B]"
                          }`}
                        >
                          {item.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Quick Service Links Widget */}
                <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#059669] block mb-2">
                    Core Services
                  </span>
                  <h4 className="text-sm font-bold text-[#12201B] mb-4">
                    Explore Our Capabilities
                  </h4>
                  <ul className="space-y-2 text-xs font-medium text-[#52615B]">
                    <li>
                      <Link href="/services/saas-development" className="hover:text-[#059669] flex items-center justify-between py-1">
                        <span>SaaS Development</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/saas-mvp-development" className="hover:text-[#059669] flex items-center justify-between py-1">
                        <span>SaaS MVP (4–6 Weeks)</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/code-audit" className="hover:text-[#059669] flex items-center justify-between py-1">
                        <span>SaaS Code Audit</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/saas-scaling" className="hover:text-[#059669] flex items-center justify-between py-1">
                        <span>SaaS Scaling & Speed</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/vps-deployment" className="hover:text-[#059669] flex items-center justify-between py-1">
                        <span>Linux VPS Deployment</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-20 bg-[#F8FAF9] border-t border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#059669] block mb-1">
                Keep Reading
              </span>
              <h2 className="text-2xl font-black text-[#12201B] tracking-tight">
                Related Engineering Guides
              </h2>
            </div>
            <Link href="/blog" className="text-xs font-bold text-[#059669] hover:underline flex items-center">
              <span>View all articles</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] hover:border-[#059669]/50 hover:shadow-md transition-all flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#059669] block mb-2">
                    {related.category}
                  </span>
                  <h3 className="text-base font-bold text-[#12201B] group-hover:text-[#059669] transition-colors line-clamp-2 mb-2">
                    {related.title}
                  </h3>
                  <p className="text-xs text-[#52615B] line-clamp-2 mb-4">
                    {related.description}
                  </p>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#52615B] pt-3 border-t border-[#E2EAE6]">
                  <span>{related.readTime}</span>
                  <span className="text-[#059669] font-bold group-hover:translate-x-1 transition-transform">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#12201B] text-white">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Ready to Build, Audit or Scale Your SaaS?
          </h2>
          <p className="text-sm md:text-base text-[#E2EAE6]/80 mb-8 max-w-xl mx-auto leading-relaxed">
            Schedule a scoping session with our lead architects to discuss timeline, milestones, and architecture.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="h-14 px-8 text-sm font-black uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] rounded-xl transition-all shadow-[0_4px_20px_rgba(5,150,105,0.4)] cursor-pointer"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
