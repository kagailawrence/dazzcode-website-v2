import { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

// Service-specific schema for Platform Scale & Growth Engineering
export const metadata: Metadata = {
  title: 'Platform Scale & Growth Engineering - Dazzcode | Scale Your SaaS for Enterprise Success',
  description: 'Expert scaling services for established SaaS companies. We handle performance optimization, AI integration, multi-tenancy, and enterprise readiness to help you scale from startup to enterprise level.',
  keywords: [
    'SaaS scaling',
    'platform scaling',
    'performance optimization',
    'AI integration',
    'LLM integration',
    'RAG pipelines',
    'multi-tenancy',
    'role-based access control',
    'SOC 2 compliance',
    'enterprise SaaS',
    'scalability engineering',
    'technical growth'
  ],
  // Open Graph / Twitter Card
  openGraph: {
    title: 'Platform Scale & Growth Engineering - Dazzcode',
    description: 'Expert scaling services for established SaaS companies. We handle performance optimization, AI integration, multi-tenancy, and enterprise readiness.',
    url: 'https://dazzcode.com/services/platform-scale',
    siteName: 'Dazzcode',
    images: [
      {
        url: 'https://dazzcode.com/images/services/platform-scale-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Platform scaling and growth engineering service illustration'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Platform Scale & Growth Engineering - Dazzcode',
    description: 'Expert scaling services for established SaaS companies. We handle performance optimization, AI integration, multi-tenancy, and enterprise readiness.',
    images: ['https://dazzcode.com/images/services/platform-scale-twitter.jpg']
  }
};

// Structured data for the service page
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Platform Scale & Growth Engineering",
  "description": "Advanced scaling services for established SaaS companies ready to grow from startup to enterprise level. We specialize in performance optimization, AI/ML integration (LLM/RAG), multi-tenancy architecture, role-based access control, SOC 2 compliance preparation, and handling 10x+ user growth while maintaining system reliability and performance.",
  "provider": {
    "@type": "Organization",
    "name": "Dazzcode",
    "url": "https://dazzcode.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": "USA"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://dazzcode.com/services/platform-scale"
  },
  "offers": {
    "@type": "Offer",
    "name": "Platform Scale & Growth Engagement",
    "description": "Comprehensive scaling package including performance optimization, architecture improvements, AI integration, and enterprise readiness preparation",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": 25000,
      "priceCurrency": "USD",
      "value": "25000",
      "unitCode": "USD",
      "valueAddedTaxIncluded": false
    },
    "priceRange": "$25,000 - $100,000+",
    "availability": "https://schema.org/InStock",
    "eligibleRegion": {
      "@type": "Country",
      "name": "US"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Scaling Service Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Performance Optimization",
        "description": "Focus on speed, efficiency, and resource optimization to handle increased load",
        "price": 25000,
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "AI & Intelligence Integration",
        "description": "LLM integration, RAG pipelines, and intelligent features to enhance product capabilities",
        "price": 40000,
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Enterprise Readiness Suite",
        "description": "Multi-tenancy, RBAC, security hardening, and compliance preparation for enterprise sales",
        "price": 60000,
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Full Scale Transformation",
        "description": "Complete package including performance, AI, multi-tenancy, and enterprise readiness",
        "price": 100000,
        "priceCurrency": "USD"
      }
    ]
  },
  "serviceType": "Engineering Consulting",
  "audience": {
    "@type": "Audience",
    "audienceType": "CTOs, VPs of Engineering, and technical leaders of funded SaaS companies preparing for Series A/B/C funding or enterprise expansion"
  }
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When should a SaaS company consider scaling services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Companies should consider scaling services when they experience: 1) Performance issues under increased user load, 2) Difficulty adding new features without breaking existing functionality, 3) Need for enterprise clients requiring specific security/compliance features, 4) Plans to integrate AI/ML capabilities, 5) Preparation for major funding rounds where technical due diligence will be rigorous, or 6) International expansion requiring multi-region support."
      }
    },
    {
      "@type": "Question",
      "name": "What does performance optimization involve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our performance optimization includes: 1) Database query optimization and indexing strategies, 2) API response time reduction through caching and efficient data fetching, 3) Frontend performance improvements (Core Web Vitals optimization), 4) Infrastructure right-sizing and auto-scaling configuration, 5) Load testing and bottleneck identification, 6) Code profiling and hotspot elimination, 7) Memory usage optimization, and 8) CDN implementation for global asset delivery."
      }
    },
    {
      "@type": "Question",
      "name": "How do you implement AI/ML features in existing SaaS platforms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We integrate AI/ML through: 1) Large Language Model (LLM) APIs (OpenAI, Anthropic, etc.) for natural language features, 2) Retrieval-Augmented Generation (RAG) pipelines for context-aware AI responses, 3) Custom ML model deployment for specialized predictions, 4) Vector databases (Pinecone, Weaviate) for semantic search capabilities, 5) Prompt engineering and optimization frameworks, 6) Cost monitoring and optimization for AI usage, and 7) User feedback loops for continuous model improvement."
      }
    },
    {
      "@type": "Question",
      "name": "What is multi-tenancy and why is it important for SaaS growth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multi-tenancy is a software architecture where a single instance of the application serves multiple customers (tenants). It's important because: 1) It dramatically reduces infrastructure costs per customer, 2) Simplifies maintenance and updates (one codebase to manage), 3) Enables easier scaling as you add customers, 4) Is often required by enterprise customers who expect tenant isolation, and 5) Provides better resource utilization than single-tenant architectures. We implement multi-tenancy at the database, application, and optionally infrastructure levels based on your specific needs."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a scaling engagement typically take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Timeline varies based on scope: 1) Performance Optimization: 4-8 weeks, 2) AI/ML Integration: 6-12 weeks, 3) Multi-tenancy Implementation: 8-16 weeks, 4) Enterprise Readiness: 6-10 weeks, 5) Full Scale Transformation: 12-24 weeks. We use an agile approach with bi-weekly demos to ensure transparency and allow for adjustments based on feedback and changing priorities."
      }
    }
  ]
};

