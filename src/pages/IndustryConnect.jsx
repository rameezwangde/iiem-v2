import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Presentation, GraduationCap, Building, Award, MessageSquare, Flame, CheckCircle2, ChevronRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { industryPartners } from '../data/siteData';

const IndustryConnect = () => {
 return (
 <div className="w-full">
 {/* 1. Hero Header */}
 <section className="bg-brand-cream py-20 px-6 md:px-12 border-b border-brand-textDark/10">
 <div className="max-w-[1400px] mx-auto">
 <div className="max-w-4xl">
 <span className="font-sans text-xs md:text-sm font-bold tracking-[0.25em] text-brand-magenta uppercase block mb-4">
 // RECRUITER & PARTNER INTERACTION
 </span>
 <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.85] tracking-tight uppercase text-brand-purple">
 CONNECTED TO<br />
 <span className="text-brand-magenta">THE REAL</span><br />
 <span className="text-brand-textDark">EVENT WORLD.</span>
 </h1>
 </div>
 </div>
 </section>

 {/* 2. Our Industry Partners */}
 <section className="bg-white py-20 px-6 md:px-12 border-b border-brand-textDark/10">
 <div className="max-w-[1400px] mx-auto">
 <SectionHeader
 eyebrow="NETWORK"
 title="INDUSTRY PARTNERSHIPS."
 />
 <p className="max-w-2xl text-brand-textDark/70 font-sans mb-12 leading-relaxed">
 Institutional collaborations, MoUs, and strategic partnerships with top event management companies, media houses, and production agencies.
 </p>
 
 <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
 {industryPartners.map((partner, idx) => (
 <div key={idx} className="p-4 border border-brand-textDark/10 bg-brand-cream text-center hover:border-brand-purple transition-colors neo-shadow flex items-center justify-center min-h-[100px]">
 <div>
 <div className="font-display text-lg text-brand-purple leading-tight">{partner.name}</div>
 <div className="font-sans text-[9px] text-brand-magenta uppercase tracking-widest font-bold mt-2">
 {partner.type}
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* 3. Expert Sessions & Interaction */}
 <section className="bg-brand-cream py-20 px-6 md:px-12 border-b border-brand-textDark/10">
 <div className="max-w-[1400px] mx-auto">
 <SectionHeader
 eyebrow="KNOWLEDGE TRANSFER"
 title="INDUSTRY INTERACTION."
 />
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
 {[
 { icon: <Presentation size={24}/>, title: "Guest Lectures", desc: "Insights directly from working professionals." },
 { icon: <Briefcase size={24}/>, title: "Expert Sessions", desc: "Deep dives into technical event production." },
 { icon: <Building size={24}/>, title: "Industry Panels", desc: "Debates on current market trends." },
 { icon: <Flame size={24}/>, title: "Leadership Talks", desc: "Visionary advice from agency founders." }
 ].map((item, idx) => (
 <div key={idx} className="p-8 bg-white border border-brand-textDark/15 hover:-translate-y-1 transition-transform group">
 <div className="text-brand-magenta mb-4 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
 <h3 className="font-display text-2xl text-brand-purple mb-2 uppercase">{item.title}</h3>
 <p className="font-sans text-sm text-brand-textDark/70">{item.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* 4 & 5. Industrial Visits & Live Projects (Dark background) */}
 <section className="bg-brand-dark text-brand-cream py-24 px-6 md:px-12">
 <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
 
 {/* Industrial Visits */}
 <div>
 <SectionHeader
 eyebrow="ON-GROUND EXPOSURE"
 title="INDUSTRIAL VISITS."
 darkBg={true}
 />
 <ul className="space-y-4 mt-8">
 {[
 "Company & Agency Visits",
 "Factory and Site Tours",
 "Live Industry Exposure",
 "Behind-the-scenes Learning"
 ].map((item, idx) => (
 <li key={idx} className="flex items-center gap-3 p-4 bg-brand-cream/5 border border-brand-cream/10 hover:border-brand-teal transition-colors">
 <CheckCircle2 size={20} className="text-brand-teal shrink-0" />
 <span className="font-display text-xl text-brand-cream tracking-wide">{item}</span>
 </li>
 ))}
 </ul>
 </div>

 {/* Live Projects */}
 <div>
 <SectionHeader
 eyebrow="PRACTICAL APPLICATION"
 title="LIVE PROJECTS."
 darkBg={true}
 />
 <ul className="space-y-4 mt-8">
 {[
 "Real-world Business Problems",
 "Client-based Projects",
 "Comprehensive Case Studies",
 "Project Showcases and Outcomes"
 ].map((item, idx) => (
 <li key={idx} className="flex items-center gap-3 p-4 bg-brand-cream/5 border border-brand-cream/10 hover:border-brand-magenta transition-colors">
 <CheckCircle2 size={20} className="text-brand-magenta shrink-0" />
 <span className="font-display text-xl text-brand-cream tracking-wide">{item}</span>
 </li>
 ))}
 </ul>
 </div>

 </div>
 </section>

 {/* 6 & 7. Internships & Placements */}
 <section className="bg-white py-24 px-6 md:px-12 border-b border-brand-textDark/10 relative overflow-hidden">
 {/* Decorative Graphic */}
 <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>

 <div className="max-w-[1400px] mx-auto relative z-10">
 <SectionHeader
 eyebrow="CAREER PATHWAYS"
 title="INTERNSHIPS & PLACEMENTS."
 />
 
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
 {/* Internships & Training */}
 <div className="lg:col-span-5 bg-brand-cream p-8 border border-brand-textDark/15 neo-shadow-teal">
 <h3 className="font-display text-3xl text-brand-purple mb-6 border-b border-brand-textDark/10 pb-4">INTERNSHIPS & TRAINING</h3>
 <ul className="space-y-4">
 {["Internship opportunities", "On-the-job training", "Industry projects", "Mentorship programs"].map((item, idx) => (
 <li key={idx} className="flex items-center gap-3 group">
 <ChevronRight size={16} className="text-brand-teal group-hover:translate-x-1 transition-transform" />
 <span className="font-sans font-semibold text-sm uppercase tracking-wider text-brand-textDark/80">{item}</span>
 </li>
 ))}
 </ul>
 </div>

 {/* Placements & Career Connect */}
 <div className="lg:col-span-7 bg-brand-dark p-8 border border-brand-textDark/15 neo-shadow-magenta text-brand-cream">
 <h3 className="font-display text-3xl text-brand-teal mb-6 border-b border-brand-cream/10 pb-4">PLACEMENTS & CAREER CONNECT</h3>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
 {["Recruiting companies", "Placement drives", "Career fairs", "Interview preparation", "Alumni-industry network"].map((item, idx) => (
 <li key={idx} className="flex items-center gap-3 group list-none">
 <ChevronRight size={16} className="text-brand-magenta group-hover:translate-x-1 transition-transform" />
 <span className="font-sans font-semibold text-sm uppercase tracking-wider text-brand-cream/90">{item}</span>
 </li>
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* 8. Extra Details: Skills, Networking, Achievements */}
 <section className="bg-brand-cream py-20 px-6 md:px-12 border-b border-brand-textDark/10">
 <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
 <div className="p-8 bg-white border border-brand-textDark/10 hover:border-brand-purple transition-colors group">
 <h4 className="font-display text-2xl text-brand-purple mb-4 group-hover:text-brand-magenta transition-colors">SKILL DEVELOPMENT</h4>
 <p className="font-sans text-sm text-brand-textDark/70 mb-4 leading-relaxed">Industry-oriented workshops, technical training, certifications, and soft skills development.</p>
 </div>
 <div className="p-8 bg-white border border-brand-textDark/10 hover:border-brand-purple transition-colors group">
 <h4 className="font-display text-2xl text-brand-purple mb-4 group-hover:text-brand-teal transition-colors">NETWORKING</h4>
 <p className="font-sans text-sm text-brand-textDark/70 mb-4 leading-relaxed">Industry networking events, alumni meets, business forums, and student-industry mixers.</p>
 </div>
 <div className="p-8 bg-white border border-brand-textDark/10 hover:border-brand-purple transition-colors group">
 <h4 className="font-display text-2xl text-brand-purple mb-4 group-hover:text-brand-magenta transition-colors">ACHIEVEMENTS</h4>
 <p className="font-sans text-sm text-brand-textDark/70 mb-4 leading-relaxed">Student placements, awards and recognitions, successful internships, and industry-sponsored projects.</p>
 </div>
 </div>
 </section>

 {/* 9. Industry Testimonials */}
 <section className="bg-white py-24 px-6 md:px-12">
 <div className="max-w-[1400px] mx-auto">
 <SectionHeader
 eyebrow="INDUSTRY VOICES"
 title="WHAT THE EXPERTS SAY."
 />
 
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
 {[
 { quote: "IIEM students come with a practical understanding of ground realities. They don't just know the theory; they know how to run a show.", title: "Recruiter Feedback", author: "National Production Agency" },
 { quote: "The level of technical training and crisis management skills we see in interns from IIEM makes them our first choice for hiring.", title: "Expert Recommendation", author: "Technical Director" },
 { quote: "Our MoU with IIEM has provided us with a steady pipeline of highly competent event managers ready to take on leadership roles.", title: "Partner Quote", author: "Event Management Firm" }
 ].map((test, idx) => (
 <div key={idx} className="relative p-8 border border-brand-textDark/15 bg-brand-cream hover:-translate-y-1 transition-transform">
 <MessageSquare size={32} className="text-brand-magenta/20 absolute top-6 right-6" />
 <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-brand-magenta mb-4">{test.title}</h4>
 <p className="font-sans text-base text-brand-textDark/80 italic mb-6 leading-relaxed">"{test.quote}"</p>
 <div className="font-display text-xl text-brand-purple">— {test.author}</div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* 10. CTA */}
 <section className="bg-brand-purple text-brand-cream py-20 px-6 md:px-12 text-center relative overflow-hidden">
 <div className="max-w-2xl mx-auto space-y-6 relative z-10">
 <h2 className="font-display text-4xl sm:text-6xl text-white">HIRE FROM IIEM</h2>
 <p className="text-sm text-brand-cream/80 max-w-lg mx-auto font-sans leading-relaxed">
 Are you looking for skilled event coordinators, backstage production crew, or digital brand planners? Get in touch with our placement cell.
 </p>
 <div className="pt-4">
 <Link
 to="/contact"
 className="px-6 py-4 bg-brand-magenta text-white hover:bg-brand-dark transition-all duration-300 font-display text-lg tracking-wider inline-block neo-shadow-teal"
 >
 CONTACT PLACEMENT CELL →
 </Link>
 </div>
 </div>
 </section>

 </div>
 );
};

export default IndustryConnect;
