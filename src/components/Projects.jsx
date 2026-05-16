// components/Projects.jsx - Fixed Version
import React, { useState } from 'react';
import { 
  FaGithub, FaExternalLinkAlt, FaCodeBranch, 
  FaStar, FaGitAlt, FaTerminal, FaDatabase,
  FaCloud, FaMobile, FaDesktop, FaLock,
  FaReact, FaNodeJs, FaPython
} from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const projects = [
    {
      id: 1,
      title: 'Inzira',
      category: 'web',
      description: 'Online platform for helping people to access transport services in Rwanda easily',
      longDescription: 'The system provides user with the ability to book transport services, track their rides, and make payments seamlessly.',
      tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
      features: ['Booking Tickets', 'Payment Processing', 'Ride Tracking', 'Stop Centers Tracking'],
      stats: { stars: 128, forks: 45, issues: 3 },
      demo: '#',
      github: '#',
      color: 'blue',
      metrics: { performance: 98, coverage: 92, security: 'A+' }
    },
    {
      id: 2,
      title: 'Smart Parking System',
      category: 'web',
      description: 'Real-time parking system for urban areas.',
      longDescription: 'Platform for providing easy way of finding parking spaces in urban areas, with real-time availability and reservation features.',
      tech: ['Node.js', 'Express', 'MongoDB', 'Google Maps'],
      features: ['Real-time Availability', 'Parking Reservations', 'Payment Processing'],
      stats: { stars: 89, forks: 23, issues: 1 },
      demo: '#',
      github: '#',
      color: 'green',
      metrics: { performance: 95, coverage: 88, security: 'A' }
    },
    {
      id: 3,
      title: 'Employee Management Sysytem for Rwandan Companies',
      category: 'web',
      description: 'Web application for managing employee records, attendance, and payroll for Rwandan companies.',
      longDescription: 'The application provides features for managing employee records, tracking attendance, and processing payroll efficiently for Rwandan companies.',
      tech: ['React.Js', 'Express', 'Firebase', 'Node.js'],
      features: ['Offline First', 'Push Notifications', 'Real-time Chat', 'Payment Gateway'],
      stats: { stars: 234, forks: 67, issues: 5 },
      demo: '#',
      github: '#',
      color: 'purple',
      metrics: { performance: 94, coverage: 87, security: 'A' }
    },
    {
      id: 4,
      title: 'Browser Ads Manager',
      category: 'AI Extension',
      description: 'AI-powered browser extension for managing and optimizing online ads.',
      longDescription: 'A browser extension that uses AI to analyze and optimize online advertising campaigns in real-time.',
      tech: ['Python', 'TensorFlow', 'Flask', 'React'],
      features: ['Ads Customization', 'Selective Targeting', 'Performance Analytics', 'Time Optimization'],
      stats: { stars: 312, forks: 89, issues: 2 },
      demo: '#',
      github: '#',
      color: 'red',
      metrics: { performance: 96, coverage: 90, security: 'A+' }
    },
    {
      id: 5,
      title: 'R3elCap',
      category: 'Extension',
      description: 'Automated browser extension for managing multi-cloud environments with Infrastructure as Code.',
      longDescription: 'A browser extension that automates the management of multi-cloud environments using Infrastructure as Code principles.',
      tech: ['Terraform', 'AWS', 'Docker', 'Kubernetes'],
      features: ['Auto-scaling', 'Load Balancing', 'Backup Automation', 'Cost Optimization'],
      stats: { stars: 456, forks: 123, issues: 4 },
      demo: '#',
      github: '#',
      color: 'orange',
      metrics: { performance: 99, coverage: 95, security: 'A+' }
    },
    {
      id: 6,
      title: 'Decentralized Document Verification System',
      category: 'web',
      description: 'Blockchain-based solution for secure document verification and tamper-proof records.',
      longDescription: 'A decentralized application that uses blockchain technology to provide secure document verification and tamper-proof records.',
      tech: ['Solidity', 'Web3.js', 'React', 'Node.js'],
      features: ['Smart Contracts', 'Document Hashing', 'Verification API', 'Audit Trail'],
      stats: { stars: 178, forks: 45, issues: 1 },
      demo: '#',
      github: '#',
      color: 'yellow',
      metrics: { performance: 97, coverage: 89, security: 'A+' }
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: FaCodeBranch, count: projects.length },
    { id: 'web', label: 'Web Apps', icon: FaDesktop, count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', label: 'Mobile', icon: FaMobile, count: projects.filter(p => p.category === 'mobile').length },
    { id: 'cloud', label: 'Cloud', icon: FaCloud, count: projects.filter(p => p.category === 'cloud').length },
    { id: 'ai', label: 'AI/ML', icon: FaDatabase, count: projects.filter(p => p.category === 'ai').length },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  const getColorStyles = (color) => {
    const colors = {
      blue: { border: 'border-blue-500/50', glow: 'shadow-blue-500/20', gradient: 'from-blue-500 to-cyan-500', tag: 'bg-blue-500/20 text-blue-400' },
      green: { border: 'border-green-500/50', glow: 'shadow-green-500/20', gradient: 'from-green-500 to-emerald-500', tag: 'bg-green-500/20 text-green-400' },
      purple: { border: 'border-purple-500/50', glow: 'shadow-purple-500/20', gradient: 'from-purple-500 to-pink-500', tag: 'bg-purple-500/20 text-purple-400' },
      red: { border: 'border-red-500/50', glow: 'shadow-red-500/20', gradient: 'from-red-500 to-orange-500', tag: 'bg-red-500/20 text-red-400' },
      orange: { border: 'border-orange-500/50', glow: 'shadow-orange-500/20', gradient: 'from-orange-500 to-yellow-500', tag: 'bg-orange-500/20 text-orange-400' },
      yellow: { border: 'border-yellow-500/50', glow: 'shadow-yellow-500/20', gradient: 'from-yellow-500 to-amber-500', tag: 'bg-yellow-500/20 text-yellow-400' },
    };
    return colors[color] || colors.blue;
  };

  const getCategoryIcon = (category) => {
    const icons = {
      web: <FaDesktop className="text-6xl text-gray-700" />,
      mobile: <FaMobile className="text-6xl text-gray-700" />,
      cloud: <FaCloud className="text-6xl text-gray-700" />,
      ai: <FaDatabase className="text-6xl text-gray-700" />,
    };
    return icons[category] || <FaCodeBranch className="text-6xl text-gray-700" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black">
      {/* Hero Section */}
      <div className="relative bg-black/50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700 mb-6">
              <FaGitAlt className="text-orange-400 text-sm" />
              <span className="text-orange-400 text-sm font-mono">git log --projects</span>
              <span className="text-gray-500 text-sm">|</span>
              <span className="text-green-400 text-sm">{projects.length} commits</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 font-mono">
              &gt; Showcasing our latest digital innovations and successful deployments
            </p>
            
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 font-mono text-sm">
              <div className="flex items-center space-x-4 text-gray-400">
                <span className="text-green-400">$</span>
                <span>ls -la projects/ | grep "active"</span>
                <span className="text-blue-400 animate-pulse">▊</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-20 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                    filter === cat.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700 border border-gray-700'
                  }`}
                >
                  <cat.icon className="text-sm" />
                  <span>{cat.label}</span>
                  <span className="text-xs bg-gray-700 px-1.5 py-0.5 rounded-full">{cat.count}</span>
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-600' : 'bg-gray-800'}`}
              >
                ⊞
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-600' : 'bg-gray-800'}`}
              >
                ≡
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => {
            const colors = getColorStyles(project.color);
            return (
              <div key={project.id} className="group relative">
                {/* Card Glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${colors.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500 ${colors.glow}`}></div>
                
                {/* Main Card */}
                <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all duration-300">
                  {/* Header Image Area */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        {getCategoryIcon(project.category)}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <span className={`px-2 py-1 rounded text-xs font-mono ${colors.tag}`}>
                        {project.category.toUpperCase()}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 flex space-x-2">
                      {project.metrics && (
                        <>
                          <span className="bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs font-mono text-green-400">
                            Perf: {project.metrics.performance}%
                          </span>
                          <span className="bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs font-mono text-blue-400">
                            Sec: {project.metrics.security}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    {/* Title & Stats */}
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-bold text-white font-mono">{project.title}</h3>
                      <div className="flex items-center space-x-2">
                        <FaStar className="text-yellow-500" />
                        <span className="text-gray-400 text-sm">{project.stats.stars}</span>
                        <FaCodeBranch className="text-gray-500 ml-2" />
                        <span className="text-gray-400 text-sm">{project.stats.forks}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    
                    {/* Tech Stack */}
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2 font-mono">// tech stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, tIdx) => (
                          <span key={tIdx} className="text-xs bg-gray-800 text-blue-400 px-2 py-1 rounded border border-gray-700 font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Key Features */}
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2 font-mono">// key features</p>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.slice(0, 4).map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center space-x-2 text-xs text-gray-400">
                            <span className="text-green-500">✓</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-4 pt-4 border-t border-gray-800">
                      <a href={project.demo} className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:opacity-90 transition font-mono text-sm">
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </a>
                      <a href={project.github} className="flex-1 flex items-center justify-center space-x-2 bg-gray-800 text-gray-300 py-2 rounded-lg hover:bg-gray-700 transition font-mono text-sm border border-gray-700">
                        <FaGithub />
                        <span>Repository</span>
                      </a>
                    </div>
                  </div>
                  
                  {/* Footer Metrics */}
                  <div className="bg-black/30 px-6 py-3 border-t border-gray-800">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-gray-500">Last commit: 2 days ago</span>
                      <span className="text-gray-500">Branch: main ✓</span>
                      <span className="text-green-500">Status: Production ✓</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Repository Stats */}
        <div className="mt-16 bg-gray-900/50 rounded-xl border border-gray-800 p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 font-mono">100%</div>
              <div className="text-gray-400 text-sm mt-1">Test Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 font-mono">24/7</div>
              <div className="text-gray-400 text-sm mt-1">Uptime Monitor</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 font-mono">&lt;100ms</div>
              <div className="text-gray-400 text-sm mt-1">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 font-mono">99.99%</div>
              <div className="text-gray-400 text-sm mt-1">SLA Compliance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;