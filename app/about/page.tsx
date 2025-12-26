import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
    title: "About Dazzcode | Our Story",
    description: "Learn about Dazzcode's mission to help founders build scalable software.",
};

export default function AboutPage() {
    return (
        <div className="container py-24 px-4 md:px-6 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Dazzcode</h1>
            <p className="text-xl text-muted-foreground mb-12">
                We are a team of expert engineers dedicated to building high-performance, scalable SaaS products.
                We believe in code quality, transparency, and owning your IP.
            </p>
            <div className="p-12 rounded-3xl bg-secondary/10 border border-white/5 mb-12">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                    To bridge the gap between non-technical founders and world-class software engineering.
                </p>
            </div>
            <Link href="/contact">
                <Button size="lg">Work With Us</Button>
            </Link>
        </div>
    );
}
