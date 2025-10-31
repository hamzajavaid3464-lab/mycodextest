import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts, getBlogPost } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';
import { SectionHeader } from '@/components/layout/section-header';
import { SITE_URL } from '@/lib/constants';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.summary,
    openGraph: {
      title: post.meta.title,
      description: post.meta.summary,
      url: `${SITE_URL}/blog/${post.slug}`,
      images: post.meta.coverImage ? [{ url: post.meta.coverImage, width: 1200, height: 675 }] : undefined,
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug).catch(() => undefined);

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-4xl space-y-10 py-24">
      <SectionHeader
        align="left"
        description={`${post!.meta.summary}`}
        eyebrow={`${formatDate(post!.meta.publishedAt)} • ${post!.readingTime.text}`}
        title={post!.meta.title}
      />
      <div className="prose prose-invert mx-auto max-w-none text-base">
        {post!.content}
      </div>
      <div className="flex items-center justify-between border-t border-white/10 pt-6 text-sm text-muted-foreground">
        <Link href="/blog">← Back to all posts</Link>
        <Link href="/rss.xml">Subscribe via RSS</Link>
      </div>
    </article>
  );
}
