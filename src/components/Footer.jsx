import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, MapPin, Phone, Mail, GraduationCap, ShieldCheck } from 'lucide-react';
import { programsData } from '../data/siteData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-brand-textDark border-t border-brand-border pt-16 pb-8 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-brand-border">
          {/* Main Institutional Identity */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-block mb-5">
                <img src="/iiem-logo-cropped.png" alt="IIEM Logo" className="h-12 md:h-14 w-auto object-contain" />
              </Link>
              <p className="text-brand-textMuted text-xs sm:text-sm max-w-sm leading-relaxed mb-6 font-sans">
                India Institute of Event Management (IIEM) - Adapting experiential marketing, stagecraft production, and wedding design into India's premier events education platform. Learn by doing.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-teal bg-brand-tealLight px-3 py-1.5 rounded-lg w-fit border border-brand-teal/20">
                <ShieldCheck size={14} /> Certified Event Management Programs
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2.5 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-brand-cream border border-brand-border flex items-center justify-center hover:bg-brand-purple hover:border-brand-purple hover:text-white transition-all text-brand-textDark/80"
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
                className="w-9 h-9 rounded-lg bg-brand-cream border border-brand-border flex items-center justify-center hover:bg-brand-purple hover:border-brand-purple hover:text-white transition-all text-brand-textDark/80"
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
                className="w-9 h-9 rounded-lg bg-brand-cream border border-brand-border flex items-center justify-center hover:bg-brand-purple hover:border-brand-purple hover:text-white transition-all text-brand-textDark/80"
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
                className="w-9 h-9 rounded-lg bg-brand-cream border border-brand-border flex items-center justify-center hover:bg-brand-purple hover:border-brand-purple hover:text-white transition-all text-brand-textDark/80"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Academic Programs Column */}
          <div className="lg:col-span-3">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-purple mb-4">
              Academic Programs
            </div>
            <ul className="space-y-2.5 text-xs text-brand-textMuted font-sans">
              {programsData.slice(0, 6).map((prog) => (
                <li key={prog.id}>
                  <Link to={`/programs#${prog.id}`} className="hover:text-brand-purple transition-colors flex items-center gap-1.5">
                    <span className="text-brand-magenta font-bold">›</span> {prog.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/programs" className="text-brand-purple hover:underline text-xs font-bold pt-1 inline-block">
                  View All Programs →
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation & Resources */}
          <div className="lg:col-span-2">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-purple mb-4">
              Quick Links
            </div>
            <ul className="space-y-2.5 text-xs text-brand-textMuted font-sans">
              <li>
                <Link to="/" className="hover:text-brand-purple transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-purple transition-colors">About IIEM</Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-brand-purple transition-colors">Admissions</Link>
              </li>
              <li>
                <Link to="/placements" className="hover:text-brand-purple transition-colors">Careers & Placements</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-brand-purple transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/campus-life" className="hover:text-brand-purple transition-colors">Campus Life</Link>
              </li>
              <li>
                <Link to="/industry-connect" className="hover:text-brand-purple transition-colors">Industry Connect</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-purple transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-purple mb-4">
              Campus & Admissions Office
            </div>
            <div className="space-y-3 text-xs text-brand-textMuted font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-brand-purple shrink-0 mt-0.5" />
                <p className="leading-relaxed text-brand-textMuted">
                  Ullal Main Rd, Annapurneshwari Layout, Muneshwara Nagar, Muneshwaranagar, Jnana Ganga Nagar, Bengaluru, Karnataka 560056
                </p>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Phone size={14} className="text-brand-purple shrink-0" />
                <a href="tel:+919019876442" className="hover:text-brand-purple transition-colors font-bold text-brand-textDark">+91 9019876442</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-brand-purple shrink-0" />
                <a href="mailto:infotiiemblr@gmail.com" className="hover:text-brand-purple transition-colors font-medium">infotiiemblr@gmail.com</a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-border">
              <Link 
                to="/admissions"
                className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-brand-purple hover:bg-brand-purpleLight text-white rounded-lg text-xs font-bold tracking-wider uppercase transition-colors shadow-sm"
              >
                Enroll for Next Batch
              </Link>
            </div>
          </div>
        </div>

        {/* Institutional Statement Banner */}
        <div className="py-8 select-none border-b border-brand-border text-center">
          <div className="font-display text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-brand-purple/20">
            CREATE EXPERIENCES. BUILD A CAREER.
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 text-xs text-brand-textMuted gap-4">
          <div>
            © {new Date().getFullYear()} India Institute of Event Management. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Professional Event Management Institute</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-brand-purple transition-colors group cursor-pointer font-bold text-brand-textDark"
            >
              Back to Top
              <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


