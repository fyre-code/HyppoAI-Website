export default function ASPEchoAnimation() {
  // Brain first, then social icons
  const icons = [
    { cx: 390, cy: 570, baseDelay: 0 },
    { cx: 865, cy: 325, baseDelay: 1.2 },
    { cx: 855, cy: 560, baseDelay: 1.2 },
    { cx: 855, cy: 800, baseDelay: 1.2 },
  ];

  return (
    <svg
      viewBox="0 0 1000 1000"
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      <defs>
        <filter id="echo-ripple-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <style>{`
        .echo-ring {
          fill: none;
          stroke: #000000;
          stroke-width: 4;
          filter: url(#echo-ripple-glow);
          animation: echo-ripple 2.4s ease-out infinite;
        }
        @keyframes echo-ripple {
          0%   { r: 40px; opacity: 0.9; }
          100% { r: 110px; opacity: 0; }
        }
      `}</style>

      {icons.map((icon, i) => (
        <g key={i}>
          <circle className="echo-ring" cx={icon.cx} cy={icon.cy} r="40" style={{ animationDelay: `${icon.baseDelay}s` }} />
          <circle className="echo-ring" cx={icon.cx} cy={icon.cy} r="40" style={{ animationDelay: `${icon.baseDelay + 0.8}s` }} />
          <circle className="echo-ring" cx={icon.cx} cy={icon.cy} r="40" style={{ animationDelay: `${icon.baseDelay + 1.6}s` }} />
        </g>
      ))}
    </svg>
  );
}
