import type { Metadata } from 'next';
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, SITE_URL } from './constants';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: ['Android', 'apps', 'Artisaan', 'Google Play', 'mobile development'],
  authors: [{ name: 'Artisaan' }],
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/api/og?title=Artisaan',
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@artisaanlabs',
  },
  alternates: {
    types: {
      'application/rss+xml': `${SITE_URL}/rss.xml`,
    },
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/favicon.svg',
  },
};
