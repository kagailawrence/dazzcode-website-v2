import { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

// Service-specific schema for SaaS MVP Launch
export const metadata: Metadata = {
  title: 'SaaS MVP Launch Services - Dazzcode | Build Investor-Ready MVPs in 4-6 Weeks',
  description: 'Accelerated SaaS MVP development for US startups. We build scalable, compliant MVPs using the T3 Stack that are investor-ready and designed for rapid iteration based on user feedback.',
  keywords: [
    'SaaS MVP development',
    'MVP launch',
    'minimum viable product',
    'SaaS development',
    'T3 Stack development',
    'Next.js SaaS',
    'TypeScript SaaS',
    'rapid MVP development',
    'investor ready MVP',
    'SaaS product development'
  ],
  alternates: {
    canonical: '/services/saas-mvp',
  },
  // Open Graph / Twitter Card
  openGraph: {
    title: 'SaaS MVP Launch Services - Dazzcode',
    description: 'Accelerated SaaS MVP development for US startups. Build investor-ready MVPs in 4-6 weeks.',
    url: 'https://dazzcode.com/services/saas-mvp',
    siteName: 'Dazzcode',
    images: [
      {
        url: 'https://dazzcode.com/images/services/saas-mvp-og.jpg',
        width: 1200,
        height: 630,
        alt: 'SaaS MVP launch and development service illustration'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS MVP Launch Services - Dazzcode',
    description: 'Accelerated SaaS MVP development for US startups. Build investor-ready MVPs in 4-6 weeks.',
    images: ['https://dazzcode.com/images/services/saas-mvp-twitter.jpg']
  }
};

// Structured data for the service page
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SaaS MVP Launch",
  "description": "Accelerated MVP development service for SaaS startups targeting US market. We build scalable, compliant MVPs using the T3 Stack (Next.js, TypeScript, Tailwind) with built-in authentication, payments, multi-tenancy, and investor-ready architecture in 4-6 weeks.",
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
    "serviceUrl": "https://dazzcode.com/services/saas-mvp"
  },
  "offers": {
    "@type": "Offer",
    "name": "SaaS MVP Launch Engagement",
    "description": "Full MVP development from concept to launch including architecture, design, development, testing, and deployment",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": 15000,
      "priceCurrency": "USD",
      "value": "15000",
      "unitCode": "USD",
      "valueAddedTaxIncluded": false
    },
    "priceRange": "$15,500 - $50,000",
    "availability": "https://schema.org/InStock",
    "eligibleRegion": {
      "@type": "Country",
      "name": "US"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "SaaS MVP Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "MVP Launch Essentials",
        "description": "Core SaaS MVP with authentication, basic payments, and essential features",
        "price": 15000,
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "MVP Launch Plus",
        "description": "Enhanced MVP with advanced features, admin dashboard, and integrations",
        "price": 30000,
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "MVP Launch Enterprise",
        "description": "Complete MVP with AI features, advanced analytics, and enterprise integrations",
        "price": 50000,
        "priceCurrency": "USD"
      }
    ]
  },
  "serviceType": "Software Development",
  "audience": {
    "@type": "Audience",
    "audienceType": "Startup founders, product managers, and entrepreneurs launching SaaS products for US market"
  }
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is included in your SaaS MVP development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our SaaS MVP development includes: 1) Product discovery and scoping, 2) UI/UX design, 3) Architecture setup (T3 Stack), 4) Core feature development (authentication, payments, user management), 5) API development, 6) Testing (unit, integration, e2e), 7) Deployment and DevOps setup, 8) Documentation and knowledge transfer. All built with scalability, security, and US compliance in mind."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a SaaS MVP with you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our standard SaaS MVP timeline is 4-6 weeks from kickoff to launch. This includes 1 week for discovery and design, 3-4 weeks for development, and 1 week for testing, polishing, and deployment. For more complex MVPs with AI features or extensive integrations, timelines may extend to 8-12 weeks. We use agile methodology with weekly demos to ensure transparency throughout the process."
      }
    },
    {
      "@type": "Question",
      "name": "What technology stack do you use for SaaS MVPs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We primarily use the T3 Stack: Next.js 14 (App Router), TypeScript, Tailwind CSS, and Prisma for the frontend and backend. For authentication we use NextAuth.js, for payments we integrate with Stripe or LemonSqueezy, and we typically use PostgreSQL as the database. We also incorporate Celestial (shadcn/ui) for premium UI components. All applications are deployed to Vercel with CI/CD pipelines using GitHub Actions."
      }
    },
    {
      "@type": "Question",
      "name": "How do you ensure the MVP is investor-ready?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We build investor-ready MVPs by focusing on: 1) Clean, maintainable code architecture that passes technical due diligence, 2) Proper documentation including API docs and architecture decisions, 3) Scalability considerations from day one, 4) Security best practices and basic compliance measures, 5) Measurable metrics and analytics setup, 6) Clean Git history with meaningful commits, and 7) Deployment automation with environment management. We also provide a technical summary document suitable for investor review."
      }
    },
    {
      "@type": "Question",
      "name": "What happens after the MVP launch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After launch, we offer several options: 1) Knowledge transfer to your team, 2) Ongoing maintenance and support packages, 3) Iterative development based on user feedback (we recommend starting with a 4-week sprint cycle), 4) Scaling preparation as you gain traction, and 5) Assistance with fundraising materials including tech due diligence prep. Many clients transition to our Scale Engineering services after validating their MVP."
      }
    }
  ]
};

