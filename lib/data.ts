import {
    Layout,
    Globe,
    Server,
    Database,
    Code2,
    Lock,
    Zap,
    BarChart3,
    ShoppingCart,
    Briefcase,
    Settings,
    Users,
    Search,
    PenTool,
    Cpu,
    Rocket,
    ShieldAlert,
    TrendingUp,
    Terminal,
    Layers,
    LucideIcon
} from "lucide-react";
import React from 'react';

export interface ServiceDetail {
    slug: string;
    title: string;
    shortTitle?: string;
    tagline: string;
    description: string;
    icon: LucideIcon;
    hero: {
        headline: string;
        subheadline: string;
        cta: string;
        ctaHref?: string;
    };
    primaryKeyword: string;
    secondaryKeywords: string[];
    problems: {
        heading: string;
        points: string[];
    };
    solution: {
        heading: string;
        description: string;
        features: string[];
    };
    deliverables: string[];
    technicalCapabilities: string[];
    process: {
        step: number;
        title: string;
        description: string;
    }[];
    differentiators: {
        icon: LucideIcon;
        title: string;
        description: string;
    }[];
    useCases: string[];
    pricing: {
        heading: string;
        description: string;
    };
    faqs: {
        question: string;
        answer: string;
    }[];
    relatedCaseStudy?: {
        title: string;
        slug: string;
        summary: string;
    };
    relatedBlogSlugs?: string[];
    regionalLinks?: {
        label: string;
        href: string;
        region: string;
    }[];
}

export interface CaseStudyDetail {
    slug: string;
    title: string;
    client: string;
    category: string;
    description: string;
    summary: string;
    tags: string[];
    metrics: { label: string; value: string }[];
    problem: {
        heading: string;
        description: string;
        challenges: string[];
    };
    decision: {
        heading: string;
        description: string;
        architectureChoices: string[];
    };
    build: {
        heading: string;
        description: string;
        techStack: string[];
        keyFeatures: string[];
    };
    result: {
        heading: string;
        description: string;
        outcomes: string[];
    };
    lessonsLearned: string[];
    relatedServices: { title: string; href: string }[];
}

