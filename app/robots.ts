import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://dazzcode.com";

  return {
    rules: [
      // Standard search engine bots
      {
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Googlebot-News",
          "Bingbot",
          "Applebot",
          "DuckDuckBot",
          "YandexBot",
          "Baiduspider",
          "Slurp",
        ],
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Leading AI Search & LLM Crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.)
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "PerplexityBot",
          "Google-Extended",
          "Amazonbot",
          "Meta-ExternalAgent",
          "FacebookBot",
          "cohere-ai",
          "Bytespider",
          "Diffbot",
        ],
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Catch-all fallback for all other web crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

