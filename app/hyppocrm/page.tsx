import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ImageLightbox from '@/components/ImageLightbox';
import { HeroText } from '@/components/AnimatedSection';
import CircuitBackground from '@/components/CircuitBackground';
import GrayAccentBorder from '@/components/GrayAccentBorder';
import { FlowBorderH } from '@/components/FlowBorder';

import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'HyppoCRM — AI-Powered CRM for Small Business | Palm Bay, FL',
  description: 'HyppoAI provides HyppoCRM, an AI-powered CRM for small businesses in Palm Bay, FL. Automate follow-up & close more deals. Call (732) 962-3725.',
  keywords: ['HyppoCRM', 'AI CRM', 'small business CRM', 'automated follow-up', 'lead tracking', 'CRM automation', 'sales automation', 'Palm Bay Florida', 'HyppoAI', 'pipeline management', 'contact management', 'automated CRM'],
  path: '/hyppocrm',
});


export default function HyppoCRMPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-black min-h-[80vh] flex flex-col justify-center px-6 py-12 border-b border-[#1a1a1a]">
        <CircuitBackground />
        <div className="relative z-10 max-w-[1170px] mx-auto text-center">
          <HeroText>
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight max-w-4xl mb-3 mx-auto">
              Hyppo<span className="text-[#2cd9fe]">CRM</span>
            </h1>
          </HeroText>
          <HeroText>
            <p className="text-white text-[21px] max-w-2xl mb-6 leading-relaxed mx-auto">
              Hyppo<span className="text-[#2cd9fe]">AI</span>'s centralized system for managing leads, jobs, payments, and follow-up — built to eliminate chaos and manual tracking.
            </p>
          </HeroText>
          <HeroText>
            <Link href="/contact" className="btn-primary">Automate My Leads</Link>
          </HeroText>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#c9c9c9] on-gray py-20 px-6 border-b border-[#1a1a1a]">
        <GrayAccentBorder />
        <div className="relative z-10 max-w-[1170px] mx-auto">
          <h2 className="text-5xl md:text-8xl font-bold text-[#000000] text-center mb-12">
            Every lead organized. Every follow-up handled. Nothing missed.
          </h2>
          <div>
            {[
              {
                subheading: <>Hyppo<span className="text-[#2cd9fe]">CRM</span> Basic</>,
                text: 'HyppoCRM Basic gives you one place to capture, organize, and manage all leads, jobs, and payments without spreadsheets, sticky notes, or scattered tools.',
                image: 'https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/a4cdd6b1-7743-45cd-a401-9559302cf8e4/root/1775750016936_hyppocrm-basic-automated-workflow-dashboard.png',
                alt: 'HyppoCRM Basic workflow illustration demonstrating a simplified business automation sequence, featuring integrated modules for tracking tasks, financial data, and performance analytics.',
              },
              {
                subheading: <>Hyppo<span className="text-[#2cd9fe]">CRM</span> Plus</>,
                text: 'HyppoCRM Plus adds automated email and SMS follow-up so leads are contacted instantly and consistently without manual outreach.',
                image: 'https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/a4cdd6b1-7743-45cd-a401-9559302cf8e4/root/1775750150298_hyppocrm-plus-advanced-automation-lead-funnel.png',
                alt: 'HyppoCRM Plus advanced automation workflow illustrating high-volume lead capture and automated multi-channel distribution for SMS and email marketing campaigns.',
              },
            ].map((row, i) => (
              <React.Fragment key={i}>
              {i > 0 && <FlowBorderH />}
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-10 flex flex-col gap-4 justify-center">
                  <h3 className="text-[28px] md:text-[48px] font-bold text-[#000000] text-center">{row.subheading}</h3>
                  <p className="text-[#000000] text-[21px] leading-relaxed">{row.text}</p>
                </div>
                <div className="p-10 flex items-center justify-center relative">
                  <ImageLightbox src={row.image} alt={(row as {alt?: string}).alt ?? String(row.subheading)} width={500} height={400} className="object-contain w-full h-auto" />
                </div>
              </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
