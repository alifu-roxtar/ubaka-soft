// components/FAQ.jsx - Dark Developer Theme
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaQuestionCircle, FaEnvelope, FaTerminal, FaSearch } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      question: 'What software development services do you offer?',
      answer: 'We offer end-to-end software development including web applications, mobile apps, UI/UX design, cloud solutions, digital transformation, and AI integration. We specialize in modern technologies like React, Node.js, Python, React Native, and cloud platforms.',
      category: 'services',
      popular: true
    },
    {
      question: 'How long does it take to build a software product?',
      answer: 'Timeline varies based on complexity. A simple MVP can take 2-3 months, while enterprise platforms may take 6-12 months. We follow agile methodology to deliver working software quickly and iterate based on your feedback.',
      category: 'process',
      popular: true
    },
    {
      question: 'What is your development process?',
      answer: 'Our process includes: 1) Discovery & Requirements, 2) Design & Prototyping, 3) Development & Testing, 4) Deployment, and 5) Ongoing Support & Maintenance. We keep you involved every step of the way.',
      category: 'process',
      popular: false
    },
    {
      question: 'Do you offer support after launch?',
      answer: 'Yes! We provide ongoing maintenance, support, and enhancement services. We offer various support packages including 24/7 monitoring, bug fixes, feature additions, and technical consulting.',
      category: 'support',
      popular: true
    },
    {
      question: 'How do you ensure project quality?',
      answer: 'We follow rigorous QA processes including automated testing, code reviews, continuous integration, and user acceptance testing. Your satisfaction is guaranteed with our iterative feedback approach.',
      category: 'quality',
      popular: false
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing: fixed-price projects, time & materials, and dedicated team engagement. Each project is quoted based on scope, complexity, and timeline requirements. Contact us for a free consultation.',
      category: 'pricing',
      popular: true
    },
    {
      question: 'Do you work with startups?',
      answer: 'Absolutely! We love working with startups and offer special packages for early-stage companies. We can help you build an MVP and scale as you grow.',
      category: 'clients',
      popular: false
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We work with modern technologies including React, Next.js, Node.js, Python, Django, React Native, Flutter, AWS, Azure, Docker, Kubernetes, and various AI/ML frameworks.',
      category: 'technology',
      popular: true
    },
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(faqs.map(faq => faq.category))];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <FaTerminal className="text-sm" />
              <span className="text-sm font-mono">faq --help</span>
              <span className="text-green-400 text-sm ml-2">● knowledge base</span>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <FaQuestionCircle className="text-5xl" />
              <h1 className="text-5xl font-bold text-white">Frequently Asked Questions</h1>
            </div>
            <p className="text-xl text-white/90">Everything you need to know about working with us</p>
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
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-900 text-gray-300 pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-mono text-sm"
            />
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="text-xs text-gray-500 mr-2 font-mono">Categories:</span>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSearchTerm(cat)}
                className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded hover:bg-blue-600 transition"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700/50 transition"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      {faq.popular && (
                        <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded font-mono">
                          POPULAR
                        </span>
                      )}
                      <span className="text-lg font-semibold text-white">{faq.question}</span>
                    </div>
                  </div>
                  {openIndex === index ? (
                    <FaChevronUp className="text-blue-400 flex-shrink-0 ml-4" />
                  ) : (
                    <FaChevronDown className="text-blue-400 flex-shrink-0 ml-4" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-700 pt-4">
                      <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                      <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                        <span className="font-mono">category: {faq.category}</span>
                        <span>•</span>
                        <span className="font-mono">helpful: 89%</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <FaQuestionCircle className="text-6xl text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No matching questions found.</p>
              <p className="text-gray-500 text-sm mt-2">Try searching with different keywords</p>
            </div>
          )}

          {/* Still Have Questions */}
          <div className="mt-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 text-center border border-blue-500/30">
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <FaEnvelope className="text-green-400 text-sm" />
              <span className="text-sm font-mono text-gray-300">contact_support.sh</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Still Have Questions?</h3>
            <p className="text-gray-400 mb-6">Can't find the answer you're looking for? Please contact our team.</p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;