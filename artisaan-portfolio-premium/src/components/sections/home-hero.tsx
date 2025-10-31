'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { GradientButton, GhostButton } from '@/components/ui/gradient-button';

export function HomeHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  return (
    <section className="relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_55%)]" />
        <motion.div
          aria-hidden
          animate={{ opacity: [0.6, 0.8, 0.6] }}
          className="absolute inset-x-0 top-0 h-[480px] bg-[conic-gradient(at_top,_rgba(34,211,238,0.35),_transparent_70%)] blur-3xl"
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
        />
      </div>
      <div className="container relative flex flex-col items-center gap-12 py-32 text-center">
        <motion.span
          animate={{ y: [0, -8, 0] }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-primary"
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        >
          Crafting Android with soul
        </motion.span>
        <motion.h1
          className="max-w-4xl font-display text-5xl font-semibold leading-tight md:text-6xl"
          initial={{ opacity: 0, y: 40 }}
          style={{ y }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Beautifully engineered Android experiences that feel bespoke from the very first tap.
        </motion.h1>
        <motion.p
          className="max-w-2xl text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Artisaan is the independent studio behind top-rated Google Play apps, blending meticulous design with battle-tested engineering.
        </motion.p>
        <motion.div className="flex flex-wrap items-center justify-center gap-4" initial={{ opacity: 0, y: 20 }} transition={{ duration: 1, delay: 0.3 }} whileInView={{ opacity: 1, y: 0 }}>
          <GradientButton asChild className="group">
            <Link href="/apps">Explore the portfolio</Link>
          </GradientButton>
          <GhostButton asChild>
            <Link href="/support">Partner with us</Link>
          </GhostButton>
        </motion.div>
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.4, 0.8, 0.4] }}
          aria-hidden
          className="mt-12 inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5"
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        >
          <span className="text-xs font-medium uppercase tracking-[0.5em] text-muted-foreground">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
