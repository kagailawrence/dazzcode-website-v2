import { MetadataRoute } from 'next';
import { services, products } from '@/lib/data';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://dazzcode.com';
    const lastModified = new Date();

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
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/saas-mvp`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/saas-audit`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/platform-scale`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/products`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/case-studies`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified,
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
    ];

    const dynamicServices: MetadataRoute.Sitemap = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.85,
    }));

    const dynamicProducts: MetadataRoute.Sitemap = products.map((product) => ({
        url: `${baseUrl}/products/${product.slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    const blogPosts = getAllPosts();
    const dynamicBlogPosts: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.publishedAt ? new Date(post.publishedAt) : lastModified,
        changeFrequency: 'weekly',
        priority: 0.75,
    }));

    return [...staticPages, ...dynamicServices, ...dynamicProducts, ...dynamicBlogPosts];
}
