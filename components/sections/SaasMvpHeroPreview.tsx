"use client";

import React, { useState } from "react";
import {
  Layers,
  ShieldCheck,
  CreditCard,
  Users,
  Zap,
  Activity,
  CheckCircle2,
  Database,
  Terminal,
  ArrowRight,
  Server,
  Key,
  Globe2,
  Lock,
  Cpu,
  Sparkles,
  BarChart3,
  BellRing
} from "lucide-react";

export function SaasMvpHeroPreview() {
  const [activeTab, setActiveTab] = useState<"architecture" | "billing" | "multitenant" | "telemetry">("architecture");

  return (
    <div className="w-full rounded-2xl md:rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xl shadow-[#12201B]/5 overflow-hidden text-left font-sans">
      {/* Top Window Header */}
      <div className="bg-[#F8FAF9] px-4 md:px-6 py-3.5 border-b border-[#E2EAE6] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#EF4444]/60 border border-[#EF4444]" />
            <div className="w-3 h-3 rounded-full bg-[#F59E0B]/60 border border-[#F59E0B]" />
            <div className="w-3 h-3 rounded-full bg-[#10B981]/60 border border-[#10B981]" />
          </div>
          <span className="text-xs font-mono font-bold text-[#52615B] ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#059669]" />
            saas-mvp-engine :: production-ready
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#ECFDF5] text-[#059669] border border-[#059669]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            MVP STACK LIVE
          </span>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="bg-[#FFFFFF] px-4 md:px-6 pt-3 border-b border-[#E2EAE6] flex gap-2 md:gap-4 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveTab("architecture")}
          className={`pb-3 px-1 text-xs font-mono font-bold transition-all border-b-2 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            activeTab === "architecture"
              ? "border-[#059669] text-[#059669]"
              : "border-transparent text-[#52615B] hover:text-[#12201B]"
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          1. Core Architecture
        </button>
        <button
          onClick={() => setActiveTab("billing")}
          className={`pb-3 px-1 text-xs font-mono font-bold transition-all border-b-2 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            activeTab === "billing"
              ? "border-[#059669] text-[#059669]"
              : "border-transparent text-[#52615B] hover:text-[#12201B]"
          }`}
        >
          <CreditCard className="w-3.5 h-3.5" />
          2. Billing & Webhooks
        </button>
        <button
          onClick={() => setActiveTab("multitenant")}
          className={`pb-3 px-1 text-xs font-mono font-bold transition-all border-b-2 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            activeTab === "multitenant"
              ? "border-[#059669] text-[#059669]"
              : "border-transparent text-[#52615B] hover:text-[#12201B]"
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          3. Multi-Tenancy & RBAC
        </button>
        <button
          onClick={() => setActiveTab("telemetry")}
          className={`pb-3 px-1 text-xs font-mono font-bold transition-all border-b-2 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            activeTab === "telemetry"
              ? "border-[#059669] text-[#059669]"
              : "border-transparent text-[#52615B] hover:text-[#12201B]"
          }`}
        >
          <Activity className="w-3.5 h-3.5" />
          4. Telemetry & Launch
        </button>
      </div>

      {/* Main Tab Content */}
      <div className="p-4 md:p-6 bg-[#FAFCFA]">
        {activeTab === "architecture" && (
          <div className="space-y-4">
            {/* Top Stat Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                <span className="text-[10px] font-mono text-[#52615B] block uppercase tracking-wider">Frontend / API</span>
                <span className="text-sm font-bold text-[#12201B] flex items-center gap-1 mt-0.5">
                  <Zap className="w-3.5 h-3.5 text-[#059669]" />
                  Next.js + TypeScript
                </span>
              </div>
              <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                <span className="text-[10px] font-mono text-[#52615B] block uppercase tracking-wider">Database Engine</span>
                <span className="text-sm font-bold text-[#12201B] flex items-center gap-1 mt-0.5">
                  <Database className="w-3.5 h-3.5 text-[#059669]" />
                  PostgreSQL (RLS)
                </span>
              </div>
              <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                <span className="text-[10px] font-mono text-[#52615B] block uppercase tracking-wider">Background Jobs</span>
                <span className="text-sm font-bold text-[#12201B] flex items-center gap-1 mt-0.5">
                  <Cpu className="w-3.5 h-3.5 text-[#059669]" />
                  Redis / BullMQ
                </span>
              </div>
              <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                <span className="text-[10px] font-mono text-[#52615B] block uppercase tracking-wider">Deployment</span>
                <span className="text-sm font-bold text-[#12201B] flex items-center gap-1 mt-0.5">
                  <Server className="w-3.5 h-3.5 text-[#059669]" />
                  Docker + Linux VPS
                </span>
              </div>
            </div>

            {/* Architecture Flow Diagram */}
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#12201B] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#059669]" />
                  Foundational SaaS MVP Workflow Map
                </span>
                <span className="text-[11px] font-mono text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded-md font-semibold">
                  Zero Technical Debt
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-2">
                  <div className="font-bold text-[#12201B] flex items-center gap-1.5 font-mono text-[11px] uppercase">
                    <Key className="w-3.5 h-3.5 text-[#059669]" />
                    1. Secure Auth & Onboarding
                  </div>
                  <p className="text-[#52615B] text-[11px] leading-relaxed">
                    Magic links, Google OAuth, session cookies with HTTPOnly flags, and frictionless 60-second tenant signup.
                  </p>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-[#059669]">
                    <CheckCircle2 className="w-3 h-3" /> Strict Zod validation
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#059669]/30 bg-[#ECFDF5]/20 space-y-2">
                  <div className="font-bold text-[#12201B] flex items-center gap-1.5 font-mono text-[11px] uppercase">
                    <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
                    2. Primary Value Engine
                  </div>
                  <p className="text-[#52615B] text-[11px] leading-relaxed">
                    The single core workflow that solves the user's primary pain point (data ingestion, reporting, or AI automation).
                  </p>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-[#059669]">
                    <CheckCircle2 className="w-3 h-3" /> Sub-50ms API response
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-2">
                  <div className="font-bold text-[#12201B] flex items-center gap-1.5 font-mono text-[11px] uppercase">
                    <BarChart3 className="w-3.5 h-3.5 text-[#059669]" />
                    3. Telemetry & Billing
                  </div>
                  <p className="text-[#52615B] text-[11px] leading-relaxed">
                    Automated subscription collection (Stripe / Payment Gateways), seat management, and real-time product analytics.
                  </p>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-[#059669]">
                    <CheckCircle2 className="w-3 h-3" /> Idempotent webhooks
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "billing" && (
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#12201B] flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#059669]" />
                  Subscription & Webhook Architecture
                </span>
                <span className="text-[11px] font-mono text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded-md font-semibold">
                  Stripe & Billing Ready
                </span>
              </div>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                We implement hardened webhook receivers with replay protection, invoice PDF generation, usage metering, and automated tier upgrades.
              </p>

              <div className="space-y-2 font-mono text-xs">
                <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#12201B]">
                    <span className="px-2 py-0.5 rounded bg-[#ECFDF5] text-[#059669] text-[10px] font-bold">200 OK</span>
                    <span className="text-[11px]">POST /api/webhooks/stripe :: customer.subscription.created</span>
                  </div>
                  <span className="text-[10px] text-[#52615B]">Org upgraded to &quot;Pro Tier&quot;</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#12201B]">
                    <span className="px-2 py-0.5 rounded bg-[#ECFDF5] text-[#059669] text-[10px] font-bold">200 OK</span>
                    <span className="text-[11px]">POST /api/webhooks/billing :: invoice.payment_succeeded</span>
                  </div>
                  <span className="text-[10px] text-[#52615B]">Annual recurring seat pass active</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "multitenant" && (
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#12201B] flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#059669]" />
                  Multi-Tenant Data Isolation (Row-Level Security)
                </span>
                <span className="text-[11px] font-mono text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded-md font-semibold">
                  Zero Data Leaks
                </span>
              </div>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                Every query is automatically scoped to the user&apos;s authenticated organization using PostgreSQL RLS policies and granular Role-Based Access Control.
              </p>

              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <div className="font-bold text-[#12201B] font-mono text-[11px] mb-1">Owner / Admin</div>
                  <div className="text-[10px] text-[#52615B]">Full billing, member invites, API keys & audit logs</div>
                </div>
                <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <div className="font-bold text-[#12201B] font-mono text-[11px] mb-1">Member / Operator</div>
                  <div className="text-[10px] text-[#52615B]">Execute workflows, manage records & generate reports</div>
                </div>
                <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <div className="font-bold text-[#12201B] font-mono text-[11px] mb-1">Read-Only Viewer</div>
                  <div className="text-[10px] text-[#52615B]">Auditing, dashboards & client data inspection only</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "telemetry" && (
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#12201B] flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#059669]" />
                  Foundational Product Telemetry & Alerts
                </span>
                <span className="text-[11px] font-mono text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded-md font-semibold">
                  Launch-Ready
                </span>
              </div>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                Know exactly how early adopters navigate your product, track conversion drop-offs, and receive real-time crash notifications directly on WhatsApp / Telegram / Slack.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <div className="text-xl font-black text-[#12201B]">48ms</div>
                  <div className="text-[10px] text-[#52615B] font-mono mt-0.5">p95 Latency</div>
                </div>
                <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <div className="text-xl font-black text-[#059669]">99.98%</div>
                  <div className="text-[10px] text-[#52615B] font-mono mt-0.5">Uptime SLA</div>
                </div>
                <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <div className="text-xl font-black text-[#12201B]">0</div>
                  <div className="text-[10px] text-[#52615B] font-mono mt-0.5">Uncaught Exceptions</div>
                </div>
                <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <div className="text-xl font-black text-[#059669]">Instant</div>
                  <div className="text-[10px] text-[#52615B] font-mono mt-0.5">WhatsApp Error Alerts</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Bar */}
      <div className="px-4 md:px-6 py-3 bg-[#FFFFFF] border-t border-[#E2EAE6] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-[#52615B]">
          <CheckCircle2 className="w-4 h-4 text-[#059669]" />
          <span>Full source code ownership • Milestone-based delivery • Zero vendor lock-in</span>
        </div>
        <span className="font-mono text-[11px] text-[#059669] font-bold">
          Idea → Production in 4–8 Weeks
        </span>
      </div>
    </div>
  );
}
