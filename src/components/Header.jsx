import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight, Sparkles, GraduationCap } from 'lucide-react';
import { programsData } from '../data/siteData';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About IIEM', path: '/about' },
    { name: 'Programs', path: '/programs', isDropdown: true },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Placements & Careers', path: '/placements' },
    { name: 'Portfolio & Showcase', path: '/portfolio' },
    { name: 'Campus Life', path: '/campus-life' },
    { name: 'Industry Connect', path: '/industry-connect' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-brand-border py-3 shadow-subtle'
            : 'bg-brand-cream/80 backdrop-blur-sm border-b border-brand-border/60 py-4'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center gap-4">
          {/* Logo Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/iiem-logo-cropped.png" 
              alt="IIEM Logo" 
              className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-4 2xl:gap-6 shrink-0">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                const isDropdownActive = location.pathname.startsWith('/programs') || location.pathname.startsWith('/course');
                return (
                  <div
                    key={link.name}
                    className="relative group py-2"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className={`relative py-2 px-1 flex items-center gap-1.5 text-[11.5px] 2xl:text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors duration-200 ${
                        isDropdownActive 
                          ? 'text-brand-purple' 
                          : 'text-brand-textDark/80 hover:text-brand-purple'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={13} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-brand-purple' : ''}`} />
                      {isDropdownActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-brand-purple rounded-full" />
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-0 mt-1.5 w-96 bg-white border border-brand-border rounded-xl shadow-dropdown p-3 z-50"
                        >
                          <div className="flex items-center justify-between px-3 py-2 border-b border-brand-border/60 mb-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-purple flex items-center gap-1.5">
                              <GraduationCap size={14} className="text-brand-purple" /> Academic Programs
                            </span>
                            <Link
                              to="/programs"
                              className="text-[11px] font-semibold text-brand-purple hover:underline flex items-center gap-1"
                            >
                              All Programs <ArrowRight size={11} />
                            </Link>
                          </div>
                          
                          <div className="flex flex-col space-y-1 max-h-[380px] overflow-y-auto">
                            {programsData.map((prog) => (
                              <Link
                                key={prog.id}
                                to={`/programs#${prog.id}`}
                                className="group flex items-start justify-between p-2.5 rounded-lg hover:bg-brand-purpleMuted/60 transition-colors"
                              >
                                <div className="pr-3">
                                  <div className="font-semibold text-xs text-brand-textDark group-hover:text-brand-purple flex items-center gap-2">
                                    <span className="text-[10px] font-mono text-brand-purple font-bold bg-brand-purpleMuted px-1.5 py-0.5 rounded">
                                      {prog.num}
                                    </span>
                                    {prog.title}
                                  </div>
                                  <div className="text-[11px] text-brand-textMuted line-clamp-1 mt-0.5">
                                    {prog.shortDesc}
                                  </div>
                                </div>
                                <ArrowRight size={13} className="text-brand-purple opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all mt-1 shrink-0" />
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative py-2 px-1 text-[11.5px] 2xl:text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors duration-200 ${
                    isActive 
                      ? 'text-brand-purple' 
                      : 'text-brand-textDark/80 hover:text-brand-purple'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-brand-purple rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side CTA Button (Desktop) */}
          <div className="hidden xl:flex items-center gap-3">
            <Link
              to="/admissions"
              className="px-5 py-2.5 bg-brand-purple hover:bg-brand-purpleLight text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-subtle hover:shadow-card transition-all duration-200 flex items-center gap-2 group"
            >
              <span>Apply for Admissions</span>
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 rounded-lg text-brand-textDark hover:bg-black/5 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 w-full h-screen bg-brand-cream z-40 flex flex-col justify-between p-6 pt-24 overflow-y-auto"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                if (link.isDropdown) {
                  return (
                    <div key={link.name} className="flex flex-col border-b border-brand-border/60 pb-3">
                      <div className="font-display text-lg font-bold text-brand-purple py-1 flex items-center justify-between">
                        <span>{link.name}</span>
                        <span className="text-xs text-brand-textMuted font-sans">({programsData.length} Courses)</span>
                      </div>
                      <div className="flex flex-col pl-3 mt-2 space-y-2 border-l-2 border-brand-purple/20">
                        <Link
                          to="/programs"
                          onClick={() => setIsOpen(false)}
                          className="text-xs font-bold text-brand-magenta py-1"
                        >
                          → View All Programs Overview
                        </Link>
                        {programsData.map((prog) => (
                          <Link
                            key={prog.id}
                            to={`/programs#${prog.id}`}
                            onClick={() => setIsOpen(false)}
                            className="text-xs text-brand-textDark/80 hover:text-brand-purple py-1"
                          >
                            <span className="text-brand-purple font-mono font-bold mr-1.5">{prog.num}.</span>
                            {prog.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                const isActive = location.pathname === link.path;

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-display text-lg font-bold py-2.5 px-3 rounded-xl transition-all flex items-center justify-between border-b border-brand-border/60 ${
                      isActive 
                        ? 'text-brand-purple bg-brand-purple/10 border-l-4 border-l-brand-purple font-extrabold' 
                        : 'text-brand-textDark hover:text-brand-purple hover:bg-brand-purple/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-brand-purple"></span>}
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col gap-4 mt-8 pb-8">
              <Link
                to="/admissions"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-6 py-3.5 bg-brand-purple text-white font-bold text-sm tracking-wider uppercase rounded-xl hover:bg-brand-purpleLight transition-all duration-200 flex items-center justify-center gap-2 shadow-card"
              >
                <span>Apply for Admissions</span>
                <ArrowRight size={16} />
              </Link>
              <div className="flex justify-between items-center text-xs text-brand-textMuted">
                <span>© {new Date().getFullYear()} IIEM INDIA</span>
                <span>Premier Event Education</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

