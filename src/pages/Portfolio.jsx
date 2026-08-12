import React from 'react';
import { ArrowRight, Trophy, Star, Users, Presentation, Settings, Camera, Mic, Play, Award } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Portfolio = () => {
 return (
 <div className="w-full">
 {/* Hero Header */}
  <section className="bg-brand-cream py-20 px-6 md:px-12 border-b border-brand-textDark/10 relative overflow-hidden">
    <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
      <div className="max-w-2xl">
        <span className="font-sans text-xs md:text-sm font-bold tracking-[0.25em] text-brand-magenta uppercase block mb-4">
          // EXPERIENTIAL ARCHIVE
        </span>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.85] tracking-tight uppercase text-brand-purple">
          THE WORK<br />
          <span className="text-brand-magenta">SPEAKS</span><br />
          <span className="text-brand-textDark">FOR ITSELF.</span>
        </h1>
        <p className="font-sans text-brand-textDark/80 text-lg mt-6 leading-relaxed">
          Dive into our archive of successful live events, corporate activations, and capstone projects designed and executed entirely by our talented students.
        </p>
      </div>

      <div className="relative w-full aspect-video lg:aspect-[4/3] bg-brand-purple/5 neo-shadow-magenta border border-brand-textDark/15 overflow-hidden group lg:ml-auto max-w-xl">
        <img 
          src="/images/course_props_production.png" 
          alt="Students setting up a live event production" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-brand-magenta/10 pointer-events-none"></div>
        <div className="absolute bottom-4 left-4 bg-brand-purple text-brand-cream px-3 py-1 font-display text-sm tracking-wider uppercase">
          Live Portfolio
        </div>
      </div>
    </div>
  </section>

 {/* 1. Capstone Student Projects */}
 <section className="bg-white py-24 px-6 md:px-12 border-b border-brand-textDark/10">
 <div className="max-w-[1400px] mx-auto">
 <SectionHeader
 eyebrow="FROM CONCEPT TO REALITY"
 title="CAPSTONE PROJECTS."
 />
 <p className="max-w-2xl text-brand-textDark/70 font-sans mb-12">
 Final-year projects where student cohorts build an event entirely from scratch. See how they turn theoretical pitch decks into executed reality.
 </p>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
 <div className="border border-brand-textDark/15 bg-brand-cream p-6 group hover:-translate-y-1 transition-transform neo-shadow-purple">
 <div className="font-display text-2xl text-brand-purple mb-6">THE 2025 URBAN MUSIC FESTIVAL</div>
 <div className="grid grid-cols-2 gap-4">
 <div>
 <div className="text-[10px] font-bold text-brand-magenta tracking-widest uppercase mb-2">The Pitch Deck</div>
 <div className="aspect-[4/3] bg-brand-purple/10 overflow-hidden border border-brand-textDark/10">
 <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80" alt="Pitch Deck" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
 </div>
 </div>
 <div>
 <div className="text-[10px] font-bold text-brand-teal tracking-widest uppercase mb-2">The Execution</div>
 <div className="aspect-[4/3] bg-brand-purple/10 overflow-hidden border border-brand-textDark/10">
 <img src="/images/portfolio_music_festival.png" alt="Live Event" className="w-full h-full object-cover group-hover:-0 transition-all duration-500" />
 </div>
 </div>
 </div>
 </div>

 <div className="border border-brand-textDark/15 bg-brand-cream p-6 group hover:-translate-y-1 transition-transform neo-shadow-teal">
 <div className="font-display text-2xl text-brand-purple mb-6">LUXURY DESTINATION WEDDING</div>
 <div className="grid grid-cols-2 gap-4">
 <div>
 <div className="text-[10px] font-bold text-brand-magenta tracking-widest uppercase mb-2">Moodboard & Plan</div>
 <div className="aspect-[4/3] bg-brand-purple/10 overflow-hidden border border-brand-textDark/10">
 <img src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&w=600&q=80" alt="Planning" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
 </div>
 </div>
 <div>
 <div className="text-[10px] font-bold text-brand-teal tracking-widest uppercase mb-2">The Execution</div>
 <div className="aspect-[4/3] bg-brand-purple/10 overflow-hidden border border-brand-textDark/10">
 <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80" alt="Wedding Setup" className="w-full h-full object-cover group-hover:-0 transition-all duration-500" />
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* 2. Industry Internship Spotlights (Dark) */}
 <section className="bg-brand-dark text-brand-cream py-24 px-6 md:px-12 relative overflow-hidden">
 <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-magenta/10 rounded-full blur-3xl pointer-events-none"></div>
 <div className="max-w-[1400px] mx-auto relative z-10">
 <SectionHeader
 eyebrow="OUR STUDENTS IN THE FIELD"
 title="INDUSTRY INTERNSHIPS."
 darkBg={true}
 />
 <p className="max-w-2xl text-brand-cream/70 font-sans mb-12">
 Working on the ground at massive real-world events. See our students wearing crew badges, managing backstage logistics, and operating soundboards at major festivals.
 </p>

 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 {[
 { img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80", label: "Backstage Logistics" },
 { img: "https://images.unsplash.com/photo-1520242739010-44e95bde329e?auto=format&fit=crop&w=600&q=80", label: "Sound Engineering" },
 { img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80", label: "VIP Management" },
 { img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80", label: "Live Crowd Control" }
 ].map((item, idx) => (
 <div key={idx} className="relative group overflow-hidden border border-brand-cream/15 aspect-square">
 <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:-0 transition-all duration-700 hover:scale-110" />
 <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
 <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-teal">{item.label}</span>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* 3. Practical Labs Showcase */}
 <section className="bg-brand-cream py-24 px-6 md:px-12 border-b border-brand-textDark/10">
 <div className="max-w-[1400px] mx-auto">
 <SectionHeader
 eyebrow="IN-CLASS ACTION"
 title="PRACTICAL LABS."
 />
 <p className="max-w-2xl text-brand-textDark/70 font-sans mb-12">
 We don't just show finished events; we show the learning process. This is what hands-on education looks like.
 </p>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 <div className="bg-white p-8 border border-brand-textDark/15 hover:border-brand-magenta transition-colors group">
 <Settings size={32} className="text-brand-magenta mb-4 group-hover:rotate-90 transition-transform duration-500" />
 <h3 className="font-display text-2xl text-brand-purple mb-2">FABRICATION & AV LABS</h3>
 <p className="text-sm font-sans text-brand-textDark/70">Students soldering circuits, rigging lights, and testing acoustics.</p>
 </div>
 <div className="bg-white p-8 border border-brand-textDark/15 hover:border-brand-teal transition-colors group">
 <Camera size={32} className="text-brand-teal mb-4 group-hover:scale-110 transition-transform" />
 <h3 className="font-display text-2xl text-brand-purple mb-2">WEDDING DESIGN MODULES</h3>
 <p className="text-sm font-sans text-brand-textDark/70">Hands-on floral arrangements, stage mockups, and fabric draping.</p>
 </div>
 <div className="bg-white p-8 border border-brand-textDark/15 hover:border-brand-purple transition-colors group">
 <Presentation size={32} className="text-brand-purple mb-4 group-hover:translate-x-2 transition-transform" />
 <h3 className="font-display text-2xl text-brand-purple mb-2">THE PITCH DECK BOARDROOM</h3>
 <p className="text-sm font-sans text-brand-textDark/70">Students presenting event budgets and logistics plans to industry panels.</p>
 </div>
 </div>
 </div>
 </section>

 {/* 4. Alumni Hall of Fame */}
 <section className="bg-white py-24 px-6 md:px-12 border-b border-brand-textDark/10">
 <div className="max-w-[1400px] mx-auto">
 <SectionHeader
 eyebrow="PLACEMENT SUCCESS"
 title="ALUMNI HALL OF FAME."
 />
 <p className="max-w-2xl text-brand-textDark/70 font-sans mb-12">
 Showcasing incredible events currently being managed by IIEM graduates who are leading the industry.
 </p>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 <div className="border border-brand-textDark/15 overflow-hidden group">
 <div className="aspect-video bg-brand-purple/10 overflow-hidden relative">
 <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80" alt="Concert" className="w-full h-full object-cover group-hover:-0 transition-all duration-700 hover:scale-105" />
 <div className="absolute top-4 left-4 bg-white text-brand-dark px-3 py-1 font-display text-sm flex items-center gap-2 neo-shadow">
 <Star size={14} className="text-brand-magenta" /> THE 2025 AUTO EXPO
 </div>
 </div>
 <div className="p-6 bg-brand-cream border-t border-brand-textDark/15">
 <div className="font-sans text-sm font-bold tracking-widest text-brand-purple uppercase">Lead Production Manager</div>
 <div className="font-display text-2xl text-brand-magenta mt-1">RAHUL T. (IIEM BATCH OF 2022)</div>
 </div>
 </div>
 <div className="border border-brand-textDark/15 overflow-hidden group">
 <div className="aspect-video bg-brand-purple/10 overflow-hidden relative">
 <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80" alt="Corporate Event" className="w-full h-full object-cover group-hover:-0 transition-all duration-700 hover:scale-105" />
 <div className="absolute top-4 left-4 bg-white text-brand-dark px-3 py-1 font-display text-sm flex items-center gap-2 neo-shadow">
 <Star size={14} className="text-brand-teal" /> GLOBAL TECH SUMMIT
 </div>
 </div>
 <div className="p-6 bg-brand-cream border-t border-brand-textDark/15">
 <div className="font-sans text-sm font-bold tracking-widest text-brand-purple uppercase">Head of Operations</div>
 <div className="font-display text-2xl text-brand-teal mt-1">SNEHA M. (IIEM BATCH OF 2023)</div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* 5. Campus Fests & In-House */}
 <section className="bg-brand-purple text-brand-cream py-24 px-6 md:px-12 relative overflow-hidden">
 <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1540039155732-68b0e8b15d97?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none"></div>
 <div className="max-w-[1400px] mx-auto relative z-10 text-center">
 <SectionHeader
 eyebrow="IN-HOUSE PRODUCTIONS"
 title="CAMPUS FESTIVALS."
 darkBg={true}
 />
 <p className="max-w-2xl mx-auto text-brand-cream/80 font-sans mt-4 mb-12 text-lg">
 IIEM students practice event management every day by throwing the best campus events in the city. From high-energy Freshers' parties to massive cultural fests.
 </p>
 <div className="inline-block p-4 border-2 border-brand-magenta bg-brand-dark/50 backdrop-blur text-left max-w-xl">
 <div className="flex items-center gap-4 mb-2">
 <Play size={24} className="text-brand-magenta" />
 <h3 className="font-display text-2xl text-white">THE SYNERGY FEST 2025</h3>
 </div>
 <p className="font-sans text-sm text-brand-cream/70">100% Planned, Budgeted, Marketed, and Executed by the 1st Year Cohort.</p>
 </div>
 </div>
 </section>

 {/* 6. Masterclasses */}
 <section className="bg-brand-cream py-24 px-6 md:px-12 border-b border-brand-textDark/10">
 <div className="max-w-[1400px] mx-auto">
 <SectionHeader
 eyebrow="INDUSTRY TIES"
 title="GUEST EXPERT SHOWCASES."
 />
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
 {[
 { name: "Vikram S.", title: "Celebrity Talent Manager", quote: "The questions these students ask show they are already thinking like professionals." },
 { name: "Priya K.", title: "Luxury Wedding Planner", quote: "I was blown away by the floral mockup presentations in the design module." },
 { name: "Arjun R.", title: "Festival Technical Director", quote: "IIEM is creating a generation of crew members who actually understand safety." }
 ].map((guest, idx) => (
 <div key={idx} className="p-8 border border-brand-textDark/15 bg-white hover:-translate-y-2 transition-transform neo-shadow">
 <Mic size={24} className="text-brand-magenta mb-4" />
 <p className="font-sans text-brand-textDark/80 italic mb-6">"{guest.quote}"</p>
 <div className="font-display text-xl text-brand-purple">{guest.name}</div>
 <div className="font-sans text-xs font-bold text-brand-teal uppercase tracking-widest mt-1">{guest.title}</div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* 7. Trophy Cabinet */}
 <section className="bg-brand-dark text-brand-cream py-24 px-6 md:px-12">
 <div className="max-w-[1400px] mx-auto text-center">
 <Trophy size={48} className="text-brand-teal mx-auto mb-6" />
 <SectionHeader
 eyebrow="AWARDS & RECOGNITION"
 title="THE TROPHY CABINET."
 darkBg={true}
 />
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
 {["Best Student Event Concept 2024", "National Pitch-Fest Winners", "Excellence in Stage Design", "Top Emerging Event Institute"].map((award, idx) => (
 <div key={idx} className="p-6 border border-brand-cream/15 bg-brand-cream/5 hover:bg-brand-magenta/10 transition-colors">
 <Award size={24} className="text-brand-magenta mx-auto mb-4" />
 <h4 className="font-display text-lg text-brand-cream leading-snug">{award}</h4>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="bg-brand-cream text-brand-textDark py-20 px-6 md:px-12 text-center border-t border-brand-textDark/10">
 <div className="max-w-2xl mx-auto space-y-6">
 <h2 className="font-display text-4xl sm:text-6xl text-brand-purple">WANT YOUR EVENT STAGED HERE?</h2>
 <p className="text-sm text-brand-textDark/70 max-w-lg mx-auto font-sans leading-relaxed">
 Apply as an industry partner or submit a project brief to collaborate with IIEM crew members for your next major event.
 </p>
 <div className="pt-4">
 <a
 href="mailto:projects@iiem.edu.in"
 className="px-6 py-4 bg-brand-purple text-brand-cream hover:bg-brand-magenta transition-all duration-300 font-display text-lg tracking-wider inline-block neo-shadow-teal"
 >
 SUBMIT A COLLABORATIVE BRIEF →
 </a>
 </div>
 </div>
 </section>

 </div>
 );
};

export default Portfolio;
