import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Presentation, ShieldCheck, Zap } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { industryPartners, facultyData } from '../data/siteData';

const IndustryConnect = () => {
  return (
    <div className="w-full">
      {/* Hero Header */}
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

      {/* Main Partners Panel (Cream Background) */}
      <section className="bg-brand-cream py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Description */}
            <div className="lg:col-span-5 space-y-6">
              <SectionHeader
                eyebrow="COLLABORATIVE NETWORK"
                title="THE INTEGRATED AGENCY MODEL."
              />
              <p className="font-sans text-brand-textDark/85 text-base leading-relaxed">
                IIEM doesn't operate in academic isolation. We are linked directly to event design collectives, sound hire firms, hospitality services, and national agencies across India.
              </p>
              <p className="font-sans text-brand-textDark/70 text-sm leading-relaxed">
                Our partner organizations provide the stage briefs, coordinate physical student inductions, and serve as placement boards. This ensures that our course outline remains aligned with current agency procedures.
              </p>
            </div>

            {/* Partners Grid */}
            <div className="lg:col-span-7 border border-brand-textDark/15 p-8 bg-brand-cream neo-shadow-magenta">
              <div className="text-center font-display text-sm text-brand-purple tracking-widest mb-6">
                ACTIVE AGENCY & PRODUCTION PARTNERS
              </div>
              <div className="grid grid-cols-2 gap-4">
                {industryPartners.map((partner, idx) => (
                  <div key={idx} className="p-4 border border-brand-textDark/10 bg-brand-cream text-center hover:border-brand-purple transition-colors">
                    <div className="font-display text-lg text-brand-purple">{partner.name}</div>
                    <div className="font-sans text-[10px] text-brand-magenta uppercase tracking-widest font-semibold mt-1">
                      {partner.type}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Masterclass & Workshops Section (Dark background) */}
      <section className="bg-brand-dark text-brand-cream py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="GUEST LEARNING"
            title="UPCOMING MASTERCLASSES & VISITS."
            darkBg={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: 'Global Festival Sponsorships', speaker: 'Sanjay Dutt, Event Director', desc: 'Analyzing bidding matrices, sponsor packages, and ROI tracking for large scale multi-day music festivals.', label: 'AUG 28' },
              { title: 'Destination Wedding Styling', speaker: 'Karishma Mehta, Luxury Stylist', desc: 'Moodboarding luxury sets, coordinating vendor teams, floral mapping, and regional destination licensing rules.', label: 'SEP 12' },
              { title: 'Stage Craft Rigging Safety', speaker: 'Devender Negi, Chief Technical Officer', desc: 'Fabrication stability analysis, weight support calculations, staging rigging, and safety regulations.', label: 'OCT 05' }
            ].map((mc, idx) => (
              <div key={idx} className="p-8 border border-brand-cream/10 bg-brand-dark hover:border-brand-teal transition-all duration-300 relative group">
                <div className="absolute top-4 right-4 bg-brand-teal text-brand-cream px-2 py-0.5 font-display text-xs">
                  {mc.label}
                </div>
                <Zap size={28} className="text-brand-teal mb-6" />
                <h3 className="font-display text-2xl text-brand-cream mb-1">{mc.title}</h3>
                <div className="font-sans text-xs text-brand-magenta font-semibold tracking-wider uppercase mb-4">
                  Led by: {mc.speaker}
                </div>
                <p className="font-sans text-xs text-brand-cream/70 leading-relaxed">
                  {mc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Faculty / Mentors (Cream background) */}
      <section className="bg-brand-cream py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="ACADEMIC LEADERS"
            title="THE CURATORS."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {facultyData.map((mentor, idx) => (
              <div key={idx} className="flex flex-col group border border-brand-textDark/10 bg-brand-cream hover:border-brand-purple transition-all duration-300">
                <div className="aspect-[3/4] overflow-hidden bg-brand-purple/5 border-b border-brand-textDark/10">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-brand-purple leading-none">{mentor.name}</h3>
                  <div className="text-[10px] text-brand-magenta font-sans font-semibold uppercase tracking-wider mt-2">
                    {mentor.designation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborative Call */}
      <section className="bg-brand-purple text-brand-cream py-20 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-brand-magenta/5 pointer-events-none"></div>
        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <h2 className="font-display text-4xl sm:text-6xl text-white">HIRE FROM IIEM</h2>
          <p className="text-sm text-brand-cream/80 max-w-lg mx-auto font-sans leading-relaxed">
            Are you looking for skilled event coordinators, backstage production crew, or digital brand planners? Get in touch with our student coordinator office.
          </p>
          <div className="pt-4">
            <a
              href="mailto:placement@iiem.edu.in"
              className="px-6 py-4 bg-brand-dark hover:bg-brand-magenta text-brand-cream transition-all duration-300 font-display text-lg tracking-wider inline-block neo-shadow-teal"
            >
              CONTACT PLACEMENT CELL →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryConnect;
