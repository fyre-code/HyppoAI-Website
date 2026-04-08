'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const EXCLUDED = ['/terms', '/privacy', '/contact'];
const SESSION_CLICKED = 'hyppo_vid_clicked';
const SESSION_DISMISSES = 'hyppo_vid_dismisses';

type State = 'idle' | 'open' | 'minimized' | 'dismissed' | 'closed';

export default function VideoPopup() {
  const pathname = usePathname();
  const [popupState, setPopupState] = useState<State>('idle');
  const scrollListenerRef = useRef<(() => void) | null>(null);
  const delayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoHideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearAll = useCallback(() => {
    if (delayTimerRef.current) { clearTimeout(delayTimerRef.current); delayTimerRef.current = null; }
    if (autoHideTimerRef.current) { clearTimeout(autoHideTimerRef.current); autoHideTimerRef.current = null; }
    if (scrollListenerRef.current) {
      window.removeEventListener('scroll', scrollListenerRef.current);
      scrollListenerRef.current = null;
    }
  }, []);

  useEffect(() => {
    // Reset per-page state on navigation
    setPopupState('idle');
    clearAll();

    if (EXCLUDED.includes(pathname)) return;

    const clicked = sessionStorage.getItem(SESSION_CLICKED) === 'true';
    const dismisses = parseInt(sessionStorage.getItem(SESSION_DISMISSES) || '0', 10);
    if (clicked || dismisses >= 3) { setPopupState('closed'); return; }

    let armed = false;

    const arm = () => {
      if (armed) return;
      armed = true;
      // Remove scroll listener — no longer needed
      if (scrollListenerRef.current) {
        window.removeEventListener('scroll', scrollListenerRef.current);
        scrollListenerRef.current = null;
      }
      // Wait 3s then open
      delayTimerRef.current = setTimeout(() => {
        setPopupState('open');
        // Auto-hide after 25s if still open
        autoHideTimerRef.current = setTimeout(() => {
          setPopupState((prev) => (prev === 'open' ? 'minimized' : prev));
        }, 25000);
      }, 3000);
    };

    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6) arm();
    };

    scrollListenerRef.current = onScroll;
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => { clearAll(); armed = true; };
  }, [pathname, clearAll]);

  const handleClose = () => {
    clearAll();
    const n = parseInt(sessionStorage.getItem(SESSION_DISMISSES) || '0', 10);
    sessionStorage.setItem(SESSION_DISMISSES, String(n + 1));
    setPopupState('dismissed');
  };

  const handleVideoClick = () => {
    sessionStorage.setItem(SESSION_CLICKED, 'true');
    clearAll();
    setPopupState('closed');
  };

  if (EXCLUDED.includes(pathname)) return null;
  if (popupState === 'idle' || popupState === 'dismissed' || popupState === 'closed') return null;

  return (
    <>
      <AnimatePresence>
        {popupState === 'open' && (
          <motion.div
            key="popup"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-[340px] bg-[#000000] border border-[#2cd9fe] shadow-[0_0_24px_rgba(44,217,254,0.15)]"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute top-2 right-2 z-10 w-6 h-6 flex items-center justify-center text-[#555] hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Thumbnail */}
            <a
              href="https://www.youtube.com/watch?v=SnGMOZmaYAU"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleVideoClick}
              className="block relative w-full overflow-hidden"
              style={{ aspectRatio: '16/9' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://img.youtube.com/vi/SnGMOZmaYAU/maxresdefault.jpg"
                alt="Watch the video case study"
                className="w-full h-full object-cover"
              />
              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#2cd9fe] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Caption */}
            <p className="p-4 pt-3 text-white text-[13px] leading-relaxed">
              Watch how one business used AI to capture 6 new opportunities after hours—without hiring staff, missing leads, or lifting a finger.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reopener tab — shown after auto-hide */}
      <AnimatePresence>
        {popupState === 'minimized' && (
          <motion.button
            key="reopener"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={() => setPopupState('open')}
            aria-label="Reopen video"
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 bg-[#000000] border border-[#2cd9fe] flex items-center justify-center hover:bg-[#0a0a0a] transition-colors"
          >
            <svg className="w-5 h-5 text-[#2cd9fe] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
