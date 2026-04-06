export default function GrayAccentBorder({ compact = false }: { compact?: boolean }) {
  const s = { stroke: '#2cd9fe', strokeWidth: '1.5', strokeOpacity: '0.4', fill: 'none' } as const;
  const n = { fill: '#2cd9fe', opacity: '0.5' } as const;

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 600"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* ══ TOP-LEFT (heavy) ════════════════════════════ */}

      {/* Horizontal top run */}
      <path d="M 0,35 L 420,35"   {...s} />
      <path d="M 120,35 L 120,55" {...s} />
      <path d="M 280,35 L 280,55" {...s} />

      {/* Vertical left run — compact stops at y=120, full runs to y=320 */}
      <path d={compact ? 'M 55,0 L 55,120' : 'M 55,0 L 55,320'} {...s} />
      <path d="M 55,90 L 105,90" {...s} />
      {!compact && <path d="M 55,190 L 105,190" {...s} />}
      {!compact && <path d="M 55,280 L 105,280" {...s} />}

      {/* Corner connector */}
      <path d="M 55,0 L 55,35" {...s} />

      {/* Nodes — top-left */}
      <rect x="118" y="33"  width="4" height="4" {...n} />
      <rect x="278" y="33"  width="4" height="4" {...n} />
      <rect x="53"  y="33"  width="4" height="4" {...n} />
      <rect x="53"  y="88"  width="4" height="4" {...n} />
      <rect x="103" y="88"  width="4" height="4" {...n} />
      {!compact && <rect x="53"  y="188" width="4" height="4" {...n} />}
      {!compact && <rect x="103" y="188" width="4" height="4" {...n} />}
      {!compact && <rect x="53"  y="278" width="4" height="4" {...n} />}
      {!compact && <rect x="103" y="278" width="4" height="4" {...n} />}

      {/* ══ BOTTOM-RIGHT (light) ════════════════════════ */}

      {/* Horizontal bottom run */}
      <path d="M 780,565 L 1200,565"  {...s} />
      <path d="M 1000,545 L 1000,565" {...s} />
      <path d="M 1100,545 L 1100,565" {...s} />

      {/* Vertical right run — compact starts at y=480, full starts at y=280 */}
      <path d={compact ? 'M 1145,480 L 1145,600' : 'M 1145,280 L 1145,600'} {...s} />
      {!compact && <path d="M 1095,340 L 1145,340" {...s} />}
      <path d="M 1095,480 L 1145,480" {...s} />

      {/* Nodes — bottom-right */}
      <rect x="998"  y="543" width="4" height="4" {...n} />
      <rect x="1098" y="543" width="4" height="4" {...n} />
      <rect x="778"  y="563" width="4" height="4" {...n} />
      {!compact && <rect x="1143" y="338" width="4" height="4" {...n} />}
      {!compact && <rect x="1093" y="338" width="4" height="4" {...n} />}
      <rect x="1143" y="478" width="4" height="4" {...n} />
      <rect x="1093" y="478" width="4" height="4" {...n} />

      {/* ══ TOP-RIGHT (minimal) ═════════════════════════ */}

      <path d="M 900,35 L 1200,35"  {...s} />
      <path d="M 1100,35 L 1100,55" {...s} />
      <rect x="898"  y="33" width="4" height="4" {...n} />
      <rect x="1098" y="33" width="4" height="4" {...n} />

      {/* ══ BOTTOM-LEFT (sparse) ════════════════════════ */}

      <path d="M 55,430 L 55,600"  {...s} />
      <path d="M 55,500 L 105,500" {...s} />
      <rect x="53"  y="428" width="4" height="4" {...n} />
      <rect x="53"  y="498" width="4" height="4" {...n} />
      <rect x="103" y="498" width="4" height="4" {...n} />
    </svg>
  );
}
