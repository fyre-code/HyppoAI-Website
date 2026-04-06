import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { HeroText } from '@/components/AnimatedSection';
import CircuitBackground from '@/components/CircuitBackground';
import { FlowBorderH } from '@/components/FlowBorder';

export const metadata: Metadata = {
  title: 'Website Builds — HyppoAI',
  description: 'HyppoAI builds websites that convert, rank, and connect to automation — not just look good.',
};

const websiteOptions = [
  {
    subheading: 'Simple Landing Page',
    text: 'A fast, focused landing page designed to capture leads quickly and route them directly into your CRM and automation workflows.',
    image: '/website-landing.png',
  },
  {
    subheading: 'Fully Optimized Website',
    text: 'A multi-page website built for speed, search visibility, and conversion, fully connected to CRM, automations, and follow-up systems.',
    image: '/website-optimized.png',
  },
  {
    subheading: 'Full eCommerce Store',
    text: 'A complete eCommerce website designed to sell products, process payments, and trigger post-purchase automations automatically.',
    image: '/website-ecommerce.png',
  },
];

export default function WebsitePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black min-h-[80vh] flex flex-col justify-center px-6 py-12 border-b border-[#1a1a1a]">
        <CircuitBackground />
        <div className="relative z-10 max-w-[1170px] mx-auto text-center">
          <HeroText>
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight mb-3 mx-auto">
              <span className="text-[#2cd9fe]">Website</span> Builds
            </h1>
          </HeroText>
          <HeroText>
            <p className="text-white text-[21px] max-w-2xl mb-6 leading-relaxed mx-auto">
              Built to <span className="text-[#2cd9fe]">convert</span>, <span className="text-[#2cd9fe]">rank</span>, and <span className="text-[#2cd9fe]">connect</span> to automation — not just look good.
            </p>
          </HeroText>
          <HeroText>
            <Link href="https://api.hyppocrm.com/widget/booking/fKaW48nTCxlxxHygIUic" className="btn-primary">Automate My Website</Link>
          </HeroText>
        </div>
      </section>

      {/* Options */}
      <section className="bg-[#c9c9c9] on-gray py-20 px-6">
        <div className="max-w-[1170px] mx-auto">
          <h2 className="text-5xl md:text-8xl font-bold text-[#000000] text-center mb-12">
            See Our Options for Website Builds
          </h2>
          <div>
            {websiteOptions.map((row, i) => {
              const textRight = i % 2 !== 0;
              return (
                <React.Fragment key={row.subheading}>
                {i > 0 && <FlowBorderH />}
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className={`p-10 flex flex-col gap-4 justify-center items-center text-center ${textRight ? 'md:order-last' : ''}`}>
                    <h3 className="text-[28px] md:text-[48px] font-bold text-[#000000]">{row.subheading}</h3>
                    <p className="text-[#000000] text-[21px] leading-relaxed">{row.text}</p>
                    <div>
                      <Link href="https://api.hyppocrm.com/widget/booking/fKaW48nTCxlxxHygIUic" className="btn-primary">Automate My Website</Link>
                    </div>
                  </div>
                  <div className="p-10 flex items-center justify-center">
                    <Image src={row.image} alt={row.subheading} width={500} height={400} className="object-contain w-full h-auto" />
                  </div>
                </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
