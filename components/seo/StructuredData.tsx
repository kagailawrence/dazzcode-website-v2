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
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '',
            contactType: 'customer service',
            email: 'hello@dazzcode.com'
        }
    };

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Dazzcode',
        url: 'https://dazzcode.com',
    };

    const servicesSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'SaaS Development & Engineering',
        provider: {
            '@type': 'Organization',
            name: 'Dazzcode'
        },
        areaServed: 'Worldwide',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'SaaS Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'SaaS MVP Launch'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'SaaS Audit & Cleanup'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Growth & Automation'
                    }
                }
            ]
        }
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
            />
        </>
    );
}
