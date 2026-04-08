import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CircuitBackground from '@/components/CircuitBackground';
import GrayAccentBorder from '@/components/GrayAccentBorder';
import { FlowBorderV } from '@/components/FlowBorder';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'About HyppoAI — AI Automation Company | Palm Bay, FL',
  description: 'HyppoAI builds AI-powered automation infrastructure for small businesses in Palm Bay, FL. Meet the team. Call (732) 962-3725.',
  keywords: ['about HyppoAI', 'AI automation company', 'Palm Bay Florida', 'Hyppo Advertising', 'Be Good House', 'Joseph Sestito', 'Brandon Gosselin', 'small business automation', 'AI business systems', 'business infrastructure', 'AI company Florida', 'automation team'],
  path: '/about',
});


export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black pt-10 pb-24 px-6 border-b border-[#1a1a1a]">
        <CircuitBackground />
        <div className="relative z-10 max-w-[1170px] mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-3 text-center">
            About Hyppo<span className="text-[#2cd9fe]">AI</span>
          </h1>
          <h2 className="text-[24px] md:text-[36px] font-bold text-white mb-4 text-center">
            We Build Systems So Businesses Don't Break
          </h2>
          <p className="text-white text-[18px] leading-relaxed text-center mb-5">
            HyppoAI designs and deploys AI-powered automation systems handling social posting,
            inbound calls, lead follow-up, reputation, funnels, and CRM — so businesses stop
            relying on memory, motivation, and manual work.
          </p>
          <div className="flex justify-center mb-5">
            <Link href="https://api.hyppocrm.com/widget/booking/fKaW48nTCxlxxHygIUic" className="btn-primary">Automate My Business</Link>
          </div>
          <h2 className="text-[28px] md:text-[48px] font-bold text-white text-center mb-6">
            Unlike a traditional marketing agency, HyppoAI builds infrastructure.
          </h2>
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Systems that answer calls instantly',
                'Follow up automatically',
                'Post consistently',
                'Capture leads properly',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-white text-base md:text-[21px]">
                  <span className="text-[#2cd9fe] font-bold shrink-0">+</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-3 text-white text-[21px]">
                <span className="text-[#2cd9fe] font-bold shrink-0">+</span>
                <span>Convert traffic without constant oversight</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Link href="https://api.hyppocrm.com/widget/booking/fKaW48nTCxlxxHygIUic" className="btn-primary">Automate My Business</Link>
          </div>
        </div>
      </section>


      {/* Be Good House */}
      <section className="relative overflow-hidden bg-[#c9c9c9] on-gray py-20 px-6 border-b border-[#1a1a1a]">
        <GrayAccentBorder />
        <div className="relative z-10 max-w-[1170px] mx-auto">
          <h2 className="text-[28px] md:text-[48px] font-bold text-[#000000] mb-6 text-center">
            Built From The Be Good House
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex flex-col gap-4 flex-1">
              <p className="text-[#000000] text-base md:text-[21px] leading-relaxed">
                Hyppo Advertising is proud to be the first business to launch from The Be Good House, a live-in incubator for overlooked entrepreneurs.
              </p>
              <p className="text-[#000000] text-base md:text-[21px] leading-relaxed">
                HyppoAds was founded by Inaugural Be Good House Scholar, Joseph Sestito III.
              </p>
            </div>
            <div className="shrink-0">
              <Image
                src="/be-good-house-logo.png"
                alt="The Be Good House"
                width={400}
                height={200}
                className="object-contain"
                style={{ height: 'calc(4 * 1.5 * 21px + 1rem)', width: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-[#0a0a0a] py-24 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-[1170px] mx-auto">
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-16 text-center">The Founders</h2>

          <div className="grid md:grid-cols-[1fr_6px_1fr] gap-0 items-start">
            {[
              {
                name: 'Brandon Gosselin',
                title: 'CEO',
                bio: 'Brandon Gosselin is a $10 million tech founder, former U.S. Presidential Fellow Appointee, and motivational speaker. He is also the founder of The Be Good House, a live-in business incubator for overlooked and misunderstood individuals that helps them found their own companies. Shaped by his personal journey, Brandon\'s "Be Good" philosophy guides everything we do at HyppoAI.',
                image: '/brandon.jpg',
              },
              {
                name: 'Joseph Sestito',
                title: 'Director of Artificial Intelligence',
                bio: 'Joseph is an MBA Candidate at Florida Atlantic University. Coming from a family of entrepreneurs who inspired him, he co-founded Hyppo with Brandon to help small businesses automate tedious tasks. Joseph is the Inaugural Be Good House Scholar.',
                image: '/joseph.jpg',
              },
            ].map((founder, i) => (
              <>
              {i > 0 && <FlowBorderV key={`f-border-${i}`} className="hidden md:block" />}
              <div key={founder.name} className="p-6 md:p-16 flex flex-col">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 mb-6">
                  <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-2 border-[#2cd9fe] shrink-0">
                    <Image src={founder.image} alt={founder.name} width={200} height={200} className="object-cover w-full h-full" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-[21px] md:text-[28px] font-bold text-white mb-1">{founder.name}</h3>
                    <p className="text-[#2cd9fe] text-sm uppercase tracking-widest">{founder.title}</p>
                  </div>
                </div>
                <p className="text-white leading-relaxed">{founder.bio}</p>
              </div>
              </>
            ))}
          </div>
          <div className="text-center mt-16">
            <a href="https://api.hyppocrm.com/widget/booking/fKaW48nTCxlxxHygIUic" className="btn-primary">Work with Us</a>
          </div>
        </div>
      </section>

    </>
  );
}
