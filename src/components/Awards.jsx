// components/Awards.jsx - Dark Developer Theme
import React from 'react';
import { FaTrophy, FaMedal, FaAward, FaStar, FaCalendar, FaBuilding, FaTerminal, FaChartLine } from 'react-icons/fa';

const Awards = () => {
  const awards = [
    { 
      icon: FaTrophy, 
      title: 'Best Tech Startup', 
      year: '2024', 
      organization: 'Rwanda Innovation Awards',
      description: 'Recognized for excellence in digital transformation and innovation',
      color: 'yellow',
      impact: '+150% growth'
    },
    { 
      icon: FaMedal, 
      title: 'Top Software Agency', 
      year: '2023', 
      organization: 'African Tech Summit',
      description: 'Award for outstanding software development and client satisfaction',
      color: 'gray',
      impact: '50+ successful projects'
    },
    { 
      icon: FaAward, 
      title: 'Innovation Excellence', 
      year: '2023', 
      organization: 'Kigali Digital Forum',
      description: 'For AI-powered business solutions and technological advancement',
      color: 'orange',
      impact: '10+ AI implementations'
    },
    { 
      icon: FaStar, 
      title: 'Client Choice Award', 
      year: '2024', 
      organization: 'TechAfrica',
      description: 'Voted by clients for exceptional service and support',
      color: 'yellow',
      impact: '100% satisfaction rate'
    },
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: FaChartLine, color: 'blue' },
    { number: '100%', label: 'Client Satisfaction', icon: FaStar, color: 'green' },
    { number: '15+', label: 'Industry Awards', icon: FaTrophy, color: 'yellow' },
    { number: '24/7', label: 'Support Available', icon: FaMedal, color: 'purple' },
  ];

  const getColorClass = (color) => {
    const colors = {
      yellow: 'from-yellow-500 to-yellow-600',
      gray: 'from-gray-500 to-gray-600',
      orange: 'from-orange-500 to-orange-600',
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
    };
    return colors[color] || 'from-blue-500 to-purple-500';
  };

  const getIconBgColor = (color) => {
    const colors = {
      yellow: 'bg-yellow-500/20 border-yellow-500/50 text-yellow-500',
      gray: 'bg-gray-500/20 border-gray-500/50 text-gray-400',
      orange: 'bg-orange-500/20 border-orange-500/50 text-orange-500',
      blue: 'bg-blue-500/20 border-blue-500/50 text-blue-500',
      green: 'bg-green-500/20 border-green-500/50 text-green-500',
      purple: 'bg-purple-500/20 border-purple-500/50 text-purple-500',
    };
    return colors[color] || 'bg-blue-500/20 border-blue-500/50 text-blue-500';
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <FaTerminal className="text-sm" />
              <span className="text-sm font-mono">awards --achievements</span>
              <span className="text-yellow-400 text-sm ml-2">● 15+ recognitions</span>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <FaTrophy className="text-5xl" />
              <h1 className="text-5xl font-bold text-white">Awards & Recognition</h1>
            </div>
            <p className="text-xl text-white/90">Celebrating excellence in technology and innovation</p>
          </div>
        </div>
      </div>

      {/* Stats Terminal */}
      <div className="container mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 font-mono text-sm shadow-xl">
          <div className="flex items-center space-x-4 text-gray-400">
            <span className="text-green-400">$</span>
            <span>./awards_stats.sh</span>
            <span className="text-blue-400 animate-pulse">▊</span>
          </div>
          <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center p-2 bg-gray-900/50 rounded-lg">
                <stat.icon className={`text-2xl ${getIconBgColor(stat.color)} mx-auto mb-1`} />
                <div className="text-lg font-bold text-white">{stat.number}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Awards Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className={`bg-gradient-to-r ${getColorClass(award.color)} p-6`}>
                <award.icon className="text-4xl text-white mb-2" />
                <h3 className="text-2xl font-bold text-white">{award.title}</h3>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaCalendar className="text-blue-400" />
                    <span>{award.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaBuilding className="text-purple-400" />
                    <span>{award.organization}</span>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{award.description}</p>
                <div className="bg-gray-700/50 rounded-lg p-3 border border-gray-600">
                  <p className="text-xs text-gray-400 font-mono">Impact Metric:</p>
                  <p className="text-sm text-green-400 font-mono">{award.impact}</p>
                </div>
              </div>
              <div className="bg-gray-900/50 px-6 py-3 border-t border-gray-700">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-500">verified_by: TechAfrica</span>
                  <span className="text-green-500">✓ certified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Timeline */}
        <div className="mt-16 bg-gray-800/50 rounded-xl p-8 border border-gray-700">
          <div className="flex items-center space-x-2 mb-6">
            <FaChartLine className="text-blue-400 text-xl" />
            <h3 className="text-xl font-bold text-white font-mono">Achievement Timeline</h3>
          </div>
          <div className="space-y-4">
            {[
              { year: '2024', achievement: 'Named Top 10 Tech Companies in Rwanda', metric: '+200% growth' },
              { year: '2023', achievement: 'Launched AI Division', metric: '5 successful deployments' },
              { year: '2022', achievement: 'Expanded to 5 African countries', metric: '50+ new clients' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-3 bg-gray-900/50 rounded-lg">
                <div className="w-20 text-blue-400 font-mono font-bold">{item.year}</div>
                <div className="flex-1 text-gray-300">{item.achievement}</div>
                <div className="text-green-400 text-sm font-mono">{item.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;