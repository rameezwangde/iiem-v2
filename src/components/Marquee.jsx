import React from 'react';

const Marquee = ({ items, reverse = false, speed = 'normal' }) => {
  // Speed options
  const durationClass = speed === 'fast' ? 'duration-15s' : speed === 'slow' ? 'duration-45s' : 'duration-30s';

  // Duplicate items array to make sure it covers the screen width for seamless loop
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden flex select-none no-scrollbar py-6">
      <div
        className={`flex whitespace-nowrap min-w-full shrink-0 items-center justify-around gap-16 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {repeatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 text-brand-cream/80 text-lg md:text-2xl font-display uppercase tracking-widest font-semibold"
          >
            {typeof item === 'string' ? (
              <span>{item}</span>
            ) : (
              <div className="flex flex-col items-start px-8 py-3 border border-brand-cream/15 bg-brand-dark/50 min-w-[200px]">
                <span className="text-sm tracking-wider font-semibold text-brand-cream/90">{item.name}</span>
                <span className="text-[10px] text-brand-magenta tracking-widest font-sans">{item.type}</span>
              </div>
            )}
            <span className="text-brand-magenta select-none">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
