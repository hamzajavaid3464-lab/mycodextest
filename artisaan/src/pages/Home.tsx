import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import Section from '../components/Section';
import GradientText from '../components/GradientText';
import Button from '../components/Button';
import Card from '../components/Card';
import AppCard from '../components/AppCard';
import Stats from '../components/Stats';
import Newsletter from '../components/Newsletter';
import Modal from '../components/Modal';
import { APPS, App } from '../data/apps';
import { track } from '../lib/analytics';

const featuredSlugs = [
  'learn-to-draw-anime',
  'galaxy-s25-ultra-wallpapers',
  'oppo-reno-12-wallpapers',
  'learn-to-draw-flowers',
];

const Home = () => {
  const [selectedApp, setSelectedApp] = useState<App | null>(null);

  const featuredApps = useMemo(() => APPS.filter((app) => featuredSlugs.includes(app.slug)), []);

  return (
    <div className="overflow-hidden">
      <section className="relative flex min-h-[80vh] flex-col justify-center">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(65,105,225,0.15),_transparent_60%)]"
            animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-24 text-center lg:py-32">
          <motion.span
            className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm text-primary shadow-glass"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Sparkles className="h-4 w-4" /> Crafting delightful Android apps for creativity and beyond.
          </motion.span>
          <motion.h1
            className="text-5xl font-semibold tracking-tight text-text sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Artisaan
          </motion.h1>
          <motion.p
            className="mx-auto max-w-2xl text-lg text-text/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Premium Android apps for drawing, creativity, and beautiful wallpapers. Built with calm, premium craftsmanship.
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button onClick={() => document.getElementById('apps-grid')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore our apps
            </Button>
            <Button variant="outline" onClick={() => window.open('#', '_blank')}>
              Google Play
            </Button>
          </motion.div>
        </div>
      </section>

      <Section
        id="features"
        eyebrow="Featured experiences"
        title={
          <>
            Crafted with <GradientText>precision</GradientText> and artistry
          </>
        }
        description="Every Artisaan release is refined for performance, polish, and a premium Android feel."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {featuredApps.map((app) => (
            <Card key={app.id} className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <img src={app.icon} alt="" className="h-16 w-16 rounded-2xl object-cover" loading="lazy" />
                <div>
                  <h3 className="text-xl font-semibold text-text">{app.name}</h3>
                  <p className="text-sm text-text/60">{app.short}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                className="self-start"
                onClick={() => {
                  setSelectedApp(app);
                  track('open_app_modal', { app: app.slug });
                }}
              >
                Explore details <ChevronRight className="h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="apps-grid"
        eyebrow="Showcase"
        title="Explore the Artisaan collection"
        description="Discover curated experiences spanning illustration, wallpapers, and creative wellness."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredApps.map((app) => (
            <AppCard key={app.id} app={app} onViewDetails={(selected) => {
              setSelectedApp(selected);
              track('open_app_modal', { app: selected.slug });
            }} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Trust" title="Loved by creators worldwide">
        <Stats />
      </Section>

      <Section>
        <Newsletter />
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
                track('cta_play', { app: selectedApp.slug });
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

export default Home;
