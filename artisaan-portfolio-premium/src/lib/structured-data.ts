import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from './constants';

export function getOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    slogan: SITE_DESCRIPTION,
    sameAs: [
      'https://play.google.com/store/apps/dev?id=Artisaan',
      'https://twitter.com/artisaanlabs',
      'https://www.linkedin.com/company/artisaan'
    ],
  };
}

export function getWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/apps?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getMobileAppJsonLd({
  name,
  description,
  playStoreUrl,
  category,
  rating,
}: {
  name: string;
  description: string;
  playStoreUrl: string;
  category: string;
  rating: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name,
    description,
    applicationCategory: `https://schema.org/${category}`,
    operatingSystem: 'Android',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating,
      reviewCount: Math.max(Math.round(rating * 150), 50),
    },
    offers: {
      '@type': 'Offer',
      url: playStoreUrl,
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    url: playStoreUrl,
  };
}
