import Link from 'next/link';
import { SITE_NAME } from '@/lib/constants';
import { formatDate } from '@/lib/utils';

const footerLinks = [
  {
    title: 'Studio',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Changelog', href: '/changelog' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Support Center', href: '/support' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Google Play', href: 'https://play.google.com/store/apps/dev?id=Artisaan' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/artisaan' },
      { label: 'X (Twitter)', href: 'https://twitter.com/artisaanlabs' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background/70 backdrop-blur">
      <div className="container grid gap-10 py-16 md:grid-cols-[1.2fr_repeat(3,1fr)]">
        <div className="space-y-4">
          <Link className="text-2xl font-display" href="/">
            {SITE_NAME}
          </Link>
          <p className="text-sm text-muted-foreground">
            {`© ${new Date().getFullYear()} ${SITE_NAME}. Crafted for Android pioneers.`}
          </p>
          <div className="flex gap-3 text-xs text-muted-foreground">
            <span>Last updated {formatDate(new Date())}</span>
          </div>
        </div>
        {footerLinks.map((column) => (
          <div key={column.title} className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground/80">
              {column.title}
            </p>
            <ul className="space-y-3">
              {column.links.map((item) => (
                <li key={item.label}>
                  <Link
                    className="text-sm text-muted-foreground transition hover:text-primary"
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
