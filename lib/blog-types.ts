export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  htmlContent: string;
  publishedAt: string;
  author: string;
  category: string;
  readTime: string;
  tableOfContents: { id: string; text: string; level: number }[];
}

export const allCategories = [
  "All",
  "SaaS Development",
  "Code Audit",
  "Engineering",
  "Infrastructure",
  "Kenya Tech",
];
