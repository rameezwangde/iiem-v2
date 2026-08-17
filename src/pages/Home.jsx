import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, ChevronLeft, ChevronRight, Play, CheckCircle2, GraduationCap, Award, Users, Calendar, Sparkles } from 'lucide-react';

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
    <div className="w-full bg-brand-cream">
      {/* ==================================================
      SECTION 1 — HERO (Clean Light Theme)
      ================================================== */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-brand-cream overflow-hidden px-6 md:px-12 py-16 lg:py-24 border-b border-brand-border">
        {/* Soft Background Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#4A0A45_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Institution Pill Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 mb-6"
              >
                <span className="badge-pill bg-brand-purpleMuted text-brand-purple border border-brand-purple/20 text-xs font-bold py-1 px-3.5 shadow-subtle">
                  // Learn. Create. Execute.
                </span>
                <span className="text-brand-textMuted text-xs uppercase tracking-wider font-bold hidden sm:inline-block">
                  India Institute of Event Management
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight uppercase text-brand-purple"
              >
                WHERE PASSION PLANS.<br />
                EXPERIENCES TRANSFORM.
              </motion.h1>

              {/* Sub-intro */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-sans text-brand-textMuted text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mt-6"
              >
                Turn ideas into unforgettable experiences through hands-on learning, real events, and direct industry exposure at IIEM.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-8 flex flex-wrap gap-4 items-center"
              >
                <Link
                  to="/programs"
                  className="px-7 py-3.5 bg-brand-purple hover:bg-brand-purpleLight text-white rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-card flex items-center gap-2 group"
                >
                  EXPLORE PROGRAMS <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="px-7 py-3.5 bg-white hover:bg-brand-stone text-brand-purple border border-brand-border rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-subtle"
                >
                  BOOK A CAMPUS VISIT
                </Link>
              </motion.div>

              {/* Institutional Benefits Strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 border-t border-brand-border pt-8"
              >
                <div className="bg-white border border-brand-border p-4 rounded-xl shadow-subtle">
                  <div className="font-display font-bold text-brand-purple text-base">Expert Faculty</div>
                  <div className="text-xs text-brand-textMuted font-sans mt-1">Learn from lead curators.</div>
                </div>
                <div className="bg-white border border-brand-border p-4 rounded-xl shadow-subtle">
                  <div className="font-display font-bold text-brand-purple text-base">Hands-on Work</div>
                  <div className="text-xs text-brand-textMuted font-sans mt-1">Live classroom model.</div>
                </div>
                <div className="bg-white border border-brand-border p-4 rounded-xl shadow-subtle">
                  <div className="font-display font-bold text-brand-purple text-base">Real Projects</div>
                  <div className="text-xs text-brand-textMuted font-sans mt-1">Backstage opportunities.</div>
                </div>
                <div className="bg-white border border-brand-border p-4 rounded-xl shadow-subtle">
                  <div className="font-display font-bold text-brand-teal text-base">100% Placements</div>
                  <div className="text-xs text-brand-textMuted font-sans mt-1">95% placement support.</div>
                </div>
              </motion.div>
            </div>

            {/* Right Admissions Quick Visual Card */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="academic-card p-3 shadow-card"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-brand-stone">
                  <img
                    src="/images/hero_students_formal.png"
                    alt="IIEM Students at Campus in Formals"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-3 left-3 bg-brand-purple/90 backdrop-blur-sm text-white px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider">
                    IIEM Student Cohort
                  </div>
                </div>

                <div className="p-4 bg-brand-cream/60 rounded-xl border border-brand-border">
                  <div className="flex items-center gap-2 mb-2 text-brand-purple">
                    <GraduationCap size={18} />
                    <span className="text-xs font-bold uppercase tracking-wider">Admissions Open 2026</span>
                  </div>
                  <p className="text-xs text-brand-textMuted leading-relaxed font-sans mb-4">
                    Join certified professional diploma and fast-track programs in Weddings, Corporate, Live Entertainment, and Production.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                    <div className="bg-white p-2.5 rounded-lg border border-brand-border">
                      <span className="text-[10px] text-brand-textMuted uppercase block">Practical Ratio</span>
                      <span className="font-bold text-brand-teal">80% Hands-on</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-brand-border">
                      <span className="text-[10px] text-brand-textMuted uppercase block">Eligibility</span>
                      <span className="font-bold text-brand-purple">10+2 / Graduates</span>
                    </div>
                  </div>

                  <Link
                    to="/admissions"
                    className="w-full text-center block px-4 py-2.5 bg-brand-purple hover:bg-brand-purpleLight text-white rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Apply Now For Next Batch →
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
      SECTION 2 — ABOUT / BRAND STATEMENT
      ================================================== */}
      <section className="bg-white px-6 md:px-12 py-20 lg:py-28 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="ABOUT IIEM"
            title="MORE THAN A COURSE. IT’S A CAREER IN EXPERIENCES."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8 items-center">
            {/* Left Column supporting text & CTAs */}
            <div className="lg:col-span-6 space-y-6">
              <p className="font-sans text-brand-textDark text-lg md:text-xl leading-relaxed font-medium">
                At IIEM, students don't just learn how events are managed. They experience how ideas are transformed into live environments, audiences, and unforgettable moments.
              </p>
              <p className="font-sans text-brand-textMuted text-sm md:text-base leading-relaxed">
                By removing standard academic modules, we place our students in actual fabrication setups, brand briefing conferences, and soundcheck rigs. You will receive professional guidance from agency directors and build a career designed around speed, structure, and experiential execution.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/about"
                  className="px-6 py-3 bg-brand-purple hover:bg-brand-purpleLight text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 group shadow-sm"
                >
                  DISCOVER IIEM <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  onClick={() => setVideoOpen(true)}
                  className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-brand-purple hover:text-brand-magenta transition-colors py-3 px-4 rounded-xl border border-brand-border bg-brand-cream/60"
                >
                  <Play size={14} className="fill-brand-purple text-brand-purple" /> WATCH OUR STORY
                </button>
              </div>
            </div>

            {/* Right Column collage */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-brand-border bg-brand-stone shadow-sm group">
                  <img
                    src="/images/about_fabrication_setup.png"
                    alt="Students working on fabrication setup"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8 sm:pt-12">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-brand-border bg-brand-stone shadow-card group">
                  <img
                    src="/images/about_soundcheck.png"
                    alt="Student operating soundcheck rig"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
      SECTION 2.5 — SPECIALIZED TRAINING
      ================================================== */}
      <section className="bg-brand-cream px-6 md:px-12 py-20 lg:py-28 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="SPECIALIZED TRAINING"
            title="MASTER YOUR NICHE."
            supportingText="Targeted executive and creative modules crafted to develop specific operational skills demanded by top agencies."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-12">
            {/* Item 1 */}
            <div className="academic-card p-6 flex flex-col items-start bg-white">
              <div className="badge-pill bg-brand-purpleMuted text-brand-purple text-[10px] mb-4">
                Corporate & Social Events
              </div>
              <h3 className="font-display font-bold text-xl text-brand-purple mb-3 leading-snug">
                Event Management Masterclass
              </h3>
              <p className="font-sans text-brand-textMuted text-xs mb-8 leading-relaxed">
                Hands-on Execution, Strategic Theory
              </p>
              <Link 
                to="/course-details" 
                className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-purple hover:text-brand-magenta transition-colors"
              >
                VIEW DETAILS <ArrowRight size={13} />
              </Link>
            </div>
            
            {/* Item 2 */}
            <div className="academic-card p-6 flex flex-col items-start bg-white">
              <div className="badge-pill bg-brand-purpleMuted text-brand-purple text-[10px] mb-4">
                Commercial & Private
              </div>
              <h3 className="font-display font-bold text-xl text-brand-purple mb-3 leading-snug">
                Balloon Artistry & Styling
              </h3>
              <p className="font-sans text-brand-textMuted text-xs mb-8 leading-relaxed">
                Creative Workshops, Design Principles
              </p>
              <Link 
                to="/course-details" 
                className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-purple hover:text-brand-magenta transition-colors"
              >
                VIEW DETAILS <ArrowRight size={13} />
              </Link>
            </div>

            {/* Item 3 */}
            <div className="academic-card p-6 flex flex-col items-start bg-white">
              <div className="badge-pill bg-brand-purpleMuted text-brand-purple text-[10px] mb-4">
                B2B & Luxury Social
              </div>
              <h3 className="font-display font-bold text-xl text-brand-purple mb-3 leading-snug">
                Floral Architecture & Decor
              </h3>
              <p className="font-sans text-brand-textMuted text-xs mb-8 leading-relaxed">
                Practical Installations, Floral Theory
              </p>
              <Link 
                to="/course-details" 
                className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-purple hover:text-brand-magenta transition-colors"
              >
                VIEW DETAILS <ArrowRight size={13} />
              </Link>
            </div>

            {/* Item 4 */}
            <div className="academic-card p-6 flex flex-col items-start bg-white">
              <div className="badge-pill bg-brand-purpleMuted text-brand-purple text-[10px] mb-4">
                Corporate Bookings
              </div>
              <h3 className="font-display font-bold text-xl text-brand-purple mb-3 leading-snug">
                Venue Sourcing & Management
              </h3>
              <p className="font-sans text-brand-textMuted text-xs mb-8 leading-relaxed">
                Site Logistics, Contract Negotiation
              </p>
              <Link 
                to="/course-details" 
                className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-purple hover:text-brand-magenta transition-colors"
              >
                VIEW DETAILS <ArrowRight size={13} />
              </Link>
            </div>

            {/* Item 5 */}
            <div className="academic-card p-6 flex flex-col items-start bg-white">
              <div className="badge-pill bg-brand-purpleMuted text-brand-purple text-[10px] mb-4">
                Public & Consumer
              </div>
              <h3 className="font-display font-bold text-xl text-brand-purple mb-3 leading-snug">
                B2C Event Production
              </h3>
              <p className="font-sans text-brand-textMuted text-xs mb-8 leading-relaxed">
                Festival Planning, Brand Activations
              </p>
              <Link 
                to="/course-details" 
                className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-purple hover:text-brand-magenta transition-colors"
              >
                VIEW DETAILS <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
      SECTION 3 — PROGRAMS (Light Theme)
      ================================================== */}
      <section className="bg-white px-6 md:px-12 py-20 lg:py-28 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="PROGRAMS"
            title="CHOOSE YOUR STAGE."
            supportingText="Explore programs designed around the technical skills, logistics, and real-world execution demanded by the modern global events industry."
          />

          {/* Structured Program Rows */}
          <div className="mt-12 border-t border-brand-border divide-y divide-brand-border">
            {programsData.map((prog) => (
              <Link
                key={prog.id}
                to={`/programs#${prog.id}`}
                className="group block py-6 sm:py-7 transition-all duration-300 hover:bg-brand-cream/60 px-4 rounded-xl -mx-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  {/* Number */}
                  <div className="md:col-span-1 font-mono font-bold text-base text-brand-teal group-hover:text-brand-purple transition-colors">
                    {prog.num}
                  </div>

                  {/* Program Title */}
                  <div className="md:col-span-5">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-purple group-hover:text-brand-magenta transition-colors duration-200">
                      {prog.title}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <div className="md:col-span-5 font-sans text-xs sm:text-sm text-brand-textMuted group-hover:text-brand-textDark transition-colors pr-4">
                    {prog.shortDesc}
                  </div>

                  {/* Arrow Indicator */}
                  <div className="md:col-span-1 flex justify-start md:justify-end">
                    <div className="w-9 h-9 rounded-full border border-brand-border bg-white flex items-center justify-center group-hover:bg-brand-purple group-hover:border-brand-purple text-brand-purple group-hover:text-white transition-all duration-200 shadow-subtle">
                      <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/programs"
              className="px-8 py-3.5 bg-brand-purple hover:bg-brand-purpleLight text-white font-bold text-xs tracking-wider uppercase rounded-xl inline-flex items-center gap-2 shadow-card transition-colors"
            >
              VIEW ALL DETAILS <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================
      SECTION 4 — LEARN BY DOING
      ================================================== */}
      <section className="bg-brand-cream px-6 md:px-12 py-20 lg:py-28 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="THE IIEM EXPERIENCE"
            title="THE CLASSROOM IS ONLY THE BEGINNING."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side checklist */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <h3 className="font-display font-bold text-2xl text-brand-purple mb-4 tracking-tight">
                WE BELIEVE IN ON-STAGE HOURS
              </h3>
              <p className="text-sm text-brand-textMuted font-sans mb-8 leading-relaxed">
                We believe that classroom models are insufficient for live event planning. Our curriculum focuses directly on these functional sectors:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                  <div key={idx} className="flex items-center gap-2.5 bg-white p-3 rounded-lg border border-brand-border shadow-subtle">
                    <CheckCircle2 size={16} className="text-brand-teal shrink-0" />
                    <span className="font-bold text-xs text-brand-textDark font-sans">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side event image */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden border border-brand-border bg-white shadow-card">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1000&q=80"
                    alt="Live event production panel with mixer"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-4 left-4 bg-brand-purple/90 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-lg font-bold text-[11px] uppercase tracking-wider">
                  PRODUCTION CONTROL DECK
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
      SECTION 4.5 — POPULAR COURSES
      ================================================== */}
      <section className="bg-white px-6 md:px-12 py-20 lg:py-28 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="STUDENT FAVORITES"
            title="POPULAR COURSES"
            supportingText="Essential skill-oriented modules that students frequently take to accelerate on-ground careers."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                title: "Event Props Rent & Production",
                img: "/images/course_props_production.png"
              },
              {
                title: "Marketing",
                img: "/images/course_marketing.png"
              },
              {
                title: "Vendor Management",
                img: "/images/course_vendor_management.png"
              },
              {
                title: "Event B2B Business",
                img: "/images/course_b2b_business.png"
              }
            ].map((course, idx) => (
              <div key={idx} className="academic-card overflow-hidden group bg-white">
                <div className="h-48 overflow-hidden relative bg-brand-stone">
                  <img 
                    src={course.img} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-5 text-center">
                  <h4 className="font-display font-bold text-base text-brand-purple">{course.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
      SECTION 4.6 — WHY CHOOSE US
      ================================================== */}
      <section className="bg-brand-cream px-6 md:px-12 py-20 lg:py-28 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <SectionHeader
              eyebrow="INSTITUTIONAL TRUST"
              title="WHY CHOOSE US"
              supportingText="A benchmark approach to experiential education founded upon real industry metrics."
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-xl border border-brand-border shadow-subtle text-center">
                <div className="font-display font-black text-4xl sm:text-5xl text-brand-purple mb-2">100%</div>
                <div className="font-sans text-xs font-bold text-brand-textMuted uppercase tracking-wider">Placement Support</div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-brand-border shadow-subtle text-center">
                <div className="font-display font-black text-4xl sm:text-5xl text-brand-purple mb-2">100%</div>
                <div className="font-sans text-xs font-bold text-brand-textMuted uppercase tracking-wider">Practical Training</div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-brand-border shadow-subtle text-center">
                <div className="font-display font-black text-4xl sm:text-5xl text-brand-purple mb-2">100%</div>
                <div className="font-sans text-xs font-bold text-brand-textMuted uppercase tracking-wider">Industry Mentors</div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-white border border-brand-border p-8 rounded-2xl text-center shadow-card">
              <h3 className="font-display font-bold text-xl text-brand-purple mb-3">
                Questions about studying with us?
              </h3>
              <p className="font-sans text-xs sm:text-sm text-brand-textMuted mb-6 leading-relaxed">
                We have a team of student advisers & officers to answer any questions:
              </p>
              <Link 
                to="/contact" 
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-brand-purple hover:bg-brand-purpleLight text-white font-bold text-xs tracking-wider uppercase rounded-xl transition-colors"
              >
                Click here →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
      SECTION 5 — NUMBERS / PROOF (Light Theme)
      ================================================== */}
      <section className="bg-white px-6 md:px-12 py-20 lg:py-28 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <SectionHeader
            eyebrow="IIEM AT A GLANCE"
            title="THE NUMBERS SPEAK FOR US."
            supportingText="Proven academic and field outcomes across our certified event management cohorts."
          />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 mt-12">
            {statisticsData.map((stat, idx) => (
              <AnimatedCounter
                key={idx}
                value={stat.value}
                label={stat.label}
                lightMode={true}
              />
            ))}
          </div>

          {/* Horizontal Text Banner */}
          <div className="mt-16 py-6 border-t border-b border-brand-border text-center overflow-hidden bg-brand-cream/50 rounded-xl">
            <div className="font-display font-bold text-xl sm:text-3xl tracking-widest text-brand-purple flex justify-center items-center gap-6 flex-wrap leading-none uppercase">
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
      ================================================== */}
      <section className="bg-brand-cream px-6 md:px-12 py-20 lg:py-28 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="STUDENT WORK"
            title="FROM IDEA TO EXPERIENCE."
            supportingText="Glimpses of real-world high-profile live events, concerts, and exhibitions executed with IIEM student crew participation."
          />

          {/* Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
            {/* Featured Project */}
            {portfolioData.slice(0, 1).map((project) => (
              <div key={project.id} className="lg:col-span-7 flex flex-col group">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-brand-border bg-white shadow-card relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-brand-purple/90 backdrop-blur-sm text-white font-mono text-xs px-3 py-1 rounded-md font-bold">
                    {project.num}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-brand-teal text-white font-sans font-bold text-[11px] uppercase px-3 py-1 rounded-md tracking-wider">
                    {project.category}
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-brand-purple group-hover:text-brand-magenta transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-brand-textMuted font-sans mt-1.5">
                      <strong>Role: </strong>{project.role}
                    </p>
                  </div>
                  <Link
                    to="/portfolio"
                    className="w-10 h-10 rounded-xl border border-brand-border bg-white flex items-center justify-center text-brand-purple hover:bg-brand-purple hover:text-white transition-colors shrink-0 ml-4 shadow-sm"
                  >
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}

            {/* Side Column Stack */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-6">
              {portfolioData.slice(1, 3).map((project) => (
                <div key={project.id} className="academic-card p-4 flex gap-4 items-center group bg-white">
                  <div className="w-1/3 aspect-square overflow-hidden rounded-xl bg-brand-stone relative shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="w-2/3">
                    <span className="badge-pill bg-brand-purpleMuted text-brand-purple text-[10px] mb-1.5">
                      {project.category}
                    </span>
                    <h4 className="font-display font-bold text-lg text-brand-purple group-hover:text-brand-magenta transition-colors line-clamp-1">
                      {project.title}
                    </h4>
                    <p className="text-xs text-brand-textMuted mt-1 line-clamp-2">
                      {project.description}
                    </p>
                    <Link
                      to="/portfolio"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-teal hover:text-brand-magenta mt-2.5 uppercase transition-colors"
                    >
                      VIEW ARCHIVE <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="px-8 py-3.5 bg-brand-purple hover:bg-brand-purpleLight text-white font-bold text-xs tracking-wider uppercase rounded-xl inline-flex items-center gap-2 shadow-card transition-colors"
            >
              VIEW ALL PROJECTS <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================
      SECTION 7 — INDUSTRY CONNECT (Light Theme)
      ================================================== */}
      <section className="bg-white px-6 md:px-12 py-20 lg:py-28 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="INDUSTRY CONNECT"
            title="LEARN FROM THE PEOPLE WHO RUN THE SHOW."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-brand-textDark font-sans leading-relaxed text-sm md:text-base">
                Our classes are run by guest mentors, agency founders, and production veterans. Students learn the business directly from active planners, working at agencies, venues, and festival networks.
              </p>
              <p className="text-brand-textMuted text-xs font-sans leading-relaxed">
                Weekly masterclasses cover subjects like destination bidding, artist contract negotiations, AV staging plans, and hybrid event technology architectures.
              </p>
              <div className="pt-2">
                <Link
                  to="/industry-connect"
                  className="px-6 py-3 bg-brand-purple hover:bg-brand-purpleLight text-white rounded-xl font-bold text-xs tracking-wider uppercase transition-colors inline-block shadow-sm"
                >
                  MEET OUR MENTORS →
                </Link>
              </div>
            </div>

            {/* Right marquee ticker */}
            <div className="lg:col-span-7">
              <div className="border border-brand-border p-6 rounded-2xl bg-brand-cream/60 shadow-subtle">
                <div className="text-center text-xs font-bold text-brand-purple tracking-wider mb-4 uppercase">
                  ACTIVE AGENCY PARTNER NETWORK
                </div>
                <Marquee items={industryPartners} reverse={false} />
                <div className="mt-2">
                  <Marquee items={[...industryPartners].reverse()} reverse={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
      SECTION 8 — PLACEMENTS & CAREERS
      ================================================== */}
      <section className="bg-brand-cream px-6 md:px-12 py-20 lg:py-28 border-b border-brand-border relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <SectionHeader
            eyebrow="YOUR FUTURE"
            title="DON’T JUST ATTEND EVENTS. BUILD THEM."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Intro and CTA */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <p className="text-brand-textDark font-sans leading-relaxed text-sm md:text-base">
                  The event industry requires active specialization. At IIEM, we prepare students for distinct pathways, ensuring they enter the market with a portfolio that aligns with agency needs.
                </p>
              </div>
              <div className="pt-6 lg:pt-0">
                <Link
                  to="/placements"
                  className="px-7 py-3.5 bg-brand-purple hover:bg-brand-purpleLight text-white rounded-xl font-bold text-xs tracking-wider uppercase inline-flex items-center gap-2 shadow-card transition-colors"
                >
                  EXPLORE CAREERS <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Career lists */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {careerPaths.slice(0, 6).map((path, idx) => (
                <div key={idx} className="academic-card p-5 bg-white">
                  <div className="font-display font-bold text-lg text-brand-purple mb-1.5">
                    {path.title}
                  </div>
                  <div className="text-xs text-brand-textMuted font-sans leading-relaxed">
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
      ================================================== */}
      <section className="bg-white px-6 md:px-12 py-20 lg:py-28 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="CAMPUS LIFE"
            title="CREATE. COLLABORATE. CELEBRATE."
            supportingText="A dynamic creative ecosystem designed for aspiring event planners and producers."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="academic-card overflow-hidden group bg-white">
              <div className="aspect-[4/3] overflow-hidden relative bg-brand-stone">
                <img
                  src="/images/campus_brainstorming.png"
                  alt="Students brainstorming layouts"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-brand-purple/90 backdrop-blur-sm text-white px-3 py-1 rounded-md font-bold text-[10px] uppercase tracking-wider">
                  BRAINSTORMING & CONCEPTS
                </div>
              </div>
            </div>
            <div className="academic-card overflow-hidden group bg-white">
              <div className="aspect-[4/3] overflow-hidden relative bg-brand-stone">
                <img
                  src="/images/campus_fabrication.png"
                  alt="Students preparing decor layouts"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-brand-purple/90 backdrop-blur-sm text-white px-3 py-1 rounded-md font-bold text-[10px] uppercase tracking-wider">
                  PRODUCTION FABRICATION
                </div>
              </div>
            </div>
            <div className="academic-card overflow-hidden group bg-white">
              <div className="aspect-[4/3] overflow-hidden relative bg-brand-stone">
                <img
                  src="/images/campus_soundcheck.png"
                  alt="Rehearsals stage design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-brand-teal/90 backdrop-blur-sm text-white px-3 py-1 rounded-md font-bold text-[10px] uppercase tracking-wider">
                  BACKSTAGE & SOUNDCHECKS
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/campus-life"
              className="px-8 py-3.5 border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white rounded-xl font-bold text-xs tracking-wider uppercase transition-colors inline-block"
            >
              EXPLORE CAMPUS LIFE →
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================
      SECTION 10 — TESTIMONIALS (Light Theme)
      ================================================== */}
      <section className="bg-brand-cream px-6 md:px-12 py-20 lg:py-28 border-b border-brand-border relative">
        <div className="max-w-[1000px] mx-auto relative z-10">
          <div className="text-center mb-8">
            <span className="badge-pill bg-brand-purpleMuted text-brand-purple border border-brand-purple/20 text-[11px] font-bold">
              // STUDENT VOICES
            </span>
          </div>

          {/* Testimonial Quote slider */}
          <div className="academic-card p-8 md:p-12 bg-white shadow-card">
            <div className="min-h-[200px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6"
                >
                  {/* Big quote */}
                  <blockquote className="font-display font-medium text-xl sm:text-2xl md:text-3xl leading-relaxed text-brand-purple text-center">
                    “{testimonialsData[currentTestimonial].quote}”
                  </blockquote>

                  {/* Profile detail */}
                  <div className="flex flex-col items-center justify-center gap-3 pt-4 border-t border-brand-border/60">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-purple bg-brand-stone shadow-sm">
                      <img
                        src={testimonialsData[currentTestimonial].image}
                        alt={testimonialsData[currentTestimonial].studentName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <div className="font-display font-bold text-lg text-brand-purple">
                        {testimonialsData[currentTestimonial].studentName}
                      </div>
                      <div className="text-xs text-brand-textMuted font-sans mt-0.5">
                        {testimonialsData[currentTestimonial].program} • {testimonialsData[currentTestimonial].batch}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider navigation controls */}
              <div className="flex justify-center items-center gap-6 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-brand-border bg-brand-cream/60 flex items-center justify-center text-brand-purple hover:bg-brand-purple hover:text-white transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="font-mono text-sm font-bold text-brand-purple">
                  {currentTestimonial + 1} / {testimonialsData.length}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-brand-border bg-brand-cream/60 flex items-center justify-center text-brand-purple hover:bg-brand-purple hover:text-white transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
      SECTION 11 — ADMISSIONS CTA
      ================================================== */}
      <section className="bg-brand-purple text-white py-16 lg:py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-6xl leading-[1.05] tracking-tight mb-4">
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
              className="px-8 py-4 bg-white text-brand-purple hover:bg-brand-cream rounded-xl font-bold text-xs uppercase tracking-wider text-center shadow-card transition-colors"
            >
              APPLY NOW →
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 rounded-xl font-bold text-xs uppercase tracking-wider text-center transition-colors backdrop-blur-sm"
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
            className="fixed inset-0 w-full h-full bg-brand-purple/90 backdrop-blur-md z-50 flex items-center justify-center p-6"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="w-full max-w-4xl aspect-video bg-white border border-brand-border rounded-2xl relative flex flex-col justify-center items-center text-center p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute top-4 right-4 text-brand-textDark hover:text-brand-purple transition-colors text-xs font-bold uppercase tracking-wider bg-brand-stone px-3 py-1.5 rounded-lg"
              >
                CLOSE [X]
              </button>
              <Play size={56} className="text-brand-purple mb-4" />
              <h3 className="font-display font-bold text-2xl text-brand-purple mb-2">IIEM ACADEMY DOCUMENTARY</h3>
              <p className="font-sans text-brand-textMuted text-xs sm:text-sm max-w-md">
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
