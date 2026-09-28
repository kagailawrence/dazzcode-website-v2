"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Dazzcode from "@/components/ui/dazzcode-logo";
import { Menu, X } from "lucide-react";
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

  // Disable scroll when menu is open
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
      <nav className="glass max-w-7xl w-full rounded-2xl flex h-16 items-center justify-between px-6 transition-all duration-300 border border-[#E2EAE6] bg-[#FFFFFF]/90 backdrop-blur-md shadow-xs">
        <Link
          href="/"
          onClick={handleLinkClick}
          className="flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
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
                      "text-[11px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-lg transition-all duration-200 hover:bg-[#F1F5F3]",
                      pathname === link.href || pathname.startsWith("/services/")
                        ? "text-[#059669] bg-[#F1F5F3]"
                        : "text-[#52615B] hover:text-[#12201B]"
                    )}
                  >
                    {link.name}
                    <span className="ml-1 text-[9px] opacity-60">▼</span>
                  </Link>
                  {/* Dropdown menu */}
                  <div className="absolute left-0 mt-2 w-64 rounded-xl border border-[#E2EAE6] bg-[#FFFFFF]/98 backdrop-blur-md py-2 hidden group-hover:block z-20 shadow-xl">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-xs font-medium text-[#52615B] hover:text-[#059669] hover:bg-[#F1F5F3] transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
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
            <div className="bg-[#FFFFFF]/98 border border-[#E1E7E4] h-full rounded-[2rem] p-8 flex flex-col justify-between overflow-y-auto backdrop-blur-xl shadow-2xl">
              <div className="flex flex-col gap-5">
                <Link
                  href="/"
                  onClick={handleLinkClick}
                  className={cn(
                    "text-3xl font-black tracking-tight transition-colors",
                    pathname === "/" ? "text-[#059669]" : "text-[#0F172A]"
                  )}
                >
                  Home
                </Link>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className={cn(
                        "text-3xl font-black tracking-tight transition-colors",
                        pathname === link.href || (link.isDropdown && pathname.startsWith("/services"))
                          ? "text-[#059669]"
                          : "text-[#0F172A]"
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
                transition={{ delay: (navLinks.length + 1) * 0.05 }}
                className="space-y-6 pt-6"
              >
                <div className="h-px bg-[#E1E7E4]" />
                <Link href="/contact" onClick={handleLinkClick} className="block w-full">
                  <button className="w-full bg-[#059669] text-white font-black uppercase tracking-[0.15em] text-sm h-14 rounded-2xl transition-all duration-300 shadow-[0_4px_20px_rgba(5,150,105,0.25)] hover:bg-[#10B981]">
                    Start a Project
                  </button>
                </Link>
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#52605B] text-center">
                  SaaS Development · Kenya & Global
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
