import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { getApps } from '@/lib/apps';
import { getBlogPostMetadata } from '@/lib/mdx';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseEntries: MetadataRoute.Sitemap = [
    '',
    '/apps',
    '/about',
    '/support',
    '/blog',
    '/privacy',
    '/changelog',
    '/terms',
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const [apps, posts] = await Promise.all([getApps(), getBlogPostMetadata()]);

  const appEntries = apps.map((app) => ({
    url: `${SITE_URL}/apps/${app.slug}`,
    lastModified: new Date(app.releaseDate ?? Date.now()),
  }));

  const blogEntries = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [...baseEntries, ...appEntries, ...blogEntries];
}
