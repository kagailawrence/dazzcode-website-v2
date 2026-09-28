import { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

// Service-specific schema for SaaS Audit & Cleanup
export const metadata: Metadata = {
  title: 'SaaS Audit & Cleanup Services - Dazzcode | Technical Due Diligence for US Investors',
  description: 'Professional SaaS audit and cleanup services for US-based startups. We identify security vulnerabilities, performance bottlenecks, and technical debt to prepare your company for investor due diligence and scalability.',
  keywords: [
    'SaaS audit',
    'technical due diligence',
    'code review',
    'security assessment',
    'performance optimization',
    'technical debt cleanup',
    'SaaS compliance',
    'US startup audit',
    'investor readiness',
    'SaaS assessment'
  ],
  alternates: {
    canonical: '/services/saas-audit',
  },
  // Open Graph / Twitter Card
  openGraph: {
    title: 'SaaS Audit & Cleanup Services - Dazzcode',
    description: 'Professional SaaS audit and cleanup services for US-based startups preparing for investor due diligence.',
    url: 'https://dazzcode.com/services/saas-audit',
    siteName: 'Dazzcode',
    images: [
      {
        url: 'https://dazzcode.com/images/services/saas-audit-og.jpg',
        width: 1200,
        height: 630,
        alt: 'SaaS audit and cleanup service illustration'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Audit & Cleanup Services - Dazzcode',
    description: 'Professional SaaS audit and cleanup services for US-based startups preparing for investor due diligence.',
    images: ['https://dazzcode.com/images/services/saas-audit-twitter.jpg']
  }
};

// Structured data for the service page
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SaaS Audit & Cleanup",
  "description": "Comprehensive technical due diligence service for SaaS companies seeking US investment. We identify security vulnerabilities, performance bottlenecks, compliance gaps, and technical debt to prepare your company for investor scrutiny and scalable growth.",
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
    "serviceUrl": "https://dazzcode.com/services/saas-audit"
  },
  "offers": {
    "@type": "Offer",
    "name": "SaaS Audit & Cleanup Engagement",
    "description": "Full technical audit including security, performance, compliance, and architecture review",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": 800,
      "priceCurrency": "USD",
      "value": "800",
      "unitCode": "USD",
      "valueAddedTaxIncluded": false
    },
    "priceRange": "$800 - $3,000",
    "availability": "https://schema.org/InStock",
    "eligibleRegion": {
      "@type": "Country",
      "name": "US"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "SaaS Audit Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Essential Audit",
        "description": "Security scan + performance review + basic architecture assessment",
        "price": 800,
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Comprehensive Audit",
        "description": "Essential + database optimization + compliance check + technical debt report",
        "price": 1500,
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Enterprise Audit",
        "description": "Comprehensive + advanced security testing + scalability analysis + executive presentation",
        "price": 3000,
        "priceCurrency": "USD"
      }
    ]
  },
  "serviceType": "Technical Consulting",
  "audience": {
    "@type": "Audience",
    "audienceType": "Startup founders, CTOs, and technology leaders preparing for US investment"
  }
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does a SaaS technical audit include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our SaaS technical audit includes: 1) Security vulnerability assessment (OWASP Top 10, dependency scanning), 2) Performance analysis (load testing, bottleneck identification), 3) Code quality review (technical debt, maintainability), 4) Architecture evaluation (scalability, microservices readiness), 5) Compliance check (SOC 2, GDPR, CCPA where applicable), 6) Database optimization review, 7) DevOps/CI pipeline assessment, and 8) Technical due diligence preparation for investor review."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a SaaS audit take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A standard SaaS audit typically takes 1-2 weeks depending on the size and complexity of your codebase. Our Essential Audit (800) can be completed in 3-5 days for smaller applications, while our Enterprise Audit (3,000) for complex platforms may take 3-4 weeks. We provide a detailed timeline during our initial discovery call."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide remediation services after the audit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer full remediation services to address all findings from our audit. Many clients choose to engage us for the implementation phase where we fix security vulnerabilities, optimize performance, refactor technical debt, and implement recommended architectural improvements. We provide a detailed remediation roadmap with prioritized tasks based on risk and business impact."
      }
    },
    {
      "@type": "Question",
      "name": "What compliance standards do you check during the audit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We assess compliance with: SOC 2 Type I & II (security, availability, confidentiality), GDPR (for EU user data), CCPA/CPRA (California residents), HIPAA (if handling health data), PCI DSS (payment processing), and industry-specific regulations. We provide a compliance gap analysis with specific remediation recommendations for each framework applicable to your business."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a SaaS audit cost for a startup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our SaaS audit pricing ranges from $800 to $3,000 based on scope: Essential Audit ($800) for basic security and performance review, Comprehensive Audit ($1,500) adding database optimization and compliance check, and Enterprise Audit ($3,000) including advanced security testing and executive presentation. We offer startup-friendly pricing and can tailor the scope to your specific needs and budget constraints."
      }
    }
  ]
};

