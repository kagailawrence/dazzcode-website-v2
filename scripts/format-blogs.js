const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../content/blog');

const list = [
  {
    file: '10-signs-your-saas-has-technical-debt.mdx',
    title: '10 Warning Signs Your SaaS Has Dangerous Technical Debt', // 9 words
    desc: 'Is technical debt crippling your dev velocity? Learn 10 warning signs that prove your SaaS platform requires an urgent architecture audit and cleanup.' // 150
  },
  {
    file: 'cloud-vs-vps-cost-optimization-for-saas.mdx',
    title: 'Cloud vs VPS: Slashing SaaS Hosting Costs by 85% with Docker', // 11 words
    desc: 'Migrating from AWS and Vercel to a Linux VPS with Docker and Nginx cuts SaaS cloud hosting bills by 85% while improving server response speed, uptime.' // 150
  },
  {
    file: 'how-long-does-it-take-to-build-a-saas.mdx',
    title: 'How Long Does It Take to Build a SaaS Platform?', // 10 words
    desc: 'A complete timeline for building a SaaS product from concept to launch. Learn how agile teams design, build, and ship production MVPs in 4 to 6 weeks.' // 150
  },
  {
    file: 'how-much-does-it-cost-to-build-a-saas-mvp-in-2026.mdx',
    title: 'How Much Does It Cost to Build a SaaS MVP in 2026?', // 12 words
    desc: 'A comprehensive budget guide on SaaS MVP development costs, delivery timelines, scope management, and choosing between freelancers and agency studios.' // 150
  },
  {
    file: 'how-much-does-saas-development-cost-in-kenya.mdx',
    title: 'How Much Does SaaS Development Cost in Kenya in 2026?', // 10 words
    desc: 'Discover realistic SaaS development costs in Kenya. Explore KES pricing for MVPs, M-Pesa Daraja integration, database architecture, and cloud hosting.' // 150
  },
  {
    file: 'how-much-does-saas-development-cost.mdx',
    title: 'How Much Does SaaS Development Cost? A Complete Pricing Guide', // 10 words
    desc: 'A transparent guide to SaaS development costs in 2026. From $3,000 MVPs to enterprise platforms, discover what drives software development price tags.' // 150
  },
  {
    file: 'how-to-audit-a-saas-codebase.mdx',
    title: 'How to Audit a SaaS Codebase: Senior Engineer Technical Checklist', // 10 words
    desc: 'Step-by-step guide to auditing a SaaS codebase. Learn how engineers inspect database queries, security flaws, technical debt, and system architecture.' // 150
  },
  {
    file: 'how-to-build-an-mpesa-enabled-saas-application.mdx',
    title: 'How to Build an M-Pesa Enabled SaaS with Daraja 2.0', // 10 words
    desc: 'Learn how to integrate Safaricom Daraja 2.0 into your SaaS. Implement automated STK Push, secure webhook handlers, and recurring subscription billing.' // 150
  },
  {
    file: 'how-to-deploy-nextjs-on-a-vps.mdx',
    title: 'How to Deploy Next.js on a Linux VPS with Docker', // 10 words
    desc: 'A step-by-step guide to deploying Next.js App Router on an Ubuntu VPS using Docker containers, Nginx reverse proxy, automated SSL, and GitHub Actions.' // 150
  },
  {
    file: 'how-to-hire-a-saas-development-agency.mdx',
    title: 'How to Hire a SaaS Development Agency: The Founder Guide', // 10 words
    desc: 'A founder guide to vetting software agencies for your SaaS. Learn key technical questions, milestone contracts, and how to protect your startup asset.' // 150
  },
  {
    file: 'nextjs-vs-remix-for-saas-2026.mdx',
    title: 'Next.js vs Remix for SaaS in 2026: An Architectural Review', // 10 words
    desc: 'An architectural review of Next.js App Router and Remix for SaaS. Explore React Server Components, form actions, SEO, and true cloud hosting expenses.' // 150
  },
  {
    file: 'postgresql-multi-tenant-architecture-guide.mdx',
    title: 'Building Multi-Tenant SaaS with PostgreSQL: RLS vs Separate Schemas', // 9 words
    desc: 'A technical guide comparing PostgreSQL Row-Level Security, schema-per-tenant, and database-per-tenant models for scalable multi-tenant SaaS platforms.' // 150
  },
  {
    file: 'postgresql-performance-for-saas.mdx',
    title: 'PostgreSQL Performance Optimization for High-Concurrency SaaS Applications', // 7 words
    desc: 'Learn how to eliminate slow queries, optimize B-tree indexes, configure PgBouncer pooling, and tune PostgreSQL for high-traffic modern SaaS platforms.' // 150
  },
  {
    file: 'saas-architecture-checklist-from-mvp-to-scale.mdx',
    title: 'The Ultimate SaaS Architecture Checklist: From MVP to 100k Users', // 10 words
    desc: 'The complete architectural checklist for SaaS teams covering database indexing, multi-tenancy, background queues, caching, security and observability.' // 150
  },
  {
    file: 'what-is-soc2-ready-architecture.mdx',
    title: 'What is SOC2-Ready Architecture? A Technical Guide for SaaS Founders', // 10 words
    desc: 'Learn how to build tenant isolation, RBAC access controls, immutable audit logs, and data encryption into your SaaS to pass enterprise vendor reviews.' // 150
  }
];

let allOk = true;

list.forEach(item => {
  const words = item.title.trim().split(/\s+/).length;
  const chars = item.desc.length;
  const isPerfect = words >= 6 && words <= 12 && chars === 150;
  if (!isPerfect) allOk = false;
  console.log(item.file.padEnd(45), 'Words:', String(words).padStart(2), 'Desc:', chars, isPerfect ? 'PERFECT ✓' : 'FAILED ✗');

  // Update file
  const filePath = path.join(dir, item.file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/title:\s*["'].*["']/, `title: "${item.title}"`);
  content = content.replace(/description:\s*["'].*["']/, `description: "${item.desc}"`);
  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('\nALL 15 EXACTLY 150 CHARS & 6-12 WORDS:', allOk);
