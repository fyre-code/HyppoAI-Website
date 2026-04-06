import type { Metadata } from 'next';
import Link from 'next/link';
import { FadeUp, FadeLeft, FadeRight, StaggerList, StaggerItem, HeroText } from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Funnels — HyppoAI',
  description: 'Custom-built sales funnels that guide prospects from click to booked appointment — automatically.',
};

const features = [
  { title: 'Custom Funnel Build', description: 'Every funnel is built around your specific offer, audience, and close process.' },
  { title: 'Automated Follow-Up', description: 'Email and SMS sequences that nurture leads from opt-in to booked appointment — without manual sending.' },
  { title: 'Landing Page Design', description: 'High-converting pages built to capture attention and drive action — not just look pretty.' },
  { title: 'Ad Integration', description: 'Funnels connect directly to your Facebook, Google, or Instagram ads for seamless lead flow.' },
  { title: 'Split Testing', description: 'We test variations to find what converts best — then scale what works.' },
  { title: 'Analytics & Reporting', description: 'See your opt-in rate, cost per lead, and booked appointments — all in one view.' },
];

export default function FunnelsPage() {
  return (
    <>
      <section className="bg-black min-h-[80vh] flex flex-col justify-center px-6 py-12 border-b border-[#1a1a1a]">
        <div className="max-w-[1170px] mx-auto relative z-10">
          <HeroText><p className="text-[#2cd9fe] text-xs uppercase tracking-widest mb-3">System 06 — Funnels</p></HeroText>
          <HeroText>
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight max-w-4xl mb-3">
              Turn Clicks Into <span className="text-[#2cd9fe]">Clients</span>
            </h1>
          </HeroText>
          <HeroText>
            <p className="text-white text-[21px] max-w-2xl mb-6 leading-relaxed">
              Custom-built sales funnels that guide prospects from first touch to booked
              appointment — with automated follow-up sequences that do the selling for you.
            </p>
          </HeroText>
          <HeroText>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://api.hyppocrm.com/widget/booking/fKaW48nTCxlxxHygIUic" className="btn-primary">Get This System</Link>
              <Link href="/results" className="btn-outline">See Results</Link>
            </div>
          </HeroText>
        </div>

      </section>

      <section className="bg-[#0a0a0a] py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-[1170px] mx-auto flex flex-col md:flex-row gap-16 items-center">
          <FadeLeft className="md:w-1/2">
            <p className="text-[#2cd9fe] text-xs uppercase tracking-widest mb-4">The Problem</p>
            <h2 className="text-[28px] md:text-[48px] font-bold text-white mb-6">Ads Drive Traffic. Funnels Convert It.</h2>
            <p className="text-white leading-relaxed text-[21px] mb-4">
              Most businesses spend money on ads and send traffic to a homepage that wasn't built to
              convert. The lead lands, gets confused, and leaves — and you paid for the click.
            </p>
            <p className="text-white leading-relaxed">
              A proper funnel takes a cold lead and walks them step-by-step to a booked appointment —
              with automated follow-up filling in the gaps.
            </p>
          </FadeLeft>
          <FadeRight className="md:w-1/2">
            <div className="border border-[#1a1a1a] p-10 bg-black">
              <p className="text-[#2cd9fe] text-xs uppercase tracking-widest mb-6">Without a Funnel</p>
              {['Ad spend goes to a page that doesn\'t convert', 'Leads opt in but never get followed up', 'No system for moving a prospect to a booking', 'You can\'t track what\'s working or why'].map((item) => (
                <div key={item} className="flex items-start gap-3 mb-4 text-white">
                  <svg className="w-4 h-4 text-red-500 mt-1 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </FadeRight>
        </div>
      </section>

      <section className="bg-black py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-[1170px] mx-auto">
          <FadeUp>
            <p className="text-[#2cd9fe] text-xs uppercase tracking-widest mb-4">What's Included</p>
            <h2 className="text-[28px] md:text-[48px] font-bold text-white mb-16">Inside the Funnels System</h2>
          </FadeUp>
          <StaggerList className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#1a1a1a]">
            {features.map((f, i) => (
              <StaggerItem key={f.title}>
                <div className={`p-8 border-b border-r border-[#1a1a1a] h-full ${i % 3 === 2 ? 'md:border-r-0' : ''}`}>
                  <div className="w-8 h-8 border border-[#2cd9fe] flex items-center justify-center mb-4">
                    <div className="w-2 h-2 bg-[#2cd9fe]" />
                  </div>
                  <h3 className="text-white font-bold text-[21px] mb-2">{f.title}</h3>
                  <p className="text-white text-sm leading-relaxed">{f.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-[1170px] mx-auto text-center">
          <FadeUp>
            <h2 className="text-[28px] md:text-[48px] font-bold text-white mb-4">Build a Funnel That Actually Converts</h2>
            <p className="text-white mb-8 max-w-lg mx-auto">
              Book a session and we'll map out what a funnel for your specific offer looks like.
            </p>
            <Link href="https://api.hyppocrm.com/widget/booking/fKaW48nTCxlxxHygIUic" className="btn-primary">Get This System</Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
