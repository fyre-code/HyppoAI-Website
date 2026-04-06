import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — HyppoAI',
  description: 'Insights on AI automation, business systems, and growth from the HyppoAI team.',
};

export default function BlogPage() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-[1170px] mx-auto">
        <p className="text-[#2cd9fe] text-xs uppercase tracking-widest mb-4">Blog</p>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Insights & Updates</h1>
        <p className="text-[#c9c9c9] text-[21px] max-w-2xl mb-16">
          Thoughts on AI automation, business systems, and what it actually takes to build a business that doesn't break.
        </p>
        <div className="border border-[#1a1a1a] p-16 text-center">
          <p className="text-[#555] text-[21px]">Blog posts coming soon.</p>
        </div>
      </div>
    </section>
  );
}
