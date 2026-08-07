import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ eyebrow, title, darkBg = false, align = 'left', supportingText }) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 max-w-4xl ${isCenter ? 'mx-auto text-center' : 'text-left'}`}>
      {/* Eyebrow */}
      <motion.span
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className={`inline-block font-sans text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-4 ${
          darkBg ? 'text-brand-teal' : 'text-brand-magenta'
        }`}
      >
        // {eyebrow}
      </motion.span>

      {/* Header title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-display text-4xl sm:text-5xl md:text-7xl leading-[0.9] tracking-tight ${
          darkBg ? 'text-brand-cream' : 'text-brand-purple'
        }`}
      >
        {title}
      </motion.h2>

      {/* Thin line spacer */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`h-[1px] my-6 ${darkBg ? 'bg-brand-cream/15' : 'bg-brand-textDark/15'}`}
      />

      {/* Optional supporting copy */}
      {supportingText && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`text-sm md:text-base max-w-2xl leading-relaxed ${
            darkBg ? 'text-brand-cream/70' : 'text-brand-textDark/80'
          } ${isCenter ? 'mx-auto' : ''}`}
        >
          {supportingText}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
