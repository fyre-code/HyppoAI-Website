export default function ASPMGAnimation() {
  return (
    <svg
      viewBox="0 0 1000 1000"
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      <defs>
        <filter id="mg-lens-glow" x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="18" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <style>{`
        .mg-lens {
          animation: mg-lens-pulse 2s ease-in-out infinite;
        }
        @keyframes mg-lens-pulse {
          0%, 100% { opacity: 0.1; r: 28px; }
          50%       { opacity: 1;   r: 36px; }
        }
      `}</style>
      {/* Positioned over the camera lens at top-center of the glasses */}
      <circle
        className="mg-lens"
        cx="500"
        cy="352"
        r="28"
        fill="#2cd9fe"
        filter="url(#mg-lens-glow)"
      />
    </svg>
  );
}
