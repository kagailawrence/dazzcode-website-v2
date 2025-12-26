import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import Dazzcode from "@/components/ui/dazzcode-logo";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-background pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <Link href="/" className="inline-block transition-opacity hover:opacity-90 mb-4">
                            <Dazzcode className="text-2xl" />
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Building scalable SaaS products and helping founders turn ideas into reliable software systems.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">SaaS Solutions</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/products" className="hover:text-primary transition-colors">SaaS Platforms</Link></li>
                            <li><Link href="/products" className="hover:text-primary transition-colors">Custom MVPs</Link></li>
                            <li><Link href="/products" className="hover:text-primary transition-colors">Business Automation</Link></li>
                            <li><Link href="/products" className="hover:text-primary transition-colors">AI Integrations</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Company</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="/case-studies" className="hover:text-primary transition-colors">How We Build</Link></li>
                            <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><a href="mailto:info@dazzcode.com" className="hover:text-primary transition-colors">info@dazzcode.com</a></li>
                            <li>Kenya, Global</li>
                            <li>
                                <Link href="/contact" className="inline-block mt-2 font-medium text-primary hover:underline">
                                    Schedule a Call &rarr;
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Dazzcode. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
