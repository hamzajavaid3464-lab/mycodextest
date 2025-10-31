import { AnchorHTMLAttributes, ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'outline' | 'ghost';

type ButtonProps = {
  variant?: ButtonVariant;
  as?: 'button' | 'a';
} & (
  | (ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' })
  | (AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' })
);

const baseOuter =
  'group relative inline-flex items-center justify-center overflow-hidden rounded-full transition duration-300 ease-premium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

const outerVariants: Record<ButtonVariant, string> = {
  primary: 'bg-brand-gradient text-white shadow-lg hover:shadow-xl hover:shadow-primary/30',
  outline:
    'bg-brand-gradient p-[1.5px] text-primary shadow-[0_10px_30px_-18px_rgba(65,105,225,0.7)] hover:shadow-[0_18px_38px_-20px_rgba(65,105,225,0.8)]',
  ghost: 'bg-transparent text-primary hover:text-primary-600',
};

const shineOverlay =
  'after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:bg-[linear-gradient(120deg,rgba(255,255,255,0.35),rgba(255,255,255,0))] after:opacity-0 after:transition after:duration-300 after:ease-premium group-hover:after:opacity-70';

const baseInner =
  'relative z-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-premium';

const innerVariants: Record<ButtonVariant, string> = {
  primary: 'bg-transparent text-white',
  outline: 'bg-white/85 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] dark:bg-white/10 dark:text-white',
  ghost: 'bg-transparent text-primary group-hover:bg-primary/10 group-active:bg-primary/20',
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', as = 'button', children, ...props }, ref) => {
    const outerClassName = clsx(baseOuter, shineOverlay, outerVariants[variant], className);
    const innerClassName = clsx(baseInner, innerVariants[variant]);

    if (as === 'a') {
      const { href, ...anchorProps } = props as AnchorHTMLAttributes<HTMLAnchorElement>;
      return (
        <motion.a
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          href={href}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={outerClassName}
          {...anchorProps}
        >
          <span className={innerClassName}>{children}</span>
        </motion.a>
      );
    }

    const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

    return (
      <motion.button
        ref={ref as ForwardedRef<HTMLButtonElement>}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={outerClassName}
        type={buttonProps.type ?? 'button'}
        {...buttonProps}
      >
        <span className={innerClassName}>{children}</span>
      </motion.button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
