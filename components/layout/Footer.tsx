import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import Dazzcode from "@/components/ui/dazzcode-logo";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-background pt-32 pb-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-6">
                        <Link href="/" className="inline-block transition-transform hover:scale-105 mb-4">
                            <Dazzcode className="text-2xl" />
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                            Engineering institutional-grade SaaS platforms. We help founders turn high-stakes ideas into resilient software assets.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-white">Protocol</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="/products" className="hover:text-white transition-colors">SaaS Platforms</Link></li>
                            <li><Link href="/products" className="hover:text-white transition-colors">Custom MVPs</Link></li>
                            <li><Link href="/products" className="hover:text-white transition-colors">Business Automation</Link></li>
                            <li><Link href="/products" className="hover:text-white transition-colors">AI Integrations</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-white">Company</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-white transition-colors">Our Ethos</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/case-studies" className="hover:text-white transition-colors">Engineering Logic</Link></li>
                            <li><Link href="/careers" className="hover:text-white transition-colors">Join Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-white">Transmission</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><a href="mailto:ops@dazzcode.com" className="hover:text-white transition-colors">ops@dazzcode.com</a></li>
                            <li className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">Distributed · Global</li>
                            <li>
                                <Link href="/contact" className="inline-flex items-center gap-2 mt-4 font-bold text-primary group">
                                    Book a Call <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-32 border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60">
                    <p>&copy; {new Date().getFullYear()} Dazzcode Institutional. All protocols reserved.</p>
                    <div className="flex gap-12">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

