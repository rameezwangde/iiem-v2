import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, GraduationCap, Percent, Star, Target, Users, Play, BarChart, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const CourseDetails = () => {
  return (
    <div className="w-full bg-brand-cream">
      {/* BANNER SECTION (Light) */}
      <section className="bg-brand-cream px-6 md:px-12 py-20 lg:py-28 relative overflow-hidden border-b border-brand-border">
        <div className="absolute inset-0 bg-[radial-gradient(#4A0A45_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="badge-pill bg-brand-purpleMuted text-brand-purple border border-brand-purple/20 text-xs font-bold py-1 px-3.5 mb-6">
              // Master the Industry
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.0] tracking-tight mb-6 text-brand-purple uppercase">
              BECOME A <span className="text-brand-teal">PROFESSIONAL</span><br />
              EVENT MANAGER.
            </h1>
            <p className="font-sans text-brand-textMuted text-base sm:text-lg max-w-xl leading-relaxed">
              Step into the world of events with our comprehensive fast-track program designed for real-world execution.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="academic-card p-5 flex items-start gap-4 shadow-card bg-white">
              <div className="w-10 h-10 rounded-xl bg-brand-tealLight flex items-center justify-center text-brand-teal shrink-0">
                <Star size={20} />
              </div>
              <div>
                <div className="font-display font-bold text-2xl text-brand-purple mb-0.5">45 DAYS</div>
                <div className="font-sans text-xs text-brand-textMuted uppercase tracking-wider font-semibold">Next Level Course</div>
              </div>
            </div>
            <div className="academic-card p-5 flex items-start gap-4 shadow-card bg-white">
              <div className="w-10 h-10 rounded-xl bg-brand-purpleMuted flex items-center justify-center text-brand-purple shrink-0">
                <Percent size={20} />
              </div>
              <div>
                <div className="font-display font-bold text-2xl text-brand-purple mb-0.5">80% / 20%</div>
                <div className="font-sans text-xs text-brand-textMuted uppercase tracking-wider font-semibold">Practical / Theory</div>
              </div>
            </div>
            <div className="academic-card p-5 flex items-start gap-4 shadow-card bg-white">
              <div className="w-10 h-10 rounded-xl bg-brand-tealLight flex items-center justify-center text-brand-teal shrink-0">
                <GraduationCap size={20} />
              </div>
              <div>
                <div className="font-display font-bold text-2xl text-brand-purple mb-0.5">LEARN + EARN</div>
                <div className="font-sans text-xs text-brand-textMuted uppercase tracking-wider font-semibold">On-ground Paid Gigs</div>
              </div>
            </div>
            <div className="academic-card p-5 flex items-start gap-4 shadow-card bg-white">
              <div className="w-10 h-10 rounded-xl bg-brand-purpleMuted flex items-center justify-center text-brand-purple shrink-0">
                <Target size={20} />
              </div>
              <div>
                <div className="font-display font-bold text-2xl text-brand-purple mb-0.5">100%</div>
                <div className="font-sans text-xs text-brand-textMuted uppercase tracking-wider font-semibold">Job Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM MODULES SECTION */}
      <section className="bg-white px-6 md:px-12 py-20 lg:py-28 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="COURSE CURRICULUM"
            title="WHAT YOU WILL LEARN."
            supportingText="Comprehensive 24-point professional syllabus combining practical on-ground skills with business strategies."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12">
            {[
              { title: "Balloon Decoration", subtitle: "B2B & B2C" },
              { title: "Flower Decoration", subtitle: "B2B & B2C" },
              { title: "Event Time Management", subtitle: "B2B & B2C" },
              { title: "Event Venue Booking", subtitle: "B2B & B2C" },
              { title: "Event Props Rent & Production", subtitle: "B2B & B2C" },
              { title: "Marketing", subtitle: "B2B & B2C" },
              { title: "Vendor Management", subtitle: "B2B & B2C" },
              { title: "Event B2B Business", subtitle: "B2B & B2C" },
              { title: "Event B2C Business", subtitle: "B2B & B2C" },
              { title: "Respect Everyone", subtitle: "B2B & B2C" },
              { title: "Event Organizer Patience", subtitle: "B2B & B2C" },
              { title: "Budget Management", subtitle: "B2B & B2C" },
              { title: "Network & Contact", subtitle: "B2B & B2C" },
              { title: "License & Permission", subtitle: "B2B & B2C" },
              { title: "Roles & Responsibilities", subtitle: "B2B & B2C" },
              { title: "Team Workspace Management", subtitle: "B2B & B2C" },
              { title: "Event Transportation", subtitle: "B2B & B2C" },
              { title: "Event Story & Presentation PPT", subtitle: "B2B & B2C" },
              { title: "Personal & Brand Portfolio", subtitle: "B2B & B2C" },
              { title: "Certification & Uniform", subtitle: "From IIEM Institute" },
              { title: "Event Management Booklet", subtitle: "From IIEM Institute" },
              { title: "Student Portfolio Shoot", subtitle: "B2B & B2C" },
              { title: "Student Feedback Shoot", subtitle: "B2B & B2C" },
              { title: "Student Cross Promotion & Marketing", subtitle: "B2B & B2C" }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="academic-card p-5 flex flex-col justify-between bg-white"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] font-bold text-brand-purple/70 bg-brand-purpleMuted px-2 py-0.5 rounded">
                      MODULE {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] font-bold text-brand-textMuted uppercase">{item.subtitle}</span>
                  </div>
                  <h4 className="font-display font-bold text-base text-brand-purple leading-snug mb-2">
                    {item.title}
                  </h4>
                </div>
                <div className="pt-3 border-t border-brand-border/60 mt-3 flex items-center justify-between text-[11px] text-brand-textMuted">
                  <span>Practical + Theory</span>
                  <CheckCircle2 size={13} className="text-brand-teal" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9 JOB OPPORTUNITIES SECTION */}
      <section className="bg-brand-cream px-6 md:px-12 py-20 lg:py-28 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="CAREER PATHWAYS"
            title="9 UNIQUE JOB OPPORTUNITIES."
            supportingText="Distinct industry avenues and entrepreneurial models accessible after completing this program."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            
            {/* Opportunity 1 */}
            <div className="academic-card p-6 flex flex-col items-start bg-white">
              <div className="w-12 h-12 rounded-xl bg-brand-purpleMuted text-brand-purple flex items-center justify-center mb-4">
                <Briefcase size={22} />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-purple mb-2">JUNIOR PERSONAL EVENT MANAGER</h3>
              <p className="font-sans text-xs text-brand-textMuted leading-relaxed">
                Manage client relations and coordinate small-to-medium scale social events with precision.
              </p>
            </div>

            {/* Opportunity 2 */}
            <div className="academic-card p-6 flex flex-col items-start bg-white">
              <div className="w-12 h-12 rounded-xl bg-brand-tealLight text-brand-teal flex items-center justify-center mb-4">
                <Users size={22} />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-purple mb-2">JOB PLACEMENT</h3>
              <p className="font-sans text-xs text-brand-textMuted leading-relaxed">
                Direct placement opportunities with our extensive network of top event agencies.
              </p>
            </div>

            {/* Opportunity 3 */}
            <div className="academic-card p-6 flex flex-col items-start bg-white">
              <div className="w-12 h-12 rounded-xl bg-brand-purpleMuted text-brand-purple flex items-center justify-center mb-4">
                <Briefcase size={22} />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-purple mb-2">SENIOR PERSONAL EVENT MANAGER</h3>
              <p className="font-sans text-xs text-brand-textMuted leading-relaxed">
                Lead large-scale destination events, manage vendor networks, and direct complete production operations.
              </p>
            </div>

            {/* Opportunity 4 */}
            <div className="academic-card p-6 flex flex-col items-start bg-white">
              <div className="w-12 h-12 rounded-xl bg-brand-tealLight text-brand-teal flex items-center justify-center mb-4">
                <Play size={22} />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-purple mb-2">FREELANCE WORK</h3>
              <p className="font-sans text-xs text-brand-textMuted leading-relaxed">
                Build your own portfolio by taking on independent projects and consulting gigs in the industry.
              </p>
            </div>

            {/* Opportunity 5 */}
            <div className="academic-card p-6 flex flex-col items-start bg-white">
              <div className="w-12 h-12 rounded-xl bg-brand-purpleMuted text-brand-purple flex items-center justify-center mb-4">
                <BarChart size={22} />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-purple mb-2">JUNIOR PERSONAL MARKETING MANAGER</h3>
              <p className="font-sans text-xs text-brand-textMuted leading-relaxed">
                Handle event promotions, digital outreach, and brand integrations for up-and-coming events.
              </p>
            </div>

            {/* Opportunity 6 */}
            <div className="academic-card p-6 flex flex-col items-start bg-white">
              <div className="w-12 h-12 rounded-xl bg-brand-tealLight text-brand-teal flex items-center justify-center mb-4">
                <Users size={22} />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-purple mb-2">WORK WITH US</h3>
              <p className="font-sans text-xs text-brand-textMuted leading-relaxed">
                Join the in-house production and teaching teams right here at IIEM upon graduation.
              </p>
            </div>

            {/* Opportunity 7 */}
            <div className="academic-card p-6 flex flex-col items-start bg-white">
              <div className="w-12 h-12 rounded-xl bg-brand-purpleMuted text-brand-purple flex items-center justify-center mb-4">
                <Target size={22} />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-purple mb-2">SENIOR PERSONAL MARKETING MANAGER</h3>
              <p className="font-sans text-xs text-brand-textMuted leading-relaxed">
                Direct comprehensive marketing strategies, secure sponsorships, and manage high-level PR campaigns.
              </p>
            </div>

            {/* Opportunity 8 */}
            <div className="academic-card p-6 flex flex-col items-start bg-white">
              <div className="w-12 h-12 rounded-xl bg-brand-tealLight text-brand-teal flex items-center justify-center mb-4">
                <Star size={22} />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-purple mb-2">BE YOUR OWN BOSS</h3>
              <p className="font-sans text-xs text-brand-textMuted leading-relaxed">
                Launch your own event agency with the knowledge, network, and operational templates we provide.
              </p>
            </div>

            {/* Opportunity 9 */}
            <div className="academic-card p-6 flex flex-col items-start bg-white">
              <div className="w-12 h-12 rounded-xl bg-brand-purpleMuted text-brand-purple flex items-center justify-center mb-4">
                <Briefcase size={22} />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-purple mb-2">FRANCHISE OPPORTUNITY</h3>
              <p className="font-sans text-xs text-brand-textMuted leading-relaxed">
                Expand your business footprint by partnering with established brands or starting a regional IIEM branch.
              </p>
            </div>

          </div>
          
          <div className="mt-16 text-center">
            <Link
              to="/admissions"
              className="px-8 py-3.5 bg-brand-purple hover:bg-brand-purpleLight text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-card"
            >
              ENROLL NOW <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
