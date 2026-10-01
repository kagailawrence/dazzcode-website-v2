"use client";

import { useState } from "react";
import {
  ShoppingCart,
  ShieldCheck,
  Zap,
  Smartphone,
  CheckCircle2,
  TrendingUp,
  Package,
  CreditCard,
  Search,
  ArrowRight,
  Sparkles,
  Layers,
  Clock
} from "lucide-react";

type TabKey = "storefront" | "admin" | "speed";

export default function WooCommerceHeroPreview() {
  const [activeTab, setActiveTab] = useState<TabKey>("storefront");
  const [mpesaPhone, setMpesaPhone] = useState("0712 345 678");
  const [mpesaStatus, setMpesaStatus] = useState<"idle" | "sent" | "success">("idle");

  const handleSimulatePayment = () => {
    setMpesaStatus("sent");
    setTimeout(() => {
      setMpesaStatus("success");
    }, 1800);
  };

  const handleResetSimulation = () => {
    setMpesaStatus("idle");
  };

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
              store.kenya-shop.co.ke · WooCommerce 9.x
            </span>
          </div>

          {/* Tab Switchers */}
          <div className="flex items-center bg-[#FFFFFF] rounded-xl p-1 border border-[#E2EAE6] text-xs shadow-xs">
            <button
              onClick={() => setActiveTab("storefront")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                activeTab === "storefront"
                  ? "bg-[#059669] text-white font-bold shadow-xs"
                  : "text-[#52615B] hover:text-[#12201B]"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>M-Pesa Checkout Flow</span>
            </button>
            <button
              onClick={() => setActiveTab("admin")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                activeTab === "admin"
                  ? "bg-[#059669] text-white font-bold shadow-xs"
                  : "text-[#52615B] hover:text-[#12201B]"
              }`}
            >
              <Package className="w-3.5 h-3.5" />
              <span>WooCommerce Admin</span>
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
              <span>Speed & SEO Health</span>
            </button>
          </div>
        </div>

        {/* View Body */}
        <div className="p-5 md:p-6 min-h-[420px] flex flex-col justify-between bg-[#FFFFFF]">
          {/* TAB 1: M-PESA CHECKOUT & STOREFRONT */}
          {activeTab === "storefront" && (
            <div className="space-y-5 animate-reveal">
              {/* Product Header Strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E2EAE6]">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-[#12201B] tracking-tight">
                      Lipa na M-Pesa STK Push Integration
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] border border-[#10B981]/30 text-[10px] font-mono text-[#059669] font-bold">
                      Safaricom Daraja API 2.0
                    </span>
                  </div>
                  <p className="text-xs text-[#52615B] mt-0.5">
                    Fast mobile checkout designed for Kenyan customers with instant payment verification.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono bg-[#F8FAF9] px-3 py-1.5 rounded-lg border border-[#E2EAE6] text-[#059669] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Instant Webhook Callback (0.8s)</span>
                </div>
              </div>

              {/* Grid: Cart Summary + Live STK Simulation */}
              <div className="grid md:grid-cols-12 gap-5 items-start">
                {/* Left: Cart Items (Nairobi Store) */}
                <div className="md:col-span-6 space-y-3">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#52615B] flex items-center justify-between">
                    <span>Order Summary (#WOO-8492)</span>
                    <span className="text-[#059669]">2 Items</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#ECFDF5] border border-[#E2EAE6] flex items-center justify-center text-[#059669] font-bold text-xs">
                          👟
                        </div>
                        <div>
                          <p className="font-bold text-[#12201B]">Classic Leather Low-Tops</p>
                          <p className="text-[11px] text-[#52615B]">Size: 42 · Color: White</p>
                        </div>
                      </div>
                      <span className="font-black text-[#12201B]">KSh 4,500</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#ECFDF5] border border-[#E2EAE6] flex items-center justify-center text-[#059669] font-bold text-xs">
                          🎒
                        </div>
                        <div>
                          <p className="font-bold text-[#12201B]">Waterproof Laptop Backpack</p>
                          <p className="text-[11px] text-[#52615B]">Volume: 24L · Black</p>
                        </div>
                      </div>
                      <span className="font-black text-[#12201B]">KSh 3,200</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] flex items-center justify-between text-xs">
                      <span className="text-[#52615B]">Nairobi Delivery (Same-Day)</span>
                      <span className="font-bold text-[#059669]">KSh 300</span>
                    </div>

                    <div className="pt-2 flex items-center justify-between font-bold text-sm text-[#12201B] border-t border-[#E2EAE6] px-1">
                      <span>Total Amount Payable:</span>
                      <span className="text-base font-black text-[#059669]">KSh 8,000</span>
                    </div>
                  </div>
                </div>

                {/* Right: Live Interactive M-Pesa STK Push Box */}
                <div className="md:col-span-6 rounded-2xl bg-[#F8FAF9] border-2 border-[#059669]/30 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-[#059669] flex items-center justify-center text-white font-black text-[10px]">
                        M
                      </div>
                      <span className="font-bold text-xs text-[#12201B]">Lipa na M-Pesa Online</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded border border-[#059669]/20 font-bold">
                      Paybill 890200
                    </span>
                  </div>

                  {mpesaStatus === "idle" && (
                    <div className="space-y-3 pt-1 text-xs">
                      <div>
                        <label className="block text-[11px] font-mono text-[#52615B] mb-1">
                          Enter Safaricom M-Pesa Phone Number:
                        </label>
                        <input
                          type="text"
                          value={mpesaPhone}
                          onChange={(e) => setMpesaPhone(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-white border border-[#E2EAE6] text-xs font-mono text-[#12201B] focus:outline-none focus:border-[#059669]"
                          placeholder="07XX XXX XXX"
                        />
                      </div>
                      <p className="text-[11px] text-[#52615B] leading-relaxed">
                        Clicking below sends an STK prompt directly to your phone. Enter your M-Pesa PIN to complete payment.
                      </p>
                      <button
                        onClick={handleSimulatePayment}
                        className="w-full py-2.5 px-4 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
                      >
                        <span>Send M-Pesa Prompt (KSh 8,000)</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {mpesaStatus === "sent" && (
                    <div className="py-6 text-center space-y-3">
                      <div className="w-10 h-10 rounded-full bg-[#ECFDF5] border border-[#059669] text-[#059669] flex items-center justify-center mx-auto animate-spin">
                        <Clock className="w-5 h-5" />
                      </div>
                      <p className="font-bold text-xs text-[#12201B]">
                        STK PIN Prompt sent to {mpesaPhone}...
                      </p>
                      <p className="text-[11px] text-[#52615B]">
                        Awaiting Safaricom C2B Daraja callback confirmation
                      </p>
                    </div>
                  )}

                  {mpesaStatus === "success" && (
                    <div className="p-3 rounded-xl bg-[#ECFDF5] border border-[#10B981]/40 space-y-2 text-xs">
                      <div className="flex items-center gap-2 text-[#059669] font-bold">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Payment Received & Verified!</span>
                      </div>
                      <div className="text-[11px] font-mono text-[#52615B] space-y-1">
                        <p><strong>Receipt:</strong> QKT892H10 · KSh 8,000</p>
                        <p><strong>Status:</strong> Order auto-updated to &quot;Processing&quot;</p>
                        <p><strong>SMS:</strong> Customer SMS receipt auto-dispatched</p>
                      </div>
                      <button
                        onClick={handleResetSimulation}
                        className="mt-2 text-[11px] font-mono text-[#059669] underline hover:text-[#047857] cursor-pointer"
                      >
                        Reset Demo Simulation
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Highlights bar */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-mono text-[#52615B]">
                <span className="text-[#12201B] font-semibold">Payment Capabilities:</span>
                {["M-Pesa STK Push", "Paybill & Till Integration", "Credit/Debit Cards", "Bank Transfer", "Cash on Delivery", "Automated SMS"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-[#F8FAF9] border border-[#E2EAE6] text-[#12201B]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: WOOCOMMERCE ADMIN & ORDERS */}
          {activeTab === "admin" && (
            <div className="space-y-5 animate-reveal">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E2EAE6]">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-[#12201B] tracking-tight">
                      WooCommerce Store Management Dashboard
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] border border-[#10B981]/30 text-[10px] font-mono text-[#059669] font-bold">
                      Live Store Health: 100%
                    </span>
                  </div>
                  <p className="text-xs text-[#52615B] mt-0.5">
                    Real-time sales, order fulfillment, stock tracking, and Kenyan customer analytics.
                  </p>
                </div>
                <div className="text-[11px] font-mono bg-[#F8FAF9] px-3 py-1.5 rounded-lg border border-[#E2EAE6] text-[#059669] font-medium">
                  <span>Currency: Kenyan Shillings (KSh)</span>
                </div>
              </div>

              {/* Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <p className="text-[10px] font-mono uppercase text-[#52615B]">This Month Sales</p>
                  <p className="text-xl font-black text-[#12201B] tracking-tight mt-1">KSh 482,500</p>
                  <span className="text-[10px] font-bold text-[#059669] flex items-center gap-0.5 mt-0.5">
                    <TrendingUp className="w-3 h-3" /> +28.4% vs last month
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <p className="text-[10px] font-mono uppercase text-[#52615B]">Total Orders</p>
                  <p className="text-xl font-black text-[#12201B] tracking-tight mt-1">214 Orders</p>
                  <span className="text-[10px] font-mono text-[#52615B] mt-0.5 block">
                    Avg: KSh 2,254 / order
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <p className="text-[10px] font-mono uppercase text-[#52615B]">Active Catalog</p>
                  <p className="text-xl font-black text-[#12201B] tracking-tight mt-1">84 Products</p>
                  <span className="text-[10px] font-bold text-[#059669] mt-0.5 block">
                    0 out of stock
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <p className="text-[10px] font-mono uppercase text-[#52615B]">M-Pesa Settlements</p>
                  <p className="text-xl font-black text-[#12201B] tracking-tight mt-1">94.2%</p>
                  <span className="text-[10px] font-mono text-[#059669] font-bold mt-0.5 block">
                    Direct to Business Bank
                  </span>
                </div>
              </div>

              {/* Recent Orders Table */}
              <div className="rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] p-3 space-y-2">
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#059669] font-bold px-1">
                  ⚡ Recent Store Orders (Nairobi, Mombasa, Kisumu, Nakuru)
                </p>
                <div className="space-y-1.5 text-xs font-mono">
                  <div className="flex items-center justify-between bg-[#FFFFFF] p-2 rounded-lg border border-[#E2EAE6]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                      <span className="font-bold text-[#12201B]">#8492 · John K. (Westlands, Nairobi)</span>
                      <span className="text-[#52615B] hidden sm:inline">2 items · M-Pesa STK</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-[#059669]">KSh 8,000</span>
                      <span className="px-2 py-0.5 rounded bg-[#ECFDF5] text-[#059669] font-bold text-[10px]">Processing</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-[#FFFFFF] p-2 rounded-lg border border-[#E2EAE6]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                      <span className="font-bold text-[#12201B]">#8491 · Mercy W. (Nyali, Mombasa)</span>
                      <span className="text-[#52615B] hidden sm:inline">1 item · Lipa na M-Pesa</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-[#059669]">KSh 3,450</span>
                      <span className="px-2 py-0.5 rounded bg-[#ECFDF5] text-[#059669] font-bold text-[10px]">Dispatched</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-[#FFFFFF] p-2 rounded-lg border border-[#E2EAE6]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                      <span className="font-bold text-[#12201B]">#8490 · David O. (Milimani, Kisumu)</span>
                      <span className="text-[#52615B] hidden sm:inline">3 items · Card Billing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-[#059669]">KSh 12,200</span>
                      <span className="px-2 py-0.5 rounded bg-[#ECFDF5] text-[#059669] font-bold text-[10px]">Delivered</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-mono text-[#52615B]">
                <span className="text-[#12201B] font-semibold">Store Features:</span>
                {["Stock Alerts", "Invoice PDF Generation", "Rider Dispatch Slips", "Coupon Engine", "Customer Accounts", "Sales Reports"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-[#F8FAF9] border border-[#E2EAE6] text-[#12201B]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SPEED & TECHNICAL SEO HEALTH */}
          {activeTab === "speed" && (
            <div className="space-y-5 animate-reveal">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E2EAE6]">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-[#12201B] tracking-tight">
                      Technical Performance & Ecommerce SEO
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] border border-[#10B981]/30 text-[10px] font-mono text-[#059669] font-bold">
                      Google PageSpeed: 98/100
                    </span>
                  </div>
                  <p className="text-xs text-[#52615B] mt-0.5">
                    Fast mobile load times, clean database indexing, and structured schema for Google Shopping.
                  </p>
                </div>
                <div className="text-[11px] font-mono bg-[#F8FAF9] px-3 py-1.5 rounded-lg border border-[#E2EAE6] text-[#059669] font-medium">
                  <span>Server TTFB: 180ms</span>
                </div>
              </div>

              {/* Metric Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <p className="text-[10px] font-mono uppercase text-[#52615B]">Mobile Load Time</p>
                  <p className="text-xl font-black text-[#12201B] tracking-tight mt-1">0.85s</p>
                  <span className="text-[10px] font-bold text-[#059669] mt-0.5 block">Sub-1s Target Met</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <p className="text-[10px] font-mono uppercase text-[#52615B]">Core Web Vitals</p>
                  <p className="text-xl font-black text-[#12201B] tracking-tight mt-1">Passed</p>
                  <span className="text-[10px] font-mono text-[#059669] mt-0.5 block">LCP 0.9s · CLS 0.01</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <p className="text-[10px] font-mono uppercase text-[#52615B]">Product SEO Schema</p>
                  <p className="text-xl font-black text-[#12201B] tracking-tight mt-1">100% Valid</p>
                  <span className="text-[10px] font-bold text-[#059669] mt-0.5 block">Rich Snippets Active</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <p className="text-[10px] font-mono uppercase text-[#52615B]">Database Queries</p>
                  <p className="text-xl font-black text-[#12201B] tracking-tight mt-1">Redis Cached</p>
                  <span className="text-[10px] font-mono text-[#52615B] mt-0.5 block">0 slow MySQL queries</span>
                </div>
              </div>

              {/* Optimization Checkmarks */}
              <div className="rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] p-4 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#059669] font-bold">📋 Built-In Technical Optimization Standards</span>
                  <span className="text-[#52615B]">Production Grade</span>
                </div>
                <div className="space-y-1.5 text-xs text-[#52615B]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                    <span>WebP/AVIF automated image compression for instant product grid rendering on mobile networks.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                    <span>Product, Offer, and BreadcrumbList JSON-LD structured data configured for Google Search & Shopping.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                    <span>Redis object caching and OPcache enabled to handle traffic spikes during sales campaigns.</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-mono text-[#52615B]">
                <span className="text-[#12201B] font-semibold">Technical Stack:</span>
                {["WordPress 6.x", "WooCommerce 9.x", "Redis Cache", "Nginx FastCGI", "Let's Encrypt SSL", "Cloudflare CDN"].map((tag) => (
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
              Kenya Ecommerce Architecture
            </span>
            <span>M-Pesa · Fast Mobile UX · Secure Linux Hosting</span>
          </div>
          <div className="font-mono text-[#12201B] font-medium">
            Engineered by Dazzcode in Nairobi, Kenya
          </div>
        </div>
      </div>
    </div>
  );
}
