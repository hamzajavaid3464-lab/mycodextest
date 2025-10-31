import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import type { BlogFrontmatter } from '@/types';
import { formatDate } from '@/lib/utils';

interface BlogCardProps {
  slug: string;
  meta: BlogFrontmatter;
  readingTime: string;
}

export function BlogCard({ slug, meta, readingTime }: BlogCardProps) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-3xl border border-white/5 bg-card/70 p-6 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow">
      {meta.coverImage ? (
        <div className="overflow-hidden rounded-2xl">
          <Image alt={meta.title} className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.05]" height={240} src={meta.coverImage} width={480} />
        </div>
      ) : null}
      <div className="mt-6 flex flex-1 flex-col">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
          <span>{formatDate(meta.publishedAt)}</span>
          <span>•</span>
          <span>{readingTime}</span>
        </div>
        <Link className="mt-3 font-display text-2xl font-semibold text-foreground" href={`/blog/${slug}`}>
          {meta.title}
        </Link>
        <p className="mt-3 text-sm text-muted-foreground">{meta.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {meta.tags.map((tag) => (
            <Badge key={tag} variant="muted">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <Link className="mt-6 inline-flex items-center text-sm font-semibold text-primary" href={`/blog/${slug}`}>
        Read story →
      </Link>
    </article>
  );
}
