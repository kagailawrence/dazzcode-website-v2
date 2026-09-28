"use client";

import { useState } from "react";
import {
  ShoppingCart,
  ShieldCheck,
  Wifi,
  TrendingUp,
  Sparkles,
  CheckCircle2
} from "lucide-react";

type TabKey = "dazzpos" | "ai-automation" | "saas-health";

export default function HeroProductPreview() {
  const [activeTab, setActiveTab] = useState<TabKey>("dazzpos");

  return (
    <div className="w-full relative group">
      {/* Ambient background glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#059669]/20 via-[#10B981]/15 to-[#059669]/10 rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-90 transition duration-700 pointer-events-none" />

      {/* Main Container Window */}
      <div className="relative rounded-[2rem] border border-[#E1E7E4] bg-[#FFFFFF] shadow-2xl overflow-hidden text-left">
        {/* Top Window Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#E1E7E4] px-5 py-3.5 bg-[#F8FAF9] gap-3">
          {/* Mac-style window controls */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400 border border-red-300" />
            <div className="w-3 h-3 rounded-full bg-amber-400 border border-amber-300" />
            <div className="w-3 h-3 rounded-full bg-[#10B981] border border-[#059669]/30" />
            <span className="ml-3 text-[11px] font-mono font-bold tracking-wider text-[#52605B] uppercase flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
              dazzcode.cloud · v2.6.4
            </span>
          </div>

          {/* Tab Switchers */}
          <div className="flex items-center bg-[#FFFFFF] rounded-xl p-1 border border-[#E1E7E4] text-xs shadow-sm">
            <button
              onClick={() => setActiveTab("dazzpos")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                activeTab === "dazzpos"
                  ? "bg-[#059669] text-white font-bold shadow-sm"
                  : "text-[#52605B] hover:text-[#0F172A]"
              }`}
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>DazzPOS Engine</span>
            </button>
            <button
              onClick={() => setActiveTab("ai-automation")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                activeTab === "ai-automation"
                  ? "bg-[#059669] text-white font-bold shadow-sm"
                  : "text-[#52605B] hover:text-[#0F172A]"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Automation</span>
            </button>
            <button
              onClick={() => setActiveTab("saas-health")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                activeTab === "saas-health"
                  ? "bg-[#059669] text-white font-bold shadow-sm"
                  : "text-[#52605B] hover:text-[#0F172A]"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>SaaS Audit</span>
            </button>
          </div>
        </div>

        {/* View Body */}
        <div className="p-5 md:p-6 min-h-[380px] flex flex-col justify-between bg-[#FFFFFF]">
          {activeTab === "dazzpos" && (
            <div className="space-y-5 animate-reveal">
              {/* Product Header Strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E1E7E4]">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-[#0F172A] tracking-tight">DazzPOS Retail Dashboard</h3>
                    <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[10px] font-mono text-[#059669] font-bold">
                      Offline-First Mode
                    </span>
                  </div>
                  <p className="text-xs text-[#52605B] mt-0.5">
                    Live branch: <span className="text-[#0F172A] font-medium">Nairobi Flagship & Multi-Store Network</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono bg-[#F8FAF9] px-3 py-1.5 rounded-lg border border-[#E1E7E4] text-[#059669] font-medium">
                  <Wifi className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Sync Queue: 0 pending (100% Live)</span>
                </div>
              </div>

              {/* Metric Cards Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E1E7E4]">
                  <p className="text-[10px] font-mono uppercase text-[#52605B]">Today&apos;s Sales</p>
                  <p className="text-xl font-black text-[#0F172A] tracking-tight mt-1">$28,450</p>
                  <span className="text-[10px] font-bold text-[#059669] flex items-center gap-0.5 mt-0.5">
                    <TrendingUp className="w-3 h-3" /> +22.4% vs avg
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E1E7E4]">
                  <p className="text-[10px] font-mono uppercase text-[#52605B]">Transactions</p>
                  <p className="text-xl font-black text-[#0F172A] tracking-tight mt-1">1,248</p>
                  <span className="text-[10px] font-mono text-[#52605B] mt-0.5 block">
                    Avg scan: 24ms
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E1E7E4]">
                  <p className="text-[10px] font-mono uppercase text-[#52605B]">Active Lanes</p>
                  <p className="text-xl font-black text-[#0F172A] tracking-tight mt-1">18 / 18</p>
                  <span className="text-[10px] font-bold text-[#059669] mt-0.5 block">
                    Zero checkout delay
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E1E7E4]">
                  <p className="text-[10px] font-mono uppercase text-[#52605B]">Payments</p>
                  <p className="text-xl font-black text-[#0F172A] tracking-tight mt-1">Card / M-Pesa</p>
                  <span className="text-[10px] font-mono text-[#52605B] mt-0.5 block">
                    Sub-second webhook
                  </span>
                </div>
              </div>

              {/* Live Terminal / Checkout Queue Simulation */}
              <div className="rounded-xl bg-[#F8FAF9] border border-[#E1E7E4] p-4 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#52605B] border-b border-[#E1E7E4] pb-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#059669] font-bold">
                    ⚡ Live Transaction Stream (Local SQLite ⇄ Cloud Postgres)
                  </span>
                  <span className="text-[10px] font-mono text-[#52605B]">Latency: 14ms</span>
                </div>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between bg-[#FFFFFF] p-2.5 rounded-lg border border-[#E1E7E4] shadow-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                      <span className="text-[#0F172A] font-semibold">Lane #4 · Barcode SKU-8902</span>
                      <span className="text-[#52605B] hidden sm:inline">(3 items: Inventory auto-decremented)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#059669] font-bold">$142.50</span>
                      <span className="px-1.5 py-0.5 rounded bg-[#ECFDF5] text-[#059669] font-bold text-[10px]">Settled</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-[#FFFFFF] p-2.5 rounded-lg border border-[#E1E7E4] shadow-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                      <span className="text-[#0F172A] font-semibold">Lane #2 · M-Pesa Instant Push</span>
                      <span className="text-[#52605B] hidden sm:inline">(Receipt #TX-9842 dispatched)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#059669] font-bold">$380.00</span>
                      <span className="px-1.5 py-0.5 rounded bg-[#ECFDF5] text-[#059669] font-bold text-[10px]">Settled</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Tags Bar */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-mono text-[#52605B]">
                <span className="text-[#0F172A] font-semibold">Core Modules:</span>
                {["Sales", "Inventory", "Branches", "Payments", "Reporting"].map((module) => (
                  <span key={module} className="px-2.5 py-1 rounded-md bg-[#F8FAF9] border border-[#E1E7E4] text-[#0F172A] font-medium">
                    {module}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === "ai-automation" && (
            <div className="space-y-5 animate-reveal">
              {/* Product Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E1E7E4]">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-[#0F172A] tracking-tight">AI Lead & Workflow Engine</h3>
                    <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[10px] font-mono text-[#059669] font-bold">
                      Automated Pipeline
                    </span>
                  </div>
                  <p className="text-xs text-[#52605B] mt-0.5">
                    Continuous lead ingestion, intent classification, and CRM enrichment
                  </p>
                </div>
                <div className="text-[11px] font-mono bg-[#F8FAF9] px-3 py-1.5 rounded-lg border border-[#E1E7E4] text-[#059669] font-medium">
                  <span>Avg Response: 45s (vs 4h manual)</span>
                </div>
              </div>

              {/* Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E1E7E4]">
                  <p className="text-[10px] font-mono uppercase text-[#52605B]">Leads Processed (7d)</p>
                  <p className="text-xl font-black text-[#0F172A] tracking-tight mt-1">2,840</p>
                  <span className="text-[10px] font-bold text-[#059669] mt-0.5 block">
                    99.4% Qualification Match
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E1E7E4]">
                  <p className="text-[10px] font-mono uppercase text-[#52605B]">Sales Conversion</p>
                  <p className="text-xl font-black text-[#0F172A] tracking-tight mt-1">+38.2%</p>
                  <span className="text-[10px] font-mono text-[#52605B] mt-0.5 block">
                    Instant automated followups
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E1E7E4] col-span-2 sm:col-span-1">
                  <p className="text-[10px] font-mono uppercase text-[#52605B]">Manual Hours Saved</p>
                  <p className="text-xl font-black text-[#0F172A] tracking-tight mt-1">120 hrs/mo</p>
                  <span className="text-[10px] font-bold text-[#059669] mt-0.5 block">
                    Zero human bottleneck
                  </span>
                </div>
              </div>

              {/* Live Flow Diagram / Simulation */}
              <div className="rounded-xl bg-[#F8FAF9] border border-[#E1E7E4] p-4 space-y-3">
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#059669] font-bold">
                  ⚡ Autonomous Lead Routing Loop
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#E1E7E4] shadow-xs">
                    <span className="text-[#059669] font-bold block mb-1">01 · Ingest</span>
                    <span className="text-[#52605B] text-[11px]">Inbound form / WhatsApp / Webhook parsed & sanitized</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#E1E7E4] shadow-xs">
                    <span className="text-[#059669] font-bold block mb-1">02 · Analyze & Score</span>
                    <span className="text-[#52605B] text-[11px]">LLM intent & budget scoring against qualification rules</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#E1E7E4] shadow-xs">
                    <span className="text-[#059669] font-bold block mb-1">03 · Execute</span>
                    <span className="text-[#52605B] text-[11px]">Calendar link sent, CRM deal created & Slack alert fired</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-mono text-[#52605B]">
                <span className="text-[#0F172A] font-semibold">Integrations:</span>
                {["OpenAI / Claude", "HubSpot & CRM", "Slack Alerts", "Stripe Webhooks", "Postgres Vector"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-[#F8FAF9] border border-[#E1E7E4] text-[#0F172A]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === "saas-health" && (
            <div className="space-y-5 animate-reveal">
              {/* Product Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E1E7E4]">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-[#0F172A] tracking-tight">SaaS Codebase & Architecture Health</h3>
                    <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[10px] font-mono text-[#059669] font-bold">
                      Audit Status: Optimal
                    </span>
                  </div>
                  <p className="text-xs text-[#52605B] mt-0.5">
                    Automated architecture scans, query benchmarks, and dependency audits
                  </p>
                </div>
                <div className="text-[11px] font-mono bg-[#F8FAF9] px-3 py-1.5 rounded-lg border border-[#E1E7E4] text-[#059669] font-medium">
                  <span>Architecture Score: 98 / 100</span>
                </div>
              </div>

              {/* Diagnostic Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E1E7E4]">
                  <p className="text-[10px] font-mono uppercase text-[#52605B]">P95 API Latency</p>
                  <p className="text-xl font-black text-[#0F172A] tracking-tight mt-1">42 ms</p>
                  <span className="text-[10px] font-bold text-[#059669] mt-0.5 block">Sub-100ms Target Met</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E1E7E4]">
                  <p className="text-[10px] font-mono uppercase text-[#52605B]">Security Vulnerabilities</p>
                  <p className="text-xl font-black text-[#0F172A] tracking-tight mt-1">0 Found</p>
                  <span className="text-[10px] font-mono text-[#059669] mt-0.5 block">OWASP Top 10 Clear</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E1E7E4]">
                  <p className="text-[10px] font-mono uppercase text-[#52605B]">Database Indices</p>
                  <p className="text-xl font-black text-[#0F172A] tracking-tight mt-1">100% 3NF</p>
                  <span className="text-[10px] font-bold text-[#059669] mt-0.5 block">Zero N+1 Query Scans</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E1E7E4]">
                  <p className="text-[10px] font-mono uppercase text-[#52605B]">Test Coverage</p>
                  <p className="text-xl font-black text-[#0F172A] tracking-tight mt-1">94.2%</p>
                  <span className="text-[10px] font-mono text-[#52605B] mt-0.5 block">Jest & Cypress E2E</span>
                </div>
              </div>

              {/* Audit Findings Action Box */}
              <div className="rounded-xl bg-[#F8FAF9] border border-[#E1E7E4] p-4 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#059669] font-bold">📋 Immediate Optimization Outcomes</span>
                  <span className="text-[#52605B]">Ready for Due Diligence</span>
                </div>
                <div className="space-y-1.5 text-xs text-[#52605B]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                    <span>Eliminated redundant ORM joins & added partial indices — reduced CPU usage by 65%.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                    <span>Configured Redis caching & edge compute — collapsed global TTFB to under 50ms.</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-mono text-[#52605B]">
                <span className="text-[#0F172A] font-semibold">Deliverables:</span>
                {["Full Architecture Map", "Security Due Diligence", "Refactoring Roadmap", "Fixed-Price Action Plan"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-[#F8FAF9] border border-[#E1E7E4] text-[#0F172A]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Window Footer */}
        <div className="px-5 py-3 border-t border-[#E1E7E4] bg-[#F8FAF9] flex flex-wrap items-center justify-between text-[11px] text-[#52605B] gap-2">
          <div className="flex items-center gap-3 font-mono">
            <span className="flex items-center gap-1 text-[#059669] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
              Production Ready
            </span>
            <span>TypeScript · Next.js · PostgreSQL</span>
          </div>
          <div className="font-mono text-[#0F172A] font-medium">
            Real software. Built for scale.
          </div>
        </div>
      </div>
    </div>
  );
}
