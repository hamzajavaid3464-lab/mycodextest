export interface AppMeta {
  slug: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  rating: number;
  installs: string;
  priceModel: string;
  playStoreUrl: string;
  images: string[];
  privacyPolicyUrl: string;
  releaseDate?: string;
  monetization?: string[];
  techStack?: string[];
  supportEmail?: string;
}

export interface BlogFrontmatter {
  title: string;
  publishedAt: string;
  summary: string;
  tags: string[];
  coverImage?: string;
}
