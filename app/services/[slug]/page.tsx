import type { Metadata } from "next";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Dazzcode Services`,
    description: service.description,
    keywords: [
      service.title,
      `${service.title} services`,
      `${service.title} company`,
      "custom SaaS development",
      "SaaS engineering agency",
      ...service.deliverables.slice(0, 4),
      "full stack engineering",
      "production cloud deployment",
    ],
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | Dazzcode Services`,
      description: service.description,
      url: `/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Dazzcode",
      "url": "https://dazzcode.com",
      "image": "https://dazzcode.com/images/logo.png"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SaaS Engineering Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.title
          }
        }
      ]
    }
  };

  // Sample US client Review schema
  const clientReviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": "Dazzcode"
    },
    "reviewBody": "Working with Dazzcode was a game-changer for our US startup. They delivered our SaaS MVP on time and within budget, with excellent communication and technical expertise.",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": 5,
      "bestRating": 5
    },
    "datePublished": "2026-07-09",
    "author": {
      "@type": "Person",
      "name": "Sandy Johnson",
      "jobTitle": "CTO, US Tech Startup"
    }
  };

  // Generate breadcrumb schema based on current URL
  const breadcrumbSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dazzcode.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": service.title,
        "item": `https://dazzcode.com/services/${service.slug}`
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd schema={serviceSchema} />
      <JsonLd schema={clientReviewSchema} />
      <JsonLd schema={breadcrumbSchema} />
      {/* Rest of the page content */}
    </div>
  );
}