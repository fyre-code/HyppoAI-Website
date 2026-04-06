export default function ASPFormAnimation() {
  const dur = '2.8s';

  // Trunk: 0–20% of cycle
  const trunkKT  = '0;0.01;0.19;0.21;1';
  const trunkOp  = '0;1;1;0;0';
  const trunkKP  = '0;0;1;1;1';

  // Branches: 20–55% of cycle
  const branchKT = '0;0.20;0.21;0.54;0.56;1';
  const branchOp = '0;0;1;1;0;0';
  const branchKP = '0;0;0;1;1;1';

  return (
    <svg
      viewBox="0 0 1000 1000"
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      <defs>
        <filter id="af-glow">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/*
          Image is 1024x1024, viewBox is 1000x1000 (~same scale).
          Trunk: horizontal from form exit (~x=370) to column (~x=535), center y≈525
          Column sits at x≈535. Top exit y≈335, mid y≈525, bot y≈740.
          Arrows extend right to x≈645.
        */}
        <path id="af-trunk" d="M 270,590 L 535,590" />
        <path id="af-top"   d="M 535,590 L 535,370 L 645,370" />
        <path id="af-mid"   d="M 535,590 L 645,590" />
        <path id="af-bot"   d="M 535,590 L 535,800 L 645,800" />
      </defs>

      {/* Trunk dot */}
      <circle r="9" fill="#c9c9c9" filter="url(#af-glow)">
        <animate attributeName="opacity" values={trunkOp} keyTimes={trunkKT} dur={dur} repeatCount="indefinite" />
        <animateMotion dur={dur} repeatCount="indefinite" keyTimes={trunkKT} keyPoints={trunkKP} calcMode="linear">
          <mpath href="#af-trunk" />
        </animateMotion>
      </circle>

      {/* Top branch dot */}
      <circle r="9" fill="#c9c9c9" filter="url(#af-glow)">
        <animate attributeName="opacity" values={branchOp} keyTimes={branchKT} dur={dur} repeatCount="indefinite" />
        <animateMotion dur={dur} repeatCount="indefinite" keyTimes={branchKT} keyPoints={branchKP} calcMode="linear">
          <mpath href="#af-top" />
        </animateMotion>
      </circle>

      {/* Mid branch dot */}
      <circle r="9" fill="#c9c9c9" filter="url(#af-glow)">
        <animate attributeName="opacity" values={branchOp} keyTimes={branchKT} dur={dur} repeatCount="indefinite" />
        <animateMotion dur={dur} repeatCount="indefinite" keyTimes={branchKT} keyPoints={branchKP} calcMode="linear">
          <mpath href="#af-mid" />
        </animateMotion>
      </circle>

      {/* Bot branch dot */}
      <circle r="9" fill="#c9c9c9" filter="url(#af-glow)">
        <animate attributeName="opacity" values={branchOp} keyTimes={branchKT} dur={dur} repeatCount="indefinite" />
        <animateMotion dur={dur} repeatCount="indefinite" keyTimes={branchKT} keyPoints={branchKP} calcMode="linear">
          <mpath href="#af-bot" />
        </animateMotion>
      </circle>
    </svg>
  );
}
