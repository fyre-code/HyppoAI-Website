import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ImageLightbox from '@/components/ImageLightbox';
import ReviewModal from '@/components/ReviewModal';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'AI Business Automation Systems — HyppoAI | Palm Bay, FL',
  description: 'HyppoAI provides AI-powered business automation in Palm Bay, FL. Social media, AI calls, CRM & more. Call (732) 962-3725.',
  keywords: ['ai business automation', 'business automation systems', 'AI social media posting', 'AI receptionist', 'CRM automation', 'lead follow-up automation', 'Palm Bay Florida', 'small business AI', 'HyppoAI', 'automated social posting', 'business systems AI', 'Hyppo Advertising'],
  path: '',
});
import CircuitBackground from '@/components/CircuitBackground';
import GrayAccentBorder from '@/components/GrayAccentBorder';
import { FlowBorderH, FlowBorderV } from '@/components/FlowBorder';

const automationSystems = [
  {
    title: '#SocialMedia ASP',
    subtitle: '',
    description:
      'Our ASP (Auto Social Posting) automations run your social media accounts for you — no manual posting required.',
    href: '/asp',
    image: 'https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/a4cdd6b1-7743-45cd-a401-9559302cf8e4/root/1775745794433_ai-social-media-automation-workflow-content-processing.png',
    alt: 'AI automation workflow showing content input processed into multiple published social media posts',
    cta: 'Automate My Socials',
  },
  {
    title: '',
    subtitle: 'Phone Calls',
    subtitleIcon: 'phone',
    subtitleIconRight: true,
    subtitleIconMirror: true,
    description:
      'AI phone agents answer calls instantly, filter spam, qualify callers, book appointments, and send real-time notifications so no call is missed.',
    href: '/callguard',
    cta: 'Automate My Phone',
    image: 'https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/a4cdd6b1-7743-45cd-a401-9559302cf8e4/root/1775746045557_ai-call-automation-workflow-lead-processing-scheduling.png',
    alt: 'AI call automation workflow showing phone input processed into lead filtering, task management, and scheduling',
  },
  {
    title: '',
    subtitle: 'Leads & Follow-Up',
    subtitleIcon: 'plane',
    subtitleIconRight: false,
    description:
      'All leads are captured into our CRM (HyppoCRM), organized, and followed up with automatically via SMS, email, and pipeline routing — nothing falls through the cracks.',
    href: '/hyppocrm',
    cta: 'Automate My Leads',
    image: 'https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/a4cdd6b1-7743-45cd-a401-9559302cf8e4/root/1775746313633_hyppocrm-lead-management-automation-workflow.png',
    alt: 'A workflow diagram showing HyppoCRM converting incoming leads into automated follow-up actions including emails, messages, and task lists.',
  },
  {
    title: '',
    subtitle: 'Reputation & Reviews',
    subtitleIcon: 'star',
    subtitleIconRight: true,
    description:
      'Review requests and management run in the background to consistently generate and protect 5-star reviews.',
    href: '/reputation',
    cta: 'Automate My Reviews',
    image: 'https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/a4cdd6b1-7743-45cd-a401-9559302cf8e4/root/1775746493841_automated-reputation-management-review-workflow.png',
    alt: 'A flowchart showing a reputation management system where 4-star and 5-star reviews are published, while lower ratings trigger a support ticket for internal resolution.',
  },
  {
    title: '',
    subtitle: 'Websites',
    subtitleIcon: 'globe',
    subtitleIconRight: false,
    description:
      'Websites built for speed, SEO structure, and conversions, acting as a system — not a static brochure.',
    href: '/website',
    cta: 'Automate My Website',
    image: 'https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/a4cdd6b1-7743-45cd-a401-9559302cf8e4/root/1775746737941_ai-powered-business-website-builder-automation.png',
    alt: 'A conceptual diagram of an AI website builder for businesses, showing a site interface connected to automated time-triggers, logic workflows, and lead conversion funnels.',
  },
  {
    title: '',
    subtitle: 'Advertising',
    subtitleIcon: 'funnel',
    subtitleIconRight: true,
    description:
      'Funnels are designed to route traffic, trigger automations, and move prospects forward automatically — not just collect form fills.',
    href: '/funnels',
    cta: 'Automate My Funnel',
    image: 'https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/a4cdd6b1-7743-45cd-a401-9559302cf8e4/root/1775747166255_automated-marketing-funnel-conversion-retention-stages.png',
    alt: 'A complete marketing funnel diagram showing traffic sources like Social, SEO, and Ads flowing into an automation trigger stage. The workflow illustrates behavior matching that leads to email drips and content delivery, ultimately resulting in qualified leads, sales, and loyal customers.',
  },
  {
    title: '',
    subtitle: 'Custom Builds',
    subtitleIcon: 'gears',
    subtitleIconRight: false,
    description:
      'Custom-built automation systems designed around your exact workflows, tools, and business logic.',
    href: '/custom-builds',
    cta: 'Get a Custom Build',
    image: 'https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/a4cdd6b1-7743-45cd-a401-9559302cf8e4/root/1775747524474_custom-business-automation-modular-architecture.png',
    alt: 'Isometric 3D illustration of interconnected blue and black modular cubes representing custom-built automation blocks, gears, and data nodes for a business workflow.',
  },
];

