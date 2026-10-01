import { MetadataRoute } from 'next';
import { services, caseStudies } from '@/lib/data';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://dazzcode.com';
    const lastModified = new Date();

    // 1. Static Core Pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/services`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/case-studies`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified,
            changeFrequency: 'daily',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/about`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/ke`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ];

    // 2. Global Services (7 core services)
    const globalServicePages: MetadataRoute.Sitemap = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.9,
    }));

    // 3. Regional Kenya Landing Pages (KE)
    const kenyaPages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/ke/web-development`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.92,
        },
        {
            url: `${baseUrl}/ke/woocommerce-development`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.92,
        },
        {
            url: `${baseUrl}/ke/saas-development-company`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.88,
        },
        {
            url: `${baseUrl}/ke/software-development-company`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/ke/web-development-company`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/ke/mvp-development`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
    ];

    // 4. Regional East Africa Page
    const eastAfricaPages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/east-africa/saas-development`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
    ];

    // 5. Regional UK Pages
    const ukPages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/uk/saas-development`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/uk/code-audit`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/uk/saas-scaling`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
    ];

    // 6. Regional US Pages
    const usPages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/us/saas-development`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/us/code-audit`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/us/saas-scaling`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
    ];

    // 7. Case Studies
    const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((study) => ({
        url: `${baseUrl}/case-studies/${study.slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.85,
    }));

    // 8. Blog Posts
    const blogPosts = getAllPosts();
    const dynamicBlogPosts: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.publishedAt ? new Date(post.publishedAt) : lastModified,
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
