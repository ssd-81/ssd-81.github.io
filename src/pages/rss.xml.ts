import rss from '@astrojs/rss';
import { getCollection, type CollectionEntry } from 'astro:content';

export async function GET(context) {
  const posts: CollectionEntry<'posts'>[] = await getCollection('posts');
  const sortedPosts = posts
    .filter((post: CollectionEntry<'posts'>) => !post.data.draft)
    .sort((a: CollectionEntry<'posts'>, b: CollectionEntry<'posts'>) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'parallex',
    description: 'seeking patterns and mostly fooled by randomness',
    site: context.site,
    items: sortedPosts.map((post: CollectionEntry<'posts'>) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
  });
}
