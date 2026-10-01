"use client";

import { useState } from "react";
import {
  Globe,
  Database,
  Users,
  CreditCard,
  Layers,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  BarChart3,
  MessageSquare,
  HardDrive,
  Box,
  Building2,
  Workflow,
  Sparkles,
  Sliders
} from "lucide-react";

export default function CustomWebApplicationHeroPreview() {
  const [activeTab, setActiveTab] = useState<"hub" | "workflow" | "integrations" | "roi">("hub");

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-10">
      {/* Decorative ambient glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-[#059669]/20 via-[#10B981]/20 to-[#047857]/20 rounded-3xl blur-xl opacity-70 pointer-events-none" />

      {/* Main Container */}
      <div className="relative rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xl overflow-hidden text-[#12201B]">
        {/* Browser Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-[#F8FAF9] border-b border-[#E2EAE6]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
            <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
            <div className="w-3 h-3 rounded-full bg-[#10B981]/80" />
            <span className="ml-2 text-xs font-mono text-[#52615B] hidden sm:inline">
              https://portal.yourbusiness.co.ke/dashboard
            </span>
          </div>

          {/* Interactive Mode Switcher */}
          <div className="flex items-center gap-1 bg-[#FFFFFF] p-1 rounded-xl border border-[#E2EAE6] text-xs font-medium overflow-x-auto">
            <button
              onClick={() => setActiveTab("hub")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === "hub"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Connected Business Hub</span>
            </button>
            <button
              onClick={() => setActiveTab("workflow")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === "workflow"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <Workflow className="w-3.5 h-3.5" />
              <span>Role Workflows</span>
            </button>
            <button
              onClick={() => setActiveTab("integrations")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === "integrations"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>APIs & M-Pesa</span>
            </button>
            <button
              onClick={() => setActiveTab("roi")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === "roi"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Custom vs Spreadsheet</span>
            </button>
          </div>
        </div>

        {/* Live Status Header */}
        <div className="px-6 py-3 bg-[#F0FDF4] border-b border-[#DCFCE7] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-bold text-[#047857]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              CUSTOM BUSINESS ENGINE: ACTIVE
            </span>
            <span className="text-[#52615B] hidden md:inline">|</span>
            <span className="text-[#52615B] hidden md:inline">Next.js 15 + PostgreSQL + RBAC</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-[#52615B]">
            <div>
              <span className="text-[#047857] font-semibold">Roles:</span> Admin, Ops, Customer
            </div>
            <div>
              <span className="text-[#047857] font-semibold">Integrations:</span> M-Pesa + WhatsApp + DB
            </div>
            <div>
              <span className="text-[#047857] font-semibold">Sync:</span> Real-Time
            </div>
          </div>
        </div>

        {/* Mockup Body Content */}
        <div className="p-6 md:p-8 bg-[#FAFCFB]">
          {/* TAB 1: CONNECTED BUSINESS HUB */}
          {activeTab === "hub" && (
            <div className="space-y-6">
              {/* Central Web Application Visual Flow */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* Hub Node 1: Customers */}
                <div className="p-3.5 rounded-xl bg-white border border-[#E2EAE6] shadow-xs">
                  <div className="text-[10px] font-mono text-[#059669] font-bold uppercase mb-1">Module 01</div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <Users className="w-4 h-4 text-[#059669]" />
                    <h4 className="font-bold text-xs text-[#12201B]">Customer Portal</h4>
                  </div>
                  <p className="text-[11px] text-[#52615B]">Self-service ordering, tracking & invoices</p>
                  <div className="mt-2 text-[10px] font-mono text-[#059669] bg-[#ECFDF5] px-1.5 py-0.5 rounded inline-block">
                    2,400+ Active Users
                  </div>
                </div>

                {/* Hub Node 2: Staff & Roles */}
                <div className="p-3.5 rounded-xl bg-white border border-[#E2EAE6] shadow-xs">
                  <div className="text-[10px] font-mono text-[#059669] font-bold uppercase mb-1">Module 02</div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <Workflow className="w-4 h-4 text-[#059669]" />
                    <h4 className="font-bold text-xs text-[#12201B]">Staff & Workflows</h4>
                  </div>
                  <p className="text-[11px] text-[#52615B]">Multi-tier approvals & task routing</p>
                  <div className="mt-2 text-[10px] font-mono text-[#52615B] bg-[#F1F5F3] px-1.5 py-0.5 rounded inline-block">
                    4 Custom Roles
                  </div>
                </div>

                {/* Hub Node 3: Payments */}
                <div className="p-3.5 rounded-xl bg-white border border-[#059669]/40 ring-1 ring-[#059669]/20 shadow-xs">
                  <div className="text-[10px] font-mono text-[#047857] font-bold uppercase mb-1">Module 03</div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <CreditCard className="w-4 h-4 text-[#059669]" />
                    <h4 className="font-bold text-xs text-[#12201B]">Payments & M-Pesa</h4>
                  </div>
                  <p className="text-[11px] text-[#52615B]">STK Push, Daraja C2B/B2C, Stripe billing</p>
                  <div className="mt-2 text-[10px] font-mono text-[#047857] bg-[#ECFDF5] px-1.5 py-0.5 rounded inline-block font-bold">
                    Automated Reconciliation
                  </div>
                </div>

                {/* Hub Node 4: Inventory & Ops */}
                <div className="p-3.5 rounded-xl bg-white border border-[#E2EAE6] shadow-xs">
                  <div className="text-[10px] font-mono text-[#059669] font-bold uppercase mb-1">Module 04</div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <Box className="w-4 h-4 text-[#059669]" />
                    <h4 className="font-bold text-xs text-[#12201B]">Inventory & Ops</h4>
                  </div>
                  <p className="text-[11px] text-[#52615B]">Multi-branch stock sync & low alerts</p>
                  <div className="mt-2 text-[10px] font-mono text-[#059669] bg-[#ECFDF5] px-1.5 py-0.5 rounded inline-block">
                    Zero Discrepancies
                  </div>
                </div>
              </div>

              {/* Central Application Banner */}
              <div className="p-4 rounded-2xl bg-white border border-[#E2EAE6] shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#12201B]">
                        Central Business Web Application
                      </h4>
                      <p className="text-xs text-[#52615B]">
                        One unified web platform connecting customers, staff, payments, and data in real-time.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#059669] bg-[#ECFDF5] px-3 py-1 rounded-full">
                    100% Custom Business Logic
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="text-[#52615B] text-[11px]">Database Speed</div>
                    <div className="text-base font-bold text-[#059669] mt-0.5">PostgreSQL</div>
                    <div className="text-[10px] text-[#059669]">Indexed queries &lt; 15ms</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="text-[#52615B] text-[11px]">WhatsApp Sync</div>
                    <div className="text-base font-bold text-[#12201B] mt-0.5">Automated</div>
                    <div className="text-[10px] text-[#059669]">Instant customer alerts</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="text-[#52615B] text-[11px]">Reports & Exports</div>
                    <div className="text-base font-bold text-[#059669] mt-0.5">1-Click PDF/CSV</div>
                    <div className="text-[10px] text-[#52615B]">Automated daily summaries</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="text-[#52615B] text-[11px]">Per-Seat License</div>
                    <div className="text-base font-bold text-[#059669] mt-0.5">$0 / Month</div>
                    <div className="text-[10px] text-[#059669]">Unlimited internal users</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ROLE WORKFLOWS */}
          {activeTab === "workflow" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-[#E2EAE6]">
                <h4 className="font-bold text-sm text-[#12201B] mb-2">
                  Role-Based Access Control (RBAC) & Custom Workflows
                </h4>
                <p className="text-xs text-[#52615B] mb-4">
                  Control precisely what each user type can view, create, edit, approve, or export.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-xs text-[#12201B]">Administrator</span>
                      <span className="text-[10px] font-mono text-[#059669] bg-[#ECFDF5] px-1.5 py-0.5 rounded font-bold">
                        Full Access
                      </span>
                    </div>
                    <ul className="text-[11px] text-[#52615B] space-y-1 font-mono">
                      <li>• Financial audit logs & M-Pesa sync</li>
                      <li>• User creation & role permissions</li>
                      <li>• Global business reporting dashboards</li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-xs text-[#12201B]">Operations Staff</span>
                      <span className="text-[10px] font-mono text-[#52615B] bg-white px-1.5 py-0.5 rounded border border-[#E2EAE6]">
                        Workflow Scoped
                      </span>
                    </div>
                    <ul className="text-[11px] text-[#52615B] space-y-1 font-mono">
                      <li>• Order processing & fulfillment</li>
                      <li>• Inventory movement entry</li>
                      <li>• Customer support ticketing</li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-xs text-[#12201B]">External Customer</span>
                      <span className="text-[10px] font-mono text-[#059669] bg-[#ECFDF5] px-1.5 py-0.5 rounded font-bold">
                        Self-Service
                      </span>
                    </div>
                    <ul className="text-[11px] text-[#52615B] space-y-1 font-mono">
                      <li>• View private account orders & quotes</li>
                      <li>• M-Pesa express one-tap checkout</li>
                      <li>• Download official PDF invoices</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] text-xs flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  Zero data leaks across user roles. Enforced at the API and database query levels.
                </span>
                <span className="font-mono font-bold text-[11px]">Secure Permissions</span>
              </div>
            </div>
          )}

          {/* TAB 3: INTEGRATIONS */}
          {activeTab === "integrations" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-[#E2EAE6]">
                <h4 className="font-bold text-sm text-[#12201B] mb-2">
                  Custom Integrations Connecting Your Software Stack
                </h4>
                <p className="text-xs text-[#52615B] mb-4">
                  Connect your custom web application to the payment rails, communication channels, and accounting tools you rely on daily.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="font-bold text-[#12201B] mb-1">M-Pesa Daraja 2.0</div>
                    <p className="text-[#52615B] text-[11px]">Instant STK Push & C2B webhook reconciliation.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="font-bold text-[#12201B] mb-1">WhatsApp Cloud API</div>
                    <p className="text-[#52615B] text-[11px]">Automated dispatch alerts & order updates.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="font-bold text-[#12201B] mb-1">QuickBooks / Xero</div>
                    <p className="text-[#52615B] text-[11px]">Automatic invoice & ledger synchronization.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                    <div className="font-bold text-[#12201B] mb-1">Stripe & Global Cards</div>
                    <p className="text-[#52615B] text-[11px]">International payments and recurring subscriptions.</p>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#F0FDF4] border border-[#DCFCE7] text-xs text-[#065F46] font-mono flex items-center justify-between">
                <span>⚡ Real-time webhooks eliminate manual data transfers between disconnected apps.</span>
                <span className="font-bold text-[#059669]">Automated Sync</span>
              </div>
            </div>
          )}

          {/* TAB 4: ROI */}
          {activeTab === "roi" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-[#E2EAE6]">
                <h4 className="font-bold text-sm text-[#12201B] mb-3">
                  Why Businesses Upgrade from Spreadsheets to Custom Web Applications
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-[#FFF1F2] border border-[#FECDD3]">
                    <div className="font-bold text-[#9F1239] text-sm mb-2">
                      Messy Spreadsheets & Manual Tools
                    </div>
                    <ul className="space-y-1.5 text-[#881337] font-mono text-[11px]">
                      <li>❌ Accidental formula overwrites & data corruption</li>
                      <li>❌ Zero role-based permission control (all-or-nothing)</li>
                      <li>❌ Hours wasted copying data between different files</li>
                      <li>❌ No customer self-service access</li>
                      <li>❌ Slow, manual reconciliation of M-Pesa payments</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0]">
                    <div className="font-bold text-[#166534] text-sm mb-2">
                      Dazzcode Custom Web Application
                    </div>
                    <ul className="space-y-1.5 text-[#14532D] font-mono text-[11px]">
                      <li>✓ Structured PostgreSQL database with strict data validation</li>
                      <li>✓ Granular role permissions for staff, managers & customers</li>
                      <li>✓ Automated real-time data sync across all branches</li>
                      <li>✓ Secure customer self-service login portal</li>
                      <li>✓ Instant M-Pesa STK push & automatic ledger matching</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#E2EAE6] text-xs text-[#52615B] flex items-center justify-between font-mono">
                <span>💡 You own 100% of the software and data. Zero recurring per-seat user taxes.</span>
                <span className="text-[#059669] font-bold">High ROI Asset</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="px-6 py-3 bg-[#F8FAF9] border-t border-[#E2EAE6] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#52615B]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span>Architecture: Custom Business Web Application</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Plan</span>
            <span>→</span>
            <span>Design</span>
            <span>→</span>
            <span>Build</span>
            <span>→</span>
            <span>Integrate</span>
            <span>→</span>
            <span>Deploy</span>
            <span>→</span>
            <span className="text-[#059669] font-bold">Improve</span>
          </div>
        </div>
      </div>
    </div>
  );
}
