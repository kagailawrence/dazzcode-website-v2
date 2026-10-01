"use client";

import { useState } from "react";
import {
  Server,
  Database,
  Zap,
  Activity,
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  Gauge,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  HardDrive,
  Network,
  Clock,
  Radio,
  Sliders,
  ShieldCheck,
  Flame,
  ArrowUp
} from "lucide-react";

export default function SaasScalingHeroPreview() {
  const [activeTab, setActiveTab] = useState<"system" | "database" | "workers" | "cost">("system");
  const [trafficMultiplier, setTrafficMultiplier] = useState<"1x" | "5x" | "20x">("5x");

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-10">
      {/* Decorative gradient glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-[#059669]/20 via-[#10B981]/20 to-[#047857]/20 rounded-3xl blur-xl opacity-70 pointer-events-none" />

      {/* Main Container */}
      <div className="relative rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xl overflow-hidden text-[#12201B]">
        {/* Browser Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-[#F8FAF9] border-b border-[#E2EAE6]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
            <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
            <div className="w-3 h-3 rounded-full bg-[#10B981]/80" />
            <span className="ml-2 text-xs font-mono text-[#52615B] hidden sm:inline">
              https://telemetry.dazzcode.com/live-architecture-monitor
            </span>
          </div>

          {/* Interactive Mode Switcher */}
          <div className="flex items-center gap-1 bg-[#FFFFFF] p-1 rounded-xl border border-[#E2EAE6] text-xs font-medium overflow-x-auto">
            <button
              onClick={() => setActiveTab("system")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === "system"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Full-Stack Topology</span>
            </button>
            <button
              onClick={() => setActiveTab("database")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === "database"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>DB & Query Tuning</span>
            </button>
            <button
              onClick={() => setActiveTab("workers")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === "workers"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Async Queues & Workers</span>
            </button>
            <button
              onClick={() => setActiveTab("cost")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === "cost"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Cost & Efficiency</span>
            </button>
          </div>
        </div>

        {/* Dynamic Telemetry Banner */}
        <div className="px-6 py-3 bg-[#F0FDF4] border-b border-[#DCFCE7] flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-mono font-bold text-[#047857]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              SYSTEM LOAD SIMULATOR
            </span>
            <span className="text-[#52615B] hidden md:inline">|</span>
            <span className="text-[#52615B] hidden md:inline">Simulated Scale:</span>
            <div className="inline-flex rounded-lg bg-white border border-[#E2EAE6] p-0.5">
              {(["1x", "5x", "20x"] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setTrafficMultiplier(lvl)}
                  className={`px-2 py-0.5 text-[11px] font-mono rounded cursor-pointer transition-all ${
                    trafficMultiplier === lvl
                      ? "bg-[#059669] text-white font-bold"
                      : "text-[#52615B] hover:text-[#12201B]"
                  }`}
                >
                  {lvl} Users
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11px] text-[#52615B]">
            <div>
              <span className="text-[#047857] font-semibold">Latency p95:</span>{" "}
              {trafficMultiplier === "1x" ? "38ms" : trafficMultiplier === "5x" ? "54ms" : "92ms"}
            </div>
            <div>
              <span className="text-[#047857] font-semibold">Cache Hit:</span>{" "}
              {trafficMultiplier === "1x" ? "91.4%" : trafficMultiplier === "5x" ? "94.8%" : "96.2%"}
            </div>
            <div>
              <span className="text-[#047857] font-semibold">Error Rate:</span> 0.002%
            </div>
          </div>
        </div>

        {/* Mockup Body Content */}
        <div className="p-6 md:p-8 bg-[#FAFCFB]">
          {/* TAB 1: FULL-STACK TOPOLOGY */}
          {activeTab === "system" && (
            <div className="space-y-6">
              {/* Architecture Tier Cascade */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {/* Layer 1: Users */}
                <div className="p-4 rounded-xl bg-white border border-[#E2EAE6] shadow-xs relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#059669] font-bold">
                      Incoming Load
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <Radio className="w-4 h-4 text-[#059669]" />
                    <h4 className="font-bold text-sm text-[#12201B]">Users & Traffic</h4>
                  </div>
                  <div className="font-mono text-xs text-[#52615B] space-y-1 mt-2">
                    <div className="flex justify-between">
                      <span>Concurrent:</span>
                      <strong className="text-[#12201B]">
                        {trafficMultiplier === "1x" ? "850" : trafficMultiplier === "5x" ? "4,200" : "16,800"}
                      </strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Req/sec:</span>
                      <strong className="text-[#059669]">
                        {trafficMultiplier === "1x" ? "1,200" : trafficMultiplier === "5x" ? "5,800" : "24,500"}
                      </strong>
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#F1F5F3] text-[10px] text-[#059669] font-medium flex items-center gap-1">
                    <ArrowUp className="w-3 h-3" /> CDN Edge Shield
                  </div>
                </div>

                {/* Layer 2: Frontend & Edge */}
                <div className="p-4 rounded-xl bg-white border border-[#E2EAE6] shadow-xs relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#059669] font-bold">
                      Layer 1
                    </span>
                    <span className="text-[10px] font-mono text-[#059669] bg-[#ECFDF5] px-1.5 py-0.5 rounded">
                      SSR/Edge
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <Layers className="w-4 h-4 text-[#059669]" />
                    <h4 className="font-bold text-sm text-[#12201B]">Frontend & Next.js</h4>
                  </div>
                  <div className="font-mono text-xs text-[#52615B] space-y-1 mt-2">
                    <div className="flex justify-between">
                      <span>LCP:</span>
                      <strong className="text-[#059669]">0.8s (Good)</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Bundle Size:</span>
                      <strong className="text-[#12201B]">84 kB gzip</strong>
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#F1F5F3] text-[10px] text-[#52615B]">
                    Optimized Hydration
                  </div>
                </div>

                {/* Layer 3: API & Backend */}
                <div className="p-4 rounded-xl bg-white border border-[#059669]/40 ring-1 ring-[#059669]/20 shadow-xs relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#059669] font-bold">
                      Layer 2
                    </span>
                    <span className="text-[10px] font-mono text-[#047857] bg-[#ECFDF5] px-1.5 py-0.5 rounded font-bold">
                      Zero Block
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-[#059669]" />
                    <h4 className="font-bold text-sm text-[#12201B]">Backend & APIs</h4>
                  </div>
                  <div className="font-mono text-xs text-[#52615B] space-y-1 mt-2">
                    <div className="flex justify-between">
                      <span>Avg Latency:</span>
                      <strong className="text-[#059669]">24ms</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Non-blocking:</span>
                      <strong className="text-[#12201B]">Async I/O</strong>
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#F1F5F3] text-[10px] text-[#059669] font-medium">
                    Rate Limited & Pooled
                  </div>
                </div>

                {/* Layer 4: Database & Redis */}
                <div className="p-4 rounded-xl bg-white border border-[#E2EAE6] shadow-xs relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#059669] font-bold">
                      Layer 3
                    </span>
                    <span className="text-[10px] font-mono text-[#059669] bg-[#ECFDF5] px-1.5 py-0.5 rounded">
                      PgBouncer
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <Database className="w-4 h-4 text-[#059669]" />
                    <h4 className="font-bold text-sm text-[#12201B]">PostgreSQL & Cache</h4>
                  </div>
                  <div className="font-mono text-xs text-[#52615B] space-y-1 mt-2">
                    <div className="flex justify-between">
                      <span>DB CPU:</span>
                      <strong className="text-[#059669]">
                        {trafficMultiplier === "1x" ? "14%" : trafficMultiplier === "5x" ? "28%" : "46%"}
                      </strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Slow Queries:</span>
                      <strong className="text-[#059669]">0 queries &gt;50ms</strong>
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#F1F5F3] text-[10px] text-[#52615B]">
                    Multi-tenant RLS Index
                  </div>
                </div>

                {/* Layer 5: Infrastructure & Workers */}
                <div className="p-4 rounded-xl bg-white border border-[#E2EAE6] shadow-xs relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#059669] font-bold">
                      Layer 4
                    </span>
                    <span className="text-[10px] font-mono text-[#059669] bg-[#ECFDF5] px-1.5 py-0.5 rounded">
                      Linux VPS
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <Server className="w-4 h-4 text-[#059669]" />
                    <h4 className="font-bold text-sm text-[#12201B]">Infra & Workers</h4>
                  </div>
                  <div className="font-mono text-xs text-[#52615B] space-y-1 mt-2">
                    <div className="flex justify-between">
                      <span>Server RAM:</span>
                      <strong className="text-[#12201B]">4.1 / 16 GB</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Queue Lag:</span>
                      <strong className="text-[#059669]">0.2s</strong>
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#F1F5F3] text-[10px] text-[#52615B]">
                    Isolated Redis Queue
                  </div>
                </div>
              </div>

              {/* 8 Live Performance Indicators */}
              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                <div className="flex items-center justify-between mb-3">
                  <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-[#52615B] flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-[#059669]" />
                    Live SaaS Performance Indicators
                  </h5>
                  <span className="text-[11px] font-mono text-[#059669] font-semibold">
                    Target: p99 &lt; 100ms
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="text-[#52615B] text-[11px]">Response Time</div>
                    <div className="text-base font-bold text-[#059669] mt-0.5">
                      {trafficMultiplier === "1x" ? "32ms" : trafficMultiplier === "5x" ? "48ms" : "74ms"}
                    </div>
                    <div className="text-[10px] text-[#059669] mt-0.5">↓ 68% vs unoptimized</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="text-[#52615B] text-[11px]">Database Load</div>
                    <div className="text-base font-bold text-[#12201B] mt-0.5">
                      {trafficMultiplier === "1x" ? "18%" : trafficMultiplier === "5x" ? "32%" : "51%"}
                    </div>
                    <div className="text-[10px] text-[#059669] mt-0.5">Indexed & Pooled</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="text-[#52615B] text-[11px]">Queue Depth</div>
                    <div className="text-base font-bold text-[#059669] mt-0.5">
                      {trafficMultiplier === "1x" ? "12 jobs" : trafficMultiplier === "5x" ? "45 jobs" : "180 jobs"}
                    </div>
                    <div className="text-[10px] text-[#52615B] mt-0.5">Auto-scaling workers</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="text-[#52615B] text-[11px]">Cache Hit Rate</div>
                    <div className="text-base font-bold text-[#059669] mt-0.5">94.8%</div>
                    <div className="text-[10px] text-[#059669] mt-0.5">Redis + Edge KV</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DATABASE & QUERY TUNING */}
          {activeTab === "database" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-[#E2EAE6]">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-sm text-[#12201B]">
                      PostgreSQL Query Optimization & EXPLAIN ANALYZE
                    </h4>
                    <p className="text-xs text-[#52615B]">
                      Eliminating full table scans, N+1 query cascades, and tenant lock contention.
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#059669] bg-[#ECFDF5] px-2.5 py-1 rounded-full">
                    Execution: 2.1ms (was 1,480ms)
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  {/* Before / After Query Box */}
                  <div className="p-3 rounded-lg bg-[#FEF2F2] border border-[#FCA5A5] text-[#991B1B]">
                    <div className="flex items-center justify-between font-bold text-[11px] mb-1">
                      <span className="flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5" /> BEFORE: Unindexed N+1 Loop (Sequential Scan)
                      </span>
                      <span>1,480ms execution</span>
                    </div>
                    <code className="text-[11px] block overflow-x-auto text-[#7F1D1D]">
                      SELECT * FROM organizations JOIN orders ON orders.org_id = organizations.id WHERE status = &apos;active&apos; ORDER BY created_at DESC;
                    </code>
                    <div className="text-[10px] text-[#B91C1C] mt-1.5 font-sans">
                      ⚠️ Bottleneck: Sequential scan across 3.4M rows, reading entire table into memory without composite tenant index.
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#F0FDF4] border border-[#86EFAC] text-[#166534]">
                    <div className="flex items-center justify-between font-bold text-[11px] mb-1">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> AFTER: Composite Index + Keyset Pagination
                      </span>
                      <span className="text-[#059669]">2.1ms execution</span>
                    </div>
                    <code className="text-[11px] block overflow-x-auto text-[#14532D]">
                      SELECT id, order_number, total_amount, created_at FROM orders WHERE org_id = $1 AND status = &apos;active&apos; AND id &lt; $2 ORDER BY id DESC LIMIT 25;
                    </code>
                    <div className="text-[10px] text-[#15803D] mt-1.5 font-sans">
                      ✓ Optimization: Index Only Scan on `idx_orders_org_status_id (org_id, status, id DESC)`. Zero memory bloat.
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-white border border-[#E2EAE6] text-xs">
                  <div className="font-bold text-[#12201B] mb-1 flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-[#059669]" /> PgBouncer Pooling
                  </div>
                  <p className="text-[#52615B] text-[11px]">
                    Maintains 2,000 application client connections with only 30 active Postgres backend workers.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E2EAE6] text-xs">
                  <div className="font-bold text-[#12201B] mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" /> Multi-Tenant RLS
                  </div>
                  <p className="text-[#52615B] text-[11px]">
                    Row-Level Security policies enforced at database engine level with zero cross-tenant data leaks.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E2EAE6] text-xs">
                  <div className="font-bold text-[#12201B] mb-1 flex items-center gap-1.5">
                    <RefreshCw className="w-3.5 h-3.5 text-[#059669]" /> Partitioning Strategy
                  </div>
                  <p className="text-[#52615B] text-[11px]">
                    High-volume telemetry & audit log tables partitioned by month for rapid vacuums and instant query pruning.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ASYNC QUEUES & WORKERS */}
          {activeTab === "workers" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-[#E2EAE6]">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-sm text-[#12201B]">
                      Background Job Architecture & Queue Isolation
                    </h4>
                    <p className="text-xs text-[#52615B]">
                      Decoupling web requests from heavy reports, PDF generation, bulk emails, and webhook deliveries.
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#059669] bg-[#ECFDF5] px-2.5 py-1 rounded-full">
                    Concurrency: 48 Workers Active
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-xs text-[#12201B]">Critical / High Priority</span>
                      <span className="text-[10px] font-mono text-[#059669] bg-[#ECFDF5] px-1.5 py-0.5 rounded">
                        &lt; 50ms latency
                      </span>
                    </div>
                    <ul className="text-[11px] text-[#52615B] space-y-1">
                      <li>• User Password Resets</li>
                      <li>• Stripe Webhook Confirmations</li>
                      <li>• Real-time SMS & Push Alerts</li>
                    </ul>
                    <div className="mt-3 pt-2 border-t border-[#E2EAE6] text-[10px] font-mono text-[#059669] font-bold">
                      Queue Depth: 0 (Instant)
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-xs text-[#12201B]">Standard Batch Jobs</span>
                      <span className="text-[10px] font-mono text-[#52615B] bg-white px-1.5 py-0.5 rounded border border-[#E2EAE6]">
                        Throttled
                      </span>
                    </div>
                    <ul className="text-[11px] text-[#52615B] space-y-1">
                      <li>• Daily Analytics Aggregations</li>
                      <li>• In-app Notification Broadcasts</li>
                      <li>• CRM & Third-party Syncs</li>
                    </ul>
                    <div className="mt-3 pt-2 border-t border-[#E2EAE6] text-[10px] font-mono text-[#52615B]">
                      Queue Depth: 18 jobs
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-xs text-[#12201B]">Heavy Compute / Exports</span>
                      <span className="text-[10px] font-mono text-[#52615B] bg-white px-1.5 py-0.5 rounded border border-[#E2EAE6]">
                        Isolated Pool
                      </span>
                    </div>
                    <ul className="text-[11px] text-[#52615B] space-y-1">
                      <li>• CSV & Large PDF Generation</li>
                      <li>• AI Embedding Generation</li>
                      <li>• Bulk Database Migrations</li>
                    </ul>
                    <div className="mt-3 pt-2 border-t border-[#E2EAE6] text-[10px] font-mono text-[#059669] font-bold">
                      Memory Capped & Sandboxed
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] text-xs flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  Zero HTTP request timeouts. Long operations return HTTP 202 Accepted with polling or SSE status stream.
                </span>
                <span className="font-mono font-bold text-[11px]">Resilient Architecture</span>
              </div>
            </div>
          )}

          {/* TAB 4: COST & EFFICIENCY */}
          {activeTab === "cost" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-[#E2EAE6]">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-sm text-[#12201B]">
                      Infrastructure Sizing & Cloud Spend Optimization
                    </h4>
                    <p className="text-xs text-[#52615B]">
                      Replacing bloated managed cloud tiers with tuned, predictable Linux VPS infrastructure.
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#059669] bg-[#ECFDF5] px-2.5 py-1 rounded-full">
                    Avg Savings: 50% - 75%
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-[#FFF1F2] border border-[#FECDD3]">
                    <div className="font-bold text-[#9F1239] text-sm mb-2">
                      Bloated Cloud Architecture (Overkill)
                    </div>
                    <ul className="space-y-2 text-[#881337]">
                      <li className="flex justify-between">
                        <span>Managed Kubernetes Cluster:</span>
                        <strong>$420 / mo</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Over-provisioned RDS PostgreSQL:</span>
                        <strong>$380 / mo</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Managed Redis Elasticache:</span>
                        <strong>$140 / mo</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Bandwidth & NAT Gateway egress:</span>
                        <strong>$190 / mo</strong>
                      </li>
                      <li className="pt-2 border-t border-[#FDA4AF] flex justify-between font-bold text-sm text-[#4C0519]">
                        <span>Total Monthly Cloud Bill:</span>
                        <span>$1,130 / mo</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0]">
                    <div className="font-bold text-[#166534] text-sm mb-2">
                      Dazzcode Tuned Linux VPS Architecture
                    </div>
                    <ul className="space-y-2 text-[#14532D]">
                      <li className="flex justify-between">
                        <span>Dedicated Hetzner/DO NVMe VPS (16 vCPU, 64GB):</span>
                        <strong>$85 / mo</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Optimized Native PostgreSQL + PgBouncer:</span>
                        <strong>Included ($0)</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Native Redis Instance (In-memory):</span>
                        <strong>Included ($0)</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Automated Encrypted Backups to S3:</span>
                        <strong>$12 / mo</strong>
                      </li>
                      <li className="pt-2 border-t border-[#86EFAC] flex justify-between font-bold text-sm text-[#052E16]">
                        <span>Total Optimized Monthly Bill:</span>
                        <span className="text-[#059669]">$97 / mo (91% lower)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#E2EAE6] text-xs text-[#52615B] flex items-center justify-between font-mono">
                <span>⚡ More raw CPU & NVMe IOPS throughput at a fraction of cloud markup.</span>
                <span className="text-[#059669] font-bold">Predictable Fixed Costs</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Banner */}
        <div className="px-6 py-3 bg-[#F8FAF9] border-t border-[#E2EAE6] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#52615B]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span>Architecture Status: Production-Hardened</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Measure</span>
            <span>→</span>
            <span>Diagnose</span>
            <span>→</span>
            <span>Optimize</span>
            <span>→</span>
            <span>Scale</span>
            <span>→</span>
            <span className="text-[#059669] font-bold">Monitor</span>
          </div>
        </div>
      </div>
    </div>
  );
}
