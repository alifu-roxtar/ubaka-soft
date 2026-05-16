// components/Hero.jsx - Dark Developer Theme
import React, { useState, useEffect } from 'react';
import { FaRocket, FaCheckCircle, FaTerminal, FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);

  const terminalLines = [
    '> Initializing UbakaSoft system...',
    '> Loading developer environment...',
    '> Ready for deployment',
    '> Welcome to the future of African tech'
  ];

  useEffect(() => {
    if (lineIndex < terminalLines.length) {
      const timer = setTimeout(() => {
        setTypedText(terminalLines[lineIndex]);
        setLineIndex(lineIndex + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [lineIndex]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-50 via-dark-100 to-primary-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 bg-dark-100/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-500/30">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-mono">System Online</span>
              <span className="text-gray-500 text-sm">|</span>
              <span className="text-primary-400 text-sm font-mono">v2.0.0</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Building Africa's
              </span>
              <br />
              <span className="text-white">Digital Future</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              We help startups and enterprises build scalable web apps, mobile applications, 
              AI systems, and digital platforms from Kigali, Rwanda.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to='/contact' className="group bg-gradient-to-r from-primary-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center gap-2">
                Start Project
                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </Link>
              <Link to={'/docs'} className="border border-primary-500 text-primary-400 px-8 py-3 rounded-lg font-semibold hover:bg-primary-500/10 transition-all duration-300 flex items-center gap-2">
                <FaTerminal />
                View Documentation
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-6">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                <span className="text-gray-300">50+ Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRocket className="text-primary-500" />
                <span className="text-gray-300">100+ Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300">24/7 Support</span>
              </div>
            </div>
          </div>
          
          {/* Terminal Window */}
          <div className="glass-effect rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-dark-200 px-4 py-3 flex items-center space-x-2 border-b border-dark-300">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-400 ml-2 font-mono">developer@ubakasoft:~/project</span>
            </div>
            <div className="p-6 space-y-2 font-mono text-sm">
              <div className="text-gray-400">$ npm run deploy</div>
              {terminalLines.slice(0, lineIndex).map((line, idx) => (
                <div key={idx} className="text-green-400 animate-slide-up">
                  {line}
                </div>
              ))}
              {lineIndex < terminalLines.length && (
                <div className="flex items-center gap-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-400">{typedText}</span>
                  <span className="w-2 h-4 bg-primary-500 animate-pulse"></span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;