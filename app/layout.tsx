import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoPopup from '@/components/VideoPopup';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HyppoAI — AI Business Automation Systems',
  description:
    'HyppoAI builds AI-powered automation systems for businesses — social posting, inbound calls, lead follow-up, reputation, funnels, and CRM.',
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
