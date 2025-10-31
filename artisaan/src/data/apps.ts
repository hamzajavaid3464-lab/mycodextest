export type AppCategory = 'kids' | 'anime' | 'flowers' | 'butterflies' | 'wallpapers';

export type App = {
  id: string;
  name: string;
  slug: string;
  category: AppCategory;
  short: string;
  description: string;
  playUrl: string;
  icon: string;
  screenshots: string[];
  rating: number;
  installs: string;
};

export const APPS: App[] = [
  {
    id: 'anime-1',
    name: 'Learn to draw Anime',
    slug: 'learn-to-draw-anime',
    category: 'anime',
    short: 'Styled brushes & step-by-step guides.',
    description: 'Practice-friendly tools, layers, and guided proportions for anime drawing.',
    playUrl: '#',
    icon: 'https://img.icons8.com/fluency/96/paint-palette.png',
    screenshots: [
      'https://images.unsplash.com/photo-1529676468690-a943c1cc86eb?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.8,
    installs: '250K+',
  },
  {
    id: 'wall-1',
    name: 'Galaxy S25 Ultra Wallpapers',
    slug: 'galaxy-s25-ultra-wallpapers',
    category: 'wallpapers',
    short: 'AMOLED-friendly, crisp, curated daily.',
    description: 'Premium wallpapers tuned for Galaxy S25 Ultra: deep blacks, vibrant gradients.',
    playUrl: '#',
    icon: 'https://img.icons8.com/fluency/96/galaxy.png',
    screenshots: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.7,
    installs: '800K+',
  },
  {
    id: 'wall-2',
    name: 'OPPO Reno 12 Wallpapers',
    slug: 'oppo-reno-12-wallpapers',
    category: 'wallpapers',
    short: 'Brand-matched, high-resolution packs.',
    description: 'Elegant wallpapers complementing OPPO Reno 12 colorways and UI.',
    playUrl: '#',
    icon: 'https://img.icons8.com/fluency/96/picture.png',
    screenshots: ['https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=900&q=80'],
    rating: 4.6,
    installs: '600K+',
  },
  {
    id: 'flowers-1',
    name: 'Learn to draw Flowers',
    slug: 'learn-to-draw-flowers',
    category: 'flowers',
    short: 'Floral guides, palettes, practice sheets.',
    description: 'Step-by-step floral drawing: roses, lilies, tulips, and more.',
    playUrl: '#',
    icon: 'https://img.icons8.com/fluency/96/flower.png',
    screenshots: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.6,
    installs: '150K+',
  },
  {
    id: 'butterflies-1',
    name: 'Butterfly Sketch Studio',
    slug: 'butterfly-sketch-studio',
    category: 'butterflies',
    short: 'Delicate butterfly drawing lessons.',
    description: 'Sketch wings, patterns, and realistic butterflies with layered guidance.',
    playUrl: '#',
    icon: 'https://img.icons8.com/fluency/96/butterfly.png',
    screenshots: ['https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=900&q=80'],
    rating: 4.5,
    installs: '90K+',
  },
  {
    id: 'kids-1',
    name: 'Kids Doodle Garden',
    slug: 'kids-doodle-garden',
    category: 'kids',
    short: 'Kid-friendly drawing adventures.',
    description: 'Creative prompts and guided doodles built for young artists.',
    playUrl: '#',
    icon: 'https://img.icons8.com/fluency/96/kawaii-ice-cream.png',
    screenshots: ['https://images.unsplash.com/photo-1529676468690-a943c1cc86eb?auto=format&fit=crop&w=900&q=80'],
    rating: 4.4,
    installs: '120K+',
  },
];
