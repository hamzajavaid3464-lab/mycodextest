import Image from 'next/image';
import { SectionHeader } from '@/components/layout/section-header';

export default function AboutPage() {
  const timeline = [
    {
      year: '2016',
      title: 'Studio founded',
      description: 'Artisaan is born as a solo Android consultancy focused on precision UI engineering.',
    },
    {
      year: '2018',
      title: 'First million installs',
      description: 'Artisaan Notes resonates with creators and surpasses one million installs in 18 months.',
    },
    {
      year: '2020',
      title: 'Motion-first design system',
      description: 'We productize our kinetic design system, bringing haptics and motion parity across titles.',
    },
    {
      year: '2023',
      title: 'Global partnerships',
      description: 'We ship flagship apps with venture-backed startups, scaling the studio to a remote collective.',
    },
  ];

  const values = [
    {
      title: 'Craftsmanship first',
      description:
        'We sweat the details—from material-informed motion curves to the last pixel of adaptive layouts.',
    },
    {
      title: 'Performance obsessed',
      description:
        'We profile relentlessly, pairing Compose magic with native capabilities for 60fps experiences.',
    },
    {
      title: 'Privacy by design',
      description:
        'We bake in transparent data practices, opt-in analytics, and encrypted sync from day zero.',
    },
  ];

  return (
    <div className="container space-y-20 py-24">
      <SectionHeader
        align="left"
        description="Artisaan is the boutique studio led by founder and principal engineer Aria Kiran, partnering with product teams to craft Android apps with soul."
        eyebrow="Inside the studio"
        title="Precision, empathy, and relentless iteration"
      />
      <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6 text-lg text-muted-foreground">
          <p>
            Aria cut their teeth launching Android experiences for global brands before founding Artisaan to bring
            intentionally crafted products to market faster. Today, we remain lean by design—pairing senior Android
            engineers, motion designers, and sound artists on every engagement.
          </p>
          <p>
            From wellness to fintech, we translate ambitious product strategies into tactile, responsive experiences.
            Our clients stay for the craftsmanship, but return for the partnership: we co-own outcomes, measure every
            release, and celebrate every user delighted by the details.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-card/60 p-8 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">Core values</p>
          <ul className="mt-6 space-y-6">
            {values.map((value) => (
              <li key={value.title} className="space-y-2">
                <p className="font-display text-xl text-foreground">{value.title}</p>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <section className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-4xl overflow-hidden border border-white/10">
          <Image
            alt="Founder portrait"
            className="h-full w-full object-cover"
            height={600}
            src="https://images.unsplash.com/photo-1520340356584-6a6fce562ceb"
            width={600}
          />
        </div>
        <div className="space-y-6">
          <h2 className="font-display text-3xl font-semibold text-foreground">Our process</h2>
          <p className="text-muted-foreground">
            Every engagement runs through a three-part cadence: immersion workshops to align on outcomes, rapid prototyping
            in Compose with live device reviews, and continuous delivery with real-time analytics instrumentation. We work
            async-first, but create space for synchronous critiques that keep velocity high without sacrificing craft.
          </p>
          <div className="rounded-3xl border border-white/10 bg-card/60 p-8 text-sm text-muted-foreground">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Team</p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <Image alt="Aria Kiran" className="h-10 w-10 rounded-full" height={40} src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1" width={40} />
                <div>
                  <p className="text-foreground">Aria Kiran</p>
                  <p>Founder, Principal Engineer</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Image alt="Nova Chen" className="h-10 w-10 rounded-full" height={40} src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" width={40} />
                <div>
                  <p className="text-foreground">Nova Chen</p>
                  <p>Lead Product Designer</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Image alt="Eli Cruz" className="h-10 w-10 rounded-full" height={40} src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39" width={40} />
                <div>
                  <p className="text-foreground">Eli Cruz</p>
                  <p>Motion & Sound Design</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2 className="font-display text-3xl font-semibold text-foreground">Timeline</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {timeline.map((item) => (
            <div key={item.year} className="rounded-3xl border border-white/10 bg-card/50 p-6 text-sm text-muted-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">{item.year}</p>
              <p className="mt-2 font-display text-foreground text-xl">{item.title}</p>
              <p className="mt-3">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
