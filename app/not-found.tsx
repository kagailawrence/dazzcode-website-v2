import Link from "next/link";
import { ArrowLeft, Home, Compass, Terminal, ShieldAlert, ArrowRight, Layers, FileCode, PhoneCall } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Dazzcode",
  description: "The requested route or resource could not be found on Dazzcode.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  const quickLinks = [
    {
      title: "Custom SaaS Development",
      desc: "Full-stack Next.js & Node.js product engineering",
      href: "/services",
      icon: Layers,
    },
    {
      title: "SaaS MVP Development",
      desc: "Launch your investor-ready MVP in 4–6 weeks",
      href: "/services/saas-mvp",
      icon: Compass,
    },
    {
      title: "SaaS Code Audit & Security",
      desc: "Deep architectural and database security review",
      href: "/services/saas-audit",
      icon: FileCode,
    },
    {
      title: "Book a Strategy Call",
      desc: "Discuss your SaaS roadmap with senior engineers",
      href: "/contact",
      icon: PhoneCall,
    },
  ];

  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-center py-20 px-4 sm:px-6 relative overflow-hidden bg-[#F8FAF9]">
      {/* Background radial accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.05) 50%, transparent 70%)" }}
      />

      <div className="container max-w-3xl mx-auto text-center relative z-10">
  
     

        {/* 404 Large Display */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-black text-[#12201B] tracking-tight font-mono mb-4 selection:bg-[#ECFDF5]">
          4<span className="text-[#059669]">0</span>4
        </h1>

        {/* Main Headings */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#12201B] tracking-tight mb-4">
          This endpoint doesn&apos;t exist.
        </h2>
        <p className="text-base sm:text-lg text-[#52615B] max-w-xl mx-auto mb-10 leading-relaxed">
          The route you requested may have been refactored, moved, or deleted during our continuous deployment cycle.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-[#059669] text-[#FFFFFF] font-bold text-sm shadow-sm hover:bg-[#047857] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Home className="w-4 h-4" />
            Return to Homepage
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] text-[#12201B] font-bold text-sm shadow-xs hover:border-[#059669]/40 hover:text-[#059669] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Browse SaaS Services
          </Link>
        </div>

        {/* Quick Directory Grid */}
        <div className="text-left">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#52615B] text-center mb-4">
            Popular Verified Endpoints
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-start gap-3 p-3.5 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] hover:border-[#059669]/40 transition-all hover:shadow-xs"
                >
                  <div className="p-2 rounded-md bg-[#ECFDF5] text-[#059669] group-hover:bg-[#059669] group-hover:text-[#FFFFFF] transition-colors mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-bold text-[#12201B] group-hover:text-[#059669] transition-colors">
                        {item.title}
                      </h3>
                      <ArrowRight className="w-3 h-3 text-[#52615B] group-hover:text-[#059669] transition-transform group-hover:translate-x-0.5" />
                    </div>
                    <p className="text-[11px] text-[#52615B] truncate mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
