import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroText } from '@/components/AnimatedSection';
import CircuitBackground from '@/components/CircuitBackground';
import GrayAccentBorder from '@/components/GrayAccentBorder';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog — HyppoAI',
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
              Blog
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
      <section className="relative overflow-hidden bg-[#c9c9c9] on-gray py-20 px-6">
        <GrayAccentBorder />
        <div className="relative z-10 max-w-[1170px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white border border-[#aaaaaa] p-8 flex flex-col hover:border-[#2cd9fe] transition-colors group"
              >
                <div className="h-[4px] w-12 bg-[#2cd9fe] mb-6 group-hover:w-full transition-all duration-300" />
                <p className="text-[#555] text-xs uppercase tracking-widest mb-3">{post.date}</p>
                <h2 className="text-[#000000] font-bold text-[21px] leading-snug mb-4 flex-1">
                  {post.title}
                </h2>
                <p className="text-[#333] text-[12px] leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex items-center gap-2 mt-auto">
                  <span className="text-[#2cd9fe] text-xs font-semibold uppercase tracking-widest">Read More</span>
                  <svg className="w-4 h-4 text-[#2cd9fe]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
