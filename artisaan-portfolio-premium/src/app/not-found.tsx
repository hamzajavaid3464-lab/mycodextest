import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <span className="rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-primary">
        404
      </span>
      <h1 className="font-display text-4xl font-semibold text-foreground">We could not find that page.</h1>
      <p className="max-w-md text-sm text-muted-foreground">
        The page you were looking for may have moved. Explore our latest work or head back to the homepage.
      </p>
      <div className="flex gap-3">
        <Button asChild>
          <Link href="/">Return home</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/apps">View apps</Link>
        </Button>
      </div>
    </div>
  );
}
