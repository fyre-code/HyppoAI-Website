import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Results — HyppoAI',
  description: 'Real results from real businesses using HyppoAI automation systems.',
};

const testimonials = [
  {
    name: 'Jennifer Barton',
    company: 'Seniors Helping Seniors',
    service: 'Custom Build',
    result: 'Email follow-ups and client packet delivery, fully automated. No more manual sending — every new client gets the right information at the right time, automatically.',
  },
  {
    name: 'Shane Dooley',
    company: 'Island Cabinets & Floors',
    service: 'Social Media ASP',
    result: 'Social media setup and automation running consistently. Brand is now active and posting regularly without Shane touching it.',
  },
  {
    name: 'Local HVAC Company',
    company: 'HVAC — Early ASP Client',
    service: 'Social Media ASP',
    result: '262% increase in post views, 108% increase in engagement, and approximately 1–2 inbound customers per week attributed to social activity — all within 47 days.',
    stats: [
      { value: '262%', label: 'Increase in post views' },
      { value: '108%', label: 'Increase in engagement' },
      { value: '47 days', label: 'To see results' },
    ],
  },
  {
    name: 'Diane Bryson',
    company: 'True Choice Tech',
    service: 'Social Media ASP',
    result: 'Social media setup and automation in place. Consistent content running without Diane needing to manage it.',
  },
  {
    name: 'Chanel Manohar',
    company: '',
    service: 'Social Media ASP',
    result: 'Social media automation up and running — consistent posting across platforms without manual effort.',
  },
  {
    name: 'Donnie Hayes',
    company: 'A&E Auto Upholstery',
    service: 'Social Media ASP',
    result: 'Social media presence automated. A&E Auto Upholstery now has a consistent online presence that reflects the quality of their work.',
  },
];

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black py-12 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-[1170px] mx-auto text-center">
          <p className="text-[#2cd9fe] text-xs uppercase tracking-widest mb-3">Proof</p>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-3">
            We Build Systems So Businesses Don't Break
          </h1>
          <p className="text-white text-[21px] max-w-xl mx-auto mb-6">
            These are real clients, real results. No inflated numbers — just what happens when
            you replace manual work with systems.
          </p>
          <Link href="/contact" className="btn-primary">Automate My Business</Link>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0a0a0a] border-b border-[#1a1a1a]">
        <div className="max-w-[1170px] mx-auto grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1a1a1a]">
          {[
            { stat: '262%', label: 'Increase in post views', note: 'Local HVAC Company' },
            { stat: '108%', label: 'Increase in engagement', note: 'Social Media ASP System' },
            { stat: '47 days', label: 'Average time to results', note: 'From system launch' },
          ].map((item) => (
            <div key={item.stat} className="px-10 py-14 text-center">
              <p className="text-5xl font-bold text-[#2cd9fe] mb-2">{item.stat}</p>
              <p className="text-white font-semibold mb-1">{item.label}</p>
              <p className="text-[#555] text-sm">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-[1170px] mx-auto">
          <p className="text-[#2cd9fe] text-xs uppercase tracking-widest mb-4">Client Stories</p>
          <h2 className="text-[28px] md:text-[48px] font-bold text-white mb-16">What Clients Say</h2>

          <div className="flex flex-col gap-0 border border-[#1a1a1a]">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`p-10 md:p-12 border-b border-[#1a1a1a] last:border-b-0 ${i % 2 === 1 ? 'bg-[#0a0a0a]' : 'bg-black'}`}>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-1/4 shrink-0">
                    <p className="text-white font-bold text-[21px]">{t.name}</p>
                    {t.company && <p className="text-white text-sm">{t.company}</p>}
                    <span className="inline-block mt-2 text-xs text-[#2cd9fe] border border-[#2cd9fe] px-2 py-0.5 uppercase tracking-widest">
                      {t.service}
                    </span>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-white leading-relaxed text-base">{t.result}</p>
                    {t.stats && (
                      <div className="flex gap-8 mt-6">
                        {t.stats.map((s) => (
                          <div key={s.label}>
                            <p className="text-[21px] md:text-[28px] font-bold text-[#2cd9fe]">{s.value}</p>
                            <p className="text-[#555] text-xs mt-1">{s.label}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-[1170px] mx-auto text-center">
          <h2 className="text-[28px] md:text-[48px] font-bold text-white mb-4">
            Want Results Like These?
          </h2>
          <p className="text-white mb-8 max-w-lg mx-auto">
            Book a working session. We'll show you what a system for your business looks like.
          </p>
          <Link href="/contact" className="btn-primary">Book a Strategy Session</Link>
        </div>
      </section>
    </>
  );
}
