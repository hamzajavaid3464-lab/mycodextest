import { NextResponse } from 'next/server';
import { generateRssFeed } from '@/lib/rss';

export const revalidate = 3600;

export async function GET() {
  const feed = await generateRssFeed();
  return new NextResponse(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, immutable',
    },
  });
}
