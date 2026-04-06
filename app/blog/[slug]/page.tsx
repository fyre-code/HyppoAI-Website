import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CircuitBackground from '@/components/CircuitBackground';
import { getAllPosts, getPostBySlug } from '@/lib/posts';

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
  return {
    title: `${post.title} — HyppoAI`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black min-h-[50vh] flex flex-col justify-center px-6 py-12 border-b border-[#1a1a1a]">
        <CircuitBackground />
        <div className="relative z-10 max-w-[800px] mx-auto">
          <Link href="/blog" className="text-[#2cd9fe] text-xs uppercase tracking-widest mb-6 inline-flex items-center gap-2 hover:opacity-70 transition-opacity">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <p className="text-[#555] text-xs uppercase tracking-widest mt-4 mb-3">{post.date} · {post.author}</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Post content */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-[800px] mx-auto">
          {post.content ? (
            <div
              className="prose-blog"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <p className="text-[#555] text-[21px]">Content coming soon.</p>
          )}

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-[#1a1a1a]">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#2cd9fe] text-xs uppercase tracking-widest hover:opacity-70 transition-opacity">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
