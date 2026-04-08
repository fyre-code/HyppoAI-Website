import type { Metadata } from 'next';
import Image from 'next/image';
import { HeroText } from '@/components/AnimatedSection';
import CircuitBackground from '@/components/CircuitBackground';
import GrayAccentBorder from '@/components/GrayAccentBorder';
import { FlowBorderV } from '@/components/FlowBorder';
import NextAvailableDate from '@/components/NextAvailableDate';

export const metadata: Metadata = {
  title: 'Contact — HyppoAI',
  description: 'Book a strategy session with HyppoAI. We\'ll show you exactly what automation looks like for your business.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black min-h-[80vh] flex flex-col justify-center px-6 py-12 border-b border-[#1a1a1a]">
        <CircuitBackground />
        <div className="relative z-10 max-w-[1170px] mx-auto text-center">
          <HeroText>
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight mx-auto">
              Get In Touch
            </h1>
          </HeroText>
        </div>
      </section>

      {/* Booking Table */}
      <section className="relative overflow-hidden bg-[#c9c9c9] on-gray py-20 px-6">
        <GrayAccentBorder compact />
        <div className="relative z-10 max-w-[1170px] mx-auto">
          <div className="grid grid-cols-[6px_1fr_6px]">
            <FlowBorderV />
            <div className="grid grid-cols-1 md:grid-cols-[1fr_6px_2fr]">

              {/* Left column */}
              <div className="flex flex-col gap-5 items-center text-center p-10">
                {/* Logo */}
                <Image
                  src="/logo.png"
                  alt="HyppoAI"
                  width={240}
                  height={72}
                  className="h-20 w-auto"
                />

                {/* Session title */}
                <p className="text-[#000000] text-[21px] font-semibold leading-snug">
                  HyppoAI Business Systems Strategy Session (Website Booking)
                </p>

                {/* Duration */}
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 shrink-0 text-[#2cd9fe]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                  </svg>
                  <span className="text-[#000000] text-[21px]">30 minutes</span>
                </div>

                {/* Next available date */}
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 shrink-0 text-[#2cd9fe]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  <span className="text-[#000000] text-[21px]">
                    <NextAvailableDate />
                  </span>
                </div>

                {/* Text block */}
                <div className="text-left text-[12px] leading-relaxed text-[#000000] flex flex-col gap-3 mt-2">
                  <p>
                    <strong>If you&apos;re a business owner trying to fix a growth, automation, or follow-up problem&hellip;</strong>
                  </p>
                  <p>
                    Book time below for a short working session to see whether we can help and what the right next step would be.
                  </p>
                  <p>
                    You&apos;ll leave with clarity—whether we&apos;re a fit or not.
                  </p>
                </div>
              </div>

              {/* Column divider */}
              <FlowBorderV className="hidden md:block" />

              {/* Right column — booking calendar */}
              <div className="p-10 flex flex-col gap-6">
                <p className="text-[#000000] text-[28px] md:text-[48px] font-bold">Select Date &amp; Time</p>
                <iframe
                  src="https://hyppohq.io/book/afb93484-fec9-43a8-b943-847eba0be516?embed=true&theme=dark"
                  style={{ width: '100%', minHeight: '700px', border: 'none' }}
                  allowFullScreen
                  title="Book a HyppoAI Strategy Session"
                />
              </div>

            </div>
            <FlowBorderV />
          </div>
        </div>
      </section>
    </>
  );
}
