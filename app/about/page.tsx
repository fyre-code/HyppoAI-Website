import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About — HyppoAI',
  description: 'We build infrastructure, not marketing. Learn about HyppoAI and the team behind the systems.',
};


export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black py-24 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-[1170px] mx-auto">
          <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight mb-4 text-center">
            About Hyppo<span className="text-[#2cd9fe]">AI</span>
          </h1>
          <h2 className="text-[28px] md:text-[48px] font-bold text-white mb-6 text-center">
            We Build Systems So Businesses Don't Break
          </h2>
          <p className="text-white text-[21px] leading-relaxed text-center mt-2 mb-6">
            HyppoAI designs and deploys AI-powered automation systems handling social posting,
            inbound calls, lead follow-up, reputation, funnels, and CRM — so businesses stop
            relying on memory, motivation, and manual work.
          </p>
          <div className="flex justify-center mb-6">
            <Link href="https://api.hyppocrm.com/widget/booking/fKaW48nTCxlxxHygIUic" className="btn-primary">Automate My Business</Link>
          </div>
          <h2 className="text-[28px] md:text-[48px] font-bold text-white text-center mb-6">
            Unlike a traditional marketing agency, HyppoAI builds infrastructure.
          </h2>
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
              {[
                'Systems that answer calls instantly',
                'Follow up automatically',
                'Post consistently',
                'Capture leads properly',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-white text-[21px]">
                  <span className="text-[#2cd9fe] font-bold shrink-0">+</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
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
      <section className="bg-[#c9c9c9] on-gray py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-[1170px] mx-auto">
          <h2 className="text-[28px] md:text-[48px] font-bold text-[#000000] mb-6 text-center">
            Built From The Be Good House
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex flex-col gap-4 flex-1">
              <p className="text-[#000000] text-[21px] leading-relaxed">
                Hyppo Advertising is proud to be the first business to launch from The Be Good House, a live-in incubator for overlooked entrepreneurs.
              </p>
              <p className="text-[#000000] text-[21px] leading-relaxed">
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

          <div className="grid md:grid-cols-2 gap-0 items-start">
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
            ].map((founder) => (
              <div key={founder.name} className="p-10 md:p-16 md:border-r-[6px] md:border-[#2cd9fe] last:border-r-0 flex flex-col">
                <div className="flex items-center gap-6 mb-6">
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