export default function SaasAuditPage() {
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
                SaaS Audit & Cleanup Services
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Prepare your SaaS for investor scrutiny with our comprehensive technical due diligence service. We identify critical risks, performance bottlenecks, and compliance gaps before they become deal-breakers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-14 md:h-16 px-10 md:px-12 font-black uppercase tracking-widest"
                >
                  Schedule Free Audit Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-14 md:h-16 px-8 md:px-10 font-black uppercase tracking-widest border-white/10 hover:bg-white/5"
                >
                  View Our Audit Process
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Audit */}
        <section className="py-16 bg-surface">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter text-center">
              Why US-Based Startups Trust Our Audit Process
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-white/5 bg-background/5">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg mr-3">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-black mb-2">Investor-Ready Focus</h3>
                </div>
                <p className="text-muted-foreground">
                  We understand what US VCs and angel investors look for during technical due diligence. Our audit focuses specifically on the areas that impact valuation and investment decisions.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-white/5 bg-background/5">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg mr-3">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-black mb-2">US Compliance Expertise</h3>
                </div>
                <p className="text-muted-foreground">
                  Deep knowledge of US-specific regulations including CCPA, sector-specific compliances, and readiness for standards like SOC 2 that are often required by US enterprise clients.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-white/5 bg-background/5">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg mr-3">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-black mb-2">Actionable Results</h3>
                </div>
                <p className="text-muted-foreground">
                  Not just a list of issues - we prioritize findings by risk level and business impact, providing a clear remediation roadmap with estimated effort for each recommendation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Audit Process */}
        <section id="audit-process" className="py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter text-center">
              Our Comprehensive Audit Process
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
              We follow a proven methodology designed specifically for SaaS companies seeking US investment or enterprise partnerships.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Phase 1 */}
              <div className="p-8 rounded-2xl border border-white/5 bg-background/5">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-xl mr-4">
                    <span className="text-2xl font-black">1</span>
                  </div>
                  <h3 className="text-2xl font-black mb-2">Discovery & Scoping</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  We begin with technical architecture review, stakeholder interviews, and defining audit scope based on your business model, tech stack, and target investors.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Architecture diagram review</li>
                  <li>Technology stack assessment</li>
                  <li>Stakeholder interviews (CTO, DevLead, DevOps)</li>
                  <li>Compliance requirement identification</li>
                </ul>
              </div>

              {/* Phase 2 */}
              <div className="p-8 rounded-2xl border border-white/5 bg-background/5">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-xl mr-4">
                    <span className="text-2xl font-black">2</span>
                  </div>
                  <h3 className="text-2xl font-black mb-2">Deep Technical Analysis</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Comprehensive code, infrastructure, and security analysis using automated tools and expert manual review to uncover hidden risks and optimization opportunities.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Static code analysis (Security & Quality)</li>
                  <li>Dependency vulnerability scanning</li>
                  <li>Infrastructure as Code review</li>
                  <li>Database schema and query analysis</li>
                  <li>API security and performance testing</li>
                </ul>
              </div>

              {/* Phase 3 */}
              <div className="p-8 rounded-2xl border border-white/5 bg-background/5">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-xl mr-4">
                    <span className="text-2xl font-black">3</span>
                  </div>
                  <h3 className="text-2xl font-black mb-2">Reporting & Roadmap</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Detailed findings report with executive summary, technical details, and prioritized remediation plan including effort estimates and business impact analysis.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Executive summary for leadership</li>
                  <li>Technical findings with evidence</li>
                  <li>Risk-scored remediation roadmap</li>
                  <li>Investor-ready presentation materials</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What We Audit */}
        <section className="py-20 bg-surface">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter text-center">
              What We Evaluate in Your SaaS Platform
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 pl-4">
                  <h3 className="text-xl font-black mb-2 flex items-center">
                    <span className="mr-3 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">Security</span>
                    Security & Compliance
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>OWASP Top 10 vulnerabilities</li>
                    <li>Authentication & authorization review</li>
                    <li>Data encryption and protection</li>
                    <li>API security assessment</li>
                    <li>Third-party dependency risks</li>
                    <li>Infrastructure security (cloud configs)</li>
                    <li>Compliance gaps (SOC 2, GDPR, CCPA)</li>
                    <li>Data breach incidence readiness</li>
                  </ul>
                </div>

                <div className="border-l-4 pl-4">
                  <h3 className="text-xl font-black mb-2 flex items-center">
                    <span className="mr-3 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">Performance</span>
                    Performance & Scalability
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Application response time analysis</li>
                    <li>Database query optimization</li>
                    <li>Caching strategy evaluation</li>
                    <li>Load testing and bottleneck identification</li>
                    <li>Microservices architecture readiness</li>
                    <li>Third-party service dependencies</li>
                    <li>Cloud cost optimization opportunities</li>
                    <li>Auto-scaling configuration review</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 pl-4">
                  <h3 className="text-xl font-black mb-2 flex items-center">
                    <span className="mr-3 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">Quality</span>
                    Code Quality & Architecture
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Technical debt assessment</li>
                    <li>Code maintainability scores</li>
                    <li>Design pattern implementation</li>
                    <li>Modularity and coupling analysis</li>
                    <li>Test coverage evaluation</li>
                    <li>CI/CD pipeline effectiveness</li>
                    <li>Documentation completeness</li>
                    <li>Development workflow efficiency</li>
                  </ul>
                </div>

                <div className="border-l-4 pl-4">
                  <h3 className="text-xl font-black mb-2 flex items-center">
                    <span className="mr-3 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">Data</span>
                    Data & Infrastructure
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Database schema normalization</li>
                    <li>Indexing strategy review</li>
                    <li>Data backup and recovery</li>
                    <li>Data privacy and anonymization</li>
                    <li>Data migration complexity</li>
                    <li>Scalability of data storage solutions</li>
                    <li>Real-time data processing capabilities</li>
                    <li>Data warehouse and analytics readiness</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages & Pricing */}
        <section id="pricing" className="py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter text-center">
              Audit Packages for Different Stages & Budgets
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
              Choose the audit level that matches your current needs, from essential security check to comprehensive investor readiness preparation.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Essential Package */}
              <div className="group hover:-translate-y-2 transition-transform duration-500">
                <div className="p-8 bg-background/5 rounded-2xl border border-white/5">
                  <div className="mb-6">
                    <div className="inline-block rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-[10px] font-bold text-primary mb-4 uppercase tracking-widest">
                      Essential
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4">Essential Audit</h3>
                    <p className="text-3xl md:text-4xl font-black text-white mb-6">$800</p>
                  </div>

                  <div className="space-y-4 mb-6 text-sm">
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>Security vulnerability scanning</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>Dependency risk assessment</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>Basic performance review</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>Architecture overview</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>Executive summary report</span>
                    </div>
                  </div>

                  <Link href="/contact" className="block w-full mt-6">
                    <Button
                      variant="outline"
                      className="w-full text-[10px] font-black tracking-[0.2em] uppercase h-10"
                    >
                      Select This Package
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Recommended Package */}
              <div className="relative group -rotate-0">
                <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/30 to-transparent rounded-[2rem] blur opacity-30" />
                <div className="group-hover:-translate-y-4 transition-transform duration-500">
                  <div className="p-8 bg-surface-light rounded-2xl border border-primary/20">
                    <div className="mb-6">
                      <div className="inline-block rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-[10px] font-bold text-primary mb-4 uppercase tracking-widest">
                        Recommended
                      </div>
                      <h3 className="text-2xl font-black text-white mb-4">Comprehensive Audit</h3>
                      <p className="text-3xl md:text-4xl font-black text-white mb-6">$1,500</p>
                    </div>

                    <div className="space-y-4 mb-6 text-sm">
                      <div className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>Everything in Essential</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>Database optimization review</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>Compliance gap analysis</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>Technical debt prioritization</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>Detailed remediation roadmap</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>Architecture improvement recommendations</span>
                      </div>
                    </div>

                    <Link href="/contact" className="block w-full mt-6">
                      <Button
                        size="lg"
                        className="w-full"
                      >
                        Select This Package
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Enterprise Package */}
              <div className="group hover:-translate-y-2 transition-transform duration-500">
                <div className="p-8 bg-background/5 rounded-2xl border border-white/5">
                  <div className="mb-6">
                    <div className="inline-block rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-[10px] font-bold text-primary mb-4 uppercase tracking-widest">
                      Enterprise
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4">Enterprise Audit</h3>
                    <p className="text-3xl md:text-4xl font-black text-white mb-6">$3,000</p>
                  </div>

                  <div className="space-y-4 mb-6 text-sm">
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>Everything in Comprehensive</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>Advanced penetration testing</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>API security testing</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>Scalability & load testing</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>Executive presentation & Q&A</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>30-day implementation support</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>Board-level reporting package</span>
                    </div>
                  </div>

                  <Link href="/contact" className="block w-full mt-6">
                    <Button
                      variant="outline"
                      className="w-full text-[10px] font-black tracking-[0.2em] uppercase h-10"
                    >
                      Select This Package
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Needs This */}
        <section className="py-20 bg-surface">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter text-center">
              Who Benefits Most from Our SaaS Audit
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
              Our audit service is particularly valuable for companies at these critical stages:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-white/5 bg-background/5">
                  <h3 className="text-xl font-black mb-4 flex items-center">
                    <span className="mr-3 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">💰</span>
                    Preparing for Funding
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Seed round preparation</li>
                    <li>Series A due diligence readiness</li>
                    <li>VC term sheet negotiations</li>
                    <li>Angel investor technical review</li>
                    <li>Accelerator demo day preparation</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl border border-white/5 bg-background/5">
                  <h3 className="text-xl font-black mb-4 flex items-center">
                    <span className="mr-3 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">🏢</span>
                    Enterprise Sales Readiness
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>SOC 2 compliance preparation</li>
                    <li>Security questionnaire responses</li>
                    <li>Enterprise sales cycle acceleration</li>
                    <li>Vendor security assessment prep</li>
                    <li>Penetration test readiness</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-white/5 bg-background/5">
                  <h3 className="text-xl font-black mb-4 flex items-center">
                    <span className="mr-3 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">📈</span>
                    Pre-Acquisition/Exit
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>M&A technical due diligence</li>
                    <li>Valuation maximization</li>
                    <li>Deal risk mitigation</li>
                    <li>Integration planning preparation</li>
                    <li>Shareholder exit preparation</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl border border-white/5 bg-background/5">
                  <h3 className="text-xl font-black mb-4 flex items-center">
                    <span className="mr-3 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">⚙️</span>
                    Performance Issues
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Slow application response times</li>
                    <li>Frequent downtime or incidents</li>
                    <li>Scaling limitations</li>
                    <li>High infrastructure costs</li>
                    <li>Development velocity bottlenecks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies / Testimonials */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter text-center">
              Real Results from Our Audit Clients
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
              See how our audits have helped US-based SaaS companies secure funding, improve performance, and prepare for growth.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="p-8 rounded-2xl border border-white/5 bg-background/5">
                <div className="flex mb-4 text-primary/50">
                  {"★★★★★".split("").map((s, i) => <span key={i} className="text-xl">{s}</span>)}
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "Dazzcode's audit uncovered critical security vulnerabilities in our payment processing system that would have killed our Series A. Their remediation roadmap helped us fix everything before investor due diligence."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-surface-light border border-white/10 flex items-center justify-center font-bold text-primary">JS</div>
                  <div>
                    <p className="font-bold text-white tracking-tight">James S.</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">CTO, FinTech Startup (NYC)</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="p-8 rounded-2xl border border-white/5 bg-background/5">
                <div className="flex mb-4 text-primary/50">
                  {"★★★★★".split("").map((s, i) => <span key={i} className="text-xl">{s}</span>)}
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "After our audit, we reduced AWS costs by 40% through right-sizing and reserved instances, while improving page load times by 65%. The performance optimization recommendations alone paid for the audit 3x over."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-surface-light border border-white/10 flex items-center justify-center font-bold text-primary">MG</div>
                  <div>
                    <p className="font-bold text-white tracking-tight">Maria G.</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">Founder, HealthTech SaaS (Boston)</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="p-8 rounded-2xl border border-white/5 bg-background/5">
                <div className="flex mb-4 text-primary/50">
                  {"★★★★★".split("").map((s, i) => <span key={i} className="text-xl">{s}</span>)}
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "The SOC 2 readiness assessment was invaluable. We identified 12 control gaps and fixed them before our audit, saving us months of remediation time and helping us close our enterprise deal faster."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-surface-light border border-white/10 flex items-center justify-center font-bold text-primary">TK</div>
                  <div>
                    <p className="font-bold text-white tracking-tight">Thomas K.</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">VP Engineering, B2B SaaS (Austin)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-surface">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="group p-6 rounded-xl bg-secondary/5 border border-white/5 open:bg-secondary/10 transition-colors cursor-pointer">
                <div className="flex items-center justify-between font-medium list-none">
                  What's the difference between your audit packages?
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </div>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Essential Audit ($800): Security scan + performance review + basic architecture assessment.
                  Comprehensive Audit ($1,500): Everything in Essential + database optimization + compliance check + technical debt report.
                  Enterprise Audit ($3,000): Everything in Comprehensive + advanced security testing + API testing + scalability analysis + executive presentation + 30-day support.
                </p>
              </div>

              <div className="group p-6 rounded-xl bg-secondary/5 border border-white/5 open:bg-secondary/10 transition-colors cursor-pointer">
                <div className="flex items-center justify-between font-medium list-none">
                  Do you offer ongoing monitoring or retesting?
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </div>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Yes! We offer ongoing security monitoring, quarterly compliance checks, and re-audits after remediation to ensure vulnerabilities stay fixed and new issues are caught early. Many clients retain us for continuous improvement programs.
                </p>
              </div>

              <div className="group p-6 rounded-xl bg-secondary/5 border border-white/5 open:bg-secondary/10 transition-colors cursor-pointer">
                <div className="flex items-center justify-between font-medium list-none">
                  What tools and methodologies do you use?
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </div>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  We use industry-leading tools like Snyk, OWASP ZAP, SonarQube, Nessus, and custom scripts, combined with expert manual review. Our methodology aligns with NIST, ISO 27001, and SOC 2 standards while being tailored to SaaS-specific risks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Ready to De-Risk Your SaaS Investment?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Don't let technical surprises derail your funding round or enterprise deal. Get a clear picture of your technical health before investors do.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="h-14 px-10 text-lg shadow-[0_0_40px_-10px_rgba(124,58,237,0.5)]"
              >
                Schedule Your Free Audit Consultation
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