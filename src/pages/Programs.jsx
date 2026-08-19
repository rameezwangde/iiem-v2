import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, Clock, Award, BookOpen, GraduationCap, Compass, HelpCircle, CheckCircle2, ChevronRight } from 'lucide-react';
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
    <div className="w-full bg-brand-cream">
      {/* Hero Header (Light) */}
      <section className="bg-brand-cream pt-16 pb-8 px-6 md:px-12 relative overflow-hidden border-b border-brand-border text-center">
        <div className="absolute inset-0 bg-[radial-gradient(#4A0A45_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="max-w-[800px] mx-auto w-full flex flex-col items-center justify-center relative z-10">
          <span className="badge-pill bg-brand-purpleMuted text-brand-purple border border-brand-purple/20 text-xs font-bold py-1 px-3.5 mb-6">
            // IIEM CURRICULUM
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight uppercase text-brand-purple mb-6">
            FIND YOUR PLACE IN<br />
            THE INDUSTRY.
          </h1>
          <p className="font-sans text-brand-textMuted text-base sm:text-lg md:text-xl leading-relaxed">
            Explore specialized programs designed by active industry professionals. From live entertainment to technical stage production, your career starts here.
          </p>
        </div>
      </section>

      {/* Program Selector Tabs - Sticky Institutional Navigation */}
      <section className="bg-white/95 backdrop-blur-md py-4 px-6 md:px-12 border-b border-brand-border sticky top-[72px] md:top-[80px] z-30 shadow-subtle">
        <div className="max-w-[1400px] mx-auto overflow-x-auto no-scrollbar flex gap-2">
          {programsData.map((prog) => {
            const isSelected = activeTab === prog.id;
            return (
              <button
                key={prog.id}
                onClick={() => {
                  setActiveTab(prog.id);
                  window.history.pushState(null, '', `#${prog.id}`);
                }}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 flex items-center gap-2 shrink-0 ${
                  isSelected
                    ? 'bg-brand-purple text-white shadow-sm'
                    : 'bg-brand-stone/60 text-brand-textDark/80 hover:bg-brand-stone hover:text-brand-purple'
                }`}
              >
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-black/5 text-brand-purple'
                }`}>
                  {prog.num}
                </span>
                <span>{prog.title}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Program Details View */}
      <section className="bg-brand-cream py-16 lg:py-24 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <div id={selectedProgram.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 scroll-mt-36">
            
            {/* Left overview & details */}
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white p-8 rounded-2xl border border-brand-border shadow-card">
                <span className="badge-pill bg-brand-purpleMuted text-brand-purple text-[11px] font-mono font-bold mb-3">
                  COURSE ID // {selectedProgram.num}
                </span>
                <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-purple leading-tight tracking-tight">
                  {selectedProgram.title}
                </h2>
                <p className="font-sans text-brand-textMuted text-sm sm:text-base leading-relaxed mt-4">
                  {selectedProgram.overview}
                </p>

                {/* Stats Block (Duration & Eligibility) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 mt-6 border-t border-brand-border">
                  <div className="flex gap-3.5 items-start p-4 rounded-xl border border-brand-border bg-brand-cream/60">
                    <Clock size={20} className="text-brand-purple mt-0.5 shrink-0" />
                    <div>
                      <div className="font-display font-bold text-sm text-brand-purple uppercase tracking-wide">DURATION</div>
                      <div className="text-xs text-brand-textMuted font-sans mt-0.5">{selectedProgram.duration}</div>
                    </div>
                  </div>
                  <div className="flex gap-3.5 items-start p-4 rounded-xl border border-brand-border bg-brand-cream/60">
                    <Award size={20} className="text-brand-teal mt-0.5 shrink-0" />
                    <div>
                      <div className="font-display font-bold text-sm text-brand-purple uppercase tracking-wide">ELIGIBILITY</div>
                      <div className="text-xs text-brand-textMuted font-sans mt-0.5">{selectedProgram.eligibility}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Practical Components Card */}
              <div className="bg-white p-8 rounded-2xl border border-brand-border shadow-card space-y-3">
                <div className="flex items-center gap-2 text-brand-purple font-display font-bold text-xl uppercase tracking-tight">
                  <Compass size={22} className="text-brand-teal" />
                  <span>PRACTICAL EXPERIENCE & HOURS</span>
                </div>
                <p className="text-xs sm:text-sm text-brand-textDark/85 font-sans leading-relaxed">
                  {selectedProgram.practicalExperience}
                </p>
              </div>

              {/* Career Opportunities Card */}
              <div className="bg-white p-8 rounded-2xl border border-brand-border shadow-card space-y-3">
                <div className="flex items-center gap-2 text-brand-purple font-display font-bold text-xl uppercase tracking-tight">
                  <GraduationCap size={22} className="text-brand-purple" />
                  <span>CAREER ROLES & PATHWAYS</span>
                </div>
                <p className="text-xs sm:text-sm text-brand-textDark/90 font-sans leading-relaxed font-semibold">
                  {selectedProgram.careerOpportunities}
                </p>
              </div>
            </div>

            {/* Right curriculum block (Light) */}
            <div className="lg:col-span-5">
              <div className="bg-white text-brand-textDark p-8 rounded-2xl border border-brand-border shadow-card sticky top-[160px]">
                <div className="flex items-center justify-between pb-4 border-b border-brand-border mb-6">
                  <div className="flex items-center gap-2.5">
                    <BookOpen size={20} className="text-brand-purple" />
                    <span className="font-display font-bold text-xl tracking-wide uppercase text-brand-purple">MODULE CURRICULUM</span>
                  </div>
                  <span className="text-xs font-mono text-brand-teal font-bold px-2 py-0.5 bg-brand-tealLight rounded">{selectedProgram.num}</span>
                </div>

                <div className="space-y-4 max-h-[460px] overflow-y-auto pr-2">
                  {selectedProgram.curriculum.map((module, idx) => (
                    <div key={idx} className="pb-3 border-b border-brand-border/60 text-xs sm:text-sm font-sans">
                      <div className="flex gap-2.5 items-start">
                        <span className="font-mono font-bold text-brand-purple shrink-0 mt-0.5">
                          {String(idx + 1).padStart(2, '0')}.
                        </span>
                        {typeof module === 'string' ? (
                          <span className="text-brand-textDark font-medium leading-snug">{module}</span>
                        ) : (
                          <div className="w-full">
                            <span className="block font-bold text-brand-purple mb-2 leading-snug">{module.topic}</span>
                            <ul className="list-disc pl-4 space-y-1 text-xs text-brand-textMuted">
                              {module.details.map((detail, dIdx) => (
                                <li key={dIdx}>{detail}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Industry Exposure */}
                <div className="mt-6 pt-4 border-t border-brand-border">
                  <div className="text-[11px] font-bold text-brand-teal tracking-wider uppercase mb-1.5">
                    INDUSTRY EXPOSURE
                  </div>
                  <p className="text-xs text-brand-textMuted leading-relaxed font-sans">
                    {selectedProgram.industryExposure}
                  </p>
                </div>

                <div className="mt-6 pt-2">
                  <Link
                    to="/admissions"
                    className="w-full text-center py-3.5 bg-brand-purple hover:bg-brand-purpleLight text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors block shadow-sm"
                  >
                    APPLY FOR THIS PROGRAM →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Comparison View */}
      <section className="bg-white py-12 lg:py-16 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="AT A GLANCE"
            title="COMPARE ALL SPECIFICATIONS."
            supportingText="Comprehensive academic parameters across our diploma and certification catalog."
          />

          <div className="overflow-x-auto mt-10 rounded-2xl border border-brand-border shadow-card bg-white">
            <table className="w-full text-left font-sans text-xs sm:text-sm min-w-[750px]">
              <thead>
                <tr className="bg-brand-purple text-white font-display text-sm tracking-wider uppercase">
                  <th className="p-4 rounded-tl-2xl">PROGRAM</th>
                  <th className="p-4">DURATION</th>
                  <th className="p-4">PRACTICAL FOCUS</th>
                  <th className="p-4 rounded-tr-2xl">KEY OUTCOME</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border text-brand-textDark">
                {programsData.map((prog, index) => (
                  <tr key={prog.id} className={index % 2 === 0 ? 'bg-white' : 'bg-brand-cream/40'}>
                    <td className="p-4 font-bold text-brand-purple">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] bg-brand-purpleMuted px-1.5 py-0.5 rounded text-brand-purple font-bold">
                          {prog.num}
                        </span>
                        <span>{prog.title}</span>
                      </div>
                    </td>
                    <td className="p-4 text-brand-textMuted font-medium">{prog.duration}</td>
                    <td className="p-4 text-xs text-brand-textMuted max-w-xs leading-relaxed">{prog.practicalExperience}</td>
                    <td className="p-4 text-xs font-bold text-brand-teal">{prog.careerOpportunities.split(',')[0]}</td>
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
