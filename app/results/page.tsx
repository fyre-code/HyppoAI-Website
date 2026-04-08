import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { HeroText } from '@/components/AnimatedSection';
import CircuitBackground from '@/components/CircuitBackground';
import GrayAccentBorder from '@/components/GrayAccentBorder';
import { FlowBorderH, FlowBorderV } from '@/components/FlowBorder';
import ReviewCarousel from '@/components/ReviewCarousel';

export const metadata: Metadata = {
  title: 'Results — HyppoAI',
  description: 'Real results from real businesses using HyppoAI automation systems.',
};

const starPath = "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";

const fiveStarReviews = [
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
];

const aiSummary =
  "Across 14 five-star Google reviews, customers consistently highlight three things: Joseph's hands-on onboarding, the ASP system's ease of use, and visible engagement growth within weeks. Business owners report saving hours on social media while maintaining a consistent, professional online presence — without logging in, remembering, or posting manually.";

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
    image: '/hvac-results.png',
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
      <section className="relative overflow-hidden bg-black min-h-[80vh] flex flex-col justify-center px-6 py-12 border-b border-[#1a1a1a]">
        <CircuitBackground />
        <div className="relative z-10 max-w-[1170px] mx-auto text-center">
          <HeroText>
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight mb-3 mx-auto">
              Results
            </h1>
          </HeroText>
          <HeroText>
            <p className="text-white text-[21px] max-w-2xl mb-6 leading-relaxed mx-auto">
              We Build Systems So Businesses Don&apos;t Break
            </p>
          </HeroText>
          <HeroText>
            <Link href="https://api.hyppocrm.com/widget/booking/fKaW48nTCxlxxHygIUic" className="btn-primary">Automate My Business</Link>
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
          <p className="text-[#000000] text-[21px] text-center mb-12">
            What our Customers Say
          </p>

          {/* Google Reviews graphic */}
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
                  <path d={starPath} />
                </svg>
              ))}
              <svg className="w-8 h-8" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="half-results">
                    <stop offset="50%" stopColor="#2cd9fe"/>
                    <stop offset="50%" stopColor="#6b7280"/>
                  </linearGradient>
                </defs>
                <path fill="url(#half-results)" d={starPath} />
              </svg>
            </div>
            <p className="text-[#000000] text-[21px] font-semibold">
              4.5 · 16 reviews on Google
            </p>
          </div>

          {/* Review carousel */}
          <ReviewCarousel reviews={fiveStarReviews} aiSummary={aiSummary} />
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center py-12 px-10">
                    {/* Left: name + service */}
                    <div className="flex flex-col gap-3 pr-0 md:pr-10">
                      <h3 className="text-white text-[28px] md:text-[48px] font-bold leading-tight">{t.name}</h3>
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
                            <li key={item} className="flex items-start gap-3 text-white text-[21px] leading-relaxed">
                              <svg className="w-5 h-5 mt-1 shrink-0 text-[#2cd9fe]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-white text-[21px] leading-relaxed">{t.detail}</p>
                      )}
                    </div>

                    {/* Right: YouTube embed or image */}
                    <div className="flex items-center justify-center mt-8 md:mt-0">
                      {t.image ? (
                        <Image
                          src={t.image}
                          alt={`${t.name} results`}
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
            <Link href="https://api.hyppocrm.com/widget/booking/fKaW48nTCxlxxHygIUic" className="btn-primary">
              Automate My Business
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
