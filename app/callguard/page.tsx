import type { Metadata } from 'next';
import Link from 'next/link';
import { FadeUp, FadeRight, HeroText } from '@/components/AnimatedSection';
import CircuitBackground from '@/components/CircuitBackground';

export const metadata: Metadata = {
  title: 'Phone AI CallGuard — HyppoAI',
  description: 'HyppoAI\'s CallGuard system answers every inbound call, qualifies leads, and books appointments — 24/7.',
};


export default function CallGuardPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black min-h-[80vh] flex flex-col justify-center px-6 py-12 border-b border-[#1a1a1a]">
        <CircuitBackground />
        <div className="relative z-10 max-w-[1170px] mx-auto text-center">
          <HeroText>
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight max-w-4xl mb-3 mx-auto">
              <span className="text-[#2cd9fe]">AI</span> Receptionist
            </h1>
          </HeroText>
          <HeroText>
            <p className="text-white text-[21px] max-w-2xl mb-6 leading-relaxed mx-auto">
              HyppoAI installs CallGuard, an AI receptionist system that handles inbound phone calls automatically, so your business never loses jobs due to unanswered calls.
            </p>
          </HeroText>
          <HeroText>
            <Link href="https://api.hyppocrm.com/widget/booking/fKaW48nTCxlxxHygIUic" className="btn-primary">Automate My Phone</Link>
          </HeroText>
        </div>
      </section>

      {/* What CallGuard Does */}
      <section className="bg-[#c9c9c9] on-gray py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-[1170px] mx-auto">
          <h2 className="text-5xl md:text-8xl font-bold text-[#000000] mb-16 text-center">
            What <span className="text-[#2cd9fe]">CallGuard</span> Does
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              {
                icon: (
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="#2cd9fe" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                    <path d="M15 2c1.5 0 3 .5 4 1.5" strokeDasharray="2 2" />
                    <path d="M19 6c.5.8.8 1.7.8 2.7" strokeDasharray="2 2" />
                  </svg>
                ),
                subheading: 'Instant Answering',
                text: 'Every inbound call is answered immediately, 24/7 — no voicemail, no missing calls.',
              },
              {
                icon: (
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="#2cd9fe">
                    <path d="M12 2L2 20h20L12 2z" />
                    <path d="M12 9v5" stroke="#c9c9c9" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="12" cy="17" r="1" fill="#c9c9c9" />
                  </svg>
                ),
                subheading: 'Spam Filtering',
                text: 'Robocalls and non-qualified callers are filtered out so real customers get priority.',
              },
              {
                icon: (
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="#2cd9fe" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" strokeWidth="2.5" />
                  </svg>
                ),
                subheading: 'Automatic Booking',
                text: 'Qualified callers can be scheduled automatically without human involvement.',
              },
              {
                icon: (
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="#2cd9fe">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <circle cx="9" cy="11" r="1" fill="#c9c9c9" />
                    <circle cx="12" cy="11" r="1" fill="#c9c9c9" />
                    <circle cx="15" cy="11" r="1" fill="#c9c9c9" />
                  </svg>
                ),
                subheading: 'Real-Time Alerts',
                text: 'You or your team are notified instantly when a real opportunity comes in.',
              },
            ].map((cell) => (
              <div key={cell.subheading} className="border-r-[6px] border-[#2cd9fe] last:border-r-0 p-8 flex flex-col items-center text-center gap-4">
                <div className="animate-pulse">
                  {cell.icon}
                </div>
                <h3 className="text-[#000000] text-[21px] font-bold">{cell.subheading}</h3>
                <p className="text-[#000000] text-[18px] leading-relaxed">{cell.text}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link href="https://api.hyppocrm.com/widget/booking/fKaW48nTCxlxxHygIUic" className="btn-primary">Automate My Phone</Link>
          </div>
        </div>
      </section>

      {/* Built for Growing Businesses */}
      <section className="bg-[#000000] py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-[1170px] mx-auto flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-5xl md:text-8xl font-bold text-white mb-4">
              Built for Growing Businesses
            </h2>
            <h2 className="text-[28px] md:text-[48px] font-bold text-white">
              <span className="text-[#2cd9fe]">CallGuard</span> is ideal for businesses that:
            </h2>
          </div>
          <ul className="flex flex-col gap-4">
            {[
              'Rely on inbound phone calls',
              'Lose opportunities due to missed calls',
              'Don\'t want to hire or manage reception staff',
              'Need consistent call handling at scale',
            ].map((item, i) => (
              <FadeRight key={item} delay={i * 0.15}>
                <li className="flex items-start gap-3 text-white text-[21px]">
                  <svg className="w-6 h-6 shrink-0 mt-1" viewBox="0 0 24 24" fill="#2cd9fe">
                    <circle cx="12" cy="12" r="12" />
                    <path d="M6 12l4 4 8-8" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                  <span>{item}</span>
                </li>
              </FadeRight>
            ))}
          </ul>
          <div className="flex justify-center mt-4">
            <Link href="https://api.hyppocrm.com/widget/booking/fKaW48nTCxlxxHygIUic" className="btn-primary">Automate My Phone</Link>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="bg-[#c9c9c9] on-gray py-20 px-6">
        <div className="max-w-[1170px] mx-auto text-center">
          <FadeUp>
            <h2 className="text-5xl md:text-8xl font-bold text-[#000000] mb-8">
              Bottom Line: If the phone rings, then <span className="text-[#2cd9fe]">CallGuard</span> answers.
            </h2>
            <Link href="https://api.hyppocrm.com/widget/booking/fKaW48nTCxlxxHygIUic" className="btn-primary">Automate My Phone</Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
