export default function RouteMap() {
  return (
    <svg
      viewBox="0 0 320 280"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Abstract road route map illustration"
      className="w-full h-auto"
    >
      <g fill="none" stroke="#EDEBE6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
        <path d="M62 38c24-12 46-8 65 10 16 15 16 39 2 54-12 12-31 16-45 10-14-6-24-19-27-34-3-16 1-30 5-40Z" />
        <path d="M118 102c16 3 29 13 38 28 8 12 9 29 3 42-6 14-18 23-32 27-12 3-25 1-35-6-12-8-20-22-19-36 1-14 6-28 15-38 9-10 21-17 30-17Z" />
        <path d="M120 168c16 4 27 16 33 31 5 12 4 25-2 36-6 10-16 17-27 20-13 3-26 2-37-4-10-5-16-15-18-27-2-12 3-24 12-32 11-9 25-15 39-24Z" />
      </g>

      <g fill="none" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
        <path d="M58 34c24-12 46-8 65 10 16 15 16 39 2 54-11 12-29 16-43 10-14-6-23-19-26-34-3-16 1-30 2-40" />
        <path d="M120 100c16 3 29 13 38 28 8 12 9 29 3 42-6 14-18 23-32 27-12 3-25 1-35-6-12-8-19-22-19-36 1-14 6-28 15-38 9-10 20-17 30-17" />
        <path d="M123 166c16 4 27 16 33 31 5 12 4 25-2 36-6 10-16 17-27 20-13 3-26 2-37-4-10-5-16-15-18-27-2-12 3-24 12-32 11-9 25-15 39-24" />
      </g>

      <g fill="#D4AF37" opacity="0.95">
        <circle cx="70" cy="44" r="3.8" />
        <circle cx="120" cy="102" r="3.2" />
        <circle cx="104" cy="144" r="2.8" />
        <circle cx="134" cy="212" r="2.8" />
        <circle cx="110" cy="246" r="3.2" />
      </g>

      <g fill="#EDEBE6" opacity="0.8" fontFamily="Inter, sans-serif" fontSize="10" letterSpacing="0.16em" textTransform="uppercase">
        <text x="84" y="34">Siem Reap</text>
        <text x="68" y="120">Skun</text>
        <text x="96" y="156">Kampong Cham</text>
        <text x="126" y="220">Kampong Chhnang</text>
        <text x="104" y="260">Takeo</text>
        <text x="84" y="258">Phnom Penh</text>
      </g>
    </svg>
  );
}
