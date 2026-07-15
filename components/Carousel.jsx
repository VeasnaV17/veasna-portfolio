"use client";

/**
 * Continuous floating carousel (marquee-style).
 * Pass an array of already-rendered React elements as `children`
 * (e.g. items.map(item => <Card key={item.id} {...item} />)).
 * Duplicates the list once so the scroll loop is seamless, pauses
 * smoothly on hover, and respects prefers-reduced-motion via the
 * "motion-reduce:animate-none" utility.
 *
 * Usage:
 * <Carousel speedSeconds={30}>
 *   {items.map((item) => <Card key={item.id} {...item} />)}
 * </Carousel>
 */
export default function Carousel({ children, speedSeconds = 32 }) {
  const items = Array.isArray(children) ? children : [children];
  if (!items || items.length === 0) return null;

  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden group">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28 bg-gradient-to-r from-void to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 bg-gradient-to-l from-void to-transparent z-10" />

      <div
        className="flex gap-6 w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animationDuration: `${speedSeconds}s` }}
      >
        {doubled.map((child, i) => (
          <div key={i} className="shrink-0">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
