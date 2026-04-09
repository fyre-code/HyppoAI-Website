export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  image?: string;
  imageAlt?: string;
  tags?: string[];
  content: string; // HTML — populated when each post is migrated
}

// Import all posts from the data file
import { posts as allPosts } from './posts-data';

export function getAllPosts(): Post[] {
  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((p) => p.slug === slug);
}
