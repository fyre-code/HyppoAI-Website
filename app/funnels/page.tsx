import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ImageLightbox from '@/components/ImageLightbox';
import { HeroText } from '@/components/AnimatedSection';
import CircuitBackground from '@/components/CircuitBackground';
import { FlowBorderH, FlowBorderV } from '@/components/FlowBorder';

import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'AI Advertising & Funnels — HyppoAI | Palm Bay, FL',
  description: 'HyppoAI builds AI-generated ad creatives & automated funnels for businesses in Palm Bay, FL. Convert traffic to clients. Call (732) 962-3725.',
  keywords: ['AI advertising', 'sales funnels', 'funnel automation', 'ad creatives AI', 'lead generation funnels', 'digital advertising', 'automated funnels', 'Palm Bay Florida', 'HyppoAI', 'conversion funnels', 'Facebook ads automation', 'AI ad generation'],
  path: '/funnels',
});

const funnelOptions = [
  {
    subheading: 'AI-Generated Creatives',
    text: "AI generates and refreshes ad creatives continuously so performance doesn't stall due to creative fatigue.",
    cta: 'Automate Creatives',
    image: 'https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/a4cdd6b1-7743-45cd-a401-9559302cf8e4/root/1775750912247_ai-generated-ad-creatives.png',
    alt: "HyppoAI's AI-Generated Creatives workflow: An automated system that continuously refreshes and optimizes social media ad assets to maintain high performance and engagement scale.",
  },
  {
    subheading: 'Funnel & Ad Management',
    text: 'Ads are managed alongside conversion-optimized funnels designed to capture, qualify, and route leads automatically.',
    cta: 'Automate Funnels',
    image: 'https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/a4cdd6b1-7743-45cd-a401-9559302cf8e4/root/1775751122836_hyppo-ai-ad-management-conversion-funnel.png',
    alt: 'HyppoAI Funnel and Ad Management illustration: Scaling business ads through conversion-optimized funnels that automatically capture, qualify, and route leads into a backend automation system.',
  },
  {
    subheading: 'SMS & Email Automations',
    text: 'Every lead from ads triggers automated SMS and email follow-ups to increase contact rate, speed to response, and conversions.',
    cta: 'Automate Follow-Up',
    image: 'https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/a4cdd6b1-7743-45cd-a401-9559302cf8e4/root/1775751342628_sms-email-marketing-automation-lead-followup.png',
    alt: 'HyppoAI SMS and Email Automations workflow illustrating the automated process of contacting leads instantly via text and email to improve response times and conversion rates.',
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
            <Link href="/contact" className="btn-primary">Automate My Advertising</Link>
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
                      <Link href="/contact" className="btn-primary">{row.cta}</Link>
                    </div>
                  </div>
                  <div className="p-10 flex items-center justify-center">
                    <ImageLightbox src={row.image} alt={(row as {alt?: string}).alt ?? row.subheading} width={500} height={400} className="object-contain w-full h-auto" />
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
