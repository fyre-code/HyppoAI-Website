import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FadeUp, FadeLeft, FadeRight, StaggerList, StaggerItem, HeroText } from '@/components/AnimatedSection';
import CircuitBackground from '@/components/CircuitBackground';
import GrayAccentBorder from '@/components/GrayAccentBorder';
import { FlowBorderH } from '@/components/FlowBorder';

export const metadata: Metadata = {
  title: 'Social Media ASP — HyppoAI',
  description: 'HyppoAI\'s Automated Social Posting system keeps your brand active online without you lifting a finger.',
};

const aspSystems = [
  {
    title: 'ASP-Form',
    description: 'Upload up to 10 photos or a video to a simple form, and the ASP-Form automatically generates a description and publishes optimized posts to all of your accounts without manual work.',
    image: '/asp-form.webp',
  },
  {
    title: 'ASP-Echo',
    description: 'AI avatar videos are generated, captioned, and distributed across social platforms to maintain consistent authority and presence at scale.',
    image: '/asp-echo.webp',
  },
  {
    title: 'ASP-Graphic',
    description: 'High-quality, branded image posts are generated automatically, replacing the need for a graphic designer or ongoing creative work.',
    image: '/asp-graphic.webp',
  },
  {
    title: 'ASP-Rank',
    description: 'SEO blog content is generated and automatically repurposed into social posts to improve visibility, authority, and long-term rankings.',
    image: '/asp-rank.webp',
  },
];

export default function ASPPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center px-6 py-12 border-b border-[#1a1a1a]">
        <CircuitBackground />
        <div className="relative z-10 max-w-[1170px] mx-auto text-center">
          <HeroText>
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight mb-1 mx-auto">
              Auto Social Posting
            </h1>
          </HeroText>
          <HeroText>
            <p className="text-[#2cd9fe] text-[28px] md:text-[48px] font-bold mb-3">ASP-Series</p>
          </HeroText>
          <HeroText>
            <p className="text-white text-[21px] max-w-2xl mb-6 leading-relaxed mx-auto">
              ASP automations run your social media for you by automatically creating and scheduling posts from your content.
            </p>
          </HeroText>
          <HeroText>
            <Link href="https://api.hyppocrm.com/widget/booking/fKaW48nTCxlxxHygIUic" className="btn-primary">Automate My Socials</Link>
          </HeroText>
        </div>
      </section>

      {/* Consistent Content */}
      <section className="relative overflow-hidden bg-[#c9c9c9] on-gray py-10 md:py-20 px-6 border-b border-[#1a1a1a]">
        <GrayAccentBorder />
        <div className="relative z-10 max-w-[1170px] mx-auto">
          <h2 className="text-3xl md:text-8xl font-bold text-[#000000] text-center">
            Consistent content — without logging in, remembering, or posting manually.
          </h2>
        </div>
      </section>

      {/* ASP Systems Table */}
      <section className="bg-[#000000]">
        <FlowBorderH />
        {aspSystems.map((system, i) => {
          const imageRight = i % 2 === 0;
          return (
            <div key={system.title}>
            {i > 0 && <FlowBorderH />}
            <div className="py-10 px-6">
              <div className="max-w-[1170px] mx-auto flex flex-col md:flex-row items-stretch gap-10">
                <div className={`flex-1 ${imageRight ? 'order-first' : 'order-first md:order-last'}`}>
                  <div className="flex items-center justify-center gap-3 mb-4">
                {/* Icons on the LEFT */}
                {system.title === 'ASP-Form' && (
                  <svg className="w-10 h-10 shrink-0" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="3" fill="#2cd9fe" />
                    <path d="M6 12l4 4 8-8" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {system.title === 'ASP-Echo' && (
                  <svg className="w-10 h-10 shrink-0" viewBox="0 0 24 24" fill="#2cd9fe">
                    {/* Person head */}
                    <circle cx="10" cy="7" r="4" />
                    {/* Person body */}
                    <path d="M2 21c0-4 3.6-7 8-7" />
                    {/* Play button */}
                    <circle cx="18" cy="17" r="5" />
                    <polygon points="16.5,15 16.5,19 21,17" fill="#000000" />
                  </svg>
                )}
                {system.title === 'ASP-Rank' && (
                  <svg className="w-10 h-10 shrink-0" viewBox="0 0 24 24" fill="#2cd9fe">
                    {/* Three bars increasing in height */}
                    <rect x="2" y="16" width="5" height="6" rx="1" />
                    <rect x="9" y="11" width="5" height="11" rx="1" />
                    <rect x="16" y="6" width="5" height="16" rx="1" />
                  </svg>
                )}

                <h3 className="text-white text-[28px] md:text-[48px] font-bold">{system.title}</h3>

                {/* Icons on the RIGHT */}
                {system.title === 'ASP-Graphic' && (
                  <svg className="w-10 h-10 shrink-0" viewBox="0 0 24 24" fill="#2cd9fe">
                    {/* Image frame */}
                    <rect x="2" y="3" width="20" height="18" rx="2" />
                    {/* Mountain/landscape inside */}
                    <path d="M2 17l5-6 4 5 3-3 8 7H2z" fill="#000000" />
                    {/* Sun */}
                    <circle cx="17" cy="8" r="2.5" fill="#000000" />
                  </svg>
                )}
              </div>
                  <p className="text-white text-[21px] leading-relaxed mb-6">{system.description}</p>
                  <div className="flex justify-center">
                    <Link href="https://api.hyppocrm.com/widget/booking/fKaW48nTCxlxxHygIUic" className="btn-primary">Automate My Socials</Link>
                  </div>
                </div>
                <div className={`relative shrink-0 w-full max-w-[400px] aspect-square bg-[#000000] flex items-center justify-center mx-auto md:mx-0 ${imageRight ? 'order-last' : 'order-last md:order-first'}`}>
                  {system.image ? (
                    <Image src={system.image} alt={system.title} width={400} height={400} className="object-contain w-full h-full" />
                  ) : (
                    <span className="text-[#333] text-sm">Image coming soon</span>
                  )}
                </div>
              </div>
            </div>
            </div>
          );
        })}
      </section>

    </>
  );
}
