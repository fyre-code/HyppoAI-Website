'use client';

export default function NextAvailableDate() {
  const today = new Date();
  const day = today.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat

  // Skip to next weekday (Mon–Fri), always at least 1 day ahead
  const daysUntilNext = day === 5 ? 3 : day === 6 ? 2 : 1; // Fri→Mon, Sat→Mon, else +1
  const next = new Date(today);
  next.setDate(today.getDate() + daysUntilNext);

  const formatted = next.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return <span>{formatted}</span>;
}
