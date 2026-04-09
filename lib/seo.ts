import type { Metadata } from 'next';

const SITE_NAME = 'HyppoAI';
const BASE_URL = 'https://www.hyppohq.ai';

export const LOGO_OG_URL = 'https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/a4cdd6b1-7743-45cd-a401-9559302cf8e4/root/1775745255006_hyppoai-tech-logo-circuit-design.png';
export const LOGO_ALT = 'HyppoAI logo featuring modern AI technology branding with circuit-style design';

export function buildMetadata({
  title,
  description,
  keywords,
  path = '',
  imageUrl = LOGO_OG_URL,
  imageAlt = LOGO_ALT,
}: {
  title: string;
  description: string;
  keywords: string[];
  path?: string;
  imageUrl?: string;
  imageAlt?: string;
}): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: SITE_NAME }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_US',
      images: [{ url: imageUrl, alt: imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: imageUrl, alt: imageAlt }],
    },
  };
}
