import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Dazzcode",
  description:
    "Read the terms that apply when you visit the Dazzcode website or contact us about software development services.",
  alternates: { canonical: "https://www.dazzcode.com/terms" },
};

const sections = [
  {
    title: "Using this website",
    paragraphs: [
      "You may use this website to learn about Dazzcode and our services, read our materials, and contact us. Use it lawfully and do not interfere with its operation, attempt to gain unauthorized access, introduce malicious code, or misuse its forms or content.",
      "Information on this website is provided for general information. Descriptions, examples, timelines, and results are illustrative and are not a promise that a particular project will achieve a specific outcome.",
    ],
  },
  {
    title: "Project inquiries and service agreements",
    paragraphs: [
      "Sending an inquiry through our contact form does not create a client relationship or commit either party to a project. We will discuss your requirements and any proposed scope, fees, milestones, and delivery terms with you.",
      "If you engage Dazzcode, the services will be governed by the written proposal, statement of work, or other agreement accepted by both parties. If that agreement conflicts with these website terms, the project agreement will govern the services.",
    ],
  },
  {
    title: "Intellectual property",
    paragraphs: [
      "Unless stated otherwise, the website and its content—including text, graphics, branding, and code—belong to Dazzcode or its licensors and are protected by applicable intellectual property laws. You may view and share links to the site for personal or business reference, but may not reproduce or commercially exploit its content without permission.",
      "Ownership and permitted use of work created for a client are set out in that client’s written project agreement.",
    ],
  },
  {
    title: "Third-party services and links",
    paragraphs: [
      "This website may link to services or websites operated by others. Those services are outside our control, and their own terms and privacy practices apply when you use them.",
    ],
  },
  {
    title: "Availability and liability",
    paragraphs: [
      "We aim to keep the website useful and available, but do not guarantee uninterrupted access or that all content will always be complete or error-free. To the extent permitted by applicable law, Dazzcode is not liable for indirect or consequential loss arising from your use of, or inability to use, this website. Nothing in these terms limits liability that cannot lawfully be limited.",
    ],
  },
  {
    title: "Changes and governing law",
    paragraphs: [
      "We may update these terms by publishing a revised version on this page. The date below shows when they were last updated. These terms are governed by the laws of Kenya, subject to any mandatory consumer protections that apply to you. Disputes relating to a client project are governed by the agreement for that project.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#12201B]">
      <header className="border-b border-[#E1E7E4] bg-white pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <p className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-[#059669]">
            Legal
          </p>
          <h1 className="text-4xl font-black tracking-tight text-[#0F172A] sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-[#52605B]">Last updated: October 23, 2026</p>
        </div>
      </header>
      <main className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <div className="mb-8 rounded-2xl border border-[#E1E7E4] bg-white p-6 text-sm leading-7 text-[#52605B]">
          These terms apply to your use of the Dazzcode website. By using the site, you agree to them. If you do not agree, please do not use the site. For questions, contact{" "}
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
          See also our <Link className="font-semibold text-[#059669] hover:underline" href="/privacy">Privacy Policy</Link>.
        </p>
      </main>
    </div>
  );
}
