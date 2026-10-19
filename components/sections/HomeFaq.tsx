"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { homeFaqItems } from "@/lib/home-faq";

export default function HomeFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#F8FAF9] border-b border-[#E2EAE6]">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#12201B] tracking-tight">
            SaaS Development &amp; Engineering FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {homeFaqItems.map((item, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={item.question}
                className="rounded-2xl border border-[#E2EAE6] bg-[#FFFFFF] shadow-xs overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-[#12201B] hover:text-[#059669] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`w-5 h-5 text-[#52615B] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#059669]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[#52615B] leading-relaxed border-t border-[#E2EAE6]/50 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
