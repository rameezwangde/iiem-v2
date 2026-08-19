import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Presentation, GraduationCap, Building, Award, MessageSquare, Flame, CheckCircle2, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { industryPartners } from '../data/siteData';

const IndustryConnect = () => {
  return (
    <div className="w-full bg-brand-cream">
      {/* 1. Hero Header (Light) */}
      <section className="bg-brand-cream pt-16 pb-8 px-6 md:px-12 relative overflow-hidden border-b border-brand-border">
        <div className="absolute inset-0 bg-[radial-gradient(#4A0A45_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center space-y-4 relative z-10">
          <div className="badge-pill bg-white border border-brand-border text-[10px] sm:text-[11px] font-bold text-brand-purple inline-flex items-center gap-2">
            <span className="text-brand-teal">//</span> RECRUITER & PARTNER INTERACTION
          </div>
          
          <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl leading-[1.1] text-brand-purple tracking-tight uppercase max-w-4xl mx-auto">
            CONNECTED TO THE REAL EVENT WORLD.
          </h1>
          <p className="font-sans text-brand-textMuted text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            IIEM bridges the gap between academics and the industry. We bring the biggest names in event management directly to our students for networking, mentoring, and recruitment.
          </p>
        </div>
      </section>

      {/* 2. Our Industry Partners */}
      <section className="bg-white py-12 lg:py-16 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="NETWORK"
            title="INDUSTRY PARTNERSHIPS."
            supportingText="Institutional collaborations, MoUs, and strategic partnerships with top event management companies, media houses, and production agencies."
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10">
            {industryPartners.map((partner, idx) => (
              <div key={idx} className="academic-card p-6 text-center flex flex-col justify-center min-h-[120px] bg-brand-cream/40">
                <div className="font-display font-bold text-base text-brand-purple leading-snug">{partner.name}</div>
                <div className="font-sans text-[10px] text-brand-teal uppercase tracking-wider font-bold mt-2 bg-brand-tealLight px-2 py-0.5 rounded-md w-fit mx-auto">
                  {partner.type}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Expert Sessions & Interaction */}
      <section className="bg-brand-cream py-12 lg:py-16 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="KNOWLEDGE TRANSFER"
            title="INDUSTRY INTERACTION."
            supportingText="Direct mentorship forums with active practitioners, festival directors, and venue operators."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              { icon: <Presentation size={24}/>, title: "Guest Lectures", desc: "Insights directly from working professionals." },
              { icon: <Briefcase size={24}/>, title: "Expert Sessions", desc: "Deep dives into technical event production." },
              { icon: <Building size={24}/>, title: "Industry Panels", desc: "Debates on current market trends." },
              { icon: <Flame size={24}/>, title: "Leadership Talks", desc: "Visionary advice from agency founders." }
            ].map((item, idx) => (
              <div key={idx} className="academic-card p-6 flex flex-col justify-between bg-white">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-purpleMuted text-brand-purple flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-brand-purple mb-2 uppercase">{item.title}</h3>
                  <p className="font-sans text-xs text-brand-textMuted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 & 5. Industrial Visits & Live Projects (Light) */}
      <section className="bg-white py-12 lg:py-16 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Industrial Visits */}
          <div>
            <SectionHeader
              eyebrow="ON-GROUND EXPOSURE"
              title="INDUSTRIAL VISITS."
              supportingText="Guided field access to active productions."
            />
            <ul className="space-y-3 mt-6">
              {[
                "Company & Agency Visits",
                "Factory and Site Tours",
                "Live Industry Exposure",
                "Behind-the-scenes Learning"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3.5 p-4 rounded-xl bg-brand-cream/50 border border-brand-border hover:border-brand-purple/40 transition-colors">
                  <CheckCircle2 size={18} className="text-brand-teal shrink-0" />
                  <span className="font-display font-bold text-base text-brand-purple tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Live Projects */}
          <div>
            <SectionHeader
              eyebrow="PRACTICAL APPLICATION"
              title="LIVE PROJECTS."
              supportingText="Real briefs for actual client activations."
            />
            <ul className="space-y-3 mt-6">
              {[
                "Real-world Business Problems",
                "Client-based Projects",
                "Comprehensive Case Studies",
                "Project Showcases and Outcomes"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3.5 p-4 rounded-xl bg-brand-cream/50 border border-brand-border hover:border-brand-purple/40 transition-colors">
                  <CheckCircle2 size={18} className="text-brand-teal shrink-0" />
                  <span className="font-display font-bold text-base text-brand-purple tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 6 & 7. Internships & Placements */}
      <section className="bg-brand-cream py-12 lg:py-16 px-6 md:px-12 border-b border-brand-border relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <SectionHeader
            eyebrow="CAREER PATHWAYS"
            title="INTERNSHIPS & PLACEMENTS."
            supportingText="A dedicated infrastructure bridging student portfolios to hiring directors."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
            {/* Internships & Training */}
            <div className="lg:col-span-5 academic-card p-8 bg-white">
              <h3 className="font-display font-bold text-2xl text-brand-purple mb-6 border-b border-brand-border pb-3 uppercase">
                INTERNSHIPS & TRAINING
              </h3>
              <ul className="space-y-3">
                {["Internship opportunities", "On-the-job training", "Industry projects", "Mentorship programs"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-brand-cream/60 p-3 rounded-lg border border-brand-border shadow-subtle">
                    <ChevronRight size={16} className="text-brand-teal shrink-0" />
                    <span className="font-sans font-bold text-xs uppercase tracking-wider text-brand-textDark/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Placements & Career Connect */}
            <div className="lg:col-span-7 academic-card p-8 bg-white">
              <h3 className="font-display font-bold text-2xl text-brand-purple mb-6 border-b border-brand-border pb-3 uppercase">
                PLACEMENTS & CAREER CONNECT
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Recruiting companies", "Placement drives", "Career fairs", "Interview preparation", "Alumni-industry network"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-brand-cream/60 p-3 rounded-lg border border-brand-border list-none">
                    <ChevronRight size={16} className="text-brand-teal shrink-0" />
                    <span className="font-sans font-bold text-xs uppercase tracking-wider text-brand-textDark/85">{item}</span>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Extra Details: Skills, Networking, Achievements */}
      <section className="bg-white py-12 lg:py-16 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="academic-card p-8 bg-brand-cream/40">
            <h4 className="font-display font-bold text-xl text-brand-purple mb-3 uppercase">SKILL DEVELOPMENT</h4>
            <p className="font-sans text-xs sm:text-sm text-brand-textMuted leading-relaxed">Industry-oriented workshops, technical training, certifications, and soft skills development.</p>
          </div>
          <div className="academic-card p-8 bg-brand-cream/40">
            <h4 className="font-display font-bold text-xl text-brand-purple mb-3 uppercase">NETWORKING</h4>
            <p className="font-sans text-xs sm:text-sm text-brand-textMuted leading-relaxed">Industry networking events, alumni meets, business forums, and student-industry mixers.</p>
          </div>
          <div className="academic-card p-8 bg-brand-cream/40">
            <h4 className="font-display font-bold text-xl text-brand-purple mb-3 uppercase">ACHIEVEMENTS</h4>
            <p className="font-sans text-xs sm:text-sm text-brand-textMuted leading-relaxed">Student placements, awards and recognitions, successful internships, and industry-sponsored projects.</p>
          </div>
        </div>
      </section>

      {/* 9. Industry Testimonials */}
      <section className="bg-brand-cream py-12 lg:py-16 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="INDUSTRY VOICES"
            title="WHAT THE EXPERTS SAY."
            supportingText="Feedback from agency founders and recruiters on the quality of IIEM graduates."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              { quote: "IIEM students come with a practical understanding of ground realities. They don't just know the theory; they know how to run a show.", title: "Recruiter Feedback", author: "National Production Agency" },
              { quote: "The level of technical training and crisis management skills we see in interns from IIEM makes them our first choice for hiring.", title: "Expert Recommendation", author: "Technical Director" },
              { quote: "Our MoU with IIEM has provided us with a steady pipeline of highly competent event managers ready to take on leadership roles.", title: "Partner Quote", author: "Event Management Firm" }
            ].map((test, idx) => (
              <div key={idx} className="academic-card p-8 flex flex-col justify-between bg-white">
                <div>
                  <div className="badge-pill bg-brand-purpleMuted text-brand-purple text-[10px] mb-4">
                    {test.title}
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-brand-textMuted italic mb-6 leading-relaxed">
                    "{test.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-brand-border/60">
                  <div className="font-display font-bold text-base text-brand-purple">— {test.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <section className="bg-brand-purple text-white py-20 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            HIRE FROM IIEM
          </h2>
          <p className="text-xs sm:text-sm text-brand-cream/80 max-w-lg mx-auto font-sans leading-relaxed">
            Are you looking for skilled event coordinators, backstage production crew, or digital brand planners? Get in touch with our placement cell.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-brand-purple hover:bg-brand-cream rounded-xl font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-card transition-colors"
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
