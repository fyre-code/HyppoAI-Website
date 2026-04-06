export default function ASPGraphicAnimation() {
  return (
    <svg
      viewBox="0 0 1000 1000"
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      <defs>
        <filter id="graphic-scan-glow" x="-500%" y="-10%" width="1100%" height="120%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="scan-fade-h" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2cd9fe" stopOpacity="0" />
          <stop offset="50%" stopColor="#2cd9fe" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#2cd9fe" stopOpacity="0" />
        </linearGradient>
      </defs>
      <style>{`
        .graphic-scanline {
          animation: graphic-scan 3s linear infinite;
        }
        @keyframes graphic-scan {
          0%   { transform: translateX(-100px); }
          100% { transform: translateX(1100px); }
        }
      `}</style>
      {/* y=165 starts below the title bar, height covers rest of image */}
      <rect
        className="graphic-scanline"
        x="0"
        y="185"
        width="80"
        height="815"
        fill="url(#scan-fade-h)"
        filter="url(#graphic-scan-glow)"
      />
    </svg>
  );
}
