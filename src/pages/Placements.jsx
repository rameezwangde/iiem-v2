import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Briefcase, Users, Flame, CheckCircle2, TrendingUp, Sparkles, Building } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { careerPaths, industryPartners, testimonialsData } from '../data/siteData';
import Marquee from '../components/Marquee';

const Placements = () => {
  return (
    <div className="w-full bg-brand-cream">
      {/* Hero Header (Light) */}
      <section className="bg-brand-cream pt-16 pb-8 px-6 md:px-12 relative overflow-hidden border-b border-brand-border text-center">
        <div className="absolute inset-0 bg-[radial-gradient(#4A0A45_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="max-w-[800px] mx-auto w-full flex flex-col items-center justify-center relative z-10">
          <span className="badge-pill bg-brand-purpleMuted text-brand-purple border border-brand-purple/20 text-xs font-bold py-1 px-3.5 mb-6">
            // CAREER PATHWAYS
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight uppercase text-brand-purple mb-6">
            FROM CLASSROOM<br />
            TO CAREER.
          </h1>
          <p className="font-sans text-brand-textMuted text-base sm:text-lg md:text-xl leading-relaxed">
            Our dedicated placement cell ensures that your transition from academic training to industry professional is seamless. We connect you with top event management companies, agencies, and corporate houses across India.
          </p>
        </div>
      </section>

      {/* Stats Panels */}
      <section className="bg-white py-16 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="academic-card p-6 text-center bg-brand-cream/40">
            <div className="font-display font-black text-4xl sm:text-5xl text-brand-purple mb-2">95%</div>
            <div className="text-xs text-brand-textMuted font-bold tracking-wider uppercase font-sans">PLACEMENT ASSISTANCE RATE</div>
          </div>
          <div className="academic-card p-6 text-center bg-brand-cream/40">
            <div className="font-display font-black text-4xl sm:text-5xl text-brand-purple mb-2">150+</div>
            <div className="text-xs text-brand-textMuted font-bold tracking-wider uppercase font-sans">ACTIVE AGENCY CONTACTS</div>
          </div>
          <div className="academic-card p-6 text-center bg-brand-cream/40">
            <div className="font-display font-black text-4xl sm:text-5xl text-brand-purple mb-2">8 LPA</div>
            <div className="text-xs text-brand-textMuted font-bold tracking-wider uppercase font-sans">HIGHEST STARTING PACKAGE</div>
          </div>
          <div className="academic-card p-6 text-center bg-brand-cream/40">
            <div className="font-display font-black text-4xl sm:text-5xl text-brand-purple mb-2">4.2 LPA</div>
            <div className="text-xs text-brand-textMuted font-bold tracking-wider uppercase font-sans">AVERAGE PLACEMENT PACKAGE</div>
          </div>
        </div>
      </section>

      {/* Recruiter Logos Ticker (Light) */}
      <section className="bg-brand-cream py-16 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center mb-6">
          <span className="badge-pill bg-brand-purpleMuted text-brand-purple border border-brand-purple/20 text-[11px] font-bold">
            RECRUITMENT AND INTERNSHIP PIPELINES
          </span>
        </div>
        <Marquee items={industryPartners} reverse={false} />
      </section>

      {/* Placement Process & Support */}
      <section className="bg-white py-20 lg:py-28 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="CAREER ASSISTANCE"
            title="HOW WE PREPARE YOU FOR THE MARKET."
            supportingText="A rigorous training framework equipping candidates for executive interviews and technical audits."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {[
              { icon: <Trophy className="text-brand-purple shrink-0" size={24} />, title: 'Portfolio Development Labs', desc: 'Every student defends a final portfolio of live events they coordinated. Recruiters review these digital assets directly during recruitment.' },
              { icon: <Briefcase className="text-brand-teal shrink-0" size={24} />, title: 'Simulated Agency Pitch Competitions', desc: 'Students are placed in client bid scenarios, pitching concepts, AV layouts, and budgets to visiting industry directors.' },
              { icon: <Users className="text-brand-purple shrink-0" size={24} />, title: 'Mock Technical Operations Audits', desc: 'Operational mock runs test candidate management safety speed, crisis rigging, and licensing procedures.' },
              { icon: <Flame className="text-brand-teal shrink-0" size={24} />, title: 'Direct Mentor Placement Channels', desc: 'Top students are recommended directly to partner agencies for senior internships and full-time hiring.' }
            ].map((item, idx) => (
              <div key={idx} className="academic-card p-8 flex flex-col gap-4 bg-brand-cream/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="p-3 rounded-xl bg-brand-purpleMuted w-fit">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-brand-purple mb-2">{item.title}</h3>
                  <p className="text-sm text-brand-textMuted font-sans leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Support Highlights */}
      <section className="bg-brand-cream py-20 lg:py-28 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="SUPPORT INFRASTRUCTURE"
            title="BEYOND THE CURRICULUM"
            supportingText="We provide comprehensive support to ensure you are market-ready and positioned for success."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {[
              "Placement Assistance",
              "Internship Opportunities",
              "Live Event Exposure",
              "Resume & Interview Support",
              "Industry Expert Training",
              "Corporate & Wedding Event Careers",
              "Exhibition & Trade Show Opportunities",
              "Event Production & Operations Careers",
              "Entrepreneurship & Freelancing Guidance"
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="academic-card p-6 flex flex-col justify-between bg-white"
              >
                <div>
                  <div className="w-8 h-1 bg-brand-teal rounded-full mb-4"></div>
                  <h3 className="font-display font-bold text-lg text-brand-purple leading-snug">
                    {feature}
                  </h3>
                </div>
                <div className="mt-4 pt-3 border-t border-brand-border/60 flex items-center justify-between text-xs text-brand-textMuted font-sans">
                  <span>Guaranteed Guidance</span>
                  <CheckCircle2 size={14} className="text-brand-teal" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Pathways (Light) */}
      <section className="bg-white py-20 lg:py-28 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Career Opportunities */}
          <div className="lg:col-span-8">
            <SectionHeader
              eyebrow="CAREER OPPORTUNITIES AFTER IIEM"
              title="GRADUATES CAN WORK AS:"
              supportingText="A wide spectrum of in-demand corporate and creative roles."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {[
                "Event Coordinator",
                "Event Executive",
                "Wedding Planner",
                "Corporate Event Executive",
                "Exhibition & Trade Show Coordinator",
                "Event Production Executive",
                "Stage & Production Coordinator",
                "Artist & Celebrity Management Executive",
                "Event Operations Manager",
                "Venue & Banquet Coordinator",
                "Sound, Lighting & LED Wall Coordinator",
                "Freelance Event Planner",
                "Event Entrepreneur / Agency Owner"
              ].map((role, idx) => (
                <div key={idx} className="flex gap-3 items-center border border-brand-border p-3.5 rounded-xl bg-brand-cream/50 hover:border-brand-purple/40 transition-colors">
                  <ArrowRight size={14} className="text-brand-teal shrink-0" />
                  <span className="font-sans font-bold text-xs uppercase tracking-wide text-brand-textDark">{role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Placement Network */}
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="INDUSTRY CONNECT"
              title="PLACEMENT NETWORK."
              supportingText="Institutional tie-ups across India."
            />
            
            <div className="flex flex-col gap-4 mt-8">
              {[
                "Event management companies",
                "Wedding planning firms"
              ].map((network, idx) => (
                <div key={idx} className="academic-card p-6 bg-brand-cream/50">
                  <div className="w-10 h-10 rounded-xl bg-brand-tealLight text-brand-teal flex items-center justify-center mb-3">
                    <Building size={20} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-brand-purple uppercase">{network}</h3>
                  <p className="text-xs text-brand-textMuted font-sans mt-2">Active tie-ups and on-ground recruitment channels across India.</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Alumni Profiles */}
      <section className="bg-brand-cream py-20 lg:py-28 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="SUCCESS PORTRAITS"
            title="ALUMNI IN ACTION."
            supportingText="Real alumni testimonials and career transitions in leading event houses."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {testimonialsData.map((alumnus) => (
              <div key={alumnus.id} className="academic-card overflow-hidden flex flex-col justify-between bg-white">
                <div className="aspect-[16/10] overflow-hidden relative bg-brand-stone">
                  <img
                    src={alumnus.image}
                    alt={alumnus.studentName}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-brand-purple/90 backdrop-blur-sm text-white px-2.5 py-1 rounded font-mono text-[10px] font-bold">
                    {alumnus.batch}
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <blockquote className="font-sans text-xs text-brand-textMuted leading-relaxed italic">
                    “{alumnus.quote.slice(0, 160)}...”
                  </blockquote>
                  <div className="pt-3 border-t border-brand-border/60">
                    <h3 className="font-display font-bold text-lg text-brand-purple">{alumnus.studentName}</h3>
                    <div className="text-[11px] text-brand-teal font-semibold font-sans">
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
      <section className="bg-brand-purple text-white py-20 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            START BUILDING YOUR PORTFOLIO
          </h2>
          <p className="text-xs sm:text-sm text-brand-cream/80 max-w-lg mx-auto font-sans leading-relaxed">
            Get linked to recruiters and production networks. Admissions are open for all professional certification and long-term diploma programs.
          </p>
          <div className="pt-4">
            <Link
              to="/admissions"
              className="px-8 py-4 bg-white text-brand-purple hover:bg-brand-cream rounded-xl font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-card transition-colors"
            >
              APPLY FOR COUNSELING <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Placements;
