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
                className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.08] tracking-tight uppercase text-brand-purple"
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
                    src="/images/IIEM STUDENT COHORT.webp"
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
      <section className="bg-white px-6 md:px-12 pt-12 pb-8 lg:pt-16 lg:pb-10 border-b border-brand-border">
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
                    src="/images/new.png"
                    alt="Audio focus live set up practical"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-brand-border bg-brand-stone shadow-card group">
                  <img
                    src="/images/console operator.png"
                    alt="Console operator"
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
      <section className="bg-brand-cream px-6 md:px-12 pt-8 pb-12 lg:pt-10 lg:pb-16 border-b border-brand-border">
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
      SECTION 3 — PROGRAMS (Bold Academic Course Prospectus)
      ================================================== */}
      <section className="bg-white px-6 md:px-12 pt-8 pb-12 lg:pt-10 lg:pb-16 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="ACADEMIC PROGRAMS"
            title="EXPLORE OUR FLAGSHIP COURSES."
            supportingText="Industry-aligned diploma and certification programs designed around technical skills, on-ground logistics, and real-world execution."
          />

          {/* Bold Academic Prospectus 2x2 Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {[
              {
                ...programsData[0],
                category: "Social & Luxury Events",
                focus: "Destination Weddings, Theme Conceptualization & Luxury Styling",
                careers: "Wedding Planner, Destination Consultant, Luxury Decor Stylist"
              },
              {
                ...programsData[1],
                category: "Corporate & MICE Management",
                focus: "Conferences, Summits, Product Launches & Trade Show Logistics",
                careers: "Corporate Event Planner, MICE Manager, Brand Activation Lead"
              },
              {
                ...programsData[2],
                category: "Live Entertainment & Festivals",
                focus: "Stadium Concerts, Music Festivals, Artist Logistics & Stage Rigging",
                careers: "Stage Manager, Artist Coordinator, Festival Technical Director"
              },
              {
                ...programsData[3],
                category: "Technical Production & Operations",
                focus: "AV Rigging, Sound Engineering, Power Distribution & Stage Safety",
                careers: "Event Production Head, Rigging Supervisor, Operations Manager"
              }
            ].map((prog) => (
              <div
                key={prog.id}
                className="academic-card bg-white border-2 border-brand-border rounded-2xl p-8 sm:p-10 flex flex-col justify-between group hover:border-brand-purple hover:shadow-card-hover transition-all duration-300"
              >
                <div>
                  {/* Top Academic Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-brand-border">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-extrabold text-white bg-brand-purple px-3 py-1.5 rounded-lg shadow-xs">
                        PROGRAM {prog.num}
                      </span>
                      <span className="text-xs sm:text-sm font-extrabold text-brand-purple uppercase tracking-wider">
                        {prog.category}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-brand-purple bg-brand-purpleMuted border border-brand-purple/20 px-3 py-1.5 rounded-lg">
                      ⏱ {prog.duration}
                    </span>
                  </div>

                  {/* Program Title */}
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-brand-purple mb-4 leading-snug">
                    {prog.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm sm:text-base font-medium text-brand-textDark/90 leading-relaxed mb-6">
                    {prog.overview}
                  </p>

                  {/* Institutional Specs Box */}
                  <div className="bg-brand-cream/70 p-6 rounded-xl border border-brand-border space-y-4 mb-6">
                    <div>
                      <div className="text-xs font-extrabold text-brand-purple uppercase tracking-wider mb-1">
                        Curriculum Focus
                      </div>
                      <div className="text-sm font-bold text-brand-textDark font-sans leading-relaxed">
                        {prog.focus}
                      </div>
                    </div>
                    <div className="pt-3 border-t border-brand-border">
                      <div className="text-xs font-extrabold text-brand-purple uppercase tracking-wider mb-1">
                        Career Pathways
                      </div>
                      <div className="text-sm font-bold text-brand-textDark font-sans leading-relaxed">
                        {prog.careers}
                      </div>
                    </div>
                    <div className="pt-3 border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm font-sans">
                      <span className="text-brand-textMuted font-bold uppercase tracking-wider text-xs">Eligibility:</span>
                      <span className="font-extrabold text-brand-textDark">{prog.eligibility.split('.')[0]}</span>
                    </div>
                  </div>

                  {/* Core Syllabus Modules Checklist */}
                  <div className="mb-6">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-brand-purple mb-3">
                      Key Syllabus Modules:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {prog.curriculum.slice(0, 4).map((mod, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-brand-textDark font-sans">
                          <CheckCircle2 size={16} className="text-brand-purple shrink-0" />
                          <span>{mod}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-6 border-t border-brand-border flex flex-wrap items-center justify-between gap-4 mt-2">
                  <Link
                    to={`/programs#${prog.id}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-brand-purple hover:text-brand-purpleLight transition-colors"
                  >
                    <span>View Full Syllabus & Modules</span>
                    <ArrowRight size={15} />
                  </Link>

                  <Link
                    to="/admissions"
                    className="px-6 py-3 bg-brand-purple hover:bg-brand-purpleLight text-white rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-colors shadow-card"
                  >
                    Apply for Batch
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Academic Advising Bar */}
          <div className="mt-12 p-6 rounded-2xl bg-brand-cream/50 border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="font-display font-bold text-lg text-brand-purple">
                Need Help Choosing the Right Program?
              </h4>
              <p className="text-xs text-brand-textMuted font-sans mt-0.5">
                Our academic counselors offer free 1-on-1 career guidance sessions to match your strengths.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/programs"
                className="px-5 py-2.5 bg-white border border-brand-border hover:border-brand-purple text-brand-purple rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
              >
                Compare All Programs
              </Link>
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-brand-purple hover:bg-brand-purpleLight text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-card"
              >
                Talk to a Counselor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
      SECTION 4 — INSTITUTIONAL TRAINING METHODOLOGY
      ================================================== */}
      <section className="bg-brand-cream px-6 md:px-12 py-12 lg:py-16 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="ACADEMIC METHODOLOGY"
            title="THE CLASSROOM IS ONLY THE BEGINNING."
            supportingText="We believe event management cannot be mastered through textbooks alone. Our pedagogy balances structured academic theory with intense, on-ground production hours."
          />

          {/* 4 Core Institutional Training Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                step: "01",
                title: "80% Live Staging Hours",
                badge: "On-Ground Training",
                desc: "Students work backstage as active crew members across major concerts, high-profile weddings, and corporate summits across India."
              },
              {
                step: "02",
                title: "AV & Rigging Labs",
                badge: "Technical Mastery",
                desc: "Hands-on studio training with digital sound consoles, intelligent lighting rigs, LED screen mapping, and stage structural safety."
              },
              {
                step: "03",
                title: "Masterclasses by Directors",
                badge: "Industry Mentorship",
                desc: "Weekly masterclasses and case-study teardowns hosted by visiting agency founders, wedding planners, and festival technical leads."
              },
              {
                step: "04",
                title: "Agency Pitch Simulation",
                badge: "Business & Bidding",
                desc: "Students formulate 360-degree event briefs, budgets, floor plans, and pitch directly to corporate evaluators in boardroom trials."
              }
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="academic-card bg-white p-7 rounded-2xl border border-brand-border flex flex-col justify-between hover:border-brand-purple/40 hover:shadow-card-hover transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-brand-purple bg-brand-purpleMuted px-2.5 py-1 rounded-md">
                      PHASE {pillar.step}
                    </span>
                    <span className="text-[10px] font-bold text-brand-purple uppercase tracking-wider bg-brand-purpleMuted px-2 py-0.5 rounded">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-brand-purple mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-brand-textMuted leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs text-brand-textDark font-sans">
                  <span className="font-semibold">Core Curriculum Metric</span>
                  <CheckCircle2 size={15} className="text-brand-purple" />
                </div>
              </div>
            ))}
          </div>

          {/* Industry Functional Sectors Covered */}
          <div className="mt-12 bg-white rounded-2xl p-8 border border-brand-border">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-brand-border/60 mb-6">
              <div>
                <h4 className="font-display font-bold text-xl text-brand-purple">
                  Functional Event Verticals Covered in Training
                </h4>
                <p className="font-sans text-xs text-brand-textMuted mt-1">
                  Students gain multi-disciplinary exposure across all 8 major event industry segments:
                </p>
              </div>
              <span className="badge-pill bg-brand-purpleMuted text-brand-purple text-xs font-bold shrink-0 self-start md:self-auto">
                Comprehensive Domain Coverage
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Live Music & Concerts', desc: 'Stadium production & artist hospitality' },
                { label: 'Luxury Destination Weddings', desc: 'Thematic decor, hospitality & rituals' },
                { label: 'Corporate Summits & MICE', desc: 'B2B protocols & technical AV platforms' },
                { label: 'Exhibitions & Trade Shows', desc: 'Stall fabrication & footfall logistics' },
                { label: 'Sports League Operations', desc: 'Matchday management & crowd security' },
                { label: 'Brand PR & Product Launches', desc: 'Experiential storytelling & media management' },
                { label: 'Backstage & Technical Rigging', desc: 'Sound, lighting, power & truss rigging' },
                { label: 'Venue & Banquet Management', desc: 'Layout planning, catering & client relations' }
              ].map((sector, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-brand-cream/40 border border-brand-border/80 hover:border-brand-purple/30 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 size={14} className="text-brand-purple shrink-0" />
                    <h5 className="font-display font-bold text-xs sm:text-sm text-brand-purple leading-snug">
                      {sector.label}
                    </h5>
                  </div>
                  <p className="text-[11px] text-brand-textMuted font-sans pl-5 leading-relaxed">
                    {sector.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
      SECTION 4.5 — POPULAR COURSES
      ================================================== */}
      <section className="bg-white px-6 md:px-12 pt-12 pb-8 lg:pt-16 lg:pb-10 border-b border-brand-border">
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
                img: "/images/props.webp"
              },
              {
                title: "Marketing",
                img: "/images/image.jfif"
              },
              {
                title: "Vendor Management",
                img: "/images/Vendor_Management_Upscaled.jpeg",
                objectPos: "object-[center_15%]"
              },
              {
                title: "Event B2B Business",
                img: "/images/B2B PANEL ORGANIZATION SUPPORT.bmp"
              }
            ].map((course, idx) => (
              <div key={idx} className="academic-card overflow-hidden group bg-white">
                <div className="h-64 overflow-hidden relative bg-brand-stone">
                  <img
                    src={course.img}
                    alt={course.title}
                    className={`w-full h-full object-cover ${course.objectPos || 'object-top'} group-hover:scale-105 transition-transform duration-500`}
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
      SECTION 5 — WHY CHOOSE US / AT A GLANCE
      ================================================== */}
      <section className="bg-brand-cream px-6 md:px-12 pt-8 pb-8 lg:pt-10 lg:pb-10 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <SectionHeader
              eyebrow="IIEM AT A GLANCE"
              title="WHY CHOOSE US"
              supportingText="Proven academic and field outcomes across our certified event management cohorts."
            />
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

        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 mt-12">
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
        <div className="max-w-[1400px] mx-auto mt-10 py-6 border-t border-b border-brand-border text-center overflow-hidden bg-white/50 rounded-xl shadow-subtle">
          <div className="font-display font-bold text-xl sm:text-3xl tracking-widest text-brand-purple flex justify-center items-center gap-6 flex-wrap leading-none uppercase">
            <span>REAL LEARNING</span>
            <span className="text-brand-magenta">•</span>
            <span>REAL EVENTS</span>
            <span className="text-brand-magenta">•</span>
            <span>REAL EXPERIENCE</span>
          </div>
        </div>
      </section>

      {/* ==================================================
      SECTION 6 — PORTFOLIO / SHOWCASE
      ================================================== */}
      <section className="bg-brand-cream px-6 md:px-12 pt-10 pb-12 lg:pt-12 lg:pb-16 border-b border-brand-border">
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
      <section className="bg-white px-6 md:px-12 py-12 lg:py-16 border-b border-brand-border">
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
      <section className="bg-brand-cream px-6 md:px-12 py-12 lg:py-16 border-b border-brand-border relative overflow-hidden">
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
      <section className="bg-white px-6 md:px-12 py-12 lg:py-16 border-b border-brand-border">
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
                  src="/images/floral production fabrication.png"
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
                  src="/images/images.jpg"
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
      SECTION 10 — TESTIMONIALS (Free-Flowing Motion)
      ================================================== */}
      <section className="bg-brand-cream py-12 lg:py-16 border-b border-brand-border relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-10">
          <SectionHeader
            eyebrow="STUDENT VOICES"
            title="STORIES FROM THE FIELD."
            supportingText="Hear directly from our graduates on how on-ground event management training transformed their careers."
            align="center"
          />
        </div>

        {/* Free-Flowing Infinite Marquee Stream */}
        <div className="relative w-full overflow-hidden flex select-none no-scrollbar group py-2">
          <div className="animate-freeflow items-stretch gap-6 py-4 px-3">
            {[...testimonialsData, ...testimonialsData, ...testimonialsData].map((item, idx) => (
              <div
                key={idx}
                className="w-[340px] sm:w-[400px] md:w-[440px] shrink-0 whitespace-normal academic-card p-7 md:p-8 bg-white border border-brand-border rounded-2xl shadow-card flex flex-col justify-between hover:border-brand-purple/40 hover:shadow-card-hover transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-black text-4xl text-brand-purple/30 leading-none">“</span>
                    <span className="badge-pill bg-brand-purpleMuted text-brand-purple text-[10px] font-bold">
                      {item.batch}
                    </span>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-brand-textDark leading-relaxed italic mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-brand-border/60 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-purple shrink-0 bg-brand-stone shadow-xs">
                    <img
                      src={item.image}
                      alt={item.studentName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-display font-bold text-base text-brand-purple leading-snug">
                      {item.studentName}
                    </div>
                    <div className="text-xs text-brand-textMuted font-sans font-medium">
                      {item.program}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
      SECTION 11 — ADMISSIONS CTA
      ================================================== */}
      <section className="bg-brand-purple text-white py-16 lg:py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-6xl leading-[1.05] tracking-tight mb-4 text-white uppercase">
              YOUR FIRST BIG EVENT?<br />
              YOUR CAREER.
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
