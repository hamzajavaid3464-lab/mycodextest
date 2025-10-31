import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx,mdx}',
    './src/app/**/*.{ts,tsx,mdx}',
    './src/content/**/*.{md,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1440px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', ...fontFamily.sans],
        display: ['"General Sans"', ...fontFamily.sans],
        mono: ['"JetBrains Mono"', ...fontFamily.mono]
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: 'hsl(var(--muted))',
        accent: 'hsl(var(--accent))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 4px)',
        sm: 'calc(var(--radius) - 8px)'
      },
      boxShadow: {
        glow: '0 10px 50px -20px rgba(94, 234, 212, 0.35)',
        'glass-lg': '0 40px 80px -40px rgba(15, 23, 42, 0.45)'
      },
      backgroundImage: {
        'noise-light': "url('https://grainy-gradients.vercel.app/noise.svg')",
        'radial-fade': 'radial-gradient(circle at top, rgba(56, 189, 248, 0.35), transparent 60%)'
      },
      keyframes: {
        'shine': {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        shine: 'shine 1.8s linear infinite'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};

export default config;
