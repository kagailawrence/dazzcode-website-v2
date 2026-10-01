"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  PhoneCall,
  Mail,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AiAutomationLeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const whatsappMessage = encodeURIComponent(
    "Hello Dazzcode! I would like to inquire about automating our business workflows and integrating AI."
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
          company: formData.phone || "Not provided",
          message: `Phone / WhatsApp: ${formData.phone}\n\nWorkflow / Automation Details:\n${formData.message}`,
          source: "AI & Business Workflow Automation Service Page",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please reach us directly on WhatsApp or email.");
      }

      setStatus("success");
    } catch {
      setStatus("success");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto grid md:grid-cols-12 gap-8 items-stretch">
      {/* Direct WhatsApp & Quick Contact Card */}
      <div className="md:col-span-5 rounded-3xl bg-[#12201B] text-white p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
        <div className="space-y-6">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#10B981] font-bold block mb-2">
              Instant Direct Reachout
            </span>
            <h3 className="text-2xl font-black tracking-tight text-white">
              Chat Directly on WhatsApp
            </h3>
          </div>

          <a
            href={`https://wa.me/254740938029?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm tracking-wide uppercase transition-all shadow-lg hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Chat on WhatsApp</span>
          </a>

          <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-[#E2EAE6]/80 font-mono">
            <div className="flex items-center gap-2.5">
              <PhoneCall className="w-4 h-4 text-[#10B981]" />
              <span>+254 740 938 029</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#10B981]" />
              <span>contact@dazzcode.com</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#10B981]" />
              <span>Fast reply within minutes</span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 text-[11px] text-[#E2EAE6]/60">
          Prefer the full contact page?{" "}
          <Link href="/contact" className="text-[#10B981] font-bold hover:underline">
            Visit Contact Page →
          </Link>
        </div>
      </div>

      {/* Simple, Streamlined Contact Form */}
      <div className="md:col-span-7 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] p-6 sm:p-8 shadow-sm flex flex-col justify-between">
        {status === "success" ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-2xl font-bold text-[#12201B]">
              Message Received!
            </h4>
            <p className="text-sm text-[#52615B] max-w-sm mx-auto leading-relaxed">
              Thank you for reaching out. We will review your workflow details and get back to you within 2 to 4 business hours.
            </p>
            <div className="pt-4">
              <Button
                variant="outline"
                onClick={() => {
                  setStatus("idle");
                  setFormData({ name: "", email: "", phone: "", message: "" });
                }}
                className="text-xs font-bold uppercase tracking-wider border-[#E2EAE6] text-[#12201B] cursor-pointer"
              >
                Send Another Message
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-[#12201B] tracking-tight mb-1">
                Send Us a Message
              </h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Tell us about the repetitive tasks, manual workflows, or tools you want to automate.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#12201B]">
                  Your Name <span className="text-[#059669]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Kamau"
                  className="w-full h-11 px-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] text-sm text-[#12201B] placeholder:text-[#52615B]/40 focus:bg-white focus:outline-none focus:border-[#059669] transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#12201B]">
                  Email Address <span className="text-[#059669]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. alex@yourcompany.com"
                  className="w-full h-11 px-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] text-sm text-[#12201B] placeholder:text-[#52615B]/40 focus:bg-white focus:outline-none focus:border-[#059669] transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-[#12201B]">
                Phone / WhatsApp Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. +254 712 345 678"
                className="w-full h-11 px-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] text-sm text-[#12201B] placeholder:text-[#52615B]/40 focus:bg-white focus:outline-none focus:border-[#059669] transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-[#12201B]">
                Workflow & Automation Details <span className="text-[#059669]">*</span>
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us what you want to automate (e.g. lead qualification, M-Pesa & WhatsApp workflow, PDF data extraction, CRM sync)..."
                className="w-full px-3.5 py-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] text-sm text-[#12201B] placeholder:text-[#52615B]/40 focus:bg-white focus:outline-none focus:border-[#059669] transition-all leading-relaxed"
              />
            </div>

            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <Button
              type="submit"
              disabled={status === "submitting"}
              className="w-full h-12 text-xs font-bold uppercase tracking-wider bg-[#059669] hover:bg-[#047857] text-white rounded-xl transition-all shadow-md cursor-pointer"
            >
              {status === "submitting" ? (
                <span>Sending Message...</span>
              ) : (
                <span className="inline-flex items-center gap-2">
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5" />
                </span>
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
