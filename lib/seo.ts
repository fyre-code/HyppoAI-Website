import type { Metadata } from 'next';

const SITE_NAME = 'HyppoAI';
const BASE_URL = 'https://www.hyppohq.ai';

// Swap this with the GHL subaccount media storage URL when available
export const LOGO_OG_URL = '/logo.png';
export const LOGO_ALT = 'HyppoAI logo — AI Business Automation, Palm Bay FL';

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
