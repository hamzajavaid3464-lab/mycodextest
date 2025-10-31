import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAppBySlug, getApps } from '@/lib/apps';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/layout/section-header';
import { getMobileAppJsonLd } from '@/lib/structured-data';
import { SITE_URL } from '@/lib/constants';

interface AppPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const apps = await getApps();
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: AppPageProps): Promise<Metadata> {
  const app = await getAppBySlug(params.slug);
  if (!app) return {};

  const title = `${app.name} · Artisaan`;
  const description = app.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/apps/${app.slug}`,
      images: app.images.map((url) => ({ url, width: 1200, height: 675, alt: app.name })),
    },
    alternates: {
      canonical: `/apps/${app.slug}`,
    },
  };
}

export default async function AppPage({ params }: AppPageProps) {
  const app = await getAppBySlug(params.slug);

  if (!app) {
    notFound();
  }

  const currentApp = app;

  const jsonLd = getMobileAppJsonLd({
    name: currentApp.name,
    description: currentApp.description,
    playStoreUrl: currentApp.playStoreUrl,
    category: currentApp.category,
    rating: currentApp.rating,
  });

  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden border-b border-white/5 bg-gradient-to-br from-background to-slate-900/50 py-24">
        <div className="container grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-8">
            <SectionHeader align="left" description={currentApp.description} eyebrow={currentApp.category} title={currentApp.name} />
            <div className="flex flex-wrap gap-2">
              {currentApp.features.map((feature) => (
                <Badge key={feature} variant="muted">
                  {feature}
                </Badge>
              ))}
            </div>
            <div className="grid gap-4 text-sm text-muted-foreground md:grid-cols-2">
              <div>
                <p className="font-semibold text-foreground">Rating</p>
                <p>{currentApp.rating.toFixed(1)} average • {currentApp.installs} installs</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Monetization</p>
                <p>{currentApp.priceModel}</p>
              </div>
              {currentApp.techStack ? (
                <div>
                  <p className="font-semibold text-foreground">Tech stack</p>
                  <p>{currentApp.techStack.join(' • ')}</p>
                </div>
              ) : null}
              {currentApp.supportEmail ? (
                <div>
                  <p className="font-semibold text-foreground">Support</p>
                  <Link className="text-primary underline underline-offset-4" href={`mailto:${currentApp.supportEmail}`}>
                    {currentApp.supportEmail}
                  </Link>
                </div>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={currentApp.playStoreUrl} rel="noreferrer" target="_blank">
                  View on Play Store
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link href={currentApp.privacyPolicyUrl}>Privacy policy</Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link href="/support">Support</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6">
            {currentApp.images.map((image) => (
              <div key={image} className="overflow-hidden rounded-3xl border border-white/10">
                <Image alt={`${currentApp.name} screen`} className="h-72 w-full object-cover" height={400} src={image} width={600} />
              </div>
            ))}
          </div>
        </div>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          type="application/ld+json"
        />
      </section>
      <section className="container space-y-10 pb-24">
        <h2 className="font-display text-3xl font-semibold">Latest updates</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[1, 2, 3].map((idx) => (
            <div key={idx} className="rounded-3xl border border-white/5 bg-card/60 p-6 text-sm text-muted-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Release {idx}</p>
              <p className="mt-2 font-display text-xl text-foreground">Performance polish &amp; delight</p>
              <p className="mt-3">
                We shipped new motion-crafted transitions, reduced app startup time by 35%, and introduced privacy-first analytics instrumentation.
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.3em]">Updated {new Date(Date.now() - idx * 86400000).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
