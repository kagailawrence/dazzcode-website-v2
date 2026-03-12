import fs from 'fs';
import path from 'path';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  publishedAt: string;
  author: string;
  category: string;
  readTime: string;
}

const blogsDirectory = path.join(process.cwd(), 'content/blog');

export function getPostSlugs() {
  if (!fs.existsSync(blogsDirectory)) return [];
  return fs.readdirSync(blogsDirectory);
}

export function getPostBySlug(slug: string): BlogPost | null {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(blogsDirectory, `${realSlug}.mdx`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Robust regex to parse frontmatter without an external dependency
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContents);

  const content = fileContents.replace(frontmatterRegex, '').trim();

  const data: Record<string, string> = {};

  if (match && match[1]) {
    const lines = match[1].split('\n');
    lines.forEach(line => {
      const split = line.indexOf(':');
      if (split > 0) {
        const key = line.substring(0, split).trim();
        let value = line.substring(split + 1).trim();
        // remove quotes if present
        value = value.replace(/^["'](.*)["']$/, '$1');
        data[key] = value;
      }
    });
  }

  // Calculate a rough reading time based on 200 words per minute
  const words = content.split(/\s+/).length;
  const readingTime = Math.ceil(words / 200);

  return {
    slug: realSlug,
    title: data.title || realSlug,
    description: data.description || '',
    publishedAt: data.publishedAt || new Date().toISOString(),
    author: data.author || 'Dazzcode Team',
    category: data.category || 'General',
    readTime: `${readingTime} min read`,
    content: content,
  };
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((post1, post2) => (post1.publishedAt > post2.publishedAt ? -1 : 1));
  return posts;
}

export const allCategories = Array.from(
  new Set(getAllPosts().map(post => post.category))
);
