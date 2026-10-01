"use client";

import { useState } from "react";
import {
  Globe,
  Layout,
  Layers,
  Zap,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Smartphone,
  CreditCard,
  Users,
  Database,
  ArrowRight,
  Sparkles,
  Server
} from "lucide-react";

type TabKey = "webapp" | "website" | "speed";

export default function WebDevHeroPreview() {
  const [activeTab, setActiveTab] = useState<TabKey>("webapp");

  return (
    <div className="w-full relative group">
      {/* Ambient Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#059669]/20 via-[#10B981]/15 to-[#059669]/10 rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-90 transition duration-700 pointer-events-none" />

      {/* Main Container Window */}
      <div className="relative rounded-[2rem] border border-[#E2EAE6] bg-[#FFFFFF] shadow-2xl overflow-hidden text-left">
        {/* Top Window Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#E2EAE6] px-5 py-3.5 bg-[#F8FAF9] gap-3">
          {/* Window control dots */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400 border border-red-300" />
            <div className="w-3 h-3 rounded-full bg-amber-400 border border-amber-300" />
            <div className="w-3 h-3 rounded-full bg-[#10B981] border border-[#059669]/30" />
            <span className="ml-3 text-[11px] font-mono font-bold tracking-wider text-[#52615B] uppercase flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
              app.yourbusiness.co.ke · Production Live
            </span>
          </div>

          {/* Tab Switchers */}
          <div className="flex items-center bg-[#FFFFFF] rounded-xl p-1 border border-[#E2EAE6] text-xs shadow-xs">
            <button
              onClick={() => setActiveTab("webapp")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                activeTab === "webapp"
                  ? "bg-[#059669] text-white font-bold shadow-xs"
                  : "text-[#52615B] hover:text-[#12201B]"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Custom Web Application</span>
            </button>
            <button
              onClick={() => setActiveTab("website")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                activeTab === "website"
                  ? "bg-[#059669] text-white font-bold shadow-xs"
                  : "text-[#52615B] hover:text-[#12201B]"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Business Website</span>
            </button>
            <button
              onClick={() => setActiveTab("speed")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                activeTab === "speed"
                  ? "bg-[#059669] text-white font-bold shadow-xs"
                  : "text-[#52615B] hover:text-[#12201B]"
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Speed & SEO Score</span>
            </button>
          </div>
        </div>

        {/* View Body */}
        <div className="p-5 md:p-6 min-h-[400px] flex flex-col justify-between bg-[#FFFFFF]">
          {/* TAB 1: CUSTOM WEB APPLICATION DASHBOARD */}
          {activeTab === "webapp" && (
            <div className="space-y-5 animate-reveal">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E2EAE6]">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-[#12201B] tracking-tight">
                      Operational Management & Client Portal
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] border border-[#10B981]/30 text-[10px] font-mono text-[#059669] font-bold">
                      Multi-Role RBAC Active
                    </span>
                  </div>
                  <p className="text-xs text-[#52615B] mt-0.5">
                    Custom web application replacing spreadsheets with structured databases and role permissions.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono bg-[#F8FAF9] px-3 py-1.5 rounded-lg border border-[#E2EAE6] text-[#059669] font-medium">
                  <Database className="w-3.5 h-3.5 text-[#059669]" />
                  <span>PostgreSQL Database · Sub-30ms Query</span>
                </div>
              </div>

              {/* Metric Cards Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <p className="text-[10px] font-mono uppercase text-[#52615B]">Active Workflows</p>
                  <p className="text-xl font-black text-[#12201B] tracking-tight mt-1">1,420</p>
                  <span className="text-[10px] font-bold text-[#059669] flex items-center gap-0.5 mt-0.5">
                    <TrendingUp className="w-3 h-3" /> 100% Automated
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <p className="text-[10px] font-mono uppercase text-[#52615B]">Staff Users</p>
                  <p className="text-xl font-black text-[#12201B] tracking-tight mt-1">24 Active</p>
                  <span className="text-[10px] font-mono text-[#52615B] mt-0.5 block">
                    Zero per-seat fees
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <p className="text-[10px] font-mono uppercase text-[#52615B]">Today&apos;s Revenue</p>
                  <p className="text-xl font-black text-[#12201B] tracking-tight mt-1">KSh 184,200</p>
                  <span className="text-[10px] font-bold text-[#059669] mt-0.5 block">
                    M-Pesa Daraja settled
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <p className="text-[10px] font-mono uppercase text-[#52615B]">Sync Latency</p>
                  <p className="text-xl font-black text-[#12201B] tracking-tight mt-1">18 ms</p>
                  <span className="text-[10px] font-mono text-[#059669] font-bold mt-0.5 block">
                    Real-time WebSocket
                  </span>
                </div>
              </div>

              {/* Operational Stream Box */}
              <div className="rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] p-4 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#52615B] border-b border-[#E2EAE6] pb-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#059669] font-bold">
                    ⚡ Live Activity Ledger (User Actions & Transactions)
                  </span>
                  <span className="text-[10px] font-mono text-[#52615B]">Branch: Nairobi Central</span>
                </div>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between bg-[#FFFFFF] p-2.5 rounded-lg border border-[#E2EAE6]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                      <span className="font-bold text-[#12201B]">Client Booking #BK-9021</span>
                      <span className="text-[#52615B] hidden sm:inline">(Consultation scheduled with Dr. Kariuki)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-[#059669]">KSh 5,000</span>
                      <span className="px-2 py-0.5 rounded bg-[#ECFDF5] text-[#059669] font-bold text-[10px]">Confirmed</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-[#FFFFFF] p-2.5 rounded-lg border border-[#E2EAE6]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                      <span className="font-bold text-[#12201B]">Inventory Transfer #TR-442</span>
                      <span className="text-[#52615B] hidden sm:inline">(Warehouse A → Mombasa Depot: 150 units)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#52615B]">Dispatched</span>
                      <span className="px-2 py-0.5 rounded bg-[#ECFDF5] text-[#059669] font-bold text-[10px]">In Transit</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-mono text-[#52615B]">
                <span className="text-[#12201B] font-semibold">System Capabilities:</span>
                {["Client Accounts", "Staff Roles (RBAC)", "Custom Reports", "PDF Invoices", "M-Pesa Webhooks", "SMS Dispatch"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-[#F8FAF9] border border-[#E2EAE6] text-[#12201B]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: BUSINESS WEBSITE SHOWCASE */}
          {activeTab === "website" && (
            <div className="space-y-5 animate-reveal">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E2EAE6]">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-[#12201B] tracking-tight">
                      Modern Business Website & Conversion Funnel
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] border border-[#10B981]/30 text-[10px] font-mono text-[#059669] font-bold">
                      Conversion Optimized
                    </span>
                  </div>
                  <p className="text-xs text-[#52615B] mt-0.5">
                    Clear service presentation, mobile lead capture, and instant WhatsApp reachout for Kenyan customers.
                  </p>
                </div>
                <div className="text-[11px] font-mono bg-[#F8FAF9] px-3 py-1.5 rounded-lg border border-[#E2EAE6] text-[#059669] font-medium">
                  <span>Starting From KSh 25,000</span>
                </div>
              </div>

              {/* Website Preview Showcase Grid */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold text-xs">
                    01
                  </div>
                  <h4 className="font-bold text-xs text-[#12201B]">High-Trust Hero</h4>
                  <p className="text-[11px] text-[#52615B] leading-relaxed">
                    Compelling value proposition that communicates what your business does within 3 seconds.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold text-xs">
                    02
                  </div>
                  <h4 className="font-bold text-xs text-[#12201B]">Service Cards & Pricing</h4>
                  <p className="text-[11px] text-[#52615B] leading-relaxed">
                    Structured service offerings with clear deliverables that answer customer questions upfront.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold text-xs">
                    03
                  </div>
                  <h4 className="font-bold text-xs text-[#12201B]">WhatsApp & Form Leads</h4>
                  <p className="text-[11px] text-[#52615B] leading-relaxed">
                    Frictionless contact points allowing Kenyan buyers to connect instantly via WhatsApp or email.
                  </p>
                </div>
              </div>

              {/* Visual Mock Card */}
              <div className="p-4 rounded-2xl bg-[#ECFDF5] border border-[#10B981]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <div className="space-y-1 text-center sm:text-left">
                  <strong className="text-[#12201B] block">Need a website that turns visitors into paying clients?</strong>
                  <span className="text-[#52615B]">We build responsive websites styled to your brand with fast mobile loading.</span>
                </div>
                <span className="px-4 py-2 rounded-xl bg-[#059669] text-white font-bold text-[11px] shrink-0">
                  Ready in 5–10 Days
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-mono text-[#52615B]">
                <span className="text-[#12201B] font-semibold">Included Pages:</span>
                {["Home", "About", "Services", "Portfolio / Work", "Blog", "Contact & Map", "WhatsApp Trigger"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-[#F8FAF9] border border-[#E2EAE6] text-[#12201B]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SPEED & TECHNICAL SEO SCORE */}
          {activeTab === "speed" && (
            <div className="space-y-5 animate-reveal">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E2EAE6]">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-[#12201B] tracking-tight">
                      Lighthouse Performance & Search Indexing
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] border border-[#10B981]/30 text-[10px] font-mono text-[#059669] font-bold">
                      Google PageSpeed: 99 / 100
                    </span>
                  </div>
                  <p className="text-xs text-[#52615B] mt-0.5">
                    Fast mobile loading on 4G/3G Kenyan networks with clean semantic HTML for Google ranking.
                  </p>
                </div>
                <div className="text-[11px] font-mono bg-[#F8FAF9] px-3 py-1.5 rounded-lg border border-[#E2EAE6] text-[#059669] font-medium">
                  <span>Server TTFB: 120ms</span>
                </div>
              </div>

              {/* Metric Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <p className="text-[10px] font-mono uppercase text-[#52615B]">Mobile Load Time</p>
                  <p className="text-xl font-black text-[#12201B] tracking-tight mt-1">0.75s</p>
                  <span className="text-[10px] font-bold text-[#059669] mt-0.5 block">Sub-1s Target Met</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <p className="text-[10px] font-mono uppercase text-[#52615B]">Core Web Vitals</p>
                  <p className="text-xl font-black text-[#12201B] tracking-tight mt-1">Passed</p>
                  <span className="text-[10px] font-mono text-[#059669] mt-0.5 block">LCP 0.8s · CLS 0.0</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <p className="text-[10px] font-mono uppercase text-[#52615B]">Schema Markup</p>
                  <p className="text-xl font-black text-[#12201B] tracking-tight mt-1">100% Valid</p>
                  <span className="text-[10px] font-bold text-[#059669] mt-0.5 block">LocalBusiness / Service</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <p className="text-[10px] font-mono uppercase text-[#52615B]">Security Score</p>
                  <p className="text-xl font-black text-[#12201B] tracking-tight mt-1">A+ Grade</p>
                  <span className="text-[10px] font-mono text-[#059669] font-bold mt-0.5 block">HTTPS & CSP Headers</span>
                </div>
              </div>

              {/* Optimization Standards */}
              <div className="rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] p-4 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#059669] font-bold">📋 Engineering Standards on Every Project</span>
                  <span className="text-[#52615B]">Production Grade</span>
                </div>
                <div className="space-y-1.5 text-xs text-[#52615B]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                    <span>Next.js App Router with Server-Side Rendering (SSR) for instant SEO crawlability.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                    <span>PostgreSQL database indexing and connection pooling for zero bottlenecks under heavy user traffic.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                    <span>Automated responsive WebP image optimization and minified CSS bundles.</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-mono text-[#52615B]">
                <span className="text-[#12201B] font-semibold">Tech Stack:</span>
                {["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "Node.js", "Docker", "Linux VPS"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-[#F8FAF9] border border-[#E2EAE6] text-[#12201B]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Window Footer */}
        <div className="px-5 py-3 border-t border-[#E2EAE6] bg-[#F8FAF9] flex flex-wrap items-center justify-between text-[11px] text-[#52615B] gap-2">
          <div className="flex items-center gap-3 font-mono">
            <span className="flex items-center gap-1 text-[#059669] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
              Kenya Web Engineering
            </span>
            <span>Websites · Custom Web Apps · M-Pesa · VPS Deployment</span>
          </div>
          <div className="font-mono text-[#12201B] font-medium">
            Engineered by Dazzcode in Nairobi, Kenya
          </div>
        </div>
      </div>
    </div>
  );
}
