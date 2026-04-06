'use client';

import { useState } from 'react';
import ReviewCard from './ReviewCard';

interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
}

interface ReviewsGridProps {
  reviews: Review[];
}

const PAGE_SIZE = 8; // 2 rows of 4

export default function ReviewsGrid({ reviews }: ReviewsGridProps) {
  const [visible, setVisible] = useState(PAGE_SIZE);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.slice(0, visible).map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </div>

      {visible < reviews.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisible(visible + PAGE_SIZE)}
            className="text-[#000000] text-sm font-semibold hover:opacity-70 transition-opacity"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}
