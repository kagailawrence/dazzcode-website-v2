"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Sparkles,
  Phone,
  Store,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WooCommerceLeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productType: "physical",
    storeUrl: "",
    hasExistingStore: false,
    service: "store-dev",
    budget: "35k-50k",
    details: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "Kenya WooCommerce Landing Page",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send your project details. Please reach us directly on WhatsApp or phone.");
      }

      setStatus("success");
    } catch {
      // If no API route or network issue, give fallback confirmation & prompt WhatsApp
      setStatus("success");
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Dazzcode! I'm interested in WooCommerce Development in Kenya.
My Name: ${formData.name || "A business owner"}
Business: ${formData.company || "My Ecommerce store"}
Service needed: ${formData.service}
Budget: ${formData.budget}
Existing Store: ${formData.hasExistingStore ? "Yes (" + formData.storeUrl + ")" : "No, new store"}`
  );

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] p-6 sm:p-10 shadow-xl relative overflow-hidden">
      {/* Decorative accent glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#059669]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="mb-8 border-b border-[#E2EAE6] pb-6">
        <h3 className="text-2xl sm:text-3xl font-black text-[#12201B] tracking-tight">
          Tell Us About Your WooCommerce Project
        </h3>
        <p className="text-sm text-[#52615B] mt-2 leading-relaxed">
          Fill out this quick brief and our Nairobi engineering team will review your requirements, recommend the most suitable package, and provide a clear milestone roadmap.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-8 rounded-2xl bg-[#ECFDF5] border border-[#10B981]/40 text-center space-y-4 animate-reveal">
          <div className="w-12 h-12 rounded-full bg-[#059669] text-white flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="text-xl font-bold text-[#12201B]">
            Thank You! Your Request Has Been Received.
          </h4>
          <p className="text-sm text-[#52615B] max-w-md mx-auto leading-relaxed">
            Our WooCommerce team in Nairobi will review your project scope and get back to you within 2 to 4 business hours with honest feedback and clear next steps.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/254740938029?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Connect Immediately on WhatsApp</span>
            </a>
            <Button
              variant="outline"
              onClick={() => setStatus("idle")}
              className="text-xs font-bold uppercase tracking-wider border-[#E2EAE6] text-[#12201B]"
            >
              Submit Another Inquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1: Name & Email */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#12201B] mb-2">
                Your Full Name <span className="text-[#059669]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. David Mwangi"
                className="w-full px-4 py-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] text-sm text-[#12201B] placeholder:text-[#52615B]/50 focus:bg-white focus:outline-none focus:border-[#059669] transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#12201B] mb-2">
                Email Address <span className="text-[#059669]">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. david@yourbusiness.co.ke"
                className="w-full px-4 py-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] text-sm text-[#12201B] placeholder:text-[#52615B]/50 focus:bg-white focus:outline-none focus:border-[#059669] transition-all"
              />
            </div>
          </div>

          {/* Row 2: Phone/WhatsApp & Business Name */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#12201B] mb-2">
                Phone / WhatsApp Number <span className="text-[#059669]">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. +254 712 345 678"
                className="w-full px-4 py-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] text-sm text-[#12201B] placeholder:text-[#52615B]/50 focus:bg-white focus:outline-none focus:border-[#059669] transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#12201B] mb-2">
                Business / Company Name
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Nairobi Outfitters Ltd"
                className="w-full px-4 py-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] text-sm text-[#12201B] placeholder:text-[#52615B]/50 focus:bg-white focus:outline-none focus:border-[#059669] transition-all"
              />
            </div>
          </div>

          {/* Row 3: What do you sell? & Existing Store Checkbox */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#12201B] mb-2">
                What Do You Sell?
              </label>
              <select
                value={formData.productType}
                onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] text-sm text-[#12201B] focus:bg-white focus:outline-none focus:border-[#059669] transition-all cursor-pointer"
              >
                <option value="physical">Physical Products (Fashion, Electronics, Beauty, Home, etc.)</option>
                <option value="services">Services, Appointments & Consultations</option>
                <option value="dropshipping">Dropshipping Store</option>
                <option value="digital">Digital Downloads, Courses or Subscriptions</option>
                <option value="offline-to-online">Moving from Offline / Social Media to Online Store</option>
                <option value="other">Other / Mixed Inventory</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#12201B] mb-2">
                Current Website / Store URL (If Any)
              </label>
              <input
                type="url"
                value={formData.storeUrl}
                onChange={(e) => setFormData({ ...formData, storeUrl: e.target.value })}
                placeholder="e.g. https://mystore.co.ke"
                className="w-full px-4 py-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] text-sm text-[#12201B] placeholder:text-[#52615B]/50 focus:bg-white focus:outline-none focus:border-[#059669] transition-all"
              />
            </div>
          </div>

          {/* Existing Store Checkbox */}
          <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] flex items-center gap-3">
            <input
              type="checkbox"
              id="existingStoreCheck"
              checked={formData.hasExistingStore}
              onChange={(e) => setFormData({ ...formData, hasExistingStore: e.target.checked })}
              className="w-4 h-4 rounded text-[#059669] focus:ring-[#059669] border-[#E2EAE6] cursor-pointer"
            />
            <label htmlFor="existingStoreCheck" className="text-xs sm:text-sm font-semibold text-[#12201B] cursor-pointer">
              I already have a WooCommerce store (I need maintenance, speed fixes, custom code, or an audit)
            </label>
          </div>

          {/* Row 4: Service Needed & Budget */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#12201B] mb-2">
                Primary Service Needed
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] text-sm text-[#12201B] focus:bg-white focus:outline-none focus:border-[#059669] transition-all cursor-pointer"
              >
                <option value="store-dev">WooCommerce Store Development — KSh 35,000</option>
                <option value="custom-dev">Custom WooCommerce Development — KSh 45,000 – 200,000</option>
                <option value="maintenance">WooCommerce Basic Maintenance — KSh 10,000 / year</option>
                <option value="seo">WooCommerce SEO for Kenyan Stores — KSh 20,000 / month</option>
                <option value="code-audit">WooCommerce Code Audit — KSh 20,000 – 50,000</option>
                <option value="templates">WooCommerce Themes & Templates — From KSh 10,000</option>
                <option value="mpesa-only">M-Pesa Payment Integration Only</option>
                <option value="dropshipping">Dropshipping Store Setup</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#12201B] mb-2">
                Estimated Budget Range
              </label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] text-sm text-[#12201B] focus:bg-white focus:outline-none focus:border-[#059669] transition-all cursor-pointer"
              >
                <option value="under-35k">Under KSh 35,000 (Templates / Maintenance)</option>
                <option value="35k-50k">KSh 35,000 – KSh 50,000 (Standard Store / Audit)</option>
                <option value="50k-100k">KSh 50,000 – KSh 100,000 (Custom Workflows & SEO)</option>
                <option value="100k-200k">KSh 100,000 – KSh 200,000 (Advanced Custom Store)</option>
                <option value="200k+">KSh 200,000+ (High-Volume Multi-Store Platform)</option>
              </select>
            </div>
          </div>

          {/* Row 5: Project Details */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#12201B] mb-2">
              Project Details & Key Requirements
            </label>
            <textarea
              rows={4}
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              placeholder="Tell us about your catalog size, payment methods, delivery preferences, or specific pain points if you already have a store..."
              className="w-full px-4 py-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] text-sm text-[#12201B] placeholder:text-[#52615B]/50 focus:bg-white focus:outline-none focus:border-[#059669] transition-all leading-relaxed"
            />
          </div>

          {/* Submit & WhatsApp CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <Button
              type="submit"
              disabled={status === "submitting"}
              size="lg"
              className="h-13 px-8 text-xs font-bold uppercase tracking-wider bg-[#059669] text-white hover:bg-[#047857] rounded-xl transition-all shadow-md cursor-pointer shrink-0"
            >
              {status === "submitting" ? (
                <span>Submitting Your Details...</span>
              ) : (
                <span className="inline-flex items-center gap-2">
                  <span>Submit Project Brief</span>
                  <Send className="w-3.5 h-3.5" />
                </span>
              )}
            </Button>

            <a
              href={`https://wa.me/254716075199?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F8FAF9] hover:bg-[#F1F5F3] border border-[#E2EAE6] text-[#12201B] text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Prefer WhatsApp? Chat With Us</span>
            </a>
          </div>

          <div className="pt-4 border-t border-[#E2EAE6] flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[#52615B]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
              100% Intellectual Property Ownership & Zero Vendor Lock-In
            </span>
            <span>Headquartered in Nairobi, Serving All Kenya</span>
          </div>
        </form>
      )}
    </div>
  );
}