export default function SaasMvpPage() {
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
                Accelerated SaaS MVP Launch
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Build investor-ready SaaS MVPs in 4-6 weeks using the T3 Stack. We handle everything from concept to launch so you can focus on validating your business model and acquiring early users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-14 md:h-16 px-10 md:px-12 font-black uppercase tracking-widest"
                >
                  Start Your MVP Journey
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

        {/* Why Choose Our MVP Service */}
        <section className="py-16 bg-surface">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter text-center">
              Why Founders Choose Our MVP Development
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-white/5 bg-background/5">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg mr-3">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-black mb-2">Speed Without Sacrifice</h3>
                </div>
                <p className="text-muted-foreground">
                  We launch MVPs in 4-6 weeks, not 4-6 months. Our proven T3 Stack foundation and streamlined process eliminate wasted time while maintaining code quality and scalability.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-white/5 bg-background/5">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg mr-3">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-black mb-2">Investor-Ready Foundation</h3>
                </div>
                <p className="text-muted-foreground">
                  Every line of code is written with future funding rounds in mind. Clean architecture, proper documentation, and scalable patterns ensure your MVP passes technical due diligence scrutiny.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-white/5 bg-background/5">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg mr-3">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-black mb-2">US Market Focus</h3>
                </div>
                <p className="text-muted-foreground">
                  We understand US customer expectations, compliance requirements (where applicable), and market dynamics. Our MVP includes considerations for US payment processors, data privacy expectations, and user experience preferences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our MVP Process */}
        <section id="mvp-process" className="py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter text-center">
              Our Proven MVP Development Process
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
              We follow a transparent, collaborative process designed specifically for founders who want to see progress and maintain control throughout development.
            </p>
          </div>
        </section>

        {/* Tech Stack Details */}
        <section className="py-20 bg-surface">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter text-center">
              The Technology Stack Behind Our MVPs
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
              We use modern, battle-tested technologies that provide the perfect foundation for scaling your SaaS business.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-white/5 bg-background/5">
                  <h3 className="text-xl font-black mb-4 flex items-center">
                    <span className="mr-3 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">Frontend</span>
                    User Interface & Experience
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="flex-shrink-0 bg-primary/20 text-primary w-8 h-8 flex items-center justify-center rounded">⚛</span>
                      <div className="ml-3">
                        <h4 className="font-black mb-1">Next.js 14 (App Router)</h4>
                        <p className="text-sm text-muted-foreground">React framework for optimal performance and SEO</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="flex-shrink-0 bg-primary/20 text-primary w-8 h-8 flex items-center justify-center rounded">🎨</span>
                      <div className="ml-3">
                        <h4 className="font-black mb-1">Tailwind CSS</h4>
                        <p className="text-sm text-muted-foreground">Utility-first CSS for rapid, consistent UI development</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="flex-shrink-0 bg-primary/20 text-primary w-8 h-8 flex items-center justify-center rounded">📱</span>
                      <div className="ml-3">
                        <h4 className="font-black mb-1">TypeScript</h4>
                        <p className="text-sm text-muted-foreground">Type-safe JavaScript for fewer bugs and better maintainability</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-white/5 bg-background/5">
                  <h3 className="text-xl font-black mb-4 flex items-center">
                    <span className="mr-3 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">Backend</span>
                    Server & Database
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="flex-shrink-0 bg-primary/20 text-primary w-8 h-8 flex items-center justify-center rounded">⚙️</span>
                      <div className="ml-3">
                        <h4 className="font-black mb-1">Prisma ORM</h4>
                        <p className="text-sm text-muted-foreground">Type-safe database access with automatic migrations</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="flex-shrink-0 bg-primary/20 text-primary w-8 h-8 flex items-center justify-center rounded">🐘</span>
                      <div className="ml-3">
                        <h4 className="font-black mb-1">PostgreSQL</h4>
                        <p className="text-sm text-muted-foreground">Reliable, open-source relational database</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="flex-shrink-0 bg-primary/20 text-primary w-8 h-8 flex items-center justify-center rounded">🔐</span>
                      <div className="ml-3">
                        <h4 className="font-black mb-1">NextAuth.js</h4>
                        <p className="text-sm text-muted-foreground">Complete authentication solution for Next.js</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-white/5 bg-background/5">
                  <h3 className="text-xl font-black mb-4 flex items-center">
                    <span className="mr-3 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">Infrastructure</span>
                    DevOps & Deployment
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="flex-shrink-0 bg-primary/20 text-primary w-8 h-8 flex items-center justify-center rounded">☁️</span>
                      <div className="ml-3">
                        <h4 className="font-black mb-1">Vercel</h4>
                        <p className="text-sm text-muted-foreground">Optimized hosting for Next.js with edge capabilities</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="flex-shrink-0 bg-primary/20 text-primary w-8 h-8 flex items-center justify-center rounded">⚙️</span>
                      <div className="ml-3">
                        <h4 className="font-black mb-1">GitHub Actions</h4>
                        <p className="text-sm text-muted-foreground">CI/CD pipeline for automated testing and deployment</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="flex-shrink-0 bg-primary/20 text-primary w-8 h-8 flex items-center justify-center rounded">🔌</span>
                      <div className="ml-3">
                        <h4 className="font-black mb-1">Stripe/LemonSqueezy</h4>
                        <p className="text-sm text-muted-foreground">Payment processing for subscriptions and one-time payments</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-white/5 bg-background/5">
                  <h3 className="text-xl font-black mb-4 flex items-center">
                    <span className="mr-3 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">UI/UX</span>
                    Design & Components
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="flex-shrink-0 bg-primary/20 text-primary w-8 h-8 flex items-center justify-center rounded">🎨</span>
                      <div className="ml-3">
                        <h4 className="font-black mb-1">shadcn/ui</h4>
                        <p className="text-sm text-muted-foreground">Beautifully designed, accessible component library</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="flex-shrink-0 bg-primary/20 text-primary w-8 h-8 flex items-center justify-center rounded">📱</span>
                      <div className="ml-3">
                        <h4 className="font-black mb-1">Responsive Design</h4>
                        <p className="text-sm text-muted-foreground">Mobile-first approach for all devices</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="flex-shrink-0 bg-primary/20 text-primary w-8 h-8 flex items-center justify-center rounded">♿</span>
                      <div className="ml-3">
                        <h4 className="font-black mb-1">Accessibility (WCAG)</h4>
                        <p className="text-sm text-muted-foreground">Built-in accessibility for inclusive user experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Included */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter text-center">
              Core Features Included in Every MVP
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
              Regardless of which package you choose, all our MVPs include these essential components for a production-ready SaaS foundation.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-white/5 bg-background/5 text-center">
                <div className="mb-4">
                  <span className="text-5xl">🔐</span>
                </div>
                <h3 className="text-xl font-black mb-4">Authentication & Security</h3>
                <p className="text-muted-foreground">
                  Email/password login, social auth (Google, GitHub), role-based access control, password reset, and account verification.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-background/5 text-center">
                <div className="mb-4">
                  <span className="text-5xl">💳</span>
                </div>
                <h3 className="text-xl font-black mb-4">Payments & Billing</h3>
                <p className="text-muted-foreground">
                  Subscription management, one-time payments, proration, tax calculation, and webhook handling via Stripe or LemonSqueezy.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-background/5 text-center">
                <div className="mb-4">
                  <span className="text-5xl">👥</span>
                </div>
                <h3 className="text-xl font-black mb-4">User & Team Management</h3>
                <p className="text-muted-foreground">
                  Profiles, preferences, teams/workspaces, invitations, and basic admin dashboard for user oversight.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-background/5 text-center">
                <div className="mb-4">
                  <span className="text-5xl">📊</span>
                </div>
                <h3 className="text-xl font-black mb-4">Analytics & Monitoring</h3>
                <p className="text-muted-foreground">
                  Basic usage tracking, error logging, performance monitoring, and health check endpoints.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-background/5 text-center">
                <div className="mb-4">
                  <span className="text-5xl">📱</span>
                </div>
                <h3 className="text-xl font-black mb-4">Responsive Design</h3>
                <p className="text-muted-foreground">
                  Mobile-first design that works seamlessly across phones, tablets, and desktops.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-background/5 text-center">
                <div className="mb-4">
                  <span className="text-5xl">⚙️</span>
                </div>
                <h3 className="text-xl font-black mb-4">DevOps & Deployment</h3>
                <p className="text-muted-foreground">
                  Automated testing, CI/CD pipeline, environment management (dev/staging/prod), and zero-downtime deployments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Packages & Pricing */}
        <section id="mvp-pricing" className="py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter text-center">
              MVP Packages for Different Stages & Ambitions
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
              Choose the package that matches your vision and budget, from essential launch features to advanced AI-powered capabilities.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Essentials Package */}
              <div className="group hover:-translate-y-2 transition-transform duration-500">
                <div className="p-8 bg-background/5 rounded-2xl border border-white/5">
                  <div className="mb-6">
                    <div className="inline-block rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-[10px] font-bold text-primary mb-4 uppercase tracking-widest">
                      Essentials
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4">MVP Launch Essentials</h3>
                    <p className="text-3xl md:text-4xl font-black text-white mb-6">$15,000</p>
                  </div>

                  <div className="space-y-4 mb-6 text-sm">
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>User authentication (email/social)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>Basic subscription payments</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>Core feature set (3-5 user stories)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>Responsive design (mobile/desktop)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>Testing & QA</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>Deployment to production</span>
                    </div>
                  </div>

                  <Link href="/contact" className="block w-full mt-6">
                    <Button
                      variant="outline"
                      className="w-full text-[10px] font-black tracking-[0.2em] uppercase h-10"
                    >
                      Start with Essentials
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
                      <h3 className="text-2xl font-black text-white mb-4">MVP Launch Plus</h3>
                      <p className="text-3xl md:text-4xl font-black text-white mb-6">$30,000</p>
                    </div>

                    <div className="space-y-4 mb-6 text-sm">
                      <div className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>Everything in Essentials</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>Admin dashboard & user management</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>Advanced features (5-8 user stories)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>Third-party integrations (2-3 services)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>Email notifications & templates</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>Performance optimization</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>Extended testing & QA</span>
                      </div>
                    </div>

                    <Link href="/contact" className="block w-full mt-6">
                      <Button
                        size="lg"
                        className="w-full"
                      >
                        Choose This Package
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
                    <h3 className="text-2xl font-black text-white mb-4">MVP Launch Enterprise</h3>
                    <p className="text-3xl md:text-4xl font-black text-white mb-6">$50,000</p>
                  </div>

                  <div className="space-y-4 mb-6 text-sm">
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>Everything in Plus</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>AI/ML features (recommendations, NLP, etc.)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>Advanced analytics & reporting dashboard</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>Enterprise SSO (SAML, OAuth)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>Custom integrations (4+ services)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>Multi-region deployment setup</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>Performance & load testing</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>Dedicated project manager</span>
                    </div>
                  </div>

                  <Link href="/contact" className="block w-full mt-6">
                    <Button
                      variant="outline"
                      className="w-full text-[10px] font-black tracking-[0.2em] uppercase h-10"
                    >
                      Go Enterprise
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Use This */}
        <section className="py-20 bg-surface">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter text-center">
              Who Benefits Most from Our MVP Service
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
              Our MVP development is ideal for founders and teams at these stages:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-white/5 bg-background/5">
                <h3 className="text-xl font-black mb-4 flex items-center">
                  <span className="mr-3 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">💡</span>
                  Idea Stage Founders
                </h3>
                <p className="text-muted-foreground">
                  You have a validated problem and solution concept but need a technical co-founder or development team to build your first product version.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-white/5 bg-background/5">
                <h3 className="text-xl font-black mb-4 flex items-center">
                  <span className="mr-3 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">📊</span>
                  Pre-Seed Startups
                </h3>
                <p className="text-muted-foreground">
                  You've done customer interviews, have letters of intent, and need an MVP to start charging users and validate your business model.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-white/5 bg-background/5">
                <h3 className="text-xl font-black mb-4 flex items-center">
                  <span className="mr-3 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">🚀</span>
                  Seed-Funded Companies
                </h3>
                <p className="text-muted-foreground">
                  You have funding but need to build quickly to hit milestones, satisfy investor expectations, and start generating revenue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter text-center">
              MVPs We've Helped Launch
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
              See how our MVP development has helped founders turn ideas into fundable products.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Success Story 1 */}
              <div className="p-8 rounded-2xl border border-white/5 bg-background/5">
                <div className="flex mb-4 text-primary/50">
                  {"★★★★★".split("").map((s, i) => <span key={i} className="text-xl">{s}</span>)}
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "We went from concept to paying customers in 5 weeks. Dazzcode built our B2B SaaS MVP with team management and billing, and we closed our $500k seed round 2 months after launch."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-surface-light border border-white/10 flex items-center justify-center font-bold text-primary">AK</div>
                  <div>
                    <p className="font-bold text-white tracking-tight">Alex K.</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">CEO, Project Management SaaS (Silicon Valley)</p>
                  </div>
                </div>
              </div>

              {/* Success Story 2 */}
              <div className="p-8 rounded-2xl border border-white/5 bg-background/5">
                <div className="flex mb-4 text-primary/50">
                  {"★★★★★".split("").map((s, i) => <span key={i} className="text-xl">{s}</span>)}
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "Our MVP included AI-powered document processing that impressed our angel investors. The clean architecture made it easy for our later hires to understand and extend the codebase."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-surface-light border border-white/10 flex items-center justify-center font-bold text-primary">SP</div>
                  <div>
                    <p className="font-bold text-white tracking-tight">Sarah P.</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">Founder, LegalTech Startup (New York)</p>
                  </div>
                </div>
              </div>

              {/* Success Story 3 */}
              <div className="p-8 rounded-2xl border border-white/5 bg-background/5">
                <div className="flex mb-4 text-primary/50">
                  {"★★★★★".split("").map((s, i) => <span key={i} className="text-xl">{s}</span>)}
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "Launching in 4 weeks allowed us to get user feedback before spending more money. We pivoted slightly based on early user input and now have 200+ paying customers 6 months post-launch."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-surface-light border border-white/10 flex items-center justify-center font-bold text-primary">JL</div>
                  <div>
                    <p className="font-bold text-white tracking-tight">James L.</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">CTO, Healthcare SaaS (Austin)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="mvp-faq" className="py-20 bg-surface">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="group p-6 rounded-xl bg-secondary/5 border border-white/5 open:bg-secondary/10 transition-colors cursor-pointer">
                <div className="flex items-center justify-between font-medium list-none">
                  What's the difference between your MVP packages?
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </div>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Essentials ($15k): Core features (auth, payments, 3-5 user stories), responsive design, testing, deployment.
                  Plus ($30k): Everything in Essentials + admin dashboard, advanced features (5-8 user stories), integrations, email templates, performance optimization.
                  Enterprise ($50k): Everything in Plus + AI/ML features, advanced analytics, enterprise SSO, custom integrations, multi-region setup, load testing, dedicated PM.
                </p>
              </div>

              <div className="group p-6 rounded-xl bg-secondary/5 border border-white/5 open:bg-secondary/10 transition-colors cursor-pointer">
                <div className="flex items-center justify-between font-medium list-none">
                  Can I make changes to the scope during development?
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </div>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Absolutely! We use agile methodology with bi-weekly sprints. You can adjust priorities each sprint based on feedback. Major scope changes may affect timeline/budget, but we'll discuss trade-offs transparently during sprint planning.
                </p>
              </div>

              <div className="group p-6 rounded-xl bg-secondary/5 border border-white/5 open:bg-secondary/10 transition-colors cursor-pointer">
                <div className="flex items-center justify-between font-medium list-none">
                  What if I need features beyond the MVP scope?
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </div>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  We excel at post-MVP evolution! Many clients continue with us for iterative development (we call it our "Scale Engineering" service). We can help you prioritize features based on user feedback, business metrics, and technical debt considerations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Ready to Build Your SaaS MVP?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Stop waiting for the "perfect" time to start. The best time to build your MVP was yesterday. The second best time is now.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="h-14 px-10 text-lg shadow-[0_0_40px_-10px_rgba(124,58,237,0.5)]"
              >
                Start Your MVP Journey Today
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