import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Briefcase, Users, Flame } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { careerPaths, industryPartners, testimonialsData } from '../data/siteData';
import Marquee from '../components/Marquee';

const Placements = () => {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-brand-cream py-20 px-6 md:px-12 border-b border-brand-textDark/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-4xl">
            <span className="font-sans text-xs md:text-sm font-bold tracking-[0.25em] text-brand-magenta uppercase block mb-4">
              // CAREER PATHWAYS
            </span>
            <h1 className="font-display text-5xl sm:text-7xl md:text-9xl leading-[0.85] tracking-tight uppercase text-brand-purple">
              FROM<br />
              <span className="text-brand-magenta">CLASSROOM</span><br />
              <span className="text-brand-textDark">TO CAREER.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Stats Panels (Cream background) */}
      <section className="bg-brand-cream py-16 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 border border-brand-textDark/15 bg-brand-cream text-center neo-shadow">
            <div className="font-display text-5xl text-brand-purple">95%</div>
            <div className="text-xs text-brand-textDark/70 font-semibold tracking-wider font-sans mt-2">PLACEMENT ASSISTANCE RATE</div>
          </div>
          <div className="p-6 border border-brand-textDark/15 bg-brand-cream text-center neo-shadow">
            <div className="font-display text-5xl text-brand-magenta">150+</div>
            <div className="text-xs text-brand-textDark/70 font-semibold tracking-wider font-sans mt-2">ACTIVE AGENCY CONTACTS</div>
          </div>
          <div className="p-6 border border-brand-textDark/15 bg-brand-cream text-center neo-shadow">
            <div className="font-display text-5xl text-brand-teal">8 LPA</div>
            <div className="text-xs text-brand-textDark/70 font-semibold tracking-wider font-sans mt-2">HIGHEST STARTING PACKAGE</div>
          </div>
          <div className="p-6 border border-brand-textDark/15 bg-brand-cream text-center neo-shadow">
            <div className="font-display text-5xl text-brand-purple">4.2 LPA</div>
            <div className="text-xs text-brand-textDark/70 font-semibold tracking-wider font-sans mt-2">AVERAGE PLACEMENT PACKAGE</div>
          </div>
        </div>
      </section>

      {/* Recruiter Logos Ticker Marquee (Dark background) */}
      <section className="bg-brand-dark text-brand-cream py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center mb-8">
          <div className="font-display text-xs text-brand-teal tracking-[0.25em] uppercase">
            RECRUITMENT AND INTERNSHIP PIPELINES
          </div>
        </div>
        <Marquee items={industryPartners} reverse={false} speed="normal" />
      </section>

      {/* Placement Process & Support (Cream Background) */}
      <section className="bg-brand-cream py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="CAREER ASSISTANCE"
            title="HOW WE PREPARE YOU FOR THE MARKET."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-center">
            {/* Left description list */}
            <div className="lg:col-span-7 space-y-6">
              {[
                { icon: <Trophy className="text-brand-magenta shrink-0" size={24} />, title: 'Portfolio Development Labs', desc: 'Every student defends a final portfolio of live events they coordinated. Recruiters review these digital assets directly during recruitment.' },
                { icon: <Briefcase className="text-brand-teal shrink-0" size={24} />, title: 'Simulated Agency Pitch Competitions', desc: 'Students are placed in client bid scenarios, pitching concepts, AV layouts, and budgets to visiting industry directors.' },
                { icon: <Users className="text-brand-purple shrink-0" size={24} />, title: 'Mock Technical Operations Audits', desc: 'Operational mock runs test candidate management safety speed, crisis rigging, and licensing procedures.' },
                { icon: <Flame className="text-brand-magenta shrink-0" size={24} />, title: 'Direct Mentor Placement Channels', desc: 'Top students are recommended directly to partner agencies for senior internships and full-time hiring.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start pb-6 border-b border-brand-textDark/10">
                  {item.icon}
                  <div>
                    <h3 className="font-display text-2xl text-brand-purple">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-brand-textDark/75 font-sans mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right side static image */}
            <div className="lg:col-span-5">
              <div className="relative p-2 border border-brand-textDark/15 bg-brand-cream neo-shadow-purple">
                <div className="aspect-[4/5] overflow-hidden bg-brand-purple/5">
                  <img
                    src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=600&q=80"
                    alt="IIEM alumni placement talk"
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Pathways (Dark background) */}
      <section className="bg-brand-dark text-brand-cream py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="POSITIONS"
            title="WHERE OUR GRADUATES WORK."
            darkBg={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {careerPaths.map((path, idx) => (
              <div key={idx} className="p-6 border border-brand-cream/10 bg-brand-dark hover:border-brand-teal transition-all duration-300">
                <h3 className="font-display text-2xl text-brand-teal">{path.title}</h3>
                <p className="text-xs text-brand-cream/70 font-sans mt-2 leading-relaxed">
                  {path.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Profiles */}
      <section className="bg-brand-cream py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="SUCCESS PORTRAITS"
            title="ALUMNI IN ACTION."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonialsData.map((alumnus) => (
              <div key={alumnus.id} className="flex flex-col border border-brand-textDark/10 bg-brand-cream hover:border-brand-magenta transition-all duration-300">
                <div className="aspect-video overflow-hidden border-b border-brand-textDark/10 relative">
                  <img
                    src={alumnus.image}
                    alt={alumnus.studentName}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-brand-purple text-brand-cream px-2 py-0.5 font-display text-[10px]">
                    {alumnus.batch}
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <blockquote className="font-sans text-xs text-brand-textDark/80 italic leading-relaxed">
                    “{alumnus.quote.slice(0, 160)}...”
                  </blockquote>
                  <div>
                    <h3 className="font-display text-xl text-brand-purple">{alumnus.studentName}</h3>
                    <div className="text-[10px] text-brand-magenta font-semibold tracking-wider font-sans uppercase">
                      {alumnus.program}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-magenta text-white py-16 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <h2 className="font-display text-4xl sm:text-6xl text-white">START BUILDING YOUR PORTFOLIO</h2>
          <p className="text-xs sm:text-sm text-brand-cream/80 max-w-lg mx-auto font-sans leading-relaxed">
            Get linked to recruiters and production networks. Admissions are open for all professional certification and long-term diploma programs.
          </p>
          <div className="pt-4">
            <Link
              to="/admissions"
              className="px-8 py-4 bg-brand-dark text-brand-cream hover:bg-brand-purple transition-all duration-300 font-display text-lg tracking-wider inline-flex items-center gap-2"
            >
              APPLY FOR COUNSELING <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Placements;
