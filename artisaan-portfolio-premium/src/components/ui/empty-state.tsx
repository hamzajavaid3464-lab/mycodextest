import Link from 'next/link';
import { Button } from './button';

interface EmptyStateProps {
  title: string;
  description: string;
  action?: { href: string; label: string };
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center rounded-3xl border border-white/10 bg-card/80 p-12 text-center shadow-glass-lg">
      <h3 className="font-display text-2xl font-semibold text-foreground">{title}</h3>
      <p className="mt-4 text-sm text-muted-foreground">{description}</p>
      {action ? (
        <Button asChild className="mt-6">
          <Link href={action.href}>{action.label}</Link>
        </Button>
      ) : null}
    </div>
  );
}
