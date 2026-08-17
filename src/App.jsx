import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Page Imports
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Admissions from './pages/Admissions';
import Placements from './pages/Placements';
import Portfolio from './pages/Portfolio';
import CampusLife from './pages/CampusLife';
import IndustryConnect from './pages/IndustryConnect';
import Contact from './pages/Contact';
import CourseDetails from './pages/CourseDetails';

// Scroll to Top behavior on route navigation
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-cream text-brand-textDark selection:bg-brand-purple selection:text-white">
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-grow pt-[72px] md:pt-[80px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/industry-connect" element={<IndustryConnect />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/course-details" element={<CourseDetails />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

