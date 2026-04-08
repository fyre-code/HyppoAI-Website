import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroText } from '@/components/AnimatedSection';
import CircuitBackground from '@/components/CircuitBackground';
import GrayAccentBorder from '@/components/GrayAccentBorder';
import { FlowBorderV } from '@/components/FlowBorder';

import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Reputation Management Automation — HyppoAI | Palm Bay, FL',
  description: 'HyppoAI automates review requests & reputation management for businesses in Palm Bay, FL. Build trust on autopilot. Call (732) 962-3725.',
  keywords: ['reputation management', 'review automation', 'Google reviews', 'automated review requests', 'online reputation', 'small business reviews', 'Palm Bay Florida', 'HyppoAI', 'review generation', 'brand reputation', '5 star reviews', 'reputation monitoring'],
  path: '/reputation',
});


export default function ReputationPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-black min-h-[80vh] flex flex-col justify-center px-6 py-12 border-b border-[#1a1a1a]">
        <CircuitBackground />
        <div className="relative z-10 max-w-[1170px] mx-auto text-center">
          <HeroText>
            <h1 className="text-5xl md:text-8xl font-bold text-[#2cd9fe] leading-tight mb-1 mx-auto">
              Reputation
            </h1>
          </HeroText>
          <HeroText>
            <p className="text-white text-[28px] md:text-[48px] font-bold whitespace-nowrap mb-3">Management & Reviews</p>
          </HeroText>
          <HeroText>
            <p className="text-white text-[21px] max-w-2xl mb-6 leading-relaxed mx-auto">
              HyppoAds installs reputation management automation that requests, routes, and responds to reviews automatically so your online reputation grows and protects itself.
            </p>
          </HeroText>
          <HeroText>
            <Link href="https://api.hyppocrm.com/widget/booking/fKaW48nTCxlxxHygIUic" className="btn-primary">Automate My Reviews</Link>
          </HeroText>
        </div>
      </section>

      {/* What it Does */}
      <section className="relative overflow-hidden bg-[#c9c9c9] on-gray py-20 px-6 border-b border-[#1a1a1a]">
        <GrayAccentBorder />
        <div className="relative z-10 max-w-[1170px] mx-auto">
          <h2 className="text-[28px] md:text-[48px] font-bold text-[#000000] mb-16 text-center">What it Does</h2>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_6px_1fr_6px_1fr] gap-0">
            {[
              {
                subheading: 'Increase 5-star reviews',
                icon: (
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="#2cd9fe">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ),
              },
              {
                subheading: 'Protect your reputation',
                icon: (
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="#2cd9fe">
                    <path d="M12 2L4 5v6c0 5.25 3.5 10.15 8 11.35C16.5 21.15 20 16.25 20 11V5l-8-3z" />
                  </svg>
                ),
              },
              {
                subheading: 'Improves local SEO visibility',
                icon: (
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="#2cd9fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                ),
              },
            ].map((cell, i) => (
              <>
              {i > 0 && <FlowBorderV key={`border-${i}`} className="hidden md:block" />}
              <div key={cell.subheading} className="flex flex-col items-center text-center gap-4 p-10">
                {cell.icon}
                <h3 className="text-[#000000] text-[21px] font-bold">{cell.subheading}</h3>
              </div>
              </>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link href="https://api.hyppocrm.com/widget/booking/fKaW48nTCxlxxHygIUic" className="btn-primary">Automate My Reviews</Link>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-[1170px] mx-auto text-center">
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-8">
            Bottom Line:<br />Happy customers become public <span className="text-[#2cd9fe]">proof.</span>
          </h2>
          <Link href="https://api.hyppocrm.com/widget/booking/fKaW48nTCxlxxHygIUic" className="btn-primary">Automate My Reviews</Link>
        </div>
      </section>
    </>
  );
}
