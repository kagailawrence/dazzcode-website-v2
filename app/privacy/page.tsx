import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Dazzcode",
  description:
    "Learn how Dazzcode handles information you provide when you use our website and contact form.",
  alternates: { canonical: "https://www.dazzcode.com/privacy" },
};

const sections = [
  {
    title: "Information you provide",
    paragraphs: [
      "When you contact us through the website, we receive the name and email address you enter, plus any company or project name and message you choose to provide. We use this information to respond to your inquiry and discuss a potential project.",
      "Please do not submit passwords, payment card details, or other sensitive information through the contact form.",
    ],
  },
  {
    title: "How we handle inquiries",
    paragraphs: [
      "Contact form submissions are sent to Dazzcode by email using our configured email service. We use the information to communicate with you, assess and respond to your request, and keep appropriate business records. We do not sell contact form information.",
    ],
  },
  {
    title: "Service providers and transfers",
    paragraphs: [
      "We rely on hosting and email service providers to operate the website and deliver messages. Those providers process information on our behalf to provide their services and may store or process it in other countries. We take reasonable steps to use it only for the purposes described here and expect providers to protect it.",
    ],
  },
  {
    title: "Retention and security",
    paragraphs: [
      "We keep inquiry information for as long as reasonably needed to respond, manage a business relationship, and meet legal or record-keeping requirements. We use reasonable safeguards, but no method of online transmission or storage can be guaranteed completely secure.",
    ],
  },
  {
    title: "Cookies and server information",
    paragraphs: [
      "The website may process basic technical information needed to deliver and secure pages, such as request and error information handled by the hosting service. We do not currently use the site to ask you for information through advertising cookies. If this changes, we will update this policy and provide any notices or choices required by law.",
    ],
  },
  {
    title: "Your choices and contacting us",
    paragraphs: [
      "You may ask us to access, correct, or delete personal information you have sent us, subject to legal obligations and legitimate record-keeping needs. You may also contact us with a privacy concern. Email info@dazzcode.com and tell us how we can help.",
      "Dazzcode is based in Nairobi, Kenya. Privacy rights vary by location; we will handle requests in accordance with the laws that apply to the information and request.",
    ],
  },
  {
    title: "Updates to this policy",
    paragraphs: [
      "We may update this policy as our website or practices change. The latest version will be published here with its updated date.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#12201B]">
      <header className="border-b border-[#E1E7E4] bg-white pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <p className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-[#059669]">
            Legal
          </p>
          <h1 className="text-4xl font-black tracking-tight text-[#0F172A] sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-[#52605B]">Last updated: October 23, 2026</p>
        </div>
      </header>
      <main className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <div className="mb-8 rounded-2xl border border-[#E1E7E4] bg-white p-6 text-sm leading-7 text-[#52605B]">
          This policy explains how Dazzcode handles information when you visit dazzcode.com or contact us through the website. For questions or requests, email{" "}
          <a className="font-semibold text-[#059669] hover:underline" href="mailto:info@dazzcode.com">info@dazzcode.com</a>.
        </div>
        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-[#E1E7E4] bg-white p-6 md:p-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A]">{section.title}</h2>
              <div className="mt-3 space-y-3 text-sm leading-7 text-[#52605B]">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>
        <p className="mt-8 text-sm text-[#52605B]">
          See also our <Link className="font-semibold text-[#059669] hover:underline" href="/terms">Terms of Service</Link>.
        </p>
      </main>
    </div>
  );
}
