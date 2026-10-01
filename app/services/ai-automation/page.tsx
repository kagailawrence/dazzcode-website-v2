import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  Sparkles,
  Bot,
  Layers,
  Database,
  Users,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Workflow,
  MessageSquare,
  ShieldCheck,
  Building2,
  Mail,
  Clock,
  Radio,
  Sliders,
  Check,
  X,
  CreditCard,
  FileCode2,
  Activity,
  Code2,
  HelpCircle,
  HardDrive,
  Cpu,
  Lock,
  ArrowUpRight,
  ChevronRight,
  Rocket,
  BarChart3,
  Server
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AiAutomationHeroPreview from "@/components/sections/AiAutomationHeroPreview";
import AiAutomationLeadForm from "@/components/sections/AiAutomationLeadForm";

export const metadata: Metadata = {
  title: "AI Business Automation Services | Dazzcode",
  description:
    "Automate repetitive business workflows with AI, integrations and custom software. Dazzcode builds practical automation systems for businesses in Kenya and beyond.",
  keywords: [
    "AI business automation",
    "AI automation services",
    "AI automation company",
    "AI automation agency",
    "business workflow automation",
    "business process automation",
    "AI workflow automation",
    "workflow automation services",
    "AI business process automation",
    "business automation services",
    "AI automation solutions",
    "custom AI automation",
    "AI integration services",
    "business process automation services",
    "workflow automation company",
    "AI automation for businesses",
    "intelligent business automation",
    "AI-powered automation",
    "custom workflow automation",
    "automation software development",
    "AI software development",
    "business workflow automation services",
    "AI automation company in Kenya",
    "AI automation services in Kenya",
    "business automation services Kenya",
    "workflow automation Kenya",
    "AI solutions for businesses in Kenya",
    "business process automation Kenya",
    "AI automation Nairobi"
  ],
  alternates: {
    canonical: "https://dazzcode.com/services/ai-automation",
    languages: {
      "en": "https://dazzcode.com/services/ai-automation",
      "x-default": "https://dazzcode.com/services/ai-automation"
    }
  },
  openGraph: {
    title: "AI & Business Workflow Automation | Dazzcode",
    description:
      "Automate repetitive business workflows with AI, integrations and custom software. Dazzcode builds practical automation systems for businesses in Kenya and beyond.",
    url: "https://dazzcode.com/services/ai-automation",
    siteName: "Dazzcode",
    images: [
      {
        url: "https://dazzcode.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AI & Business Workflow Automation - Dazzcode"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Business Workflow Automation | Dazzcode",
    description:
      "Automate repetitive work. Connect your systems. Let AI handle the tasks that don't need a human."
  }
};

const aiFaqs = [
  {
    q: "What is AI business automation?",
    a: "AI business automation is the engineering practice of combining deterministic software workflows, API integrations, and artificial intelligence models (such as LLMs and computer vision) to execute repetitive operational tasks—such as lead qualification, document extraction, customer routing, and data synchronization—without manual human intervention."
  },
  {
    q: "What is business workflow automation?",
    a: "Business workflow automation refers to connecting your existing software tools (CRMs, databases, email, WhatsApp, and accounting platforms) through automated triggers and webhooks, ensuring data moves seamlessly between systems without employees having to copy-paste information manually."
  },
  {
    q: "What can AI automate in a business?",
    a: "AI can automate unstructured data tasks that traditional code cannot handle alone: classifying freeform customer inquiries, extracting structured data from PDF invoices and receipts, qualifying sales leads, summarizing contracts, performing semantic search over internal documentation, and drafting personalized customer responses."
  },
  {
    q: "How much does AI automation cost?",
    a: "Automation costs depend strictly on the number of workflows, API integrations, data complexity, and reliability guardrails required. Dazzcode scopes projects into transparent, fixed-fee sprints following an initial workflow discovery review."
  },
  {
    q: "Can you automate an existing business process?",
    a: "Yes. Our core approach is designed around your existing operations. We analyze how your team currently handles a task, identify the manual bottlenecks, and build an automated pipeline around the tools you already use."
  },
  {
    q: "Can you connect my existing software?",
    a: "Yes. We build custom API and webhook integrations connecting platforms like Safaricom M-Pesa, WhatsApp Cloud API, PostgreSQL, HubSpot, Salesforce, QuickBooks, Google Workspace, and proprietary internal databases."
  },
  {
    q: "Can AI automation work with WhatsApp?",
    a: "Yes. We integrate the official WhatsApp Cloud API with intelligent backend engines to handle customer inquiries, process orders, deliver automated dispatch notifications, and escalate complex requests to human staff."
  },
  {
    q: "Can you integrate M-Pesa into an automated workflow?",
    a: "Yes. We automate M-Pesa Daraja payment workflows—including instant STK Push triggers, automatic C2B webhook ledger matching, and automated customer payment confirmation alerts."
  },
  {
    q: "Do I need AI for business automation?",
    a: "Not always. Many business processes (like 'if invoice paid $\\rightarrow$ send receipt') are best handled with fast, deterministic code with zero AI token cost. We only introduce AI where natural language understanding, text classification, or unstructured data processing genuinely creates value."
  },
  {
    q: "What is the difference between AI automation and traditional automation?",
    a: "Traditional automation is rule-based and deterministic (if X happens, do Y). AI-powered automation can interpret context, understand unstructured inputs (like freeform emails or scanned PDFs), and make intelligent categorization decisions."
  },
  {
    q: "Can AI automation replace employees?",
    a: "AI automation is designed to eliminate tedious, repetitive low-value administrative work—like manual data entry and repetitive tier-1 questions—freeing your staff to focus on high-value client relationships, sales, and strategic growth."
  },
  {
    q: "Can Dazzcode build custom AI automation?",
    a: "Yes. We write custom backend automation pipelines in TypeScript and Node.js with strict Zod schema validation, vector search (pgvector), and dedicated queue managers (BullMQ) rather than relying on brittle no-code workarounds."
  },
  {
    q: "Can you automate workflows for a SaaS product?",
    a: "Yes. We build automated onboarding sequences, intelligent support triage, telemetry report generation, and automated billing workflows for growing SaaS products."
  },
  {
    q: "Can you deploy the automation to my VPS?",
    a: "Yes. We deploy custom automation microservices and worker queues to your own dedicated Linux VPS servers with Docker Compose, Nginx, and automated monitoring."
  },
  {
    q: "How long does business automation take?",
    a: "A focused workflow automation sprint typically takes 2 to 4 weeks from initial workflow mapping to production deployment. Multi-system enterprise integrations may take 4 to 8 weeks."
  },
  {
    q: "How do I know what to automate first?",
    a: "Start with tasks that meet three criteria: 1) Highly repetitive, 2) Consume significant staff hours weekly, and 3) Have clear, definable business outcomes (e.g., inbound lead follow-up or invoice processing)."
  },
  {
    q: "How do you prevent AI hallucinations?",
    a: "We enforce strict structured JSON output schemas (via Zod validation), set deterministic temperature bounds, and implement programmatic fallback rules that reject malformed outputs before they reach your database."
  },
  {
    q: "Will our private business data be used to train AI models?",
    a: "No. We utilize commercial enterprise API endpoints with zero-data-retention guarantees, ensuring your sensitive business data is never stored or used to train public foundation models."
  },
  {
    q: "Do you provide ongoing maintenance and monitoring?",
    a: "Yes. We provide ongoing monitoring, API token usage optimization, failure alerting, and quarterly workflow enhancements."
  },
  {
    q: "Do you work with businesses outside Kenya?",
    a: "Yes. Dazzcode is headquartered in Nairobi, Kenya, and works remotely with companies, startups, and agencies across the United Kingdom, United States, Europe, and East Africa under strict mutual NDAs."
  }
];

export default function AiAutomationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://dazzcode.com/#organization",
        "name": "Dazzcode",
        "url": "https://dazzcode.com",
        "logo": "https://dazzcode.com/opengraph-image",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+254740938029",
          "contactType": "customer service",
          "areaServed": ["KE", "US", "GB", "UG", "TZ", "RW", "Global"],
          "availableLanguage": ["en"]
        }
      },
      {
        "@type": "Service",
        "@id": "https://dazzcode.com/services/ai-automation#service",
        "name": "AI & Business Workflow Automation",
        "provider": {
          "@id": "https://dazzcode.com/#organization"
        },
        "description":
          "Automate repetitive business workflows with AI, integrations and custom software. Dazzcode builds practical automation systems for businesses in Kenya and beyond.",
        "areaServed": "Global",
        "serviceType": "AI & Business Process Automation Engineering",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "Custom Scope",
          "url": "https://dazzcode.com/services/ai-automation"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://dazzcode.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://dazzcode.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "AI & Workflow Automation",
            "item": "https://dazzcode.com/services/ai-automation"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": aiFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="bg-[#F8FAF9] text-[#12201B] min-h-screen font-sans selection:bg-[#059669] selection:text-white">
      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ========================================================================= */}
      {/* 7. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FAF9] to-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

        <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#52615B] mb-6">
            <Link href="/" className="hover:text-[#059669] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#059669] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#12201B] font-semibold">AI & Workflow Automation</span>
          </nav>

    

          {/* Main H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-[#12201B] mb-4">
            AI & Business Workflow Automation
          </h1>

          <p className="text-xl md:text-2xl font-bold text-[#059669] mb-6">
            Stop spending valuable time on work your software can handle.
          </p>

          {/* Supporting Copy */}
          <p className="text-lg md:text-xl text-[#52615B] leading-relaxed max-w-3xl mb-8 font-normal">
            Dazzcode helps businesses automate repetitive workflows, connect disconnected systems, and use AI to handle tasks that previously required manual work.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
            <Link href="#contact">
              <Button
                size="lg"
                className="w-full sm:w-auto h-13 px-8 text-sm font-bold uppercase tracking-wider bg-[#059669] text-white hover:bg-[#10B981] shadow-lg shadow-[#059669]/20 rounded-xl transition-all cursor-pointer"
              >
                <Zap className="w-4 h-4 mr-2" />
                Automate My Business
              </Button>
            </Link>

            <Link href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-13 px-7 text-sm font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3] rounded-xl text-[#12201B] cursor-pointer"
              >
                Discuss My Workflow
              </Button>
            </Link>
          </div>

          {/* Trust Microcopy */}
          <div className="text-xs text-[#52615B] font-mono flex flex-wrap items-center gap-2 mb-8">
            <span className="font-semibold text-[#12201B]">Custom automation</span>
            <span>•</span>
            <span className="font-semibold text-[#12201B]">Real business workflows</span>
            <span>•</span>
            <span className="font-semibold text-[#12201B]">Practical AI</span>
          </div>

          {/* 8. HERO VISUAL (Interactive Workflow Component) */}
          <AiAutomationHeroPreview />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. PROBLEM SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              OPERATIONAL REALITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Your Team Shouldn&apos;t Have to Repeat the Same Work Every Day
            </h2>
          </div>

          <div className="prose prose-lg text-[#52615B] leading-relaxed space-y-6 mb-12">
            <p>
              In many growing companies, valuable employees spend hours every single day acting as human bridges between disconnected systems. They manually copy data from emails into spreadsheets, type M-Pesa transaction codes into accounting software, draft the exact same customer responses repeatedly, and chase down routine approvals.
            </p>
            <div className="p-4 rounded-xl bg-[#F8FAF9] border-l-4 border-[#059669] text-base text-[#12201B] font-medium italic">
              &ldquo;The problem isn&apos;t that your employees are inefficient. The problem is that the workflow itself was never engineered for automation.&rdquo;
            </div>
            <p>
              When your business workflows are automated with reliable code and targeted AI, your team stops performing tedious administrative chores and begins focusing entirely on revenue-generating client work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-mono text-xs text-[#12201B]">
            <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              • Copying leads from forms to CRMs
            </div>
            <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              • Answering repetitive customer FAQs
            </div>
            <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              • Reconciling M-Pesa & bank receipts
            </div>
            <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              • Extracting data from PDF invoices
            </div>
            <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              • Manually sending sales follow-ups
            </div>
            <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
              • Compiling weekly operational reports
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. WHAT CAN BE AUTOMATED? (12 CAPABILITIES) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              AUTOMATION SCOPE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              What Business Workflows Can Be Automated?
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              We connect your systems to automate repetitive operational processes across your entire organization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Users,
                title: "Lead Management & Qualification",
                desc: "Automatically capture inbound leads, parse intent using AI, qualify readiness, and route to the right salesperson."
              },
              {
                icon: MessageSquare,
                title: "Customer Support & Triage",
                desc: "Handle repetitive tier-1 customer inquiries instantly via AI and seamlessly escalate complex conversations to staff."
              },
              {
                icon: Radio,
                title: "WhatsApp Business Automation",
                desc: "Automate customer conversations, dispatch notifications, payment reminders, and order tracking via WhatsApp Cloud API."
              },
              {
                icon: Mail,
                title: "Intelligent Email Automation",
                desc: "Classify incoming emails, extract key operational data, generate context-aware draft responses, and route tasks."
              },
              {
                icon: TrendingUp,
                title: "Automated Sales Follow-Ups",
                desc: "Trigger personalized follow-up sequences based on customer actions, quote views, or inactivity thresholds."
              },
              {
                icon: CreditCard,
                title: "Invoicing & Payment Reconciliations",
                desc: "Connect sales orders directly with M-Pesa/Stripe payment tracking, automated PDF invoice creation, and ledger matching."
              },
              {
                icon: BarChart3,
                title: "Automated Executive Reports",
                desc: "Automatically aggregate, process, and summarize daily business metrics into scheduled email and PDF digests."
              },
              {
                icon: FileCode2,
                title: "Automated Data Ingestion",
                desc: "Extract structured data from web forms, scanned documents, emails, and third-party webhooks directly into PostgreSQL."
              },
              {
                icon: Workflow,
                title: "Internal Multi-Step Workflows",
                desc: "Automate task assignments, multi-tier management approvals, document review pipelines, and department handoffs."
              },
              {
                icon: Sparkles,
                title: "AI Document & PDF Processing",
                desc: "Extract vendor line items, totals, and contract dates from uploaded PDFs and invoices with structured Zod validation."
              },
              {
                icon: Activity,
                title: "Event-Driven Notifications",
                desc: "Instantly alert staff across WhatsApp, Slack, or SMS whenever critical business events or exceptions occur."
              },
              {
                icon: ShieldCheck,
                title: "Operational Anomaly Alerts",
                desc: "Trigger automated alerts for low inventory thresholds, failed customer payments, unusual activity, or SLA breaches."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#E2EAE6] hover:border-[#059669] transition-all shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-[#12201B] mb-2">{item.title}</h3>
                  <p className="text-xs text-[#52615B] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="#contact">
              <Button size="lg" className="bg-[#059669] text-white hover:bg-[#10B981] font-bold text-xs uppercase tracking-wider rounded-xl h-12 px-8">
                Discuss My Workflow
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. AI IS NOT ALWAYS THE ANSWER */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              ENGINEERING CREDIBILITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Not Every Workflow Needs AI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="flex items-center gap-2 mb-3">
                <Workflow className="w-5 h-5 text-[#059669]" />
                <h3 className="font-bold text-base text-[#12201B]">Deterministic Code (Traditional)</h3>
              </div>
              <p className="text-xs text-[#52615B] leading-relaxed mb-4">
                If your process follows rigid, predictable logic (&ldquo;If payment is confirmed $\rightarrow$ update database and send receipt&rdquo;), traditional code is faster, 100% predictable, and costs $0 in API tokens.
              </p>
              <div className="text-[11px] font-mono text-[#059669] font-bold">
                Best for: Status triggers, database syncs, scheduled reports
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0]">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-[#059669]" />
                <h3 className="font-bold text-base text-[#047857]">Intelligent AI Automation</h3>
              </div>
              <p className="text-xs text-[#065F46] leading-relaxed mb-4">
                AI is essential when your workflow requires understanding natural language, classifying freeform customer intent, extracting data from messy PDF invoices, or reasoning over internal documentation.
              </p>
              <div className="text-[11px] font-mono text-[#059669] font-bold">
                Best for: Unstructured data, customer chats, document parsing
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#F0FDF4] border border-[#DCFCE7] text-xs text-[#065F46] font-mono">
            <strong>Dazzcode Rule:</strong> Use traditional automation where deterministic rules are sufficient. Use AI strictly where it creates measurable business value.
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13 & 14. AI + EXISTING SOFTWARE & 5 REALISTIC EXAMPLES */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              REAL-WORLD WORKFLOWS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Make Your Existing Software Work Smarter
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              You don&apos;t need to replace your software. We build the automation glue connecting your tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] shadow-xs">
              <span className="text-[10px] font-mono text-[#059669] font-bold uppercase mb-1 block">Workflow 01</span>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Lead Qualification</h3>
              <div className="space-y-1.5 font-mono text-[11px] text-[#52615B]">
                <div>1. Website / WhatsApp inquiry received</div>
                <div>2. AI analyzes intent & budget criteria</div>
                <div>3. Lead categorized & CRM updated</div>
                <div>4. Sales team alerted on WhatsApp/Slack</div>
                <div>5. Custom follow-up response sent</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] shadow-xs">
              <span className="text-[10px] font-mono text-[#059669] font-bold uppercase mb-1 block">Workflow 02</span>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Invoice & Payment Sync</h3>
              <div className="space-y-1.5 font-mono text-[11px] text-[#52615B]">
                <div>1. Customer completes purchase/order</div>
                <div>2. M-Pesa STK Push triggered</div>
                <div>3. Automated webhook matches payment ID</div>
                <div>4. PDF receipt generated & emailed</div>
                <div>5. Accounting ledger updated in real-time</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAE6] shadow-xs">
              <span className="text-[10px] font-mono text-[#059669] font-bold uppercase mb-1 block">Workflow 03</span>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Document Data Extraction</h3>
              <div className="space-y-1.5 font-mono text-[11px] text-[#52615B]">
                <div>1. Vendor invoice or contract uploaded</div>
                <div>2. AI parses line items, totals & dates</div>
                <div>3. Zod schema validates extracted data</div>
                <div>4. PostgreSQL database populated</div>
                <div>5. Finance manager alerted for 1-click review</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 15 & 16. WHO IS THIS FOR & SIGNS YOU NEED AUTOMATION */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block">
                WHO WE HELP
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
                Practical Automation for Growing Businesses
              </h2>
              <p className="text-base text-[#52615B] leading-relaxed">
                We engineer reliable automation pipelines for organizations looking to scale output without linearly hiring more administrative personnel.
              </p>

              <div className="space-y-2.5 font-mono text-xs text-[#12201B]">
                <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <strong className="text-[#059669] block">SMEs & Local Businesses:</strong>
                  <span>Automate M-Pesa billing, WhatsApp inquiries, and inventory sync.</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <strong className="text-[#059669] block">SaaS & Startups:</strong>
                  <span>Automate customer onboarding, support routing, and telemetry reporting.</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <strong className="text-[#059669] block">eCommerce & Service Firms:</strong>
                  <span>Automate order fulfillment, dispatch alerts, and customer follow-ups.</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <h3 className="text-xl font-bold text-[#12201B] mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#059669]" />
                Signs Your Business Needs Automation
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#52615B] font-mono">
                <div className="p-2.5 rounded-lg bg-white border border-[#E2EAE6]">
                  • Employees repeatedly copy data between systems
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#E2EAE6]">
                  • The same customer questions are answered daily
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#E2EAE6]">
                  • Leads are lost because follow-up takes too long
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#E2EAE6]">
                  • Staff spend hours processing scanned documents
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#E2EAE6]">
                  • Multiple software tools don&apos;t communicate
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#E2EAE6]">
                  • Critical tasks rely on someone remembering them
                </div>
              </div>

              <div className="mt-6 text-center sm:text-left">
                <Link href="#contact">
                  <Button className="bg-[#059669] hover:bg-[#10B981] text-white font-bold text-xs uppercase tracking-wider rounded-xl">
                    Show Us Your Workflow
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 18. AUTOMATION PROCESS (6 STEPS) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              DISCOVERY & DELIVERY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Our 6-Step Automation Process
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              A structured engineering approach: Map $\rightarrow$ Identify $\rightarrow$ Design $\rightarrow$ Build $\rightarrow$ Deploy $\rightarrow$ Improve.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Understand Workflow", desc: "Map how data and tasks currently flow across your people and tools." },
              { step: "02", title: "Identify Bottlenecks", desc: "Isolate the repetitive, high-friction steps costing your team the most time." },
              { step: "03", title: "Design Architecture", desc: "Determine what should be automated, AI-assisted, or kept human-controlled." },
              { step: "04", title: "Build & Integrate", desc: "Engineer robust webhook pipelines, API integrations, and Zod AI schemas." },
              { step: "05", title: "Deploy to Production", desc: "Connect the automated workflows to your live environment with failover rules." },
              { step: "06", title: "Monitor & Optimize", desc: "Track execution latency, error fallbacks, and token costs in production." }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#E2EAE6] hover:border-[#059669] transition-all shadow-xs">
                <span className="text-2xl font-black font-mono text-[#059669]/30 mb-2 block">{item.step}</span>
                <h3 className="font-bold text-base text-[#12201B] mb-1">{item.title}</h3>
                <p className="text-xs text-[#52615B] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 22, 23 & 24. HUMAN-IN-THE-LOOP, SECURITY & RELIABILITY */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Human-in-the-Loop</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Automation completes simple tasks automatically, while edge-case exceptions are routed to staff dashboards for 1-click manual review.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Data Privacy & Security</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Zero-retention commercial API agreements guarantee your sensitive business data is never stored or used to train public foundation models.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Failure Handling & Retries</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Exponential backoff retries, BullMQ dead-letter queues, and automated alerts ensure no customer transaction or webhook is silently lost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 25. TRADITIONAL VS AI COMPARISON TABLE */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              AUTOMATION PARADIGMS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Traditional Automation vs AI-Powered Automation
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              Understanding which engine fits specific stages of your business workflow.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-[#E2EAE6] bg-white shadow-xs">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="bg-[#12201B] text-white border-b border-[#E2EAE6]">
                  <th className="p-4 font-bold">Dimension</th>
                  <th className="p-4 font-bold text-[#A7B9B2]">Traditional Automation</th>
                  <th className="p-4 font-bold text-[#10B981]">AI-Powered Automation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2EAE6] text-[#12201B]">
                <tr>
                  <td className="p-4 font-bold">Logic Type</td>
                  <td className="p-4 text-[#52615B]">Deterministic (If X $\rightarrow$ Do Y)</td>
                  <td className="p-4 font-bold text-[#059669]">Contextual reasoning & classification</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Input Handling</td>
                  <td className="p-4 text-[#52615B]">Rigid, structured form fields only</td>
                  <td className="p-4 font-bold text-[#059669]">Processes unstructured PDFs, text, chats</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Token Cost</td>
                  <td className="p-4 text-[#52615B]">$0 (pure software execution)</td>
                  <td className="p-4 font-bold text-[#059669]">Fractional cents per LLM API call</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Best Use Case</td>
                  <td className="p-4 text-[#52615B]">Database syncs, billing, alerts</td>
                  <td className="p-4 font-bold text-[#059669]">Lead triage, document extraction, RAG</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 27 & 28. KENYA CAPABILITIES & WHY DAZZCODE */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              WHY PARTNER WITH DAZZCODE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Why Build Automation With Dazzcode?
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              We are software engineers who build robust automation pipelines tailored to real operational workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Business-First Engineering</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                We start with your operational bottlenecks, not the AI tool. We design the workflow before writing code.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Custom Code, No Brittle Zapier</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                We engineer reliable TypeScript microservices and BullMQ queues with proper retry logic and error logging.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Kenya Payment & WhatsApp Depth</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Deep expertise in Safaricom M-Pesa Daraja 2.0 API and WhatsApp Cloud API for frictionless local workflows.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Zero Hallucination Validation</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Strict Zod schema parsing guarantees AI outputs always match expected database formats before saving.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Deploy to Your Own VPS</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                You retain 100% control of your infrastructure, API keys, and data. Deployed to your dedicated Linux VPS.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#12201B] mb-2">Pragmatic AI Usage</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                We optimize token consumption and model routing to keep your monthly LLM API expenses minimal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 29. CASE STUDIES */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              PROVEN RESULTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Verified Automation Projects
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              Real-world automation pipelines delivering measurable time savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#E2EAE6] shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#059669] bg-[#ECFDF5] px-2.5 py-1 rounded-full">
                  Lead Automation
                </span>
                <span className="text-xs font-mono text-[#52615B]">AI Lead Automation Pipeline</span>
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-2">
                Automated Inbound Lead Qualification & CRM Routing
              </h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-6 font-mono">
                Engineered an asynchronous pipeline with BullMQ and Claude 3.5 Sonnet to parse incoming inquiry forms, qualify buying intent, and route warm leads to sales agents in under 15 seconds.
              </p>
              <div className="pt-4 border-t border-[#E2EAE6] grid grid-cols-3 gap-2 text-center font-mono">
                <div className="p-2 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <div className="text-base font-bold text-[#059669]">20+ hrs</div>
                  <div className="text-[10px] text-[#52615B]">Saved Weekly</div>
                </div>
                <div className="p-2 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <div className="text-base font-bold text-[#059669]">&lt; 15s</div>
                  <div className="text-[10px] text-[#52615B]">Lead Triage</div>
                </div>
                <div className="p-2 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <div className="text-base font-bold text-[#059669]">0%</div>
                  <div className="text-[10px] text-[#52615B]">Lost Inquiries</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E2EAE6] shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#059669] bg-[#ECFDF5] px-2.5 py-1 rounded-full">
                  Retail Automation
                </span>
                <span className="text-xs font-mono text-[#52615B]">DazzPOS System</span>
              </div>
              <h3 className="text-xl font-bold text-[#12201B] mb-2">
                Automated M-Pesa Payment & Real-Time Stock Reconciliation
              </h3>
              <p className="text-xs text-[#52615B] leading-relaxed mb-6 font-mono">
                Integrated Safaricom Daraja STK Push webhooks with multi-branch PostgreSQL databases to automatically match payments, issue digital receipts, and trigger automated supplier low-stock orders.
              </p>
              <div className="pt-4 border-t border-[#E2EAE6] grid grid-cols-3 gap-2 text-center font-mono">
                <div className="p-2 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <div className="text-base font-bold text-[#059669]">100%</div>
                  <div className="text-[10px] text-[#52615B]">Ledger Accuracy</div>
                </div>
                <div className="p-2 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <div className="text-base font-bold text-[#059669]">&lt; 2s</div>
                  <div className="text-[10px] text-[#52615B]">M-Pesa Sync</div>
                </div>
                <div className="p-2 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <div className="text-base font-bold text-[#059669]">0</div>
                  <div className="text-[10px] text-[#52615B]">Manual Entries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 31. FAQ SECTION */}
      {/* ========================================================================= */}
      <section id="faq" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              AI & Workflow Automation FAQs
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              Clear technical answers regarding workflows, integrations, reliability, and security.
            </p>
          </div>

          <div className="space-y-4">
            {aiFaqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs">
                <h3 className="font-bold text-base text-[#12201B] mb-2 flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-[#52615B] leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 32. INTERNAL LINKING */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              ENGINEERING ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              Related Software Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/web-application-development" className="p-6 rounded-2xl bg-white border border-[#E2EAE6] hover:border-[#059669] transition-all group">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#059669] font-bold block mb-2">
                Custom Portals & Apps
              </span>
              <h3 className="font-bold text-base text-[#12201B] group-hover:text-[#059669] transition-colors mb-2 flex items-center justify-between">
                <span>Custom Web Application Development</span>
                <ArrowUpRight className="w-4 h-4 text-[#52615B] group-hover:text-[#059669]" />
              </h3>
              <p className="text-xs text-[#52615B]">
                Build custom business management systems, client portals, and operational dashboards tailored to your workflows.
              </p>
            </Link>

            <Link href="/services/saas-mvp-development" className="p-6 rounded-2xl bg-white border border-[#E2EAE6] hover:border-[#059669] transition-all group">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#059669] font-bold block mb-2">
                SaaS Products
              </span>
              <h3 className="font-bold text-base text-[#12201B] group-hover:text-[#059669] transition-colors mb-2 flex items-center justify-between">
                <span>SaaS MVP Development</span>
                <ArrowUpRight className="w-4 h-4 text-[#52615B] group-hover:text-[#059669]" />
              </h3>
              <p className="text-xs text-[#52615B]">
                Turn your software idea into a launchable SaaS product in 4–8 weeks with multi-tenancy and Stripe billing.
              </p>
            </Link>

            <Link href="/services/vps-deployment" className="p-6 rounded-2xl bg-white border border-[#E2EAE6] hover:border-[#059669] transition-all group">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#059669] font-bold block mb-2">
                Hosting & DevOps
              </span>
              <h3 className="font-bold text-base text-[#12201B] group-hover:text-[#059669] transition-colors mb-2 flex items-center justify-between">
                <span>VPS Deployment Services</span>
                <ArrowUpRight className="w-4 h-4 text-[#52615B] group-hover:text-[#059669]" />
              </h3>
              <p className="text-xs text-[#52615B]">
                Deploy your automation pipelines and software applications to dedicated, production-hardened Linux VPS servers.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 33. SUPPORTING BLOG CLUSTER */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              AUTOMATION GUIDES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
              AI & Workflow Engineering Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            {[
              "What Is AI Business Automation?",
              "What Is Workflow Automation?",
              "AI Automation vs Traditional Automation",
              "What Business Processes Should You Automate?",
              "How Does AI Workflow Automation Work?",
              "AI Automation Examples for Small Businesses",
              "AI Automation for Businesses in Kenya",
              "Business Process Automation in Kenya",
              "How Kenyan SMEs Can Use AI Automation",
              "WhatsApp Business Automation in Kenya",
              "M-Pesa Business Automation: What Can Be Automated?",
              "How Much Does AI Automation Cost?",
              "How to Choose an AI Automation Company",
              "Custom AI Automation vs No-Code Automation",
              "How to Build an AI Workflow",
              "Building Reliable AI Automation",
              "Human-in-the-Loop AI Automation",
              "AI Workflow Error Handling",
              "Securing AI Automation Systems",
              "AI API Integration With Next.js"
            ].map((title, idx) => (
              <Link
                key={idx}
                href="/blog"
                className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6] hover:border-[#059669] hover:text-[#059669] transition-all flex items-center justify-between group"
              >
                <span className="text-[#12201B] group-hover:text-[#059669] line-clamp-1">{title}</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#52615B] group-hover:text-[#059669] shrink-0 ml-2" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 30 & 39. FINAL CTA & INTAKE FORM */}
      {/* ========================================================================= */}
      <section id="contact" className="py-20 md:py-28 bg-[#FFFFFF]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold block mb-2">
              AUTOMATE REPETITIVE TASKS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#12201B] tracking-tight">
              Find the Work Your Business Shouldn&apos;t Be Doing Manually
            </h2>
            <p className="text-base text-[#52615B] mt-3">
              Tell us how your current workflow works. We&apos;ll help identify what can be automated and where AI can add real value.
            </p>
          </div>

          <AiAutomationLeadForm />
        </div>
      </section>
    </div>
  );
}
