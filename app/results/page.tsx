import type { Metadata } from 'next';
import Link from 'next/link';
import ImageLightbox from '@/components/ImageLightbox';
import { HeroText } from '@/components/AnimatedSection';
import CircuitBackground from '@/components/CircuitBackground';
import GrayAccentBorder from '@/components/GrayAccentBorder';
import { FlowBorderH, FlowBorderV } from '@/components/FlowBorder';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Client Results & Testimonials — HyppoAI | Palm Bay, FL',
  description: 'See real results from businesses using HyppoAI automation in Palm Bay, FL. 14 five-star Google reviews. Book a session. Call (732) 962-3725.',
  keywords: ['HyppoAI results', 'client testimonials', 'AI automation results', 'business automation reviews', 'social media results', 'Google reviews', 'Palm Bay Florida', 'HyppoAI', 'automation ROI', 'customer success', 'AI business results', 'marketing automation results'],
  path: '/results',
});




// Add YouTube video IDs and optional start times below. Leave videoId as '' for a placeholder.
// Use image instead of videoId for static image display.
const videoTestimonials: {
  name: string;
  company: string;
  service: string;
  detail: string | string[];
  videoId?: string;
  startTime?: number;
  image?: string;
  alt?: string;
}[] = [
  {
    name: 'Jennifer Barton',
    company: 'Seniors Helping Seniors',
    service: 'Custom Build',
    detail: 'Email follow-ups and client packet delivery, fully automated.',
    videoId: 'iMV0fX1fsM4',
    startTime: 20,
  },
  {
    name: 'Shane Dooley',
    company: 'Island Cabinets & Floors',
    service: 'Social Media ASP',
    detail: 'Social media setup and automation (ASP-Form).',
    videoId: 'V9C-JFdOatc',
    startTime: 22,
  },
  {
    name: 'Local HVAC Company',
    company: 'HVAC — Early ASP Client',
    service: 'ASP-Form & ASP-Graphic',
    detail: [
      '262% increase in post views',
      '108% increase in engagement',
      '~1–2 inbound customers per week attributed to social activity',
    ],
    image: 'https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/a4cdd6b1-7743-45cd-a401-9559302cf8e4/root/1775751608465_hvac-marketing-case-study-asp-form-graphic-results.png',
    alt: 'A social media performance dashboard for a local HVAC company using ASP-Form and ASP-Graphic, showing a 262% increase in views and a 108% increase in interactions over 90 days.',
  },
  {
    name: 'Diane Bryson',
    company: 'True Choice Tech',
    service: 'Social Media ASP',
    detail: 'Social media setup and automation (ASP-Form).',
    videoId: 'Lyu_zaJukEA',
    startTime: 24,
  },
  {
    name: 'Chanel Manohar',
    company: '',
    service: 'Social Media ASP',
    detail: 'Social media setup and automation (ASP-Form).',
    videoId: 'QfdDvUH85m4',
    startTime: 25,
  },
  {
    name: 'Donnie Hayes',
    company: 'A&E Auto Upholstery',
    service: 'Social Media ASP',
    detail: 'Social media setup and automation (ASP-Form).',
    videoId: '',
  },
];

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center px-6 py-12 border-b border-[#1a1a1a]">
        <CircuitBackground />
        <div className="relative z-10 max-w-[1170px] mx-auto text-center">
          <HeroText>
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight mb-3 mx-auto">
              Results
            </h1>
          </HeroText>
          <HeroText>
            <p className="text-white text-[21px] max-w-2xl mb-6 leading-relaxed mx-auto">
              We Build <span className="text-[#2cd9fe]">Systems</span>{' '}So Businesses Don&apos;t Break
            </p>
          </HeroText>
          <HeroText>
            <Link href="/contact" className="btn-primary">Automate My Business</Link>
          </HeroText>
        </div>
      </section>

      {/* Testimonials — gray section */}
      <section className="relative overflow-hidden bg-[#c9c9c9] on-gray py-20 px-6">
        <GrayAccentBorder />
        <div className="relative z-10 max-w-[1170px] mx-auto">
          <h2 className="text-5xl md:text-8xl font-bold text-[#000000] text-center mb-2">
            Testimonials
          </h2>

          {/* Reviews embed */}
          <iframe
            src="https://hyppohq.io/w/hyppo-ai-reviews?embed=true"
            style={{ width: '100%', minHeight: '700px', border: 'none' }}
            allowFullScreen
          />
        </div>
      </section>

      {/* Video Testimonials — black section */}
      <section className="bg-[#000000] px-6">
        <div className="max-w-[1170px] mx-auto">
          <div className="grid grid-cols-[6px_1fr_6px]">
            <FlowBorderV />
            <div>
              {videoTestimonials.map((t, i) => (
                <div key={t.name}>
                  {i > 0 && <FlowBorderH />}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center py-8 px-4 md:py-12 md:px-10">
                    {/* Left: name + service */}
                    <div className="flex flex-col gap-3 pr-0 md:pr-10">
                      <h3 className="text-white text-xl md:text-[48px] font-bold leading-tight">{t.name}</h3>
                      {t.company && (
                        <p className="text-[#2cd9fe] text-[21px] font-semibold">{t.company}</p>
                      )}
                      <span className="inline-block w-fit text-xs text-[#2cd9fe] border border-[#2cd9fe] px-2 py-0.5 uppercase tracking-widest">
                        {t.service}
                      </span>
                      <div className="h-[6px] bg-[#2cd9fe] w-full" />
                      {Array.isArray(t.detail) ? (
                        <ul className="flex flex-col gap-2">
                          {t.detail.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-white text-base md:text-[21px] leading-relaxed">
                              <svg className="w-5 h-5 mt-1 shrink-0 text-[#2cd9fe]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-white text-base md:text-[21px] leading-relaxed">{t.detail}</p>
                      )}
                    </div>

                    {/* Right: YouTube embed or image */}
                    <div className="flex items-center justify-center mt-8 md:mt-0">
                      {t.image ? (
                        <ImageLightbox
                          src={t.image}
                          alt={t.alt ?? `${t.name} results`}
                          width={600}
                          height={400}
                          className="w-full h-auto object-contain border border-[#1a1a1a]"
                        />
                      ) : t.videoId ? (
                        <div className="relative w-full aspect-video">
                          <iframe
                            src={`https://www.youtube.com/embed/${t.videoId}${t.startTime ? `?start=${t.startTime}` : ''}`}
                            title={`${t.name} testimonial`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full border border-[#1a1a1a]"
                          />
                        </div>
                      ) : (
                        <div className="w-full aspect-video border border-[#1a1a1a] flex items-center justify-center bg-[#0a0a0a]">
                          <p className="text-[#555] text-sm">Video coming soon</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <FlowBorderV />
          </div>
          <div className="py-16 text-center">
            <Link href="/contact" className="btn-primary">
              Automate My Business
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
