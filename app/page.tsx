import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ReviewsGrid from '@/components/ReviewsGrid';
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
    image: '/asp.png',
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
    image: '/phone-calls.png',
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
    image: '/leads-and-follow-ups.png',
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
    image: '/reputation.png',
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
    image: '/websites.png',
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
    image: '/advertising.png',
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
    image: '/custom-builds.png',
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
    image: '/brandon.jpg',
  },
  {
    name: 'Joseph Sestito',
    title: 'Director of Artificial Intelligence',
    bio: 'Joseph is an MBA Candidate at Florida Atlantic University. Coming from a family of entrepreneurs who inspired him, he co-founded Hyppo with Brandon to help small businesses automate tedious tasks. Joseph is the Inaugural Be Good House Scholar.',
    image: '/joseph.jpg',
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
          <h2 className="text-5xl md:text-8xl font-bold text-[#000000] mb-6 text-center">
            What Our Clients Say About Us
          </h2>

          {/* Google Rating */}
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-[#000000] font-bold text-[28px] md:text-[48px]">Google Reviews</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              {[1,2,3,4].map((star) => (
                <svg key={star} className="w-8 h-8 text-[#2cd9fe]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              {/* Half star */}
              <svg className="w-8 h-8" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="half">
                    <stop offset="50%" stopColor="#2cd9fe"/>
                    <stop offset="50%" stopColor="#6b7280"/>
                  </linearGradient>
                </defs>
                <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p className="text-[#000000] text-[21px] font-semibold">
              4.5 · 16 reviews on Google
            </p>
            <a
              href="https://api.hyppocrm.com/widget/form/yc6FXLyl26JutgEumIx2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 inline-block"
            >
              Write a Review
            </a>
          </div>

          {/* Reviews Grid — sorted newest first, ties broken by enthusiasm */}
          <ReviewsGrid reviews={[
            {
              name: 'Anita Rogers',
              date: 'February 27, 2026',
              rating: 5,
              text: "We are very happy with Joe's level of service! He is easy to get a hold of and explains things clearly.",
            },
            {
              name: 'Brandon Milam',
              date: 'February 24, 2026',
              rating: 5,
              text: "Joe is great and the system is so easy to work! within a week I can already see a difference in my social engagements.",
            },
            {
              name: 'Steven Naeder',
              date: 'February 24, 2026',
              rating: 5,
              text: "Easy, professional, awesome to work with. Thank you for your social media/website/digital knowledge.",
            },
            {
              name: 'Donald Hayes',
              date: 'February 3, 2026',
              rating: 5,
              text: "I have worked with Joseph on some business stuff and can highly recommend him and the companies services.",
            },
            {
              name: "Arturo's Pizza",
              date: 'January 9, 2026',
              rating: 5,
              text: "I am technically challenged but Joseph's asp form is so easy to use. I am very impressed. It's fantastic and helpful. Just try it out. Amazing. I wish I can give 10 stars!",
            },
            {
              name: 'Lori',
              date: 'December 22, 2025',
              rating: 5,
              text: "Joseph and his team are amazing!- patient, respectful and full of knowledge- They really got my business page up and running- I highly recommend this company!",
            },
            {
              name: 'Print Depot',
              date: 'December 3, 2025',
              rating: 5,
              text: "Joe is very friendly and guide for FB posting and Marketing. He has nice system that like just clicks and it will do post on FB automatically.",
            },
            {
              name: 'Lisa Matthews',
              date: 'December 2, 2025',
              rating: 5,
              text: "Hyppo advertising is such a great company! Joseph is an absolute gem! Such a genuine guy who truly takes the time to figure out your business needs and tailors each package accordingly. If you are looking for an integrity ran company for your advertising needs, Hyppo Advertising is where you need to be!",
            },
            {
              name: 'Marshall Paul',
              date: 'November 25, 2025',
              rating: 5,
              text: "Hyppo advertising was wonderful and Joe did a great job explaining everything.",
            },
            {
              name: 'Kitty Barker',
              date: 'November 25, 2025',
              rating: 5,
              text: "I have just started with this company and I will say that Joseph is very professional and very on top of my account.",
            },
            {
              name: 'Steve Payet',
              date: 'November 19, 2025',
              rating: 5,
              text: "Joseph's social media platform is a great concept and works well - I've been using it and really appreciate the Chamber discount he offered. Like any new service, there's still some improvement needed, but the potential is definitely there. I know some people have mentioned concerns about his in-person approach and the Meta glasses he wears, and those points are valid. Still, I believe he deserves a chance to grow and adjust, because the idea behind what he's building can really help small businesses. Overall, solid platform, good value, and I'm hopeful it keeps getting better.",
            },
            {
              name: 'Charles Allia',
              date: 'October 20, 2025',
              rating: 1,
              text: "Beware! An individual from said company shows up unannounced and quickly asks your name. Without permission or knowledge records audio and video of conversation using Meta glasses. Then proceeds to post video/audio of interaction on all social media platforms without permission. He presents a false illusion that the company he bombards is connected to and supporting his business. This deceptive practice is not only reckless and unethical but directly violates Florida Law 540.08 unauthorized publication of name or likeness. I would never use this company nor recommend it to handling any advertising for my business.",
            },
            {
              name: 'Diane Bryson',
              date: 'October 15, 2025',
              rating: 5,
              text: "I have had many great comments about my posts using this system.",
            },
            {
              name: 'Shane Dooley',
              date: 'September 30, 2025',
              rating: 5,
              text: "We have been using Hyppo Ads for a while now. Been using Joes ASP form for uploading content to social media. Couldn't be easier. I highly recommend their services.",
            },
            {
              name: 'Chanel Manohar',
              date: 'September 26, 2025',
              rating: 5,
              text: "Joe helped me through the setting up my Facebook, Instagram and LinkedIn. He was patient and extremely supportive. Great tech support. Please check out the company. It will make your business less complex for keeping up with social media posts.",
            },
            {
              name: 'Kau Lou',
              date: 'September 26, 2025',
              rating: 1,
              text: "This guys will walk into your business, make himself comfortable while making you uncomfortable, and not take no for an answer. Seems like he prays on small local business, just bought a no soliciting sign because of this encounter. Very off putting. He also wears meta glasses so be cautious of what you say, he posts the videos on his Facebook.",
            },
          ]} />
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
                    <Image src={system.image} alt={system.title} fill className="object-contain" />
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
                      <Image src={founder.image} alt={founder.name} width={200} height={200} className="object-cover w-full h-full" />
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
          <Image src="/be-good-house-logo.png" alt="The Be Good House" width={300} height={200} className="mx-auto object-contain" />
        </div>
      </section>

    </>
  );
}
