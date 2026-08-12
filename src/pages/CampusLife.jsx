import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, BookOpen, Users, Lightbulb, PartyPopper, Briefcase, Building, MessageSquare, Camera } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const CampusLife = () => {
 return (
 <div className="w-full">
  {/* Hero Header */}
  <section className="bg-brand-cream py-20 px-6 md:px-12 border-b border-brand-textDark/10 relative overflow-hidden">
    <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
      <div className="max-w-2xl">
        <span className="font-sans text-xs md:text-sm font-bold tracking-[0.25em] text-brand-magenta uppercase block mb-4">
          // ON CAMPUS STORY
        </span>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.85] tracking-tight uppercase text-brand-purple">
          THIS IS WHERE<br />
          <span className="text-brand-magenta">IDEAS COME</span><br />
          <span className="text-brand-textDark">ALIVE.</span>
        </h1>
        <p className="font-sans text-brand-textDark/80 text-lg mt-6 leading-relaxed">
          Experience the energy of a campus built for creators. From hands-on workshops to vibrant student communities, every corner of IIEM is designed to inspire your next big event.
        </p>
      </div>

      <div className="relative w-full aspect-video lg:aspect-[4/3] bg-brand-purple/5 neo-shadow-teal border border-brand-textDark/15 overflow-hidden group lg:ml-auto max-w-xl">
        <img 
          src="/images/hero_students_bright.png" 
          alt="Vibrant sunny day at IIEM campus" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-brand-teal/10 pointer-events-none"></div>
        <div className="absolute bottom-4 left-4 bg-brand-magenta text-brand-cream px-3 py-1 font-display text-sm tracking-wider uppercase">
          Campus Energy
        </div>
      </div>
    </div>
  </section>

 {/* The Foundation Grid */}
 <section className="bg-white py-20 px-6 md:px-12 border-b border-brand-textDark/10">
 <div className="max-w-[1400px] mx-auto">
 <SectionHeader
 eyebrow="THE FOUNDATION"
 title="A SPACE DESIGNED FOR CREATORS."
 />

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
 {/* Campus Environment */}
 <div className="p-8 border border-brand-textDark/15 bg-brand-cream hover:-translate-y-2 transition-transform neo-shadow-purple group">
 <MapPin size={32} className="text-brand-magenta mb-6 group-hover:scale-110 transition-transform" />
 <h3 className="font-display text-2xl text-brand-purple mb-3 uppercase">Campus Environment</h3>
 <p className="font-sans text-sm text-brand-textDark/80 leading-relaxed">
 Experience a vibrant atmosphere across our modern classrooms, creative labs, extensive library, and collaborative common areas designed specifically for event professionals.
 </p>
 </div>

 {/* Facilities */}
 <div className="p-8 border border-brand-textDark/15 bg-brand-cream hover:-translate-y-2 transition-transform neo-shadow-teal group">
 <Building size={32} className="text-brand-teal mb-6 group-hover:scale-110 transition-transform" />
 <h3 className="font-display text-2xl text-brand-purple mb-3 uppercase">Facilities</h3>
 <p className="font-sans text-sm text-brand-textDark/80 leading-relaxed">
 Gain access to cutting-edge labs, state-of-the-art technology infrastructure, and relaxing recreational spaces available to all students.
 </p>
 </div>

 {/* Learning & Training */}
 <div className="p-8 border border-brand-textDark/15 bg-brand-cream hover:-translate-y-2 transition-transform neo-shadow-magenta group">
 <BookOpen size={32} className="text-brand-purple mb-6 group-hover:scale-110 transition-transform" />
 <h3 className="font-display text-2xl text-brand-purple mb-3 uppercase">Learning & Training</h3>
 <p className="font-sans text-sm text-brand-textDark/80 leading-relaxed">
 Go beyond the textbooks with immersive workshops, intensive practical sessions, inspiring guest lectures, seminars, and direct industry interactions.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* The Action Section (Dark) */}
 <section className="bg-brand-dark text-brand-cream py-24 px-6 md:px-12 relative overflow-hidden">
 {/* Decorative circle */}
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-magenta/5 rounded-full blur-3xl pointer-events-none"></div>
 
 <div className="max-w-[1400px] mx-auto relative z-10">
 <SectionHeader
 eyebrow="THE ACTION"
 title="NEVER A DULL MOMENT."
 darkBg={true}
 />

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
 {/* Student Activities */}
 <div className="p-8 border border-brand-cream/10 bg-brand-cream/5 hover:border-brand-magenta transition-colors flex gap-6 items-start group">
 <div className="p-4 bg-brand-magenta/10 group-hover:bg-brand-magenta/20 transition-colors shrink-0">
 <Users size={28} className="text-brand-magenta" />
 </div>
 <div>
 <h3 className="font-display text-2xl text-brand-cream mb-2 uppercase">Student Activities</h3>
 <p className="font-sans text-sm text-brand-cream/70 leading-relaxed">
 Join specialized clubs, compete in intense competitions, participate in cultural activities, sports, and lead your own student-driven events.
 </p>
 </div>
 </div>

 {/* Projects & Innovation */}
 <div className="p-8 border border-brand-cream/10 bg-brand-cream/5 hover:border-brand-teal transition-colors flex gap-6 items-start group">
 <div className="p-4 bg-brand-teal/10 group-hover:bg-brand-teal/20 transition-colors shrink-0">
 <Lightbulb size={28} className="text-brand-teal" />
 </div>
 <div>
 <h3 className="font-display text-2xl text-brand-cream mb-2 uppercase">Projects & Innovation</h3>
 <p className="font-sans text-sm text-brand-cream/70 leading-relaxed">
 Engage in hands-on projects, live demonstrations, unique exhibitions, and forward-thinking innovation activities.
 </p>
 </div>
 </div>

 {/* Events & Celebrations */}
 <div className="p-8 border border-brand-cream/10 bg-brand-cream/5 hover:border-brand-magenta transition-colors flex gap-6 items-start group">
 <div className="p-4 bg-brand-magenta/10 group-hover:bg-brand-magenta/20 transition-colors shrink-0">
 <PartyPopper size={28} className="text-brand-magenta" />
 </div>
 <div>
 <h3 className="font-display text-2xl text-brand-cream mb-2 uppercase">Events & Celebrations</h3>
 <p className="font-sans text-sm text-brand-cream/70 leading-relaxed">
 Experience grand festivals, massive annual events, energetic orientation programs, award ceremonies, and unforgettable special occasions.
 </p>
 </div>
 </div>

 {/* Industry Exposure */}
 <div className="p-8 border border-brand-cream/10 bg-brand-cream/5 hover:border-brand-teal transition-colors flex gap-6 items-start group">
 <div className="p-4 bg-brand-teal/10 group-hover:bg-brand-teal/20 transition-colors shrink-0">
 <Briefcase size={28} className="text-brand-teal" />
 </div>
 <div>
 <h3 className="font-display text-2xl text-brand-cream mb-2 uppercase">Industry Exposure</h3>
 <p className="font-sans text-sm text-brand-cream/70 leading-relaxed">
 Step outside with industrial visits, prestigious internships, high-level company interactions, and targeted career-focused sessions.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* The Network & Voices */}
 <section className="bg-brand-cream py-20 px-6 md:px-12 border-b border-brand-textDark/10">
 <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
 
 {/* Student Community */}
 <div>
 <SectionHeader
 eyebrow="THE NETWORK"
 title="STUDENT COMMUNITY."
 />
 <div className="p-8 border-l-4 border-brand-purple bg-white neo-shadow-teal mt-8">
 <p className="font-sans text-lg text-brand-textDark/85 leading-relaxed italic">
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
 <div className="grid gap-6 mt-8">
 <div className="p-6 border border-brand-textDark/15 bg-white relative hover:-translate-y-1 transition-transform">
 <MessageSquare size={24} className="text-brand-magenta absolute top-6 right-6 opacity-20" />
 <p className="font-sans text-sm text-brand-textDark/80 italic mb-4 pr-8">
 "The hands-on practical sessions and the constant hum of creativity on campus made every day exciting. I felt like I was already working in an agency!"
 </p>
 <div className="font-display text-brand-purple text-lg tracking-wide">— Final Year Student</div>
 </div>
 <div className="p-6 border border-brand-textDark/15 bg-white relative hover:-translate-y-1 transition-transform">
 <MessageSquare size={24} className="text-brand-teal absolute top-6 right-6 opacity-20" />
 <p className="font-sans text-sm text-brand-textDark/80 italic mb-4 pr-8">
 "From organizing our own cultural fests to interning at massive corporate shows, the exposure here is unmatched."
 </p>
 <div className="font-display text-brand-purple text-lg tracking-wide">— Event Operations Alumnus</div>
 </div>
 </div>
 </div>

 </div>
 </section>

 {/* Gallery Showcase */}
 <section className="bg-white py-20 px-6 md:px-12">
 <div className="max-w-[1400px] mx-auto">
 <SectionHeader
 eyebrow="MEMORIES & HIGHLIGHTS"
 title="EVERYDAY CAMPUS MOMENTS."
 />

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
 {[
 { img: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=600&q=80', label: 'Creative Planning' },
 { img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80', label: 'Live Events' },
 { img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80', label: 'Workshops' },
 { img: '/images/about_fabrication_setup.png', label: 'Backstage Operations' },
 { img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80', label: 'Tech Rehearsals' },
 { img: 'https://images.unsplash.com/photo-1520242739010-44e95bde329e?auto=format&fit=crop&w=600&q=80', label: 'Peer Networking' }
 ].map((item, idx) => (
 <div key={idx} className="group relative overflow-hidden aspect-[4/3] border border-brand-textDark/15 bg-brand-purple/5">
 <img
 src={item.img}
 alt={item.label}
 className="w-full h-full object-cover group-hover:-0 transition-all duration-700 hover:scale-110"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
 <span className="font-display text-2xl text-brand-cream flex items-center gap-2">
 <Camera size={20} className="text-brand-magenta" /> {item.label}
 </span>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* CTA Admission */}
 <section className="bg-brand-purple text-brand-cream py-20 px-6 md:px-12 text-center">
 <div className="max-w-2xl mx-auto space-y-6">
 <h2 className="font-display text-4xl sm:text-6xl text-white">COME VISIT THE CAMPUS</h2>
 <p className="text-sm text-brand-cream/80 max-w-lg mx-auto font-sans leading-relaxed">
 Schedule a physical walk-through with our career counselors. See the fabrication labs, sound rigs, and corporate pitch boardrooms in action.
 </p>
 <div className="pt-4">
 <Link
 to="/contact"
 className="px-6 py-4 bg-brand-magenta text-white hover:bg-brand-dark transition-all duration-300 font-display text-lg tracking-wider inline-block neo-shadow-teal"
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
