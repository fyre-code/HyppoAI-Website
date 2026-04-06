import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custom Builds — HyppoAI',
  description: 'When off-the-shelf systems aren\'t enough, HyppoAI builds custom AI automation solutions from the ground up.',
};

const examples = [
  {
    title: 'Automated Client Onboarding',
    description: 'New clients trigger a full sequence — welcome email, intake forms, packet delivery, and calendar invites — without a human touching anything.',
  },
  {
    title: 'AI-Powered Internal Workflows',
    description: 'Automate internal processes like invoicing, reporting, task assignment, and team notifications across your tools.',
  },
  {
    title: 'Multi-Location Coordination',
    description: 'Custom systems that coordinate leads, staff, and operations across multiple business locations from a single dashboard.',
  },
  {
    title: 'Industry-Specific Automation',
    description: 'Built around your exact business model — whether you\'re in healthcare, real estate, home services, or anything else.',
  },
];

export default function CustomBuildsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black py-12 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-[1170px] mx-auto">
          <p className="text-[#2cd9fe] text-xs uppercase tracking-widest mb-3">Custom Builds</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl mb-3">
            When Standard Systems Aren't Enough
          </h1>
          <p className="text-white text-[21px] max-w-2xl leading-relaxed mb-6">
            Some businesses have processes that don't fit a pre-built mold. We build custom
            automation systems from the ground up — designed specifically around how your
            business actually works.
          </p>
          <Link href="https://api.hyppocrm.com/widget/booking/fKaW48nTCxlxxHygIUic" className="btn-primary">Tell Us What You Need</Link>
        </div>
      </section>

      {/* What This Looks Like */}
      <section className="bg-[#0a0a0a] py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-[1170px] mx-auto">
          <p className="text-[#2cd9fe] text-xs uppercase tracking-widest mb-4">Examples</p>
          <h2 className="text-[28px] md:text-[48px] font-bold text-white mb-16">What Custom Builds Look Like</h2>
          <div className="grid md:grid-cols-2 gap-0 border border-[#1a1a1a]">
            {examples.map((ex, i) => (
              <div key={ex.title} className={`p-10 border-b border-r border-[#1a1a1a] ${i % 2 === 1 ? 'md:border-r-0' : ''} ${i >= examples.length - 2 ? 'border-b-0' : ''}`}>
                <div className="w-8 h-8 border border-[#2cd9fe] flex items-center justify-center mb-4">
                  <div className="w-2 h-2 bg-[#2cd9fe]" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{ex.title}</h3>
                <p className="text-white leading-relaxed">{ex.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-[1170px] mx-auto">
          <p className="text-[#2cd9fe] text-xs uppercase tracking-widest mb-4">How It Works</p>
          <h2 className="text-[28px] md:text-[48px] font-bold text-white mb-16">Our Custom Build Process</h2>
          <div className="flex flex-col gap-0 border border-[#1a1a1a]">
            {[
              { step: '01', title: 'Discovery Session', description: 'We spend time understanding your business, your bottlenecks, and what you want automated.' },
              { step: '02', title: 'System Design', description: 'We map out the full automation flow — inputs, triggers, actions, and outputs — before we build anything.' },
              { step: '03', title: 'Build & Test', description: 'We build the system and run it through real-world scenarios to make sure it works exactly as designed.' },
              { step: '04', title: 'Launch & Handoff', description: 'We launch the system, walk you through how it works, and stay available for any adjustments.' },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-8 p-10 border-b border-[#1a1a1a] last:border-b-0">
                <p className="text-[28px] md:text-[48px] font-bold text-[#2cd9fe] opacity-50 shrink-0 w-12">{s.step}</p>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">{s.title}</h3>
                  <p className="text-white leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-[1170px] mx-auto text-center">
          <h2 className="text-[28px] md:text-[48px] font-bold text-white mb-4">Have Something Specific in Mind?</h2>
          <p className="text-white mb-8 max-w-lg mx-auto">
            Tell us what you're trying to automate. If it's possible, we'll build it.
          </p>
          <Link href="https://api.hyppocrm.com/widget/booking/fKaW48nTCxlxxHygIUic" className="btn-primary">Start the Conversation</Link>
        </div>
      </section>
    </>
  );
}
