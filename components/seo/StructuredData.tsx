import React from "react";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.dazzcode.com/#organization",
    name: "Dazzcode",
    url: "https://www.dazzcode.com",
    logo: "https://www.dazzcode.com/images/logo.png",
    description: "Dazzcode is a Kenya-based software engineering and SaaS development company helping startups and businesses build, audit, deploy, and scale software products.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    sameAs: [
      "https://twitter.com/dazzcode",
      "https://instagram.com/dazzcode",
      "https://facebook.com/dazzcodeofficial",
      "https://github.com/dazzcode",
      "https://linkedin.com/company/dazzcode",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.dazzcode.com/#website",
    name: "Dazzcode",
    url: "https://www.dazzcode.com",
    description: "Build, Fix & Scale Your SaaS. Software engineering company in Kenya serving East Africa, the UK, and the US.",
    publisher: {
      "@id": "https://www.dazzcode.com/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.dazzcode.com/blog?query={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
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
    </>
  );
}
