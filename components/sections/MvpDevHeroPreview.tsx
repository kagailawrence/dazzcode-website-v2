"use client";

import { useState } from "react";
import {
  Rocket,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Layers,
  ArrowRight,
  Sparkles,
  Smartphone,
  Laptop,
  CreditCard,
  Database,
  BarChart3,
  Users,
  Activity,
  Server,
  Lock,
  RefreshCw,
  Clock,
  ChevronRight,
  TrendingUp,
  Cpu
} from "lucide-react";

export default function MvpDevHeroPreview() {
  const [activeTab, setActiveTab] = useState<"saas" | "webapp" | "ai" | "mobile">("saas");

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-12">
      {/* Decorative gradient glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-[#059669]/20 via-[#10B981]/20 to-[#047857]/20 rounded-3xl blur-xl opacity-60 pointer-events-none" />

      {/* Main Container */}
      <div className="relative rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xl overflow-hidden text-[#12201B]">
        {/* Browser Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-[#F8FAF9] border-b border-[#E2EAE6]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
            <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
            <div className="w-3 h-3 rounded-full bg-[#10B981]/80" />
            <span className="ml-2 text-xs font-mono text-[#52615B] hidden sm:inline">
              https://app.dazzcode.com/mvp-demo
            </span>
          </div>

          {/* Interactive Mode Switcher */}
          <div className="flex items-center gap-1 bg-[#FFFFFF] p-1 rounded-xl border border-[#E2EAE6] text-xs font-medium">
            <button
              onClick={() => setActiveTab("saas")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "saas"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <Rocket className="w-3.5 h-3.5" />
              <span>SaaS MVP</span>
            </button>
            <button
              onClick={() => setActiveTab("webapp")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "webapp"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              <span>Web App MVP</span>
            </button>
            <button
              onClick={() => setActiveTab("ai")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "ai"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>AI MVP</span>
            </button>
            <button
              onClick={() => setActiveTab("mobile")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "mobile"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile-First</span>
            </button>
          </div>
        </div>

        {/* Dynamic Mockup Body */}
        <div className="p-6 md:p-8 bg-[#FAFCFB]">
          {/* TAB 1: SaaS MVP DASHBOARD */}
          {activeTab === "saas" && (
            <div className="space-y-6">
              {/* Header inside mockup */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2EAE6]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#059669]">
                      SaaS MVP · Phase 1 Launch
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] text-[10px] font-semibold border border-[#059669]/20">
                      Live in Production
                    </span>
                  </div>
                  <h4 className="text-lg font-black text-[#12201B] mt-1">
                    B2B Invoicing & M-Pesa Subscription Engine
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-mono text-[#52615B] flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5 text-[#059669]" />
                    <span>PostgreSQL Multi-tenant</span>
                  </div>
                </div>
              </div>

              {/* Metric KPI cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
                  <div className="flex items-center justify-between text-[#52615B] text-xs mb-1">
                    <span>Monthly MRR</span>
                    <TrendingUp className="w-3.5 h-3.5 text-[#059669]" />
                  </div>
                  <div className="text-xl font-black text-[#12201B]">KSh 384,500</div>
                  <div className="text-[11px] text-[#059669] font-medium mt-1">
                    ↑ 32% active subscriber growth
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
                  <div className="flex items-center justify-between text-[#52615B] text-xs mb-1">
                    <span>Active Organizations</span>
                    <Users className="w-3.5 h-3.5 text-[#059669]" />
                  </div>
                  <div className="text-xl font-black text-[#12201B]">48 Accounts</div>
                  <div className="text-[11px] text-[#52615B] font-medium mt-1">
                    Role-based access (RBAC)
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
                  <div className="flex items-center justify-between text-[#52615B] text-xs mb-1">
                    <span>M-Pesa STK Push</span>
                    <CreditCard className="w-3.5 h-3.5 text-[#059669]" />
                  </div>
                  <div className="text-xl font-black text-[#12201B]">99.4% Success</div>
                  <div className="text-[11px] text-[#059669] font-medium mt-1">
                    Automated webhook sync
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
                  <div className="flex items-center justify-between text-[#52615B] text-xs mb-1">
                    <span>API Latency</span>
                    <Zap className="w-3.5 h-3.5 text-[#059669]" />
                  </div>
                  <div className="text-xl font-black text-[#12201B]">42 ms</div>
                  <div className="text-[11px] text-[#059669] font-medium mt-1">
                    Next.js Edge + Linux VPS
                  </div>
                </div>
              </div>

              {/* Core Workflow Pipeline View */}
              <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#12201B]">
                    Validated User Journey (Scope-Engineered)
                  </span>
                  <span className="text-xs font-mono text-[#059669]">MVP Scope: 4 Core Steps</span>
                </div>
                <div className="grid sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="font-bold text-[#12201B] mb-1">1. User Onboarding</div>
                    <div className="text-[#52615B] text-[11px]">Email magic link + team workspace setup</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="font-bold text-[#12201B] mb-1">2. Core Action</div>
                    <div className="text-[#52615B] text-[11px]">Create quote / dispatch electronic invoice</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="font-bold text-[#12201B] mb-1">3. M-Pesa Checkout</div>
                    <div className="text-[#52615B] text-[11px]">Instant STK push prompt to customer phone</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#ECFDF5] border border-[#059669]/30">
                    <div className="font-bold text-[#059669] mb-1">4. Instant Settlement</div>
                    <div className="text-[#047857] text-[11px]">PDF receipt generated & database reconciled</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: WEB APPLICATION MVP */}
          {activeTab === "webapp" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2EAE6]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#059669]">
                      Web Application MVP · Internal Operations
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] text-[10px] font-semibold border border-[#059669]/20">
                      Replaces Spreadsheets
                    </span>
                  </div>
                  <h4 className="text-lg font-black text-[#12201B] mt-1">
                    Multi-Branch Inventory & Order Dispatch System
                  </h4>
                </div>
                <div className="text-xs font-mono text-[#52615B] bg-[#FFFFFF] px-3 py-1.5 rounded-lg border border-[#E2EAE6]">
                  Branches: Nairobi CBD · Westlands · Mombasa
                </div>
              </div>

              {/* Operational Dispatch Table */}
              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-[#E2EAE6] text-[#52615B] font-mono">
                      <th className="pb-3 font-semibold">Dispatch ID</th>
                      <th className="pb-3 font-semibold">Client / Business</th>
                      <th className="pb-3 font-semibold">Destination</th>
                      <th className="pb-3 font-semibold">Amount (KES)</th>
                      <th className="pb-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2EAE6]">
                    <tr>
                      <td className="py-3 font-mono font-bold text-[#12201B]">#DSP-9482</td>
                      <td className="py-3 text-[#12201B]">Kifaru Logistics Ltd</td>
                      <td className="py-3 text-[#52615B]">Mombasa Port Hub</td>
                      <td className="py-3 font-mono font-bold text-[#12201B]">KSh 85,000</td>
                      <td className="py-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] text-[10px] font-bold">
                          In Transit
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 font-mono font-bold text-[#12201B]">#DSP-9481</td>
                      <td className="py-3 text-[#12201B]">Nairobi Fresh Distributors</td>
                      <td className="py-3 text-[#52615B]">Industrial Area Depot</td>
                      <td className="py-3 font-mono font-bold text-[#12201B]">KSh 42,300</td>
                      <td className="py-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] text-[10px] font-bold">
                          Delivered
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 font-mono font-bold text-[#12201B]">#DSP-9480</td>
                      <td className="py-3 text-[#12201B]">Savannah Agro Supplies</td>
                      <td className="py-3 text-[#52615B]">Nakuru Central Depot</td>
                      <td className="py-3 font-mono font-bold text-[#12201B]">KSh 128,000</td>
                      <td className="py-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#EFF6FF] text-[#2563EB] text-[10px] font-bold">
                          Awaiting M-Pesa
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-xl bg-[#ECFDF5] border border-[#059669]/20 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#047857]">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#059669]" />
                  <span>Eliminated 12+ daily manual phone calls and WhatsApp inventory inquiries</span>
                </div>
                <span className="font-mono font-bold text-[#059669]">MVP Launch: 4 Weeks</span>
              </div>
            </div>
          )}

          {/* TAB 3: AI MVP */}
          {activeTab === "ai" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2EAE6]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#059669]">
                      AI MVP · Fast Validation
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] text-[10px] font-semibold border border-[#059669]/20">
                      LLM + Retrieval Engine
                    </span>
                  </div>
                  <h4 className="text-lg font-black text-[#12201B] mt-1">
                    AI Lead Qualification & WhatsApp Auto-Responder
                  </h4>
                </div>
                <div className="flex items-center gap-1 text-xs font-mono text-[#059669] bg-[#FFFFFF] px-3 py-1.5 rounded-lg border border-[#E2EAE6]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>OpenAI / Anthropic + Vector DB</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#52615B] mb-2 font-bold">
                    Incoming Customer Message (WhatsApp)
                  </div>
                  <div className="p-3 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6] text-[#12201B] italic">
                    &quot;Hi, I need 50 units of solar batteries delivered to Eldoret next Tuesday. What is the total cost with VAT and can I pay via Lipa na M-Pesa?&quot;
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#059669]/30 shadow-xs">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#059669] mb-2 font-bold flex items-center justify-between">
                    <span>AI Context Reasoning & Response</span>
                    <span className="text-[10px] font-normal text-[#52615B]">Latency: 1.2s</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#ECFDF5] text-[#12201B] text-[11px] leading-relaxed">
                    &quot;Hello! 50 Solar Units to Eldoret come to KSh 245,000 (inclusive of 16% VAT and transit insurance). We can dispatch by Monday. Tap below to receive an instant M-Pesa STK prompt.&quot;
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="font-medium text-[#12201B]">Real-time RAG Pipeline Connected to Product Inventory</span>
                </div>
                <span className="text-[#52615B] font-mono text-[11px]">Zero Hallucination Guardrails</span>
              </div>
            </div>
          )}

          {/* TAB 4: MOBILE-FIRST PREVIEW */}
          {activeTab === "mobile" && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 py-4">
              {/* Phone Mockup Frame */}
              <div className="w-64 rounded-3xl bg-[#FFFFFF] border-4 border-[#12201B] shadow-2xl p-3">
                <div className="w-20 h-3 bg-[#12201B] rounded-full mx-auto mb-3" />
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-[#ECFDF5] border border-[#059669]/20">
                    <span className="text-[10px] font-mono font-bold text-[#059669] block">PAYMENT PROMPT</span>
                    <div className="font-bold text-[#12201B] mt-0.5">Pay KSh 4,500 to Dazzcode</div>
                    <div className="text-[10px] text-[#52615B]">Safaricom Daraja STK Push</div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="text-[10px] text-[#52615B]">Enter M-Pesa PIN on your SIM</div>
                    <div className="text-center font-mono font-bold tracking-widest text-[#12201B] py-2">
                      ••••
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#059669] text-white text-center font-bold text-[11px]">
                    Confirm Payment (100% Mobile Ready)
                  </div>
                </div>
              </div>

              {/* Supporting Highlights */}
              <div className="max-w-md space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF5] text-[#059669] text-xs font-mono font-bold">
                  <span>Kenya Mobile-First Architecture</span>
                </div>
                <h4 className="text-2xl font-black text-[#12201B] tracking-tight">
                  Designed for 75%+ Mobile Traffic
                </h4>
                <p className="text-sm text-[#52615B] leading-relaxed">
                  In Kenya, startup users, buyers, and field teams access software primarily on smartphones. Every MVP we engineer is touch-optimized, lightweight, and tested on 4G networks.
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                  <div className="flex items-center gap-2 text-[#12201B] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Lipa na M-Pesa STK</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#12201B] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>WhatsApp Deep-links</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#12201B] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Fast 3G/4G Loading</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#12201B] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Zero App Store Delay</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mockup Footer Micro-copy */}
        <div className="px-6 py-3 bg-[#FFFFFF] border-t border-[#E2EAE6] flex flex-wrap items-center justify-between text-xs text-[#52615B]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>Production-Grade Next.js + PostgreSQL</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">100% Intellectual Property Ownership</span>
          </div>
          <span className="font-mono text-[#059669] font-semibold">Launch Sprint: 4 to 8 Weeks</span>
        </div>
      </div>
    </div>
  );
}
