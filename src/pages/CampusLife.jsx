import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, BookOpen, Users, Lightbulb, PartyPopper, Briefcase, Building, MessageSquare, Camera, Sparkles, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const CampusLife = () => {
  return (
    <div className="w-full bg-brand-cream">
      {/* Hero Header (Light) */}
      <section className="bg-brand-cream py-20 lg:py-28 px-6 md:px-12 relative overflow-hidden border-b border-brand-border">
        <div className="absolute inset-0 bg-[radial-gradient(#4A0A45_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7">
            <span className="badge-pill bg-brand-purpleMuted text-brand-purple border border-brand-purple/20 text-xs font-bold py-1 px-3.5 mb-6">
              // ON CAMPUS STORY
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl leading-[1.0] tracking-tight uppercase text-brand-purple mb-6">
              THIS IS WHERE <br />
              IDEAS COME<br />
              ALIVE.
            </h1>
            <p className="font-sans text-brand-textMuted text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
              Experience the energy of a campus built for creators. From hands-on workshops to vibrant student communities, every corner of IIEM is designed to inspire your next big event.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-brand-border shadow-card bg-white p-3 group">
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-brand-stone">
                <img 
                  src="/images/hero_students_bright.png" 
                  alt="Vibrant sunny day at IIEM campus" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 left-3 bg-brand-purple/90 backdrop-blur-sm text-white px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider">
                  Campus Energy
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Foundation Grid */}
      <section className="bg-white py-20 lg:py-28 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="THE FOUNDATION"
            title="A SPACE DESIGNED FOR CREATORS."
            supportingText="Infrastructure purposefully tailored for staging, fabrication, audio-visual testing, and event strategy."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {/* Campus Environment */}
            <div className="academic-card p-8 group bg-brand-cream/40">
              <div className="w-12 h-12 rounded-xl bg-brand-purpleMuted text-brand-purple flex items-center justify-center mb-6">
                <MapPin size={24} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-display font-bold text-xl text-brand-purple mb-3 uppercase">Campus Environment</h3>
              <p className="font-sans text-xs sm:text-sm text-brand-textMuted leading-relaxed">
                Experience a vibrant atmosphere across our modern classrooms, creative labs, extensive library, and collaborative common areas designed specifically for event professionals.
              </p>
            </div>

            {/* Facilities */}
            <div className="academic-card p-8 group bg-brand-cream/40">
              <div className="w-12 h-12 rounded-xl bg-brand-tealLight text-brand-teal flex items-center justify-center mb-6">
                <Building size={24} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-display font-bold text-xl text-brand-purple mb-3 uppercase">Facilities</h3>
              <p className="font-sans text-xs sm:text-sm text-brand-textMuted leading-relaxed">
                Gain access to cutting-edge labs, state-of-the-art technology infrastructure, and relaxing recreational spaces available to all students.
              </p>
            </div>

            {/* Learning & Training */}
            <div className="academic-card p-8 group bg-brand-cream/40">
              <div className="w-12 h-12 rounded-xl bg-brand-purpleMuted text-brand-purple flex items-center justify-center mb-6">
                <BookOpen size={24} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-display font-bold text-xl text-brand-purple mb-3 uppercase">Learning & Training</h3>
              <p className="font-sans text-xs sm:text-sm text-brand-textMuted leading-relaxed">
                Go beyond the textbooks with immersive workshops, intensive practical sessions, inspiring guest lectures, seminars, and direct industry interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Action Section (Light) */}
      <section className="bg-brand-cream py-20 lg:py-28 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <SectionHeader
            eyebrow="THE ACTION"
            title="NEVER A DULL MOMENT."
            supportingText="Active student communities, competitive pitch fests, and live event deployments."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {/* Student Activities */}
            <div className="academic-card p-8 bg-white flex gap-5 items-start">
              <div className="w-12 h-12 rounded-xl bg-brand-tealLight text-brand-teal flex items-center justify-center shrink-0">
                <Users size={24} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-brand-purple mb-2 uppercase">Student Activities</h3>
                <p className="font-sans text-xs sm:text-sm text-brand-textMuted leading-relaxed">
                  Join specialized clubs, compete in intense competitions, participate in cultural activities, sports, and lead your own student-driven events.
                </p>
              </div>
            </div>

            {/* Projects & Innovation */}
            <div className="academic-card p-8 bg-white flex gap-5 items-start">
              <div className="w-12 h-12 rounded-xl bg-brand-purpleMuted text-brand-purple flex items-center justify-center shrink-0">
                <Lightbulb size={24} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-brand-purple mb-2 uppercase">Projects & Innovation</h3>
                <p className="font-sans text-xs sm:text-sm text-brand-textMuted leading-relaxed">
                  Engage in hands-on projects, live demonstrations, unique exhibitions, and forward-thinking innovation activities.
                </p>
              </div>
            </div>

            {/* Events & Celebrations */}
            <div className="academic-card p-8 bg-white flex gap-5 items-start">
              <div className="w-12 h-12 rounded-xl bg-brand-purpleMuted text-brand-purple flex items-center justify-center shrink-0">
                <PartyPopper size={24} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-brand-purple mb-2 uppercase">Events & Celebrations</h3>
                <p className="font-sans text-xs sm:text-sm text-brand-textMuted leading-relaxed">
                  Experience grand festivals, massive annual events, energetic orientation programs, award ceremonies, and unforgettable special occasions.
                </p>
              </div>
            </div>

            {/* Industry Exposure */}
            <div className="academic-card p-8 bg-white flex gap-5 items-start">
              <div className="w-12 h-12 rounded-xl bg-brand-tealLight text-brand-teal flex items-center justify-center shrink-0">
                <Briefcase size={24} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-brand-purple mb-2 uppercase">Industry Exposure</h3>
                <p className="font-sans text-xs sm:text-sm text-brand-textMuted leading-relaxed">
                  Step outside with industrial visits, prestigious internships, high-level company interactions, and targeted career-focused sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Network & Voices */}
      <section className="bg-white py-20 lg:py-28 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Student Community */}
          <div>
            <SectionHeader
              eyebrow="THE NETWORK"
              title="STUDENT COMMUNITY."
            />
            <div className="academic-card p-8 bg-brand-cream/40 border-l-4 border-l-brand-purple shadow-subtle mt-6">
              <p className="font-sans text-base sm:text-lg text-brand-textDark leading-relaxed italic">
                "Our community thrives on teamwork, peer learning, deep networking, and seamless collaboration. When you join IIEM, you aren't just joining a class—you are joining a lifelong network of future event leaders."
              </p>
            </div>
          </div>

          {/* Student Voices */}
          <div>
            <SectionHeader
              eyebrow="TESTIMONIALS"
              title="STUDENT VOICES."
            />
            <div className="grid gap-4 mt-6">
              <div className="academic-card p-6 bg-brand-cream/40 relative">
                <MessageSquare size={22} className="text-brand-purple/20 absolute top-6 right-6" />
                <p className="font-sans text-xs sm:text-sm text-brand-textMuted italic mb-4 pr-8 leading-relaxed">
                  "The hands-on practical sessions and the constant hum of creativity on campus made every day exciting. I felt like I was already working in an agency!"
                </p>
                <div className="font-display font-bold text-brand-purple text-base tracking-wide">— Final Year Student</div>
              </div>
              <div className="academic-card p-6 bg-brand-cream/40 relative">
                <MessageSquare size={22} className="text-brand-teal/20 absolute top-6 right-6" />
                <p className="font-sans text-xs sm:text-sm text-brand-textMuted italic mb-4 pr-8 leading-relaxed">
                  "From organizing our own cultural fests to interning at massive corporate shows, the exposure here is unmatched."
                </p>
                <div className="font-display font-bold text-brand-purple text-base tracking-wide">— Event Operations Alumnus</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="bg-brand-cream py-20 lg:py-28 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="MEMORIES & HIGHLIGHTS"
            title="EVERYDAY CAMPUS MOMENTS."
            supportingText="Glimpses from regular studio sessions, technical rehearsals, and cohort planning meetings."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {[
              { img: '/images/about_mentor_office.png', label: 'Creative Planning' },
              { img: '/images/campus_fabrication.png', label: 'Live Events' },
              { img: '/images/course_props_production.png', label: 'Workshops' },
              { img: '/images/about_fabrication_setup.png', label: 'Backstage Operations' },
              { img: '/images/campus_soundcheck.png', label: 'Tech Rehearsals' },
              { img: '/images/campus_brainstorming.png', label: 'Peer Networking' }
            ].map((item, idx) => (
              <div key={idx} className="academic-card overflow-hidden group bg-white">
                <div className="relative overflow-hidden aspect-[4/3] bg-brand-stone">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <span className="font-display font-bold text-lg text-white flex items-center gap-2">
                      <Camera size={18} className="text-brand-teal" /> {item.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Admission */}
      <section className="bg-brand-purple text-white py-20 px-6 md:px-12 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            COME VISIT THE CAMPUS
          </h2>
          <p className="text-xs sm:text-sm text-brand-cream/80 max-w-lg mx-auto font-sans leading-relaxed">
            Schedule a physical walk-through with our career counselors. See the fabrication labs, sound rigs, and corporate pitch boardrooms in action.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-brand-purple hover:bg-brand-cream rounded-xl font-bold text-xs uppercase tracking-wider transition-colors inline-block shadow-card"
            >
              BOOK CAMPUS TOUR NOW →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusLife;
