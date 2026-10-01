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
  Cpu,
  Search,
  Code2,
  AlertTriangle,
  HardDrive
} from "lucide-react";

export default function CustomSaasHeroPreview() {
  const [activeTab, setActiveTab] = useState<"build" | "audit" | "fix" | "deploy" | "scale">("build");

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
              https://app.dazzcode.com/saas-core/overview
            </span>
          </div>

          {/* Interactive Lifecycle Switcher: Build -> Audit -> Fix -> Deploy -> Scale */}
          <div className="flex items-center gap-1 bg-[#FFFFFF] p-1 rounded-xl border border-[#E2EAE6] text-xs font-medium overflow-x-auto">
            <button
              onClick={() => setActiveTab("build")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === "build"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <Rocket className="w-3.5 h-3.5" />
              <span>1. Build</span>
            </button>
            <button
              onClick={() => setActiveTab("audit")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === "audit"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span>2. Audit</span>
            </button>
            <button
              onClick={() => setActiveTab("fix")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === "fix"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>3. Fix</span>
            </button>
            <button
              onClick={() => setActiveTab("deploy")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === "deploy"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <Server className="w-3.5 h-3.5" />
              <span>4. Deploy</span>
            </button>
            <button
              onClick={() => setActiveTab("scale")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === "scale"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>5. Scale</span>
            </button>
          </div>
        </div>

        {/* Mockup Body Content */}
        <div className="p-6 md:p-8 bg-[#FAFCFB]">
          {/* TAB 1: BUILD (Multi-Tenant SaaS Platform) */}
          {activeTab === "build" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2EAE6]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#059669]">
                      Multi-Tenant B2B Architecture
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] text-[10px] font-semibold border border-[#059669]/20">
                      Production Live
                    </span>
                  </div>
                  <h4 className="text-lg font-black text-[#12201B] mt-1">
                    Acme Corp · Organization Workspace Dashboard
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6] text-xs font-mono text-[#52615B] flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-[#059669]" />
                    <span>PostgreSQL Row-Level Security</span>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
                  <div className="flex items-center justify-between text-[#52615B] text-xs mb-1">
                    <span>Monthly Recurring (MRR)</span>
                    <TrendingUp className="w-3.5 h-3.5 text-[#059669]" />
                  </div>
                  <div className="text-xl font-black text-[#12201B]">$24,850</div>
                  <div className="text-[11px] text-[#059669] font-medium mt-1">
                    ↑ 18.4% subscription expansion
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
                  <div className="flex items-center justify-between text-[#52615B] text-xs mb-1">
                    <span>Active Tenants</span>
                    <Users className="w-3.5 h-3.5 text-[#059669]" />
                  </div>
                  <div className="text-xl font-black text-[#12201B]">142 Orgs</div>
                  <div className="text-[11px] text-[#52615B] font-medium mt-1">
                    Isolated schema & RBAC
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
                  <div className="flex items-center justify-between text-[#52615B] text-xs mb-1">
                    <span>Billing Engine</span>
                    <CreditCard className="w-3.5 h-3.5 text-[#059669]" />
                  </div>
                  <div className="text-xl font-black text-[#12201B]">Stripe & M-Pesa</div>
                  <div className="text-[11px] text-[#059669] font-medium mt-1">
                    Automated webhooks & prorations
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
                  <div className="flex items-center justify-between text-[#52615B] text-xs mb-1">
                    <span>API Response P95</span>
                    <Zap className="w-3.5 h-3.5 text-[#059669]" />
                  </div>
                  <div className="text-xl font-black text-[#12201B]">34 ms</div>
                  <div className="text-[11px] text-[#059669] font-medium mt-1">
                    Next.js App Router + Redis Cache
                  </div>
                </div>
              </div>

              {/* Core Feature Breakdown */}
              <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#12201B]">
                    Production Building Blocks Active
                  </span>
                  <span className="text-xs font-mono text-[#059669]">100% Type-Safe Architecture</span>
                </div>
                <div className="grid sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="font-bold text-[#12201B] mb-1">Team Permissions</div>
                    <div className="text-[#52615B] text-[11px]">Granular RBAC: Admin, Manager, Member, Auditor</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="font-bold text-[#12201B] mb-1">Subscription Engine</div>
                    <div className="text-[#52615B] text-[11px]">Usage-based metering, tier limits & dunning</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="font-bold text-[#12201B] mb-1">Background Queues</div>
                    <div className="text-[#52615B] text-[11px]">BullMQ + Redis for async reporting & webhooks</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#ECFDF5] border border-[#059669]/30">
                    <div className="font-bold text-[#059669] mb-1">Admin Backoffice</div>
                    <div className="text-[#047857] text-[11px]">Super-admin controls, tenant impersonation & logs</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: AUDIT (SaaS Code & Architecture Audit) */}
          {activeTab === "audit" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2EAE6]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#059669]">
                      Technical Due Diligence & Health Audit
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] text-[10px] font-semibold border border-[#059669]/20">
                      Codebase Assessment
                    </span>
                  </div>
                  <h4 className="text-lg font-black text-[#12201B] mt-1">
                    Full-Stack Codebase & Security Diagnostic
                  </h4>
                </div>
                <div className="text-xs font-mono text-[#52615B] bg-[#FFFFFF] px-3 py-1.5 rounded-lg border border-[#E2EAE6]">
                  Report: 14 Architecture Findings
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
                  <div className="flex items-center justify-between text-[#52615B] mb-2 font-mono">
                    <span>Database & Queries</span>
                    <span className="text-[#EF4444] font-bold">3 Bottlenecks</span>
                  </div>
                  <p className="text-[#52615B] leading-relaxed">
                    Identified N+1 queries on organization member lists and missing composite indexes on tenant billing records.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
                  <div className="flex items-center justify-between text-[#52615B] mb-2 font-mono">
                    <span>Security & RBAC</span>
                    <span className="text-[#F59E0B] font-bold">2 Warnings</span>
                  </div>
                  <p className="text-[#52615B] leading-relaxed">
                    Flagged potential IDOR risk on export endpoints and unhashed token storage in auxiliary background workers.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xs">
                  <div className="flex items-center justify-between text-[#52615B] mb-2 font-mono">
                    <span>Technical Debt</span>
                    <span className="text-[#059669] font-bold">Clean Pathway</span>
                  </div>
                  <p className="text-[#52615B] leading-relaxed">
                    Prioritized 4-week refactoring roadmap to eliminate legacy dependencies without halting new feature releases.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#ECFDF5] border border-[#059669]/20 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-[#047857]">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-[#059669]" />
                  <span>Before you rewrite everything, we show you exactly what to keep, fix, and replace.</span>
                </div>
                <span className="font-mono font-bold text-[#059669]">Audit Turnaround: 3–5 Days</span>
              </div>
            </div>
          )}

          {/* TAB 3: FIX (Refactoring & Modernization) */}
          {activeTab === "fix" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2EAE6]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#059669]">
                      Codebase Modernization & Bug Elimination
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] text-[10px] font-semibold border border-[#059669]/20">
                      Surgical Refactoring
                    </span>
                  </div>
                  <h4 className="text-lg font-black text-[#12201B] mt-1">
                    Query Optimization & Type Safety Migration
                  </h4>
                </div>
                <div className="text-xs font-mono text-[#059669] bg-[#FFFFFF] px-3 py-1.5 rounded-lg border border-[#E2EAE6]">
                  Latency: 4.8s → 42ms (-99%)
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#FEF2F2] border border-[#FCA5A5]/30">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#DC2626] mb-2 font-bold flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Before Fix (Legacy Spaghetti)</span>
                  </div>
                  <ul className="space-y-2 text-[#7F1D1D] leading-relaxed">
                    <li>• Slow synchronous API calls blocking user browser threads</li>
                    <li>• Unindexed full table scans causing database CPU spikes</li>
                    <li>• Silent payment webhook failures during network hiccups</li>
                    <li>• Fragmented JavaScript with runtime type exceptions</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#ECFDF5] border border-[#059669]/30">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#059669] mb-2 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>After Fix (Dazzcode Engineering)</span>
                  </div>
                  <ul className="space-y-2 text-[#064E3B] leading-relaxed">
                    <li>• Asynchronous BullMQ worker queues for instant UI rendering</li>
                    <li>• Composite B-Tree indexes + Prisma connection pooling</li>
                    <li>• Idempotent webhook handlers with exponential backoff</li>
                    <li>• 100% strict TypeScript types with Zod payload validation</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6] flex items-center justify-between text-xs">
                <span className="text-[#52615B]">Zero customer downtime during migration cutovers.</span>
                <span className="font-mono font-bold text-[#059669]">Production Verified</span>
              </div>
            </div>
          )}

          {/* TAB 4: DEPLOY (Linux VPS & Docker DevOps) */}
          {activeTab === "deploy" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2EAE6]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#059669]">
                      Production Infrastructure & DevOps
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] text-[10px] font-semibold border border-[#059669]/20">
                      Zero Lock-in VPS
                    </span>
                  </div>
                  <h4 className="text-lg font-black text-[#12201B] mt-1">
                    Dockerized Next.js + Nginx + PostgreSQL Cluster
                  </h4>
                </div>
                <div className="text-xs font-mono text-[#52615B] bg-[#FFFFFF] px-3 py-1.5 rounded-lg border border-[#E2EAE6]">
                  Monthly Hosting Cost: ~$20–$40/mo
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                  <div className="font-mono text-[#52615B] mb-1">Docker Compose</div>
                  <div className="font-bold text-[#12201B]">Isolated Containers</div>
                  <div className="text-[11px] text-[#059669] mt-1">App, Worker & DB</div>
                </div>
                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                  <div className="font-mono text-[#52615B] mb-1">Nginx / Caddy</div>
                  <div className="font-bold text-[#12201B]">Reverse Proxy</div>
                  <div className="text-[11px] text-[#059669] mt-1">Automated SSL certs</div>
                </div>
                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                  <div className="font-mono text-[#52615B] mb-1">Disaster Recovery</div>
                  <div className="font-bold text-[#12201B]">Daily Encrypted Backups</div>
                  <div className="text-[11px] text-[#059669] mt-1">Off-site S3 sync</div>
                </div>
                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                  <div className="font-mono text-[#52615B] mb-1">Health Monitoring</div>
                  <div className="font-bold text-[#12201B]">Uptime & Error Alerts</div>
                  <div className="text-[11px] text-[#059669] mt-1">99.95% Target SLA</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] text-xs text-[#52615B] leading-relaxed">
                <span className="font-bold text-[#12201B]">We don&apos;t abandon you at local development.</span> We take your SaaS from local Git commits to live, secure cloud servers with complete deployment runbooks.
              </div>
            </div>
          )}

          {/* TAB 5: SCALE (Performance & High Concurrency) */}
          {activeTab === "scale" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2EAE6]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#059669]">
                      High-Concurrency SaaS Performance
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] text-[10px] font-semibold border border-[#059669]/20">
                      Sub-50ms Global Response
                    </span>
                  </div>
                  <h4 className="text-lg font-black text-[#12201B] mt-1">
                    Multi-Layer Caching & Horizontal Scale Architecture
                  </h4>
                </div>
                <div className="text-xs font-mono text-[#059669] bg-[#FFFFFF] px-3 py-1.5 rounded-lg border border-[#E2EAE6]">
                  Throughput: 10,000+ Req/min
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                  <div className="font-mono text-[11px] text-[#059669] font-bold mb-1">1. Edge & CDN Caching</div>
                  <div className="font-bold text-[#12201B] mb-1">Static Assets & Stale-While-Revalidate</div>
                  <p className="text-[#52615B] text-[11px] leading-relaxed">
                    Global edge network distribution delivers sub-30ms static content to users across Kenya, UK, US, and worldwide.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                  <div className="font-mono text-[11px] text-[#059669] font-bold mb-1">2. Redis In-Memory Cache</div>
                  <div className="font-bold text-[#12201B] mb-1">Session & Frequent Tenant State</div>
                  <p className="text-[#52615B] text-[11px] leading-relaxed">
                    Eliminates redundant database queries for user permissions, workspace settings, and active session validation.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                  <div className="font-mono text-[11px] text-[#059669] font-bold mb-1">3. Database Optimization</div>
                  <div className="font-bold text-[#12201B] mb-1">Connection Pooling & Read Replicas</div>
                  <p className="text-[#52615B] text-[11px] leading-relaxed">
                    PgBouncer connection pooling and targeted indexes keep database query times under 15ms even as data volumes grow.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#ECFDF5] border border-[#059669]/20 flex items-center justify-between text-xs">
                <span className="text-[#047857] font-medium">Engineered to scale without bloated $1,000+/mo cloud infrastructure bills.</span>
                <span className="font-mono font-bold text-[#059669]">Efficient Engineering</span>
              </div>
            </div>
          )}
        </div>

        {/* Mockup Footer Micro-copy */}
        <div className="px-6 py-3 bg-[#FFFFFF] border-t border-[#E2EAE6] flex flex-wrap items-center justify-between text-xs text-[#52615B]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>Full Lifecycle: Build · Audit · Fix · Deploy · Scale</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">100% Client IP Ownership</span>
          </div>
          <span className="font-mono text-[#059669] font-semibold">Senior Engineering Delivery</span>
        </div>
      </div>
    </div>
  );
}