export const services: ServiceDetail[] = [
    {
        slug: "saas-development",
        title: "SaaS Development Services",
        shortTitle: "SaaS Development",
        tagline: "End-to-End SaaS Engineering for Startups & Scaleups",
        description: "We architect and engineer scalable, multi-tenant SaaS platforms with strict TypeScript type-safety, robust subscription billing, and cloud-native performance.",
        icon: Layout,
        primaryKeyword: "SaaS development company",
        secondaryKeywords: [
            "SaaS development",
            "SaaS development services",
            "SaaS product development",
            "custom SaaS development",
            "SaaS application development"
        ],
        hero: {
            headline: "Custom SaaS Development Company",
            subheadline: "We engineer institutional-grade, multi-tenant SaaS platforms from discovery to launch. Built with Next.js, TypeScript, PostgreSQL, and scalable cloud architectures.",
            cta: "Start Your SaaS Project",
            ctaHref: "/contact"
        },
        problems: {
            heading: "Common Traps in SaaS Development",
            points: [
                "Spaghetti codebases built by non-specialist agencies that break under early user load.",
                "Multi-tenancy and data isolation flaws that risk customer data leakage.",
                "Complex billing edge-cases (upgrades, prorations, usage metrics) that cause revenue leakage.",
                "High technical debt that slows down subsequent feature release velocity."
            ]
        },
        solution: {
            heading: "The Dazzcode SaaS Engineering Advantage",
            description: "We don't build throwaway prototypes; we build scalable software assets. Every SaaS platform we engineer follows strict domain modeling, automated CI/CD pipelines, role-based access controls (RBAC), and subscription infrastructure ready for high user concurrency.",
            features: [
                "Strict End-to-End Type Safety across client, API, and database layers",
                "Robust Multi-Tenant Architecture with Org/Team workspace isolation",
                "Subscription Billing & Payment Webhooks (Stripe, LemonSqueezy, M-Pesa)",
                "Automated CI/CD pipelines with zero-downtime deployment strategies"
            ]
        },
        deliverables: [
            "Complete SOC2-ready source code repository with 100% client IP ownership",
            "Modern Admin backoffice & client workspace dashboard interfaces",
            "Secure authentication (OAuth 2.0, Magic Links, MFA) & RBAC",
            "Postman API documentation, ERD database schema maps, and deployment runbooks"
        ],
        technicalCapabilities: [
            "Next.js App Router (React Server Components)",
            "TypeScript & Zod validation",
            "PostgreSQL with Prisma / Drizzle ORM",
            "Redis caching & BullMQ background job processing",
            "Docker containerization & Linux VPS orchestration",
            "Tailwind CSS & Radix UI accessible design systems"
        ],
        process: [
            { step: 1, title: "Architecture & Scope Definition", description: "We define precise data models, user flows, and core value loops to eliminate execution risk." },
            { step: 2, title: "Agile Development Sprints", description: "Bi-weekly sprints with live staging deployments so you test real working code every week." },
            { step: 3, title: "Automated QA & Load Testing", description: "Rigorous end-to-end integration tests, payment simulation, and concurrency stress testing." },
            { step: 4, title: "Production Deployment & Handoff", description: "Production launch to cloud/VPS infrastructure with monitoring, full IP transfer, and training." }
        ],
        differentiators: [
            { icon: Code2, title: "Clean Code & Type Safety", description: "Strict TypeScript typing and linting enforced on every commit for zero-bug confidence." },
            { icon: Lock, title: "Security & Data Isolation", description: "OWASP Top 10 compliance, SQLi prevention, and strict tenant row-level security." },
            { icon: Zap, title: "Sub-100ms Performance", description: "Edge caching, optimized query indexing, and minimal JavaScript bundles for fast rendering." }
        ],
        useCases: [
            "B2B Workflow & Project Management Platforms",
            "Vertical Industry ERPs & Dashboards",
            "Fintech & Payment Aggregation Portals",
            "Multi-Store Retail & Commerce Software"
        ],
        pricing: {
            heading: "Transparent Fixed-Milestone Sprints",
            description: "Custom SaaS development is scoped by milestones starting at $6,000 for foundational platforms. No surprise hourly overruns."
        },
        faqs: [
            { question: "Who owns the code and intellectual property?", answer: "You do. You own 100% of the intellectual property, Git repositories, and infrastructure from day one with zero vendor lock-in." },
            { question: "What tech stack do you recommend for SaaS?", answer: "We primarily build with Next.js (App Router), TypeScript, PostgreSQL, Tailwind CSS, and Node.js or Go backends deployed to VPS or Cloudflare/AWS." },
            { question: "Can you integrate local and international payment gateways?", answer: "Yes. We build native integrations with Stripe, PayPal, LemonSqueezy, and local payment rails such as M-Pesa Daraja API." },
            { question: "How do you handle multi-tenancy?", answer: "We implement tenant isolation via schema-based or row-level security (RLS) with organization IDs mapped through typed database middleware." }
        ],
        relatedCaseStudy: {
            title: "DazzPOS Retail System",
            slug: "dazzpos",
            summary: "Offline-first Point of Sale & Inventory platform built for multi-store retail with sub-second sync."
        },
        relatedBlogSlugs: [
            "how-much-does-saas-development-cost",
            "how-long-does-it-take-to-build-a-saas",
            "how-to-hire-a-saas-development-agency"
        ],
        regionalLinks: [
            { label: "SaaS Development in Kenya", href: "/kenya/saas-development-company", region: "Kenya" },
            { label: "SaaS Development in East Africa", href: "/east-africa/saas-development", region: "East Africa" },
            { label: "SaaS Development in the UK", href: "/uk/saas-development", region: "United Kingdom" },
            { label: "SaaS Development in the US", href: "/us/saas-development", region: "United States" }
        ]
    },
    {
        slug: "saas-mvp-development",
        title: "SaaS MVP Development",
        shortTitle: "SaaS MVP",
        tagline: "From Validated Idea to Production Launch in 4–6 Weeks",
        description: "Turn your core software concept into an investor-ready, production-grade Minimum Viable Product built for real customer feedback and rapid validation.",
        icon: Rocket,
        primaryKeyword: "SaaS MVP development",
        secondaryKeywords: [
            "SaaS MVP",
            "MVP development",
            "MVP development company",
            "startup MVP development",
            "SaaS MVP development services"
        ],
        hero: {
            headline: "SaaS MVP Development for High-Conviction Founders",
            subheadline: "Launch your Minimum Viable Product in 4 to 6 weeks without technical debt. We build lean, scalable SaaS MVPs that attract early adopters and pass investor due diligence.",
            cta: "Scope Your SaaS MVP",
            ctaHref: "/contact"
        },
        problems: {
            heading: "Why Most Startup MVPs Fail",
            points: [
                "Overbuilding unnecessary features that delay launch by 6+ months.",
                "Hiring cheap freelance agencies who deliver broken, unmaintainable code.",
                "Failing to implement proper billing, auth, and user onboarding loops.",
                "Having to completely rewrite the product the moment real users arrive."
            ]
        },
        solution: {
            heading: "The Lean, Production-Ready MVP Methodology",
            description: "We help you isolate the single most valuable workflow in your product. By focusing on core business logic, high-conversion UI, and robust backend pipes, we ship working software in weeks rather than quarters.",
            features: [
                "Ruthless Feature Scoping: Prioritizing revenue-generating workflows",
                "Pre-built, Battle-Tested SaaS Boilerplates for auth, billing, and team management",
                "Investor-Ready Architecture designed to scale smoothly into v2",
                "Full IP Transfer with clean, documented TypeScript codebases"
            ]
        },
        deliverables: [
            "Production-ready Next.js SaaS MVP deployed to live URL",
            "Secure Authentication & User Onboarding Flow",
            "Automated Subscription Payments & Invoicing",
            "Transactional Emails & Activity Logging",
            "Admin Control Panel to manage tenants and data"
        ],
        technicalCapabilities: [
            "Next.js, React & TypeScript",
            "PostgreSQL & Supabase / Neon DB",
            "Stripe Checkout & Customer Portal",
            "Tailwind CSS & Framer Motion UI",
            "Resend / Postmark Transactional Email",
            "Vercel or Hetzner VPS hosting"
        ],
        process: [
            { step: 1, title: "Feature Scoping & Wireframing (Week 1)", description: "We define the database schema, eliminate vanity features, and map user flows." },
            { step: 2, title: "Core Architecture & Auth (Week 2)", description: "We set up databases, authentication, multi-tenant scaffolding, and base UI." },
            { step: 3, title: "Core Value Logic & Payments (Weeks 3–4)", description: "We build the primary product feature set and integrate subscription checkout." },
            { step: 4, title: "QA, Polish & Deployment (Week 5–6)", description: "End-to-end testing, mobile responsiveness audit, analytics, and live launch." }
        ],
        differentiators: [
            { icon: Zap, title: "4–6 Week Launch Guarantee", description: "Focused agile sprints ensure your MVP launches rapidly so you start gathering real feedback." },
            { icon: Code2, title: "No Throwaway Code", description: "Built with scalable patterns so your MVP codebase naturally grows into your full product." },
            { icon: Lock, title: "Complete IP Ownership", description: "You own all code repositories, database instances, and assets with zero lock-in." }
        ],
        useCases: [
            "Early-Stage Tech Startups seeking seed funding",
            "Domain Experts building vertical B2B tools",
            "Agencies productizing service offerings into SaaS",
            "Existing businesses launching digital subscription products"
        ],
        pricing: {
            heading: "Predictable MVP Pricing",
            description: "Our SaaS MVP packages range between $3,000 and $7,500 depending on workflow complexity and integration requirements."
        },
        faqs: [
            { question: "How is an MVP different from a prototype?", answer: "A prototype is a clickable mockup; our MVP is real, production-ready software connected to live databases and payment gateways that real users can pay to use." },
            { question: "Can we add more features after launch?", answer: "Yes. Because we build with strict modular TypeScript and PostgreSQL schemas, adding features post-launch is smooth and predictable." },
            { question: "Do you help with product scoping?", answer: "Yes. During our discovery sprint, we actively advise on what features to keep, defer, or cut to hit your target launch date." }
        ],
        relatedCaseStudy: {
            title: "AI Lead Automation Pipeline",
            slug: "ai-lead-automation",
            summary: "Automated qualification and CRM enrichment pipeline deployed in 3 weeks."
        },
        relatedBlogSlugs: [
            "how-much-does-saas-development-cost",
            "how-long-does-it-take-to-build-a-saas"
        ],
        regionalLinks: [
            { label: "MVP Development in Kenya", href: "/kenya/mvp-development", region: "Kenya" },
            { label: "SaaS Development in the UK", href: "/uk/saas-development", region: "United Kingdom" },
            { label: "SaaS Development in the US", href: "/us/saas-development", region: "United States" }
        ]
    },
    {
        slug: "code-audit",
        title: "SaaS Code Audit & Technical Due Diligence",
        shortTitle: "Code Audit",
        tagline: "Identify Technical Debt, Security Risks & Scaling Bottlenecks",
        description: "Comprehensive software codebase and architecture audits for founders, CTOs, and investors. We inspect code quality, database performance, security, and scalability.",
        icon: ShieldAlert,
        primaryKeyword: "SaaS code audit",
        secondaryKeywords: [
            "code audit",
            "SaaS technical audit",
            "codebase audit",
            "software code audit",
            "software architecture audit",
            "technical debt audit"
        ],
        hero: {
            headline: "SaaS Code Audit & Architecture Review",
            subheadline: "Untangle spaghetti code, uncover hidden security vulnerabilities, and fix slow database bottlenecks. We deliver deep technical audits with actionable remediation roadmaps.",
            cta: "Book a Technical Review",
            ctaHref: "/contact"
        },
        problems: {
            heading: "Signs Your Codebase Needs an Urgent Audit",
            points: [
                "Feature releases take 4x longer than they used to due to fragile dependencies.",
                "Frequent unexplained server crashes, high CPU spikes, and 504 gateway timeouts.",
                "Lack of automated tests creating fear of pushing updates to production.",
                "Approaching an investor due diligence round with unvetted third-party code."
            ]
        },
        solution: {
            heading: "Rigorous, Engineering-Led Code Inspection",
            description: "We don't just run automated static linters. Senior software engineers inspect your repositories line-by-line, analyzing database query plans, API design, dependency vulnerabilities, and concurrency architecture.",
            features: [
                "Deep-Dive Static & Dynamic Code Analysis (TypeScript, React, Node, Python)",
                "Database Index Profiling & N+1 Query Elimination (PostgreSQL / MySQL)",
                "Security & Vulnerability Assessment (OWASP Top 10, Auth, Secrets)",
                "Prioritized 30+ Point Engineering Remediation Action Plan"
            ]
        },
        deliverables: [
            "Executive Summary for non-technical stakeholders and investors",
            "Detailed Technical Report with categorized critical, medium, and low issues",
            "SQL query optimization and database indexing recommendations",
            "Prioritized step-by-step refactoring roadmap and estimated effort matrix",
            "60-minute technical debrief with our Lead Systems Architect"
        ],
        technicalCapabilities: [
            "TypeScript, JavaScript, Node.js, Python, Go, Rust",
            "PostgreSQL EXPLAIN ANALYZE query profiling",
            "Next.js App Router performance profiling",
            "Docker & CI/CD pipeline auditing",
            "API latency & connection pool optimization",
            "Secrets management and OWASP security review"
        ],
        process: [
            { step: 1, title: "Repository & Infrastructure Access", description: "Secure NDA signing and read-only access to Git repos and staging environments." },
            { step: 2, title: "Static & Architecture Analysis", description: "Deep inspection of code modularity, state management, and dependency hygiene." },
            { step: 3, title: "Database & Concurrency Profiling", description: "Profiling query execution times, lock contention, and connection pooling." },
            { step: 4, title: "Report Delivery & Technical Debrief", description: "Comprehensive audit document delivery and walkthrough with your team." }
        ],
        differentiators: [
            { icon: Code2, title: "No Panic Rewrites", description: "We provide realistic stabilization steps rather than dogmatically demanding complete rewrites." },
            { icon: Lock, title: "Due Diligence Ready", description: "Reports structured to give VCs, buyers, and technical auditors clear visibility and confidence." },
            { icon: Zap, title: "Immediate Quick Wins", description: "We pinpoint high-impact fixes (e.g. 3 index tweaks) that deliver instant 5x speedups." }
        ],
        useCases: [
            "Founders preparing for Seed / Series A technical due diligence",
            "Startups experiencing slow query times and frequent database deadlocks",
            "Companies inheriting outsourced or freelance agency codebases",
            "CTOs planning major architectural refactors or cloud migrations"
        ],
        pricing: {
            heading: "Fixed-Fee Audit Packages",
            description: "Codebase audits start at $1,500 for focused applications, delivering complete reports within 5 to 7 business days."
        },
        faqs: [
            { question: "How long does a code audit take?", answer: "A thorough codebase audit takes 5 to 7 business days from repository access to final report presentation." },
            { question: "Can you fix the issues you discover?", answer: "Yes. Following the audit, we can execute the remediation roadmap through dedicated refactoring sprints." },
            { question: "How do you protect our intellectual property?", answer: "We execute strict mutual Non-Disclosure Agreements (NDAs) before receiving any repository access." }
        ],
        relatedCaseStudy: {
            title: "DazzPOS Architecture & Sync Audit",
            slug: "dazzpos",
            summary: "Stabilizing distributed point-of-sale data sync for high-volume retail transactions."
        },
        relatedBlogSlugs: [
            "how-to-audit-a-saas-codebase",
            "10-signs-your-saas-has-technical-debt",
            "postgresql-performance-for-saas"
        ],
        regionalLinks: [
            { label: "Code Audit in the UK", href: "/uk/code-audit", region: "United Kingdom" },
            { label: "Code Audit in the US", href: "/us/code-audit", region: "United States" }
        ]
    },
    {
        slug: "saas-scaling",
        title: "SaaS Scaling & Performance Optimization",
        shortTitle: "SaaS Scaling",
        tagline: "Scale Your SaaS to Thousands of Users with Zero Downtime",
        description: "Scale your software architecture for aggressive user growth. We eliminate database bottlenecks, optimize concurrency, reduce cloud infrastructure costs, and boost response times.",
        icon: TrendingUp,
        primaryKeyword: "SaaS scaling",
        secondaryKeywords: [
            "scale SaaS application",
            "SaaS scalability",
            "SaaS performance optimization",
            "SaaS architecture",
            "software performance optimization"
        ],
        hero: {
            headline: "SaaS Scaling & Performance Optimization",
            subheadline: "Handle rapid traffic growth without crashing or exploding server costs. We optimize database queries, implement multi-tier caching, and modernize architectures for enterprise scale.",
            cta: "Talk to a Scaling Engineer",
            ctaHref: "/contact"
        },
        problems: {
            heading: "The Bottlenecks that Cripple Scaling SaaS Platforms",
            points: [
                "Database CPU hits 100% during peak user hours, freezing checkout and dashboards.",
                "Serverless cold-starts and unpooled connections exhausting PostgreSQL limits.",
                "Cloud infrastructure bills doubling every month without proportional user growth.",
                "Slow, bloated API responses that cause user frustration and trial churn."
            ]
        },
        solution: {
            heading: "High-Concurrency Architecture Engineering",
            description: "Scaling software isn't just about throwing bigger servers at the problem. We re-engineer data access patterns, introduce connection poolers, implement distributed caching, and move compute to edge networks.",
            features: [
                "Database Query Optimization & PgBouncer Connection Pooling",
                "Distributed Redis Caching & In-Memory Session Management",
                "Asynchronous Background Job Queues (BullMQ / RabbitMQ)",
                "Edge API Routing & Static Asset Acceleration via Global CDNs"
            ]
        },
        deliverables: [
            "Refactored high-concurrency API endpoints with sub-50ms target latency",
            "PostgreSQL indexation strategy and connection pooling configuration",
            "Background queue architecture for asynchronous processing",
            "Cloud cost reduction report and infrastructure resizing roadmap",
            "Continuous performance monitoring and APM alert configuration"
        ],
        technicalCapabilities: [
            "PostgreSQL, Redis, PgBouncer, Supabase/Neon",
            "Next.js Edge Runtime & React Server Components",
            "Node.js cluster orchestration, Go microservices",
            "Docker, Linux kernel tuning, Nginx optimization",
            "Sentry / Datadog / OpenTelemetry observability"
        ],
        process: [
            { step: 1, title: "Telemetry & Load Profiling", description: "We instrument your production systems to measure exact p95/p99 latency spikes under load." },
            { step: 2, title: "Database & Query Tuning", description: "Adding targeted indexes, fixing N+1 queries, and configuring connection pooling." },
            { step: 3, title: "Caching & Async Offloading", description: "Moving heavy report generation and notifications to distributed background workers." },
            { step: 4, title: "Stress Testing & Validation", description: "Simulating 10,000+ concurrent virtual users with Artillery/k6 to verify platform stability." }
        ],
        differentiators: [
            { icon: Zap, title: "Sub-50ms Response Times", description: "Eliminate sluggish UI by caching hot data paths and optimizing SQL JOIN execution." },
            { icon: Lock, title: "Zero Downtime Deployments", description: "Blue/green deployment workflows to ensure active customers never experience outages." },
            { icon: BarChart3, title: "Drastic Cloud Cost Reduction", description: "Fixing query inefficiencies frequently reduces cloud compute requirements by 40–70%." }
        ],
        useCases: [
            "SaaS platforms scaling past 10,000 active monthly users",
            "E-commerce & retail software during high-volume sales flash events",
            "Fintech and transactional platforms requiring low latency",
            "Data-heavy reporting dashboards struggling with multi-second loads"
        ],
        pricing: {
            heading: "Dedicated Scaling Sprints",
            description: "Scaling and optimization sprints start at $4,500. We diagnose and eliminate your critical performance bottlenecks."
        },
        faqs: [
            { question: "How much faster can you make our application?", answer: "We routinely reduce p95 API response times from 1,200ms+ down to sub-100ms through query profiling, caching, and connection pooling." },
            { question: "Will our service experience downtime during optimization?", answer: "No. All schema alterations and database index creations are executed concurrently with zero disruption to active users." },
            { question: "Can you help lower our AWS/Vercel bills?", answer: "Yes. Optimizing CPU-intensive operations and eliminating redundant compute cycles directly reduces cloud hosting costs." }
        ],
        relatedCaseStudy: {
            title: "DazzPOS Multi-Store Scaling",
            slug: "dazzpos",
            summary: "Scaling offline-first transaction processing across retail chains."
        },
        relatedBlogSlugs: [
            "postgresql-performance-for-saas",
            "how-to-deploy-nextjs-on-a-vps"
        ],
        regionalLinks: [
            { label: "SaaS Scaling Services in the UK", href: "/uk/saas-scaling", region: "United Kingdom" },
            { label: "SaaS Scaling Services in the US", href: "/us/saas-scaling", region: "United States" }
        ]
    },
    {
        slug: "vps-deployment",
        title: "VPS Deployment for SaaS & Web Applications",
        shortTitle: "VPS Deployment",
        tagline: "Deploy Next.js, Node.js & Docker on High-Performance Linux VPS",
        description: "Take control of your infrastructure. We configure, harden, and deploy SaaS applications to Linux VPS servers with Docker, Nginx reverse proxies, SSL automation, and CI/CD.",
        icon: Server,
        primaryKeyword: "VPS deployment",
        secondaryKeywords: [
            "VPS server deployment",
            "Node.js VPS deployment",
            "Next.js VPS deployment",
            "Docker VPS deployment",
            "Linux server deployment",
            "SaaS deployment",
            "application deployment"
        ],
        hero: {
            headline: "VPS Deployment for Next.js, Node.js & Docker SaaS",
            subheadline: "Escape overpriced serverless platforms. We configure production-hardened Linux VPS environments (Hetzner, DigitalOcean, Linode, AWS EC2) with automated CI/CD and zero-downtime deploys.",
            cta: "Deploy Your Application",
            ctaHref: "/contact"
        },
        problems: {
            heading: "Why Developers & Startups Move to VPS Infrastructure",
            points: [
                "Unpredictable, ballooning serverless bandwidth and function execution bills on PaaS.",
                "Serverless execution timeouts (10–15s limit) blocking heavy background jobs and exports.",
                "Lack of direct database connection pooling causing serverless DB connection crashes.",
                "Poor server configuration leading to security breaches, downtime, and lost data."
            ]
        },
        solution: {
            heading: "Production-Grade Linux VPS Server Engineering",
            description: "A properly configured $20–$50/month VPS can outperform an expensive $500/month managed PaaS setup. We build automated, hardened Linux server setups with Docker Compose, automated SSL renewal, automated daily backups, and GitHub Actions CI/CD pipelines.",
            features: [
                "Next.js App Router standalone deployment with Node.js & PM2 / Docker",
                "Nginx Reverse Proxy with Brotli compression, HTTP/2, and rate-limiting",
                "Automated Let's Encrypt SSL/TLS Certificate auto-renewals",
                "UFW Firewall hardening, SSH key-only access, Fail2ban intrusion prevention",
                "Automated GitHub Actions CI/CD for push-to-deploy workflows",
                "Off-site automated database backups with encryption"
            ]
        },
        deliverables: [
            "Fully configured and hardened Ubuntu LTS VPS instance",
            "Docker Compose multi-container stack (App + Postgres + Redis + Nginx)",
            "Automated GitHub Actions workflow for push-to-deploy zero-downtime releases",
            "Automated daily S3 offsite database backup scripts",
            "Complete server administration runbook and SSH access credentials"
        ],
        technicalCapabilities: [
            "Ubuntu Server 22.04 / 24.04 LTS",
            "Docker, Docker Compose, PM2 process manager",
            "Nginx, Caddy reverse proxy configurations",
            "Certbot / Let's Encrypt SSL automation",
            "GitHub Actions & Git webhook automation",
            "Hetzner, DigitalOcean, Linode, AWS EC2, Contabo"
        ],
        process: [
            { step: 1, title: "Server Provisioning & Security Hardening", description: "Configuring non-root user, SSH keys, UFW firewall rules, and Fail2ban." },
            { step: 2, title: "Containerization & Stack Setup", description: "Building optimized multi-stage Dockerfiles and Docker Compose service definitions." },
            { step: 3, title: "Nginx, SSL & Domain Routing", description: "Configuring reverse proxying, gzip/Brotli compression, and automated SSL." },
            { step: 4, title: "CI/CD & Backup Automation", description: "Setting up automated GitHub Actions deploy triggers and offsite cron backups." }
        ],
        differentiators: [
            { icon: Zap, title: "Fixed, Low Hosting Costs", description: "Run high-traffic platforms on a $20–$40/mo VPS instead of hundreds on proprietary cloud platforms." },
            { icon: Lock, title: "Security Hardened", description: "Strict firewall rules, isolated Docker networks, and encrypted offsite backups." },
            { icon: Terminal, title: "Push-to-Deploy Simplicity", description: "Keep the simplicity of git push main with automated zero-downtime releases." }
        ],
        useCases: [
            "Next.js and React SaaS platforms moving beyond serverless limits",
            "Node.js, Express, Fastify, and Python API backends",
            "Self-hosted PostgreSQL, Redis, and Background Worker servers",
            "SaaS startups seeking predictable $20–$50/month infrastructure costs"
        ],
        pricing: {
            heading: "One-Time VPS Deployment Setup",
            description: "Full production VPS setup and CI/CD automation is typically a fixed $800 to $1,500 one-time engagement."
        },
        faqs: [
            { question: "Can Next.js run properly on a VPS?", answer: "Yes! Next.js has official standalone output support that compiles into a lean Node.js server, delivering faster responses and cheaper bandwidth on a Linux VPS." },
            { question: "How does push-to-deploy work without Vercel?", answer: "We configure GitHub Actions to build your Docker container on commit and execute a zero-downtime rolling restart via SSH." },
            { question: "What VPS providers do you recommend?", answer: "We frequently recommend Hetzner (exceptional performance/price in Europe/US), DigitalOcean, or AWS EC2 depending on your geographic needs." }
        ],
        relatedCaseStudy: {
            title: "DazzPOS Retail Architecture",
            slug: "dazzpos",
            summary: "Linux VPS deployment powering high-availability sync endpoints."
        },
        relatedBlogSlugs: [
            "how-to-deploy-nextjs-on-a-vps",
            "postgresql-performance-for-saas"
        ],
        regionalLinks: [
            { label: "SaaS Development in Kenya", href: "/kenya/saas-development-company", region: "Kenya" },
            { label: "SaaS Scaling in the UK", href: "/uk/saas-scaling", region: "United Kingdom" }
        ]
    },
    {
        slug: "web-application-development",
        title: "Custom Web Application Development",
        shortTitle: "Web Applications",
        tagline: "Custom Business Web Apps & Operational Systems",
        description: "Engineer purpose-built web applications, internal tools, customer portals, and custom software designed to digitize complex business operations.",
        icon: Globe,
        primaryKeyword: "web application development",
        secondaryKeywords: [
            "custom web application development",
            "web application development company",
            "business web applications",
            "custom business software"
        ],
        hero: {
            headline: "Custom Web Application Development Company",
            subheadline: "We build high-performance web applications that replace messy spreadsheets and generic SaaS tools with custom software tailored to your exact business workflows.",
            cta: "Scope Your Web Application",
            ctaHref: "/contact"
        },
        problems: {
            heading: "When Off-the-Shelf Software Falls Short",
            points: [
                "Your team spends hours manually copying data between disconnected spreadsheets.",
                "Off-the-shelf software doesn't support your company's unique operational workflows.",
                "Generic platforms charge expensive per-seat pricing that punishes your growth.",
                "Basic marketing websites lack interactive customer portals and real-time data sync."
            ]
        },
        solution: {
            heading: "Engineered for Operational Excellence",
            description: "We don't build generic marketing brochures; we engineer rich, interactive web applications. From custom inventory portals and B2B ordering portals to operational dashboards with automated billing and role-based permissions.",
            features: [
                "Interactive React/Next.js Dashboards with real-time data visualization",
                "Custom Database Architecture modeling your precise business logic",
                "Seamless Third-Party API Integrations (CRMs, ERPs, Payment Gateways)",
                "Role-Based Access Control for staff, managers, and external clients"
            ]
        },
        deliverables: [
            "Full-featured custom web application deployed to cloud/VPS",
            "Client and Admin interfaces with responsive mobile support",
            "Custom API endpoints and automated webhook receivers",
            "Complete data migration from legacy spreadsheets/databases",
            "User training and comprehensive system documentation"
        ],
        technicalCapabilities: [
            "Next.js App Router, React, TypeScript",
            "PostgreSQL, MySQL, Prisma ORM",
            "Tailwind CSS, Shadcn UI, accessible components",
            "REST & GraphQL API design",
            "Payment and SMS/Email gateway integrations (M-Pesa, Stripe, Twilio)"
        ],
        process: [
            { step: 1, title: "Operational Workflow Mapping", description: "We analyze your manual processes and design a clean digital database workflow." },
            { step: 2, title: "Interactive UI/UX Prototyping", description: "Wireframing interfaces tailored to your team and customers for rapid validation." },
            { step: 3, title: "Full-Stack Development", description: "Building data pipelines, business logic, authentication, and reporting grids." },
            { step: 4, title: "User Acceptance Testing & Training", description: "Deploying to staging, testing with real business data, and staff training." }
        ],
        differentiators: [
            { icon: Code2, title: "Custom to Your Exact Logic", description: "Software built around how your business actually runs, not generic template constraints." },
            { icon: Users, title: "No Per-Seat License Fees", description: "You own the software completely; add unlimited internal staff without paying extra monthly fees." },
            { icon: Zap, title: "Instant Operational Speedup", description: "Automating manual data entry saves hundreds of staff hours every month." }
        ],
        useCases: [
            "B2B Customer & Vendor Portals",
            "Custom Multi-Location Inventory & Stock Management",
            "Field Logistics and Fleet Tracking Portals",
            "Custom Billing, Invoicing & Reconciliation Engines"
        ],
        pricing: {
            heading: "Custom Project Pricing",
            description: "Custom web applications typically range from $4,000 to $12,000 based on the number of roles, data models, and integrations."
        },
        faqs: [
            { question: "What is the difference between a website and a web application?", answer: "A marketing website presents static informational content; a web application provides interactive functionality, user accounts, database operations, transactional workflows, and real-time data processing." },
            { question: "Can you migrate data from our Excel spreadsheets?", answer: "Yes. We write automated ingestion and validation scripts to import your historical spreadsheets into a structured PostgreSQL database." },
            { question: "Can it work on mobile phones?", answer: "Yes. We build responsive web applications with progressive web app (PWA) capabilities that work smoothly on mobile browsers." }
        ],
        relatedCaseStudy: {
            title: "DazzPOS Retail & Inventory System",
            slug: "dazzpos",
            summary: "Custom multi-store retail web application with offline synchronization."
        },
        relatedBlogSlugs: [
            "how-much-does-saas-development-cost",
            "how-to-hire-a-saas-development-agency"
        ],
        regionalLinks: [
            { label: "Web Development Company in Kenya", href: "/kenya/web-development-company", region: "Kenya" },
            { label: "Software Development Company in Kenya", href: "/kenya/software-development-company", region: "Kenya" }
        ]
    },
    {
        slug: "ai-automation",
        title: "AI & Business Workflow Automation",
        shortTitle: "AI Automation",
        tagline: "Embed Practical AI & Automated Pipelines into Your Software",
        description: "Transform manual business workflows with practical AI integrations, intelligent document parsing, automated lead qualification, and LLM-powered features.",
        icon: Cpu,
        primaryKeyword: "AI automation",
        secondaryKeywords: [
            "business automation",
            "AI business automation",
            "AI integrations",
            "workflow automation",
            "AI software development"
        ],
        hero: {
            headline: "AI & Business Workflow Automation",
            subheadline: "Stop burning team hours on repetitive manual tasks. We integrate production LLMs, automated data extraction, and intelligent webhook pipelines into your software products.",
            cta: "Automate Your Workflows",
            ctaHref: "/contact"
        },
        problems: {
            heading: "Why Manual Business Processes Bleed Profit",
            points: [
                "Sales teams waste 20+ hours weekly manually qualifying and researching leads.",
                "Manual document and invoice data entry leads to frequent costly human errors.",
                "Customer support queues get jammed with repetitive tier-1 inquiries.",
                "Competitors with automated AI features are moving 3x faster in the market."
            ]
        },
        solution: {
            heading: "Practical, Deterministic AI Systems",
            description: "We don't build useless generic chatbots. We build deterministic AI automation pipelines that validate inputs, parse unstructured documents, qualify leads, and synchronize with your core databases and CRMs with zero hallucination risk.",
            features: [
                "Structured JSON Output Generation using OpenAI, Claude, and Gemini APIs",
                "Automated Document, Invoice, and Receipt Parsing Pipelines",
                "Intelligent Lead Qualification and CRM Enrichment Automation",
                "Vector Search (RAG) over proprietary internal knowledge bases"
            ]
        },
        deliverables: [
            "Custom AI integration microservice with structured JSON validation",
            "Automated webhook pipeline connecting forms, LLMs, and CRMs",
            "Admin dashboard to review, audit, and override AI decisions",
            "API rate limiting, error fallbacks, and token cost tracking"
        ],
        technicalCapabilities: [
            "OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, Gemini API",
            "LangChain, LlamaIndex, Python / TypeScript runtimes",
            "Vector databases (pgvector, Pinecone, Qdrant)",
            "Webhook architectures & BullMQ asynchronous queues"
        ],
        process: [
            { step: 1, title: "Workflow Audit & Schema Design", description: "We identify the repetitive bottlenecks and define structured input/output schemas." },
            { step: 2, title: "Prompt Engineering & Validation", description: "Building robust prompt chains with strict Zod/JSON schema enforcement." },
            { step: 3, title: "Integration & Testing", description: "Connecting LLMs to your database and testing against hundreds of real edge cases." },
            { step: 4, title: "Monitoring & Token Cost Optimization", description: "Deploying observability dashboards to monitor accuracy and minimize API token costs." }
        ],
        differentiators: [
            { icon: Code2, title: "Zero Hallucination Risk", description: "We enforce strict structured schema validations so AI outputs always match expected database formats." },
            { icon: Zap, title: "Token & Cost Optimized", description: "Using model routing and caching to keep LLM API operational costs minimal." },
            { icon: Lock, title: "Data Privacy First", description: "Configuring zero-retention enterprise API endpoints so your sensitive business data is never trained on." }
        ],
        useCases: [
            "Automated Inbound Lead Qualification & CRM Routing",
            "PDF, Invoice, and Contract Data Extraction into PostgreSQL",
            "AI-Powered Search & Recommendation Engines",
            "Automated Weekly Operational Reporting & Anomaly Detection"
        ],
        pricing: {
            heading: "Automation Implementation Sprints",
            description: "Targeted AI automation implementations start at $3,500 for focused end-to-end pipelines."
        },
        faqs: [
            { question: "How do you prevent AI hallucinations in production?", answer: "We use structured output mode (JSON Schema enforcement), strict temperature bounds, and algorithmic fallback validations to guarantee deterministic data." },
            { question: "Will our proprietary business data be used to train public AI models?", answer: "No. We utilize commercial API agreements with zero-data-retention policies, ensuring your business data remains 100% private." },
            { question: "Can AI automation connect with our existing software?", answer: "Yes. We build lightweight API and webhook adapters that connect directly to HubSpot, Salesforce, PostgreSQL, Slack, or your custom database." }
        ],
        relatedCaseStudy: {
            title: "AI Lead Automation Pipeline",
            slug: "ai-lead-automation",
            summary: "AI-driven qualification pipeline saving 20+ hours weekly with 94% lead accuracy."
        },
        relatedBlogSlugs: [
            "how-to-hire-a-saas-development-agency",
            "how-much-does-saas-development-cost"
        ],
        regionalLinks: [
            { label: "SaaS Development in Kenya", href: "/kenya/saas-development-company", region: "Kenya" },
            { label: "SaaS Development in the UK", href: "/uk/saas-development", region: "United Kingdom" },
            { label: "SaaS Development in the US", href: "/us/saas-development", region: "United States" }
        ]
    }
];

