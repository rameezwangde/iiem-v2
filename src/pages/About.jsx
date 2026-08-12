import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { facultyData } from '../data/siteData';

const About = () => {
 return (
 <div className="w-full">
  {/* Hero Header */}
  <section className="bg-brand-cream py-20 px-6 md:px-12 border-b border-brand-textDark/10 relative overflow-hidden">
    <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
      <div className="max-w-2xl">
        <span className="font-sans text-xs md:text-sm font-bold tracking-[0.25em] text-brand-magenta uppercase block mb-4">
          // MEET IIEM
        </span>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.85] tracking-tight uppercase text-brand-purple mb-6">
          MORE THAN AN INSTITUTE.<br />
          <span className="text-brand-magenta">A PLACE TO CREATE</span><br />
          <span className="text-brand-textDark">EXPERIENCES.</span>
        </h1>
        <p className="text-brand-textDark/80 font-sans text-lg md:text-xl leading-relaxed max-w-xl">
          We believe event management isn't just learned in a classroom; it's forged through hands-on experience, late-night planning, and real-world execution. Welcome to the future of event education.
        </p>
      </div>
      <div className="relative w-full aspect-video group overflow-hidden bg-brand-purple/5">
        <img 
          src="/images/about_hero.png" 
          alt="IIEM Campus Experience"
          className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-in-out filter contrast-125 saturate-150"
        />
        <div className="absolute inset-0 bg-brand-magenta/10 mix-blend-overlay"></div>
      </div>
    </div>
  </section>

 {/* Panel 1 — Who We Are & Our Story (Cream background) */}
 <section className="bg-brand-cream py-20 px-6 md:px-12">
 <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
 <div className="lg:col-span-6 space-y-6">
 <SectionHeader
 eyebrow="OUR IDENTITY"
 title="THE EVOLUTION OF EVENT EDUCATION."
 />
 <p className="font-sans text-brand-textDark/85 text-base md:text-lg leading-relaxed">
 Founded by experiential marketing experts, the India Institute of Event Management was established to address a clear gap in standard academics: the divide between classroom lectures and on-stage operations.
 </p>
 <p className="font-sans text-brand-textDark/70 text-sm md:text-base leading-relaxed">
 In the real event industry, there is no time for manuals. Planners operate under extreme deadlines, coordinating fabrication structures, AV matrices, security protocols, and artist riders simultaneously. IIEM replicates this high-intensity environment, treating classrooms as briefing offices and labs as loading docks.
 </p>
 </div>

 <div className="lg:col-span-6">
  <div className="relative p-4 border border-brand-textDark/15 bg-brand-cream neo-shadow-purple">
  <img
  src="/images/about.jpeg"
  alt="Professionals reviewing event plans and logistics"
  className="w-full h-auto filter hover:-0 transition-all duration-500"
  />
  <div className="absolute top-8 left-8 bg-brand-teal text-brand-cream px-3 py-1 font-display text-sm">
  EVENT PLANNING & LOGISTICS
  </div>
  </div>
 </div>
 </div>
 </section>

 {/* Panel 2 — Vision, Mission & Philosophy (Dark background) */}
 <section className="bg-brand-dark text-brand-cream py-20 px-6 md:px-12">
 <div className="max-w-[1400px] mx-auto">
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
 {/* Vision */}
 <div className="border border-brand-cream/10 p-8 space-y-4 hover:border-brand-teal/40 transition-colors">
 <div className="font-display text-4xl text-brand-teal">// VISION</div>
 <p className="font-sans text-sm text-brand-cream/70 leading-relaxed">
 To serve as the global benchmark for creative event training, establishing a pipeline of certified producers who shape the future of live engagements, weddings, and activations in India and beyond.
 </p>
 </div>

 {/* Mission */}
 <div className="border border-brand-cream/10 p-8 space-y-4 hover:border-brand-magenta/40 transition-colors">
 <div className="font-display text-4xl text-brand-magenta">// MISSION</div>
 <p className="font-sans text-sm text-brand-cream/70 leading-relaxed">
 To replace standard memorization-based testing with 80% practical course templates, providing direct agency contact, vendor collaboration, and mentored live event staging hours to every student.
 </p>
 </div>

 {/* Philosophy */}
 <div className="border border-brand-cream/10 p-8 space-y-4 hover:border-brand-cream/30 transition-colors">
 <div className="font-display text-4xl text-brand-cream">// METHODOLOGY</div>
 <p className="font-sans text-sm text-brand-cream/70 leading-relaxed">
 We believe in structural immersion. Our students are taught in fabrication yards, soundcheck decks, and planning tables, ensuring they develop operational instincts that cannot be acquired in books.
 </p>
 </div>
 </div>
 </div>
 </section>

  {/* Core Commitments Checklist */}
  <section className="bg-brand-cream py-16 px-6 md:px-12 border-b border-brand-textDark/10">
    <div className="max-w-[1400px] mx-auto">
      <div className="mb-12">
        <span className="font-sans text-xs md:text-sm font-bold tracking-[0.25em] text-brand-magenta uppercase block mb-2">
          // OUR COMMITMENT
        </span>
        <h2 className="font-display text-4xl sm:text-5xl text-brand-purple uppercase">
          THE IIEM STANDARD.
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {/* Column 1 */}
        <div className="space-y-4">
          {['100% Hospitality', '100% Trusted Event Company', 'In-Housework'].map(item => (
            <div key={item} className="flex items-center gap-4 bg-white p-4 border border-brand-textDark/10 neo-shadow-teal group hover:-translate-y-1 transition-transform">
              <CheckCircle2 size={24} className="text-brand-teal shrink-0 group-hover:text-brand-magenta transition-colors" />
              <span className="font-display text-brand-textDark text-lg tracking-wider uppercase">{item}</span>
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="space-y-4">
          {['Quality Work', 'Event Storyteller', 'On-Time Work'].map(item => (
            <div key={item} className="flex items-center gap-4 bg-white p-4 border border-brand-textDark/10 neo-shadow-teal group hover:-translate-y-1 transition-transform">
              <CheckCircle2 size={24} className="text-brand-teal shrink-0 group-hover:text-brand-magenta transition-colors" />
              <span className="font-display text-brand-textDark text-lg tracking-wider uppercase">{item}</span>
            </div>
          ))}
        </div>

        {/* Column 3 */}
        <div className="space-y-4">
          {['Good Team', 'Client Satisfaction', 'Experience'].map(item => (
            <div key={item} className="flex items-center gap-4 bg-white p-4 border border-brand-textDark/10 neo-shadow-teal group hover:-translate-y-1 transition-transform">
              <CheckCircle2 size={24} className="text-brand-teal shrink-0 group-hover:text-brand-magenta transition-colors" />
              <span className="font-display text-brand-textDark text-lg tracking-wider uppercase">{item}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>

 {/* Panel 3 — Faculty & Mentors (Cream background) */}
 <section className="bg-brand-cream py-20 px-6 md:px-12">
 <div className="max-w-[1400px] mx-auto">
 <SectionHeader
 eyebrow="FACULTY & GUESTS"
 title="LEARN FROM THE PEOPLE WHO RUN THE SHOW."
 supportingText="Our academic team consists of active agency directors, venue hosts, and technical stage leaders. They bring real challenges and projects directly to the campus."
 />

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
 {facultyData.map((fac, idx) => (
 <div key={idx} className="flex flex-col group border border-brand-textDark/10 bg-brand-cream hover:border-brand-purple transition-all duration-300">
 <div className="aspect-[3/4] overflow-hidden border-b border-brand-textDark/10 relative">
 <img
 src={fac.image}
 alt={fac.name}
 className="w-full h-full object-cover group-hover:-0 transition-all duration-500"
 />
 </div>
 <div className="p-6">
 <h3 className="font-display text-2xl text-brand-purple">{fac.name}</h3>
 <div className="font-sans text-xs text-brand-magenta font-semibold tracking-wider uppercase mt-1">
 {fac.designation}
 </div>
 <p className="font-sans text-xs text-brand-textDark/70 mt-3 leading-relaxed">
 {fac.bio}
 </p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Panel 4 — Why Choose IIEM (Dark background) */}
 <section className="bg-brand-dark text-brand-cream py-20 px-6 md:px-12">
 <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
 <div className="lg:col-span-7 space-y-8">
 <SectionHeader
 eyebrow="THE ADVANTAGE"
 title="WHY IIEM STANDS ALONE."
 darkBg={true}
 />

 <div className="space-y-4">
 {[
 { title: '80% Practical Staging Focus', desc: 'No dry worksheets. Students learn rigging, stage lighting, fabrication, and client management in real-world environments.' },
 { title: 'Supervised Placement Cell', desc: 'Active internship channels and final employment drives with India’s leading event management and production houses.' },
 { title: 'Industry Masterclass Access', desc: 'Weekly guest modules led by visiting concert curators, wedding organizers, and technical engineers.' },
 { title: 'Real Budget Allocations', desc: 'Students are given actual budgets to plan, negotiate, and execute mini-campaigns and campus projects.' }
 ].map((adv, idx) => (
 <div key={idx} className="flex gap-4 items-start pb-4 border-b border-brand-cream/10">
 <CheckCircle size={20} className="text-brand-teal shrink-0 mt-1" />
 <div>
 <h4 className="font-display text-xl text-brand-cream">{adv.title}</h4>
 <p className="text-xs text-brand-cream/70 font-sans mt-1">{adv.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </div>

 <div className="lg:col-span-5 relative">
 <div className="aspect-[4/5] border border-brand-cream/15 relative overflow-hidden bg-brand-purple/10 neo-shadow-teal">
 <img
 src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80"
 alt="Large scale stage control panel"
 className="w-full h-full object-cover hover:-0 transition-all duration-700"
 />
 <div className="absolute bottom-4 right-4 bg-brand-magenta text-white px-3 py-1 font-display text-xs">
 IPL BACKSTAGE CREW
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Final Admission CTA */}
 <section className="bg-brand-purple text-brand-cream py-20 px-6 md:px-12 text-center relative overflow-hidden">
 <div className="absolute top-0 left-0 w-full h-full bg-brand-magenta/5 pointer-events-none"></div>
 <div className="max-w-3xl mx-auto space-y-6 relative z-10">
 <h2 className="font-display text-4xl sm:text-6xl text-white">READY TO JOIN THE STAGE?</h2>
 <p className="text-sm text-brand-cream/80 max-w-xl mx-auto font-sans leading-relaxed">
 Discover a learning platform built around people, deadlines, and real live environments. Get in touch with our career counselors today.
 </p>
 <div className="flex justify-center gap-4 pt-4">
 <Link
 to="/admissions"
 className="px-8 py-4 bg-brand-dark text-brand-cream hover:bg-brand-magenta transition-all duration-300 font-display text-lg tracking-wider neo-shadow-teal"
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
