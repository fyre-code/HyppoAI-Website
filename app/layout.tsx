import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoPopup from '@/components/VideoPopup';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hyppohq.ai'),
  title: 'AI Business Automation Systems — HyppoAI | Palm Bay, FL',
  description:
    'HyppoAI provides AI-powered business automation in Palm Bay, FL. Social media, AI calls, CRM & more. Call (732) 962-3725.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <VideoPopup />
      </body>
    </html>
  );
}
