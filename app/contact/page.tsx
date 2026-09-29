import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import ContactForm from "@/components/contact-form";
import { Mail, MapPin, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Dazzcode | Start Your SaaS & Software Project",
  description:
    "Contact Dazzcode: Connect with senior software engineers to scope your SaaS MVP, request a codebase audit, or scale your platform with fixed milestones.",
  keywords: [
    "hire SaaS developers",
    "book SaaS strategy call",
    "SaaS technical consultation",
    "hire Next.js developers",
    "custom SaaS development quote",
    "SaaS MVP consultation",
    "code audit consultation",
    "software engineers Nairobi",
    "contact Dazzcode",
  ],
  alternates: {
    canonical: "https://dazzcode.com/contact",
  },
  openGraph: {
    title: "Contact Dazzcode | Start Your SaaS & Software Project",
    description:
      "Connect directly with senior software architects. Get technical roadmap validation, fixed-price sprint scoping, and zero vendor lock-in.",
    url: "https://dazzcode.com/contact",
    siteName: "Dazzcode",
    type: "website",
    images: [
      {
        url: "/images/hero-saas-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Dazzcode Software Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Dazzcode | Start Your SaaS & Software Project",
    description:
      "Connect directly with senior software architects. Fixed-price sprint scoping and zero vendor lock-in.",
    images: ["/images/hero-saas-dashboard.jpg"],
  },
};

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://dazzcode.com/contact#webpage",
        url: "https://dazzcode.com/contact",
        name: "Contact Dazzcode | Software Engineering & Scoping",
        description:
          "Connect with senior software engineers to scope your SaaS MVP, request a codebase audit, or scale your platform with fixed milestones.",
        publisher: {
          "@type": "Organization",
          "@id": "https://dazzcode.com/#organization",
          name: "Dazzcode",
          url: "https://dazzcode.com",
          email: "info@dazzcode.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Nairobi",
            addressCountry: "KE",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dazzcode.com/contact#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://dazzcode.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact Us",
            item: "https://dazzcode.com/contact",
          },
        ],
      },
    ],
  };

  const faqs = [
    {
      question: "How fast can we start writing code?",
      answer:
        "Once scope and milestones are agreed upon, we typically spin up repositories, database schemas, and baseline staging environments within 48 to 72 hours.",
    },
    {
      question: "Who owns the code and intellectual property?",
      answer:
        "You do. You retain 100% ownership of all source code, Git repositories, database instances, and documentation from day one.",
    },
    {
      question: "Can we sign a mutual Non-Disclosure Agreement (NDA)?",
      answer:
        "Yes. We are happy to execute a mutual NDA before reviewing proprietary specifications or private product workflows.",
    },
    {
      question: "How do fixed-milestone sprints work?",
      answer:
        "We break your project into bi-weekly milestones with defined deliverables. You test working software on a live staging environment at the end of every sprint.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAF9] text-[#12201B]">
      <JsonLd schema={structuredData} />

      {/* Hero Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-[#E1E7E4]">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#0F172A] leading-tight mb-4">
            Let&apos;s Talk About Your Project
          </h1>
          <p className="text-base sm:text-lg text-[#52605B] max-w-xl mx-auto leading-relaxed">
            Send us a message below. A senior software engineer will review your project and get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Grid: Clean Form + Contact Details */}
      <section className="py-16 md:py-20 bg-white border-b border-[#E1E7E4]">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Form */}
            <div className="md:col-span-7">
              <ContactForm />
            </div>

            {/* Sidebar Details */}
            <div className="md:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E1E7E4] space-y-4 text-left">
                <h3 className="text-sm font-mono uppercase tracking-wider text-[#0F172A] font-bold">
                  Direct Details
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#ECFDF5] text-[#059669] shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-[#52605B]">Email</p>
                      <a
                        href="mailto:info@dazzcode.com"
                        className="font-semibold text-[#0F172A] hover:text-[#059669] transition"
                      >
                        info@dazzcode.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#ECFDF5] text-[#059669] shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-[#52605B]">Response Time</p>
                      <p className="font-semibold text-[#0F172A]">Within 24 Hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#ECFDF5] text-[#059669] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-[#52605B]">Location</p>
                      <p className="font-semibold text-[#0F172A]">Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E1E7E4] space-y-2.5 text-left text-xs text-[#52605B]">
                <div className="flex items-center gap-2 text-[#0F172A] font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#059669]" />
                  <span>Our Guarantees</span>
                </div>
                <p>• 100% Client Source Code & IP Ownership</p>
                <p>• Mutual NDA Available Upon Request</p>
                <p>• Fixed-Milestone Sprints (No Surprise Overruns)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick FAQs */}
      <section className="py-16 md:py-20 bg-[#F8FAF9]">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl font-black text-[#0F172A] text-center tracking-tight">
            Common Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-5 rounded-xl bg-white border border-[#E1E7E4] space-y-1.5 text-left"
              >
                <h3 className="text-sm font-bold text-[#0F172A]">
                  {faq.question}
                </h3>
                <p className="text-xs text-[#52605B] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6 text-center">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-[#52605B]">
              <Link href="/services/saas-development" className="hover:text-[#059669] underline">
                SaaS Development
              </Link>
              <span>·</span>
              <Link href="/services/code-audit" className="hover:text-[#059669] underline">
                Code Audits
              </Link>
              <span>·</span>
              <Link href="/case-studies" className="hover:text-[#059669] underline">
                Case Studies
              </Link>
              <span>·</span>
              <Link href="/about" className="hover:text-[#059669] underline">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
