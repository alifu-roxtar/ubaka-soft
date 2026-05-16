// App.jsx - Updated with standard Tailwind classes
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { FaHome, FaServicestack, FaProjectDiagram, FaEnvelope, FaTrophy, FaUsers, FaQuestionCircle, FaCode } from 'react-icons/fa';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Awards from './components/Awards';
import WorkingArea from './components/WorkingArea';
import OrganizationCenter from './components/OrganizationCenter';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-gray-900/80 backdrop-blur-sm border-b border-gray-800'
        }`}>
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <FaCode className="text-3xl text-blue-500 animate-pulse" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-mono">
                    UbakaSoft
                  </h1>
                  <p className="text-xs text-gray-500 font-mono">&gt; dev_environment</p>
                </div>
              </div>
              
              <div className="hidden md:flex space-x-6">
                {[
                  { to: '/', icon: FaHome, label: 'Home' },
                  { to: '/services', icon: FaServicestack, label: 'Services' },
                  { to: '/projects', icon: FaProjectDiagram, label: 'Projects' },
                  { to: '/team', icon: FaUsers, label: 'Team' },
                  { to: '/awards', icon: FaTrophy, label: 'Awards' },
                  { to: '/faq', icon: FaQuestionCircle, label: 'FAQ' },
                  { to: '/contact', icon: FaEnvelope, label: 'Contact' },
                ].map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center space-x-2 px-3 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                          : 'text-gray-400 hover:text-blue-400 hover:bg-gray-800'
                      }`
                    }
                  >
                    <item.icon className="text-sm" />
                    <span>{item.label}</span>
                  </NavLink>
                ))}
              </div>
              
              <div className="hidden md:flex items-center space-x-2">
                <div className="bg-gray-800 rounded-lg px-3 py-1 border border-gray-700">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-400 ml-2">./status</span>
                  <span className="text-blue-400 ml-2 animate-pulse">█</span>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<Team />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <Partners />
      <WorkingArea />
      <OrganizationCenter />
    </>
  );
};

export default App;