// import { Code2, Cpu, Globe, Rocket, Terminal, Zap } from "lucide-react"; // Icons reserved for future use

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string; // ISO format YYYY-MM-DD
    readTime: string;
    category: "Engineering" | "Business" | "Product" | "Growth";
    image?: string; // Optional cover image path
    content: string; // HTML string for flexibility
    tags: string[];
}

export const blogPosts: BlogPost[] = [
    {
        slug: "building-scalable-mvp",
        title: "How to Build a SaaS MVP That Scales (Without Over-Engineering)",
        excerpt: "Most founders start with a monolithic mess. Here's how to structure your MVP for speed today and scale tomorrow using Next.js and Serverless.",
        date: "2024-05-15",
        readTime: "5 min read",
        category: "Engineering",
        tags: ["MVP", "Next.js", "Architecture"],
        image: "/images/blog/building-scalable-mvp.png",
        content: `
      <h2>The Paradox of the MVP</h2>
      <p>Every founder faces the same dilemma: you need to launch fast to validate your idea, but if you cut too many corners, you build "technical debt" that will kill your growth later. The secret isn't to over-engineer, but to pick the right <i>foundation</i>.</p>
      
      <h3>1. Choose a Stack That Grows</h3>
      <p>We recommend <strong>Next.js</strong> for almost every B2B SaaS. Why? Because it handles static marketing pages and dynamic app dashboards in a single framework. You don't need a separate backend (using Server Actions) until you hit messy complexity.</p>

      <h3>2. Database Schema Matters Most</h3>
      <p>Moving buttons is easy. Moving data is hard. Spend 80% of your architecting time on your database schema. Ensure you have a clear <code>tenant_id</code> strategy for multi-tenancy from day one, even if you only have one customer.</p>

      <h3>3. Don't Build Auth or Billing</h3>
      <p>Never build your own authentication or billing system in 2024. Tools like Clerk (for Auth) and Stripe/LemonSqueezy (for Billing) saved us 100+ hours per project. They are secure, compliant, and scale infinitely.</p>

      <h2>Conclusion</h2>
      <p>An MVP shouldn't be "bad code". It should be "focused code". Build less, but build it right.</p>
    `
    },
    {
        slug: "saas-vs-agency-model",
        title: "Why We Pivoted to a Product-First Engagement Model",
        excerpt: "The traditional agency model is broken for startups. Hourly billing incentives inefficiencies. Here is why we focus on outcome-based product partnerships.",
        date: "2024-06-02",
        readTime: "4 min read",
        category: "Business",
        tags: ["Strategy", "Business Model"],
        image: "/images/blog/saas-vs-agency-model.png",
        content: `
      <h2>The Problem with "Hourly"</h2>
      <p>When you hire a developer on an hourly rate, their incentive is to take longer. When you hire a fixed-price agency, their incentive is to do the bare minimum to get signed off. Neither aligns with <strong>your</strong> goal: a successful, growing product.</p>
      
      <h3>The Dazzcode Way: Product Partnership</h3>
      <p>We view ourselves as co-builders. We define success metrics (e.g., successful launch, passing a load test, user retention) rather than just "hours coded".</p>
      
      <ul>
        <li><strong>Risk Sharing:</strong> We are invested in the code quality because we often maintain it.</li>
        <li><strong>Strategic Input:</strong> We say "no" to bad features that bloat the MVP.</li>
        <li><strong>Long-term Vision:</strong> We write documentation and tests assuming we'll be reading them 2 years from now.</li>
      </ul>

      <p>This shift has allowed our clients to raise funding and scale faster, because they have a technical partner, not just a freelancer.</p>
    `
    },
    {
        slug: "nextjs-server-actions-guide",
        title: "Why We Switched to Server Actions for All Form Handling",
        excerpt: "React Server Actions simplify the data mutation story significantly. No more API routes for simple contact forms or updates. Here is our pattern.",
        date: "2024-06-20",
        readTime: "6 min read",
        category: "Engineering",
        tags: ["Code", "React", "Tutorial"],
        image: "/images/blog/nextjs-server-actions-guide.png",
        content: `
      <h2>Goodbye, API Routes</h2>
      <p>Before Next.js 14, handling a simple contact form meant creating an API route <code>/api/contact</code>, handling JSON parsing, validation, and response codes. Then the frontend had to manage loading states, fetch requests, and error parsing.</p>
      
      <p><strong>Server Actions</strong> change the game. You define a function that runs on the server, and call it directly from your button or form.</p>

      <h3>Type-Safe by Default</h3>
      <p>Because the action is just a function, you get end-to-end type safety without generating complex types or using TRPC (though TRPC is great too). Zod validation happens right inside the action.</p>

      <h3>Progressive Enhancement</h3>
      <p>Forms work even before JavaScript loads (if designed correctly), making your SaaS feel instant and robust.</p>
      
      <p>We now use Server Actions for:</p>
      <ul>
        <li>Login/Register flows</li>
        <li>Data mutations (Create/Update/Delete)</li>
        <li>Stripe Checkout session generation</li>
      </ul>
    `
    }
];

export const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
export const allCategories = Array.from(new Set(blogPosts.map(post => post.category)));
