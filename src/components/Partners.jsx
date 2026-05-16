// components/Partners.jsx - Dark Developer Theme
import React, { useState } from 'react';
import { 
  FaHandshake, FaBuilding, FaChartLine, FaStar, 
  FaTerminal, FaUsers, FaGlobe, FaAward,
  FaCheckCircle, FaArrowRight
} from 'react-icons/fa';

const Partners = () => {
  const [hoveredPartner, setHoveredPartner] = useState(null);

  const partners = {
    enterprise: [
      { name: 'BK Group', logo: 'https://via.placeholder.com/150x80', category: 'Banking', since: '2022', projects: 5 },
      { name: 'MTN Rwanda', logo: 'https://via.placeholder.com/150x80', category: 'Telecom', since: '2021', projects: 8 },
      { name: 'Airtel Africa', logo: 'https://via.placeholder.com/150x80', category: 'Telecom', since: '2022', projects: 4 },
      { name: 'Volkswagen', logo: 'https://via.placeholder.com/150x80', category: 'Automotive', since: '2023', projects: 3 },
    ],
    tech: [
      { name: 'Microsoft', logo: 'https://via.placeholder.com/150x80', category: 'Cloud', since: '2022', projects: 6 },
      { name: 'AWS', logo: 'https://via.placeholder.com/150x80', category: 'Cloud', since: '2021', projects: 12 },
      { name: 'Google', logo: 'https://via.placeholder.com/150x80', category: 'Technology', since: '2022', projects: 4 },
      { name: 'GitHub', logo: 'https://via.placeholder.com/150x80', category: 'DevOps', since: '2023', projects: 15 },
    ],
    government: [
      { name: 'Rwanda Dev Board', logo: 'https://via.placeholder.com/150x80', category: 'Government', since: '2021', projects: 7 },
      { name: 'IRC Rwanda', logo: 'https://via.placeholder.com/150x80', category: 'NGO', since: '2022', projects: 3 },
      { name: 'Sandbox Africa', logo: 'https://via.placeholder.com/150x80', category: 'Innovation Hub', since: '2022', projects: 5 },
    ]
  };

  const stats = [
    { icon: FaHandshake, value: '50+', label: 'Active Partners', color: 'blue' },
    { icon: FaGlobe, value: '15+', label: 'Countries', color: 'green' },
    { icon: FaChartLine, value: '100+', label: 'Joint Projects', color: 'purple' },
    { icon: FaAward, value: '98%', label: 'Satisfaction Rate', color: 'orange' },
  ];

  const testimonials = [
    { text: "UbakaSoft has been an invaluable partner in our digital transformation journey.", company: "BK Group", exec: "John Doe, CTO" },
    { text: "Their technical expertise and commitment to quality is outstanding.", company: "MTN Rwanda", exec: "Jane Smith, Digital Director" },
    { text: "A reliable partner for scaling our technology infrastructure.", company: "Rwanda Dev Board", exec: "Alex Mutesi, Program Lead" },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <FaTerminal className="text-sm" />
              <span className="text-sm font-mono">partners --list</span>
              <span className="text-green-400 text-sm ml-2">● 50+ partnerships</span>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <FaHandshake className="text-5xl" />
              <h1 className="text-5xl font-bold text-white">Our Partners</h1>
            </div>
            <p className="text-xl text-white/90">Collaborating with industry leaders to deliver excellence</p>
          </div>
        </div>
      </div>

      {/* Stats Terminal */}
      <div className="container mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 shadow-xl">
          <div className="flex items-center space-x-4 text-gray-400 mb-3">
            <span className="text-green-400">$</span>
            <span className="font-mono text-sm">./partner_stats.sh</span>
            <span className="text-blue-400 animate-pulse">▊</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center p-3 bg-gray-900/50 rounded-lg">
                <stat.icon className={`text-2xl text-${stat.color}-400 mx-auto mb-1`} />
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Categories */}
      <div className="container mx-auto px-6 py-16">
        {/* Enterprise Partners */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FaBuilding className="text-2xl text-blue-400" />
            <h2 className="text-2xl font-bold text-white font-mono">Enterprise Partners</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.enterprise.map((partner, idx) => (
              <div 
                key={idx}
                className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredPartner(partner.name)}
                onMouseLeave={() => setHoveredPartner(null)}
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <img src={partner.logo} alt={partner.name} className="max-h-16 opacity-80 hover:opacity-100 transition" />
                </div>
                <h3 className="font-bold text-white mb-1">{partner.name}</h3>
                <p className="text-xs text-gray-400">{partner.category}</p>
                <div className="mt-3 text-xs text-gray-500">
                  Partner since {partner.since} • {partner.projects} projects
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Partners */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FaUsers className="text-2xl text-purple-400" />
            <h2 className="text-2xl font-bold text-white font-mono">Technology Partners</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.tech.map((partner, idx) => (
              <div 
                key={idx}
                className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <img src={partner.logo} alt={partner.name} className="max-h-16 opacity-80 hover:opacity-100 transition" />
                </div>
                <h3 className="font-bold text-white mb-1">{partner.name}</h3>
                <p className="text-xs text-gray-400">{partner.category}</p>
                <div className="mt-3 text-xs text-gray-500">
                  Partner since {partner.since} • {partner.projects} projects
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Government & NGO Partners */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FaGlobe className="text-2xl text-green-400" />
            <h2 className="text-2xl font-bold text-white font-mono">Government & NGO Partners</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-green-500 to-transparent"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {partners.government.map((partner, idx) => (
              <div 
                key={idx}
                className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <img src={partner.logo} alt={partner.name} className="max-h-16 opacity-80 hover:opacity-100 transition" />
                </div>
                <h3 className="font-bold text-white mb-1">{partner.name}</h3>
                <p className="text-xs text-gray-400">{partner.category}</p>
                <div className="mt-3 text-xs text-gray-500">
                  Partner since {partner.since} • {partner.projects} projects
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Testimonials */}
        <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
          <div className="text-center mb-8">
            <FaStar className="text-yellow-500 text-3xl mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-white font-mono">What Our Partners Say</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-300 text-sm italic mb-4">"{testimonial.text}"</p>
                <div className="border-t border-gray-700 pt-3">
                  <p className="text-white font-semibold text-sm">{testimonial.company}</p>
                  <p className="text-gray-500 text-xs">{testimonial.exec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Partner CTA */}
        <div className="mt-12 bg-gray-800 rounded-xl p-8 text-center border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-2">Become a Partner</h3>
          <p className="text-gray-400 mb-6">Join our growing network of trusted partners</p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center gap-2 mx-auto">
            Partner With Us <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partners;