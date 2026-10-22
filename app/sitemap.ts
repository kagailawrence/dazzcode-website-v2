import { MetadataRoute } from 'next';
import { services, caseStudies } from '@/lib/data';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.dazzcode.com';

    // 1. Static Core Pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/services`,
            changeFrequency: 'weekly',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/case-studies`,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog`,
            changeFrequency: 'daily',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/about`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/terms`,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/privacy`,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/ke`,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ];

    // 2. Global Services (7 core services)
    const globalServicePages: MetadataRoute.Sitemap = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        changeFrequency: 'monthly',
        priority: 0.9,
    }));

    // 3. Regional Kenya Landing Pages (KE)
    const kenyaPages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/ke/web-development-kenya-nairobi`,
            changeFrequency: 'weekly',
            priority: 0.92,
        },
        {
            url: `${baseUrl}/ke/woocommerce-development-kenya-nairobi`,
            changeFrequency: 'weekly',
            priority: 0.92,
        },
        {
            url: `${baseUrl}/ke/saas-development-company-kenya-nairobi`,
            changeFrequency: 'monthly',
            priority: 0.88,
        },
        {
            url: `${baseUrl}/ke/software-development-company-kenya-nairobi`,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/ke/mvp-development-kenya-nairobi`,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
    ];

    // 4. Regional East Africa Page
    const eastAfricaPages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/east-africa/saas-development`,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
    ];

    // 5. Regional UK Pages
    const ukPages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/uk/saas-development`,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/uk/code-audit`,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/uk/saas-scaling`,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
    ];

    // 6. Regional US Pages
    const usPages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/us/saas-development`,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/us/code-audit`,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/us/saas-scaling`,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
    ];

    // 7. Case Studies
    const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((study) => ({
        url: `${baseUrl}/case-studies/${study.slug}`,
        changeFrequency: 'monthly',
        priority: 0.85,
    }));

    // 8. Blog Posts
    const blogPosts = getAllPosts();
    const dynamicBlogPosts: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        ...(post.updatedAt ? { lastModified: new Date(post.updatedAt) } : {}),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    return [
        ...staticPages,
        ...globalServicePages,
        ...kenyaPages,
        ...eastAfricaPages,
        ...ukPages,
        ...usPages,
        ...caseStudyPages,
        ...dynamicBlogPosts,
    ];
}
