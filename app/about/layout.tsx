export const metadata = {
    title: "About Dazzcode | SaaS Engineering Agency",
    description: "Meet the engineers behind Dazzcode. We build transparent, investor-ready SaaS products for early-stage founders and SMEs globally.",
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
