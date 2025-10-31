import Image from 'next/image';
import { MetricStat } from '@/components/cards/metric-stat';

const logos = [
  {
    name: 'Android Police',
    url: 'https://www.androidpolice.com/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Android_Police_logo.svg',
  },
  {
    name: 'Product Hunt',
    url: 'https://www.producthunt.com/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Product_Hunt_Logo.svg',
  },
  {
    name: 'XDA Developers',
    url: 'https://www.xda-developers.com/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/55/XDA_logo.svg',
  },
];

export function TrustSignals() {
  return (
    <section className="container space-y-12 py-24">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="grid gap-6 md:grid-cols-3">
          <MetricStat description="Across flagship productivity and wellness titles." label="Lifetime installs" value="2.4M+" />
          <MetricStat description="Average rating across Google Play portfolio." label="Global rating" value="4.8★" />
          <MetricStat description="Median ANR & crash rate across live releases." label="Reliability" value="99.98%" />
        </div>
        <div className="rounded-3xl border border-white/10 bg-card/70 p-8 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">As featured by</p>
          <div className="mt-6 grid grid-cols-3 items-center gap-6">
            {logos.map((logo) => (
              <a key={logo.name} className="flex items-center justify-center opacity-70 transition hover:opacity-100" href={logo.url} rel="noreferrer" target="_blank">
                <Image alt={`${logo.name} logo`} height={32} src={logo.logo} width={120} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
