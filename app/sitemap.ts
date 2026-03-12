import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://dazzcode.com';
    const lastModified = new Date();

    const staticPages = [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/services`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/products`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about`,
            lastModified,
            changeFrequency: 'yearly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified,
            changeFrequency: 'yearly' as const,
            priority: 0.9,
        },
    ];

    // Note: To make blog posts dynamic, we would fetch them here.
    // Assuming blog posts will be available, but falling back to static generation for now.
    const dynamicBlogPosts = [
        "how-much-does-it-cost-to-build-a-saas-mvp-in-2026",
        "nextjs-vs-remix-for-saas-2026",
        "what-is-soc2-ready-architecture",
        "how-to-hire-a-saas-development-agency"
    ].map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...dynamicBlogPosts];
}
