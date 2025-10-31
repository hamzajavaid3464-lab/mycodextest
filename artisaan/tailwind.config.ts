import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: 'var(--bg)',
        surface: 'var(--surface)',
        text: 'var(--text)',
        primary: {
          DEFAULT: 'var(--primary)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
        },
        accent: 'var(--accent)',
        success: 'var(--success)',
        warning: 'var(--warning)',
      },
      borderRadius: {
        lg: 'var(--radius-lg)',
        xl: 'calc(var(--radius-lg) + 0.25rem)',
      },
      boxShadow: {
        glass: '0 10px 30px -12px rgba(0,0,0,0.25)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #4169E1 0%, #7C3AED 50%, #A855F7 100%)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22,1,0.36,1)',
      },
    },
  },
  plugins: [],
};

export default config;
