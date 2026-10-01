"use client";

import { useState } from "react";
import {
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  AlertOctagon,
  Info,
  Search,
  Database,
  Code2,
  Server,
  Zap,
  Lock,
  Layers,
  TrendingUp,
  RefreshCw,
  Clock,
  ArrowRight,
  Sparkles,
  FileCode2,
  Check,
  X
} from "lucide-react";

export default function SaasCodeAuditHeroPreview() {
  const [activeTab, setActiveTab] = useState<"summary" | "queries" | "security" | "roadmap">("summary");

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
              https://audit.dazzcode.com/reports/saas-architecture-review
            </span>
          </div>

          {/* Interactive Mode Switcher */}
          <div className="flex items-center gap-1 bg-[#FFFFFF] p-1 rounded-xl border border-[#E2EAE6] text-xs font-medium overflow-x-auto">
            <button
              onClick={() => setActiveTab("summary")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === "summary"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span>Audit Summary</span>
            </button>
            <button
              onClick={() => setActiveTab("queries")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === "queries"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>DB & Queries</span>
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === "security"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Security & RBAC</span>
            </button>
            <button
              onClick={() => setActiveTab("roadmap")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === "roadmap"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Remediation Roadmap</span>
            </button>
          </div>
        </div>

        {/* Mockup Body Content */}
        <div className="p-6 md:p-8 bg-[#FAFCFB]">
          {/* TAB 1: AUDIT SUMMARY */}
          {activeTab === "summary" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2EAE6]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#059669]">
                      Technical Due Diligence Report
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] text-[10px] font-semibold border border-[#059669]/20">
                      Independent Review Completed
                    </span>
                  </div>
                  <h4 className="text-lg font-black text-[#12201B] mt-1">
                    B2B Multi-Tenant Platform · Health & Risk Assessment
                  </h4>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#52615B] bg-[#FFFFFF] px-3 py-1.5 rounded-lg border border-[#E2EAE6]">
                  <FileCode2 className="w-3.5 h-3.5 text-[#059669]" />
                  <span>48,200 Lines Audited</span>
                </div>
              </div>

              {/* Status Health Checklist Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
                  <div className="flex items-center justify-between text-[#52615B] text-xs mb-1">
                    <span>Architecture Structure</span>
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  </div>
                  <div className="text-base font-bold text-[#12201B]">Modular Monolith</div>
                  <div className="text-[11px] text-[#059669] font-medium mt-1">
                    ✓ Clean service boundaries
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
                  <div className="flex items-center justify-between text-[#52615B] text-xs mb-1">
                    <span>Database & Queries</span>
                    <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                  </div>
                  <div className="text-base font-bold text-[#12201B]">Needs Attention</div>
                  <div className="text-[11px] text-[#DC2626] font-medium mt-1">
                    ! 4 Missing composite indexes
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
                  <div className="flex items-center justify-between text-[#52615B] text-xs mb-1">
                    <span>Security & RBAC</span>
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  </div>
                  <div className="text-base font-bold text-[#12201B]">2 Warnings</div>
                  <div className="text-[11px] text-[#D97706] font-medium mt-1">
                    ! Export endpoint IDOR check
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
                  <div className="flex items-center justify-between text-[#52615B] text-xs mb-1">
                    <span>Rewrite Recommended?</span>
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  </div>
                  <div className="text-base font-bold text-[#059669]">NO (Refactor)</div>
                  <div className="text-[11px] text-[#059669] font-medium mt-1">
                    ✓ Core architecture is sound
                  </div>
                </div>
              </div>

              {/* Finding Severity Breakdown */}
              <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#12201B]">
                    Risk Classification Matrix
                  </span>
                  <span className="text-xs font-mono text-[#059669]">14 Actionable Items Categorized</span>
                </div>
                <div className="grid sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-[#FEF2F2] border border-[#FCA5A5]/30">
                    <div className="font-bold text-[#DC2626] mb-1 flex items-center gap-1.5">
                      <AlertOctagon className="w-3.5 h-3.5" />
                      <span>1 Critical Risk</span>
                    </div>
                    <div className="text-[#7F1D1D] text-[11px]">Unauthenticated webhook callback endpoint</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#FFFBEB] border border-[#FDE68A]/40">
                    <div className="font-bold text-[#D97706] mb-1 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>3 High Priority</span>
                    </div>
                    <div className="text-[#92400E] text-[11px]">N+1 queries on organization member lists</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="font-bold text-[#12201B] mb-1 flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-[#52615B]" />
                      <span>6 Medium Debt</span>
                    </div>
                    <div className="text-[#52615B] text-[11px]">Un-typed API payloads & duplicated helpers</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#ECFDF5] border border-[#059669]/30">
                    <div className="font-bold text-[#059669] mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>4 Quick Wins</span>
                    </div>
                    <div className="text-[#047857] text-[11px]">Simple Redis cache tweaks for 4x speed</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DB & QUERIES */}
          {activeTab === "queries" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2EAE6]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#059669]">
                      Database & Query Profiling
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] text-[10px] font-semibold border border-[#059669]/20">
                      EXPLAIN ANALYZE
                    </span>
                  </div>
                  <h4 className="text-lg font-black text-[#12201B] mt-1">
                    PostgreSQL Execution Plans & Index Optimizations
                  </h4>
                </div>
                <div className="text-xs font-mono text-[#059669] bg-[#FFFFFF] px-3 py-1.5 rounded-lg border border-[#E2EAE6]">
                  Simulated Gain: 4,800ms → 38ms (-99.2%)
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#FEF2F2] border border-[#FCA5A5]/30">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#DC2626] mb-2 font-bold flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Problem Found (Sequential Table Scan)</span>
                  </div>
                  <div className="bg-[#12201B] text-[#E2EAE6] p-3 rounded-lg font-mono text-[11px] overflow-x-auto">
                    <code>
                      SELECT * FROM &quot;invoices&quot;<br />
                      WHERE &quot;tenant_id&quot; = &apos;org_94&apos;<br />
                      ORDER BY &quot;created_at&quot; DESC;<br />
                      <span className="text-[#EF4444]">-- Execution Time: 4,820 ms (140,000 rows scanned)</span>
                    </code>
                  </div>
                  <p className="text-[#7F1D1D] mt-2 leading-relaxed">
                    Missing composite B-Tree index on <code className="font-mono">(tenant_id, created_at DESC)</code> forces PostgreSQL to scan the entire table on every dashboard load.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#ECFDF5] border border-[#059669]/30">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#059669] mb-2 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Audit Recommendation (Index Scan)</span>
                  </div>
                  <div className="bg-[#12201B] text-[#E2EAE6] p-3 rounded-lg font-mono text-[11px] overflow-x-auto">
                    <code>
                      CREATE INDEX &quot;idx_invoices_tenant_created&quot;<br />
                      ON &quot;invoices&quot; (&quot;tenant_id&quot;, &quot;created_at&quot; DESC);<br />
                      <span className="text-[#10B981]">-- Execution Time: 38 ms (Index Cond: Bitmap Heap)</span>
                    </code>
                  </div>
                  <p className="text-[#064E3B] mt-2 leading-relaxed">
                    Adding targeted composite index reduces query latency by 99% with zero backend application code changes required.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-center justify-between text-xs">
                <span className="text-[#52615B]">We profile live query plans to pinpoint real database bottlenecks.</span>
                <span className="font-mono font-bold text-[#059669]">Evidence-Based Findings</span>
              </div>
            </div>
          )}

          {/* TAB 3: SECURITY & RBAC */}
          {activeTab === "security" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2EAE6]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#059669]">
                      Application Security & Access Control Review
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] text-[10px] font-semibold border border-[#059669]/20">
                      OWASP Top 10 Guidelines
                    </span>
                  </div>
                  <h4 className="text-lg font-black text-[#12201B] mt-1">
                    Authentication, Tenant Isolation & Token Storage
                  </h4>
                </div>
                <div className="text-xs font-mono text-[#52615B] bg-[#FFFFFF] px-3 py-1.5 rounded-lg border border-[#E2EAE6]">
                  Scope: Application-Level Security
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                  <div className="font-bold text-[#12201B] mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                    <span>Tenant Data Isolation</span>
                  </div>
                  <p className="text-[#52615B] leading-relaxed">
                    Tenant organization IDs are verified via session cookies and row-level security. No cross-tenant data leakage risks found on primary CRUD endpoints.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                  <div className="font-bold text-[#12201B] mb-2 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-[#D97706]" />
                    <span>IDOR on Export Endpoints</span>
                  </div>
                  <p className="text-[#52615B] leading-relaxed">
                    The CSV export route accepted raw numerical IDs without verifying tenant ownership in the URL query string. Recommended UUID-based lookup fix.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                  <div className="font-bold text-[#12201B] mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                    <span>Secrets Management</span>
                  </div>
                  <p className="text-[#52615B] leading-relaxed">
                    No hardcoded API keys or Stripe/M-Pesa secrets committed into Git history. Environment variables configured properly across environments.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] text-xs text-[#52615B] leading-relaxed">
                <span className="font-bold text-[#12201B]">Note:</span> A SaaS code audit is an in-depth source code and architectural review. We clearly distinguish this from active penetration testing or external black-box hacking.
              </div>
            </div>
          )}

          {/* TAB 4: REMEDIATION ROADMAP */}
          {activeTab === "roadmap" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2EAE6]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#059669]">
                      Prioritized Engineering Roadmap
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] text-[10px] font-semibold border border-[#059669]/20">
                      Step-by-Step Action Plan
                    </span>
                  </div>
                  <h4 className="text-lg font-black text-[#12201B] mt-1">
                    What to Fix Now, Next, and What Can Wait
                  </h4>
                </div>
                <div className="text-xs font-mono text-[#059669] bg-[#FFFFFF] px-3 py-1.5 rounded-lg border border-[#E2EAE6]">
                  Estimated Effort: 3 Weeks Sprints
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-xl bg-[#FEF2F2] border border-[#FCA5A5]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                      Phase 1 · Week 1 (Urgent Fixes)
                    </div>
                    <div className="font-bold text-[#12201B]">Patch Webhook Signature Verification & Add 4 DB Indexes</div>
                    <div className="text-[#7F1D1D] text-[11px] mt-0.5">Eliminates 99% of API latency and secures payment callback endpoints.</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#DC2626] text-white font-mono font-bold text-[10px] shrink-0">
                    Fix Immediately
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFBEB] border border-[#FDE68A]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#D97706] mb-1">
                      Phase 2 · Weeks 2–3 (Refactoring)
                    </div>
                    <div className="font-bold text-[#12201B]">Migrate Shared State to Redis & TypeScript Strict Mode</div>
                    <div className="text-[#92400E] text-[11px] mt-0.5">Removes runtime type exceptions and decouples background worker jobs.</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#D97706] text-white font-mono font-bold text-[10px] shrink-0">
                    Fix Next Sprint
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#ECFDF5] border border-[#059669]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#059669] mb-1">
                      Phase 3 · Post-Launch (Optional Scale)
                    </div>
                    <div className="font-bold text-[#12201B]">Multi-Region Read Replicas & Custom Domain Subdomains</div>
                    <div className="text-[#064E3B] text-[11px] mt-0.5">Infrastructure enhancements only required when scaling past 5,000 active orgs.</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#059669] text-white font-mono font-bold text-[10px] shrink-0">
                    Can Wait (Scale)
                  </span>
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
              <span>Independent Senior Architect Review</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Strict Mutual NDA Signed Upfront</span>
          </div>
          <span className="font-mono text-[#059669] font-semibold">Turnaround: 3 to 7 Days</span>
        </div>
      </div>
    </div>
  );
}
