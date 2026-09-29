import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy service routes 301 redirects
      {
        source: "/services/saas-mvp",
        destination: "/services/saas-mvp-development",
        permanent: true,
      },
      {
        source: "/services/saas-audit",
        destination: "/services/code-audit",
        permanent: true,
      },
      {
        source: "/services/platform-scale",
        destination: "/services/saas-scaling",
        permanent: true,
      },
      {
        source: "/services/saas-api-development",
        destination: "/services/web-application-development",
        permanent: true,
      },
      {
        source: "/services/saas-platform-engineering",
        destination: "/services/ai-automation",
        permanent: true,
      },
      {
        source: "/services/maintenance-scaling",
        destination: "/services/code-audit",
        permanent: true,
      },
      {
        source: "/services/database-design",
        destination: "/services/saas-scaling",
        permanent: true,
      },
      {
        source: "/services/technical-seo",
        destination: "/services/saas-development",
        permanent: true,
      },
      {
        source: "/services/fractional-cto",
        destination: "/services/code-audit",
        permanent: true,
      },
      {
        source: "/services/ui-ux-design",
        destination: "/services/web-application-development",
        permanent: true,
      },
      // Product routes redirects to case studies and services
      {
        source: "/products",
        destination: "/case-studies",
        permanent: true,
      },
      {
        source: "/products/dazzpos-system",
        destination: "/case-studies/dazzpos",
        permanent: true,
      },
      {
        source: "/products/inventory-manager",
        destination: "/services/web-application-development",
        permanent: true,
      },
      {
        source: "/products/seo-automation-suite",
        destination: "/services/ai-automation",
        permanent: true,
      },
      {
        source: "/products/trading-bot-systems",
        destination: "/case-studies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
