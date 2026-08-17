import React, { useEffect, useState, useRef } from 'react';

const AnimatedCounter = ({ value, label, lightMode = false }) => {
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
        if (entries[0] && entries[0].isIntersecting) {
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
    <div 
      ref={counterRef} 
      className={`flex flex-col items-center justify-center p-6 md:p-8 text-center rounded-xl transition-all duration-300 ${
        lightMode 
          ? 'bg-white border border-brand-border shadow-card hover:shadow-card-hover' 
          : 'bg-white/5 border border-white/10 hover:border-white/20 shadow-subtle'
      }`}
    >
      <div className={`font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-2 ${
        lightMode ? 'text-brand-purple' : 'text-brand-tealLight'
      }`}>
        {displayValue}
      </div>
      <div className={`text-xs sm:text-sm font-semibold uppercase tracking-wider font-sans max-w-[200px] leading-snug ${
        lightMode ? 'text-brand-textMuted' : 'text-brand-cream/70'
      }`}>
        {label}
      </div>
    </div>
  );
};

export default AnimatedCounter;

