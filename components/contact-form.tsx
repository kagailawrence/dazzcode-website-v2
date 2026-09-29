"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-2xl bg-white border border-[#A7F3D0] p-8 text-center shadow-sm">
        <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#ECFDF5] text-[#059669] mb-4">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-bold text-[#0F172A] mb-2">Message Sent!</h3>
        <p className="text-sm text-[#52605B] max-w-sm mx-auto mb-6">
          Thanks for reaching out. We will review your note and get back to you within 24 hours.
        </p>
        <Button
          variant="outline"
          onClick={() => setSuccess(false)}
          className="border-[#E1E7E4] text-xs font-semibold cursor-pointer"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white border border-[#E1E7E4] p-6 sm:p-8 shadow-sm text-left">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-xs font-semibold text-[#0F172A]">
              Your Name <span className="text-[#059669]">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="e.g. Alex Kamau"
              required
              className="h-11 rounded-xl bg-[#F8FAF9] border-[#E1E7E4] text-sm focus:bg-white"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-xs font-semibold text-[#0F172A]">
              Work Email <span className="text-[#059669]">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="alex@company.com"
              required
              className="h-11 rounded-xl bg-[#F8FAF9] border-[#E1E7E4] text-sm focus:bg-white"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="company" className="text-xs font-semibold text-[#0F172A]">
            Company / Project Name <span className="text-[#52605B] font-normal">(Optional)</span>
          </Label>
          <Input
            id="company"
            name="company"
            placeholder="e.g. Acme Health or Startup Idea"
            className="h-11 rounded-xl bg-[#F8FAF9] border-[#E1E7E4] text-sm focus:bg-white"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="message" className="text-xs font-semibold text-[#0F172A]">
            How can we help? <span className="text-[#059669]">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us what you want to build or solve..."
            rows={4}
            required
            className="rounded-xl bg-[#F8FAF9] border-[#E1E7E4] text-sm focus:bg-white leading-relaxed"
          />
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <Button
          type="submit"
          className="w-full h-11 text-sm font-bold bg-[#059669] hover:bg-[#047857] text-white shadow-xs cursor-pointer"
          disabled={pending}
        >
          {pending ? (
            "Sending..."
          ) : (
            <>
              Send Message <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
