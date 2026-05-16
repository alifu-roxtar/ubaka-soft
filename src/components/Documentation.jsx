// components/Documentation.jsx
import React, { useState } from 'react';
import { 
  FaTerminal, FaCode, FaBook, FaRocket, FaPlug, 
  FaDatabase, FaCloud, FaMobile, FaDesktop, FaCog,
  FaSearch, FaChevronRight, FaCopy, FaCheck,
  FaGithub, FaNpm, FaReact, FaCss3, FaJs
} from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiEmailjs } from 'react-icons/si';

const Documentation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('getting-started');
  const [copiedCode, setCopiedCode] = useState(null);

  const sections = {
    'getting-started': {
      title: 'Getting Started',
      icon: FaRocket,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-3 font-mono">Introduction</h3>
            <p className="text-gray-300 leading-relaxed">
              UbakaSoft is a professional software development platform built with React, Vite, and Tailwind CSS. 
              This documentation will guide you through the setup, configuration, and deployment of the platform.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-3 font-mono">Prerequisites</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Node.js 18+ installed</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> npm or yarn package manager</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Git (optional)</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> EmailJS account (for contact form)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-3 font-mono">Quick Start</h3>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-green-400 text-sm font-mono">$</span>
                <button 
                  onClick={() => copyToClipboard('git clone https://github.com/ubakasoft/ubakasoft-platform.git')}
                  className="text-gray-500 hover:text-gray-300 transition"
                >
                  {copiedCode === 'clone' ? <FaCheck className="text-green-500" /> : <FaCopy />}
                </button>
              </div>
              <code className="text-gray-300 font-mono text-sm">
                git clone https://github.com/ubakasoft/ubakasoft-platform.git
              </code>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 mt-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-green-400 text-sm font-mono">$</span>
                <button 
                  onClick={() => copyToClipboard('cd ubakasoft-platform && npm install')}
                  className="text-gray-500 hover:text-gray-300 transition"
                >
                  {copiedCode === 'install' ? <FaCheck className="text-green-500" /> : <FaCopy />}
                </button>
              </div>
              <code className="text-gray-300 font-mono text-sm">
                cd ubakasoft-platform && npm install
              </code>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 mt-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-green-400 text-sm font-mono">$</span>
                <button 
                  onClick={() => copyToClipboard('npm run dev')}
                  className="text-gray-500 hover:text-gray-300 transition"
                >
                  {copiedCode === 'dev' ? <FaCheck className="text-green-500" /> : <FaCopy />}
                </button>
              </div>
              <code className="text-gray-300 font-mono text-sm">
                npm run dev
              </code>
            </div>
          </div>
        </div>
      )
    },
    'tech-stack': {
      title: 'Tech Stack',
      icon: FaCode,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: FaReact, name: 'React 18', desc: 'Frontend framework', color: 'text-blue-400' },
              { icon: SiVite, name: 'Vite', desc: 'Build tool', color: 'text-yellow-400' },
              { icon: SiTailwindcss, name: 'Tailwind CSS', desc: 'Styling', color: 'text-cyan-400' },
              { icon: FaJs, name: 'EmailJS', desc: 'Email service', color: 'text-orange-400' },
              { icon: FaCss3, name: 'React Router', desc: 'Navigation', color: 'text-red-400' },
              { icon: FaNpm, name: 'React Icons', desc: 'Icon library', color: 'text-red-500' },
            ].map((tech, idx) => (
              <div key={idx} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center gap-3">
                  <tech.icon className={`text-2xl ${tech.color}`} />
                  <div>
                    <h4 className="font-bold text-white font-mono">{tech.name}</h4>
                    <p className="text-gray-400 text-sm">{tech.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-3 font-mono">Dependencies</h3>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
              <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
                {`{
  "dependencies": {
    "@emailjs/browser": "^3.11.0",
    "leaflet": "^1.9.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.12.0",
    "react-leaflet": "^4.2.1",
    "react-router-dom": "^6.20.0",
    "react-type-animation": "^3.2.0"
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      )
    },
    'configuration': {
      title: 'Configuration',
      icon: FaCog,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-3 font-mono">Environment Variables</h3>
            <p className="text-gray-300 mb-3">Create a <code className="bg-gray-800 px-2 py-1 rounded text-green-400">.env</code> file in the root directory:</p>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-green-400 text-sm font-mono">.env</span>
                <button 
                  onClick={() => copyToClipboard(`VITE_EMAILJS_SERVICE_ID=your_service_id\nVITE_EMAILJS_TEMPLATE_ID=your_template_id\nVITE_EMAILJS_PUBLIC_KEY=your_public_key`)}
                  className="text-gray-500 hover:text-gray-300 transition"
                >
                  {copiedCode === 'env' ? <FaCheck className="text-green-500" /> : <FaCopy />}
                </button>
              </div>
              <pre className="text-gray-300 font-mono text-sm">
                {`VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key`}
              </pre>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-3 font-mono">EmailJS Setup</h3>
            <ol className="space-y-3 text-gray-300 list-decimal list-inside">
              <li>Create an account at <a href="https://www.emailjs.com" className="text-blue-400 hover:underline">EmailJS.com</a></li>
              <li>Create an Email Service (Gmail, Outlook, etc.)</li>
              <li>Create an Email Template with variables: <code className="bg-gray-800 px-2 py-1 rounded text-green-400">{'{{from_name}}, {{from_email}}, {{subject}}, {{message}}'}</code></li>
              <li>Copy Service ID, Template ID, and Public Key to your .env file</li>
            </ol>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-3 font-mono">Tailwind Configuration</h3>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
              <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
                {`// For Tailwind CSS v4 with @tailwindcss/vite
// No config file needed - use CSS @theme directive
// See index.css for custom theme configuration`}
              </pre>
            </div>
          </div>
        </div>
      )
    },
    'components': {
      title: 'Components',
      icon: FaPlug,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-3 font-mono">Component Structure</h3>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
              <pre className="text-gray-300 font-mono text-sm">
                {`src/
├── components/
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Projects.jsx
│   ├── Team.jsx
│   ├── Testimonials.jsx
│   ├── Partners.jsx
│   ├── Awards.jsx
│   ├── WorkingArea.jsx
│   ├── OrganizationCenter.jsx
│   ├── FAQ.jsx
│   ├── Contact.jsx
│   ├── Documentation.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css`}
              </pre>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-3 font-mono">Adding New Pages</h3>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-green-400 text-sm font-mono">// Step 1: Create component</span>
                <button 
                  onClick={() => copyToClipboard(`function NewPage() {\n  return <div>New Page</div>;\n}\nexport default NewPage;`)}
                  className="text-gray-500 hover:text-gray-300 transition"
                >
                  {copiedCode === 'component' ? <FaCheck className="text-green-500" /> : <FaCopy />}
                </button>
              </div>
              <pre className="text-gray-300 font-mono text-sm">
                {`function NewPage() {
  return <div>New Page</div>;
}
export default NewPage;`}
              </pre>
              
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-400 text-sm font-mono">// Step 2: Add route in App.jsx</span>
                  <button 
                    onClick={() => copyToClipboard(`import NewPage from './components/NewPage';\n// Add to Routes:\n<Route path="/new" element={<NewPage />} />`)}
                    className="text-gray-500 hover:text-gray-300 transition"
                  >
                    {copiedCode === 'route' ? <FaCheck className="text-green-500" /> : <FaCopy />}
                  </button>
                </div>
                <pre className="text-gray-300 font-mono text-sm">
                  {`import NewPage from './components/NewPage';
// Add to Routes:
<Route path="/new" element={<NewPage />} />`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'deployment': {
      title: 'Deployment',
      icon: FaCloud,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-3 font-mono">Build for Production</h3>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-green-400 text-sm font-mono">$</span>
                <button 
                  onClick={() => copyToClipboard('npm run build')}
                  className="text-gray-500 hover:text-gray-300 transition"
                >
                  {copiedCode === 'build' ? <FaCheck className="text-green-500" /> : <FaCopy />}
                </button>
              </div>
              <code className="text-gray-300 font-mono text-sm">npm run build</code>
            </div>
            <p className="text-gray-300 mt-3">This creates a <code className="bg-gray-800 px-2 py-1 rounded text-green-400">dist/</code> folder with optimized production assets.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-3 font-mono">Deploy to Vercel</h3>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
              <pre className="text-gray-300 font-mono text-sm">
                {`# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod

# Add environment variables in Vercel dashboard:
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID  
VITE_EMAILJS_PUBLIC_KEY`}
              </pre>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-3 font-mono">Deploy to Netlify</h3>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
              <pre className="text-gray-300 font-mono text-sm">
                {`# Build command
npm run build

# Publish directory
dist/

# Add environment variables in Netlify dashboard`}
              </pre>
            </div>
          </div>
        </div>
      )
    },
    'api-reference': {
      title: 'API Reference',
      icon: FaDatabase,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-3 font-mono">EmailJS Integration</h3>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
              <pre className="text-gray-300 font-mono text-sm">
                {`import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

// Send email
await emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  formRef.current
);`}
              </pre>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-3 font-mono">Leaflet Maps</h3>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
              <pre className="text-gray-300 font-mono text-sm">
                {`import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

<MapContainer center={[-1.9441, 30.0619]} zoom={13}>
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  <Marker position={[-1.9441, 30.0619]}>
    <Popup>UbakaSoft HQ</Popup>
  </Marker>
</MapContainer>`}
              </pre>
            </div>
          </div>
        </div>
      )
    }
  };

  const copyToClipboard = (text, codeId) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(codeId);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const filteredSections = Object.keys(sections).filter(key =>
    sections[key].title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <FaTerminal className="text-sm" />
              <span className="text-sm font-mono">docs --help</span>
              <span className="text-green-400 text-sm ml-2">● v1.0.0</span>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <FaBook className="text-5xl" />
              <h1 className="text-5xl font-bold text-white">Documentation</h1>
            </div>
            <p className="text-xl text-white/90">Complete guide to setting up and using the UbakaSoft platform</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 shadow-xl">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-900 text-gray-300 pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-mono text-sm"
            />
          </div>
        </div>
      </div>

      {/* Documentation Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="sticky top-24 bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
              <div className="p-4 border-b border-gray-700">
                <h3 className="text-white font-mono text-sm flex items-center gap-2">
                  <FaTerminal className="text-green-400" />
                  ./sections
                </h3>
              </div>
              <nav className="p-2">
                {Object.entries(sections).map(([key, section]) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveSection(key)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition flex items-center gap-3 ${
                        activeSection === key
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-400 hover:bg-gray-700 hover:text-gray-200'
                      }`}
                    >
                      <Icon className="text-sm" />
                      <span className="font-mono text-sm">{section.title}</span>
                      {activeSection === key && <FaChevronRight className="ml-auto text-sm" />}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700">
                {React.createElement(sections[activeSection].icon, { className: "text-2xl text-blue-400" })}
                <h2 className="text-2xl font-bold text-white font-mono">
                  {sections[activeSection].title}
                </h2>
                <span className="ml-auto text-xs text-gray-500 font-mono">
                  section: {activeSection}
                </span>
              </div>
              
              {sections[activeSection].content}
              
              {/* Feedback Section */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <p className="text-gray-400 text-sm text-center">
                    📖 Found an issue? <a href="#" className="text-blue-400 hover:underline">Edit this page</a> on GitHub
                  </p>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="#" className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition group">
                <FaGithub className="text-2xl text-gray-400 group-hover:text-white mb-2" />
                <h4 className="text-white font-mono text-sm">GitHub Repository</h4>
                <p className="text-gray-500 text-xs mt-1">View source code</p>
              </a>
              <a href="#" className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition group">
                <FaNpm className="text-2xl text-gray-400 group-hover:text-white mb-2" />
                <h4 className="text-white font-mono text-sm">npm Package</h4>
                <p className="text-gray-500 text-xs mt-1">Coming soon</p>
              </a>
              <a href="/contact" className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition group">
                <FaPlug className="text-2xl text-gray-400 group-hover:text-white mb-2" />
                <h4 className="text-white font-mono text-sm">Support</h4>
                <p className="text-gray-500 text-xs mt-1">Get help</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;