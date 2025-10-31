import Link from 'next/link';
import { SectionHeader } from '@/components/layout/section-header';
import { BlogCard } from '@/components/cards/blog-card';
import type { BlogFrontmatter } from '@/types';

interface BlogPreviewProps {
  posts: Array<{ slug: string; meta: BlogFrontmatter; readingTime: string }>;
}

export function BlogPreview({ posts }: BlogPreviewProps) {
  return (
    <section className="container space-y-12 py-24">
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <SectionHeader
          align="left"
          description="Long-form reflections on Android craft, motion design, and scaling premium experiences."
          eyebrow="Studio logbook"
          title="Latest insights"
        />
        <Link className="text-sm font-medium text-primary" href="/blog">
          View all stories →
        </Link>
      </div>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} meta={post.meta} readingTime={post.readingTime} slug={post.slug} />
        ))}
      </div>
    </section>
  );
}
