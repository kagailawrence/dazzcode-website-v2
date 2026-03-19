export default function StructuredData() {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Dazzcode',
        url: 'https://dazzcode.com',
        logo: 'https://dazzcode.com/images/logo.png',
        sameAs: [
            'https://twitter.com/dazzcode',
            'https://github.com/dazzcode',
            'https://linkedin.com/company/dazzcode'
        ],
        contactPoint: [
            {
                '@type': 'ContactPoint',
                telephone: '',
                contactType: 'customer service',
                email: 'hello@dazzcode.com'
            }
        ]
    };

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Dazzcode',
        url: 'https://dazzcode.com',
        potentialAction: {
            '@type': 'SearchAction',
            target: 'https://dazzcode.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
        }
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://dazzcode.com'
            }
        ]
    };

    const servicesSchema = {
        '@context': 'https://schema.org',
        '@type': 'OfferCatalog',
        name: 'SaaS Services',
        url: 'https://dazzcode.com/services',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'SaaS MVP Launch',
                    description: 'MVP development for SaaS startups using Next.js and TypeScript.'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'SaaS Audit & Cleanup',
                    description: 'Architecture audits, performance tuning, and code cleanup.'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Growth & Automation',
                    description: 'Automation, analytics, and growth engineering for SaaS.'
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
            />
        </>
    );
}
