import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, CheckCircle2, Award, Target, Compass, Sparkles } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const About = () => {
  return (
    <div className="w-full bg-brand-cream">
      {/* Hero Header (Light) */}
      <section className="bg-brand-cream py-20 lg:py-28 px-6 md:px-12 relative overflow-hidden border-b border-brand-border">
        <div className="absolute inset-0 bg-[radial-gradient(#4A0A45_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7">
            <span className="badge-pill bg-brand-purpleMuted text-brand-purple border border-brand-purple/20 text-xs font-bold py-1 px-3.5 mb-6">
              // MEET IIEM
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl leading-[1.0] tracking-tight uppercase text-brand-purple mb-6">
              MORE THAN AN INSTITUTE.<br />
              A PLACE TO CREATE<br />
              EXPERIENCES.
            </h1>
            <p className="text-brand-textMuted font-sans text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
              We believe event management isn't just learned in a classroom; it's forged through hands-on experience, late-night planning, and real-world execution. Welcome to the future of event education.
            </p>
          </div>
          
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-brand-border shadow-card bg-white p-3 group">
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-brand-stone">
                <img 
                  src="/images/about_hero.png" 
                  alt="IIEM Campus Experience" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 left-3 bg-brand-purple/90 backdrop-blur-sm text-white px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider">
                  Active Training Lab
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Panel 1 — Who We Are & Our Story */}
      <section className="bg-white py-20 lg:py-28 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              eyebrow="OUR IDENTITY"
              title="THE EVOLUTION OF EVENT EDUCATION."
            />
            <p className="font-sans text-brand-textDark text-base md:text-lg leading-relaxed font-medium">
              Founded by experiential marketing experts, the India Institute of Event Management was established to address a clear gap in standard academics: the divide between classroom lectures and on-stage operations.
            </p>
            <p className="font-sans text-brand-textMuted text-sm md:text-base leading-relaxed">
              In the real event industry, there is no time for manuals. Planners operate under extreme deadlines, coordinating fabrication structures, AV matrices, security protocols, and artist riders simultaneously. IIEM replicates this high-intensity environment, treating classrooms as briefing offices and labs as loading docks.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-brand-border bg-white shadow-card p-3">
              <img
                src="/images/about.jpeg"
                alt="Professionals reviewing event plans and logistics"
                className="w-full h-auto rounded-xl object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-brand-purple/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm">
                EVENT PLANNING & LOGISTICS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Panel 2 — Vision, Mission & Philosophy (Light) */}
      <section className="bg-brand-cream py-20 lg:py-28 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-pill bg-brand-purpleMuted text-brand-purple border border-brand-purple/20 text-xs font-bold mb-4">
              // INSTITUTIONAL PILLARS
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-purple uppercase tracking-tight">
              MISSION, VISION & METHODOLOGY
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="academic-card p-8 space-y-4 shadow-card flex flex-col justify-between bg-white">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-tealLight flex items-center justify-center text-brand-teal mb-6">
                  <Target size={24} />
                </div>
                <div className="font-display font-bold text-2xl text-brand-purple mb-3">// VISION</div>
                <p className="font-sans text-sm text-brand-textMuted leading-relaxed">
                  To serve as the global benchmark for creative event training, establishing a pipeline of certified producers who shape the future of live engagements, weddings, and activations in India and beyond.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="academic-card p-8 space-y-4 shadow-card flex flex-col justify-between bg-white">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-purpleMuted flex items-center justify-center text-brand-purple mb-6">
                  <Award size={24} />
                </div>
                <div className="font-display font-bold text-2xl text-brand-purple mb-3">// MISSION</div>
                <p className="font-sans text-sm text-brand-textMuted leading-relaxed">
                  To replace standard memorization-based testing with 80% practical course templates, providing direct agency contact, vendor collaboration, and mentored live event staging hours to every student.
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="academic-card p-8 space-y-4 shadow-card flex flex-col justify-between bg-white">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-stone flex items-center justify-center text-brand-textDark mb-6">
                  <Compass size={24} />
                </div>
                <div className="font-display font-bold text-2xl text-brand-purple mb-3">// METHODOLOGY</div>
                <p className="font-sans text-sm text-brand-textMuted leading-relaxed">
                  We believe in structural immersion. Our students are taught in fabrication yards, soundcheck decks, and planning tables, ensuring they develop operational instincts that cannot be acquired in books.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Commitments Checklist */}
      <section className="bg-white py-20 lg:py-28 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="OUR COMMITMENT"
            title="THE IIEM STANDARD."
            supportingText="Our foundational guarantees for quality training and industry integration."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-10">
            {/* Column 1 */}
            <div className="space-y-4">
              {['100% Hospitality', '100% Trusted Event Company', 'In-Housework'].map(item => (
                <div key={item} className="flex items-center gap-3.5 bg-brand-cream/60 p-4 rounded-xl border border-brand-border shadow-subtle hover:shadow-card transition-all">
                  <CheckCircle2 size={20} className="text-brand-teal shrink-0" />
                  <span className="font-bold text-brand-textDark text-sm tracking-wide uppercase font-sans">{item}</span>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              {['Quality Work', 'Event Storyteller', 'On-Time Work'].map(item => (
                <div key={item} className="flex items-center gap-3.5 bg-brand-cream/60 p-4 rounded-xl border border-brand-border shadow-subtle hover:shadow-card transition-all">
                  <CheckCircle2 size={20} className="text-brand-teal shrink-0" />
                  <span className="font-bold text-brand-textDark text-sm tracking-wide uppercase font-sans">{item}</span>
                </div>
              ))}
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              {['Good Team', 'Client Satisfaction', 'Experience'].map(item => (
                <div key={item} className="flex items-center gap-3.5 bg-brand-cream/60 p-4 rounded-xl border border-brand-border shadow-subtle hover:shadow-card transition-all">
                  <CheckCircle2 size={20} className="text-brand-teal shrink-0" />
                  <span className="font-bold text-brand-textDark text-sm tracking-wide uppercase font-sans">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Panel 4 — Why Choose IIEM (Light) */}
      <section className="bg-brand-cream py-20 lg:py-28 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <SectionHeader
              eyebrow="THE ADVANTAGE"
              title="WHY IIEM STANDS ALONE."
              supportingText="Uncompromising practical immersion designed for fast-track careers."
            />

            <div className="space-y-4">
              {[
                { title: '80% Practical Staging Focus', desc: 'No dry worksheets. Students learn rigging, stage lighting, fabrication, and client management in real-world environments.' },
                { title: 'Supervised Placement Cell', desc: 'Active internship channels and final employment drives with India’s leading event management and production houses.' },
                { title: 'Industry Masterclass Access', desc: 'Weekly guest modules led by visiting concert curators, wedding organizers, and technical engineers.' },
                { title: 'Real Budget Allocations', desc: 'Students are given actual budgets to plan, negotiate, and execute mini-campaigns and campus projects.' }
              ].map((adv, idx) => (
                <div key={idx} className="academic-card p-5 flex gap-4 items-start bg-white">
                  <CheckCircle size={18} className="text-brand-teal shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-lg text-brand-purple">{adv.title}</h4>
                    <p className="text-xs text-brand-textMuted font-sans mt-1 leading-relaxed">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="academic-card p-3 shadow-card bg-white">
              <div className="aspect-[4/5] rounded-xl relative overflow-hidden bg-brand-stone">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80"
                  alt="Large scale stage control panel"
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
                <div className="absolute bottom-4 right-4 bg-brand-purple/90 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-lg font-bold text-xs uppercase tracking-wider">
                  IPL BACKSTAGE CREW
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Admission CTA */}
      <section className="bg-brand-purple text-white py-20 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
            READY TO JOIN THE STAGE?
          </h2>
          <p className="text-sm sm:text-base text-brand-cream/80 max-w-xl mx-auto font-sans leading-relaxed">
            Discover a learning platform built around people, deadlines, and real live environments. Get in touch with our career counselors today.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Link
              to="/admissions"
              className="px-8 py-4 bg-white text-brand-purple hover:bg-brand-cream transition-colors rounded-xl font-bold text-xs uppercase tracking-wider shadow-card"
            >
              EXPLORE ADMISSIONS →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
