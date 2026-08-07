import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, ChevronLeft, ChevronRight, Play, ExternalLink } from 'lucide-react';

import {
  programsData,
  statisticsData,
  portfolioData,
  testimonialsData,
  careerPaths,
  industryPartners
} from '../data/siteData';

import SectionHeader from '../components/SectionHeader';
import AnimatedCounter from '../components/AnimatedCounter';
import Marquee from '../components/Marquee';

const Home = () => {
  // Testimonial slider state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  // Video modal simulation state
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="w-full">
      {/* ==================================================
          SECTION 1 — HERO
          LIGHT CREAM
          ================================================== */}
      <section className="min-h-[calc(100vh-84px)] md:min-h-[calc(100vh-96px)] flex flex-col justify-center bg-brand-cream relative overflow-hidden px-6 md:px-12 py-12">
        {/* New Wide Integrated Hero Image in Background (Desktop) */}
        <div className="absolute right-0 top-0 h-full w-[65%] pointer-events-none z-0 overflow-hidden hidden lg:block">
          <img
            src="/new-hero-image.png"
            alt="IIEM Event Live Production"
            className="w-full h-full object-cover object-right"
          />
          {/* Subtle Cream Gradient Overlay to blend the left side of the image */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, #F8F3EA 0%, rgba(248,243,234,0.95) 10%, rgba(248,243,234,0.70) 25%, rgba(248,243,234,0.30) 40%, transparent 58%)'
            }}
          />
          {/* Bottom blending gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, #F8F3EA 0%, rgba(248,243,234,0.5) 15%, transparent 35%)'
            }}
          />
        </div>

        {/* Background Details */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-brand-purple/10 pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-12 right-1/3 w-4 h-4 bg-brand-teal/30 rounded-full pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-start items-center lg:-mt-6">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10 lg:mt-0">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight uppercase"
            >
              <span className="block text-brand-purple">WHERE</span>
              <span className="block text-brand-magenta">PASSION PLANS.</span>
              <span className="block text-brand-purple">EXPERIENCES</span>
              <span className="block font-serif italic text-brand-teal lowercase tracking-normal font-light">
                transform.
              </span>
            </motion.h1>

            {/* Sub-intro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8"
            >
              <div className="font-sans font-bold text-xs uppercase tracking-widest text-brand-magenta mb-2">
                // Learn. Create. Execute.
              </div>
              <p className="font-sans text-brand-textDark text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
                Turn ideas into unforgettable experiences through hands-on learning, real events, and direct industry exposure at IIEM.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/programs"
                className="px-6 py-4 bg-brand-purple text-brand-cream hover:bg-brand-magenta transition-all duration-300 font-display text-lg tracking-wider flex items-center gap-2 neo-shadow"
              >
                EXPLORE PROGRAMS <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-4 border-2 border-brand-textDark text-brand-textDark hover:bg-brand-textDark hover:text-brand-cream transition-all duration-300 font-display text-lg tracking-wider neo-shadow"
              >
                BOOK A CAMPUS VISIT
              </Link>
            </motion.div>

            {/* Compact Benefits */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-brand-textDark/10 pt-8"
            >
              <div>
                <div className="font-display text-brand-purple text-base">Expert Faculty</div>
                <div className="text-xs text-brand-textDark/70 font-sans mt-1">Learn from lead curators.</div>
              </div>
              <div>
                <div className="font-display text-brand-magenta text-base">Hands-on Work</div>
                <div className="text-xs text-brand-textDark/70 font-sans mt-1">Live classroom model.</div>
              </div>
              <div>
                <div className="font-display text-brand-teal text-base">Real Projects</div>
                <div className="text-xs text-brand-textDark/70 font-sans mt-1">Backstage opportunities.</div>
              </div>
              <div>
                <div className="font-display text-brand-purple text-base">100% Placements</div>
                <div className="text-xs text-brand-textDark/70 font-sans mt-1">95% placement support.</div>
              </div>
            </motion.div>
          </div>

          {/* Right Image/Geometry Column */}
          <div className="lg:col-span-5 relative flex items-start justify-between gap-4 lg:mt-0 z-10 w-full">
            {/* Abstract Geometry Elements */}
            <div className="absolute -top-12 -left-6 w-32 h-32 bg-brand-purple/10 rounded-full blur-2xl z-0 pointer-events-none"></div>
            <div className="absolute right-0 bottom-4 w-40 h-40 bg-brand-magenta/5 rounded-full blur-2xl z-0 pointer-events-none"></div>

            {/* Mobile/Tablet image frame (hidden on desktop because the absolute background is used instead) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative flex-grow max-w-[360px] sm:max-w-[380px] aspect-[3/4] overflow-hidden z-10 lg:hidden"
            >
              <img
                src="/new-hero-image.png"
                alt="IIEM Event Live Production"
                className="w-full h-full object-cover object-right"
                style={{
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 5%, rgba(0,0,0,0.2) 12%, rgba(0,0,0,0.5) 22%, rgba(0,0,0,0.8) 32%, black 45%)',
                  maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 5%, rgba(0,0,0,0.2) 12%, rgba(0,0,0,0.5) 22%, rgba(0,0,0,0.8) 32%, black 45%)'
                }}
              />
              {/* Cream gradient overlays for mobile blending */}
              <div 
                className="absolute inset-y-0 left-0 w-1/2 pointer-events-none z-20"
                style={{
                  background: 'linear-gradient(90deg, #F8F3EA 0%, rgba(248,243,234,0.97) 15%, rgba(248,243,234,0.82) 35%, rgba(248,243,234,0.45) 60%, rgba(248,243,234,0) 100%)'
                }}
              />
              <div 
                className="absolute inset-x-0 bottom-0 h-1/4 pointer-events-none z-20"
                style={{
                  background: 'linear-gradient(to top, #F8F3EA 0%, rgba(248,243,234,0.8) 30%, rgba(248,243,234,0) 100%)'
                }}
              />
            </motion.div>

            {/* Brand Design Column next to the portrait - visible on both mobile & desktop */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-20 sm:w-24 md:w-28 shrink-0 h-[480px] lg:h-[500px] z-10 lg:ml-auto"
            >
              <img
                src="/design.png"
                alt="IIEM Brand Geometry Accent"
                className="w-full h-full object-cover object-left border border-brand-textDark/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 2 — ABOUT / BRAND STATEMENT
          LIGHT CREAM
          ================================================== */}
      <section className="bg-brand-cream px-6 md:px-12 py-24 border-t border-brand-textDark/10">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="ABOUT IIEM"
            title="MORE THAN A COURSE. IT’S A CAREER IN EXPERIENCES."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8 items-center">
            {/* Left Column supporting text & CTAs */}
            <div className="lg:col-span-6 space-y-6">
              <p className="font-sans text-brand-textDark/90 text-lg md:text-xl leading-relaxed font-light">
                At IIEM, students don't just learn how events are managed. They experience how ideas are transformed into live environments, audiences, and unforgettable moments.
              </p>
              <p className="font-sans text-brand-textDark/70 text-sm md:text-base leading-relaxed">
                By removing standard academic modules, we place our students in actual fabrication setups, brand briefing conferences, and soundcheck rigs. You will receive professional guidance from agency directors and build a career designed around speed, structure, and experiential execution.
              </p>

              <div className="flex flex-wrap gap-6 pt-4">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 font-display text-xl text-brand-purple hover:text-brand-magenta transition-colors"
                >
                  DISCOVER IIEM <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                </Link>
                <button
                  onClick={() => setVideoOpen(true)}
                  className="flex items-center gap-2 font-display text-xl text-brand-teal hover:text-brand-magenta transition-colors"
                >
                  <Play size={18} className="fill-brand-teal" /> WATCH OUR STORY
                </button>
              </div>
            </div>

            {/* Right Column collage */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {/* Large cropped image */}
                <div className="aspect-[3/4] overflow-hidden border border-brand-textDark/10 relative group bg-brand-purple/5">
                  <img
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80"
                    alt="Students coordinating wedding floral decor"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-purple/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                {/* Asymmetric offset image */}
                <div className="aspect-[3/4] overflow-hidden border border-brand-textDark/10 relative group bg-brand-purple/5 neo-shadow-magenta">
                  <img
                    src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80"
                    alt="Corporate briefing stage AV setup"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-magenta/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 3 — PROGRAMS
          DARK SECTION
          ================================================== */}
      <section className="bg-brand-dark text-brand-cream px-6 md:px-12 py-24">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="PROGRAMS"
            title="CHOOSE YOUR STAGE."
            darkBg={true}
            supportingText="Explore programs designed around the technical skills, logistics, and real-world execution demanded by the modern global events industry."
          />

          {/* Large Horizontal Rows Instead of Cards */}
          <div className="mt-12 border-t border-brand-cream/15">
            {programsData.map((prog, index) => (
              <Link
                key={prog.id}
                to={`/programs#${prog.id}`}
                className="group block border-b border-brand-cream/15 py-8 md:py-10 transition-all duration-500 hover:bg-brand-purple/15"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  {/* Number */}
                  <div className="md:col-span-1 font-display text-2xl text-brand-teal group-hover:text-brand-magenta transition-colors">
                    {prog.num}
                  </div>

                  {/* Program Title */}
                  <div className="md:col-span-5">
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-brand-cream group-hover:translate-x-3 transition-transform duration-300">
                      {prog.title}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <div className="md:col-span-5 font-sans text-xs md:text-sm text-brand-cream/70 group-hover:text-brand-cream transition-colors pr-4">
                    {prog.shortDesc}
                  </div>

                  {/* Arrow Indicator */}
                  <div className="md:col-span-1 flex justify-end">
                    <div className="w-10 h-10 border border-brand-cream/20 flex items-center justify-center group-hover:bg-brand-magenta group-hover:border-brand-magenta group-hover:text-white transition-all duration-300 rounded-none">
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/programs"
              className="px-6 py-4 bg-brand-purple hover:bg-brand-magenta text-brand-cream font-display text-lg tracking-wider inline-flex items-center gap-2 neo-shadow-teal"
            >
              VIEW ALL DETAILS <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 4 — LEARN BY DOING
          LIGHT SECTION
          ================================================== */}
      <section className="bg-brand-cream px-6 md:px-12 py-24 border-b border-brand-textDark/10">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="THE IIEM EXPERIENCE"
            title="THE CLASSROOM IS ONLY THE BEGINNING."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side checklist */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <h3 className="font-display text-2xl text-brand-purple mb-6 tracking-wide">
                WE BELIEVE IN ON-STAGE HOURS
              </h3>
              <p className="text-sm text-brand-textDark/80 font-sans mb-8 leading-relaxed">
                We believe that classroom models are insufficient for live event planning. Our curriculum focuses directly on these functional sectors:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Live Music & Concerts',
                  'Production Planning',
                  'Artist Coordination',
                  'Venue Operations',
                  'Brand Activations',
                  'Weddings & Galas',
                  'Exhibitions & Summits',
                  'Corporate launches',
                  'Backstage Operations'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 border-b border-brand-textDark/10 pb-2">
                    <Star size={12} className="text-brand-magenta fill-brand-magenta" />
                    <span className="font-display text-lg text-brand-textDark">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side event image with asymmetric design */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 border-2 border-brand-magenta translate-x-3 translate-y-3 pointer-events-none"></div>
                <div className="aspect-[16/10] overflow-hidden border border-brand-textDark/10 bg-brand-purple/5 relative">
                  <img
                    src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1000&q=80"
                    alt="Live event production panel with mixer"
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 bg-brand-purple text-brand-cream px-3 py-1 font-display text-xs tracking-wider">
                    PRODUCTION CONTROL DECK
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 5 — NUMBERS / PROOF
          DARK SECTION
          ================================================== */}
      <section className="bg-brand-dark text-brand-cream px-6 md:px-12 py-24 relative overflow-hidden">
        {/* Giant Backdrop Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
          <div className="font-display text-[15rem] leading-none text-center font-bold">
            IIEM SYSTEM
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <SectionHeader
            eyebrow="IIEM AT A GLANCE"
            title="THE NUMBERS SPEAK FOR US."
            darkBg={true}
          />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">
            {statisticsData.map((stat, idx) => (
              <AnimatedCounter
                key={idx}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>

          {/* Horizontal Text banner */}
          <div className="mt-20 py-8 border-t border-b border-brand-cream/15 text-center overflow-hidden">
            <div className="font-display text-3xl sm:text-5xl tracking-widest text-brand-teal flex justify-center items-center gap-6 flex-wrap leading-none uppercase">
              <span>REAL LEARNING</span>
              <span className="text-brand-magenta">•</span>
              <span>REAL EVENTS</span>
              <span className="text-brand-magenta">•</span>
              <span>REAL EXPERIENCE</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 6 — PORTFOLIO / SHOWCASE
          LIGHT SECTION
          ================================================== */}
      <section className="bg-brand-cream px-6 md:px-12 py-24">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="STUDENT WORK"
            title="FROM IDEA TO EXPERIENCE."
          />

          {/* Creative Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
            {/* Featured Project (Left 7-column span) */}
            {portfolioData.slice(0, 1).map((project) => (
              <div key={project.id} className="lg:col-span-7 flex flex-col group">
                <div className="aspect-[16/10] overflow-hidden border border-brand-textDark/15 bg-brand-purple/5 relative neo-shadow">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-750 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-brand-purple text-brand-cream font-display px-3 py-1 text-xs tracking-wider">
                    {project.num}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-brand-teal text-brand-cream font-sans font-semibold text-[10px] uppercase px-3 py-1 tracking-widest">
                    {project.category}
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <h3 className="font-display text-3xl text-brand-purple group-hover:text-brand-magenta transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-brand-textDark/60 font-sans mt-1">
                      <strong>Role: </strong>{project.role}
                    </p>
                  </div>
                  <Link
                    to="/portfolio"
                    className="w-10 h-10 border border-brand-textDark/15 flex items-center justify-center hover:bg-brand-purple hover:text-white transition-colors"
                  >
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}

            {/* Side Column Stack (Right 5-column span, 2 projects stacked) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-8">
              {portfolioData.slice(1, 3).map((project) => (
                <div key={project.id} className="flex gap-4 items-center group">
                  <div className="w-1/3 aspect-square overflow-hidden border border-brand-textDark/15 bg-brand-purple/5 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="w-2/3">
                    <span className="text-[10px] text-brand-magenta uppercase font-sans tracking-widest font-semibold block mb-1">
                      {project.category}
                    </span>
                    <h4 className="font-display text-xl text-brand-purple group-hover:text-brand-magenta transition-colors line-clamp-1">
                      {project.title}
                    </h4>
                    <p className="text-xs text-brand-textDark/70 mt-1 line-clamp-2">
                      {project.description}
                    </p>
                    <Link
                      to="/portfolio"
                      className="inline-flex items-center gap-1 font-display text-xs text-brand-teal hover:text-brand-magenta mt-2 uppercase transition-colors"
                    >
                      VIEW ARCHIVE <ArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View All projects */}
          <div className="mt-16 text-center">
            <Link
              to="/portfolio"
              className="px-6 py-4 bg-brand-purple hover:bg-brand-magenta text-brand-cream font-display text-lg tracking-wider inline-flex items-center gap-2 neo-shadow"
            >
              VIEW ALL PROJECTS <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 7 — INDUSTRY CONNECT
          DARK SECTION
          ================================================== */}
      <section className="bg-brand-dark text-brand-cream px-6 md:px-12 py-24">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="INDUSTRY CONNECT"
            title="LEARN FROM THE PEOPLE WHO RUN THE SHOW."
            darkBg={true}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-brand-cream/80 font-sans leading-relaxed">
                Our classes are run by guest mentors, agency founders, and production veterans. Students learn the business directly from active planners, working at agencies, venues, and festival networks.
              </p>
              <p className="text-brand-cream/60 text-xs font-sans">
                Weekly masterclasses cover subjects like destination bidding, artist contract negotiations, AV staging plans, and hybrid event technology architectures.
              </p>
              <div className="pt-4">
                <Link
                  to="/industry-connect"
                  className="px-5 py-3 border border-brand-cream/25 hover:border-brand-magenta text-brand-cream hover:bg-brand-magenta transition-all duration-300 font-display text-base tracking-wider inline-block"
                >
                  MEET OUR MENTORS →
                </Link>
              </div>
            </div>

            {/* Right marquee ticker */}
            <div className="lg:col-span-7">
              <div className="border border-brand-cream/15 p-4 bg-brand-purple/5">
                <div className="text-center font-display text-xs text-brand-teal tracking-[0.2em] mb-4 uppercase">
                  ACTIVE AGENCY PARTNER NETWORK
                </div>
                <Marquee items={industryPartners} reverse={false} speed="normal" />
                <Marquee items={industryPartners.reverse()} reverse={true} speed="slow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 8 — PLACEMENTS & CAREERS
          LIGHT / MAGENTA ACCENT
          ================================================== */}
      <section className="bg-brand-cream px-6 md:px-12 py-24 border-t border-brand-textDark/10 relative overflow-hidden">
        {/* Color accents */}
        <div className="absolute top-0 right-0 w-24 h-full bg-brand-magenta/5 border-l border-brand-magenta/10 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <SectionHeader
            eyebrow="YOUR FUTURE"
            title="DON’T JUST ATTEND EVENTS. BUILD THEM."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Intro and CTA */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <p className="text-brand-textDark/85 font-sans leading-relaxed text-sm md:text-base">
                  The event industry requires active specialization. At IIEM, we prepare students for distinct pathways, ensuring they enter the market with a portfolio that aligns with agency needs.
                </p>
              </div>
              <div className="pt-8 lg:pt-0">
                <Link
                  to="/placements"
                  className="px-6 py-4 bg-brand-magenta text-white hover:bg-brand-purple transition-all duration-300 font-display text-lg tracking-wider inline-flex items-center gap-2 neo-shadow-purple"
                >
                  EXPLORE CAREERS <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Career lists */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {careerPaths.slice(0, 6).map((path, idx) => (
                <div key={idx} className="p-6 border border-brand-textDark/15 bg-brand-cream hover:border-brand-magenta hover:bg-brand-purple/5 transition-all duration-300">
                  <div className="font-display text-2xl text-brand-purple mb-2">
                    {path.title}
                  </div>
                  <div className="text-xs text-brand-textDark/70 font-sans">
                    {path.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 9 — CAMPUS LIFE
          LIGHT SECTION
          ================================================== */}
      <section className="bg-brand-cream px-6 md:px-12 py-24 border-t border-brand-textDark/10">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="CAMPUS LIFE"
            title="CREATE. COLLABORATE. CELEBRATE."
          />

          {/* Dynamic grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="aspect-[4/3] overflow-hidden border border-brand-textDark/15 relative group bg-brand-purple/5">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
                alt="Students brainstorming layouts"
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-brand-purple text-brand-cream px-3 py-1 font-display text-xs">
                BRAINSTORMING & CONCEPTS
              </div>
            </div>
            <div className="aspect-[4/3] overflow-hidden border border-brand-textDark/15 relative group bg-brand-purple/5 mt-0 sm:mt-6 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=600&q=80"
                alt="Students preparing decor layouts"
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-brand-magenta text-white px-3 py-1 font-display text-xs">
                PRODUCTION FABRICATION
              </div>
            </div>
            <div className="aspect-[4/3] overflow-hidden border border-brand-textDark/15 relative group bg-brand-purple/5 mt-0 lg:mt-12 neo-shadow">
              <img
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80"
                alt="Rehearsals stage design"
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-brand-teal text-brand-cream px-3 py-1 font-display text-xs">
                BACKSTAGE & SOUNDCHECKS
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/campus-life"
              className="px-6 py-4 border-2 border-brand-textDark text-brand-textDark hover:bg-brand-purple hover:text-white hover:border-brand-purple transition-all duration-300 font-display text-lg tracking-wider inline-block neo-shadow"
            >
              EXPLORE CAMPUS LIFE →
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 10 — TESTIMONIALS
          DARK SECTION
          ================================================== */}
      <section className="bg-brand-dark text-brand-cream px-6 md:px-12 py-24 relative">
        <div className="max-w-[1000px] mx-auto relative z-10">
          <div className="text-center font-sans text-xs font-bold tracking-[0.25em] text-brand-teal mb-8">
            // STUDENT VOICES
          </div>

          {/* Testimonial Quote slider */}
          <div className="min-h-[300px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Big quote */}
                <blockquote className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-brand-cream text-center">
                  “{testimonialsData[currentTestimonial].quote}”
                </blockquote>

                {/* Profile detail */}
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border border-brand-teal bg-brand-purple/10">
                    <img
                      src={testimonialsData[currentTestimonial].image}
                      alt={testimonialsData[currentTestimonial].studentName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <div className="font-display text-xl text-brand-magenta">
                      {testimonialsData[currentTestimonial].studentName}
                    </div>
                    <div className="text-xs text-brand-cream/60 font-sans mt-0.5">
                      {testimonialsData[currentTestimonial].program} | {testimonialsData[currentTestimonial].batch}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider navigation controls */}
            <div className="flex justify-center items-center gap-6 mt-12">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 border border-brand-cream/15 flex items-center justify-center hover:bg-brand-purple hover:border-brand-purple transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="font-display text-lg text-brand-teal">
                {currentTestimonial + 1} / {testimonialsData.length}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 border border-brand-cream/15 flex items-center justify-center hover:bg-brand-purple hover:border-brand-purple transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 11 — ADMISSIONS CTA
          MAGENTA / PURPLE
          ================================================== */}
      <section className="bg-brand-purple text-brand-cream py-20 px-6 md:px-12 relative overflow-hidden">
        {/* Geometric Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-magenta pointer-events-none transform skew-x-12 translate-x-1/3"></div>

        <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.9] tracking-tight text-white mb-6">
              YOUR FIRST BIG EVENT?<br />
              <span className="text-brand-teal">YOUR CAREER.</span>
            </h2>
            <p className="font-sans text-brand-cream/80 text-sm sm:text-base leading-relaxed">
              Take the first step toward a career built around creativity, leadership, and unforgettable live environments. Admissions are now open for the next cohort.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0 justify-center">
            <Link
              to="/admissions"
              className="px-8 py-5 bg-brand-dark text-brand-cream hover:bg-brand-magenta transition-all duration-300 font-display text-xl tracking-wider text-center neo-shadow-teal"
            >
              APPLY NOW →
            </Link>
            <Link
              to="/contact"
              className="px-8 py-5 border-2 border-white text-white hover:bg-white hover:text-brand-purple transition-all duration-300 font-display text-xl tracking-wider text-center"
            >
              DOWNLOAD PROSPECTUS
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================
          VIDEO MODAL BACKDROP (SIMULATION)
          ================================================== */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-full h-full bg-brand-dark/95 z-50 flex items-center justify-center p-6"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="w-full max-w-4xl aspect-video bg-black border border-brand-cream/10 relative flex flex-col justify-center items-center text-center p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute top-4 right-4 text-brand-cream hover:text-brand-magenta transition-colors font-display text-lg"
              >
                CLOSE [X]
              </button>
              <Play size={64} className="text-brand-magenta mb-4 animate-pulse" />
              <h3 className="font-display text-3xl text-brand-cream mb-2">IIEM ACADEMY DOCUMENTARY</h3>
              <p className="font-sans text-brand-cream/70 text-sm max-w-md">
                This is a simulation placeholder representing the high-impact promotional video showing live festival production, backstage student diaries, and faculty pitches.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
