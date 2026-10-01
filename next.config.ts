import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      {
        source: "/api/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
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
        destination: "/services/saas-code-audit",
        permanent: true,
      },
      {
        source: "/services/code-audit",
        destination: "/services/saas-code-audit",
        permanent: true,
      },
      {
        source: "/services/software-code-audit",
        destination: "/services/saas-code-audit",
        permanent: true,
      },
      {
        source: "/services/platform-scale",
        destination: "/services/saas-scaling",
        permanent: true,
      },
      {
        source: "/services/saas-scaling-performance-optimization",
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
        destination: "/services/saas-code-audit",
        permanent: true,
      },
      {
        source: "/services/database-design",
        destination: "/services/saas-scaling",
        permanent: true,
      },
      {
        source: "/services/technical-seo",
        destination: "/services/custom-saas-development",
        permanent: true,
      },
      {
        source: "/services/saas-development",
        destination: "/services/custom-saas-development",
        permanent: true,
      },
      {
        source: "/services/saas-development-company",
        destination: "/services/custom-saas-development",
        permanent: true,
      },
      {
        source: "/services/saas-product-development",
        destination: "/services/custom-saas-development",
        permanent: true,
      },
      {
        source: "/services/fractional-cto",
        destination: "/services/saas-code-audit",
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
      // Redirect legacy /kenya paths to /ke
      {
        source: "/kenya",
        destination: "/ke",
        permanent: true,
      },
      {
        source: "/kenya/:path*",
        destination: "/ke/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
