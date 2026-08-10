import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, GraduationCap, Percent, Star, Target, Users, Play, BarChart } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const CourseDetails = () => {
  return (
    <div className="w-full">
      {/* BANNER SECTION */}
      <section className="bg-brand-purple text-brand-cream px-6 md:px-12 py-16 relative overflow-hidden">
        {/* Geometric Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-magenta pointer-events-none transform skew-x-12 translate-x-1/3 opacity-80"></div>
        
        <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="font-sans text-brand-teal font-bold tracking-widest text-sm mb-4 uppercase">
              // Master the Industry
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.9] tracking-tight mb-6 text-white">
              BECOME A <span className="text-brand-magenta">PROFESSIONAL</span> EVENT MANAGER.
            </h1>
            <p className="font-sans text-brand-cream/80 text-lg max-w-xl">
              Step into the world of events with our comprehensive fast-track program designed for real-world execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-brand-dark/50 border border-brand-cream/10 p-6 flex items-start gap-4 neo-shadow-teal">
              <Star className="text-brand-teal mt-1 shrink-0" size={24} />
              <div>
                <div className="font-display text-2xl text-white mb-1">45 DAYS</div>
                <div className="font-sans text-sm text-brand-cream/70 uppercase tracking-widest">Next Level Course</div>
              </div>
            </div>
            <div className="bg-brand-dark/50 border border-brand-cream/10 p-6 flex items-start gap-4 neo-shadow-teal">
              <Percent className="text-brand-magenta mt-1 shrink-0" size={24} />
              <div>
                <div className="font-display text-2xl text-white mb-1">80% / 20%</div>
                <div className="font-sans text-sm text-brand-cream/70 uppercase tracking-widest">Practical / Theory</div>
              </div>
            </div>
            <div className="bg-brand-dark/50 border border-brand-cream/10 p-6 flex items-start gap-4 neo-shadow-teal">
              <GraduationCap className="text-brand-teal mt-1 shrink-0" size={24} />
              <div>
                <div className="font-display text-2xl text-white mb-1">LEARN + EARN</div>
                <div className="font-sans text-sm text-brand-cream/70 uppercase tracking-widest">On-ground Paid Gigs</div>
              </div>
            </div>
            <div className="bg-brand-dark/50 border border-brand-cream/10 p-6 flex items-start gap-4 neo-shadow-teal">
              <Target className="text-brand-magenta mt-1 shrink-0" size={24} />
              <div>
                <div className="font-display text-2xl text-white mb-1">100%</div>
                <div className="font-sans text-sm text-brand-cream/70 uppercase tracking-widest">Job Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM MODULES SECTION */}
      <section className="bg-white px-6 md:px-12 py-24 border-b border-brand-textDark/10">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="COURSE CURRICULUM"
            title="WHAT YOU WILL LEARN."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
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
              <div key={idx} className="bg-brand-cream p-6 border border-brand-textDark/10 hover:border-brand-purple hover:bg-white transition-all duration-300 neo-shadow flex flex-col items-center text-center">
                <h4 className="font-display text-lg text-brand-purple mb-3 h-14 flex items-center justify-center leading-tight">{item.title}</h4>
                <div className="w-8 h-[1px] bg-brand-magenta mb-3"></div>
                <p className="font-sans font-bold text-xs text-brand-textDark uppercase tracking-widest mb-1">{item.subtitle}</p>
                <p className="font-sans text-xs text-brand-textDark/70">Practical Knowledge<br/>Theory Knowledge</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9 JOB OPPORTUNITIES SECTION */}
      <section className="bg-brand-cream px-6 md:px-12 py-24">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="CAREER PATHWAYS"
            title="9 UNIQUE JOB OPPORTUNITIES."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            
            {/* Opportunity 1 */}
            <div className="bg-white p-8 border border-brand-textDark/10 flex flex-col items-center text-center group hover:border-brand-purple hover:bg-brand-purple/5 transition-all duration-300 neo-shadow">
              <div className="w-16 h-16 rounded-full bg-brand-purple/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase size={28} className="text-brand-purple" />
              </div>
              <h3 className="font-display text-2xl text-brand-purple mb-2">JUNIOR PERSONAL EVENT MANAGER</h3>
              <p className="font-sans text-sm text-brand-textDark/70 mt-2">Manage client relations and coordinate small-to-medium scale social events with precision.</p>
            </div>

            {/* Opportunity 2 */}
            <div className="bg-white p-8 border border-brand-textDark/10 flex flex-col items-center text-center group hover:border-brand-purple hover:bg-brand-purple/5 transition-all duration-300 neo-shadow">
              <div className="w-16 h-16 rounded-full bg-brand-teal/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users size={28} className="text-brand-teal" />
              </div>
              <h3 className="font-display text-2xl text-brand-purple mb-2">JOB PLACEMENT</h3>
              <p className="font-sans text-sm text-brand-textDark/70 mt-2">Direct placement opportunities with our extensive network of top event agencies.</p>
            </div>

            {/* Opportunity 3 */}
            <div className="bg-white p-8 border border-brand-textDark/10 flex flex-col items-center text-center group hover:border-brand-purple hover:bg-brand-purple/5 transition-all duration-300 neo-shadow">
              <div className="w-16 h-16 rounded-full bg-brand-magenta/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase size={28} className="text-brand-magenta" />
              </div>
              <h3 className="font-display text-2xl text-brand-purple mb-2">SENIOR PERSONAL EVENT MANAGER</h3>
              <p className="font-sans text-sm text-brand-textDark/70 mt-2">Lead large-scale destination events, manage vendor networks, and direct complete production operations.</p>
            </div>

            {/* Opportunity 4 */}
            <div className="bg-white p-8 border border-brand-textDark/10 flex flex-col items-center text-center group hover:border-brand-purple hover:bg-brand-purple/5 transition-all duration-300 neo-shadow">
              <div className="w-16 h-16 rounded-full bg-brand-purple/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Play size={28} className="text-brand-purple" />
              </div>
              <h3 className="font-display text-2xl text-brand-purple mb-2">FREELANCE WORK</h3>
              <p className="font-sans text-sm text-brand-textDark/70 mt-2">Build your own portfolio by taking on independent projects and consulting gigs in the industry.</p>
            </div>

            {/* Opportunity 5 */}
            <div className="bg-white p-8 border border-brand-textDark/10 flex flex-col items-center text-center group hover:border-brand-purple hover:bg-brand-purple/5 transition-all duration-300 neo-shadow">
              <div className="w-16 h-16 rounded-full bg-brand-teal/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart size={28} className="text-brand-teal" />
              </div>
              <h3 className="font-display text-2xl text-brand-purple mb-2">JUNIOR PERSONAL MARKETING MANAGER</h3>
              <p className="font-sans text-sm text-brand-textDark/70 mt-2">Handle event promotions, digital outreach, and brand integrations for up-and-coming events.</p>
            </div>

            {/* Opportunity 6 */}
            <div className="bg-white p-8 border border-brand-textDark/10 flex flex-col items-center text-center group hover:border-brand-purple hover:bg-brand-purple/5 transition-all duration-300 neo-shadow">
              <div className="w-16 h-16 rounded-full bg-brand-magenta/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users size={28} className="text-brand-magenta" />
              </div>
              <h3 className="font-display text-2xl text-brand-purple mb-2">WORK WITH US</h3>
              <p className="font-sans text-sm text-brand-textDark/70 mt-2">Join the in-house production and teaching teams right here at IIEM upon graduation.</p>
            </div>

            {/* Opportunity 7 */}
            <div className="bg-white p-8 border border-brand-textDark/10 flex flex-col items-center text-center group hover:border-brand-purple hover:bg-brand-purple/5 transition-all duration-300 neo-shadow">
              <div className="w-16 h-16 rounded-full bg-brand-purple/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target size={28} className="text-brand-purple" />
              </div>
              <h3 className="font-display text-2xl text-brand-purple mb-2">SENIOR PERSONAL MARKETING MANAGER</h3>
              <p className="font-sans text-sm text-brand-textDark/70 mt-2">Direct comprehensive marketing strategies, secure sponsorships, and manage high-level PR campaigns.</p>
            </div>

            {/* Opportunity 8 */}
            <div className="bg-white p-8 border border-brand-textDark/10 flex flex-col items-center text-center group hover:border-brand-purple hover:bg-brand-purple/5 transition-all duration-300 neo-shadow">
              <div className="w-16 h-16 rounded-full bg-brand-teal/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Star size={28} className="text-brand-teal" />
              </div>
              <h3 className="font-display text-2xl text-brand-purple mb-2">BE YOUR OWN BOSS</h3>
              <p className="font-sans text-sm text-brand-textDark/70 mt-2">Launch your own event agency with the knowledge, network, and operational templates we provide.</p>
            </div>

            {/* Opportunity 9 */}
            <div className="bg-white p-8 border border-brand-textDark/10 flex flex-col items-center text-center group hover:border-brand-purple hover:bg-brand-purple/5 transition-all duration-300 neo-shadow">
              <div className="w-16 h-16 rounded-full bg-brand-magenta/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase size={28} className="text-brand-magenta" />
              </div>
              <h3 className="font-display text-2xl text-brand-purple mb-2">FRANCHISE OPPORTUNITY</h3>
              <p className="font-sans text-sm text-brand-textDark/70 mt-2">Expand your business footprint by partnering with established brands or starting a regional IIEM branch.</p>
            </div>

          </div>
          
          <div className="mt-16 text-center">
            <Link
              to="/admissions"
              className="px-8 py-4 bg-brand-purple text-brand-cream hover:bg-brand-magenta transition-all duration-300 font-display text-lg tracking-wider inline-flex items-center gap-2 neo-shadow-teal"
            >
              ENROLL NOW <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
