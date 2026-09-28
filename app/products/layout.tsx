export const metadata = {
    title: "SaaS Products | Dazzcode",
    description: "Explore our portfolio of scalable SaaS products and enterprise solutions. We engineer complex platforms focused on performance and revenue generation.",
    alternates: {
        canonical: "/products",
    },
};

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
