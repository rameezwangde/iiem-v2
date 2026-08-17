import React from 'react';

const Marquee = ({ items, reverse = false }) => {
  // Duplicate items array to make sure it covers the screen width for seamless loop
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden flex select-none no-scrollbar py-3">
      <div
        className={`flex whitespace-nowrap min-w-full shrink-0 items-center justify-around gap-8 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {repeatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-6 text-sm md:text-base font-semibold uppercase tracking-wider text-brand-textDark"
          >
            {typeof item === 'string' ? (
              <span className="font-bold text-brand-purple">{item}</span>
            ) : (
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl border border-brand-border bg-white shadow-subtle">
                <span className="text-xs sm:text-sm font-bold text-brand-purple tracking-wide">{item.name}</span>
                <span className="text-[10px] font-bold text-brand-teal uppercase px-2 py-0.5 bg-brand-tealLight rounded-md border border-brand-teal/20">{item.type}</span>
              </div>
            )}
            <span className="text-brand-magenta select-none text-xs">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;


