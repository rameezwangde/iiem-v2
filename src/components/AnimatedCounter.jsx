import React, { useEffect, useState, useRef } from 'react';

const AnimatedCounter = ({ value, label }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  // Extract digits and suffix (e.g. "2500+" -> number: 2500, suffix: "+")
  const numericString = value.replace(/[^0-9]/g, '');
  const target = parseInt(numericString, 10) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    let observer;
    let animationFrame;

    const startCount = () => {
      const duration = 2000; // 2 seconds
      const startTime = performance.now();

      const updateCount = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out quad
        const ease = progress * (2 - progress);
        const currentVal = Math.floor(ease * target);

        setCount(currentVal);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateCount);
        } else {
          setCount(target);
        }
      };

      animationFrame = requestAnimationFrame(updateCount);
    };

    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCount();
          observer.disconnect(); // Count only once when visible
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [target]);

  // Format count (e.g. 2500 -> "2500" or we can keep it as is)
  const displayValue = count.toLocaleString() + suffix;

  return (
    <div ref={counterRef} className="flex flex-col items-center justify-center p-6 text-center border border-brand-cream/10 bg-brand-dark hover:border-brand-magenta/40 transition-colors duration-500 group neo-shadow-purple">
      <div className="font-display text-5xl md:text-7xl text-brand-magenta group-hover:scale-105 transition-transform duration-300">
        {displayValue}
      </div>
      <div className="mt-2 text-xs md:text-sm uppercase tracking-widest text-brand-cream/80 max-w-[180px] font-sans">
        {label}
      </div>
    </div>
  );
};

export default AnimatedCounter;
