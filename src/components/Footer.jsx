import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-brand-cream border-t border-brand-cream/10 pt-16 pb-8 px-6 md:px-12 relative overflow-hidden">
      {/* Background Graphic Lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/10 blur-3xl rounded-full -mr-20 -mt-20 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-brand-cream/10">
          {/* Main Identity */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" className="block tracking-tighter mb-6">
                <span className="block font-display text-4xl md:text-5xl leading-none text-brand-cream">
                  INDIA INSTITUTE
                </span>
                <span className="block font-display text-3xl md:text-4xl leading-none text-brand-magenta">
                  OF EVENT MANAGEMENT
                </span>
              </Link>
              <p className="text-brand-cream/70 text-sm max-w-sm font-sans mb-8">
                Adapting experiential marketing, stagecraft production, and wedding design into India's premium events education platform. Learn by doing.
              </p>
            </div>

            {/* Social Icons - SVGs for compatibility */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-brand-cream/20 flex items-center justify-center hover:bg-brand-magenta hover:border-brand-magenta hover:text-white transition-all duration-300 rounded-none text-brand-cream"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-brand-cream/20 flex items-center justify-center hover:bg-brand-purple hover:border-brand-purple hover:text-white transition-all duration-300 rounded-none text-brand-cream"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-brand-cream/20 flex items-center justify-center hover:bg-brand-magenta hover:border-brand-magenta hover:text-white transition-all duration-300 rounded-none text-brand-cream"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-brand-cream/20 flex items-center justify-center hover:bg-brand-teal hover:border-brand-teal hover:text-white transition-all duration-300 rounded-none text-brand-cream"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column Group */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <div className="font-display text-lg text-brand-teal mb-4 tracking-wider">NAVIGATION</div>
              <ul className="space-y-2 text-sm text-brand-cream/80 font-sans">
                <li>
                  <Link to="/" className="hover:text-brand-magenta transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-brand-magenta transition-colors">About IIEM</Link>
                </li>
                <li>
                  <Link to="/programs" className="hover:text-brand-magenta transition-colors">Programs</Link>
                </li>
                <li>
                  <Link to="/admissions" className="hover:text-brand-magenta transition-colors">Admissions</Link>
                </li>
                <li>
                  <Link to="/portfolio" className="hover:text-brand-magenta transition-colors">Portfolio & Showcase</Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-display text-lg text-brand-teal mb-4 tracking-wider">RESOURCES</div>
              <ul className="space-y-2 text-sm text-brand-cream/80 font-sans">
                <li>
                  <Link to="/placements" className="hover:text-brand-magenta transition-colors">Careers & Placements</Link>
                </li>
                <li>
                  <Link to="/campus-life" className="hover:text-brand-magenta transition-colors">Campus Life</Link>
                </li>
                <li>
                  <Link to="/industry-connect" className="hover:text-brand-magenta transition-colors">Industry Connect</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-brand-magenta transition-colors">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <div className="font-display text-lg text-brand-magenta mb-4 tracking-wider">HEAD OFFICE</div>
            <p className="text-sm text-brand-cream/80 mb-4 font-sans leading-relaxed">
              IIEM Campus, 3rd Floor, Creative Arts District,
              Senapati Bapat Marg, Lower Parel,
              Mumbai - 400013, India
            </p>
            <div className="space-y-1 text-sm text-brand-cream/80 font-sans">
              <div>
                <strong>Phone: </strong>
                <a href="tel:+919876543210" className="hover:text-brand-teal transition-colors">+91 98765 43210</a>
              </div>
              <div>
                <strong>Email: </strong>
                <a href="mailto:admissions@iiem.edu.in" className="hover:text-brand-teal transition-colors">admissions@iiem.edu.in</a>
              </div>
            </div>
          </div>
        </div>

        {/* Giant Footer Statement */}
        <div className="py-12 select-none pointer-events-none">
          <div className="font-display text-5xl sm:text-7xl md:text-9xl leading-none text-center tracking-tighter text-brand-purple/20 whitespace-nowrap overflow-hidden">
            CREATE EXPERIENCES. BUILD A CAREER.
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-cream/10 text-xs text-brand-cream/50 gap-4">
          <div>
            © {new Date().getFullYear()} India Institute of Event Management. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Designed for Premium Event Agencies</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-brand-magenta transition-colors group cursor-pointer"
            >
              Back to Top
              <ArrowUp size={12} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
