import BookingFlow from "@/components/BookingFlow";
import { Mail, MapPin } from "lucide-react";

export const metadata = {
    title: "Book a Strategy Call | Dazzcode",
    description: "Ready to launch or scale your SaaS? Contact our elite engineering team today for a technical consultation and immediate roadmap evaluation.",
    keywords: [
        "hire SaaS developers",
        "book SaaS strategy call",
        "SaaS technical consultation",
        "hire Next.js developers",
        "custom SaaS development quote",
        "SaaS MVP consultation",
        "code audit consultation",
        "hire remote software engineers",
    ],
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="orb orb-1 opacity-30"></div>
                <div className="absolute inset-0 bg-background/90 backdrop-blur-[100px]"></div>
            </div>

            <div className="container py-24 px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's talk execution.</h1>
                <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
                    Pick a time below. <strong className="text-white">14 founders</strong> booked calls this week.
                    We will review your roadmap and identify execution risks.
                </p>

                {/* UX: Single action view. Removed distracting 2-col layout in favor of the Booking Funnel. */}
                <div className="mb-24">
                    <BookingFlow />
                </div>

                {/* Secondary Contact Info Below Fold */}
                <div className="border-t border-white/5 pt-16 grid sm:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-secondary/5 border border-white/5">
                        <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1 text-white">Email Us</h3>
                            <p className="text-muted-foreground text-sm">info@dazzcode.com</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-secondary/5 border border-white/5">
                        <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                            <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1 text-white">Location</h3>
                            <p className="text-muted-foreground text-sm">Global Remote Team <br /> HQ: Kenya</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
