import { Feed } from 'rss';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from './constants';
import { getAllBlogPosts } from './mdx';

export async function generateRssFeed() {
  const feed = new Feed({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    id: SITE_URL,
    link: SITE_URL,
    language: 'en',
    favicon: `${SITE_URL}/favicon.svg`,
    copyright: `${new Date().getFullYear()} ${SITE_NAME}`,
  });

  const posts = await getAllBlogPosts();

  posts.forEach((post) => {
    feed.addItem({
      title: post.meta.title,
      id: `${SITE_URL}/blog/${post.slug}`,
      link: `${SITE_URL}/blog/${post.slug}`,
      description: post.meta.summary,
      date: new Date(post.meta.publishedAt),
    });
  });

  return feed.rss2();
}
