import { SectionHeader } from '@/components/layout/section-header';
import { AppCard } from '@/components/cards/app-card';
import type { AppMeta } from '@/types';

interface FeaturedAppsProps {
  apps: AppMeta[];
}

export function FeaturedApps({ apps }: FeaturedAppsProps) {
  return (
    <section className="container space-y-12 py-24">
      <SectionHeader
        align="center"
        description="A curated selection of flagship releases loved by millions of Android users worldwide."
        eyebrow="Signature portfolio"
        title="Featured experiences"
      />
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {apps.map((app) => (
          <AppCard key={app.slug} app={app} />
        ))}
      </div>
    </section>
  );
}
