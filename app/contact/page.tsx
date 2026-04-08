import type { Metadata } from 'next';
import GrayAccentBorder from '@/components/GrayAccentBorder';
import { FlowBorderV } from '@/components/FlowBorder';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Contact HyppoAI — Book a Free Strategy Session | Palm Bay, FL',
  description: 'Book a free 30-min strategy session with HyppoAI in Palm Bay, FL. See exactly how automation works for your business. Call (732) 962-3725.',
  keywords: ['contact HyppoAI', 'book strategy session', 'business automation consultation', 'AI automation demo', 'Palm Bay Florida', 'HyppoAI contact', 'free strategy session', 'automation booking', 'small business consultation', 'AI consultation', 'Hyppo Advertising contact'],
  path: '/contact',
});

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-[#c9c9c9] on-gray py-20 px-6">
      <GrayAccentBorder compact />
      <div className="relative z-10 max-w-[1170px] mx-auto">
        <h1 className="text-5xl md:text-8xl font-bold text-[#000000] text-center mb-12">Contact Us</h1>
        <div className="grid grid-cols-[6px_1fr_6px]">
          <FlowBorderV />
          <div className="p-6 md:p-10 flex flex-col gap-6">
            <iframe
              src="https://hyppohq.io/book/afb93484-fec9-43a8-b943-847eba0be516?embed=true&theme=dark"
              style={{ width: '100%', minHeight: '700px', border: 'none' }}
              allowFullScreen
              title="Book a HyppoAI Strategy Session"
            />
          </div>
          <FlowBorderV />
        </div>
      </div>
    </section>
  );
}
