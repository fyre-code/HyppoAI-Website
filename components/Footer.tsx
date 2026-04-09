import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-[#1a1a1a] pt-16 pb-8">
      <div className="max-w-[1170px] mx-auto px-6">
        <div className="grid grid-cols-3 gap-4 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <Image src="https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/a4cdd6b1-7743-45cd-a401-9559302cf8e4/root/1775745255006_hyppoai-tech-logo-circuit-design.png" alt="HyppoAI" width={480} height={144} className="h-16 md:h-32 w-auto mb-4" />
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center justify-center gap-3 md:gap-4">
            {[
              { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61575603824127', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', fill: false },
              { label: 'Instagram', href: 'https://www.instagram.com/hyppo_ads/', icon: 'M8 3H16a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5z M12 8a4 4 0 100 8 4 4 0 000-8z M17.5 6.5h.01', fill: false },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/company/hyppo-ads', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z', fill: false },
              { label: 'YouTube', href: 'https://www.youtube.com/@Hyppo_Ads/shorts', icon: 'M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z', fill: false },
              { label: 'TikTok', href: 'https://www.tiktok.com/@hyppo_ads', icon: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.52V6.74a4.85 4.85 0 01-1.02-.05z', fill: true },
              { label: 'X', href: 'https://x.com/Hyppo_Ads', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', fill: true },
            ].map(({ label, href, icon, fill }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex items-center gap-2 text-[#555] hover:text-[#2cd9fe] transition-colors">
                <svg className="w-5 h-5 md:w-6 md:h-6 shrink-0" fill={fill ? 'currentColor' : 'none'} stroke={fill ? 'none' : 'currentColor'} strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                </svg>
                <span className="text-[#2cd9fe] text-xs md:text-sm">{label}</span>
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[#555] mb-4">Contact</p>
            <div className="flex flex-col gap-2 text-xs md:text-sm text-white">
              <a href="tel:7329623725" className="flex items-center gap-2 hover:text-[#2cd9fe] transition-colors">
                <svg className="w-4 h-4 text-[#2cd9fe] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
                </svg>
                (732) 962-3725
              </a>
              <a href="mailto:growth@hyppohq.ai" className="flex items-center gap-2 hover:text-[#2cd9fe] transition-colors">
                <svg className="w-4 h-4 text-[#2cd9fe] shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                </svg>
                growth@hyppohq.ai
              </a>
            </div>
            <div className="mt-6 flex flex-col gap-1 text-xs md:text-sm text-[#555]">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] pt-6 text-center text-xs text-[#555]">
          {new Date().getFullYear()} © All Rights Reserved Hyppo Advertising, Inc
        </div>
      </div>
    </footer>
  );
}
