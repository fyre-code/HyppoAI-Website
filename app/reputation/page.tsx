import type { Metadata } from 'next';
import Link from 'next/link';
import { FadeUp, FadeLeft, FadeRight, StaggerList, StaggerItem, HeroText } from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Reputation Management — HyppoAI',
  description: 'Automate review requests, monitor your online reputation, and respond to feedback — all hands-free.',
};

const features = [
  { title: 'Automated Review Requests', description: 'After every job, an automated message goes out asking happy customers to leave a review.' },
  { title: 'Multi-Platform Monitoring', description: 'We monitor Google, Facebook, Yelp, and more — so no review goes unseen.' },
  { title: 'Response Automation', description: 'Positive reviews get responded to automatically. Negative ones get flagged for your attention.' },
  { title: 'Review Funneling', description: 'Unhappy customers are redirected to a private feedback form — not a public review.' },
  { title: 'Reputation Reporting', description: 'See your average rating, review volume, and trends over time — without logging in anywhere.' },
  { title: 'Brand Alert System', description: 'Get notified the moment your business is mentioned online — anywhere.' },
];

export default function ReputationPage() {
  return (
    <>
      <section className="bg-black min-h-[80vh] flex flex-col justify-center px-6 py-12 border-b border-[#1a1a1a]">
        <div className="max-w-[1170px] mx-auto text-center">
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

      <section className="bg-[#0a0a0a] py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-[1170px] mx-auto flex flex-col md:flex-row gap-16 items-center">
          <FadeLeft className="md:w-1/2">
            <p className="text-[#2cd9fe] text-xs uppercase tracking-widest mb-4">The Problem</p>
            <h2 className="text-[28px] md:text-[48px] font-bold text-white mb-6">Happy Clients Don't Leave Reviews on Their Own</h2>
            <p className="text-white leading-relaxed text-[21px] mb-4">
              Your best clients love what you do — but they're busy too. Unless you ask at the
              right moment, in the right way, they'll never leave that review.
            </p>
            <p className="text-white leading-relaxed">
              Meanwhile, the one unhappy customer found their way to Google. Our system fixes
              both sides of that equation automatically.
            </p>
          </FadeLeft>
          <FadeRight className="md:w-1/2">
            <div className="border border-[#1a1a1a] p-10 bg-black">
              <p className="text-[#2cd9fe] text-xs uppercase tracking-widest mb-6">Without a Reputation System</p>
              {['Reviews trickle in slowly — or not at all', 'Negative reviews go unaddressed', 'Potential clients pick a competitor with more reviews', 'You have no visibility into what\'s being said'].map((item) => (
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
            <h2 className="text-[28px] md:text-[48px] font-bold text-white mb-16">Inside the Reputation System</h2>
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
            <h2 className="text-[28px] md:text-[48px] font-bold text-white mb-4">Make Your Reputation Work For You</h2>
            <p className="text-white mb-8 max-w-lg mx-auto">
              Book a session and we'll show you how the reputation system would be built around your business.
            </p>
            <Link href="https://api.hyppocrm.com/widget/booking/fKaW48nTCxlxxHygIUic" className="btn-primary">Get This System</Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
