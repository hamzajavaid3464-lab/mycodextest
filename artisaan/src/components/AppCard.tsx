import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';
import { App } from '../data/apps';
import { track } from '../lib/analytics';

const AppCard = ({ app, onViewDetails }: { app: App; onViewDetails?: (app: App) => void }) => {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="glass flex h-full flex-col gap-4 rounded-[var(--radius-lg)] p-6"
    >
      <div className="flex items-center gap-3">
        <img
          src={app.icon}
          alt={`${app.name} icon`}
          className="h-14 w-14 rounded-2xl border border-black/5 object-cover"
          loading="lazy"
        />
        <div>
          <h3 className="text-lg font-semibold text-text">{app.name}</h3>
          <p className="text-sm uppercase tracking-wide text-primary/70">{app.category}</p>
        </div>
      </div>
      <p className="text-sm text-text/70">{app.short}</p>
      <div className="flex flex-wrap gap-2 text-xs capitalize text-primary/80">
        <span className="rounded-full bg-primary/10 px-3 py-1">{app.category}</span>
      </div>
      <div className="mt-auto flex flex-wrap items-center gap-3 text-xs text-text/60">
        <span className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-primary text-primary" aria-hidden />
          {app.rating.toFixed(1)}
        </span>
        <span>{app.installs} installs</span>
      </div>
      <div className="flex flex-wrap gap-3 pt-4">
        <Button variant="outline" onClick={() => onViewDetails?.(app)}>
          View details
        </Button>
        <Button
          variant="ghost"
          onClick={() => {
            track('cta_play', { app: app.slug });
            window.open(app.playUrl, '_blank', 'noopener');
          }}
          aria-label={`Install ${app.name} on Google Play`}
        >
          Install on Google Play
        </Button>
      </div>
    </motion.article>
  );
};

export default AppCard;
