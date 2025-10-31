import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { AppMeta } from '@/types';

interface AppCardProps {
  app: AppMeta;
}

export function AppCard({ app }: AppCardProps) {
  return (
    <article className="group relative flex h-full flex-col rounded-3xl border border-white/5 bg-card/70 p-6 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow">
      <div className="relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-background/30 to-background/90" />
        </div>
        <Image
          alt={`Screenshot of ${app.name}`}
          className="h-48 w-full rounded-2xl object-cover"
          height={300}
          src={app.images[0]}
          width={500}
        />
      </div>
      <div className="mt-6 flex flex-1 flex-col">
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm text-muted-foreground">{app.category}</p>
          <span className="flex items-center gap-1 text-sm font-semibold text-amber-300">
            <Star aria-hidden className="h-4 w-4 fill-amber-300 text-amber-300" />
            {app.rating.toFixed(1)}
          </span>
        </div>
        <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">{app.name}</h3>
        <p className="mt-3 text-sm text-muted-foreground">{app.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {app.features.slice(0, 3).map((feature) => (
            <Badge key={feature} variant="muted">
              {feature}
            </Badge>
          ))}
        </div>
        <div className="mt-6 flex flex-1 items-end justify-between gap-3">
          <div className="space-y-1 text-xs text-muted-foreground">
            <p>{app.priceModel}</p>
            <p>{app.installs} installs</p>
          </div>
          <div className="flex gap-3">
            <Button asChild size="sm">
              <Link href={app.playStoreUrl} rel="noreferrer" target="_blank">
                View on Play Store
              </Link>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <Link href={`/apps/${app.slug}`}>Explore</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
