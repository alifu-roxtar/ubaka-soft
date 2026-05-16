// components/Services.jsx - Using standard dark classes
import React, { useState } from 'react';
import { 
  FaCode, FaMobileAlt, FaPalette, FaCloudUploadAlt, 
  FaChartLine, FaRobot, FaTerminal, FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    { 
      icon: FaCode, 
      title: 'Web Development', 
      description: 'Custom enterprise platforms, high-performance web apps, and CMS solutions.',
      features: ['React/Next.js', 'Node.js/Python', 'Responsive Design', 'SEO Optimized'],
      color: 'blue'
    },
    { 
      icon: FaMobileAlt, 
      title: 'Mobile Development', 
      description: 'Cross-platform and native mobile applications built for scale.',
      features: ['React Native', 'iOS & Android', 'Push Notifications', 'Offline Sync'],
      color: 'green'
    },
    { 
      icon: FaPalette, 
      title: 'UI/UX Design', 
      description: 'User-centric designs that drive engagement and maximize conversion.',
      features: ['Wireframing', 'Prototyping', 'User Testing', 'Design Systems'],
      color: 'purple'
    },
    { 
      icon: FaCloudUploadAlt, 
      title: 'Cloud Solutions', 
      description: 'Scalable infrastructure and secure cloud architecture.',
      features: ['AWS/Azure/GCP', 'DevOps', 'Auto-scaling', '24/7 Monitoring'],
      color: 'orange'
    },
    { 
      icon: FaChartLine, 
      title: 'Digital Transformation', 
      description: 'Modernizing legacy systems and automating business processes.',
      features: ['Legacy Modernization', 'Process Automation', 'System Integration', 'Analytics'],
      color: 'pink'
    },
    { 
      icon: FaRobot, 
      title: 'AI Integration', 
      description: 'Leveraging AI and LLMs to power business intelligence.',
      features: ['Chatbots', 'Content Generation', 'Data Analysis', 'Predictive AI'],
      color: 'indigo'
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-600 hover:bg-blue-700',
      green: 'bg-green-600 hover:bg-green-700',
      purple: 'bg-purple-600 hover:bg-purple-700',
      orange: 'bg-orange-600 hover:bg-orange-700',
      pink: 'bg-pink-600 hover:bg-pink-700',
      indigo: 'bg-indigo-600 hover:bg-indigo-700',
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <FaTerminal className="text-sm" />
              <span className="text-sm font-mono">Available Services</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">What We Do Best</h1>
            <p className="text-xl text-white/90 mb-8">End-to-end software solutions tailored to your business needs</p>
            <div className="flex gap-4">
              <Link to={'/contact'} className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">
                Get Started
              </Link>
              <Link to={'/contact'} className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                Invest In Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onMouseEnter={() => setActiveService(idx)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="p-6">
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${getColorClasses(service.color)}`}>
                  <service.icon className="text-white text-3xl" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center text-sm text-gray-400">
                      <FaCheckCircle className="text-green-500 mr-2 text-xs" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <span className="text-gray-500 text-sm">Custom Pricing</span>
                  <button className="text-blue-400 hover:text-purple-400 transition flex items-center gap-1">
                    Learn More <FaArrowRight className="text-sm" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gray-800 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Need a Custom Solution?</h3>
          <p className="text-gray-400 mb-6">We build tailored software solutions for your unique requirements</p>
          <Link to='/contact' className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition">
            Contact Our Experts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;