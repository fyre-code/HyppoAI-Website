import type { Metadata } from 'next';
import Link from 'next/link';
import { FadeUp, FadeLeft, FadeRight, StaggerList, StaggerItem, HeroText } from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Website Systems — HyppoAI',
  description: 'HyppoAI builds high-converting websites integrated with your full automation stack.',
};

const features = [
  { title: 'Conversion-First Design', description: 'Every page is built to turn visitors into leads — not just look good.' },
  { title: 'Automation Integration', description: 'Your site connects directly to your CRM, booking system, and follow-up sequences.' },
  { title: 'Lead Capture Forms', description: 'Smart forms that route leads into the right pipeline the moment they submit.' },
  { title: 'Speed & SEO Optimized', description: 'Fast-loading, mobile-first builds that rank well and keep visitors engaged.' },
  { title: 'Live Chat & AI Assistant', description: 'An AI assistant on your site that answers questions and captures leads — 24/7.' },
  { title: 'Ongoing Maintenance', description: 'We handle updates, security, and performance so you never have to think about it.' },
];

export default function WebsitePage() {
  return (
    <>
      <section className="bg-black min-h-[80vh] flex flex-col justify-center px-6 py-24 border-b border-[#1a1a1a]">
        <div className="max-w-[1170px] mx-auto relative z-10">
          <HeroText><p className="text-[#2cd9fe] text-xs uppercase tracking-widest mb-4">System 05 — Website</p></HeroText>
          <HeroText>
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight max-w-4xl mb-6">
              Built to <span className="text-[#2cd9fe]">Convert</span>
            </h1>
          </HeroText>
          <HeroText>
            <p className="text-white text-[21px] max-w-2xl mb-10 leading-relaxed">
              We build websites that are integrated with your full automation stack — not just a
              digital brochure, but a 24/7 lead capture and sales machine.
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
            <h2 className="text-[28px] md:text-[48px] font-bold text-white mb-6">Your Website Is an Island</h2>
            <p className="text-white leading-relaxed text-[21px] mb-4">
              Most business websites collect visitors and do nothing with them. No follow-up, no
              automation, no integration with your pipeline — just a page that sits there.
            </p>
            <p className="text-white leading-relaxed">
              We build sites that are the front door to your entire automation system — so every
              visitor becomes a lead, and every lead gets followed up automatically.
            </p>
          </FadeLeft>
          <FadeRight className="md:w-1/2">
            <div className="border border-[#1a1a1a] p-10 bg-black">
              <p className="text-[#2cd9fe] text-xs uppercase tracking-widest mb-6">A Site That Doesn't Convert</p>
              {['Visitors leave without taking action', 'No connection to your CRM or calendar', 'Leads submitted through a form — and forgotten', 'Slow speed and poor mobile experience lose prospects'].map((item) => (
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
            <h2 className="text-[28px] md:text-[48px] font-bold text-white mb-16">Inside the Website System</h2>
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
            <h2 className="text-[28px] md:text-[48px] font-bold text-white mb-4">Turn Your Website Into a System</h2>
            <p className="text-white mb-8 max-w-lg mx-auto">
              Book a session and we'll show you what an integrated website build looks like for your business.
            </p>
            <Link href="https://api.hyppocrm.com/widget/booking/fKaW48nTCxlxxHygIUic" className="btn-primary">Get This System</Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