const coreProblemItems = [
  'Social media gets skipped when things get busy',
  'Calls go unanswered, leading to missed jobs',
  'Reviews aren\'t requested or managed',
  'Ads fail because creatives aren\'t optimized and funnels leak conversions',
  'Websites aren\'t built for SEO or conversion',
  'Leads and jobs fall through the cracks without a centralized system',
];

const founders = [
  {
    name: 'Brandon Gosselin',
    title: 'CEO',
    bio: 'Brandon Gosselin is a $10 million tech founder, former U.S. Presidential Fellow Appointee, and motivational speaker. He is also the founder of The Be Good House, a live-in business incubator for overlooked and misunderstood individuals that helps them found their own companies. Shaped by his personal journey, Brandon\'s "Be Good" philosophy guides everything we do at HyppoAI.',
    image: 'https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/a4cdd6b1-7743-45cd-a401-9559302cf8e4/root/1775747691819_brandon-gosselin-hyppoai-founder.jpg',
    alt: 'Brandon Gosselin, founder of HyppoAI, smiling in a navy blazer and black hat.',
  },
  {
    name: 'Joseph Sestito',
    title: 'Director of Artificial Intelligence',
    bio: 'Joseph is an MBA Candidate at Florida Atlantic University. Coming from a family of entrepreneurs who inspired him, he co-founded Hyppo with Brandon to help small businesses automate tedious tasks. Joseph is the Inaugural Be Good House Scholar.',
    image: 'https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/a4cdd6b1-7743-45cd-a401-9559302cf8e4/root/1775748303688_joseph-sestito-hyppoai-technical-automation-expert.jpg',
    alt: 'Joseph Sestito, a technical specialist at HyppoAI, working on a laptop to develop AI automation solutions.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black min-h-[60vh] md:min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-12 md:py-24 border-b border-[#1a1a1a]">
        <CircuitBackground />
        <h1 className="relative z-10 text-5xl md:text-8xl font-bold text-white leading-tight max-w-4xl mb-10">
          Grow Your Business with <span className="text-[#2cd9fe]">AI</span>
        </h1>
        <Link href="/contact" className="relative z-10 btn-primary">Automate My Business</Link>
      </section>

      {/* The Core Problem */}
      <section className="bg-[#0a0a0a] py-12 md:py-24 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-[1170px] mx-auto">
          <h2 className="text-5xl md:text-8xl font-bold text-[#2cd9fe] mb-6 text-center">
            The Core Problem
          </h2>
          <p className="text-white text-xl md:text-[48px] font-semibold text-center mb-4 leading-tight">
            Businesses Don't Fail from Lack of Effort — They Fail from Broken Systems
          </p>
          <ul className="flex flex-col gap-4 max-w-2xl mx-auto">
            {coreProblemItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-white text-base md:text-[21px]">
                <svg className="w-5 h-5 text-[#2cd9fe] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What Our Clients Say */}
      <section className="relative overflow-hidden bg-[#c9c9c9] on-gray py-12 md:py-24 px-6">
        <GrayAccentBorder />
        <div className="relative z-10 max-w-[1170px] mx-auto">
          <div className="flex justify-center mb-8">
            <ReviewModal />
          </div>

          {/* Reviews embed */}
          <iframe
            src="https://hyppohq.io/w/hyppo-ai-reviews?embed=true"
            style={{ width: '100%', minHeight: '550px', border: 'none' }}
            allowFullScreen
          />
        </div>
      </section>

      {/* The HyppoAI Solution */}
      <section className="bg-[#000000] py-12 md:py-24 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-[1170px] mx-auto text-center">
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-8">The Hyppo<span className="text-[#2cd9fe]">AI</span> Solution</h2>
          <p className="text-white text-base md:text-[21px] mx-auto mb-12">
            HyppoAI installs AI-powered automation systems that work 24/7 — posting content, answering calls, following up with leads, and managing reputation without relying on memory, motivation, or manpower.
          </p>
          <a href="/contact" className="btn-primary">Automate My Business</a>
        </div>
      </section>

      {/* What We Automate */}
      <section className="bg-[#c9c9c9] on-gray pt-24 border-b border-[#2cd9fe]">
        <div className="max-w-[1170px] mx-auto px-6">
          <h2 className="text-5xl md:text-8xl font-bold text-[#000000] mb-4 text-center">What We Automate</h2>
        </div>
        <FlowBorderH className="mt-16" />
        <div className="flex flex-col gap-0">
            {automationSystems.map((system, i) => (
              <>
              <div
                key={system.href}
                className={`flex flex-col md:flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Image or color block */}
                {system.image ? (
                  <div className="md:w-1/2 relative min-h-[280px] md:min-h-[560px] bg-[#c9c9c9] order-last md:order-none">
                    <ImageLightbox src={system.image} alt={(system as {alt?: string}).alt ?? system.title} fill className="object-contain" />
                  </div>
                ) : (
                  <div className="md:w-1/2 bg-[#b8b8b8] flex items-center justify-center p-16 min-h-[280px] md:min-h-[560px] order-last md:order-none">
                    <div className="text-center">
                      <div className="w-16 h-16 border border-[#2cd9fe] flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-[#2cd9fe]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.712-1.17 2.21l-1.23-.52M5 14.5l-1.402 1.402c-1 1-.03 2.712 1.17 2.21l1.229-.52" />
                        </svg>
                      </div>
                      <p className="text-[#2cd9fe] text-xs uppercase tracking-widest">{system.subtitle}</p>
                    </div>
                  </div>
                )}
                {/* Content */}
                <div className="md:w-1/2 p-6 md:p-16 flex flex-col justify-center items-center text-center order-first md:order-none">
                  {system.subtitle && (() => {
                    const phoneIcon = (mirror?: boolean) => (
                      <svg className={`w-[34px] h-[34px] md:w-[54px] md:h-[54px] text-[#2cd9fe] shrink-0${mirror ? ' scale-x-[-1]' : ''}`} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
                      </svg>
                    );
                    const starIcon = () => (
                      <svg className="w-[34px] h-[34px] md:w-[54px] md:h-[54px] text-[#2cd9fe] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    );
                    const funnelIcon = () => (
                      <svg className="w-[34px] h-[34px] md:w-[54px] md:h-[54px] text-[#2cd9fe] shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
                        <text x="9.5" y="15" fontSize="5.5" fill="currentColor" stroke="none" fontWeight="bold">$</text>
                      </svg>
                    );
                    const planeIcon = () => (
                      <svg className="w-[34px] h-[34px] md:w-[54px] md:h-[54px] text-[#2cd9fe] shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
                      </svg>
                    );
                    const gearsIcon = () => (
                      <svg className="w-[34px] h-[34px] md:w-[54px] md:h-[54px] text-[#2cd9fe] shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 48 48">
                        {['translate(17,24) scale(0.95) translate(-12,-12)', 'translate(32,15) scale(0.65) translate(-12,-12)', 'translate(32,33) scale(0.65) translate(-12,-12)'].map((t) => (
                          <g key={t} transform={t}>
                            <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"/>
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                          </g>
                        ))}
                      </svg>
                    );
                    const globeIcon = () => (
                      <svg className="w-[34px] h-[34px] md:w-[54px] md:h-[54px] text-[#2cd9fe] shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12c0 .778.099 1.533.284 2.253" />
                      </svg>
                    );
                    const leftIcon = system.subtitleIcon === 'plane' ? planeIcon()
                      : system.subtitleIcon === 'gears' ? gearsIcon()
                      : system.subtitleIcon === 'globe' ? globeIcon()
                      : null;
                    const rightIcon = system.subtitleIcon === 'phone' ? phoneIcon(system.subtitleIconMirror)
                      : system.subtitleIcon === 'star' ? starIcon()
                      : system.subtitleIcon === 'funnel' ? funnelIcon()
                      : null;
                    const words = system.subtitle.split(' ');
                    const prefix = words.slice(0, -1).join(' ');
                    const lastWord = words[words.length - 1];
                    return (
                      <p className="text-[#000000] text-xl md:text-[48px] font-bold flex flex-wrap items-center justify-center gap-x-2 mb-2">
                        {!system.subtitleIconRight && leftIcon}
                        {system.subtitleIconRight && prefix && <>{prefix}&nbsp;</>}
                        <span className="inline-flex items-center gap-2 whitespace-nowrap">
                          {system.subtitleIconRight ? lastWord : system.subtitle}
                          {system.subtitleIconRight && rightIcon}
                        </span>
                      </p>
                    );
                  })()}
                  {system.title && (
                    <h3 className="text-xl md:text-[48px] font-bold text-[#000000] mb-4">
                      {system.title.startsWith('#')
                        ? <><span className="text-[#2cd9fe]">#</span>{system.title.slice(1)}</>
                        : system.title}
                    </h3>
                  )}
                  <p className="text-[#000000] text-base md:text-[21px] leading-relaxed mb-8">{system.description}</p>
                  <Link href={system.href} className="btn-primary">{system.cta ?? 'Learn More'}</Link>
                </div>
              </div>
              <FlowBorderH />
              </>
            ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-black py-12 md:py-24 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-[1170px] mx-auto text-center">
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-6">
            Why Choose Hyppo<span className="text-[#2cd9fe]">AI</span>?
          </h2>
          <ul className="text-left max-w-xl mx-auto mb-12 flex flex-col gap-4">
            {[
              'Locally based (Palm Bay, Florida)',
              'We automate the boring stuff (so you can do what you love)',
              'ROI driven (we save you time and money)',
              'Be Good House Business',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#2cd9fe] shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                </svg>
                <span className="text-white text-base md:text-[21px]">{item}</span>
              </li>
            ))}
          </ul>

          <a href="/contact" className="btn-primary inline-block">Automate My Business</a>
        </div>
      </section>

      {/* Logo Ticker */}
      <section className="bg-[#c9c9c9] on-gray py-10 overflow-hidden">
        <div
          className="flex gap-16 items-center w-max"
          style={{ animation: 'marquee 40s linear infinite' }}
        >
          {[...Array(2)].map((_, set) => (
            <div key={set} className="flex gap-16 items-center">
              {[
                '/logo-15.jpg', '/logo-16.jpg', '/logo-1.jpg', '/logo-2.png',
                '/logo-3.png', '/logo-4.png', '/logo-5.png', '/logo-6.png',
                '/logo-7.png', '/logo-8.png', '/logo-9.jpg', '/logo-10.png',
                '/logo-11.jpg', '/logo-12.png', '/logo-13.png', '/logo-14.png',
              ].map((src) => (
                <div key={src} className="shrink-0">
                  <Image src={src} alt="Partner logo" width={120} height={60} className="h-12 w-auto object-contain" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Founders */}
      <section className="bg-[#0a0a0a] py-24 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-[1170px] mx-auto">
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-16 text-center">The Founders</h2>

          <div className="grid md:grid-cols-[1fr_6px_1fr] gap-0 items-start">
            {founders.map((founder, i) => (
              <>
              {i > 0 && <FlowBorderV key={`f-border-${i}`} className="hidden md:block" />}
              <div key={founder.name} className="p-10 md:p-16 flex flex-col">
                <div className="flex items-center gap-6 mb-6">
                  {founder.image ? (
                    <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-2 border-[#2cd9fe] shrink-0">
                      <Image src={founder.image} alt={(founder as {alt?: string}).alt ?? founder.name} width={200} height={200} className="object-cover w-full h-full" />
                    </div>
                  ) : (
                    <div className="w-[200px] h-[200px] bg-[#111] border border-[#2cd9fe] rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-16 h-16 text-[#2cd9fe]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                  )}
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
            <a href="/contact" className="btn-primary">Work with Us</a>
          </div>
        </div>
      </section>

      {/* Be Good House */}
      <section className="relative overflow-hidden bg-[#c9c9c9] on-gray py-24 px-6">
        <GrayAccentBorder />
        <div className="relative z-10 max-w-[1170px] mx-auto text-center">
          <h2 className="text-5xl md:text-8xl font-bold text-[#000000] mb-8">The Be Good House</h2>
          <p className="text-[#000000] text-[21px] max-w-3xl mx-auto mb-12">
            Hyppo Advertising is proud to be the first business to launch from The Be Good House, a live-in incubator for overlooked entrepreneurs, founded by its inaugural scholar, Joseph Sestito III.
          </p>
          <Image src="https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/a4cdd6b1-7743-45cd-a401-9559302cf8e4/root/1775748461612_be-good-house-logo.png" alt="Official logo for Be Good House featuring a black 'BG' monogram under a crown, enclosed within a laurel wreath, representing premium quality and leadership." width={300} height={200} className="mx-auto object-contain" />
        </div>
      </section>

    </>
  );
}
