import path from 'path';
import fs from 'fs/promises';
import type { AppMeta } from '@/types';

const dataPath = path.join(process.cwd(), 'src', 'data', 'apps.json');

export async function getApps(): Promise<AppMeta[]> {
  const content = await fs.readFile(dataPath, 'utf-8');
  const apps = JSON.parse(content) as AppMeta[];
  return apps.sort((a, b) => (a.name > b.name ? 1 : -1));
}

export async function getAppBySlug(slug: string): Promise<AppMeta | undefined> {
  const apps = await getApps();
  return apps.find((app) => app.slug === slug);
}

export async function getFeaturedApps(limit = 4) {
  const apps = await getApps();
  return apps.slice(0, limit);
}
