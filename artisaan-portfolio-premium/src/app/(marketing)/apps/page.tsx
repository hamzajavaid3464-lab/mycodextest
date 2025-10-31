import Link from 'next/link';
import { Suspense } from 'react';
import { AppCard } from '@/components/cards/app-card';
import { SectionHeader } from '@/components/layout/section-header';
import { EmptyState } from '@/components/ui/empty-state';
import { Pagination } from '@/components/ui/pagination';
import { Skeleton } from '@/components/ui/skeleton';
import { getApps } from '@/lib/apps';
import type { AppMeta } from '@/types';

interface AppsPageProps {
  searchParams: Record<string, string | string[] | undefined>;
}

const PAGE_SIZE = 6;

function filterApps(apps: AppMeta[], params: AppsPageProps['searchParams']) {
  const search = typeof params.search === 'string' ? params.search.toLowerCase() : '';
  const category = typeof params.category === 'string' ? params.category : 'all';
  const price = typeof params.price === 'string' ? params.price : 'all';
  const sort = typeof params.sort === 'string' ? params.sort : 'recent';

  let filtered = apps.filter((app) => {
    const matchesSearch = search
      ? [app.name, app.description, app.features.join(' ')].some((value) =>
          value.toLowerCase().includes(search),
        )
      : true;
    const matchesCategory = category === 'all' ? true : app.category.toLowerCase() === category.toLowerCase();
    const matchesPrice =
      price === 'all'
        ? true
        : price === 'free'
        ? /free/i.test(app.priceModel)
        : price === 'paid'
        ? /subscription|paid/i.test(app.priceModel)
        : true;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  filtered = filtered.sort((a, b) => {
    switch (sort) {
      case 'rating':
        return b.rating - a.rating;
      case 'installs': {
        const installsA = parseInt(a.installs.replace(/\D/g, ''), 10) || 0;
        const installsB = parseInt(b.installs.replace(/\D/g, ''), 10) || 0;
        return installsB - installsA;
      }
      case 'recent':
      default:
        return new Date(b.releaseDate ?? 0).getTime() - new Date(a.releaseDate ?? 0).getTime();
    }
  });

  return filtered;
}

export default async function AppsPage({ searchParams }: AppsPageProps) {
  const apps = await getApps();
  const filteredApps = filterApps(apps, searchParams);
  const page = Number(searchParams.page ?? 1);
  const totalPages = Math.ceil(filteredApps.length / PAGE_SIZE) || 1;
  const paginated = filteredApps.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="container space-y-12 py-24">
      <SectionHeader
        align="left"
        description="Search, sort, and explore Artisaan apps engineered for clarity, speed, and delight."
        eyebrow="App library"
        title="Explore the portfolio"
      />
      <div className="grid gap-6 rounded-3xl border border-white/5 bg-card/50 p-6 backdrop-blur lg:grid-cols-[320px_1fr]">
        <aside className="space-y-6">
          <form className="space-y-4" method="get">
            <input
              aria-label="Search apps"
              className="h-12 w-full rounded-2xl border border-white/10 bg-background/70 px-4 text-sm text-foreground"
              defaultValue={typeof searchParams.search === 'string' ? searchParams.search : ''}
              name="search"
              placeholder="Search apps"
              type="search"
            />
            <div className="grid gap-4">
              <label className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">Category</label>
              <select
                className="h-12 rounded-2xl border border-white/10 bg-background/70 px-4 text-sm text-foreground"
                defaultValue={typeof searchParams.category === 'string' ? searchParams.category : 'all'}
                name="category"
              >
                <option value="all">All</option>
                <option value="Productivity">Productivity</option>
                <option value="Health & Fitness">Health & Fitness</option>
                <option value="Weather">Weather</option>
                <option value="Photography">Photography</option>
                <option value="Education">Education</option>
                <option value="Finance">Finance</option>
                <option value="Lifestyle">Lifestyle</option>
              </select>
              <label className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">Price</label>
              <select
                className="h-12 rounded-2xl border border-white/10 bg-background/70 px-4 text-sm text-foreground"
                defaultValue={typeof searchParams.price === 'string' ? searchParams.price : 'all'}
                name="price"
              >
                <option value="all">All</option>
                <option value="free">Free</option>
                <option value="paid">Paid / Subscriptions</option>
              </select>
              <label className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">Sort by</label>
              <select
                className="h-12 rounded-2xl border border-white/10 bg-background/70 px-4 text-sm text-foreground"
                defaultValue={typeof searchParams.sort === 'string' ? searchParams.sort : 'recent'}
                name="sort"
              >
                <option value="recent">Most recent</option>
                <option value="rating">Top rated</option>
                <option value="installs">Most installs</option>
              </select>
            </div>
            <button className="w-full rounded-2xl border border-primary/40 bg-primary/20 py-3 text-sm font-semibold text-primary transition hover:bg-primary/30" type="submit">
              Apply filters
            </button>
          </form>
        </aside>
        <div className="space-y-8">
          {paginated.length === 0 ? (
            <EmptyState
              action={{ href: '/support', label: 'Request product consult' }}
              description="Refine your filters or reach out to craft something tailor-made."
              title="No apps found"
            />
          ) : (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {paginated.map((app) => (
                <AppCard key={app.slug} app={app} />
              ))}
            </div>
          )}
          <Pagination basePath="/apps" currentPage={page} totalPages={totalPages} />
        </div>
      </div>
      <Suspense fallback={<Skeleton className="h-40" />}>
        <div className="rounded-3xl border border-white/5 bg-card/60 p-8 text-sm text-muted-foreground">
          Looking for something bespoke?{' '}
          <Link className="text-primary underline underline-offset-4" href="/support">
            We craft custom Android experiences for visionary teams.
          </Link>
        </div>
      </Suspense>
    </div>
  );
}
