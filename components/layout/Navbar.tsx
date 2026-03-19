"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Dazzcode from "@/components/ui/dazzcode-logo";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "SaaS Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "How We Build", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu on navigation
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Disable scroll when menu is open
    useEffect(() => {
      if (isMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }, [isMenuOpen]);

    return (
        <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
            <nav className="glass max-w-7xl w-full rounded-2xl flex h-16 items-center justify-between px-6 transition-all duration-300">
                <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105 active:scale-95">
                    <Dazzcode className="text-2xl" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg transition-all duration-200 hover:bg-white/5",
                                pathname === link.href ? "text-primary bg-white/5" : "text-muted-foreground hover:text-white"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/contact" className="hidden sm:block">
                        <button className="relative group overflow-hidden bg-primary text-black font-black uppercase tracking-[0.2em] text-[10px] h-10 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95">
                            <span className="relative z-10">Book a Call</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </button>
                    </Link>
                    
                    {/* Mobile Menu Toggle */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="fixed inset-0 top-24 z-40 lg:hidden px-4 pb-10"
                    >
                        <div className="glass h-full rounded-[2.5rem] p-10 flex flex-col justify-between">
                            <div className="flex flex-col gap-6">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "text-4xl font-black tracking-tighter transition-colors",
                                                pathname === link.href ? "text-primary" : "text-white"
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                            
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navLinks.length * 0.05 }}
                                className="space-y-8"
                            >
                                <div className="h-px bg-white/5" />
                                <Link href="/contact" className="block w-full">
                                    <button className="w-full bg-primary text-black font-black uppercase tracking-[0.2em] text-sm h-16 rounded-[1.5rem] transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                                        Book a Call
                                    </button>
                                </Link>
                                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground text-center">
                                    Engineering Institutional SaaS
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

