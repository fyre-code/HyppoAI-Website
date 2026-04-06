export default function CircuitBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <filter id="circuit-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Paths for traveling dots */}
        <path id="cp-left-trunk" d="M 40,0 L 40,700" />
        <path id="cp-left-trunk-rev" d="M 40,700 L 40,0" />
        <path id="cp-left-b1" d="M 40,80 L 120,80" />
        <path id="cp-left-b2" d="M 40,200 L 120,200" />
        <path id="cp-left-b3" d="M 120,350 L 40,350" />
        <path id="cp-left-b4" d="M 40,500 L 120,500" />
        <path id="cp-right-trunk" d="M 1160,0 L 1160,700" />
        <path id="cp-right-trunk-rev" d="M 1160,700 L 1160,0" />
        <path id="cp-right-b1" d="M 1160,120 L 1080,120" />
        <path id="cp-right-b2" d="M 1080,280 L 1160,280" />
        <path id="cp-right-b3" d="M 1160,440 L 1080,440" />
        <path id="cp-top-left" d="M 0,30 L 160,30 L 160,65 L 0,65" />
        <path id="cp-bottom-right" d="M 1200,650 L 1040,650 L 1040,680 L 1200,680" />
        <path id="cp-top-right" d="M 1200,30 L 1040,30 L 1040,65 L 1200,65" />
        <path id="cp-bottom-left" d="M 0,650 L 160,650 L 160,680 L 0,680" />
      </defs>

      {/* ── Static circuit traces ─────────────────────── */}

      {/* Left trunk */}
      <path d="M 40,0 L 40,700" stroke="#2cd9fe" strokeOpacity="0.15" strokeWidth="1" fill="none" />
      {/* Left branches */}
      <path d="M 40,80 L 120,80"   stroke="#2cd9fe" strokeOpacity="0.15" strokeWidth="1" fill="none" />
      <path d="M 40,200 L 120,200" stroke="#2cd9fe" strokeOpacity="0.15" strokeWidth="1" fill="none" />
      <path d="M 40,350 L 120,350" stroke="#2cd9fe" strokeOpacity="0.15" strokeWidth="1" fill="none" />
      <path d="M 40,500 L 120,500" stroke="#2cd9fe" strokeOpacity="0.15" strokeWidth="1" fill="none" />
      <path d="M 40,630 L 120,630" stroke="#2cd9fe" strokeOpacity="0.15" strokeWidth="1" fill="none" />

      {/* Right trunk */}
      <path d="M 1160,0 L 1160,700"   stroke="#2cd9fe" strokeOpacity="0.15" strokeWidth="1" fill="none" />
      {/* Right branches */}
      <path d="M 1160,120 L 1080,120" stroke="#2cd9fe" strokeOpacity="0.15" strokeWidth="1" fill="none" />
      <path d="M 1160,280 L 1080,280" stroke="#2cd9fe" strokeOpacity="0.15" strokeWidth="1" fill="none" />
      <path d="M 1160,440 L 1080,440" stroke="#2cd9fe" strokeOpacity="0.15" strokeWidth="1" fill="none" />
      <path d="M 1160,600 L 1080,600" stroke="#2cd9fe" strokeOpacity="0.15" strokeWidth="1" fill="none" />

      {/* Top-left corner */}
      <path d="M 0,30 L 160,30"   stroke="#2cd9fe" strokeOpacity="0.15" strokeWidth="1" fill="none" />
      <path d="M 0,65 L 160,65"   stroke="#2cd9fe" strokeOpacity="0.15" strokeWidth="1" fill="none" />
      {/* Top-right corner */}
      <path d="M 1040,30 L 1200,30"  stroke="#2cd9fe" strokeOpacity="0.15" strokeWidth="1" fill="none" />
      <path d="M 1040,65 L 1200,65"  stroke="#2cd9fe" strokeOpacity="0.15" strokeWidth="1" fill="none" />
      {/* Bottom-left corner */}
      <path d="M 0,650 L 160,650"    stroke="#2cd9fe" strokeOpacity="0.15" strokeWidth="1" fill="none" />
      <path d="M 0,680 L 160,680"    stroke="#2cd9fe" strokeOpacity="0.15" strokeWidth="1" fill="none" />
      {/* Bottom-right corner */}
      <path d="M 1040,650 L 1200,650" stroke="#2cd9fe" strokeOpacity="0.15" strokeWidth="1" fill="none" />
      <path d="M 1040,680 L 1200,680" stroke="#2cd9fe" strokeOpacity="0.15" strokeWidth="1" fill="none" />

      {/* ── Node dots ─────────────────────────────────── */}
      {/* Left branch endpoints */}
      <circle cx="40"  cy="80"  r="2.5" fill="#2cd9fe" opacity="0.3" />
      <circle cx="120" cy="80"  r="2.5" fill="#2cd9fe" opacity="0.3" />
      <circle cx="40"  cy="200" r="2.5" fill="#2cd9fe" opacity="0.3" />
      <circle cx="120" cy="200" r="2.5" fill="#2cd9fe" opacity="0.3" />
      <circle cx="40"  cy="350" r="2.5" fill="#2cd9fe" opacity="0.3" />
      <circle cx="120" cy="350" r="2.5" fill="#2cd9fe" opacity="0.3" />
      <circle cx="40"  cy="500" r="2.5" fill="#2cd9fe" opacity="0.3" />
      <circle cx="120" cy="500" r="2.5" fill="#2cd9fe" opacity="0.3" />
      <circle cx="40"  cy="630" r="2.5" fill="#2cd9fe" opacity="0.3" />
      <circle cx="120" cy="630" r="2.5" fill="#2cd9fe" opacity="0.3" />
      {/* Right branch endpoints */}
      <circle cx="1160" cy="120" r="2.5" fill="#2cd9fe" opacity="0.3" />
      <circle cx="1080" cy="120" r="2.5" fill="#2cd9fe" opacity="0.3" />
      <circle cx="1160" cy="280" r="2.5" fill="#2cd9fe" opacity="0.3" />
      <circle cx="1080" cy="280" r="2.5" fill="#2cd9fe" opacity="0.3" />
      <circle cx="1160" cy="440" r="2.5" fill="#2cd9fe" opacity="0.3" />
      <circle cx="1080" cy="440" r="2.5" fill="#2cd9fe" opacity="0.3" />
      <circle cx="1160" cy="600" r="2.5" fill="#2cd9fe" opacity="0.3" />
      <circle cx="1080" cy="600" r="2.5" fill="#2cd9fe" opacity="0.3" />

      {/* ── Traveling glow dots ───────────────────────── */}

      {/* Left trunk — downward */}
      <circle r="3" fill="#2cd9fe" filter="url(#circuit-glow)" opacity="0.85">
        <animateMotion dur="8s" repeatCount="indefinite" begin="0s">
          <mpath href="#cp-left-trunk" />
        </animateMotion>
      </circle>

      {/* Left trunk — upward */}
      <circle r="3" fill="#2cd9fe" filter="url(#circuit-glow)" opacity="0.85">
        <animateMotion dur="10s" repeatCount="indefinite" begin="3s">
          <mpath href="#cp-left-trunk-rev" />
        </animateMotion>
      </circle>

      {/* Left branch — outward */}
      <circle r="3" fill="#2cd9fe" filter="url(#circuit-glow)" opacity="0.85">
        <animateMotion dur="5s" repeatCount="indefinite" begin="1s">
          <mpath href="#cp-left-b1" />
        </animateMotion>
      </circle>

      {/* Left branch — inward */}
      <circle r="3" fill="#2cd9fe" filter="url(#circuit-glow)" opacity="0.85">
        <animateMotion dur="5s" repeatCount="indefinite" begin="4.5s">
          <mpath href="#cp-left-b3" />
        </animateMotion>
      </circle>

      {/* Left branch outward (lower) */}
      <circle r="3" fill="#2cd9fe" filter="url(#circuit-glow)" opacity="0.85">
        <animateMotion dur="5s" repeatCount="indefinite" begin="6s">
          <mpath href="#cp-left-b4" />
        </animateMotion>
      </circle>

      {/* Right trunk — downward */}
      <circle r="3" fill="#2cd9fe" filter="url(#circuit-glow)" opacity="0.85">
        <animateMotion dur="9s" repeatCount="indefinite" begin="1.5s">
          <mpath href="#cp-right-trunk" />
        </animateMotion>
      </circle>

      {/* Right trunk — upward */}
      <circle r="3" fill="#2cd9fe" filter="url(#circuit-glow)" opacity="0.85">
        <animateMotion dur="11s" repeatCount="indefinite" begin="5s">
          <mpath href="#cp-right-trunk-rev" />
        </animateMotion>
      </circle>

      {/* Right branch — inward */}
      <circle r="3" fill="#2cd9fe" filter="url(#circuit-glow)" opacity="0.85">
        <animateMotion dur="5s" repeatCount="indefinite" begin="2s">
          <mpath href="#cp-right-b1" />
        </animateMotion>
      </circle>

      {/* Right branch — outward */}
      <circle r="3" fill="#2cd9fe" filter="url(#circuit-glow)" opacity="0.85">
        <animateMotion dur="5s" repeatCount="indefinite" begin="7s">
          <mpath href="#cp-right-b2" />
        </animateMotion>
      </circle>

      {/* Right branch — inward (lower) */}
      <circle r="3" fill="#2cd9fe" filter="url(#circuit-glow)" opacity="0.85">
        <animateMotion dur="5s" repeatCount="indefinite" begin="3.5s">
          <mpath href="#cp-right-b3" />
        </animateMotion>
      </circle>

      {/* Top-left corner sweep */}
      <circle r="3" fill="#2cd9fe" filter="url(#circuit-glow)" opacity="0.85">
        <animateMotion dur="6s" repeatCount="indefinite" begin="0.5s">
          <mpath href="#cp-top-left" />
        </animateMotion>
      </circle>

      {/* Top-right corner sweep */}
      <circle r="3" fill="#2cd9fe" filter="url(#circuit-glow)" opacity="0.85">
        <animateMotion dur="6s" repeatCount="indefinite" begin="4s">
          <mpath href="#cp-top-right" />
        </animateMotion>
      </circle>

      {/* Bottom-left corner sweep */}
      <circle r="3" fill="#2cd9fe" filter="url(#circuit-glow)" opacity="0.85">
        <animateMotion dur="6s" repeatCount="indefinite" begin="2.5s">
          <mpath href="#cp-bottom-left" />
        </animateMotion>
      </circle>

      {/* Bottom-right corner sweep */}
      <circle r="3" fill="#2cd9fe" filter="url(#circuit-glow)" opacity="0.85">
        <animateMotion dur="6s" repeatCount="indefinite" begin="5.5s">
          <mpath href="#cp-bottom-right" />
        </animateMotion>
      </circle>
    </svg>
  );
}
