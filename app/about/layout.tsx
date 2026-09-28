export const metadata = {
    title: "About Dazzcode | SaaS Engineering Agency",
    description: "Meet the engineers behind Dazzcode. We build transparent, investor-ready SaaS products for early-stage founders and SMEs globally.",
    keywords: [
        "about Dazzcode",
        "SaaS development agency",
        "SaaS engineering team",
        "custom SaaS development company",
        "hire SaaS engineers",
        "full stack SaaS developers",
        "investor ready SaaS engineering",
        "cloud architecture engineers",
    ],
    alternates: {
        canonical: "/about",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
