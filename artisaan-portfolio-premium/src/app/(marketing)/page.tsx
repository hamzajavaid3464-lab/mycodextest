import { Suspense } from 'react';
import { HomeHero } from '@/components/sections/home-hero';
import { FeaturedApps } from '@/components/sections/featured-apps';
import { TrustSignals } from '@/components/sections/trust-signals';
import { BlogPreview } from '@/components/sections/blog-preview';
import { ContactCTA } from '@/components/sections/contact-cta';
import { getFeaturedApps } from '@/lib/apps';
import { getAllBlogPosts } from '@/lib/mdx';
import { Skeleton } from '@/components/ui/skeleton';

export const revalidate = 3600;

export default async function HomePage() {
  const [featuredApps, posts] = await Promise.all([getFeaturedApps(), getAllBlogPosts()]);

  return (
    <div className="space-y-0">
      <HomeHero />
      <FeaturedApps apps={featuredApps} />
      <TrustSignals />
      <Suspense fallback={<Skeleton className="container h-64" />}>
        <BlogPreview
          posts={posts.slice(0, 3).map((post) => ({
            slug: post.slug,
            meta: post.meta,
            readingTime: post.readingTime.text,
          }))}
        />
      </Suspense>
      <ContactCTA />
    </div>
  );
}
