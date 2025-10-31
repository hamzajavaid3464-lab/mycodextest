import { render, screen } from '@testing-library/react';
import { AppCard } from '@/components/cards/app-card';
import type { AppMeta } from '@/types';

const app: AppMeta = {
  slug: 'test-app',
  name: 'Test App',
  category: 'Productivity',
  description: 'A delightful productivity app.',
  features: ['Offline first', 'Sync'],
  rating: 4.8,
  installs: '10K+',
  priceModel: 'Free',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=test',
  images: ['https://images.unsplash.com/photo-1500530855697-b586d89ba3ee'],
  privacyPolicyUrl: '/privacy',
};

describe('AppCard', () => {
  it('renders app information', () => {
    render(<AppCard app={app} />);
    expect(screen.getByText('Test App')).toBeInTheDocument();
    expect(screen.getByText('A delightful productivity app.')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /view on play store/i })).toHaveAttribute('href', app.playStoreUrl);
  });
});
