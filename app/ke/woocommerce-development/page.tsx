import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/seo/JsonLd";
import WooCommerceHeroPreview from "@/components/sections/WooCommerceHeroPreview";
import WooCommerceServicesCarousel from "@/components/sections/WooCommerceServicesCarousel";
import WooCommerceLeadForm from "@/components/sections/WooCommerceLeadForm";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Store,
  Code2,
  ShieldCheck,
  Search,
  FileCode2,
  Palette,
  Smartphone,
  CreditCard,
  Truck,
  Layers,
  Server,
  Zap,
  HelpCircle,
  Clock,
  AlertTriangle,
  RefreshCw,
  TrendingUp,
  Cpu,
  ShoppingBag,
  Calendar,
  Lock,
  MessageSquare,
  Globe,
  DollarSign
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ecommerce Website Development in Kenya | Dazzcode",
  description:
    "WooCommerce development in Kenya for businesses, online sellers and dropshippers. Build, customize, maintain and optimize your WooCommerce store.",
  keywords: [
    "WooCommerce Development Kenya",
    "WooCommerce Kenya",
    "WooCommerce website Kenya",
    "WooCommerce website development Kenya",
    "WooCommerce developer Kenya",
    "WooCommerce developers Kenya",
    "WooCommerce development company Kenya",
    "WooCommerce agency Kenya",
    "WooCommerce expert Kenya",
    "WooCommerce specialist Kenya",
    "WooCommerce services Kenya",
    "WooCommerce solutions Kenya",
    "WooCommerce store Kenya",
    "WooCommerce ecommerce Kenya",
    "WooCommerce online store Kenya",
    "ecommerce Kenya",
    "ecommerce development Kenya",
    "ecommerce website Kenya",
    "ecommerce website development Kenya",
    "ecommerce developer Kenya",
    "ecommerce development company Kenya",
    "ecommerce agency Kenya",
    "ecommerce website design Kenya",
    "ecommerce web development Kenya",
    "online store Kenya",
    "online shop Kenya",
    "online store development Kenya",
    "online shop development Kenya",
    "online shopping website Kenya",
    "ecommerce solutions Kenya",
    "WordPress ecommerce Kenya",
    "WordPress ecommerce development Kenya",
    "WordPress ecommerce developer Kenya",
    "WordPress website Kenya",
    "WordPress website development Kenya",
    "WordPress developer Kenya",
    "WordPress WooCommerce Kenya",
    "WooCommerce developer Nairobi",
    "WooCommerce development Nairobi",
    "WooCommerce website Nairobi",
    "WooCommerce agency Nairobi",
    "ecommerce developer Nairobi",
    "ecommerce development Nairobi",
    "WooCommerce M-Pesa integration Kenya",
    "M-Pesa WooCommerce integration",
    "Lipa na M-Pesa WooCommerce",
    "WooCommerce payment integration Kenya",
    "WooCommerce maintenance Kenya",
    "WooCommerce support Kenya",
    "WooCommerce SEO Kenya",
    "custom WooCommerce development Kenya",
    "WooCommerce code audit Kenya",
    "WooCommerce dropshipping Kenya",
    "WooCommerce website cost Kenya"
  ],
  alternates: {
    canonical: "https://dazzcode.com/ke/woocommerce-development",
    languages: {
      "en": "https://dazzcode.com/services/web-application-development",
      "en-KE": "https://dazzcode.com/ke/woocommerce-development",
      "x-default": "https://dazzcode.com/ke/woocommerce-development",
    },
  },
  openGraph: {
    title: "WooCommerce Development Kenya | Ecommerce Website Development | Dazzcode",
    description:
      "WooCommerce development in Kenya for businesses, online sellers and dropshippers. Build, customize, maintain and optimize your WooCommerce store with Dazzcode.",
    url: "https://dazzcode.com/ke/woocommerce-development",
    siteName: "Dazzcode",
    images: [
      {
        url: "/images/hero-saas-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "WooCommerce Development in Kenya - Dazzcode Ecommerce Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WooCommerce Development Kenya | Dazzcode",
    description:
      "Build, customize, maintain and scale your WooCommerce store in Kenya. M-Pesa integration, custom plugins, SEO, and Linux VPS hosting.",
    images: ["/images/hero-saas-dashboard.jpg"],
  },
};

export default function WooCommerceKenyaLandingPage() {
  const faqs = [
    {
      question: "What does WooCommerce development cost in Kenya?",
      answer: "A standard professional WooCommerce store setup starts at KSh 35,000 (which includes domain and hosting for the first year, M-Pesa integration, and mobile setup). Custom WooCommerce development ranges from KSh 45,000 to KSh 200,000 depending on custom business workflows, plugins, and feature complexity.",
    },
    {
      question: "How much does a WooCommerce website cost in Kenya?",
      answer: "Our entry-level complete store setup package is KSh 35,000. For businesses requiring custom themes, bespoke checkout flows, subscriptions, or ERP integrations, custom projects typically range between KSh 45,000 and KSh 200,000.",
    },
    {
      question: "Do you provide WooCommerce maintenance in Kenya?",
      answer: "Yes. We offer our WooCommerce Basic Maintenance package at KSh 10,000 per year. This includes regular WordPress core updates, WooCommerce engine updates, plugin security updates, live uptime checks, and resolving update-related conflicts to keep your store operating smoothly.",
    },
    {
      question: "Do you offer WooCommerce SEO in Kenya?",
      answer: "Yes. Our WooCommerce SEO service is KSh 20,000 per month. We optimize product pages, category hierarchies, title tags, meta descriptions, Kenyan keyword targeting, image compression, structured data schema, and technical indexing to increase qualified organic search traffic.",
    },
    {
      question: "Can you integrate M-Pesa with WooCommerce?",
      answer: "Yes. We implement automated Lipa na M-Pesa STK Push and C2B payment integrations using the official Safaricom Daraja API. When a customer enters their phone number at checkout, a PIN prompt is sent instantly to their phone, and the order status automatically updates to 'Processing' upon successful payment callback.",
    },
    {
      question: "Can you customize an existing WooCommerce store?",
      answer: "Yes. We work extensively with existing stores to add custom checkout logic, build custom WooCommerce plugins, improve mobile responsiveness, resolve plugin conflicts, and optimize database speed.",
    },
    {
      question: "Can you audit my WooCommerce codebase?",
      answer: "Yes. Our WooCommerce Code Audit ranges from KSh 20,000 to KSh 50,000 based on codebase size. We inspect theme code, database query performance, plugin conflicts, security risks, and technical debt, providing an actionable remediation roadmap.",
    },
    {
      question: "Do you build dropshipping websites in Kenya?",
      answer: "Yes. We build lightweight, mobile-optimized WooCommerce dropshipping stores with organized product catalogs, fast checkout, currency conversions, and SEO configurations so you can focus on marketing and order fulfillment.",
    },
    {
      question: "Do you provide hosting and domain?",
      answer: "Yes. Our KSh 35,000 WooCommerce Store Development package includes domain registration and high-performance hosting configured for the first year, with automated daily backups and SSL security.",
    },
    {
      question: "Can you fix a slow WooCommerce website?",
      answer: "Yes. We identify the exact causes of slowness—such as unindexed database tables, bloated plugins, uncompressed images, or inefficient theme scripts—and implement caching, query optimization, and asset minification to achieve sub-second load times.",
    },
    {
      question: "Can you work with a store built by another developer?",
      answer: "Yes. Many of our clients come to us with stores built by previous developers. We can perform a technical code audit, stabilize the codebase, take over routine maintenance, or build new custom features.",
    },
    {
      question: "Do you work with businesses outside Nairobi?",
      answer: "Yes. While Dazzcode is headquartered in Nairobi, we work with ecommerce businesses and online sellers across Mombasa, Kisumu, Nakuru, Eldoret, and all parts of Kenya, as well as international clients.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dazzcode.com/ke/woocommerce-development#service",
        name: "WooCommerce Development Kenya",
        description:
          "Professional WooCommerce and ecommerce development in Kenya. Custom store setups, M-Pesa Daraja payment integration, custom WooCommerce plugins, basic maintenance, SEO optimization, and technical code audits for Kenyan businesses.",
        provider: {
          "@type": "LocalBusiness",
          name: "Dazzcode",
          url: "https://dazzcode.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Nairobi",
            addressCountry: "KE",
          },
        },
        areaServed: [
          { "@type": "Country", name: "Kenya" },
          { "@type": "City", name: "Nairobi" },
          { "@type": "City", name: "Mombasa" },
          { "@type": "City", name: "Kisumu" },
          { "@type": "City", name: "Nakuru" },
          { "@type": "City", name: "Eldoret" },
        ],
        serviceType: "WooCommerce & Ecommerce Development Services",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "WooCommerce Engineering & Support Packages",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "WooCommerce Store Development",
                description: "Complete WooCommerce store setup with domain, hosting for the first year, mobile-first design, product catalog, and M-Pesa checkout.",
              },
              price: "35000",
              priceCurrency: "KES",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom WooCommerce Development",
                description: "Custom checkout logic, subscription flows, custom WooCommerce plugins, and API integrations.",
              },
              price: "45000",
              priceCurrency: "KES",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "WooCommerce Basic Maintenance",
                description: "Annual WordPress, WooCommerce, and plugin security updates, uptime checks, and site reliability troubleshooting.",
              },
              price: "10000",
              priceCurrency: "KES",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "WooCommerce SEO for Kenyan Businesses",
                description: "Monthly product and category page SEO, Kenyan keyword optimization, technical indexing, and Google Search Console audits.",
              },
              price: "20000",
              priceCurrency: "KES",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "WooCommerce Code Audit",
                description: "In-depth codebase, plugin conflict, database query, and security review for existing WooCommerce stores.",
              },
              price: "20000",
              priceCurrency: "KES",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "WooCommerce Themes & Store Templates",
                description: "Ready-to-customize lightweight WooCommerce store templates for rapid launches.",
              },
              price: "10000",
              priceCurrency: "KES",
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dazzcode.com/ke/woocommerce-development#breadcrumb",
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
            name: "Kenya",
            item: "https://dazzcode.com/ke",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "WooCommerce Development",
            item: "https://dazzcode.com/ke/woocommerce-development",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://dazzcode.com/ke/woocommerce-development#faq",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
    ],
  };

  const audienceGroups = [
    {
      title: "Product Sellers",
      tag: "Physical Goods",
      desc: "Fashion brands, electronics retailers, beauty & cosmetics, furniture, food & beverage, and wholesale businesses selling physical products with local delivery.",
      features: ["Inventory tracking", "Size/color variations", "M-Pesa STK Push", "Delivery rate calculators"],
    },
    {
      title: "Service Sellers",
      tag: "Bookings & Consultations",
      desc: "Consultants, healthcare clinics, fitness trainers, educational courses, and appointment-based businesses accepting online bookings and deposits.",
      features: ["Booking calendars", "Automated deposit billing", "Client reminders", "Multi-tier service packages"],
    },
    {
      title: "Dropshippers",
      tag: "Dropshipping Stores",
      desc: "Entrepreneurs launching or scaling dropshipping stores with lightweight catalogs, fast mobile checkout, and high conversion landing pages.",
      features: ["Fast catalog browsing", "Mobile-optimized checkout", "Product SEO markup", "Zero vendor lock-in"],
    },
    {
      title: "Growing Online Businesses",
      tag: "Scaling Operations",
      desc: "Established stores that need custom checkout workflows, wholesale B2B pricing, subscription billing, custom shipping rules, or ERP connections.",
      features: ["Custom plugin engineering", "API & ERP integrations", "High concurrency speed", "Automated invoicing"],
    },
    {
      title: "Existing WooCommerce Stores",
      tag: "Fixing & Maintenance",
      desc: "Store owners experiencing checkout bugs, slow page loads, update breakage, security vulnerabilities, or poor Google search visibility.",
      features: ["Codebase audits", "Speed optimization", "Security patch maintenance", "Theme modernization"],
    },
  ];

  const coreServices = [
    {
      number: "01",
      title: "WooCommerce Store Development",
      price: "KSh 35,000",
      priceSubtitle: "Complete setup with domain & hosting (Year 1)",
      description: "Professional WooCommerce store setup for businesses that want to start selling online with zero technical friction.",
      scopeItems: [
        "WordPress & WooCommerce full installation & configuration",
        "Domain registration & high-speed cloud hosting included for Year 1",
        "Mobile-friendly, responsive theme setup styled to your brand",
        "Product & category catalog setup with inventory tracking",
        "Lipa na M-Pesa STK Push and card checkout integration",
        "Shipping & local delivery zone configuration",
        "Essential security, SSL certificate, and automated backups",
        "Admin training on adding products and managing orders",
      ],
      ctaText: "Build My Store →",
      ctaAnchor: "#lead-form",
    },
    {
      number: "02",
      title: "Custom WooCommerce Development",
      price: "KSh 45,000 – KSh 200,000",
      priceSubtitle: "Final price depends on required features and complexity",
      description: "Bespoke engineering for businesses whose operational requirements go beyond standard template capabilities.",
      scopeItems: [
        "Custom checkout funnels and multi-step order workflows",
        "Custom WooCommerce plugin development",
        "Advanced pricing rules, wholesale B2B tiers, and bulk discounts",
        "Subscription billing and recurring membership management",
        "Custom shipping calculation logic based on Kenyan delivery zones",
        "Third-party API integrations (CRMs, ERPs, SMS gateways)",
        "Interactive product configurators and custom variation builders",
        "Custom administrative reporting and order export tools",
      ],
      ctaText: "Discuss Custom Requirements →",
      ctaAnchor: "#lead-form",
    },
    {
      number: "03",
      title: "WooCommerce Basic Maintenance",
      price: "KSh 10,000 / year",
      priceSubtitle: "Annual store reliability & security support",
      description: "Keep your store online, updated, secure, and operating without downtime or update-related glitches.",
      scopeItems: [
        "WordPress core and WooCommerce engine updates",
        "Plugin updates tested for compatibility before deployment",
        "Security patch updates and vulnerability monitoring",
        "Uptime checks and live site operational monitoring",
        "Automated off-site daily database and media backups",
        "Troubleshooting and resolving update-related conflicts",
        "Keeping store checkout and payment callbacks operational",
        "Defined maintenance scope with zero hidden fees",
      ],
      ctaText: "Maintain My Store →",
      ctaAnchor: "#lead-form",
    },
    {
      number: "04",
      title: "WooCommerce SEO for Kenyan Businesses",
      price: "KSh 20,000 / month",
      priceSubtitle: "Organic visibility & qualified commercial search traffic",
      description: "Help your store improve organic search rankings and reach Kenyan customers actively searching for your products.",
      scopeItems: [
        "Kenyan ecommerce keyword research and search intent mapping",
        "Product page and category hierarchy on-page SEO optimization",
        "Title tag and compelling meta description writing",
        "Product, Offer, and BreadcrumbList structured data schema",
        "Image compression, alt tag optimization, and mobile speed tuning",
        "Google Search Console setup, indexing checks, and XML sitemaps",
        "Internal linking architecture to distribute ranking authority",
        "Transparent monthly search performance and ranking reports",
      ],
      ctaText: "Start WooCommerce SEO →",
      ctaAnchor: "#lead-form",
    },
    {
      number: "05",
      title: "WooCommerce Code Audit",
      price: "KSh 20,000 – KSh 50,000",
      priceSubtitle: "Final price depends on the size and complexity of the codebase",
      description: "Comprehensive technical review for existing stores that are slow, unstable, insecure, or heavily customized.",
      scopeItems: [
        "Custom theme template code and child theme inspection",
        "Plugin conflict identification and obsolete dependency removal",
        "Database query profiling to eliminate slow MySQL bottlenecks",
        "Checkout flow analysis to detect cart abandonment glitches",
        "Security vulnerability and file permission assessment",
        "Deployment and server hosting configuration review",
        "Technical SEO error identification (broken links, crawl traps)",
        "Detailed engineering report with prioritized remediation steps",
      ],
      ctaText: "Request a Code Audit →",
      ctaAnchor: "#lead-form",
    },
    {
      number: "06",
      title: "WooCommerce Themes & Store Templates",
      price: "From KSh 10,000",
      priceSubtitle: "Ready-to-customize templates for rapid launch",
      description: "High-performance, pre-built store templates tailored for Kenyan businesses wanting a faster, cost-effective launch.",
      scopeItems: [
        "Clean, lightweight WooCommerce store template structure",
        "Customization of brand logo, colors, and typography",
        "Mobile-first responsive layout optimized for smartphones",
        "Essential storefront pages (Shop, Product, Cart, Checkout, Account)",
        "Pre-configured standard shipping and payment settings",
        "Clean code structure that avoids heavy page builder bloat",
        "Fast 3 to 5 business day turnaround for initial deployment",
        "Seamless upgrade path to custom development as you grow",
      ],
      ctaText: "View Templates →",
      ctaAnchor: "#lead-form",
    },
  ];

  const commonProblems = [
    { title: "Store is Slow", desc: "Product pages take 5+ seconds to load on mobile networks, leading to lost customer sales." },
    { title: "Website Goes Offline", desc: "Cheap shared hosting crashes during sales campaigns or unexpected traffic spikes." },
    { title: "Checkout Is Broken", desc: "M-Pesa prompts fail to fire or orders get stuck without updating payment status." },
    { title: "Plugins Conflict", desc: "Installing multiple heavy plugins breaks cart buttons and distorts page layouts." },
    { title: "Theme Is Outdated", desc: "Legacy theme files no longer support current WooCommerce versions or modern mobile viewports." },
    { title: "Store Isn't on Google", desc: "Product and category pages lack structured schema and fail to rank for Kenyan search terms." },
    { title: "Mobile Experience Is Poor", desc: "Buttons are too small, checkout forms are tedious, and product galleries break on phones." },
    { title: "Updates Break Things", desc: "Updating WooCommerce crashes custom functions or breaks payment gateway callbacks." },
    { title: "Code Is Hard to Maintain", desc: "Unorganized custom PHP snippets make it impossible for new developers to add features." },
    { title: "Admin Panel Is Sluggish", desc: "Opening order lists and editing products takes forever due to unindexed database tables." },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Understand",
      desc: "We learn about your products, target customers, catalog size, payment methods, delivery model, and business goals.",
    },
    {
      step: "02",
      title: "Plan",
      desc: "We define store architecture, category hierarchies, custom workflows, M-Pesa integration rules, and milestone deliverables.",
    },
    {
      step: "03",
      title: "Build",
      desc: "We configure WooCommerce, engineer clean templates or custom features, set up product variations, and test checkout funnels.",
    },
    {
      step: "04",
      title: "Launch",
      desc: "We deploy the store to live hosting with SSL security, configure domain routing, test live M-Pesa STK Push payments, and verify analytics.",
    },
    {
      step: "05",
      title: "Optimize",
      desc: "We optimize product SEO, tune caching and mobile page speed, verify Google Search Console indexing, and test conversion paths.",
    },
    {
      step: "06",
      title: "Maintain & Scale",
      desc: "We keep the store secure and updated through basic maintenance, adding custom functionality as your sales volume grows.",
    },
  ];

  const whyChooseDazzcode = [
    {
      icon: Code2,
      title: "Deep Technical Engineering",
      desc: "We are full-stack software engineers, not just theme installers. We write clean PHP, optimize MySQL databases, build custom plugins, and understand server infrastructure.",
    },
    {
      icon: RefreshCw,
      title: "Build + Maintain Lifecycle",
      desc: "You never have to worry about being abandoned after launch. We offer ongoing maintenance, security updates, and technical support so your store stays dependable.",
    },
    {
      icon: Search,
      title: "SEO + Development Alignment",
      desc: "Our team handles both the technical code and search engine optimization. Your store is structured with valid schema, clean URLs, and fast load speeds from day one.",
    },
    {
      icon: ShieldCheck,
      title: "Existing Stores Welcome",
      desc: "Whether you need to fix a broken store, take over maintenance from another developer, audit your code, or add custom features, we welcome existing stores.",
    },
    {
      icon: Zap,
      title: "Customization Beyond Templates",
      desc: "When standard plugins can't solve your business problem, we engineer custom plugins, specialized pricing tiers, and tailored checkout funnels built around your workflow.",
    },
    {
      icon: Lock,
      title: "100% IP & Data Ownership",
      desc: "You own all store files, databases, domain registrations, and source code. Zero vendor lock-in, zero hidden revenue cuts.",
    },
  ];

  const testimonials = [
    {
      quote: "Dazzcode built our online fashion store with seamless M-Pesa STK Push checkout. Our customers across Nairobi and Mombasa love how fast the mobile store loads, and orders update automatically without manual verification.",
      author: "Grace M.",
      role: "Founder & Director",
      company: "Nairobi Apparel & Lifestyle",
    },
    {
      quote: "Our existing WooCommerce store was painfully slow and frequently crashing during updates. Dazzcode performed a thorough code audit, cleaned up obsolete plugins, optimized the database, and now manages our annual maintenance.",
      author: "Samuel K.",
      role: "Operations Lead",
      company: "East Africa Beauty Supplies",
    },
    {
      quote: "The M-Pesa Daraja integration and custom shipping calculator Dazzcode implemented simplified our nationwide logistics. We can dispatch orders to Nakuru, Kisumu, and Eldoret with zero checkout confusion.",
      author: "Brian O.",
      role: "Managing Director",
      company: "TechParts Kenya",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAF9] text-[#12201B]">
      <JsonLd schema={structuredData} />

      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#F8FAF9] border-b border-[#E2EAE6] relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-[#52615B] mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#059669] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/ke" className="hover:text-[#059669] transition-colors">Kenya</Link>
            <span>/</span>
            <span className="text-[#12201B] font-semibold">WooCommerce Development</span>
          </nav>

          {/* Single Main H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-[#12201B] mb-5">
            WooCommerce Development in Kenya
          </h1>

          <p className="text-2xl sm:text-3xl font-bold text-[#059669] tracking-tight mb-6">
            Build, Customize, Maintain and Scale Your Online Store
          </p>

          <p className="text-lg md:text-xl text-[#52615B] leading-relaxed max-w-3xl mb-8">
            Dazzcode helps Kenyan businesses, online sellers, dropshippers and service providers build, customize, maintain and grow high-converting WooCommerce stores. From M-Pesa payment integration and custom plugin development to speed optimization and technical SEO, we deliver stores engineered for revenue.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
            <a href="#lead-form" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-sm font-bold uppercase tracking-wider bg-[#059669] text-white hover:bg-[#047857] rounded-xl transition-all shadow-md cursor-pointer"
              >
                Build My Online Store
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <a href="#lead-form" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-7 text-sm font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#F1F5F3] rounded-xl text-[#12201B] cursor-pointer"
              >
                Talk to a WooCommerce Developer
              </Button>
            </a>
          </div>

          {/* Hero Product Visual / Interactive Preview */}
          <WooCommerceHeroPreview />

          {/* Hero Services Carousel */}
          <WooCommerceServicesCarousel />

          {/* Value Journey Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-[#E2EAE6] text-xs font-mono text-[#52615B]">
            <div>
              <span className="text-[#059669] font-bold block">01 · Launch</span>
              <span>Complete Store Setup (KSh 35K)</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">02 · Payments</span>
              <span>Safaricom M-Pesa STK Push</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">03 · Custom</span>
              <span>Bespoke Plugins & Checkout</span>
            </div>
            <div>
              <span className="text-[#059669] font-bold block">04 · Support</span>
              <span>Maintenance & SEO Growth</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / QUICK PROOF SECTION */}
      <section className="py-14 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <span className="text-2xl sm:text-3xl font-black text-[#059669] block">8+ Years</span>
              <span className="text-xs font-mono text-[#52615B] mt-1 block">Engineering Experience</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <span className="text-2xl sm:text-3xl font-black text-[#059669] block">100%</span>
              <span className="text-xs font-mono text-[#52615B] mt-1 block">IP & Code Ownership</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <span className="text-2xl sm:text-3xl font-black text-[#059669] block">Daraja 2.0</span>
              <span className="text-xs font-mono text-[#52615B] mt-1 block">M-Pesa STK Integration</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6]">
              <span className="text-2xl sm:text-3xl font-black text-[#059669] block">Kenya-Wide</span>
              <span className="text-xs font-mono text-[#52615B] mt-1 block">Nairobi HQ · All Counties</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO THIS SERVICE IS FOR */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              Tailored Commercial Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              Build Your Online Store With WooCommerce
            </h2>
            <p className="text-base sm:text-lg text-[#52615B] leading-relaxed">
              Whether you are launching your first online catalog, migrating from manual WhatsApp orders, running a dropshipping store, or managing an established multi-product brand, Dazzcode engineers stores that make buying effortless.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audienceGroups.map((group) => (
              <div
                key={group.title}
                className="p-7 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] flex flex-col justify-between hover:border-[#059669]/40 hover:shadow-lg transition-all duration-200"
              >
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md bg-[#ECFDF5] text-[#059669] text-[11px] font-mono font-bold mb-3">
                    {group.tag}
                  </span>
                  <h3 className="text-xl font-bold text-[#12201B] mb-2">{group.title}</h3>
                  <p className="text-xs sm:text-sm text-[#52615B] leading-relaxed mb-6">{group.desc}</p>
                </div>
                <div className="pt-4 border-t border-[#E2EAE6] space-y-1.5">
                  {group.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#52615B]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE SERVICES SECTION (SIX DETAILED CARDS) */}
      <section id="services" className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              Transparent Capabilities & Packages
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              WooCommerce Services for Kenyan Businesses
            </h2>
            <p className="text-base sm:text-lg text-[#52615B] leading-relaxed">
              Everything you need to launch, customize, protect, and grow your online store. Every package has clear deliverables and transparent pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreServices.map((srv) => (
              <div
                key={srv.title}
                className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] shadow-xs flex flex-col justify-between hover:border-[#059669]/40 hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-xs font-mono text-[#059669] font-bold">
                      {srv.number} · Capability
                    </span>
                    <span className="text-lg font-black text-[#059669] font-mono bg-[#FFFFFF] px-3 py-1 rounded-lg border border-[#E2EAE6]">
                      {srv.price}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-[#12201B] tracking-tight mb-1">
                    {srv.title}
                  </h3>
                  <p className="text-xs font-mono text-[#52615B] mb-4">{srv.priceSubtitle}</p>

                  <p className="text-sm text-[#52615B] leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  <div className="space-y-2.5 mb-6 pt-4 border-t border-[#E2EAE6]">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#12201B] block mb-2">
                      Included Deliverables:
                    </span>
                    {srv.scopeItems.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#52615B] leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#059669] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2EAE6]">
                  <a href={srv.ctaAnchor} className="block w-full">
                    <Button
                      variant="outline"
                      className="w-full h-12 text-xs font-bold uppercase tracking-wider border-[#E2EAE6] bg-[#FFFFFF] hover:bg-[#059669] hover:text-white rounded-xl transition-colors cursor-pointer"
                    >
                      {srv.ctaText}
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TRANSPARENT PRICING GRID */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Transparent Investment
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              Clear WooCommerce Pricing in Kenya
            </h2>
            <p className="text-sm sm:text-base text-[#52615B] leading-relaxed">
              No hidden percentage fees, no surprise hourly overruns. Choose the service tier that matches where your business is today.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#52615B] font-bold block mb-1">Entry Option</span>
                <h3 className="text-xl font-bold text-[#12201B] mb-2">Themes & Templates</h3>
                <p className="text-2xl font-black text-[#059669] font-mono mb-2">From KSh 10,000</p>
                <p className="text-xs text-[#52615B] leading-relaxed mb-5">Ready-to-customize WooCommerce templates for fast, cost-effective store launches in 3–5 days.</p>
                <ul className="space-y-2 text-xs text-[#52615B] border-t border-[#E2EAE6] pt-4">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Brand styling setup</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Mobile responsive layout</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Clean lightweight code</li>
                </ul>
              </div>
              <a href="#lead-form" className="mt-6 block">
                <Button variant="outline" className="w-full text-xs font-bold uppercase tracking-wider border-[#E2EAE6] rounded-xl cursor-pointer">
                  Get Started
                </Button>
              </a>
            </div>

            <div className="p-7 rounded-3xl bg-[#FFFFFF] border-2 border-[#059669] flex flex-col justify-between shadow-md relative">
              <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#059669] text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                Full Store Setup
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#059669] font-bold block mb-1">Complete Package</span>
                <h3 className="text-xl font-bold text-[#12201B] mb-2">Store Development</h3>
                <p className="text-2xl font-black text-[#059669] font-mono mb-2">KSh 35,000</p>
                <p className="text-xs text-[#52615B] leading-relaxed mb-5">Full store launch with domain and hosting included for the 1st year, plus M-Pesa STK Push integration.</p>
                <ul className="space-y-2 text-xs text-[#52615B] border-t border-[#E2EAE6] pt-4">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Domain & 1st Year Hosting</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> M-Pesa STK Push Checkout</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Product catalog & admin training</li>
                </ul>
              </div>
              <a href="#lead-form" className="mt-6 block">
                <Button className="w-full text-xs font-bold uppercase tracking-wider bg-[#059669] text-white hover:bg-[#047857] rounded-xl shadow-sm cursor-pointer">
                  Build My Store
                </Button>
              </a>
            </div>

            <div className="p-7 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#52615B] font-bold block mb-1">Annual Support</span>
                <h3 className="text-xl font-bold text-[#12201B] mb-2">Basic Maintenance</h3>
                <p className="text-2xl font-black text-[#059669] font-mono mb-2">KSh 10,000 <span className="text-xs font-normal text-[#52615B]">/ year</span></p>
                <p className="text-xs text-[#52615B] leading-relaxed mb-5">Continuous site reliability, security patch updates, plugin testing, and uptime monitoring.</p>
                <ul className="space-y-2 text-xs text-[#52615B] border-t border-[#E2EAE6] pt-4">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> WordPress & WooCommerce updates</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Plugin conflict resolution</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Off-site daily backups</li>
                </ul>
              </div>
              <a href="#lead-form" className="mt-6 block">
                <Button variant="outline" className="w-full text-xs font-bold uppercase tracking-wider border-[#E2EAE6] rounded-xl cursor-pointer">
                  Maintain Store
                </Button>
              </a>
            </div>

            <div className="p-7 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#52615B] font-bold block mb-1">Growth Service</span>
                <h3 className="text-xl font-bold text-[#12201B] mb-2">WooCommerce SEO</h3>
                <p className="text-2xl font-black text-[#059669] font-mono mb-2">KSh 20,000 <span className="text-xs font-normal text-[#52615B]">/ month</span></p>
                <p className="text-xs text-[#52615B] leading-relaxed mb-5">Keyword ranking, product page optimization, category hierarchy, and schema markup.</p>
                <ul className="space-y-2 text-xs text-[#52615B] border-t border-[#E2EAE6] pt-4">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Product & Category SEO</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Kenyan keyword research</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Search Console & Schema setup</li>
                </ul>
              </div>
              <a href="#lead-form" className="mt-6 block">
                <Button variant="outline" className="w-full text-xs font-bold uppercase tracking-wider border-[#E2EAE6] rounded-xl cursor-pointer">
                  Start SEO
                </Button>
              </a>
            </div>

            <div className="p-7 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#52615B] font-bold block mb-1">Diagnostic Review</span>
                <h3 className="text-xl font-bold text-[#12201B] mb-2">Code Audit</h3>
                <p className="text-2xl font-black text-[#059669] font-mono mb-2">KSh 20K – 50K</p>
                <p className="text-xs text-[#52615B] leading-relaxed mb-5">Deep investigation of slow queries, plugin errors, security risks, and technical debt.</p>
                <ul className="space-y-2 text-xs text-[#52615B] border-t border-[#E2EAE6] pt-4">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Plugin & theme code review</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Database index & speed audit</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Prioritized action report</li>
                </ul>
              </div>
              <a href="#lead-form" className="mt-6 block">
                <Button variant="outline" className="w-full text-xs font-bold uppercase tracking-wider border-[#E2EAE6] rounded-xl cursor-pointer">
                  Request Audit
                </Button>
              </a>
            </div>

            <div className="p-7 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#52615B] font-bold block mb-1">Tailored Architecture</span>
                <h3 className="text-xl font-bold text-[#12201B] mb-2">Custom WooCommerce</h3>
                <p className="text-2xl font-black text-[#059669] font-mono mb-2">KSh 45K – 200K</p>
                <p className="text-xs text-[#52615B] leading-relaxed mb-5">Bespoke checkouts, custom plugins, subscriptions, memberships, and enterprise API integrations.</p>
                <ul className="space-y-2 text-xs text-[#52615B] border-t border-[#E2EAE6] pt-4">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Custom WooCommerce plugins</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Complex checkout & pricing rules</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> ERP & CRM synchronizations</li>
                </ul>
              </div>
              <a href="#lead-form" className="mt-6 block">
                <Button variant="outline" className="w-full text-xs font-bold uppercase tracking-wider border-[#E2EAE6] rounded-xl cursor-pointer">
                  Discuss Scope
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. KENYAN ECOMMERCE SECTION */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              Local Commercial Reality
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              Built for Kenyan Ecommerce
            </h2>
            <p className="text-base sm:text-lg text-[#52615B] leading-relaxed">
              Ecommerce in Kenya has specific operational realities. If your store does not accommodate how Kenyan customers browse and pay, you lose sales. We design stores specifically around local purchasing behaviors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] border border-[#059669]/20 flex items-center justify-center text-[#059669]">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B]">Mobile-First Shopping</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Over 85% of Kenyan ecommerce shoppers browse on smartphones. We ensure touch-friendly buttons, frictionless mobile carts, and rapid asset loading.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] border border-[#059669]/20 flex items-center justify-center text-[#059669]">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B]">M-Pesa STK Push</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Seamless checkout with instant PIN prompts sent to customers&apos; Safaricom lines, eliminating manual paybill typing and verification delays.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] border border-[#059669]/20 flex items-center justify-center text-[#059669]">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B]">Local Delivery Zones</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Configure accurate shipping rates for Nairobi same-day rider dispatch, parcel couriers, and upcountry delivery to Mombasa, Kisumu, and Nakuru.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] border border-[#059669]/20 flex items-center justify-center text-[#059669]">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B]">Kenyan Shillings (KSh)</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Display clear, transparent pricing in KSh without confusing currency conversions, with optional multi-currency switching for international buyers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] border border-[#059669]/20 flex items-center justify-center text-[#059669]">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B]">Local SEO Signals</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Optimize product titles and descriptions for the natural search queries Kenyan buyers use when looking for items online.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] border border-[#059669]/20 flex items-center justify-center text-[#059669]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12201B]">Trust & Verification</h3>
              <p className="text-xs text-[#52615B] leading-relaxed">
                Visible contact details, clear return policies, SSL encryption, and WhatsApp chat support to build credibility with first-time buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. M-PESA & LOCAL PAYMENTS SECTION */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ECFDF5] border border-[#059669]/20 text-[#059669] text-xs font-mono font-bold uppercase">
                  <span>Safaricom Daraja API 2.0</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
                  M-Pesa & Local Payment Integration
                </h2>
                <p className="text-sm sm:text-base text-[#52615B] leading-relaxed">
                  We integrate native Lipa na M-Pesa STK Push workflows for WooCommerce stores. Instead of asking customers to leave your website, open their SIM toolkit, manually type a Paybill number, and wait for confirmation, our system triggers an instant PIN prompt on their phone and automatically updates your store ledger.
                </p>

                <div className="space-y-2 text-xs sm:text-sm text-[#52615B] pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Instant STK Push prompt dispatched in under 1 second</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Automated C2B webhook callbacks update order status to &quot;Processing&quot;</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Support for Paybill, Buy Goods Till, and B2C automated refunds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Card payments (Visa/Mastercard) and bank transfers integrated seamlessly</span>
                  </div>
                </div>

                <div className="pt-4">
                  <a href="#lead-form">
                    <Button className="h-12 px-6 text-xs font-bold uppercase tracking-wider bg-[#059669] hover:bg-[#047857] text-white rounded-xl shadow-sm cursor-pointer">
                      Ask About M-Pesa Integration →
                    </Button>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-[#E2EAE6] pb-3">
                  <span className="text-xs font-mono font-bold text-[#12201B]">Daraja STK Workflow</span>
                  <span className="text-[10px] font-mono text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded font-bold">Live Callback</span>
                </div>
                <div className="space-y-3 text-xs font-mono text-[#52615B]">
                  <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6]">
                    <span className="text-[#059669] font-bold block">1. Customer Checkout</span>
                    <span className="text-[11px]">Enters Safaricom number: 07XX XXX XXX</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6]">
                    <span className="text-[#059669] font-bold block">2. STK Prompt Fired</span>
                    <span className="text-[11px]">Customer enters PIN on their handset</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#E2EAE6]">
                    <span className="text-[#059669] font-bold block">3. Instant Webhook Settlement</span>
                    <span className="text-[11px]">Safaricom notifies store; stock decremented</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. DROPSHIPPING SECTION */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] block">
                Ecosystem Agnostic
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
                WooCommerce for Dropshipping
              </h2>
              <p className="text-base text-[#52615B] leading-relaxed">
                Dropshipping in Kenya requires high-converting landing pages, fast mobile catalog loading, and reliable order handling. We build standalone WooCommerce dropshipping stores that give you complete brand control without the expensive monthly platform fees and transaction taxes of SaaS platforms.
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-[#52615B] pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Organized product catalogs with variations and high-res imagery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>High-converting single-product landing pages and fast carts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Complete source code and database ownership with zero platform lock-in</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Integrated SEO structure to attract organic shoppers without ad spend</span>
                </div>
              </div>
              <div className="pt-3">
                <a href="#lead-form">
                  <Button className="h-12 px-6 text-xs font-bold uppercase tracking-wider bg-[#059669] hover:bg-[#047857] text-white rounded-xl shadow-sm cursor-pointer">
                    Build My Dropshipping Store →
                  </Button>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] p-7 space-y-4">
              <h3 className="text-lg font-bold text-[#12201B]">Why Dropshippers Choose WooCommerce</h3>
              <div className="space-y-3 text-xs text-[#52615B]">
                <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                  <strong className="text-[#12201B] block mb-0.5">Zero Percentage Commissions</strong>
                  <span>Keep 100% of your retail margins without paying a 2% cut on every transaction.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                  <strong className="text-[#12201B] block mb-0.5">Native M-Pesa Checkout</strong>
                  <span>Allow Kenyan shoppers to pay immediately via M-Pesa without requiring credit cards.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                  <strong className="text-[#12201B] block mb-0.5">Total Customization</strong>
                  <span>Modify checkout fields, add custom upsells, and adjust design freely without restrictions.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PRODUCT & SERVICE SELLERS SECTION */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              Beyond Physical Products
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              WooCommerce for Services, Bookings & Digital Products
            </h2>
            <p className="text-base text-[#52615B] leading-relaxed">
              WooCommerce is not only for clothing and electronics. We build custom commerce architectures for businesses selling appointments, digital assets, subscriptions, and specialized services.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold">
                <Calendar className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-[#12201B] text-sm">Appointments & Bookings</h3>
              <p className="text-[#52615B] leading-relaxed">Doctors, consultants, salons, and car rentals taking scheduled deposits.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold">
                <RefreshCw className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-[#12201B] text-sm">Subscriptions</h3>
              <p className="text-[#52615B] leading-relaxed">Recurring membership clubs, monthly product boxes, and retainer billing.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold">
                <Lock className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-[#12201B] text-sm">Digital Downloads</h3>
              <p className="text-[#52615B] leading-relaxed">E-books, software licenses, audio tracks, and PDF blueprints with secure links.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-[#12201B] text-sm">Course & Packages</h3>
              <p className="text-[#52615B] leading-relaxed">Tiered consulting packages, training cohorts, and gated content access.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. COMMON WOOCOMMERCE PROBLEMS (BEFORE / AFTER) */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              Store Stabilization & Remediation
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              Fix an Existing WooCommerce Store
            </h2>
            <p className="text-base sm:text-lg text-[#52615B] leading-relaxed">
              If your current store has technical debt, slow load speeds, or broken checkout flows, Dazzcode can diagnose the exact issues and get your business back on track.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {commonProblems.map((prob, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] space-y-2">
                <div className="flex items-center gap-1.5 text-amber-600">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                  <h3 className="font-bold text-xs text-[#12201B]">{prob.title}</h3>
                </div>
                <p className="text-[11px] text-[#52615B] leading-relaxed">{prob.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-[#ECFDF5] border border-[#10B981]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-[#12201B] mb-1">
                Is your WooCommerce store holding your business back?
              </h3>
              <p className="text-xs sm:text-sm text-[#52615B]">
                Dazzcode can perform a complete technical code audit, isolate database bottlenecks, and recommend clear remediation steps.
              </p>
            </div>
            <a href="#lead-form" className="shrink-0">
              <Button className="h-12 px-6 text-xs font-bold uppercase tracking-wider bg-[#059669] hover:bg-[#047857] text-white rounded-xl shadow-sm cursor-pointer">
                Request a WooCommerce Audit →
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* 11. PROCESS SECTION */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              Execution Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              How We Build and Maintain Your Store
            </h2>
            <p className="text-base sm:text-lg text-[#52615B] leading-relaxed">
              We follow a structured 6-phase engineering process from initial discovery to long-term scaling, ensuring your store is built on a rock-solid foundation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="p-7 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] space-y-3 shadow-xs"
              >
                <span className="text-xs font-mono font-black text-[#059669] block">
                  STEP {step.step}
                </span>
                <h3 className="text-lg font-bold text-[#12201B]">{step.title}</h3>
                <p className="text-xs sm:text-sm text-[#52615B] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. LOCAL / VPS INFRASTRUCTURE CAPABILITIES */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] block">
                Engineering Beyond Basic Shared Hosting
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
                More Than Just a WordPress Installation
              </h2>
              <p className="text-base text-[#52615B] leading-relaxed">
                A high-volume WooCommerce store cannot run reliably on a cheap $3/month shared hosting account. We provide hardened Linux VPS deployments, Docker orchestration, Nginx caching, and Redis object caching so your store handles thousands of visitors without crashing.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs text-[#52615B] pt-2">
                <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <strong className="text-[#12201B] block">Linux VPS Deployment</strong>
                  <span>Hetzner, DigitalOcean & AWS</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <strong className="text-[#12201B] block">Nginx & FastCGI Cache</strong>
                  <span>Sub-200ms page response</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <strong className="text-[#12201B] block">Redis Object Caching</strong>
                  <span>Zero database deadlocks</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2EAE6]">
                  <strong className="text-[#12201B] block">Automated Backups</strong>
                  <span>Encrypted offsite daily cron</span>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/services/vps-deployment"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#059669] hover:underline"
                >
                  <span>Learn about our Linux VPS Deployment services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-3xl bg-[#12201B] text-[#E2EAE6] p-7 space-y-4 font-mono text-xs shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 text-[11px] text-[#10B981]">
                <span>SERVER_STACK_MONITOR</span>
                <span>STATUS: OPTIMAL</span>
              </div>
              <div className="space-y-2 text-[#E2EAE6]/90">
                <p>❯ OS: Ubuntu 24.04 LTS (Security Hardened)</p>
                <p>❯ Webserver: Nginx 1.26 + Brotli + HTTP/2</p>
                <p>❯ PHP: 8.3-FPM + OPcache JIT Enabled</p>
                <p>❯ Database: MySQL 8.0 / MariaDB with InnoDB Tuning</p>
                <p>❯ Object Cache: Redis 7.2 (Hit Rate: 99.1%)</p>
                <p>❯ SSL: Automated Let&apos;s Encrypt Auto-Renewal</p>
                <p>❯ Firewall: UFW + Fail2ban Intrusion Prevention</p>
              </div>
              <div className="pt-3 border-t border-white/10 text-[10px] text-[#E2EAE6]/60">
                Production-grade hosting architecture engineered for high-concurrency ecommerce.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. WHY DAZZCODE */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              Differentiators
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              Why Dazzcode
            </h2>
            <p className="text-base sm:text-lg text-[#52615B] leading-relaxed">
              We combine software engineering depth, ecommerce business insight, and local payment expertise to build online stores that scale with your ambitions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseDazzcode.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-7 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] space-y-3 shadow-xs hover:border-[#059669]/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] border border-[#059669]/20 flex items-center justify-center text-[#059669]">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#12201B]">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#52615B] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14. WOOCOMMERCE SEO SERVICES IN KENYA */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] block">
                Organic Search Acquisition
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight">
                WooCommerce SEO Services in Kenya
              </h2>
              <p className="text-base text-[#52615B] leading-relaxed">
                Running an online store without SEO means relying entirely on expensive social media ads. We optimize your WooCommerce store to capture high-intent organic searches from customers across Kenya searching for the exact products you sell.
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-[#52615B]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Targeted keyword research for Kenyan commercial queries</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Product and category page title tag & meta description optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>JSON-LD Product, Offer, and BreadcrumbList structured data schema</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Google Search Console indexing audits and canonical tag verification</span>
                </div>
              </div>
              <div className="pt-2">
                <a href="#lead-form">
                  <Button className="h-12 px-6 text-xs font-bold uppercase tracking-wider bg-[#059669] hover:bg-[#047857] text-white rounded-xl shadow-sm cursor-pointer">
                    Start WooCommerce SEO (KSh 20,000/mo) →
                  </Button>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] p-7 space-y-3 text-xs">
              <h3 className="font-bold text-[#12201B] text-sm mb-2">Our SEO Principles:</h3>
              <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                <strong className="text-[#12201B] block">Honest, Data-Led Strategy</strong>
                <span className="text-[#52615B]">We do not make fake promises like &quot;Page 1 in 30 days.&quot; We focus on qualified commercial traffic, technical crawlability, and search visibility.</span>
              </div>
              <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E2EAE6]">
                <strong className="text-[#12201B] block">Technical Foundation</strong>
                <span className="text-[#52615B]">Fast Core Web Vitals, clean internal links, and semantic HTML that search engines can easily index.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. SELECTED WORK / CASE STUDIES */}
      <section className="py-20 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              Proven Delivery
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              Selected Work
            </h2>
            <p className="text-base text-[#52615B] leading-relaxed">
              Explore how Dazzcode engineers high-performance retail and transaction engines for Kenyan and East African commercial operations.
            </p>
          </div>

          <div className="p-8 md:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#059669] block">
                Kenya Commerce Engineering · DazzPOS
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight">
                DazzPOS Retail & Inventory Platform
              </h3>
              <p className="text-sm text-[#52615B] leading-relaxed">
                Offline-first retail POS and inventory management platform operating in active retail outlets across Kenya, featuring sub-second barcode scans and automated Safaricom M-Pesa STK Push payment callbacks.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono text-[#52615B]">
                <span className="px-2.5 py-1 rounded-md bg-[#F8FAF9] border border-[#E2EAE6]">M-Pesa Daraja API</span>
                <span className="px-2.5 py-1 rounded-md bg-[#F8FAF9] border border-[#E2EAE6]">Multi-Store Sync</span>
                <span className="px-2.5 py-1 rounded-md bg-[#F8FAF9] border border-[#E2EAE6]">Sub-50ms Response</span>
              </div>
            </div>
            <Link href="/case-studies/dazzpos" className="shrink-0">
              <Button
                variant="outline"
                className="h-12 px-6 text-xs font-bold uppercase tracking-wider border-[#E2EAE6] hover:bg-[#F1F5F3] rounded-xl text-[#12201B] cursor-pointer"
              >
                Read Case Study
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 16. TESTIMONIALS */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              What Store Owners Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#F8FAF9] border border-[#E2EAE6] flex flex-col justify-between shadow-xs space-y-4"
              >
                <p className="text-xs sm:text-sm text-[#52615B] leading-relaxed italic">
                  &quot;{test.quote}&quot;
                </p>
                <div className="pt-3 border-t border-[#E2EAE6]">
                  <p className="font-bold text-xs text-[#12201B]">{test.author}</p>
                  <p className="text-[11px] text-[#52615B]">{test.role} · {test.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 17. LOCAL GEOGRAPHIC SIGNALS */}
      <section className="py-14 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#059669] block mb-2">
            Nationwide Coverage
          </span>
          <p className="text-sm sm:text-base text-[#52615B] max-w-2xl mx-auto leading-relaxed">
            Headquartered in Nairobi, Dazzcode works remotely and on-site with ecommerce stores, physical retailers, and dropshippers in <strong>Nairobi, Mombasa, Kisumu, Nakuru, Eldoret</strong>, and across all 47 counties in Kenya.
          </p>
        </div>
      </section>

      {/* 18. FAQ SECTION (12 DETAILED FAQS) */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669] mb-3 block">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-[#52615B] leading-relaxed">
              Have questions about WooCommerce pricing, M-Pesa integration, hosting, maintenance, or code audits in Kenya? Find clear, straightforward answers below.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE6] transition-colors open:bg-white open:border-[#059669]/40 shadow-xs"
              >
                <summary className="flex items-center justify-between font-bold text-sm sm:text-base text-[#12201B] cursor-pointer list-none">
                  <span>{faq.question}</span>
                  <span className="text-[#059669] group-open:rotate-180 transition-transform duration-200 shrink-0 ml-4 font-mono font-bold">
                    ↓
                  </span>
                </summary>
                <p className="text-xs sm:text-sm text-[#52615B] leading-relaxed mt-4 pt-4 border-t border-[#E2EAE6]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 19. INTERNAL CROSS-LINKS */}
      <section className="py-16 bg-[#F8FAF9] border-b border-[#E2EAE6]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#52615B] block mb-4">
            Related Software Engineering Capabilities
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs">
            <Link href="/services/saas-development" className="p-3 rounded-xl bg-white border border-[#E2EAE6] hover:border-[#059669] text-[#12201B] font-semibold transition-colors text-center">
              SaaS Development
            </Link>
            <Link href="/services/web-application-development" className="p-3 rounded-xl bg-white border border-[#E2EAE6] hover:border-[#059669] text-[#12201B] font-semibold transition-colors text-center">
              Web Applications
            </Link>
            <Link href="/services/code-audit" className="p-3 rounded-xl bg-white border border-[#E2EAE6] hover:border-[#059669] text-[#12201B] font-semibold transition-colors text-center">
              SaaS Code Audit
            </Link>
            <Link href="/services/saas-scaling" className="p-3 rounded-xl bg-white border border-[#E2EAE6] hover:border-[#059669] text-[#12201B] font-semibold transition-colors text-center">
              SaaS Scaling
            </Link>
            <Link href="/services/vps-deployment" className="p-3 rounded-xl bg-white border border-[#E2EAE6] hover:border-[#059669] text-[#12201B] font-semibold transition-colors text-center">
              VPS Deployment
            </Link>
            <Link href="/blog" className="p-3 rounded-xl bg-white border border-[#E2EAE6] hover:border-[#059669] text-[#12201B] font-semibold transition-colors text-center">
              Engineering Blog
            </Link>
          </div>
        </div>
      </section>

      {/* 20. FINAL CTA & LEAD FORM */}
      <section id="lead-form" className="py-24 bg-[#FFFFFF] relative">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              Start Your Project
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#12201B] tracking-tight mb-4">
              Ready to Build or Improve Your Online Store?
            </h2>
            <p className="text-base text-[#52615B] leading-relaxed">
              Tell us about your business, products, or existing store challenges. We will get back to you with an honest technical review and clear milestone pricing.
            </p>
          </div>

          <WooCommerceLeadForm />
        </div>
      </section>
    </div>
  );
}
