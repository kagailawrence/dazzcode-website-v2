export const metadata = {
    title: "SaaS Development Services | Dazzcode",
    description: "Discover our institutional-grade SaaS engineering services. From custom MVPs to enterprise cloud engineering and high-performance automation.",
    keywords: [
        "SaaS development services",
        "custom SaaS development",
        "SaaS product development",
        "SaaS application development",
        "SaaS MVP development",
        "multi-tenant SaaS architecture",
        "VPS server deployment",
        "deploy Next.js app to VPS",
        "SaaS code audit",
        "AI automation workflows",
    ],
    alternates: {
        canonical: "/services",
    },
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
