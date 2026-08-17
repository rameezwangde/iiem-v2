import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ eyebrow, title, darkBg = false, align = 'left', supportingText }) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 md:mb-14 max-w-4xl ${isCenter ? 'mx-auto text-center' : 'text-left'}`}>
      {/* Eyebrow Pill */}
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className={`mb-3.5 ${isCenter ? 'flex justify-center' : ''}`}
        >
          <span
            className={`badge-pill text-[11px] font-bold tracking-wider ${
              darkBg 
                ? 'bg-brand-teal/20 text-brand-teal border border-brand-teal/30' 
                : 'bg-brand-purpleMuted text-brand-purple border border-brand-purple/20'
            }`}
          >
            {eyebrow}
          </span>
        </motion.div>
      )}

      {/* Header title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] uppercase ${
          darkBg ? 'text-white' : 'text-brand-purple'
        }`}
      >
        {title}
      </motion.h2>

      {/* Subtle line spacer */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: isCenter ? '80px' : '60px' }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className={`h-[3px] rounded-full my-4 ${isCenter ? 'mx-auto' : ''} ${
          darkBg ? 'bg-brand-teal' : 'bg-brand-magenta'
        }`}
      />

      {/* Optional supporting copy */}
      {supportingText && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-sm sm:text-base max-w-2xl leading-relaxed font-sans ${
            darkBg ? 'text-brand-cream/80' : 'text-brand-textMuted'
          } ${isCenter ? 'mx-auto' : ''}`}
        >
          {supportingText}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;

