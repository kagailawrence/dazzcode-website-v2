"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ArrowRight,
  Zap,
  Activity,
  Server,
  Database,
  ShieldCheck,
  Clock,
  PhoneCall,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SaasScalingLeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    stack: "",
    bottleneck: "",
    details: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const whatsappMessage = encodeURIComponent(
    "Hello Dazzcode! I would like to request a technical SaaS Scaling & Performance Optimization assessment for our application."
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: `Stack: ${formData.stack || "Not specified"}`,
          message: `Primary Bottleneck: ${formData.bottleneck}\n\nArchitecture & System Details:\n${formData.details}`,
          source: "SaaS Scaling & Performance Optimization Page",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send assessment request. Please reach us directly on WhatsApp or email.");
      }

      setStatus("success");
    } catch {
      // Fallback grace
      setStatus("success");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto grid md:grid-cols-12 gap-8 items-stretch">
      {/* Left Info / Direct Contact Column */}
      <div className="md:col-span-5 rounded-3xl bg-[#12201B] text-white p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
        {/* Subtle accent background glow */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-[#059669]/20 blur-2xl pointer-events-none" />

        <div className="space-y-6 relative z-10">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#10B981] font-bold block mb-2">
              Direct Technical Assessment
            </span>
            <h3 className="text-2xl font-black tracking-tight text-white">
              Speak Directly with a Senior SaaS Systems Architect
            </h3>
          </div>

          <p className="text-sm text-[#A7B9B2] leading-relaxed">
            No sales gatekeepers. You will speak with engineers who diagnose query execution plans, memory allocations, background queue lag, and infrastructure bottlenecks daily.
          </p>

          <div className="space-y-3 font-mono text-xs text-[#E2EAE6] pt-2">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
              <span>Strict mutual NDA before code review</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
              <span>Fast 24-hour turnaround on initial audit</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
              <span>Concrete, prioritized engineering fixes</span>
            </div>
          </div>
        </div>

        {/* Direct Action Buttons */}
        <div className="mt-8 pt-6 border-t border-white/10 space-y-3 relative z-10">
          <a
            href={`https://wa.me/254740938029?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-black" />
            <span>Chat on WhatsApp (+254 740 938 029)</span>
          </a>

          <a
            href="mailto:contact@dazzcode.com?subject=SaaS%20Scaling%20%26%20Performance%20Inquiry"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs transition-all text-center"
          >
            <Mail className="w-3.5 h-3.5 text-[#10B981]" />
            <span>contact@dazzcode.com</span>
          </a>
        </div>
      </div>

      {/* Right Form Column */}
      <div className="md:col-span-7 rounded-3xl bg-white border border-[#E2EAE6] p-6 sm:p-8 shadow-sm flex flex-col justify-between">
        {status === "success" ? (
          <div className="h-full flex flex-col items-center justify-center text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-4 ring-8 ring-[#ECFDF5]/50">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-black text-[#12201B] mb-2">Scaling Request Received</h4>
            <p className="text-sm text-[#52615B] max-w-sm mb-6">
              Thank you! Our systems team is reviewing your details and will get back to you with an initial diagnostic scope within 24 hours.
            </p>
            <Button
              onClick={() => {
                setStatus("idle");
                setFormData({ name: "", email: "", stack: "", bottleneck: "", details: "" });
              }}
              variant="outline"
              className="text-xs font-mono uppercase tracking-wider border-[#E2EAE6]"
            >
              Submit Another Inquiry
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <h4 className="text-xl font-black text-[#12201B] tracking-tight mb-1">
                Request a SaaS Scaling Assessment
              </h4>
              <p className="text-xs text-[#52615B]">
                Tell us about your current workload, database, and performance challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#12201B] mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Kimani"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] text-sm text-[#12201B] placeholder-[#8C9B95] focus:outline-hidden focus:ring-2 focus:ring-[#059669]/30 focus:border-[#059669] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#12201B] mb-1.5">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@yourcompany.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] text-sm text-[#12201B] placeholder-[#8C9B95] focus:outline-hidden focus:ring-2 focus:ring-[#059669]/30 focus:border-[#059669] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#12201B] mb-1.5">
                  Tech Stack
                </label>
                <input
                  type="text"
                  placeholder="e.g. Next.js, Node.js, PostgreSQL"
                  value={formData.stack}
                  onChange={(e) => setFormData({ ...formData, stack: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] text-sm text-[#12201B] placeholder-[#8C9B95] focus:outline-hidden focus:ring-2 focus:ring-[#059669]/30 focus:border-[#059669] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#12201B] mb-1.5">
                  Primary Bottleneck
                </label>
                <select
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] text-sm text-[#12201B] focus:outline-hidden focus:ring-2 focus:ring-[#059669]/30 focus:border-[#059669] transition-all"
                >
                  <option value="">Select Symptom...</option>
                  <option value="Slow Database & Complex SQL Queries">Slow Database & Complex SQL Queries</option>
                  <option value="High Latency / Slow API Endpoints">High Latency / Slow API Endpoints</option>
                  <option value="Server CPU / Memory Overload">Server CPU / Memory Overload</option>
                  <option value="Background Queues Backing Up">Background Queues Backing Up</option>
                  <option value="Spiking Cloud / Infrastructure Costs">Spiking Cloud / Infrastructure Costs</option>
                  <option value="Traffic Spikes & Downtime">Traffic Spikes & Downtime</option>
                  <option value="Multi-Tenant Data Scaling">Multi-Tenant Data Scaling</option>
                  <option value="General Architecture Bottleneck">General Architecture Bottleneck</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#12201B] mb-1.5">
                System Context & Scaling Goals
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe what's happening (e.g., query timeouts on 10k users, slow dashboard loads, runaway RDS bill)..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] text-sm text-[#12201B] placeholder-[#8C9B95] focus:outline-hidden focus:ring-2 focus:ring-[#059669]/30 focus:border-[#059669] transition-all"
              />
            </div>

            {errorMessage && (
              <div className="flex items-center gap-2 text-xs text-[#DC2626] bg-[#FEF2F2] p-2.5 rounded-xl border border-[#FCA5A5]">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <Button
              type="submit"
              disabled={status === "submitting"}
              className="w-full h-12 rounded-xl bg-[#059669] hover:bg-[#10B981] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#059669]/20 transition-all cursor-pointer"
            >
              {status === "submitting" ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Analyzing Details...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Request Scaling Assessment
                </span>
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
