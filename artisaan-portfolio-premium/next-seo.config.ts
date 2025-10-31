import type { DefaultSeoProps } from 'next-seo';
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, SITE_URL } from './src/lib/site-metadata';

const config: DefaultSeoProps = {
  titleTemplate: `%s · ${SITE_NAME}`,
  defaultTitle: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description: SITE_DESCRIPTION,
  canonical: SITE_URL,
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    handle: '@artisaanlabs',
    site: '@artisaanlabs',
    cardType: 'summary_large_image',
  },
};

export default config;
