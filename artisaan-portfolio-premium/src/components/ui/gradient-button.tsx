import { Button, type ButtonProps } from './button';
import { cn } from '@/lib/utils';

export function GradientButton({ className, children, ...props }: ButtonProps) {
  return (
    <Button
      className={cn(
        'relative overflow-hidden border border-white/10 bg-gradient-to-r text-base font-semibold shadow-glow transition-all hover:scale-[1.02] hover:shadow-lg',
        'from-cyan-500 via-sky-500 to-indigo-500',
        className,
      )}
      {...props}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <span className="inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-white/80" />
      </span>
    </Button>
  );
}

export function GhostButton(props: ButtonProps) {
  return <Button variant="ghost" {...props} />;
}
