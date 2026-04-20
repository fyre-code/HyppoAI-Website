import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { buildMetadata, LOGO_OG_URL, LOGO_ALT } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: `${post.title} — HyppoAI | Palm Bay, FL`,
    description: post.excerpt.slice(0, 155),
    keywords: post.tags ?? [],
    path: `/blog/${slug}`,
    imageUrl: post.image ?? LOGO_OG_URL,
    imageAlt: post.imageAlt ?? (post.image ? post.title : LOGO_ALT),
  });
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <section className="bg-[#000000] py-12 px-6">
      <div className="max-w-[1170px] mx-auto">
        <iframe
          src={`https://hyppohq.io/blog/hyppoads-e1f78d65/${slug}?embed=true`}
          style={{ width: '100%', minHeight: '1200px', border: 'none' }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  );
}
