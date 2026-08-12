import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Filter } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { portfolioData } from '../data/siteData';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Weddings',
    'Corporate Events',
    'Concerts',
    'Brand Activations',
    'Festivals',
    'Exhibitions'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? portfolioData
    : portfolioData.filter((proj) => proj.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-brand-cream py-20 px-6 md:px-12 border-b border-brand-textDark/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-4xl">
            <span className="font-sans text-xs md:text-sm font-bold tracking-[0.25em] text-brand-magenta uppercase block mb-4">
              // EXPERIENTIAL ARCHIVE
            </span>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.85] tracking-tight uppercase text-brand-purple">
              THE WORK<br />
              <span className="text-brand-magenta">SPEAKS</span><br />
              <span className="text-brand-textDark">FOR ITSELF.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Filter Section (Light Cream) */}
      <section className="bg-brand-cream py-8 px-6 md:px-12 border-b border-brand-textDark/10 sticky top-[84px] md:top-[96px] z-30 bg-brand-cream/95 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-2 text-brand-purple font-display text-xl uppercase">
            <Filter size={16} className="text-brand-magenta" /> Filter Projects
          </div>
          
          <div className="overflow-x-auto no-scrollbar flex gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 font-display text-base border-2 tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'border-brand-purple bg-brand-purple text-brand-cream'
                    : 'border-brand-textDark/15 hover:border-brand-magenta text-brand-textDark'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry / Grid Compositions (Light Cream) */}
      <section className="bg-brand-cream py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className="flex flex-col group border border-brand-textDark/10 bg-brand-cream hover:border-brand-magenta transition-all duration-300"
                >
                  {/* Image container */}
                  <div className="aspect-[4/3] overflow-hidden relative border-b border-brand-textDark/10 bg-brand-purple/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-brand-purple text-brand-cream px-2 py-0.5 font-display text-xs">
                      {project.num}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-brand-teal text-brand-cream px-2 py-0.5 font-sans font-semibold text-[9px] uppercase tracking-widest">
                      {project.category}
                    </div>
                  </div>

                  {/* Text details */}
                  <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                    <div>
                      <h3 className="font-display text-2xl text-brand-purple group-hover:text-brand-magenta transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs text-brand-textDark/70 font-sans leading-relaxed mt-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-brand-textDark/5 text-[11px] font-sans text-brand-textDark/65 space-y-1">
                      <div><strong>Cohort Year: </strong> {project.year}</div>
                      <div><strong>Student Roles: </strong> {project.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center text-brand-textDark/50 font-display text-2xl">
              NO COMPLETED PROJECTS REGISTERED IN THIS SECTOR YET.
            </div>
          )}
        </div>
      </section>

      {/* Project Addition Info Panel (Dark Background) */}
      <section className="bg-brand-dark text-brand-cream py-20 px-6 md:px-12">
        <div className="max-w-[1000px] mx-auto text-center space-y-6">
          <div className="font-display text-xs text-brand-teal tracking-[0.25em] uppercase">// CURATING VALUE</div>
          <h2 className="font-display text-4xl sm:text-5xl text-brand-cream">WANT YOUR EVENT STAGED HERE?</h2>
          <p className="text-sm text-brand-cream/70 font-sans max-w-xl mx-auto leading-relaxed">
            Every semester, selected B2B campaigns, destination weddings, and college cultural festivals are run entirely by IIEM crew members. Apply as a partner or submit a project brief to collaborate.
          </p>
          <div className="pt-4">
            <a
              href="mailto:projects@iiem.edu.in"
              className="px-6 py-4 bg-brand-magenta hover:bg-brand-purple text-brand-cream transition-colors duration-300 font-display text-lg tracking-wider inline-flex items-center gap-2 neo-shadow"
            >
              SUBMIT A COLLABORATIVE BRIEF <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
