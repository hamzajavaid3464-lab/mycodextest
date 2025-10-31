import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypePrism from 'rehype-prism-plus';
import readingTime from 'reading-time';
import type { ReactElement } from 'react';
import type { BlogFrontmatter } from '@/types';
import { mdxComponents } from '@/components/mdx/mdx-components';
import { formatDate } from './utils';

const blogDir = path.join(process.cwd(), 'src', 'content', 'blog');

export interface MdxContent<T = Record<string, unknown>> {
  meta: T;
  readingTime: ReturnType<typeof readingTime>;
  content: ReactElement;
}

export async function getBlogSlugs() {
  const files = await fs.readdir(blogDir);
  return files.filter((file) => file.endsWith('.mdx')).map((file) => file.replace(/\.mdx$/, ''));
}

export async function getBlogPost(slug: string): Promise<MdxContent<BlogFrontmatter> & { slug: string }> {
  const filePath = path.join(blogDir, `${slug}.mdx`);
  const source = await fs.readFile(filePath, 'utf-8');
  const { content, data } = matter(source);
  const frontmatter = data as BlogFrontmatter;
  const rt = readingTime(content);
  const { content: compiledContent } = await compileMDX<{ frontmatter: BlogFrontmatter }>({
    source: content,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, [rehypePrism, { ignoreMissing: true }]],
      },
    },
  });

  return {
    slug,
    meta: frontmatter,
    readingTime: rt,
    content: compiledContent,
  };
}

export async function getAllBlogPosts() {
  const slugs = await getBlogSlugs();
  const posts = await Promise.all(slugs.map((slug) => getBlogPost(slug)));
  return posts.sort((a, b) =>
    new Date(b.meta.publishedAt).getTime() - new Date(a.meta.publishedAt).getTime(),
  );
}

export async function getBlogPostMetadata() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
    ...post.meta,
    readingTime: post.readingTime.text,
    formattedDate: formatDate(post.meta.publishedAt),
  }));
}
