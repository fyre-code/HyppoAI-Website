export default function ASPRankAnimation() {
  const totalDur = 4; // total cycle duration in seconds
  // Dot 1 travels 0–40% of cycle, dot 2 travels 45–85%
  const d1KT = '0;0.01;0.39;0.41;1';
  const d1KP = '0;0;1;1;1';
  const d1Op = '0;1;1;0;0';

  const d2KT = '0;0.44;0.45;0.84;0.86;1';
  const d2KP = '0;0;0;1;1;1';
  const d2Op = '0;0;1;1;0;0';

  return (
    <svg
      viewBox="0 0 1000 1000"
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      <defs>
        <filter id="rank-glow" x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Arrow 1: dashed line from gear curving right and up into chart base */}
        <path id="rank-p1" d="M 175,750 L 265,750 C 285,750 295,735 295,710 L 295,548 C 295,523 310,508 335,508 L 430,508" fill="none" />
        {/* Arrow 2: document stack (center) curving right to social icons */}
        <path id="rank-p2" d="M 490,780 L 605,780 C 630,780 640,760 640,735 L 640,405 C 640,380 655,365 680,365 L 800,365" fill="none" />
      </defs>

      {/* Dot 1 */}
      <circle r="10" fill="#c9c9c9" filter="url(#rank-glow)">
        <animate attributeName="opacity" values={d1Op} keyTimes={d1KT} dur={`${totalDur}s`} repeatCount="indefinite" />
        <animateMotion dur={`${totalDur}s`} repeatCount="indefinite" keyTimes={d1KT} keyPoints={d1KP} calcMode="linear">
          <mpath href="#rank-p1" />
        </animateMotion>
      </circle>

      {/* Dot 2 */}
      <circle r="10" fill="#c9c9c9" filter="url(#rank-glow)">
        <animate attributeName="opacity" values={d2Op} keyTimes={d2KT} dur={`${totalDur}s`} repeatCount="indefinite" />
        <animateMotion dur={`${totalDur}s`} repeatCount="indefinite" keyTimes={d2KT} keyPoints={d2KP} calcMode="linear">
          <mpath href="#rank-p2" />
        </animateMotion>
      </circle>
    </svg>
  );
}
