import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FadeUp, FadeLeft, FadeRight, StaggerList, StaggerItem, HeroText } from '@/components/AnimatedSection';
import CircuitBackground from '@/components/CircuitBackground';
import GrayAccentBorder from '@/components/GrayAccentBorder';

export const metadata: Metadata = {
  title: 'HyppoCRM — HyppoAI',
  description: 'A CRM built for automation. Track every lead, automate follow-up, and close more deals without manual work.',
};

const features = [
  { title: 'Automated Lead Tracking', description: 'Every lead is captured and logged automatically — from calls, forms, ads, and more.' },
  { title: 'Follow-Up Sequences', description: 'Automated SMS, email, and voicemail sequences that nurture leads until they\'re ready to buy.' },
  { title: 'Pipeline Visibility', description: 'See exactly where every prospect is in your sales process — without manually updating anything.' },
  { title: 'Appointment Automation', description: 'Reminders, confirmations, and follow-ups sent automatically before and after every appointment.' },
  { title: 'Deal Tagging & Routing', description: 'Leads are tagged and routed based on behavior — so the right person gets the right follow-up.' },
  { title: 'Reporting Dashboard', description: 'Know your close rate, lead sources, and pipeline health — without building spreadsheets.' },
];

export default function HyppoCRMPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-black min-h-[80vh] flex flex-col justify-center px-6 py-12 border-b border-[#1a1a1a]">
        <CircuitBackground />
        <div className="relative z-10 max-w-[1170px] mx-auto text-center">
          <HeroText>
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight max-w-4xl mb-3 mx-auto">
              Hyppo<span className="text-[#2cd9fe]">CRM</span>
            </h1>
          </HeroText>
          <HeroText>
            <p className="text-white text-[21px] max-w-2xl mb-6 leading-relaxed mx-auto">
              Hyppo<span className="text-[#2cd9fe]">AI</span>'s centralized system for managing leads, jobs, payments, and follow-up — built to eliminate chaos and manual tracking.
            </p>
          </HeroText>
          <HeroText>
            <Link href="https://api.hyppocrm.com/widget/booking/fKaW48nTCxlxxHygIUic" className="btn-primary">Automate My Leads</Link>
          </HeroText>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#c9c9c9] on-gray py-20 px-6 border-b border-[#1a1a1a]">
        <GrayAccentBorder />
        <div className="relative z-10 max-w-[1170px] mx-auto">
          <h2 className="text-5xl md:text-8xl font-bold text-[#000000] text-center mb-12">
            Every lead organized. Every follow-up handled. Nothing missed.
          </h2>
          <div>
            {[
              {
                subheading: <>Hyppo<span className="text-[#2cd9fe]">CRM</span> Basic</>,
                text: 'HyppoCRM Basic gives you one place to capture, organize, and manage all leads, jobs, and payments without spreadsheets, sticky notes, or scattered tools.',
                image: '/hyppocrm-basic.png',
              },
              {
                subheading: <>Hyppo<span className="text-[#2cd9fe]">CRM</span> Plus</>,
                text: 'HyppoCRM Plus adds automated email and SMS follow-up so leads are contacted instantly and consistently without manual outreach.',
                image: '/hyppocrm-plus.png',
              },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-1 md:grid-cols-2 ${i === 0 ? 'border-b-[6px] border-[#2cd9fe]' : ''}`}>
                <div className="p-10 flex flex-col gap-4 justify-center">
                  <h3 className="text-[28px] md:text-[48px] font-bold text-[#000000] text-center">{row.subheading}</h3>
                  <p className="text-[#000000] text-[21px] leading-relaxed">{row.text}</p>
                </div>
                <div className="p-10 flex items-center justify-center relative">
                  <Image src={row.image} alt={String(row.subheading)} width={500} height={400} className="object-contain w-full h-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-[1170px] mx-auto">
          <FadeUp>
            <p className="text-[#2cd9fe] text-xs uppercase tracking-widest mb-4">What's Included</p>
            <h2 className="text-[28px] md:text-[48px] font-bold text-white mb-16">Inside HyppoCRM</h2>
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
            <h2 className="text-[28px] md:text-[48px] font-bold text-white mb-4">Close More Deals Without More Work</h2>
            <p className="text-white mb-8 max-w-lg mx-auto">
              Book a session and we'll show you how HyppoCRM would fit into your current sales process.
            </p>
            <Link href="https://api.hyppocrm.com/widget/booking/fKaW48nTCxlxxHygIUic" className="btn-primary">Get This System</Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
