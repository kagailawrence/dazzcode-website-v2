import React from 'react';

export default function StructuredData() {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dazzcode",
    url: "https://dazzcode.com",
    logo: "https://dazzcode.com/images/logo.png",
    sameAs: [
      "https://twitter.com/dazzcode",
      "https://github.com/dazzcode",
      "https://linkedin.com/company/dazzcode"
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-800-555-0199",
        contactType: "customer service",
        email: "hello@dazzcode.com",
        availableLanguage: ["English"],
        areaServed: "United States, Worldwide"
      }
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressLocality: "Remote (US-based operations)",
      addressRegion: "CA"
    }
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dazzcode",
    url: "https://dazzcode.com",
    description: "Expert US SaaS development agency. Build compliant MVPs, scalable platforms, and growth engines.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://dazzcode.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    publisher: {
      "@type": "Organization",
      "name": "Dazzcode",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dazzcode.com/images/logo.png"
      }
    }
  };

  // Breadcrumb List Schema (static for home, can be made dynamic via props)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dazzcode.com"
      }
    ]
  };

  // Services Schema (with US-specific details)
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Dazzcode SaaS Services",
    url: "https://dazzcode.com/services",
    description: "Expert SaaS development, architecture audits, and growth automation services for US startups and enterprises.",
    provider: {
      "@type": "Organization",
      name: "Dazzcode",
      url: "https://dazzcode.com"
    },
    itemListElement: [
      {
        "@type": "Offer",
        name: "SaaS MVP Launch",
        description: "Complete MVP development for SaaS startups using Next.js and TypeScript. Includes compliance with US regulations (GDPR, CCPA), PayPal/Stripe integration, and US market-specific UI/UX design.",
        url: "https://dazzcode.com/services/saas-mvp-launch",
        category: "Software Development",
        availability: "https://schema.org/InStock",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          minPrice: "15000",
          maxPrice: "50000",
          unitCode: "E48"
        },
        areaServed: {
          "@type": "Place",
          name: "United States"
        },
        itemOffered: {
          "@type": "Service",
          name: "SaaS MVP Launch",
          description: "End-to-end MVP development including architecture design, database schema, API development, authentication, payment integration, and deployment automation.",
          provider: {
            "@type": "Organization",
            name: "Dazzcode"
          },
          serviceType: "Custom Software Development",
          areaServed: "United States",
          audience: {
            "@type": "Audience",
            audienceType: "SaaS startups, early-stage founders, product teams"
          },
          offers: {
            "@type": "Offer",
            price: "25000",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "Offer",
        name: "SaaS Architecture Audit & Cleanup",
        description: "Comprehensive architecture review, performance optimization, security audit, and technical debt reduction for existing SaaS applications.",
        url: "https://dazzcode.com/services/saas-audit-cleanup",
        category: "Software Architecture",
        availability: "https://schema.org/InStock",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          minPrice: "5000",
          maxPrice: "20000",
          unitCode: "E48"
        },
        areaServed: {
          "@type": "Place",
          name: "United States"
        },
        itemOffered: {
          "@type": "Service",
          name: "SaaS Architecture Audit & Cleanup",
          description: "Deep-dive architecture analysis covering database optimization, API performance, security vulnerabilities, scalability bottlenecks, and code quality assessment with prioritized remediation roadmap.",
          provider: {
            "@type": "Organization",
            name: "Dazzcode"
          },
          serviceType: "Software Architecture Consulting",
          areaServed: "United States",
          audience: {
            "@type": "Audience",
            audienceType: "Scaling SaaS companies, CTOs, engineering leads"
          },
          offers: {
            "@type": "Offer",
            price: "12000",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "Offer",
        name: "Growth & Automation Engineering",
        description: "Data-driven growth engineering, marketing automation, analytics implementation, and conversion optimization for SaaS businesses.",
        url: "https://dazzcode.com/services/growth-automation",
        category: "Growth Engineering",
        availability: "https://schema.org/InStock",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          minPrice: "3000",
          maxPrice: "15000",
          unitCode: "MON"
        },
        areaServed: {
          "@type": "Place",
          name: "United States"
        },
        itemOffered: {
          "@type": "Service",
          name: "Growth & Automation Engineering",
          description: "Implementation of product analytics, user onboarding flows, email automation, A/B testing infrastructure, and growth experiment frameworks. Includes monthly growth reporting and strategy iteration.",
          provider: {
            "@type": "Organization",
            name: "Dazzcode"
          },
          serviceType: "Growth Engineering & Marketing Automation",
          areaServed: "United States",
          audience: {
            "@type": "Audience",
            audienceType: "Growth-stage SaaS, marketing teams, founders"
          },
          offers: {
            "@type": "Offer",
            price: "5000",
            priceCurrency: "USD",
            priceValidUntil: "2027-12-31",
            availability: "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "Offer",
        name: "Technical SEO & AI Optimization",
        description: "Specialized SEO services for SaaS companies targeting both traditional search engines and AI/LLM platforms. Includes schema markup, semantic content strategy, and AI visibility optimization.",
        url: "https://dazzcode.com/services/technical-seo-ai",
        category: "SEO & Digital Marketing",
        availability: "https://schema.org/InStock",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          minPrice: "2000",
          maxPrice: "10000",
          unitCode: "MON"
        },
        areaServed: {
          "@type": "Place",
          name: "United States"
        },
        itemOffered: {
          "@type": "Service",
          name: "Technical SEO & AI Optimization",
          description: "Complete technical SEO audit, structured data implementation (JSON-LD), Core Web Vitals optimization, semantic content strategy for LLM visibility, and AI search ranking optimization.",
          provider: {
            "@type": "Organization",
            name: "Dazzcode"
          },
          serviceType: "Technical SEO Consulting",
          areaServed: "United States",
          audience: {
            "@type": "Audience",
            audienceType: "SaaS companies, marketing teams, content teams"
          },
          offers: {
            "@type": "Offer",
            price: "3500",
            priceCurrency: "USD",
            priceValidUntil: "2027-12-31",
            availability: "https://schema.org/InStock"
          }
        }
      }
    ]
  };

  // FAQ Schema (fixed syntax)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does a SaaS MVP take to build?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typically 4-8 weeks depending on complexity. We follow a structured process: discovery (1 week), architecture & design (1 week), development (2-4 weeks), testing & deployment (1 week)."
        }
      },
      {
        "@type": "Question",
        name: "What technology stack do you use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our primary stack: Next.js 14+, TypeScript, PostgreSQL, Prisma, Tailwind CSS, Vercel/AWS. We also work with React Native, Python/FastAPI, and Go based on project needs."
        }
      },
      {
        "@type": "Question",
        name: "Do you offer ongoing maintenance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer retainer-based maintenance including security updates, feature development, performance monitoring, and 24/7 incident response for production systems."
        }
      },
      {
        "@type": "Question",
        name: "How do you optimize for AI/LLM search visibility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We implement comprehensive schema markup (JSON-LD), semantic HTML structure, entity-based content strategy, FAQ/HowTo schemas, and optimize for conversational queries that AI models use for citations."
        }
      },
      {
        "@type": "Question",
        name: "Do you serve clients in the USA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we specialize in serving US-based SaaS companies. Our team includes US-based developers and we comply with US data privacy laws (GDPR/CCPA)."
        }
      },
      {
        "@type": "Question",
        name: "What is your pricing model?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Project-based for MVP launches ($15K-50K), fixed-fee for audits ($5K-20K), and monthly retainers for growth/SEO ($3K-10K/month). All pricing is transparent with detailed scopes."
        }
      }
    ]
  };

  // Professional Service Schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Dazzcode",
    description: "Expert SaaS development and growth engineering services for US clients",
    url: "https://dazzcode.com",
    logo: "https://dazzcode.com/images/logo.png",
    areaServed: "United States, Worldwide",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://dazzcode.com/contact",
      servicePhone: "+1-800-555-0199",
      serviceEmail: "hello@dazzcode.com",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        opens: "09:00",
        closes: "18:00",
        validFrom: "2026-01-01",
        validThrough: "2027-12-31"
      }
    },
    hasOfferCatalog: servicesSchema
  };

  // Article/Blog Post Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Technical SEO for SaaS: Ranking on Google and AI Platforms",
    description: "Complete guide to implementing technical SEO, structured data, and AI optimization strategies for SaaS companies.",
    image: "https://dazzcode.com/images/seo-guide-og.png",
    author: {
      "@type": "Person",
      name: "Lawrence Maina",
      url: "https://dazzcode.com/about",
      sameAs: [
        "https://twitter.com/dazzcode",
        "https://github.com/dazzcode",
        "https://linkedin.com/in/lawrencemaina"
      ]
    },
    publisher: {
      "@type": "Organization",
      name: "Dazzcode",
      logo: {
        "@type": "ImageObject",
        "url": "https://dazzcode.com/images/logo.png"
      }
    },
    datePublished: "2026-07-09",
    dateModified: "2026-07-09",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://dazzcode.com/blog/technical-seo-saas"
    },
    articleSection: "SEO & Growth",
    keywords: ["SaaS SEO", "Technical SEO", "AI Optimization", "Structured Data", "LLM Visibility", "Core Web Vitals"]
  };

  // LocalBusiness Schema (for US presence)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Dazzcode",
    image: "https://dazzcode.com/images/logo-usa.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Remote (US-based)",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94105",
      addressCountry: "US"
    },
    url: "https://dazzcode.com",
    telephone: "+1-800-555-0199",
    priceRange: "$$",
    languages: ["en-US"],
    sameAs: [
      "https://twitter.com/dazzcode",
      "https://github.com/dazzcode",
      "https://linkedin.com/company/dazzcode"
    ],
    map: {
      "@type": "Map",
      url: "https://dazzcode.com"
    }
  };

  // Review Schema (for client testimonials)
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name: "Dazzcode"
    },
    reviewBody: "Working with Dazzcode delivered our SaaS MVP on time and within budget. Excellent communication and technical expertise.",
    reviewRating: {
      "@type": "Rating",
      "ratingValue": 5,
      "bestRating": 5
    },
    datePublished: "2026-07-09",
    author: {
      "@type": "Person",
      name: "Sandy Johnson",
      jobTitle: "CTO, US Tech Startup"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
    </>
  );
}