"use client";

import { useState } from "react";
import Link from "next/link";
import { BlogPost, allCategories } from "@/lib/blog-types";
import { ArrowRight, Calendar, Clock, Search, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogSearchAndFilterProps {
  posts: BlogPost[];
}

export default function BlogSearchAndFilter({ posts }: BlogSearchAndFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" ||
      post.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts[0];

  return (
    <>
      {/* Search Bar & Category Pills */}
      <div className="max-w-xl mx-auto relative mb-8">
        <Search className="w-4 h-4 text-[#52615B] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          placeholder="Search articles on pricing, database indexing, Next.js, M-Pesa..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-12 pl-11 pr-4 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] text-sm text-[#12201B] placeholder:text-[#52615B]/70 shadow-xs focus:outline-hidden focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/10 transition-all"
        />
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer shadow-xs ${
              selectedCategory.toLowerCase() === cat.toLowerCase()
                ? "bg-[#059669] text-white shadow-[0_2px_8px_rgba(5,150,105,0.3)]"
                : "bg-[#FFFFFF] border border-[#E2EAE6] text-[#52615B] hover:border-[#059669] hover:text-[#12201B]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Lead Post (when no active search/filter) */}
      {!searchQuery && selectedCategory === "All" && featuredPost && (
        <div className="mt-12 mb-12">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#ECFDF5]/80 via-[#F8FAF9] to-[#FFFFFF] border border-[#059669]/20 hover:border-[#059669] shadow-sm hover:shadow-md transition-all block group text-left"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#52615B] mb-4">
              <span className="px-3 py-1 rounded-full bg-[#059669] text-white font-bold">
                Featured Guide
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-[#FFFFFF] border border-[#E2EAE6] text-[#059669] font-bold">
                {featuredPost.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {featuredPost.readTime}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#12201B] tracking-tight mb-4 group-hover:text-[#059669] transition-colors leading-tight">
              {featuredPost.title}
            </h2>

            <p className="text-sm sm:text-base text-[#52615B] leading-relaxed mb-6 max-w-3xl">
              {featuredPost.description}
            </p>

            <div className="flex items-center text-xs font-bold uppercase tracking-wider text-[#059669] group-hover:translate-x-1 transition-transform">
              <span>Read Full Guide</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </div>
          </Link>
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="mt-8">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-[#FFFFFF] rounded-3xl border border-[#E2EAE6] p-8">
            <p className="text-lg font-bold text-[#12201B] mb-2">
              No articles found matching &quot;{searchQuery}&quot;
            </p>
            <p className="text-sm text-[#52615B] mb-6">
              Try searching for terms like &quot;pricing&quot;, &quot;database&quot;, &quot;VPS&quot;, or &quot;M-Pesa&quot;.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="cursor-pointer"
            >
              Clear Filter
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] hover:border-[#059669]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#52615B] font-mono mb-4">
                    <span className="px-2.5 py-1 rounded-lg bg-[#ECFDF5] text-[#059669] font-bold text-[11px]">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-[#12201B] tracking-tight mb-3 group-hover:text-[#059669] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-[#52615B] leading-relaxed mb-6 line-clamp-3">
                    {post.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2EAE6] flex items-center justify-between text-xs font-mono text-[#52615B]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="inline-flex items-center font-bold text-[#059669] group-hover:translate-x-1 transition-transform">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
