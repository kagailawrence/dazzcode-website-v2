import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/saas-mvp-development",
        destination: "/services/saas-development",
        permanent: false,
      },
      {
        source: "/services/web-application-development",
        destination: "/services/saas-api-development",
        permanent: false,
      },
      {
        source: "/services/ai-automation",
        destination: "/services/saas-platform-engineering",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