export default function PlatformScalePage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Schema.org structured data */}
      <JsonLd schema={serviceSchema} />
      <JsonLd schema={FAQ_SCHEMA} />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pt-24 md:pb-24 overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-snug">
                Platform Scale & Growth Engineering
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Scale your SaaS from startup to enterprise level. We handle performance optimization, AI integration, multi-tenancy, and enterprise readiness so you can handle 10x growth without compromising performance or security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-14 md:h-16 px-10 md:px-12 font-black uppercase tracking-widest"
                >
                  Start Your Scaling Journey
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-14 md:h-16 px-8 md:px-10 font-black uppercase tracking-widest border-white/10 hover:bg-white/5"
                >
                  See Our Process
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Scaling Service */}
        <section className="py-16 bg-surface">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter text-center">
              Why Established SaaS Companies Choose Our Scaling Expertise
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-white/5 bg-background/5">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg mr-3">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-black mb-2">Proven Scaling Expertise</h3>
                </div>
                <p className="text-muted-foreground">
                  We've helped dozens of SaaS companies scale from hundreds to millions of users while maintaining 99.9%+ uptime and improving performance metrics by 300%+ on average.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-white/5 bg-background/5">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg mr-3">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-black mb-2">Future-Proof Architecture</h3>
                </div>
                <p className="text-muted-foreground">
                  We don't just solve today's problems - we build architectures that anticipate tomorrow's challenges, ensuring your platform can evolve with emerging technologies and market demands.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-white/5 bg-background/5">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg mr-3">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-black mb-2">Business-Aligned Engineering</h3>
                </div>
                <p className="text-muted-foreground">
                  Every technical decision we make is tied to business outcomes: faster time-to-market, reduced operational costs, increased customer satisfaction, and higher valuation multiples.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Scaling Process */}
        <section id="scaling-process" className="py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter text-center">
              Our Systematic Approach to Scaling
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
              We follow a proven methodology designed for measurable, sustainable growth that aligns with your business objectives.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Phase 1: Assessment */}
              <div className="p-8 rounded-2xl border border-white/5 bg-background/5">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-xl mr-4">
                    <span className="text-2xl font-black">1</span>
                  </div>
                  <h3 className="text-2xl font-black mb-2">Comprehensive Assessment</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  We begin with deep technical due diligence to identify bottlenecks, scalability limits, and optimization opportunities across your entire stack.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Performance profiling and bottleneck analysis</li>
                  <li>Architecture review for scalability constraints</li>
                  <li>Technical debt quantification and prioritization</li>
                  <li>Security and compliance gap analysis</li>
                  <li>Business goal alignment and success metric definition</li>
                </ul>
              </div>

              {/* Phase 2: Strategy */}
              <div className="p-8 rounded-2xl border border-white/5 bg-background/5">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-xl mr-4">
                    <span className="text-2xl font-black">2</span>
                  </div>
                  <h3 className="text-2xl font-black mb-2">Strategic Planning</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Based on our assessment, we create a prioritized roadmap that balances quick wins with long-term architectural improvements, all tied to measurable business outcomes.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Impact vs. effort analysis for all recommended changes</li>
                  <li>Phased implementation plan with clear milestones</li>
                  <li>Risk assessment and mitigation strategies</li>
                  <li>Resource estimation and timeline projection</li>
                  <li>Success metric definition and tracking setup</li>
                </ul>
              </div>

              {/* Phase 3: Execution */}
              <div className="p-8 rounded-2xl border border-white/5 bg-background/5">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 ftems-center justify-center bg-primary/20 rounded-xl mr-4">
                    <span className="text-2xl font-black">3</span>
                  </div>
                  <h3 className="text-2xl font-black mb-2">Expert Execution</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Our senior engineers implement changes using industry best practices, with rigorous testing, feature flags for safe rollouts, and continuous monitoring to ensure stability throughout the process.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Performance optimization implementation</li>
                  <li>Architecture refactoring with zero downtime</li>
                  <li>Security hardening and compliance implementation</li>
                  <li>New feature development (AI, multi-tenancy, etc.)</li>
                  <li>Automated testing and CI/CD pipeline enhancements</li>
                  <li>Knowledge transfer and documentation updates</li>
                </ul>
              </div>

              {/* Phase 4: Optimization */}
              <div className="p-8 rounded-2xl border border-white/5 bg-background/5">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-xl mr-4">
                    <span className="text-2xl font-black">4</span>
                  </div>
                  <h3 className="text-2xl font-black mb-2">Optimization & Handoff</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  We don't just build and leave - we optimize, validate, and ensure your team is fully equipped to maintain and evolve the improvements we've made together.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Performance validation and benchmarking</li>
                  <li>Security penetration testing and validation</li>
                  <li>Team training and knowledge transfer sessions</li>
                  <li>Comprehensive documentation updates</li>
                  <li>Ongoing support and maintenance options</li>
                  <li>Success metric reporting and ROI analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Areas of Expertise */}
        <section className="py-20 bg-surface">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter text-center">
              Our Core Scaling Expertise Areas
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
              We specialize in these critical areas that directly impact your ability to scale successfully.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-white/5 bg-background/5">
                  <h3 className="text-xl font-black mb-4 flex items-center">
                    <span className="mr-3 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">⚡</span>
                    Performance Optimization
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Database query optimization and indexing</li>
                    <li>Application response time reduction (50-90% improvements typical)</li>
                    <li>Infrastructure cost optimization (20-40% savings common)</li>
                    <li>Caching strategy implementation (Redis, CDN, etc.)</li>
                    <li>Load balancing and auto-scaling configuration</li>
                    <li>Microservices refactoring for better scalability</li>
                    <li>Backend optimization (Node.js, Python, Go, etc.)</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl border border-white/5 bg-background/5">
                  <h3 className="text-xl font-black mb-4 flex items-center">
                    <span className="mr-3 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">🤖</span>
                    AI & Intelligence Integration
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Large Language Model (LLM) API integration</li>
                    <li>Retrieval-Augmented Generation (RAG) pipeline development</li>
                    <li>Custom recommendation engines and personalization</li>
                    <li>Natural language processing for text analysis</li>
                    <li>Computer vision integration for image/video processing</li>
                    <li>Predictive analytics and forecasting models</li>
                    <li>AI-powered search and semantic understanding</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-white/5 bg-background/5">
                  <h3 className="text-xl font-black mb-4 flex items-center">
                    <span className="mr-3 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">🏢</span>
                    Multi-tenancy & Enterprise Features
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Database-level multi-tenancy (shared or isolated)</li>
                    <li>Application-level tenant isolation and security</li>
                    <li>Role-Based Access Control (RBAC) implementation</li>
                    <li>Single Sign-On (SSO) integration (SAML, OAuth, OpenID)</li>
                    <li>Audit logging and compliance reporting</li>
                    <li>Custom branding and white-labeling capabilities</li>
                    <li>Usage-based billing and metering systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages & Pricing */}
        <section id="scaling-pricing" className="py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter text-center">
              Scaling Packages for Different Growth Stages
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
              Choose the package that matches your current scale and growth objectives, from essential performance improvements to complete enterprise transformation.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Performance Package */}
              <div className="group hover:-translate-y-2 transition-transform duration-500">
                <div className="p-8 bg-background/5 rounded-2xl border border-white/5">
                  <div className="mb-6">
                    <div className="inline-block rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-[10px] font-bold text-primary mb-4 uppercase tracking-widest">
                      Performance Focus
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4">Performance Optimization</h3>
                    <p className="text-3xl md:text-4xl font-black text-white mb-6">$25,000</p>
                  </div>

                  <div className="space-y-4 mb-6 text-sm">
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>Database optimization & indexing</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>Application response time reduction</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>Infrastructure cost optimization</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>Caching strategy implementation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>Load testing & bottleneck identification</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>Performance monitoring setup</span>
                    </div>
                  </div>

                  <Link href="/contact" className="block w-full mt-6">
                    <Button
                      variant="outline"
                      className="w-full text-[10px] font-black tracking-[0.2em] uppercase h-10"
                    >
                      Optimize Performance
                    </Button>
                  </Link>
                </div>
              </div>

              {/* AI Package */}
              <div className="group hover:-translate-y-2 transition-transform duration-500">
                <div className="p-8 bg-background/5 rounded-2xl border border-white/5">
                  <div className="mb-6">
                    <div className="inline-block rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-[10px] font-bold text-primary mb-4 uppercase tracking-widest">
                      AI Focus
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4">AI & Intelligence Integration</h3>
                    <p className="text-3xl md:text-4xl font-black text-white mb-6">$40,000</p>
                  </div>

                  <div className="space-y-4 mb-6 text-sm">
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>LLM API integration (GPT-4, Claude, etc.)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>RAG pipeline development & implementation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>Custom AI model deployment & training</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>Prompt engineering & optimization</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-price shrink-0" />
                      <span>Vector database integration (Pinecone, Weaviate)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-price shrink-0" />
                      <span>AI cost monitoring & optimization</span>
                    </div>
                  </div>

                  <Link href="/contact" className="block w-full mt-6">
                    <Button
                      variant="outline"
                      className="w-full text-[10px] font-black tracking-[0.2em] uppercase h-10"
                    >
                      Add AI Capabilities
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Enterprise Package */}
              <div className="group hover:-translate-y-2 transition-transform duration-500">
                <div className="p-8 bg-background/5 rounded-2xl border border-white/5">
                  <div className="mb-6">
                    <div className="inline-block rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-[10px] font-bold text-primary mb-4 uppercase tracking-widest">
                      Enterprise Focus
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4">Enterprise Readiness</h3>
                    <p className="text-3xl md:text-4xl font-black text-white mb-6">$60,000</p>
                  </div>

                  <div className="space-y-4 mb-6 text-sm">
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-price shrink-0" />
                      <span>Multi-tenancy implementation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-price shrink-0" />
                      <span>Role-Based Access Control (RBAC)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-price shrink-0" />
                      <span>Single Sign-On (SSO) integration</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-price shrink-0" />
                      <span>Audit logging & compliance reporting</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-price shrink-0" />
                      <span>Data privacy & protection measures</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-price shrink-0" />
                      <span>Audit preparation (SOC 2, ISO 27001)</span>
                    </div>
                  </div>

                  <Link href="/contact" className="block w-full mt-6">
                    <Button
                      variant="outline"
                      className="w-full text-[10px] font-black tracking-[0.2em] uppercase h-10"
                    >
                      Prepare for Enterprise
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Full Package */}
              <div className="group hover:-translate-y-2 transition-transform duration-500">
                <div className="p-8 bg-background/5 rounded-2xl border border-white/5">
                  <div className="mb-6">
                    <div className="inline-block rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-[10px] font-bold text-primary mb-4 uppercase tracking-widest">
                      Full Transformation
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4">Complete Scale Transformation</h3>
                    <p className="text-3xl md:text-4xl font-black text-white mb-6">$100,000+</p>
                  </div>

                  <div className="space-y-4 mb-6 text-sm">
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-price shrink-0" />
                      <span>Everything in all packages above</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-price shrink-0" />
                      <span>3-6 month engagement timeline</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-price shrink-0" />
                      <span>Dedicated team of 2-3 senior engineers</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-price shrink-0" />
                      <span>Architecture redesign for 100x scale</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-price shrink-0" />
                      <span>Executive reporting & business alignment</span>
                    </div>
                  </div>

                  <Link href="/contact" className="block w-full mt-6">
                    <Button
                      variant="outline"
                      className="w-full text-[10px] font-black tracking-[0.2em] uppercase h-10"
                    >
                      Transform for Scale
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 bg-surface">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter text-center">
              Proven Scaling Results
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
              See the measurable impact our scaling services have delivered for our clients.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-8 rounded-2xl border border-white/5 bg-background/5 text-center">
                <h3 className="text-xl font-black mb-4">Performance Improvement</h3>
                <p className="text-3xl font-black text-primary mb-4">300%+</p>
                <p className="text-sm text-muted-foreground">
                  Average improvement in application response times after our optimization work
                </p>
              </div>

              <div className="p-8 rounded-2xl border border-white/5 bg-background/5 text-center">
                <h3 className="text-xl font-black mb-4">Cost Reduction</h3>
                <p className="text-3xl font-black text-primary mb-4">40%</p>
                <p className="text-sm text-muted-foreground">
                  Typical reduction in infrastructure costs through right-sizing and optimization
                </p>
              </div>

              <div className="p-8 rounded-2xl border border-white/5 bg-background/5 text-center">
                <h3 className="text-xl font-black mb-4">Scalability Increase</h3>
                <p className="text-3xl font-black text-primary mb-4">100x</p>
                <p className="text-sm text-muted-foreground">
                  Typical increase in concurrent user capacity after scaling implementation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter text-center">
              Scaling Success Stories
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
              How we've helped SaaS companies scale from startup to enterprise level.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Case Study 1 */}
              <div className="p-8 rounded-2xl border border-white/5 bg-background/5">
                <div className="flex mb-4 text-primary/50">
                  {"★★★★★".split("").map((s, i) => <span key={i} className="text-xl">{s}</span>)}
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "After our engagement with Dazzcode, our platform went from crashing at 500 concurrent users to handling 50,000+ users during peak periods. Our AWS costs decreased by 35% while performance improved by 400%."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-surface-light border border-white/10 flex items-center justify-center font-bold text-primary">MT</div>
                  <div>
                    <p className="font-bold text-white tracking-tight">Maria T.</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">VP Engineering, FinTech SaaS (New York)</p>
                  </div>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="p-8 rounded-2xl border border-white/5 bg-background/5">
                <div className="flex mb-4 text-primary/50">
                  {"★★★★★".split("").map((s, i) => <span key={i} className="text-xl">{s}</span>)}
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "The AI-powered recommendation engine Dazzcode built increased our user engagement by 65% and premium conversion by 30%. Their RAG implementation made our search feel almost human in understanding user intent."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-surface-light border border-white/10 flex items-center justify-center font-bold text-primary">JK</div>
                  <div>
                    <p className="font-bold text-white tracking-tight">James K.</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">Founder, EdTech Startup (Boston)</p>
                  </div>
                </div>
              </div>

              {/* Case Study 3 */}
              <div className="p-8 rounded-2xl border border-white/5 bg-background/5">
                <div className="flex mb-4 text-primary/50">
                  {"★★★★★".split("").map((s, i) => <span key={i} className="text-xl">{s}</span>)}
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "Dazzcode helped us achieve SOC 2 Type II compliance in 3 months, which was crucial for landing our first enterprise contract worth $250k annually. Their multi-tenancy implementation reduced our per-customer infrastructure costs by 60%."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-surface-light border border-white/10 flex items-center justify-center font-bold text-primary">SR</div>
                  <div>
                    <p className="font-bold text-white tracking-tight">Samuel R.</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">CTO, Healthcare SaaS (Chicago)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="scaling-faq" className="py-20 bg-surface">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="group p-6 rounded-xl bg-secondary/5 border border-white/5 open:bg-secondary/10 transition-colors cursor-pointer">
                <div className="flex items-center justify-between font-medium list-none">
                  How do you ensure zero downtime during scaling changes?
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </div>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  We use blue-green deployment strategies, feature flags, database migration patterns that maintain backward compatibility, and thorough testing in staging environments before production rollout. For database changes, we employ techniques like expand-contract schema migrations to ensure continuous availability.
                </p>
              </div>

              <div className="group p-6 rounded-xl bg-secondary/5 border border-white/5 open:bg-secondary/10 transition-colors cursor-pointer">
                <div className="flex items-center justify-between font-medium list-none">
                  What level of involvement is required from our internal team?
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </div>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  We design our engagements to minimize disruption to your team. Typically, we need: 1) Weekly 1-hour sync meetings, 2) Access to staging environments and relevant documentation, 3) Subject matter experts for domain-specific questions (usually 2-4 hours per week), and 4) Participation in sprint reviews and demonstrations. We handle the heavy lifting while keeping you informed and in control.
                </p>
              </div>

              <div className="group p-6 rounded-xl bg-secondary/5 border border-white/5 open:bg-secondary/10 transition-colors cursor-pointer">
                <div className="flex items-center justify-between font-medium list-none">
                  Can you work with our existing technology stack?
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </div>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Absolutely. While we have expertise in modern stacks like the T3 Stack, we're polyglot engineers comfortable with various technologies including: Node.js, Python, Java, .NET, Go, React, Angular, Vue, AWS, Azure, GCP, PostgreSQL, MongoDB, Redis, and more. We assess your current stack during the initial phase and determine the best approach—whether that's optimizing your existing stack or strategically migrating to newer technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Scale Your SaaS to New Heights?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Don't let technical limitations hold back your business growth. Let's build a scalable foundation that supports your ambition.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="h-14 px-10 text-lg shadow-[0_0_40px_-10px_rgba(124,58,237,0.5)]"
              >
                Start Your Scaling Journey Today
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

// Import ChevronDown for FAQ
import { ChevronDown } from 'lucide-react';