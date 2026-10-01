import React from "react";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://dazzcode.com/#organization",
    name: "Dazzcode",
    url: "https://dazzcode.com",
    logo: "https://dazzcode.com/images/logo.png",
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
    "@id": "https://dazzcode.com/#website",
    name: "Dazzcode",
    url: "https://dazzcode.com",
    description: "Build, Fix & Scale Your SaaS. Software engineering company in Kenya serving East Africa, the UK, and the US.",
    publisher: {
      "@id": "https://dazzcode.com/#organization",
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