export default function GrayAccentBorder() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 600"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* ── Stroke style: cyan, low opacity, 1.5px ───── */}

      {/* ══ TOP-LEFT (heavy) ════════════════════════════ */}

      {/* Horizontal top run */}
      <path d="M 0,35 L 420,35"   stroke="#2cd9fe" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
      {/* Drop at x=120 */}
      <path d="M 120,35 L 120,55" stroke="#2cd9fe" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
      {/* Drop at x=280 */}
      <path d="M 280,35 L 280,55" stroke="#2cd9fe" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />

      {/* Vertical left run */}
      <path d="M 55,0 L 55,320"   stroke="#2cd9fe" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
      {/* Branch right at y=90 */}
      <path d="M 55,90 L 105,90"  stroke="#2cd9fe" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
      {/* Branch right at y=190 */}
      <path d="M 55,190 L 105,190" stroke="#2cd9fe" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
      {/* Branch right at y=280 */}
      <path d="M 55,280 L 105,280" stroke="#2cd9fe" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />

      {/* Corner connector (join horizontal + vertical) */}
      <path d="M 55,0 L 55,35"    stroke="#2cd9fe" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />

      {/* Node squares — top-left */}
      <rect x="118" y="33"  width="4" height="4" fill="#2cd9fe" opacity="0.5" />
      <rect x="278" y="33"  width="4" height="4" fill="#2cd9fe" opacity="0.5" />
      <rect x="53"  y="33"  width="4" height="4" fill="#2cd9fe" opacity="0.5" />
      <rect x="53"  y="88"  width="4" height="4" fill="#2cd9fe" opacity="0.5" />
      <rect x="103" y="88"  width="4" height="4" fill="#2cd9fe" opacity="0.5" />
      <rect x="53"  y="188" width="4" height="4" fill="#2cd9fe" opacity="0.5" />
      <rect x="103" y="188" width="4" height="4" fill="#2cd9fe" opacity="0.5" />
      <rect x="53"  y="278" width="4" height="4" fill="#2cd9fe" opacity="0.5" />
      <rect x="103" y="278" width="4" height="4" fill="#2cd9fe" opacity="0.5" />

      {/* ══ BOTTOM-RIGHT (light) ════════════════════════ */}

      {/* Horizontal bottom run */}
      <path d="M 780,565 L 1200,565"  stroke="#2cd9fe" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
      {/* Rise at x=1000 */}
      <path d="M 1000,545 L 1000,565" stroke="#2cd9fe" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
      {/* Rise at x=1100 */}
      <path d="M 1100,545 L 1100,565" stroke="#2cd9fe" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />

      {/* Vertical right run */}
      <path d="M 1145,280 L 1145,600"  stroke="#2cd9fe" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
      {/* Branch left at y=340 */}
      <path d="M 1095,340 L 1145,340"  stroke="#2cd9fe" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
      {/* Branch left at y=480 */}
      <path d="M 1095,480 L 1145,480"  stroke="#2cd9fe" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />

      {/* Node squares — bottom-right */}
      <rect x="998"  y="543" width="4" height="4" fill="#2cd9fe" opacity="0.5" />
      <rect x="1098" y="543" width="4" height="4" fill="#2cd9fe" opacity="0.5" />
      <rect x="778"  y="563" width="4" height="4" fill="#2cd9fe" opacity="0.5" />
      <rect x="1143" y="338" width="4" height="4" fill="#2cd9fe" opacity="0.5" />
      <rect x="1093" y="338" width="4" height="4" fill="#2cd9fe" opacity="0.5" />
      <rect x="1143" y="478" width="4" height="4" fill="#2cd9fe" opacity="0.5" />
      <rect x="1093" y="478" width="4" height="4" fill="#2cd9fe" opacity="0.5" />

      {/* ══ TOP-RIGHT (minimal) ═════════════════════════ */}

      {/* Horizontal stub */}
      <path d="M 900,35 L 1200,35"  stroke="#2cd9fe" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
      {/* Short drop */}
      <path d="M 1100,35 L 1100,55" stroke="#2cd9fe" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />

      {/* Node squares — top-right */}
      <rect x="898"  y="33" width="4" height="4" fill="#2cd9fe" opacity="0.5" />
      <rect x="1098" y="33" width="4" height="4" fill="#2cd9fe" opacity="0.5" />

      {/* ══ BOTTOM-LEFT (sparse) ════════════════════════ */}

      {/* Vertical stub */}
      <path d="M 55,430 L 55,600"  stroke="#2cd9fe" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
      {/* Single branch right */}
      <path d="M 55,500 L 105,500" stroke="#2cd9fe" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />

      {/* Node squares — bottom-left */}
      <rect x="53"  y="428" width="4" height="4" fill="#2cd9fe" opacity="0.5" />
      <rect x="53"  y="498" width="4" height="4" fill="#2cd9fe" opacity="0.5" />
      <rect x="103" y="498" width="4" height="4" fill="#2cd9fe" opacity="0.5" />
    </svg>
  );
}
