import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroText } from '@/components/AnimatedSection';
import CircuitBackground from '@/components/CircuitBackground';

import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Custom AI Automation Builds — HyppoAI | Palm Bay, FL',
  description: 'HyppoAI builds custom AI automation systems from the ground up for businesses in Palm Bay, FL. Unique solutions. Call (732) 962-3725.',
  keywords: ['custom AI automation', 'custom automation builds', 'bespoke AI systems', 'custom business automation', 'workflow automation', 'API integrations', 'Palm Bay Florida', 'HyppoAI', 'AI workflow', 'business process automation', 'automation development', 'custom software'],
  path: '/custom-builds',
});

export default function CustomBuildsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-black min-h-[80vh] flex flex-col justify-center px-6 py-12 border-b border-[#1a1a1a]">
        <CircuitBackground />
        <div className="relative z-10 max-w-[1170px] mx-auto text-center">
          <HeroText>
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight mb-3 mx-auto">
              Custom Builds
            </h1>
          </HeroText>
          <HeroText>
            <p className="text-white text-[21px] max-w-2xl mb-6 leading-relaxed mx-auto">
              Need something advanced? Let's see if we can build it.
            </p>
          </HeroText>
          <HeroText>
            <Link href="/contact" className="btn-primary">Get a Custom Build</Link>
          </HeroText>
        </div>
      </section>
    </>
  );
}
