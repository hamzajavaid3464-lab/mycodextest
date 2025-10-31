# Artisaan Portfolio Premium

Artisaan is a boutique Android studio crafting beautifully engineered Google Play experiences. This Next.js 14 codebase powers the public marketing site, portfolio, changelog, and support center.

## Tech stack

- **Next.js 14** with the App Router, React 18, TypeScript
- **Tailwind CSS** + shadcn/ui component primitives
- **Framer Motion** for motion design flourishes
- **MDX**-powered blog and changelog content
- **Zod** validation, custom rate limiting, and secure headers
- **next-pwa**, **next-seo**, **next-sitemap**, **next-safe-middleware**
- **Jest** + **Testing Library** unit tests, **Playwright** E2E checks

## Getting started

```bash
pnpm install
pnpm dev
```

Create a `.env.local` file by copying `.env.example` and updating values:

```bash
cp .env.example .env.local
```

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used for metadata and sitemap |
| `NEXT_PUBLIC_ANALYTICS_ID` | Optional GA4 property ID |
| `NEXT_PUBLIC_CONSENT_COOKIE` | Cookie key for consent tracking |
| `CONTACT_TO_EMAIL` | Support inbox for contact form logging |
| `RATE_LIMIT_MAX` / `RATE_LIMIT_WINDOW` | Contact form rate limiting (requests, seconds) |

### Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local development server |
| `pnpm build` | Create a production build |
| `pnpm start` | Run the production server |
| `pnpm lint` | Run ESLint with the project rules |
| `pnpm test` | Execute unit tests via Jest |
| `pnpm test:e2e` | Launch Playwright E2E suite |
| `pnpm typecheck` | Run TypeScript in no-emit mode |
| `pnpm format` | Validate Prettier formatting |
| `pnpm analyze` | Build with the bundle analyzer enabled |

Husky + lint-staged will keep commits clean by linting and formatting staged files.

## Content management

### Apps

Add or update apps in `src/data/apps.json`. Each entry must follow the schema:

```json
{
  "slug": "unique-slug",
  "name": "App Name",
  "category": "Category",
  "description": "Short marketing description.",
  "features": ["Feature A", "Feature B"],
  "rating": 4.9,
  "installs": "100K+",
  "priceModel": "Free with IAP",
  "playStoreUrl": "https://play.google.com/store/apps/details?id=...",
  "images": ["https://example.com/cover.jpg"],
  "privacyPolicyUrl": "/privacy",
  "releaseDate": "2024-01-05",
  "monetization": ["Free"],
  "techStack": ["Kotlin"],
  "supportEmail": "support@artisaan.dev"
}
```

### Blog

Blog posts live in `src/content/blog/*.mdx`. Frontmatter drives metadata:

```mdx
---
title: "Post title"
publishedAt: "2024-02-01"
summary: "Concise teaser."
tags:
  - android
  - design
coverImage: "https://images.unsplash.com/..."
---
```

MDX can use the built-in `<Callout>` component for rich callouts and includes syntax highlighting out of the box.

### Changelog

Edit `src/content/changelog/releases.md` using simple Markdown headings. Entries render chronologically on `/changelog`.

## Testing & quality

- `pnpm test` runs Jest unit suites (AppCard, SupportForm)
- `pnpm test:e2e` runs Playwright smoke flows
- `pnpm lint` and `pnpm typecheck` enforce consistency

CI (GitHub Actions) installs dependencies, runs linting, type checks, unit/E2E tests, and uploads build artifacts.

## Deployment

The app is optimized for Vercel. Set the environment variables in your hosting provider, run `pnpm build`, and serve via `pnpm start`. The generated PWA manifest, sitemap, and RSS feed update automatically during build.

