import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, Clock, Award, BookOpen, GraduationCap, Compass, HelpCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { programsData } from '../data/siteData';

const Programs = () => {
 const { hash } = useLocation();
 const [activeTab, setActiveTab] = useState(programsData[0].id);

 // Set active program based on URL hash if provided
 useEffect(() => {
 if (hash) {
 const cleanHash = hash.replace('#', '');
 const programExists = programsData.some((p) => p.id === cleanHash);
 if (programExists) {
 setActiveTab(cleanHash);
 const element = document.getElementById(cleanHash);
 if (element) {
 element.scrollIntoView({ behavior: 'smooth' });
 }
 }
 }
 }, [hash]);

 const selectedProgram = programsData.find((p) => p.id === activeTab) || programsData[0];

 return (
 <div className="w-full">
 {/* Hero Header */}
 <section className="bg-brand-cream py-20 px-6 md:px-12 border-b border-brand-textDark/10">
 <div className="max-w-[1400px] mx-auto">
 <div className="max-w-4xl">
 <span className="font-sans text-xs md:text-sm font-bold tracking-[0.25em] text-brand-magenta uppercase block mb-4">
 // IIEM CURRICULUM
 </span>
 <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.85] tracking-tight uppercase text-brand-purple">
 FIND YOUR<br />
 <span className="text-brand-magenta">PLACE IN</span><br />
 <span className="text-brand-textDark">THE INDUSTRY.</span>
 </h1>
 </div>
 </div>
 </section>

 {/* Program Selector Tabs - Editorial Layout */}
 <section className="bg-brand-cream py-12 px-6 md:px-12 border-b border-brand-textDark/10 sticky top-[84px] md:top-[96px] z-30 shadow-sm bg-brand-cream/95 backdrop-blur-md">
 <div className="max-w-[1400px] mx-auto overflow-x-auto no-scrollbar flex border-b border-brand-textDark/10">
 {programsData.map((prog) => (
 <button
 key={prog.id}
 onClick={() => {
 setActiveTab(prog.id);
 // Update URL hash without reload
 window.history.pushState(null, '', `#${prog.id}`);
 }}
 className={`px-6 py-4 font-display text-xl sm:text-2xl whitespace-nowrap border-b-4 transition-all duration-300 ${
 activeTab === prog.id
 ? 'border-brand-magenta text-brand-purple'
 : 'border-transparent text-brand-textDark/60 hover:text-brand-textDark'
 }`}
 >
 {prog.title}
 </button>
 ))}
 </div>
 </section>

 {/* Main Details View */}
 <section className="bg-brand-cream py-20 px-6 md:px-12">
 <div className="max-w-[1400px] mx-auto">
 <div id={selectedProgram.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 scroll-mt-36">
 
 {/* Left overview & stats */}
 <div className="lg:col-span-7 space-y-8 lg:sticky lg:top-[180px] self-start">
 <div>
 <span className="text-xs font-bold text-brand-magenta uppercase tracking-widest font-sans block mb-2">
 COURSE ID // {selectedProgram.num}
 </span>
 <h2 className="font-display text-4xl sm:text-6xl text-brand-purple leading-tight">
 {selectedProgram.title}
 </h2>
 <p className="font-sans text-brand-textDark/80 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
 {selectedProgram.overview}
 </p>
 </div>

 {/* Stats Block (Duration & Eligibility) */}
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-brand-textDark/10">
 <div className="flex gap-4 items-start p-4 border border-brand-textDark/10 bg-brand-cream/50">
 <Clock size={20} className="text-brand-magenta mt-1 shrink-0" />
 <div>
 <div className="font-display text-lg text-brand-purple">DURATION</div>
 <div className="text-xs text-brand-textDark/70 font-sans mt-0.5">{selectedProgram.duration}</div>
 </div>
 </div>
 <div className="flex gap-4 items-start p-4 border border-brand-textDark/10 bg-brand-cream/50">
 <Award size={20} className="text-brand-teal mt-1 shrink-0" />
 <div>
 <div className="font-display text-lg text-brand-purple">ELIGIBILITY</div>
 <div className="text-xs text-brand-textDark/70 font-sans mt-0.5">{selectedProgram.eligibility}</div>
 </div>
 </div>
 </div>

 {/* Practical Components */}
 <div className="space-y-4 pt-6 border-t border-brand-textDark/10">
 <div className="flex gap-2 items-center text-brand-purple font-display text-2xl uppercase tracking-wide">
 <Compass size={20} className="text-brand-teal" /> PRACTICAL EXPERIENCE & HOURS
 </div>
 <p className="text-xs sm:text-sm text-brand-textDark/80 font-sans leading-relaxed">
 {selectedProgram.practicalExperience}
 </p>
 </div>

 {/* Career Opportunities */}
 <div className="space-y-4 pt-6 border-t border-brand-textDark/10">
 <div className="flex gap-2 items-center text-brand-purple font-display text-2xl uppercase tracking-wide">
 <GraduationCap size={20} className="text-brand-magenta" /> CAREER ROLES & PATHWAYS
 </div>
 <p className="text-xs sm:text-sm text-brand-textDark/85 font-sans leading-relaxed font-semibold">
 {selectedProgram.careerOpportunities}
 </p>
 </div>
 </div>

 {/* Right curriculum block */}
 <div className="lg:col-span-5">
 <div className="p-8 border border-brand-textDark/15 bg-brand-dark text-brand-cream neo-shadow-purple">
 <div className="flex gap-2 items-center mb-6">
 <BookOpen size={20} className="text-brand-teal" />
 <span className="font-display text-2xl tracking-wider">MODULE CURRICULUM</span>
 </div>

 <ol className="space-y-4 text-brand-cream/80 text-xs sm:text-sm font-sans">
 {selectedProgram.curriculum.map((module, idx) => (
 <li key={idx} className="flex gap-3 pb-3 border-b border-brand-cream/10">
 <span className="font-semibold text-brand-magenta">{String(idx + 1).padStart(2, '0')}.</span>
 {typeof module === 'string' ? (
 <span>{module}</span>
 ) : (
 <div>
 <span className="block font-bold text-white mb-2">{module.topic}</span>
 <ul className="list-disc pl-4 space-y-1 text-brand-cream/70">
 {module.details.map((detail, dIdx) => (
 <li key={dIdx}>{detail}</li>
 ))}
 </ul>
 </div>
 )}
 </li>
 ))}
 </ol>

 <div className="mt-8 pt-6 border-t border-brand-cream/10">
 <div className="font-display text-xs text-brand-teal tracking-widest uppercase mb-2">INDUSTRY EXPOSURE</div>
 <p className="text-[11px] text-brand-cream/60 leading-relaxed font-sans">
 {selectedProgram.industryExposure}
 </p>
 </div>

 <div className="mt-8">
 <Link
 to="/admissions"
 className="w-full text-center py-4 bg-brand-magenta text-white font-display text-lg hover:bg-brand-purple transition-all duration-300 block"
 >
 APPLY FOR THIS PROGRAM →
 </Link>
 </div>
 </div>
 </div>

 </div>
 </div>
 </section>

 {/* Reusable comparison view (Dark background) */}
 <section className="bg-brand-dark text-brand-cream py-20 px-6 md:px-12">
 <div className="max-w-[1400px] mx-auto">
 <SectionHeader
 eyebrow="AT A GLANCE"
 title="COMPARE ALL SPECIFICATIONS."
 darkBg={true}
 />

 <div className="overflow-x-auto mt-12 border border-brand-cream/15">
 <table className="w-full text-left font-sans text-sm min-w-[700px]">
 <thead>
 <tr className="bg-brand-purple/20 border-b border-brand-cream/15 text-brand-teal font-display text-lg tracking-wider">
 <th className="p-4">PROGRAM</th>
 <th className="p-4">DURATION</th>
 <th className="p-4">PRACTICAL FOCUS</th>
 <th className="p-4">KEY OUTCOME</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-brand-cream/10 text-brand-cream/80">
 {programsData.map((prog) => (
 <tr key={prog.id} className="hover:bg-brand-cream/5 transition-colors">
 <td className="p-4 font-semibold text-brand-cream">{prog.title}</td>
 <td className="p-4">{prog.duration}</td>
 <td className="p-4 text-xs max-w-xs">{prog.practicalExperience}</td>
 <td className="p-4 text-xs font-semibold text-brand-magenta">{prog.careerOpportunities.split(',')[0]}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 </section>
 </div>
 );
};

export default Programs;
