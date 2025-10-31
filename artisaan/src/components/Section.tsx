import { ReactNode } from 'react';
import clsx from 'clsx';

const Section = ({
  id,
  title,
  eyebrow,
  description,
  children,
  className,
}: {
  id?: string;
  title?: ReactNode;
  eyebrow?: string;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section id={id} className={clsx('relative py-16 sm:py-24', className)}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4">
        {(title || description) && (
          <div className="max-w-2xl space-y-4">
            {eyebrow ? (
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">
                {eyebrow}
              </span>
            ) : null}
            {title ? <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2> : null}
            {description ? <p className="text-lg text-text/70">{description}</p> : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
