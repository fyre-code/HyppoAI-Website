import type { Metadata } from 'next';
import { HeroText } from '@/components/AnimatedSection';
import CircuitBackground from '@/components/CircuitBackground';
import BlogGrid from '@/components/BlogGrid';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blogs — HyppoAI',
  description: 'Insights on AI automation, business systems, and growth from HyppoAI.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black min-h-[80vh] flex flex-col justify-center px-6 py-12 border-b border-[#1a1a1a]">
        <CircuitBackground />
        <div className="relative z-10 max-w-[1170px] mx-auto text-center">
          <HeroText>
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight mx-auto">
              Blogs
            </h1>
          </HeroText>
          <HeroText>
            <p className="text-white text-[21px] max-w-2xl mb-6 leading-relaxed mx-auto">
              Insights on AI automation, business <span className="text-[#2cd9fe]">systems</span>, and growth.
            </p>
          </HeroText>
        </div>
      </section>

      {/* Posts grid */}
      <section className="bg-[#000000] py-20 px-6">
        <div className="max-w-[1170px] mx-auto">
          <BlogGrid posts={posts} />
        </div>
      </section>
    </>
  );
}
