import { getAllPosts } from "@/lib/blog";

const baseUrl = "https://www.dazzcode.com";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toRssDate(value: string) {
  return new Date(value.includes("T") ? value : `${value}T00:00:00.000Z`).toUTCString();
}

export function GET() {
  const posts = getAllPosts();
  const lastBuildDate = posts[0]?.updatedAt ?? posts[0]?.publishedAt ?? new Date().toISOString();
  const items = posts
    .map((post) => {
      const url = `${baseUrl}/blog/${post.slug}`;
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${toRssDate(post.publishedAt)}</pubDate>
      <author>hello@dazzcode.com (${escapeXml(post.author)})</author>
      <category>${escapeXml(post.category)}</category>
    </item>`;
    })
    .join("");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Dazzcode Engineering Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Guides on SaaS development, MVPs, technical audits, performance, and software engineering.</description>
    <language>en</language>
    <lastBuildDate>${toRssDate(lastBuildDate)}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