export const caseStudies: CaseStudyDetail[] = [
    {
        slug: "dazzpos",
        title: "DazzPOS: High-Performance Offline-First Retail POS & Sync Engine",
        client: "Multi-Store Retail & Supermarket Networks (Kenya & East Africa)",
        category: "SaaS Architecture & Offline-First POS",
        description: "How we architected a resilient, offline-first Point of Sale application capable of processing high-volume barcode transactions with zero downtime during internet outages, syncing automatically to PostgreSQL via M-Pesa automated webhooks.",
        summary: "An offline-resilient POS system supporting 50+ retail checkout terminals with sub-second barcode scans and 99.99% synchronization reliability across Kenya and East Africa.",
        tags: ["Next.js", "TypeScript", "Offline-First", "PostgreSQL", "M-Pesa API", "Docker VPS"],
        metrics: [
            { label: "Terminal Sync Reliability", value: "99.99%" },
            { label: "Barcode Scan Latency", value: "<120ms" },
            { label: "Daily Transactions Processed", value: "45,000+" },
            { label: "Downtime during Outages", value: "0 sec" }
        ],
        problem: {
            heading: "The Challenge: Internet Volatility in Fast-Paced Retail",
            description: "Retail checkout lines cannot stop because an ISP fiber line drops or mobile connectivity fluctuates. The client was operating across multiple retail locations in Nairobi and surrounding East African commercial centers where legacy cloud-only POS systems froze during outages, creating massive customer queues and lost revenue.",
            challenges: [
                "Legacy cloud POS required constant internet connectivity; network drops halted cashiers completely.",
                "Slow scan-to-cart latency (800ms+) created bottlenecks at high-volume retail checkout counters.",
                "Manual M-Pesa payment verification caused cashier fraud and delayed sales reconciliation.",
                "Multi-store inventory synchronization was out-of-sync by up to 24 hours, leading to stockouts."
            ]
        },
        decision: {
            heading: "Architectural Strategy: Local-First Storage with Event-Driven Sync",
            description: "Rather than forcing every barcode scan to ping a remote cloud database, we designed a local-first architecture. The browser terminal writes immediately to an in-memory IndexedDB / SQLite transaction ledger and generates instant receipts, while a background sync engine handles conflict resolution and pushes batches to the central PostgreSQL cluster once connectivity is established.",
            architectureChoices: [
                "Local-First IndexedDB state engine for sub-millisecond local checkout execution",
                "Deterministic Event Sourcing sync queue with UUID transaction idempotency keys",
                "Direct Daraja M-Pesa STK Push integration with automated webhook reconciliation",
                "Harden Linux VPS with Docker Compose and Redis for high-concurrency cloud ingestion"
            ]
        },
        build: {
            heading: "The Build: Engineering the Solution",
            description: "We built the cashier interface using Next.js, React, and Tailwind CSS with custom keyboard shortcut hooks for high-speed cashier entry. The backend was structured with Node.js and PostgreSQL, utilizing BullMQ queues for high-volume invoice processing and M-Pesa webhook verification.",
            techStack: [
                "Next.js App Router & TypeScript",
                "IndexedDB / WatermelonDB local storage",
                "PostgreSQL with connection pooling (PgBouncer)",
                "Redis & BullMQ sync workers",
                "Safaricom M-Pesa Daraja 2.0 API",
                "Docker on Ubuntu Linux VPS"
            ],
            keyFeatures: [
                "100% Offline Transaction Queue: Cashiers process sales continuously during total internet blackouts.",
                "Instant M-Pesa STK Push: Automated prompt sent to customer's phone with zero manual receipt typing.",
                "Real-Time Multi-Warehouse Inventory: Central ledger syncs stock levels across branches immediately.",
                "Automated End-of-Day Z-Report Reconciliation: Financial summaries generated in seconds."
            ]
        },
        result: {
            heading: "The Result: Flawless Retail Operations at Scale",
            description: "DazzPOS rolled out to more than 50 active retail terminals. During routine local internet disruptions, terminals continued processing sales seamlessly, eliminating checkout wait times and saving hundreds of lost sales hours.",
            outcomes: [
                "Zero checkout interruptions across 50+ checkout lanes during network drops.",
                "M-Pesa payment confirmation speed accelerated from 45 seconds manual to under 4 seconds automated.",
                "Inventory shrinkage and manual reconciliation discrepancies reduced by 85% in the first quarter.",
                "System easily handled peak December holiday sales volumes exceeding 45,000 daily transactions."
            ]
        },
        lessonsLearned: [
            "Building offline-first requires strict transaction idempotency to prevent duplicate inventory deductions during reconnection.",
            "Local barcode scanning must bypass React DOM re-render cycles for instant high-frequency scanner input.",
            "Automating M-Pesa validation eliminates the primary source of retail checkout cashier error."
        ],
        relatedServices: [
            { title: "SaaS Development", href: "/services/saas-development" },
            { title: "Web Application Development", href: "/services/web-application-development" },
            { title: "VPS Deployment", href: "/services/vps-deployment" }
        ]
    },
    {
        slug: "ai-lead-automation",
        title: "AI Lead Automation: Intelligent Qualification & CRM Pipeline",
        client: "B2B SaaS & Professional Services Provider",
        category: "AI Automation & Growth Engineering",
        description: "How we replaced 20+ hours of weekly manual sales prospecting with an automated AI pipeline that enriches incoming company data, qualifies intent via structured LLMs, and drafts personalized sales responses into the CRM.",
        summary: "An automated AI pipeline qualifying inbound leads with 94% accuracy, reducing response time from 14 hours to under 2 minutes.",
        tags: ["OpenAI API", "Next.js", "TypeScript", "PostgreSQL", "HubSpot API", "AI Automation"],
        metrics: [
            { label: "Lead Response Time", value: "< 2 mins" },
            { label: "Manual Hours Saved / Wk", value: "22 hrs" },
            { label: "Qualification Accuracy", value: "94.2%" },
            { label: "Conversion Lift", value: "+38%" }
        ],
        problem: {
            heading: "The Challenge: Manual Lead Qualification Bottleneck",
            description: "The client was receiving 200+ inbound inquiries weekly. Their small sales engineering team spent hours manually researching company websites, revenue estimates, and LinkedIn profiles before deciding which leads to schedule on the calendar. High-value enterprise leads were waiting up to 24 hours for a reply, resulting in lost deals to faster competitors.",
            challenges: [
                "High-value inbound leads waited up to 24 hours for manual review, causing high drop-off.",
                "Sales engineers spent 4+ hours daily researching company domains and verifying technical fit.",
                "Low-quality inquiries clogged calendar booking links, wasting executive consulting time.",
                "Inconsistent CRM data entry made lead segmentation and email targeting inaccurate."
            ]
        },
        decision: {
            heading: "Architectural Strategy: Asynchronous Webhook-Triggered AI Enrichment",
            description: "We architected an event-driven enrichment pipeline. When a lead submits a form, a background webhook triggers parallel data extraction tasks (domain lookup, company size, tech stack verification), passes structured context to an OpenAI GPT-4o evaluation engine, scores the lead against an ICP rubric, and immediately synchronizes with HubSpot and Slack.",
            architectureChoices: [
                "Asynchronous BullMQ job queue to prevent form submission timeouts",
                "Strict JSON Schema validation to bound LLM outputs into deterministic scoring types",
                "Instant Slack alert triggers for high-intent enterprise tier leads",
                "Automated drafting of contextual meeting agendas directly into the CRM deal records"
            ]
        },
        build: {
            heading: "The Build: Implementing the Automated Pipeline",
            description: "We built the pipeline using TypeScript, Next.js API routes, and PostgreSQL. The system integrates Clearbit and website scrapers to enrich company background, executes a multi-step prompt evaluation chain with temperature 0.1 for high reproducibility, and triggers calendar links for qualified leads instantly.",
            techStack: [
                "Next.js App Router & TypeScript",
                "OpenAI GPT-4o with Structured Output Mode",
                "PostgreSQL & Prisma ORM",
                "HubSpot CRM Webhook API",
                "Slack Bot API for Sales Alerts",
                "Vercel Edge Functions & BullMQ"
            ],
            keyFeatures: [
                "Sub-2-Minute Lead Qualification: Incoming leads enriched and evaluated in real-time.",
                "Automated ICP Score & Breakdown: High, Medium, or Low rating with specific reasoning attached.",
                "Contextual Draft Generation: High-scoring leads receive personalized technical follow-up drafts.",
                "VIP Slack Channel Notifications: Instant team ping with full company dossier when an enterprise lead arrives."
            ]
        },
        result: {
            heading: "The Result: 38% Increase in Sales Pipeline Velocity",
            description: "Lead response time dropped from 14 hours down to under 2 minutes. The sales engineering team saved 22 hours per week in manual research, allowing them to focus strictly on closing high-value deals.",
            outcomes: [
                "Average initial response time dropped to under 120 seconds.",
                "Sales team saved 22+ hours of repetitive research and CRM data entry every single week.",
                "Inbound lead-to-opportunity conversion rate jumped by 38% due to instant outreach.",
                "Zero calendar spam bookings as unqualified inquiries were routed to self-service resources."
            ]
        },
        lessonsLearned: [
            "Structured JSON outputs with strict Zod parsing completely eliminate LLM unpredictability.",
            "Responding to qualified B2B leads within 5 minutes delivers a massive multiplier on deal closure rates.",
            "Enriching context before the prompt execution dramatically improves AI evaluation precision."
        ],
        relatedServices: [
            { title: "AI Automation", href: "/services/ai-automation" },
            { title: "SaaS Development", href: "/services/saas-development" },
            { title: "Web Application Development", href: "/services/web-application-development" }
        ]
    }
];
