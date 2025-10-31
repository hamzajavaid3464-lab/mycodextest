import Link from 'next/link';
import { GradientButton } from '@/components/ui/gradient-button';

export function ContactCTA() {
  return (
    <section className="container py-24">
      <div className="relative overflow-hidden rounded-4xl border border-primary/30 bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-background/80 p-12 shadow-glow backdrop-blur">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" aria-hidden />
        <div className="relative grid gap-8 md:grid-cols-[2fr_1fr] md:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary-foreground/80">
              Partner with Artisaan
            </p>
            <h2 className="font-display text-4xl font-semibold text-primary-foreground">
              Launch the Android experience your users can’t stop talking about.
            </h2>
            <p className="text-base text-primary-foreground/80">
              From concept sprints to ongoing ship cycles, we join forces with founders and product teams to craft
              delightful Android journeys.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <GradientButton asChild className="bg-gradient-to-r from-white/90 via-white/70 to-white/60 text-slate-900">
              <Link href="/support">Start a conversation</Link>
            </GradientButton>
            <span className="text-xs uppercase tracking-[0.3em] text-primary-foreground/70">
              Average response time: 1 business day
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
