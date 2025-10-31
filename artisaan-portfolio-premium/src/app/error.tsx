'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="container flex min-h-screen flex-col items-center justify-center gap-6 text-center">
          <span className="rounded-full border border-amber-400/60 bg-amber-400/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-amber-300">
            500
          </span>
          <h1 className="font-display text-4xl font-semibold text-foreground">Something went sideways.</h1>
          <p className="max-w-md text-sm text-muted-foreground">
            Our team has been notified. You can refresh to try again or head back to the homepage.
          </p>
          <div className="flex gap-3">
            <Button onClick={reset}>Refresh</Button>
            <Button asChild variant="ghost">
              <Link href="/">Go home</Link>
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
