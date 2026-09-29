"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Dazzcode from "@/components/ui/dazzcode-logo";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/data";

const navLinks = [
  {
    name: "Services",
    href: "/services",
    isDropdown: true,
    dropdownItems: services.map((service) => ({
      name: service.title,
      href: `/services/${service.slug}`,
      tagline: service.tagline,
    })),
  },
  { name: "Case Studies", href: "/case-studies" },
  { name: "How We Build", href: "/case-studies#how-we-build" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false);

  // Disable scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
      <nav className="glass max-w-7xl w-full rounded-2xl flex h-16 items-center justify-between px-6 transition-all duration-300 border border-[#E2EAE6] bg-[#FFFFFF]/95 backdrop-blur-md shadow-sm">
        <Link
          href="/"
          onClick={handleLinkClick}
          className="flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
          aria-label="Dazzcode Home"
        >
          <Dazzcode className="text-2xl" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.isDropdown ? (
                <>
                  <Link
                    href="/services"
                    className={cn(
                      "text-[11px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-lg transition-all duration-200 hover:bg-[#F1F5F3] inline-flex items-center gap-1",
                      pathname === link.href || pathname.startsWith("/services/")
                        ? "text-[#059669] bg-[#F1F5F3]"
                        : "text-[#52615B] hover:text-[#12201B]"
                    )}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="w-3 h-3 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                  </Link>
                  {/* Dropdown menu */}
                  <div className="absolute left-0 mt-2 w-80 rounded-2xl border border-[#E2EAE6] bg-[#FFFFFF] py-2 hidden group-hover:block z-30 shadow-xl">
                    <div className="px-4 py-2 border-b border-[#E2EAE6]">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#52615B]">
                        Engineering Services
                      </span>
                    </div>
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 hover:bg-[#F1F5F3] transition-colors group/item"
                      >
                        <div className="text-xs font-bold text-[#12201B] group-hover/item:text-[#059669] transition-colors">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-[#52615B] line-clamp-1">
                          {item.tagline}
                        </div>
                      </Link>
                    ))}
                    <div className="p-2 border-t border-[#E2EAE6] bg-[#F8FAF9] rounded-b-2xl">
                      <Link
                        href="/services"
                        className="text-[11px] font-bold text-[#059669] hover:underline flex items-center justify-between px-2 py-1"
                      >
                        <span>View All Services</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={cn(
                    "text-[11px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-lg transition-all duration-200 hover:bg-[#F1F5F3]",
                    pathname === link.href
                      ? "text-[#059669] bg-[#F1F5F3]"
                      : "text-[#52615B] hover:text-[#12201B]"
                  )}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden sm:block">
            <button className="relative group overflow-hidden bg-[#059669] text-white font-black uppercase tracking-[0.15em] text-[11px] h-10 px-5 rounded-xl transition-all duration-300 hover:bg-[#10B981] hover:scale-[1.02] active:scale-95 shadow-[0_4px_14px_rgba(5,150,105,0.25)] cursor-pointer">
              <span className="relative z-10">Start a Project</span>
            </button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#12201B] hover:bg-[#F1F5F3] rounded-lg transition-colors"
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
            <div className="bg-[#FFFFFF] border border-[#E2EAE6] h-full rounded-[2rem] p-6 flex flex-col justify-between overflow-y-auto backdrop-blur-xl shadow-2xl">
              <div className="flex flex-col gap-4">
                <Link
                  href="/"
                  onClick={handleLinkClick}
                  className={cn(
                    "text-2xl font-black tracking-tight transition-colors py-1",
                    pathname === "/" ? "text-[#059669]" : "text-[#12201B]"
                  )}
                >
                  Home
                </Link>

                {/* Mobile Services Accordion */}
                <div>
                  <button
                    onClick={() => setIsServicesOpenMobile(!isServicesOpenMobile)}
                    className="w-full flex items-center justify-between text-2xl font-black tracking-tight text-[#12201B] py-1"
                  >
                    <span>Services</span>
                    <ChevronDown className={cn("w-5 h-5 transition-transform", isServicesOpenMobile ? "rotate-180 text-[#059669]" : "")} />
                  </button>
                  {isServicesOpenMobile && (
                    <div className="pl-4 pt-2 pb-2 space-y-2 border-l-2 border-[#059669]/30 mt-2">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          onClick={handleLinkClick}
                          className="block text-sm font-semibold text-[#52615B] hover:text-[#059669] py-1"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/case-studies"
                  onClick={handleLinkClick}
                  className={cn(
                    "text-2xl font-black tracking-tight transition-colors py-1",
                    pathname === "/case-studies" ? "text-[#059669]" : "text-[#12201B]"
                  )}
                >
                  Case Studies
                </Link>

                <Link
                  href="/case-studies#how-we-build"
                  onClick={handleLinkClick}
                  className="text-2xl font-black tracking-tight text-[#12201B] py-1"
                >
                  How We Build
                </Link>

                <Link
                  href="/blog"
                  onClick={handleLinkClick}
                  className={cn(
                    "text-2xl font-black tracking-tight transition-colors py-1",
                    pathname.startsWith("/blog") ? "text-[#059669]" : "text-[#12201B]"
                  )}
                >
                  Blog
                </Link>

                <Link
                  href="/about"
                  onClick={handleLinkClick}
                  className={cn(
                    "text-2xl font-black tracking-tight transition-colors py-1",
                    pathname === "/about" ? "text-[#059669]" : "text-[#12201B]"
                  )}
                >
                  About
                </Link>
              </div>

              <div className="space-y-4 pt-6 border-t border-[#E2EAE6]">
                <Link href="/contact" onClick={handleLinkClick} className="block w-full">
                  <button className="w-full bg-[#059669] text-white font-black uppercase tracking-[0.15em] text-xs h-12 rounded-xl transition-all shadow-md hover:bg-[#10B981]">
                    Start a Project
                  </button>
                </Link>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#52615B] text-center">
                  SaaS Engineering · Kenya & Global
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
