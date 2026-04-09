'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const systemsLinks = [
  { label: 'Social Media ASP', href: '/asp' },
  { label: 'Phone AI CallGuard', href: '/callguard' },
  { label: 'HyppoCRM', href: '/hyppocrm' },
  { label: 'Reputation', href: '/reputation' },
  { label: 'Website', href: '/website' },
  { label: 'Funnels', href: '/funnels' },
  { label: 'Custom Builds', href: '/custom-builds' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [systemsOpen, setSystemsOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-[#1a1a1a]">
      <div className="max-w-[1170px] mx-auto px-6 flex items-center justify-between h-20 md:h-36">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/a4cdd6b1-7743-45cd-a401-9559302cf8e4/root/1775745255006_hyppoai-tech-logo-circuit-design.png" alt="HyppoAI" width={480} height={144} className="h-12 md:h-32 w-auto" priority />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
          <Link href="/" className="hover:text-[#2cd9fe] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#2cd9fe] transition-colors">About</Link>

          {/* Systems Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSystemsOpen(true)}
            onMouseLeave={() => setSystemsOpen(false)}
          >
            <button className="hover:text-[#2cd9fe] transition-colors flex items-center gap-1">
              Systems
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {systemsOpen && (
              <div className="absolute top-full left-0 bg-[#0a0a0a] border border-[#1a1a1a] min-w-[220px] py-2 z-50">
                {systemsLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-white hover:text-[#2cd9fe] hover:bg-[#111] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/results" className="hover:text-[#2cd9fe] transition-colors">Results</Link>
          <Link href="/contact" className="hover:text-[#2cd9fe] transition-colors">Contact</Link>
          <Link href="/blog" className="hover:text-[#2cd9fe] transition-colors">Blog</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white hover:text-[#2cd9fe]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#1a1a1a] px-6 py-4 flex flex-col gap-4 text-sm text-white">
          <Link href="/" onClick={() => setMobileOpen(false)} className="hover:text-[#2cd9fe]">Home</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)} className="hover:text-[#2cd9fe]">About</Link>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#555] mb-2">Systems</p>
            {systemsLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-1 hover:text-[#2cd9fe]"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link href="/results" onClick={() => setMobileOpen(false)} className="hover:text-[#2cd9fe]">Results</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="hover:text-[#2cd9fe]">Contact</Link>
          <Link href="/blog" onClick={() => setMobileOpen(false)} className="hover:text-[#2cd9fe]">Blog</Link>
        </div>
      )}
    </nav>
  );
}
