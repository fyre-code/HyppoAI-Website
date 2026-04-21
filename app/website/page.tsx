import type { Metadata } from 'next';
import Link from 'next/link';

import ImageLightbox from '@/components/ImageLightbox';
import React from 'react';
import { HeroText } from '@/components/AnimatedSection';
import CircuitBackground from '@/components/CircuitBackground';
import { FlowBorderH } from '@/components/FlowBorder';
import HeadingAccent from '@/components/HeadingAccent';
import GrayAccentBorder from '@/components/GrayAccentBorder';

import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'AI Website Builds — HyppoAI | Palm Bay, FL',
  description: 'HyppoAI builds conversion-focused websites connected to AI automation for businesses in Palm Bay, FL. Call (732) 962-3725.',
  keywords: ['AI website design', 'business website', 'conversion website', 'website automation', 'small business website', 'Palm Bay Florida', 'HyppoAI', 'website development', 'lead generating website', 'SEO website', 'AI web design', 'automated website'],
  path: '/website',
});

const websiteOptions = [
  {
    subheading: 'Simple Landing Page',
    text: 'A fast, focused landing page designed to capture leads quickly and route them directly into your CRM and automation workflows.',
    image: 'https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/a4cdd6b1-7743-45cd-a401-9559302cf8e4/root/1775750349501_simple-lead-capture-landing-page-crm-integration.png',
    alt: 'HyppoAI landing page illustration demonstrating instant lead capture and automated integration with CRM databases and time-triggered marketing workflows.',
  },
  {
    subheading: 'Fully Optimized Website',
    text: 'A multi-page website built for speed, search visibility, and conversion, fully connected to CRM, automations, and follow-up systems.',
    image: 'https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/a4cdd6b1-7743-45cd-a401-9559302cf8e4/root/1775750523658_fully-optimized-business-website-architecture.png',
    alt: 'HyppoAI fully optimized website illustration, detailing the connection between high-speed web design, organized site structure, and integrated CRM automation for lead conversion.',
  },
  {
    subheading: 'Full eCommerce Store',
    text: 'A complete eCommerce website designed to sell products, process payments, and trigger post-purchase automations automatically.',
    image: 'https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/a4cdd6b1-7743-45cd-a401-9559302cf8e4/root/1775750707910_hyppoai-complete-ecommerce-website-automation.png',
    alt: 'HyppoAI Full eCommerce Store illustration demonstrating the automated flow from product purchase and payment processing to post-purchase fulfillment and customer communication.',
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
            <Link href="/contact" className="btn-primary">Automate My Website</Link>
          </HeroText>
        </div>
      </section>

      {/* Options */}
      <section className="relative overflow-hidden bg-white py-20 px-6">
        <GrayAccentBorder />
        <div className="relative z-10 max-w-[1170px] mx-auto">
          <div className="relative mb-12">
            <HeadingAccent />
            <h2 className="relative z-10 text-5xl md:text-8xl font-bold text-[#000000] text-center py-8 px-16">
              See Our Options for Website Builds
            </h2>
          </div>
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
                      <Link href="/contact" className="btn-primary">Automate My Website</Link>
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
        </div>
      </section>
    </>
  );
}
