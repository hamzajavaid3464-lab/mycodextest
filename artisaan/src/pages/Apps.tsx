import { useMemo, useState } from 'react';
import Section from '../components/Section';
import Filters from '../components/Filters';
import AppCard from '../components/AppCard';
import Modal from '../components/Modal';
import Button from '../components/Button';
import { APPS, App, AppCategory } from '../data/apps';
import { track } from '../lib/analytics';

const sortApps = (apps: App[], sort: string) => {
  switch (sort) {
    case 'az':
      return [...apps].sort((a, b) => a.name.localeCompare(b.name));
    case 'newest':
      return [...apps].reverse();
    case 'popularity':
    default:
      return [...apps].sort((a, b) =>
        parseInt(b.installs.replace(/[^0-9]/g, ''), 10) - parseInt(a.installs.replace(/[^0-9]/g, ''), 10),
      );
  }
};

const Apps = () => {
  const [category, setCategory] = useState<AppCategory | 'all'>('all');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('popularity');
  const [selectedApp, setSelectedApp] = useState<App | null>(null);

  const filteredApps = useMemo(() => {
    const filtered = APPS.filter((app) => {
      const matchesCategory = category === 'all' || app.category === category;
      const matchesQuery = app.name.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
    return sortApps(filtered, sort);
  }, [category, query, sort]);

  return (
    <div className="space-y-16 py-12">
      <Section
        title="Our app collection"
        description="Browse Artisaan's full suite of creative Android experiences."
      >
        <Filters
          activeCategory={category}
          onCategoryChange={setCategory}
          query={query}
          onQueryChange={setQuery}
          sort={sort}
          onSortChange={setSort}
        />
        {filteredApps.length ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredApps.map((app) => (
              <AppCard
                key={app.id}
                app={app}
                onViewDetails={(selected) => {
                  setSelectedApp(selected);
                  track('open_app_modal', { app: selected.slug });
                }}
              />
            ))}
          </div>
        ) : (
          <div className="glass flex flex-col items-center gap-4 rounded-[var(--radius-lg)] p-12 text-center">
            <h3 className="text-xl font-semibold text-text">No apps found</h3>
            <p className="text-sm text-text/70">
              Try adjusting your filters or searching for a different keyword.
            </p>
            <Button onClick={() => {
              setCategory('all');
              setQuery('');
              setSort('popularity');
            }}>
              Reset filters
            </Button>
          </div>
        )}
      </Section>

      <Modal
        open={Boolean(selectedApp)}
        onClose={() => setSelectedApp(null)}
        title={selectedApp?.name}
      >
        {selectedApp ? (
          <div className="space-y-4">
            <p>{selectedApp.description}</p>
            <div className="flex flex-wrap gap-3 text-sm text-text/70">
              <span>Category: {selectedApp.category}</span>
              <span>Rating: {selectedApp.rating.toFixed(1)}</span>
              <span>Installs: {selectedApp.installs}</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {selectedApp.screenshots.map((screenshot) => (
                <img
                  key={screenshot}
                  src={screenshot}
                  alt={`${selectedApp.name} screenshot`}
                  className="h-60 w-full rounded-[var(--radius-lg)] object-cover"
                  loading="lazy"
                />
              ))}
            </div>
            <Button
              onClick={() => {
                if (selectedApp) {
                  track('cta_play', { app: selectedApp.slug });
                }
                window.open(selectedApp.playUrl, '_blank', 'noopener');
              }}
            >
              Install on Google Play
            </Button>
          </div>
        ) : null}
      </Modal>
    </div>
  );
};

export default Apps;
