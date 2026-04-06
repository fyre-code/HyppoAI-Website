'use client';

import { useState } from 'react';
import ReviewCard from './ReviewCard';

interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
}

interface ReviewCarouselProps {
  reviews: Review[];
  aiSummary: string;
}

export default function ReviewCarousel({ reviews, aiSummary }: ReviewCarouselProps) {
  const [offset, setOffset] = useState(0);
  const total = reviews.length + 1; // +1 for AI summary card
  const visible = 4;
  const canGoLeft = offset > 0;
  const canGoRight = offset < total - visible;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* AI Summary card is index 0 */}
        {offset === 0 && (
          <div className="bg-[#0a0a0a] border border-[#2cd9fe] p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-[#2cd9fe] shrink-0" />
              <span className="text-[#2cd9fe] text-xs uppercase tracking-widest font-semibold">AI Summary</span>
            </div>
            <p className="text-white text-[12px] leading-relaxed">{aiSummary}</p>
          </div>
        )}

        {/* Review cards — offset 0 shows reviews[0..2], offset 1 shows reviews[0..3], etc. */}
        {reviews
          .slice(offset === 0 ? 0 : offset - 1, offset === 0 ? visible - 1 : offset - 1 + visible)
          .map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} {...review} />
          ))}
      </div>

      {/* Navigation arrows */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => setOffset(o => Math.max(0, o - 1))}
          disabled={!canGoLeft}
          aria-label="Previous reviews"
          className={`w-10 h-10 flex items-center justify-center border transition-colors ${
            canGoLeft
              ? 'border-[#2cd9fe] text-[#2cd9fe] hover:bg-[#2cd9fe] hover:text-black'
              : 'border-[#aaaaaa] text-[#aaaaaa] cursor-not-allowed'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setOffset(o => Math.min(total - visible, o + 1))}
          disabled={!canGoRight}
          aria-label="Next reviews"
          className={`w-10 h-10 flex items-center justify-center border transition-colors ${
            canGoRight
              ? 'border-[#2cd9fe] text-[#2cd9fe] hover:bg-[#2cd9fe] hover:text-black'
              : 'border-[#aaaaaa] text-[#aaaaaa] cursor-not-allowed'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
