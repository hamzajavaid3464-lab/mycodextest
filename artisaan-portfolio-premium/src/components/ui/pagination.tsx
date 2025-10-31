import Link from 'next/link';
import { cn } from '@/lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-2">
      {pages.map((page) => (
        <Link
          key={page}
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm transition',
            page === currentPage
              ? 'border-primary/60 bg-primary/20 text-primary-foreground'
              : 'text-muted-foreground hover:border-primary/40 hover:text-primary',
          )}
          href={`${basePath}?page=${page}`}
        >
          {page}
        </Link>
      ))}
    </nav>
  );
}
