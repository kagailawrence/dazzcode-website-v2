"use client";

import { useState } from "react";
import {
  Zap,
  Sparkles,
  Bot,
  Layers,
  Database,
  Users,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Workflow,
  MessageSquare,
  ShieldCheck,
  Building2,
  Mail,
  Clock,
  Radio,
  Sliders,
  Check,
  X,
  CreditCard,
  FileCode2,
  Activity
} from "lucide-react";

export default function AiAutomationHeroPreview() {
  const [activeTab, setActiveTab] = useState<"pipeline" | "comparison" | "stack" | "guardrails">("pipeline");

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-10">
      {/* Decorative ambient glow */}
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
              https://automation.dazzcode.com/workflows/live-orchestration
            </span>
          </div>

          {/* Interactive Mode Switcher */}
          <div className="flex items-center gap-1 bg-[#FFFFFF] p-1 rounded-xl border border-[#E2EAE6] text-xs font-medium overflow-x-auto">
            <button
              onClick={() => setActiveTab("pipeline")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === "pipeline"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <Workflow className="w-3.5 h-3.5" />
              <span>Workflow Pipeline</span>
            </button>
            <button
              onClick={() => setActiveTab("comparison")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === "comparison"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI vs Traditional</span>
            </button>
            <button
              onClick={() => setActiveTab("stack")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === "stack"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Connected Stack</span>
            </button>
            <button
              onClick={() => setActiveTab("guardrails")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === "guardrails"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Reliability & Guardrails</span>
            </button>
          </div>
        </div>

        {/* Live Status Header */}
        <div className="px-6 py-3 bg-[#F0FDF4] border-b border-[#DCFCE7] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-bold text-[#047857]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              AUTOMATION ENGINE: RUNNING
            </span>
            <span className="text-[#52615B] hidden md:inline">|</span>
            <span className="text-[#52615B] hidden md:inline">Zod Validated Output · BullMQ Async</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-[#52615B]">
            <div>
              <span className="text-[#047857] font-semibold">Latency:</span> 180ms
            </div>
            <div>
              <span className="text-[#047857] font-semibold">Error Rate:</span> 0.00%
            </div>
            <div>
              <span className="text-[#047857] font-semibold">Human Review:</span> 4% Exceptions
            </div>
          </div>
        </div>

        {/* Mockup Body Content */}
        <div className="p-6 md:p-8 bg-[#FAFCFB]">
          {/* TAB 1: WORKFLOW PIPELINE */}
          {activeTab === "pipeline" && (
            <div className="space-y-6">
              {/* Architecture Cascade Diagram */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-3">
                {/* 1. Inbound Channel */}
                <div className="p-3.5 rounded-xl bg-white border border-[#E2EAE6] shadow-xs">
                  <div className="text-[10px] font-mono text-[#059669] font-bold uppercase mb-1">01. Inbound</div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <MessageSquare className="w-4 h-4 text-[#059669]" />
                    <h4 className="font-bold text-xs text-[#12201B]">Customer Inquiry</h4>
                  </div>
                  <p className="text-[11px] text-[#52615B]">Form, WhatsApp, or Email submitted</p>
                  <div className="mt-2 text-[10px] font-mono text-[#059669] bg-[#ECFDF5] px-1.5 py-0.5 rounded inline-block">
                    Webhook Trigger
                  </div>
                </div>

                {/* 2. Automation Layer */}
                <div className="p-3.5 rounded-xl bg-white border border-[#E2EAE6] shadow-xs">
                  <div className="text-[10px] font-mono text-[#059669] font-bold uppercase mb-1">02. Engine</div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <Workflow className="w-4 h-4 text-[#059669]" />
                    <h4 className="font-bold text-xs text-[#12201B]">Automation Router</h4>
                  </div>
                  <p className="text-[11px] text-[#52615B]">Ingests payload, checks dedup & logs</p>
                  <div className="mt-2 text-[10px] font-mono text-[#52615B] bg-[#F1F5F3] px-1.5 py-0.5 rounded inline-block">
                    BullMQ Queue
                  </div>
                </div>

                {/* 3. AI Processing */}
                <div className="p-3.5 rounded-xl bg-white border border-[#059669]/40 ring-1 ring-[#059669]/20 shadow-xs">
                  <div className="text-[10px] font-mono text-[#047857] font-bold uppercase mb-1">03. AI Logic</div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-4 h-4 text-[#059669]" />
                    <h4 className="font-bold text-xs text-[#12201B]">Context & Intent</h4>
                  </div>
                  <p className="text-[11px] text-[#52615B]">Extracts schema, intent & urgency</p>
                  <div className="mt-2 text-[10px] font-mono text-[#047857] bg-[#ECFDF5] px-1.5 py-0.5 rounded inline-block font-bold">
                    JSON Schema
                  </div>
                </div>

                {/* 4. Business Systems */}
                <div className="p-3.5 rounded-xl bg-white border border-[#E2EAE6] shadow-xs">
                  <div className="text-[10px] font-mono text-[#059669] font-bold uppercase mb-1">04. Systems</div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <Database className="w-4 h-4 text-[#059669]" />
                    <h4 className="font-bold text-xs text-[#12201B]">CRM & Database</h4>
                  </div>
                  <p className="text-[11px] text-[#52615B]">Updates PostgreSQL & sales records</p>
                  <div className="mt-2 text-[10px] font-mono text-[#52615B] bg-[#F1F5F3] px-1.5 py-0.5 rounded inline-block">
                    Auto-Synced
                  </div>
                </div>

                {/* 5. Execution / Payments */}
                <div className="p-3.5 rounded-xl bg-white border border-[#E2EAE6] shadow-xs">
                  <div className="text-[10px] font-mono text-[#059669] font-bold uppercase mb-1">05. Actions</div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <CreditCard className="w-4 h-4 text-[#059669]" />
                    <h4 className="font-bold text-xs text-[#12201B]">Payments & Notify</h4>
                  </div>
                  <p className="text-[11px] text-[#52615B]">M-Pesa STK push, invoice & alert</p>
                  <div className="mt-2 text-[10px] font-mono text-[#059669] bg-[#ECFDF5] px-1.5 py-0.5 rounded inline-block">
                    Instant Trigger
                  </div>
                </div>

                {/* 6. Completed */}
                <div className="p-3.5 rounded-xl bg-white border border-[#E2EAE6] shadow-xs">
                  <div className="text-[10px] font-mono text-[#059669] font-bold uppercase mb-1">Result</div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                    <h4 className="font-bold text-xs text-[#12201B]">Task Complete</h4>
                  </div>
                  <p className="text-[11px] text-[#52615B]">Customer served in &lt; 5 seconds</p>
                  <div className="mt-2 text-[10px] font-mono text-[#059669] bg-[#ECFDF5] px-1.5 py-0.5 rounded inline-block font-bold">
                    Zero Manual Work
                  </div>
                </div>
              </div>

              {/* Real-time Telemetry Metrics */}
              <div className="p-4 rounded-2xl bg-white border border-[#E2EAE6] shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#12201B]">
                        Automated Operational Dispatch
                      </h4>
                      <p className="text-xs text-[#52615B]">
                        Connecting customer inquiries directly to databases, payments, and staff dashboards.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#059669] bg-[#ECFDF5] px-3 py-1 rounded-full">
                    Deterministic Reliability
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="text-[#52615B] text-[11px]">Avg Response Time</div>
                    <div className="text-base font-bold text-[#059669] mt-0.5">3.4 Seconds</div>
                    <div className="text-[10px] text-[#059669]">Down from 45 minutes</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="text-[#52615B] text-[11px]">Staff Hours Saved</div>
                    <div className="text-base font-bold text-[#12201B] mt-0.5">28 hrs / week</div>
                    <div className="text-[10px] text-[#059669]">Zero copy-paste work</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="text-[#52615B] text-[11px]">Lead Qualification</div>
                    <div className="text-base font-bold text-[#059669] mt-0.5">100% Automated</div>
                    <div className="text-[10px] text-[#52615B]">Instant categorization</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="text-[#52615B] text-[11px]">Data Accuracy</div>
                    <div className="text-base font-bold text-[#059669] mt-0.5">99.98%</div>
                    <div className="text-[10px] text-[#059669]">Zod Schema Validated</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: AI VS TRADITIONAL */}
          {activeTab === "comparison" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-[#E2EAE6]">
                <h4 className="font-bold text-sm text-[#12201B] mb-2">
                  Not Every Workflow Needs AI: Hybrid Architecture
                </h4>
                <p className="text-xs text-[#52615B] mb-4">
                  We use deterministic code for predictable rules, and apply AI strictly where context and natural language interpretation create real business value.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="font-bold text-[#12201B] text-sm mb-2 flex items-center gap-2">
                      <Workflow className="w-4 h-4 text-[#059669]" />
                      Deterministic Code (No AI Needed)
                    </div>
                    <ul className="space-y-2 text-[#52615B] font-mono text-[11px]">
                      <li>• If order status = paid $\rightarrow$ generate invoice</li>
                      <li>• If stock &lt; 10 units $\rightarrow$ trigger purchase alert</li>
                      <li>• Sync M-Pesa transaction ID to accounting database</li>
                      <li>• Scheduled weekly report generation & PDF export</li>
                    </ul>
                    <div className="mt-3 pt-2 border-t border-[#E2EAE6] text-[10px] font-mono text-[#059669] font-bold">
                      ✓ 100% Predictable, Fast & $0 API Token Cost
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0]">
                    <div className="font-bold text-[#047857] text-sm mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#059669]" />
                      Intelligent AI-Powered Tasks
                    </div>
                    <ul className="space-y-2 text-[#065F46] font-mono text-[11px]">
                      <li>• Parsing unstructured PDF contracts & vendor receipts</li>
                      <li>• Understanding customer intent in freeform WhatsApp chats</li>
                      <li>• Qualifying inbound leads based on complex business criteria</li>
                      <li>• Semantic search across internal knowledge bases (RAG)</li>
                    </ul>
                    <div className="mt-3 pt-2 border-t border-[#A7F3D0] text-[10px] font-mono text-[#047857] font-bold">
                      ✓ Context-Aware Reasoning with Structured Outputs
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#E2EAE6] text-xs text-[#52615B] flex items-center justify-between font-mono">
                <span>💡 Pragmatic engineering: never add AI just because it&apos;s fashionable.</span>
                <span className="text-[#059669] font-bold">High-ROI Automation</span>
              </div>
            </div>
          )}

          {/* TAB 3: CONNECTED STACK */}
          {activeTab === "stack" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-[#E2EAE6]">
                <h4 className="font-bold text-sm text-[#12201B] mb-2">
                  Make Your Existing Software Work Smarter
                </h4>
                <p className="text-xs text-[#52615B] mb-4">
                  We don&apos;t force you to replace your existing tools. We build the intelligent automation glue connecting your systems in real-time.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="font-bold text-[#12201B] mb-1">M-Pesa Daraja 2.0</div>
                    <p className="text-[#52615B] text-[11px]">Instant STK Push, C2B webhooks & automated ledger match.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="font-bold text-[#12201B] mb-1">WhatsApp Cloud API</div>
                    <p className="text-[#52615B] text-[11px]">Automated dispatch alerts & AI customer conversations.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="font-bold text-[#12201B] mb-1">CRMs & Databases</div>
                    <p className="text-[#52615B] text-[11px]">HubSpot, Salesforce, PostgreSQL, MySQL real-time sync.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="font-bold text-[#12201B] mb-1">Accounting Systems</div>
                    <p className="text-[#52615B] text-[11px]">QuickBooks, Xero, and custom internal financial tools.</p>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#F0FDF4] border border-[#DCFCE7] text-xs text-[#065F46] font-mono flex items-center justify-between">
                <span>⚡ Bi-directional webhook synchronization eliminates duplicate data entry forever.</span>
                <span className="font-bold text-[#059669]">Zero Disconnect</span>
              </div>
            </div>
          )}

          {/* TAB 4: RELIABILITY & GUARDRAILS */}
          {activeTab === "guardrails" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-[#E2EAE6]">
                <h4 className="font-bold text-sm text-[#12201B] mb-3">
                  Production Failure Handling & Human-in-the-Loop
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="font-bold text-[#12201B] mb-1">1. Automatic Retries</div>
                    <p className="text-[#52615B] text-[11px]">
                      Exponential backoff prevents data loss when third-party APIs experience temporary downtime.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="font-bold text-[#12201B] mb-1">2. Zero Hallucination</div>
                    <p className="text-[#52615B] text-[11px]">
                      Strict Zod & JSON Schema validation rejects malformed LLM outputs before they hit the database.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="font-bold text-[#12201B] mb-1">3. Human Escalation</div>
                    <p className="text-[#52615B] text-[11px]">
                      Edge-case exceptions route directly to staff dashboards with 1-click review and manual approval.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] text-xs flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  Enterprise security: zero-retention commercial API agreements keep sensitive business data private.
                </span>
                <span className="font-mono font-bold text-[11px]">Data Privacy</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="px-6 py-3 bg-[#F8FAF9] border-t border-[#E2EAE6] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#52615B]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span>Architecture: Production AI & Workflow Automation</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Understand</span>
            <span>→</span>
            <span>Identify</span>
            <span>→</span>
            <span>Design</span>
            <span>→</span>
            <span>Build</span>
            <span>→</span>
            <span>Deploy</span>
            <span>→</span>
            <span className="text-[#059669] font-bold">Monitor</span>
          </div>
        </div>
      </div>
    </div>
  );
}
