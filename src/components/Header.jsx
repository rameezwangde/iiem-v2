import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { programsData } from '../data/siteData';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled
            ? 'bg-brand-cream/90 backdrop-blur-md border-brand-textDark/15 py-3 shadow-md'
            : 'bg-brand-cream/40 backdrop-blur-sm border-transparent py-5'
        }`}
      >
        <div className="w-full max-w-none px-6 lg:px-12 xl:px-16 flex justify-between items-center gap-4">
          {/* Logo Brand Identity */}
          <Link to="/" className="flex items-center group">
            <img src="/iiem-logo-cropped.png" alt="IIEM Logo" className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-4">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative group py-2"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className={`px-2 py-1 flex items-center gap-1 font-medium text-sm transition-colors duration-300 hover:text-brand-magenta whitespace-nowrap ${
                        location.pathname.startsWith('/programs') ? 'text-brand-purple font-semibold' : 'text-brand-textDark/80'
                      }`}
                    >
                      {link.name}
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-80 bg-brand-cream border border-brand-textDark/15 shadow-xl p-4 neo-shadow-purple"
                        >
                          <div className="flex flex-col space-y-1">
                            <Link
                              to="/programs"
                              className="font-display text-lg text-brand-purple hover:text-brand-magenta mb-2 pb-1 border-b border-brand-textDark/10 block whitespace-normal"
                            >
                              ALL PROGRAMS VIEW
                            </Link>
                            {programsData.map((prog) => (
                              <Link
                                key={prog.id}
                                to={`/programs#${prog.id}`}
                                className="group flex items-center justify-between p-2 rounded hover:bg-brand-purple/5 transition-colors whitespace-normal"
                              >
                                <div>
                                  <div className="font-semibold text-xs text-brand-textDark/90 group-hover:text-brand-purple">
                                    {prog.title}
                                  </div>
                                  <div className="text-[10px] text-brand-textDark/60 truncate max-w-[220px]">
                                    {prog.shortDesc}
                                  </div>
                                </div>
                                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-brand-magenta transition-all" />
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
                  className={`relative px-2 py-1 font-medium text-sm transition-all duration-300 hover:text-brand-magenta whitespace-nowrap ${
                    isActive ? 'text-brand-purple font-semibold' : 'text-brand-textDark/85'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-brand-magenta"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side CTA Button (Desktop) - Fixed Neo-Brutalist Grid Monogram */}
          <div className="hidden xl:block">
            <Link
              to="/admissions"
              className="relative block font-display text-brand-textDark group hover:text-brand-magenta transition-all duration-300"
            >
              <div className="relative border-2 border-brand-textDark bg-brand-cream px-3 py-1 flex flex-col items-stretch overflow-visible min-w-[110px]">
                {/* Top extending line (to the left) */}
                <div className="absolute top-0 right-full w-3 h-[2px] bg-brand-textDark"></div>
                {/* Middle extending line (to the right) */}
                <div className="absolute bottom-1/2 left-full w-3 h-[2px] bg-brand-textDark"></div>
                {/* Bottom extending line (to the left) */}
                <div className="absolute bottom-0 right-full w-3 h-[2px] bg-brand-textDark"></div>
                
                {/* Top Row: APPLY NOW */}
                <span className="text-center text-xs tracking-wider font-bold text-brand-textDark">
                  APPLY NOW
                </span>
                
                {/* Middle Divider */}
                <div className="h-[2px] bg-brand-textDark w-full my-1"></div>
                
                {/* Bottom Row: Split grid */}
                <div className="grid grid-cols-3 divide-x-2 divide-brand-textDark h-4">
                  {/* Left Column: Arrow */}
                  <div className="col-span-1 flex items-center justify-center font-bold text-xs group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                  {/* Right Column: Accent background */}
                  <div className="col-span-2 bg-brand-purple/10 group-hover:bg-brand-purple/20 transition-colors"></div>
                </div>
              </div>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 text-brand-textDark hover:text-brand-magenta transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 w-full h-screen bg-brand-cream z-40 flex flex-col justify-between p-6 pt-24 overflow-y-auto"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => {
                if (link.isDropdown) {
                  return (
                    <div key={link.name} className="flex flex-col">
                      <div className="font-display text-3xl text-brand-purple border-b border-brand-textDark/10 pb-2">
                        {link.name}
                      </div>
                      <div className="flex flex-col pl-4 mt-2 space-y-2 border-l border-brand-purple/20">
                        <Link
                          to="/programs"
                          onClick={() => setIsOpen(false)}
                          className="font-medium text-sm text-brand-magenta"
                        >
                          View All Programs
                        </Link>
                        {programsData.map((prog) => (
                          <Link
                            key={prog.id}
                            to={`/programs#${prog.id}`}
                            onClick={() => setIsOpen(false)}
                            className="text-sm text-brand-textDark/80 hover:text-brand-purple py-1"
                          >
                            • {prog.title}
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
                    className={`font-display text-3xl border-b border-brand-textDark/10 pb-2 transition-colors ${
                      isActive ? 'text-brand-magenta' : 'text-brand-textDark hover:text-brand-purple'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col gap-4 mt-8 pb-8">
              <Link
                to="/admissions"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-6 py-4 bg-brand-purple text-brand-cream font-display text-xl hover:bg-brand-magenta transition-all duration-300 neo-shadow"
              >
                APPLY FOR ADMISSIONS →
              </Link>
              <div className="flex justify-between items-center text-xs text-brand-textDark/60">
                <span>© {new Date().getFullYear()} IIEM INDIA</span>
                <span>editorial + event education</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
