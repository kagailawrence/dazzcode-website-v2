import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
    title: "About Dazzcode | SaaS Engineering Agency",
    description: "Meet the engineers behind Dazzcode. We build transparent, investor-ready SaaS products for early-stage founders and SMEs globally.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen grid-bg pt-32 pb-20">
            <div className="container px-4 md:px-6 max-w-5xl mx-auto">
                <div className="text-center mb-16 md:mb-24">
                    <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-gradient leading-[0.9]">Our Ethos</h1>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        We are a collective of high-stakes engineers dedicated to building institutional-grade software.
                        We believe in terminal-grade logic, radical transparency, and absolute IP ownership.
                    </p>
                </div>
                
                <div className="glass-card rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-24 text-center relative overflow-hidden mb-16 md:mb-24">
                    <div className="absolute inset-0 bg-primary/5 blur-[120px] pointer-events-none" />
                    <h2 className="text-2xl md:text-3xl font-black mb-6 tracking-tight uppercase text-white">The Mission</h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        To bridge the gap between non-technical founders and world-class software engineering protocols. 
                        We don't just ship features; we deploy resilient software assets.
                    </p>
                </div>

                <div className="text-center">
                    <Link href="/contact" className="block sm:inline-block w-full sm:w-auto">
                        <Button size="lg" className="h-16 px-12 text-lg font-bold w-full sm:w-auto">Work With Us</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

