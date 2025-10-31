'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const links = [
  { href: '/', label: 'Home' },
  { href: '/apps', label: 'Apps' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Insights' },
  { href: '/support', label: 'Support' },
  { href: '/changelog', label: 'Changelog' },
];

export function NavBar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current <= 40) {
        setHidden(false);
      } else {
        setHidden(current > lastScrollRef.current);
      }
      lastScrollRef.current = current;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-xl transition-transform duration-300',
        hidden ? '-translate-y-full' : 'translate-y-0',
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link className="flex items-center gap-2 text-lg font-display tracking-tight" href="/">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-600 text-base font-semibold">
            A
          </span>
          <span>Artisaan</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
                pathname === link.href ? 'text-primary' : 'text-muted-foreground',
              )}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden md:inline-flex" size="sm">
            <Link href="https://play.google.com/store/apps/dev?id=Artisaan" rel="noreferrer" target="_blank">
              Google Play
            </Link>
          </Button>
          <Button
            aria-label="Toggle menu"
            className="md:hidden"
            onClick={() => setMobileOpen((state) => !state)}
            size="icon"
            variant="ghost"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      <div
        aria-hidden={!mobileOpen}
        className={cn(
          'md:hidden',
          mobileOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0',
          'overflow-hidden border-t border-white/5 bg-background/90 backdrop-blur transition-all duration-300'
        )}
      >
        <nav className="flex flex-col gap-2 p-4">
          {links.map((link) => (
            <Link
              key={link.href}
              className={cn(
                'rounded-2xl px-3 py-3 text-base font-medium text-muted-foreground transition hover:bg-white/5',
                pathname === link.href && 'bg-white/5 text-primary',
              )}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="lg">
            <Link href="https://play.google.com/store/apps/dev?id=Artisaan" rel="noreferrer" target="_blank">
              Visit Google Play
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
