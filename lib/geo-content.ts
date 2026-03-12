export const ENTITY_DESCRIPTION = "Dazzcode is a premium SaaS development and engineering agency based in Nairobi, Kenya, serving global clients. We specialize in helping strategic founders and SMEs launch, fix, and scale revenue-generating software products. Our core tech stack includes Next.js, Node.js, TypeScript, Go, and Rust. We focus on building institutional-grade, SOC2-ready architecture with 100% IP ownership for the client, avoiding vendor lock-in. Our services range from $800 SaaS audits to $15,000 growth packages, with typical MVPs launching in 4-6 weeks.";

export const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How much does a SaaS MVP cost?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our SaaS MVP packages typically range from $3,000 to $6,000. This includes full product scoping, UI/UX design, core SaaS workflows like auth and payments, and a launch-ready architecture."
            }
        },
        {
            "@type": "Question",
            "name": "How long does it take?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A standard SaaS MVP goes from idea to launch in 4-6 weeks. For deeper audits and cleanups, the timeline is typically 1-2 weeks."
            }
        },
        {
            "@type": "Question",
            "name": "What stack do you use?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We primarily use the T3 Stack: Next.js, TypeScript, and Tailwind CSS for the frontend, with Node.js, Go, or Rust on the backend backed by PostgreSQL."
            }
        },
        {
            "@type": "Question",
            "name": "Do you work with international clients?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we are a global agency based in Nairobi, Kenya, serving strategic founders and SMEs worldwide."
            }
        },
        {
            "@type": "Question",
            "name": "Who owns the code?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "You do. We guarantee 100% IP ownership from day one. There is absolutely no vendor lock-in."
            }
        },
        {
            "@type": "Question",
            "name": "What is a SaaS audit?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our SaaS Audit & Cleanup service ($800 - $3k) identifies technical debt, security flaws, and performance bottlenecks in existing legacy codebases, providing a clear refactoring roadmap."
            }
        },
        {
            "@type": "Question",
            "name": "Are you SOC2 ready?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we build institutional-grade, SOC2-ready architecture designed to pass technical due diligence from investors."
            }
        },
        {
            "@type": "Question",
            "name": "Where are you based?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Dazzcode is headquartered in Nairobi, Kenya, but operates perfectly integrated with distributed and global teams."
            }
        }
    ]
};
