import ContactForm from "@/components/contact-form";
import { Mail, MapPin } from "lucide-react";

export const metadata = {
    title: "Contact Dazzcode | Start Your Project",
    description: "Get in touch with our team to discuss your SaaS idea.",
};

export default function ContactPage() {
    return (
        <div className="container py-24 px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16">
                <div>
                    <h1 className="text-4xl font-bold mb-6">Let&apos;s Build Something Great</h1>
                    <p className="text-xl text-muted-foreground mb-12">
                        Have a SaaS idea? Need to scale your existing platform?
                        Fill out the form and we will get back to you within 24 hours.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Email Us</h3>
                                <p className="text-muted-foreground">info@dazzcode.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Location</h3>
                                <p className="text-muted-foreground">Global Remote Team <br /> HQ: Kenya</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-card border border-white/10 rounded-2xl p-8 shadow-2xl">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
