import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — HyppoAI',
  description: 'Book a strategy session with HyppoAI. We\'ll show you exactly what automation looks like for your business.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black py-24 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-[1170px] mx-auto">
          <p className="text-[#2cd9fe] text-xs uppercase tracking-widest mb-4">Let's Talk</p>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-[#c9c9c9] text-[21px] max-w-2xl leading-relaxed">
            Are you a business owner dealing with growth, automation, or follow-up challenges?
            Book time below for a short working session to see whether we can help and what the
            right next step would be. You'll leave with clarity — whether we're a fit or not.
          </p>
        </div>
      </section>

      {/* Booking + Contact Info */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-[1170px] mx-auto flex flex-col md:flex-row gap-16">
          {/* Calendar Embed */}
          <div className="md:w-2/3">
            <p className="text-[#2cd9fe] text-xs uppercase tracking-widest mb-6">Book a Session</p>
            <div className="border border-[#1a1a1a] bg-black p-2 min-h-[600px]">
              {/* Replace the src below with your actual Cal.com or Calendly embed URL */}
              <iframe
                src="https://calendly.com/hyppohq"
                width="100%"
                height="600"
                frameBorder="0"
                title="Book a HyppoAI Strategy Session"
                className="w-full"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:w-1/3">
            <p className="text-[#2cd9fe] text-xs uppercase tracking-widest mb-6">Direct Contact</p>
            <div className="flex flex-col gap-6">
              <div className="border border-[#1a1a1a] p-6">
                <p className="text-white font-semibold mb-1">Phone</p>
                <a href="tel:7329623725" className="text-[#c9c9c9] hover:text-[#2cd9fe] transition-colors">
                  (732) 962-3725
                </a>
              </div>
              <div className="border border-[#1a1a1a] p-6">
                <p className="text-white font-semibold mb-1">Email</p>
                <a href="mailto:growth@hyppohq.ai" className="text-[#c9c9c9] hover:text-[#2cd9fe] transition-colors">
                  growth@hyppohq.ai
                </a>
              </div>
              <div className="border border-[#1a1a1a] p-6">
                <p className="text-white font-semibold mb-3">Follow Us</p>
                <div className="flex gap-4">
                  {[
                    { label: 'Facebook', href: 'https://facebook.com' },
                    { label: 'Instagram', href: 'https://instagram.com' },
                    { label: 'LinkedIn', href: 'https://linkedin.com' },
                    { label: 'YouTube', href: 'https://youtube.com' },
                    { label: 'TikTok', href: 'https://tiktok.com' },
                  ].map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#555] hover:text-[#2cd9fe] transition-colors text-xs uppercase tracking-widest"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
