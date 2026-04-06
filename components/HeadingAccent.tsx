export default function HeadingAccent() {
  const stroke = '#2cd9fe';
  const sw = '1.5';
  const so = '0.4';
  const nodeSize = 4;

  const nodes = [
    // Top-left horizontal line junctions
    { x: 80, y: 15 },
    { x: 200, y: 15 },
    // Top-left vertical line branches
    { x: 30, y: 55 },
    { x: 30, y: 110 },
    // Top-right stub junction
    { x: 1100, y: 15 },
    // Bottom-right horizontal junctions
    { x: 1050, y: 145 },
    { x: 1150, y: 145 },
    // Bottom-right vertical branches
    { x: 1170, y: 60 },
    { x: 1170, y: 110 },
    // Bottom-left branch
    { x: 30, y: 130 },
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 160"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <g stroke={stroke} strokeWidth={sw} strokeOpacity={so} fill="none">
        {/* Top-left: horizontal line with drops */}
        <path d="M 0,15 L 280,15" />
        <path d="M 80,15 L 80,35" />
        <path d="M 200,15 L 200,35" />

        {/* Top-left: vertical left with branches */}
        <path d="M 30,0 L 30,160" />
        <path d="M 30,55 L 80,55" />
        <path d="M 30,110 L 80,110" />

        {/* Top-right: minimal stub */}
        <path d="M 950,15 L 1200,15" />
        <path d="M 1100,15 L 1100,35" />

        {/* Bottom-right: horizontal bottom with rises */}
        <path d="M 920,145 L 1200,145" />
        <path d="M 1050,125 L 1050,145" />
        <path d="M 1150,125 L 1150,145" />

        {/* Bottom-right: vertical right with branches */}
        <path d="M 1170,0 L 1170,160" />
        <path d="M 1120,60 L 1170,60" />
        <path d="M 1120,110 L 1170,110" />

        {/* Bottom-left: sparse stub */}
        <path d="M 30,130 L 80,130" />
      </g>

      {/* Junction nodes */}
      <g fill={stroke} fillOpacity={so}>
        {nodes.map((n, i) => (
          <rect
            key={i}
            x={n.x - nodeSize / 2}
            y={n.y - nodeSize / 2}
            width={nodeSize}
            height={nodeSize}
          />
        ))}
      </g>
    </svg>
  );
}
