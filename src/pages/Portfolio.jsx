import React from 'react';
import { ArrowRight, Trophy, Star, Users, Presentation, Settings, Camera, Mic, Play, Award, CheckCircle2, Sparkles } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Portfolio = () => {
  return (
    <div className="w-full bg-brand-cream">
      {/* Hero Header (Light) */}
      <section className="bg-brand-cream py-20 lg:py-28 px-6 md:px-12 relative overflow-hidden border-b border-brand-border">
        <div className="absolute inset-0 bg-[radial-gradient(#4A0A45_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7">
            <span className="badge-pill bg-brand-purpleMuted text-brand-purple border border-brand-purple/20 text-xs font-bold py-1 px-3.5 mb-6">
              // EXPERIENTIAL ARCHIVE
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl leading-[1.0] tracking-tight uppercase text-brand-purple mb-6">
              THE WORK SPEAKS<br />
              FOR ITSELF.
            </h1>
            <p className="font-sans text-brand-textMuted text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
              Dive into our archive of successful live events, corporate activations, and capstone projects designed and executed entirely by our talented students.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-brand-border shadow-card bg-white p-3 group">
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-brand-stone">
                <img 
                  src="/images/course_props_production.png" 
                  alt="Students setting up a live event production" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 left-3 bg-brand-purple/90 backdrop-blur-sm text-white px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider">
                  Live Portfolio
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Capstone Student Projects */}
      <section className="bg-white py-20 lg:py-28 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="FROM CONCEPT TO REALITY"
            title="CAPSTONE PROJECTS."
            supportingText="Final-year projects where student cohorts build an event entirely from scratch. See how they turn theoretical pitch decks into executed reality."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            {/* Project 1 */}
            <div className="academic-card p-6 md:p-8 bg-brand-cream/40">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-brand-border/60">
                <h3 className="font-display font-bold text-xl text-brand-purple">THE 2025 URBAN MUSIC FESTIVAL</h3>
                <span className="badge-pill bg-brand-purpleMuted text-brand-purple text-[10px]">Cohort Execution</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-[11px] font-bold text-brand-purple uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span> The Pitch Deck
                  </div>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden border border-brand-border bg-white relative">
                    <img 
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80" 
                      alt="Pitch Deck" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-brand-teal uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span> The Execution
                  </div>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden border border-brand-border bg-white relative">
                    <img 
                      src="/images/portfolio_music_festival.png" 
                      alt="Live Event" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="academic-card p-6 md:p-8 bg-brand-cream/40">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-brand-border/60">
                <h3 className="font-display font-bold text-xl text-brand-purple">LUXURY DESTINATION WEDDING</h3>
                <span className="badge-pill bg-brand-tealLight text-brand-teal text-[10px]">Luxury Social</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-[11px] font-bold text-brand-purple uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span> Moodboard & Plan
                  </div>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden border border-brand-border bg-white relative">
                    <img 
                      src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&w=600&q=80" 
                      alt="Planning" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-brand-teal uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span> The Execution
                  </div>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden border border-brand-border bg-white relative">
                    <img 
                      src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80" 
                      alt="Wedding Setup" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Industry Internship Spotlights (Light) */}
      <section className="bg-brand-cream py-20 lg:py-28 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <SectionHeader
            eyebrow="OUR STUDENTS IN THE FIELD"
            title="INDUSTRY INTERNSHIPS."
            supportingText="Working on the ground at massive real-world events. See our students wearing crew badges, managing backstage logistics, and operating soundboards at major festivals."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
            {[
              { img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80", label: "Backstage Logistics" },
              { img: "https://images.unsplash.com/photo-1520242739010-44e95bde329e?auto=format&fit=crop&w=600&q=80", label: "Sound Engineering" },
              { img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80", label: "VIP Management" },
              { img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80", label: "Live Crowd Control" }
            ].map((item, idx) => (
              <div key={idx} className="academic-card overflow-hidden p-2.5 bg-white group shadow-subtle">
                <div className="relative rounded-xl overflow-hidden aspect-square bg-brand-stone">
                  <img 
                    src={item.img} 
                    alt={item.label} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/90 via-transparent to-transparent flex items-end p-3">
                    <span className="font-sans font-bold text-[11px] uppercase tracking-wider text-white">
                      {item.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Practical Labs Showcase */}
      <section className="bg-white py-20 lg:py-28 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="IN-CLASS ACTION"
            title="PRACTICAL LABS."
            supportingText="We don't just show finished events; we show the learning process. This is what hands-on education looks like."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="academic-card p-8 group bg-brand-cream/40">
              <div className="w-12 h-12 rounded-xl bg-brand-purpleMuted text-brand-purple flex items-center justify-center mb-5">
                <Settings size={24} className="group-hover:rotate-90 transition-transform duration-500" />
              </div>
              <h3 className="font-display font-bold text-xl text-brand-purple mb-2">FABRICATION & AV LABS</h3>
              <p className="text-xs sm:text-sm font-sans text-brand-textMuted leading-relaxed">
                Students soldering circuits, rigging lights, and testing acoustics.
              </p>
            </div>
            <div className="academic-card p-8 group bg-brand-cream/40">
              <div className="w-12 h-12 rounded-xl bg-brand-tealLight text-brand-teal flex items-center justify-center mb-5">
                <Camera size={24} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-display font-bold text-xl text-brand-purple mb-2">WEDDING DESIGN MODULES</h3>
              <p className="text-xs sm:text-sm font-sans text-brand-textMuted leading-relaxed">
                Hands-on floral arrangements, stage mockups, and fabric draping.
              </p>
            </div>
            <div className="academic-card p-8 group bg-brand-cream/40">
              <div className="w-12 h-12 rounded-xl bg-brand-purpleMuted text-brand-purple flex items-center justify-center mb-5">
                <Presentation size={24} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="font-display font-bold text-xl text-brand-purple mb-2">THE PITCH DECK BOARDROOM</h3>
              <p className="text-xs sm:text-sm font-sans text-brand-textMuted leading-relaxed">
                Students presenting event budgets and logistics plans to industry panels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Alumni Hall of Fame */}
      <section className="bg-brand-cream py-20 lg:py-28 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="PLACEMENT SUCCESS"
            title="ALUMNI HALL OF FAME."
            supportingText="Showcasing incredible events currently being managed by IIEM graduates who are leading the industry."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="academic-card overflow-hidden group bg-white">
              <div className="aspect-[16/10] bg-brand-stone overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80" 
                  alt="Concert" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-brand-textDark px-3 py-1 rounded-md font-bold text-xs flex items-center gap-1.5 shadow-sm">
                  <Star size={13} className="text-brand-purple fill-brand-purple" /> THE 2025 AUTO EXPO
                </div>
              </div>
              <div className="p-6">
                <div className="text-[11px] font-bold tracking-wider text-brand-purple uppercase">Lead Production Manager</div>
                <div className="font-display font-bold text-xl text-brand-purple mt-1">RAHUL T. (IIEM BATCH OF 2022)</div>
              </div>
            </div>

            <div className="academic-card overflow-hidden group bg-white">
              <div className="aspect-[16/10] bg-brand-stone overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80" 
                  alt="Corporate Event" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-brand-textDark px-3 py-1 rounded-md font-bold text-xs flex items-center gap-1.5 shadow-sm">
                  <Star size={13} className="text-brand-teal fill-brand-teal" /> GLOBAL TECH SUMMIT
                </div>
              </div>
              <div className="p-6">
                <div className="text-[11px] font-bold tracking-wider text-brand-purple uppercase">Head of Operations</div>
                <div className="font-display font-bold text-xl text-brand-purple mt-1">SNEHA M. (IIEM BATCH OF 2023)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Campus Fests & In-House */}
      <section className="bg-brand-purple text-white py-20 lg:py-28 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <SectionHeader
            eyebrow="IN-HOUSE PRODUCTIONS"
            title="CAMPUS FESTIVALS."
            darkBg={true}
            align="center"
          />
          <p className="max-w-2xl mx-auto text-brand-cream/80 font-sans mt-2 mb-10 text-sm sm:text-base leading-relaxed">
            IIEM students practice event management every day by throwing the best campus events in the city. From high-energy Freshers' parties to massive cultural fests.
          </p>
          
          <div className="inline-block p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-left max-w-xl shadow-card">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-brand-teal text-white flex items-center justify-center">
                <Play size={18} />
              </div>
              <h3 className="font-display font-bold text-xl text-white">THE SYNERGY FEST 2025</h3>
            </div>
            <p className="font-sans text-xs text-brand-cream/80 leading-relaxed">
              100% Planned, Budgeted, Marketed, and Executed by the 1st Year Cohort.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Masterclasses */}
      <section className="bg-white py-20 lg:py-28 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="INDUSTRY TIES"
            title="GUEST EXPERT SHOWCASES."
            supportingText="Key feedback and masterclass takeaways from visiting event directors."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              { name: "Vikram S.", title: "Celebrity Talent Manager", quote: "The questions these students ask show they are already thinking like professionals." },
              { name: "Priya K.", title: "Luxury Wedding Planner", quote: "I was blown away by the floral mockup presentations in the design module." },
              { name: "Arjun R.", title: "Festival Technical Director", quote: "IIEM is creating a generation of crew members who actually understand safety." }
            ].map((guest, idx) => (
              <div key={idx} className="academic-card p-8 flex flex-col justify-between bg-brand-cream/40">
                <div>
                  <Mic size={22} className="text-brand-purple mb-4" />
                  <p className="font-sans text-xs sm:text-sm text-brand-textMuted italic leading-relaxed mb-6">
                    "{guest.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-brand-border/60">
                  <div className="font-display font-bold text-lg text-brand-purple">{guest.name}</div>
                  <div className="font-sans text-xs font-semibold text-brand-teal uppercase tracking-wider mt-0.5">{guest.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Trophy Cabinet (Light) */}
      <section className="bg-brand-cream py-20 lg:py-28 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="w-14 h-14 rounded-2xl bg-brand-tealLight text-brand-teal flex items-center justify-center mx-auto mb-4">
            <Trophy size={28} />
          </div>
          <SectionHeader
            eyebrow="AWARDS & RECOGNITION"
            title="THE TROPHY CABINET."
            supportingText="Honors and awards earned by student projects and institutional faculty."
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10">
            {["Best Student Event Concept 2024", "National Pitch-Fest Winners", "Excellence in Stage Design", "Top Emerging Event Institute"].map((award, idx) => (
              <div key={idx} className="academic-card p-6 flex flex-col items-center bg-white shadow-subtle">
                <Award size={24} className="text-brand-purple mb-3" />
                <h4 className="font-display font-bold text-base text-brand-purple leading-snug">{award}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-cream py-20 px-6 md:px-12 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-brand-purple uppercase tracking-tight">
            WANT YOUR EVENT STAGED HERE?
          </h2>
          <p className="text-xs sm:text-sm text-brand-textMuted max-w-lg mx-auto font-sans leading-relaxed">
            Apply as an industry partner or submit a project brief to collaborate with IIEM crew members for your next major event.
          </p>
          <div className="pt-4">
            <a
              href="mailto:projects@iiem.edu.in"
              className="px-8 py-4 bg-brand-purple hover:bg-brand-purpleLight text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors inline-block shadow-card"
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
