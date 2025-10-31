import Link from 'next/link';
import { SectionHeader } from '@/components/layout/section-header';
import { getBlogPostMetadata } from '@/lib/mdx';
import { Badge } from '@/components/ui/badge';

export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getBlogPostMetadata();

  return (
    <div className="container space-y-12 py-24">
      <SectionHeader
        align="left"
        description="Long-form notes on Android craft, motion systems, and scaling elegant mobile experiences."
        eyebrow="Studio logbook"
        title="Stories from the workshop"
      />
      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-10">
          {posts.map((post) => (
            <article key={post.slug} className="group rounded-3xl border border-white/5 bg-card/60 p-8 shadow-glass-lg backdrop-blur">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                <span>{post.formattedDate}</span>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>
              <Link className="mt-3 block font-display text-3xl font-semibold text-foreground" href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
              <p className="mt-3 text-sm text-muted-foreground">{post.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="muted">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Link className="mt-6 inline-flex items-center text-sm font-semibold text-primary" href={`/blog/${post.slug}`}>
                Read story →
              </Link>
            </article>
          ))}
        </div>
        <aside className="space-y-8 rounded-3xl border border-white/5 bg-card/40 p-8 text-sm text-muted-foreground">
          <h2 className="font-display text-xl text-foreground">Subscribe for release notes</h2>
          <p>
            Get a quarterly dispatch on new releases, behind-the-scenes process, and thoughtful Android craft delivered to your inbox.
          </p>
          <form className="space-y-3" method="post">
            <input
              aria-label="Email"
              className="h-11 w-full rounded-2xl border border-white/10 bg-background/60 px-3 text-sm text-foreground"
              placeholder="you@company.com"
              required
              type="email"
            />
            <button className="w-full rounded-2xl border border-primary/40 bg-primary/20 py-3 text-sm font-semibold text-primary transition hover:bg-primary/30" type="submit">
              Join the list
            </button>
          </form>
          <p className="text-xs text-muted-foreground/80">
            By subscribing, you agree to our{' '}
            <Link className="text-primary underline" href="/privacy">
              privacy policy
            </Link>
            .
          </p>
        </aside>
      </div>
    </div>
  );
}
