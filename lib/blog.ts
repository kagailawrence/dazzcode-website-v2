import fs from 'fs';
import path from 'path';
import { BlogPost, allCategories } from './blog-types';

export type { BlogPost };
export { allCategories };

const blogsDirectory = path.join(process.cwd(), 'content/blog');

export function getPostSlugs() {
  if (!fs.existsSync(blogsDirectory)) return [];
  return fs.readdirSync(blogsDirectory);
}

// Simple and robust markdown to HTML parser
function parseMarkdownToHtml(markdown: string): { html: string; toc: { id: string; text: string; level: number }[] } {
  const toc: { id: string; text: string; level: number }[] = [];
  
  // Split into lines for line-by-line / block processing
  const lines = markdown.split('\n');
  const output: string[] = [];
  let inCodeBlock = false;
  let codeLanguage = '';
  let codeContent: string[] = [];
  let inList = false;
  let listType: 'ul' | 'ol' = 'ul';
  let inTable = false;
  let tableRows: string[][] = [];

  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const formatInline = (text: string) => {
    // Links: [text](url)
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#059669] font-semibold hover:underline decoration-2 underline-offset-2">$1</a>');
    // Bold: **text** or __text__
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[#12201B]">$1</strong>');
    text = text.replace(/__(.*?)__/g, '<strong class="font-bold text-[#12201B]">$1</strong>');
    // Italic: *text* or _text_
    text = text.replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>');
    text = text.replace(/_([^_]+)_/g, '<em class="italic">$1</em>');
    // Inline code: `code`
    text = text.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded-md bg-[#F1F5F3] border border-[#E2EAE6] text-xs font-mono text-[#059669]">$1</code>');
    return text;
  };

  const closeList = () => {
    if (inList) {
      output.push(listType === 'ul' ? '</ul>' : '</ol>');
      inList = false;
    }
  };

  const closeTable = () => {
    if (inTable && tableRows.length > 0) {
      let tableHtml = '<div class="overflow-x-auto my-6 rounded-2xl border border-[#E2EAE6] bg-[#FFFFFF] shadow-xs"><table class="w-full text-left text-sm text-[#52615B]">';
      
      const headerRow = tableRows[0];
      tableHtml += '<thead class="bg-[#F8FAF9] text-xs uppercase font-mono font-bold text-[#12201B] border-b border-[#E2EAE6]"><tr>';
      headerRow.forEach(cell => {
        tableHtml += `<th class="px-5 py-3.5">${formatInline(cell.trim())}</th>`;
      });
      tableHtml += '</tr></thead><tbody>';

      for (let i = 1; i < tableRows.length; i++) {
        const row = tableRows[i];
        tableHtml += '<tr class="border-b border-[#E2EAE6] last:border-b-0 hover:bg-[#F8FAF9]/60 transition-colors">';
        row.forEach(cell => {
          tableHtml += `<td class="px-5 py-3.5">${formatInline(cell.trim())}</td>`;
        });
        tableHtml += '</tr>';
      }

      tableHtml += '</tbody></table></div>';
      output.push(tableHtml);
      inTable = false;
      tableRows = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code block handling
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        output.push(`<div class="my-6 rounded-2xl bg-[#12201B] text-[#E2EAE6] p-5 overflow-x-auto border border-[#23332D] shadow-md font-mono text-xs leading-relaxed"><div class="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[10px] uppercase text-[#10B981] font-bold tracking-wider"><span>${codeLanguage || 'CODE'}</span><span>BASH/TYPESCRIPT</span></div><pre><code>${codeContent.join('\n')}</code></pre></div>`);
        inCodeBlock = false;
        codeContent = [];
        codeLanguage = '';
      } else {
        closeList();
        closeTable();
        inCodeBlock = true;
        codeLanguage = line.trim().slice(3).trim();
      }
      continue;
    }

    if (inCodeBlock) {
      // Escape HTML in code blocks
      const escaped = line
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      codeContent.push(escaped);
      continue;
    }

    // Horizontal Rule
    if (line.trim() === '---' || line.trim() === '***' || line.trim() === '___') {
      closeList();
      closeTable();
      output.push('<hr class="my-10 border-t border-[#E2EAE6]" />');
      continue;
    }

    // Table rows
    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      closeList();
      const cells = line.split('|').slice(1, -1);
      // Check if separator line (|---|---|)
      if (cells.every(c => /^[\s-:]+$/.test(c))) {
        continue;
      }
      if (!inTable) {
        inTable = true;
        tableRows = [];
      }
      tableRows.push(cells);
      continue;
    } else {
      closeTable();
    }

    // Headings
    if (line.startsWith('#### ')) {
      closeList();
      const text = line.replace('#### ', '').trim();
      const id = slugify(text);
      toc.push({ id, text, level: 4 });
      output.push(`<h4 id="${id}" class="text-lg font-bold text-[#12201B] tracking-tight mt-8 mb-3 scroll-mt-28">${formatInline(text)}</h4>`);
      continue;
    }

    if (line.startsWith('### ')) {
      closeList();
      const text = line.replace('### ', '').trim();
      const id = slugify(text);
      toc.push({ id, text, level: 3 });
      output.push(`<h3 id="${id}" class="text-xl md:text-2xl font-black text-[#12201B] tracking-tight mt-10 mb-4 scroll-mt-28">${formatInline(text)}</h3>`);
      continue;
    }

    if (line.startsWith('## ')) {
      closeList();
      const text = line.replace('## ', '').trim();
      const id = slugify(text);
      toc.push({ id, text, level: 2 });
      output.push(`<h2 id="${id}" class="text-2xl md:text-3xl font-black text-[#12201B] tracking-tight mt-12 mb-5 pb-2 border-b border-[#E2EAE6] scroll-mt-28">${formatInline(text)}</h2>`);
      continue;
    }

    // Blockquotes
    if (line.startsWith('> ')) {
      closeList();
      const text = line.replace(/^>\s*/, '').trim();
      output.push(`<blockquote class="my-6 pl-5 border-l-4 border-[#059669] bg-[#ECFDF5]/60 py-3.5 pr-4 rounded-r-xl text-[#12201B] italic text-base leading-relaxed font-medium">${formatInline(text)}</blockquote>`);
      continue;
    }

    // Unordered list
    if (/^\s*[-*]\s+/.test(line)) {
      if (!inList || listType !== 'ul') {
        closeList();
        inList = true;
        listType = 'ul';
        output.push('<ul class="my-5 space-y-2.5 text-sm md:text-base text-[#52615B] pl-2">');
      }
      const itemText = line.replace(/^\s*[-*]\s+/, '');
      output.push(`<li class="flex items-start gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-[#059669] mt-2 shrink-0"></span><span>${formatInline(itemText)}</span></li>`);
      continue;
    }

    // Ordered list
    if (/^\s*\d+\.\s+/.test(line)) {
      if (!inList || listType !== 'ol') {
        closeList();
        inList = true;
        listType = 'ol';
        output.push('<ol class="my-5 space-y-2.5 text-sm md:text-base text-[#52615B] list-decimal pl-6">');
      }
      const itemText = line.replace(/^\s*\d+\.\s+/, '');
      output.push(`<li class="pl-1">${formatInline(itemText)}</li>`);
      continue;
    }

    // Empty line closes lists
    if (!line.trim()) {
      closeList();
      continue;
    }

    // Regular paragraph
    closeList();
    output.push(`<p class="my-4 text-base md:text-lg text-[#52615B] leading-relaxed font-normal">${formatInline(line)}</p>`);
  }

  closeList();
  closeTable();

  return { html: output.join('\n'), toc };
}

export function getPostBySlug(slug: string): BlogPost | null {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(blogsDirectory, `${realSlug}.mdx`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Robust regex to parse frontmatter without external dependencies
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContents);

  const rawContent = fileContents.replace(frontmatterRegex, '').trim();

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

  // Calculate rough reading time based on 200 words per minute
  const words = rawContent.split(/\s+/).length;
  const readingTime = Math.ceil(words / 200);

  const { html, toc } = parseMarkdownToHtml(rawContent);

  return {
    slug: realSlug,
    title: data.title || realSlug,
    description: data.description || '',
    publishedAt: data.publishedAt || new Date().toISOString(),
    author: data.author || 'Dazzcode Engineering Team',
    category: data.category || 'Engineering',
    readTime: `${readingTime} min read`,
    content: rawContent,
    htmlContent: html,
    tableOfContents: toc,
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
