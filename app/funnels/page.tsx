import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { HeroText } from '@/components/AnimatedSection';
import CircuitBackground from '@/components/CircuitBackground';
import { FlowBorderH, FlowBorderV } from '@/components/FlowBorder';

export const metadata: Metadata = {
  title: 'Advertising & Funnels — HyppoAI',
  description: 'AI-generated ad creatives, funnel management, and automated follow-up — built to convert traffic into clients.',
};

const funnelOptions = [
  {
    subheading: 'AI-Generated Creatives',
    text: "AI generates and refreshes ad creatives continuously so performance doesn't stall due to creative fatigue.",
    cta: 'Automate Creatives',
    image: '/funnels-creatives.png',
  },
  {
    subheading: 'Funnel & Ad Management',
    text: 'Ads are managed alongside conversion-optimized funnels designed to capture, qualify, and route leads automatically.',
    cta: 'Automate Funnels',
    image: '/funnels-funnels.png',
  },
  {
    subheading: 'SMS & Email Automations',
    text: 'Every lead from ads triggers automated SMS and email follow-ups to increase contact rate, speed to response, and conversions.',
    cta: 'Automate Follow-Up',
    image: '/funnels-sms.png',
  },
];

export default function FunnelsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black min-h-[80vh] flex flex-col justify-center px-6 py-12 border-b border-[#1a1a1a]">
        <CircuitBackground />
        <div className="relative z-10 max-w-[1170px] mx-auto text-center">
          <HeroText>
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight mb-3 mx-auto">
              Advertising <span className="text-[#2cd9fe]">&</span> Funnels
            </h1>
          </HeroText>
          <HeroText>
            <p className="text-white text-[21px] max-w-2xl mb-6 leading-relaxed mx-auto">
              Traffic only works when the system behind it is built to <span className="text-[#2cd9fe]">convert.</span>
            </p>
          </HeroText>
          <HeroText>
            <Link href="https://api.hyppocrm.com/widget/booking/fKaW48nTCxlxxHygIUic" className="btn-primary">Automate My Advertising</Link>
          </HeroText>
        </div>
      </section>

      {/* Options */}
      <section className="bg-[#c9c9c9] on-gray py-20 px-6">
        <div className="max-w-[1170px] mx-auto">
          <FlowBorderH />
          <div className="grid grid-cols-[6px_1fr_6px]">
            <FlowBorderV />
            <div>
          {funnelOptions.map((row, i) => {
            const textRight = i % 2 !== 0;
            return (
              <React.Fragment key={row.subheading}>
                {i > 0 && <FlowBorderH />}
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className={`p-10 flex flex-col gap-4 justify-center items-center text-center ${textRight ? 'md:order-last' : ''}`}>
                    <h3 className="text-[28px] md:text-[48px] font-bold text-[#000000]">{row.subheading}</h3>
                    <p className="text-[#000000] text-[21px] leading-relaxed">{row.text}</p>
                    <div>
                      <Link href="https://api.hyppocrm.com/widget/booking/fKaW48nTCxlxxHygIUic" className="btn-primary">{row.cta}</Link>
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
            <FlowBorderV />
          </div>
          <FlowBorderH />
        </div>
      </section>
    </>
  );
}
