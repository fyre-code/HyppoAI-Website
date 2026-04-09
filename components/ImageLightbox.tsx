'use client';
import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
}

export default function ImageLightbox({ src, alt, width, height, fill, className }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="cursor-zoom-in" onClick={() => setOpen(true)}>
        {fill ? (
          <Image src={src} alt={alt} fill className={className} />
        ) : (
          <Image src={src} alt={alt} width={width!} height={height!} className={className} />
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white hover:text-[#2cd9fe] transition-colors text-2xl"
              aria-label="Close"
            >
              ✕
            </button>
            <motion.img
              src={src}
              alt={alt}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-[92vw] max-h-[88vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
