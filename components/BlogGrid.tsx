'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Post } from '@/lib/posts';

const PAGE_SIZE = 4;

export default function BlogGrid({ posts }: { posts: Post[] }) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(posts.length / PAGE_SIZE);
  const start = page * PAGE_SIZE;
  const visible = posts.slice(start, start + PAGE_SIZE);

  return (
    <div>
      {/* 2x2 grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {visible.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block flex flex-col transition-all duration-200"
            style={{ outline: '1px solid #2cd9fe', outlineOffset: '0px' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.outlineWidth = '3px'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.outlineWidth = '1px'; }}
          >
            {/* Featured image */}
            {post.image && (
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt ?? post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}

            {/* Card body */}
            <div className="p-5 md:p-8 flex flex-col flex-1">
              {/* Animated cyan accent bar */}
              <div className="h-[4px] w-12 bg-[#2cd9fe] mb-5 group-hover:w-full transition-all duration-300" />

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] uppercase tracking-widest px-2 py-0.5 border border-[#2a2a2a] text-[#666]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <p className="text-[#555] text-xs uppercase tracking-widest mb-3">{post.date}</p>
              <h2 className="text-white font-bold text-[18px] leading-snug mb-3 flex-1">
                {post.title}
              </h2>
              <p className="text-[#777] text-[12px] leading-relaxed mb-5">{post.excerpt}</p>

              <div className="flex items-center gap-2 mt-auto">
                <span className="text-[#2cd9fe] text-xs font-semibold uppercase tracking-widest">Read More</span>
                <svg className="w-4 h-4 text-[#2cd9fe]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            aria-label="Previous page"
            className={`w-11 h-11 flex items-center justify-center border transition-all duration-200
              ${page === 0
                ? 'border-[#333] text-[#333] cursor-not-allowed'
                : 'border-[#2cd9fe] bg-[#2cd9fe] text-black hover:bg-transparent hover:text-[#2cd9fe]'
              }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <span className="text-[#888] text-xs uppercase tracking-widest">
            {page + 1} / {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            aria-label="Next page"
            className={`w-11 h-11 flex items-center justify-center border transition-all duration-200
              ${page === totalPages - 1
                ? 'border-[#333] text-[#333] cursor-not-allowed'
                : 'border-[#2cd9fe] bg-[#2cd9fe] text-black hover:bg-transparent hover:text-[#2cd9fe]'
              }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
