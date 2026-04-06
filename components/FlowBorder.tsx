const lineH = 'linear-gradient(to right, #2cd9fe, #2cd9fe)';
const nodesH = 'repeating-linear-gradient(to right, transparent 0px, transparent 27px, #2cd9fe 27px, #2cd9fe 33px, transparent 33px, transparent 60px)';
const lineV = 'linear-gradient(to bottom, #2cd9fe, #2cd9fe)';
const nodesV = 'repeating-linear-gradient(to bottom, transparent 0px, transparent 27px, #2cd9fe 27px, #2cd9fe 33px, transparent 33px, transparent 60px)';

export function FlowBorderH({ className = '' }: { className?: string }) {
  return (
    <div
      className={className}
      style={{
        height: '6px',
        flexShrink: 0,
        backgroundImage: `${lineH}, ${nodesH}`,
        backgroundSize: '100% 1.5px, 60px 6px',
        backgroundPosition: 'left center, left center',
        backgroundRepeat: 'no-repeat, repeat-x',
      }}
    />
  );
}

export function FlowBorderV({ className = '' }: { className?: string }) {
  return (
    <div
      className={className}
      style={{
        backgroundImage: `${lineV}, ${nodesV}`,
        backgroundSize: '1.5px 100%, 6px 60px',
        backgroundPosition: 'center top, center top',
        backgroundRepeat: 'no-repeat, repeat-y',
      }}
    />
  );
}
