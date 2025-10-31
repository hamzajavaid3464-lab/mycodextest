import type { MDXComponents } from 'mdx/types';
import { cn } from '@/lib/utils';

export const mdxComponents: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1
      className={cn('mt-8 scroll-m-20 text-4xl font-display font-semibold tracking-tight', className)}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2 className={cn('mt-10 scroll-m-20 text-3xl font-semibold tracking-tight', className)} {...props} />
  ),
  h3: ({ className, ...props }) => (
    <h3 className={cn('mt-8 scroll-m-20 text-2xl font-semibold tracking-tight', className)} {...props} />
  ),
  p: ({ className, ...props }) => (
    <p className={cn('leading-7 text-lg text-muted-foreground', className)} {...props} />
  ),
  ul: ({ className, ...props }) => <ul className={cn('my-6 ml-6 list-disc space-y-2', className)} {...props} />,
  ol: ({ className, ...props }) => <ol className={cn('my-6 ml-6 list-decimal space-y-2', className)} {...props} />,
  li: ({ className, ...props }) => <li className={cn('leading-7 text-muted-foreground', className)} {...props} />,
  blockquote: ({ className, ...props }) => (
    <blockquote className={cn('mt-6 border-l-4 border-primary pl-6 italic text-lg', className)} {...props} />
  ),
  code: ({ className, ...props }) => (
    <code className={cn('relative rounded bg-secondary px-1.5 py-0.5 font-mono text-sm', className)} {...props} />
  ),
  pre: ({ className, ...props }) => (
    <pre className={cn('my-6 overflow-x-auto rounded-2xl bg-secondary p-6 text-sm', className)} {...props} />
  ),
  a: ({ className, ...props }) => (
    <a className={cn('text-primary underline underline-offset-4 transition hover:text-primary/80', className)} {...props} />
  ),
  Callout: ({ type = 'note', title, children }: any) => {
    const palette = {
      note: 'bg-cyan-500/10 border-cyan-400/40 text-cyan-200',
      tip: 'bg-emerald-500/10 border-emerald-400/40 text-emerald-200',
      warning: 'bg-amber-500/10 border-amber-400/40 text-amber-200',
    } as const;
    return (
      <div
        className={cn(
          'mt-6 rounded-2xl border px-6 py-5 text-base shadow-sm backdrop-blur',
          palette[type as keyof typeof palette] ?? palette.note,
        )}
        role="note"
        aria-label={title}
      >
        {title ? <p className="font-semibold uppercase tracking-wide text-sm">{title}</p> : null}
        <div className="mt-2 space-y-2 text-muted-foreground">{children}</div>
      </div>
    );
  },
};
