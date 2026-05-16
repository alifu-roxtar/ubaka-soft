// components/Footer.jsx - Dark Developer Theme
import React from 'react';
import { FaCode, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaTwitter, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-100 border-t border-dark-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaCode className="text-3xl text-primary-500" />
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                  UbakaSoft
                </h3>
                <p className="text-xs text-gray-500 font-mono">&gt; dev_environment</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Building digital solutions for Rwanda & Beyond. African future-tech since 2024.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4 font-mono text-sm">// quick_links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-primary-400 transition flex items-center gap-2"><span className="text-primary-500">&gt;</span> Home</a></li>
              <li><a href="/services" className="hover:text-primary-400 transition flex items-center gap-2"><span className="text-primary-500">&gt;</span> Services</a></li>
              <li><a href="/projects" className="hover:text-primary-400 transition flex items-center gap-2"><span className="text-primary-500">&gt;</span> Projects</a></li>
              <li><a href="/contact" className="hover:text-primary-400 transition flex items-center gap-2"><span className="text-primary-500">&gt;</span> Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4 font-mono text-sm">// services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Web Development</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Mobile Apps</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Cloud Solutions</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> AI Integration</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4 font-mono text-sm">// contact</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary-500" />
                <span>Kicukiro, Kigali, Rwanda</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-primary-500" />
                <span>+250 788 123 456</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-primary-500" />
                <span>info@ubakasoft.com</span>
              </div>
            </div>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition"><FaGithub /></a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-dark-300 pt-6 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <span>© 2024 UbakaSoft</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Built with <FaHeart className="text-red-500 animate-pulse" /> in Rwanda
            </span>
            <span>•</span>
            <span className="font-mono text-green-400">v2.0.0</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;