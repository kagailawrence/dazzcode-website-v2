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
    date: "2025-05-15",
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
    date: "2025-06-02",
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
    date: "2025-06-20",
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
  },
  {
    slug: "jobs-to-be-done-disruptive-innovation",
    title: "Why 'Better' Features Won't Save You: The Innovator's Dilemma in SaaS",
    excerpt: "Are you building faster horses or solving the core Job to be Done? We explore Clay Christensen's frameworks and how they dictate the survival of your SaaS.",
    date: "2026-01-01",
    readTime: "7 min read",
    category: "Business",
    tags: ["Strategy", "Innovation", "HBS"],
    image: "/images/blog/jobs-to-be-done.png",
    content: `
      <h2>The Trap of "Sustaining Innovation"</h2>
      <p>Most SaaS founders fall into the trap of <strong>Sustaining Innovation</strong>: they look at a competitor, list their features, and try to build a "better" version. Better UI, slightly faster, one extra integration.</p>
      
      <p>According to Harvard Business School logic, this is a losing battle for an entrant. Incumbents <i>always</i> win sustaining battles because they have more resources to throw at "better". To win, you need <strong>Disruptive Innovation</strong>.</p>

      <h2>1. Jobs to be Done (JTBD)</h2>
      <p>Clay Christensen famously taught: <i>"Customers don't buy products; they hire them to do a job."</i></p>
      
      <p>When a user signs up for your SaaS, they aren't buying "database management". They are hiring you to <strong>"reduce the anxiety of losing customer data"</strong> or <strong>"impress their boss with a quarterly report"</strong>.</p>
      
      <p><strong>The Milkshake Example:</strong> A fast-food chain tried to improve their milkshakes by making them thicker and sweeter. Sales didn't move. When they analyzed the <i>job</i>, they found people hired milkshakes at 8:00 AM to make their boring commute interesting. The competitor wasn't another milkshake; it was a banana or a bagel.</p>
      
      <h3>Applying this to Code:</h3>
      <p>Don't build features. Build "Resume enhancements" for your users. If your dashboard helps a mid-level manager show ROI to their VP, that is the job. optimize for <i>that</i> output, not just "cleaner charts".</p>

      <h2>2. Low-End Disruption</h2>
      <p>Disruption rarely comes from the high end. It comes from the bottom. Disruptive innovations are usually <strong>simpler, cheaper, and more accessible</strong> than the status quo, appealing to "non-consumers".</p>
      
      <p><strong>Salesforce</strong> didn't disrupt Siebel Systems by being more powerful. It disrupted them by being "good enough" for small businesses that couldn't afford a $1M on-premise server. By the time Siebel woke up, Salesforce had moved upmarket.</p>

      <h2>Conclusion: De-Risking Your Build</h2>
      <p>At Dazzcode, we don't just take a spec sheet. We ask: <strong>"What is the Job to be Done?"</strong> and <strong>"Are we over-serving or under-serving the market?"</strong>.</p>
      
      <p>If you build a feature-rich clone of a market leader, you will fail. If you build a simple tool that allows non-consumers to do a job they couldn't do before, you build a monopoly.</p>
    `
  }
];

export const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
export const allCategories = Array.from(new Set(blogPosts.map(post => post.category)));
