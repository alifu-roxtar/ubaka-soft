// components/Team.jsx - Dark Developer Theme
import React from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope, FaGithub, FaUsers, FaTerminal, FaCodeBranch } from 'react-icons/fa';

const avatarColors = [
  { bg: '#3C3489', text: '#CECBF6' },
  { bg: '#085041', text: '#9FE1CB' },
  { bg: '#0C447C', text: '#B5D4F4' },
  { bg: '#72243E', text: '#F4C0D1' },
  { bg: '#633806', text: '#FAC775' },
  { bg: '#712B13', text: '#F5C4B3' },
];

const getInitials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

const Team = () => {
  const team = [
    {
      id: 1,
      name: 'IRASUBIZA Sandrine',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in software engineering and digital transformation across Africa.',
      expertise: ['Leadership', 'Strategy', 'Cloud Architecture'],
      social: { linkedin: '#', twitter: '#', email: 'sandrine@ubakasoft.com', github: '#' },
    },
    {
      id: 2,
      name: 'UWITONZE Trinita',
      role: 'Chief Technology Officer',
      bio: 'Expert in scalable systems and AI integration with a passion for innovative solutions.',
      expertise: ['AI/ML', 'System Architecture', 'DevOps'],
      social: { linkedin: '#', twitter: '#', email: 'trinita@ubakasoft.com', github: '#' },
    },
    {
      id: 3,
      name: 'UMURERWA Doreen',
      role: 'Lead Software Engineer',
      bio: 'Full-stack specialist delivering high-performance applications for enterprise clients.',
      expertise: ['React', 'Node.js', 'Cloud'],
      social: { linkedin: '#', twitter: '#', email: 'doreen@ubakasoft.com', github: '#' },
    },
    {
      id: 4,
      name: 'MUZIRANENGE Anonciatha',
      role: 'Product Design Lead',
      bio: 'Creating intuitive and accessible user experiences that delight customers.',
      expertise: ['UI/UX', 'Design Systems', 'Research'],
      social: { linkedin: '#', twitter: '#', email: 'anonciatha@ubakasoft.com', github: '#' },
    },
    {
      id: 5,
      name: 'UKWIRORA Claudine',
      role: 'DevOps Engineer',
      bio: 'Automating infrastructure and ensuring 99.99% uptime for all client platforms.',
      expertise: ['AWS', 'Kubernetes', 'CI/CD'],
      social: { linkedin: '#', twitter: '#', email: 'claudine@ubakasoft.com', github: '#' },
    },
    {
      id: 6,
      name: 'NIYITEGEKA Dady Rene',
      role: 'Project Manager',
      bio: 'Agile expert ensuring projects are delivered on time and within budget.',
      expertise: ['Agile', 'Scrum', 'Client Relations'],
      social: { linkedin: '#', twitter: '#', email: 'dady@ubakasoft.com', github: '#' },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <FaTerminal className="text-sm" />
              <span className="text-sm font-mono">team --list</span>
              <span className="text-green-400 text-sm ml-2">● 6 members active</span>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <FaUsers className="text-5xl" />
              <h1 className="text-5xl font-bold text-white">Our Team</h1>
            </div>
            <p className="text-xl text-white/90">Passionate experts dedicated to bringing your vision to life</p>
          </div>
        </div>
      </div>

      {/* Terminal Stats */}
      <div className="container mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 font-mono text-sm shadow-xl">
          <div className="flex items-center space-x-4 text-gray-400">
            <span className="text-green-400">$</span>
            <span>cat team_stats.md</span>
            <span className="text-blue-400 animate-pulse">▊</span>
          </div>
          <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="text-gray-300"><span className="text-blue-400">Total Members:</span> 6</div>
            <div className="text-gray-300"><span className="text-blue-400">Active Projects:</span> 12+</div>
            <div className="text-gray-300"><span className="text-blue-400">Years Combined Exp:</span> 45+</div>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => {
            const color = avatarColors[index % avatarColors.length];
            return (
              <div
                key={member.id}
                className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Avatar Section */}
                <div className="flex flex-col items-center pt-8 pb-4">
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold font-mono mb-3"
                    style={{ backgroundColor: color.bg, color: color.text }}
                  >
                    {getInitials(member.name)}
                  </div>
                  {/* Status Badge */}
                  <div className="flex items-center space-x-1 bg-green-500/90 px-2 py-1 rounded-full text-xs">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    <span className="text-white font-mono">active</span>
                  </div>
                </div>

                <div className="p-6 pt-2">
                  <h3 className="text-xl font-bold text-white mb-1 font-mono text-center">{member.name}</h3>
                  <p className="text-blue-400 font-semibold mb-3 text-sm text-center">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3 mt-4">
                    <a href={member.social.linkedin} className="bg-gray-700 p-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
                      <FaLinkedin />
                    </a>
                    <a href={member.social.twitter} className="bg-gray-700 p-2 rounded-lg hover:bg-blue-400 hover:text-white transition">
                      <FaTwitter />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="bg-gray-700 p-2 rounded-lg hover:bg-red-600 hover:text-white transition">
                      <FaEnvelope />
                    </a>
                    <a href={member.social.github} className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 hover:text-white transition">
                      <FaGithub />
                    </a>
                  </div>
                </div>

                {/* Terminal footer */}
                <div className="bg-gray-900/50 px-6 py-3 border-t border-gray-700">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-gray-500">contributions: 1,284</span>
                    <span className="text-gray-500">
                      <FaCodeBranch className="inline mr-1" /> main
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 text-center border border-blue-500/30">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <FaTerminal className="text-green-400 text-sm" />
            <span className="text-sm font-mono text-gray-300">./join_team.sh</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Join Our Team</h3>
          <p className="text-gray-400 mb-6">We're always looking for talented developers and designers</p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition">
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;