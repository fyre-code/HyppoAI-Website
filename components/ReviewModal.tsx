'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function ReviewModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="btn-primary mt-4">
        Write a Review
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white rounded-lg overflow-hidden w-full max-w-[600px]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl leading-none z-10"
                aria-label="Close"
              >
                ✕
              </button>
              <iframe
                src="https://hyppohq.io/w/hyppo-reputation-management?embed=true"
                style={{ width: '100%', minHeight: '400px', border: 'none' }}
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
