import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Hammer, Music, Award } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const CampusLife = () => {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-brand-cream py-20 px-6 md:px-12 border-b border-brand-textDark/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-4xl">
            <span className="font-sans text-xs md:text-sm font-bold tracking-[0.25em] text-brand-magenta uppercase block mb-4">
              // ON CAMPUS STORY
            </span>
            <h1 className="font-display text-5xl sm:text-7xl md:text-9xl leading-[0.85] tracking-tight uppercase text-brand-purple">
              THIS IS WHERE<br />
              <span className="text-brand-magenta">IDEAS COME</span><br />
              <span className="text-brand-textDark">ALIVE.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Culture Description (Cream background) */}
      <section className="bg-brand-cream py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              eyebrow="CAMPUS ENVIRONMENT"
              title="THE DYNAMICS OF AN AGENT WORKSPACE."
            />
            <p className="font-sans text-brand-textDark/85 text-base md:text-lg leading-relaxed">
              IIEM campus is modeled directly on standard event production and media agencies. Instead of desks and writing panels, our labs feature lighting control setups, fabric modeling tables, rigging structures, and collaborative moodboarding zones.
            </p>
            <p className="font-sans text-brand-textDark/70 text-sm md:text-base leading-relaxed">
              Students operate in cohorts, taking up operational roles (such as Producer, Technical Liaison, Hospitality Lead, or Stage Director) to plan mock events, solve structural failures, and pitch concepts directly to visiting recruiters.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="aspect-square overflow-hidden border border-brand-textDark/15 bg-brand-purple/5 relative">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=80"
                alt="Student crew planning decor designs"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="aspect-square overflow-hidden border border-brand-textDark/15 bg-brand-purple/5 relative pt-8">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80"
                alt="Backstage team discussions"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all neo-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Campus Hubs / Activities (Dark background) */}
      <section className="bg-brand-dark text-brand-cream py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="CAMPUS SECTORS"
            title="WHERE WE BUILD."
            darkBg={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {/* Hub 1 */}
            <div className="p-8 border border-brand-cream/10 bg-brand-dark hover:border-brand-teal transition-colors">
              <Hammer size={32} className="text-brand-teal mb-6" />
              <h3 className="font-display text-2xl text-brand-cream mb-2">FABRICATION LAB</h3>
              <p className="font-sans text-xs text-brand-cream/70 leading-relaxed">
                Learn spatial layout calculations, material weight support, backdrop building, and scenic wedding set design with active toolkits.
              </p>
            </div>

            {/* Hub 2 */}
            <div className="p-8 border border-brand-cream/10 bg-brand-dark hover:border-brand-magenta transition-colors">
              <Sparkles size={32} className="text-brand-magenta mb-6" />
              <h3 className="font-display text-2xl text-brand-cream mb-2">EXPERIENTIAL CENTER</h3>
              <p className="font-sans text-xs text-brand-cream/70 leading-relaxed">
                Work on interactive digital setups, LED content triggers, holographic installations, and experiential branding frameworks.
              </p>
            </div>

            {/* Hub 3 */}
            <div className="p-8 border border-brand-cream/10 bg-brand-dark hover:border-brand-teal transition-colors">
              <Music size={32} className="text-brand-teal mb-6" />
              <h3 className="font-display text-2xl text-brand-cream mb-2">AV CONTROL RIG</h3>
              <p className="font-sans text-xs text-brand-cream/70 leading-relaxed">
                Gain hands-on training with professional digital soundmixers, concert lighting desks, sound processors, and stage monitors.
              </p>
            </div>

            {/* Hub 4 */}
            <div className="p-8 border border-brand-cream/10 bg-brand-dark hover:border-brand-magenta transition-colors">
              <Award size={32} className="text-brand-magenta mb-6" />
              <h3 className="font-display text-2xl text-brand-cream mb-2">THE PITCH DECK</h3>
              <p className="font-sans text-xs text-brand-cream/70 leading-relaxed">
                A custom conference boardroom modeled after agency executive suites where students pitch plans to partner agency heads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Showcase (Cream background) */}
      <section className="bg-brand-cream py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="STUDENT GALLERY"
            title="LIVING THE INDUSTRY LIFE."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { img: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=600&q=80', label: 'Wedding theme mockups' },
              { img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80', label: 'Concert staging drills' },
              { img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80', label: 'Corporate summits crew support' },
              { img: 'https://images.unsplash.com/photo-1505232458627-a72726f5b712?auto=format&fit=crop&w=600&q=80', label: 'Backstage soundcheck monitoring' },
              { img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80', label: 'Theme lighting installations' },
              { img: 'https://images.unsplash.com/photo-1520242739010-44e95bde329e?auto=format&fit=crop&w=600&q=80', label: 'B2B panel organization support' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col group border border-brand-textDark/10 hover:border-brand-purple transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden bg-brand-purple/5 border-b border-brand-textDark/10">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-brand-cream">
                  <span className="font-display text-lg text-brand-purple group-hover:text-brand-magenta transition-colors">
                    {item.label.toUpperCase()}
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
