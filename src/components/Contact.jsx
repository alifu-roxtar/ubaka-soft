// components/Contact.jsx - Dark Developer Theme
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPaperPlane, FaTerminal, FaCheckCircle, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const config = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    
    if (!config.serviceId || !config.templateId || !config.publicKey) {
      setStatus({ type: 'error', msg: 'Email service not configured. Please contact admin.' });
      setTimeout(() => setStatus(null), 5000);
      return;
    }

    setIsSubmitting(true);
    
    try {
      emailjs.init(config.publicKey);
      await emailjs.sendForm(config.serviceId, config.templateId, formRef.current);
      setStatus({ type: 'success', msg: 'Message sent successfully! We\'ll get back to you soon.' });
      formRef.current.reset();
    } catch (error) {
      setStatus({ type: 'error', msg: 'Failed to send. Please try again.' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const contactInfo = [
    { icon: FaPhone, title: 'Phone', detail: '+250 788 123 456', link: 'tel:+250788123456', color: 'green' },
    { icon: FaEnvelope, title: 'Email', detail: 'info@ubakasoft.com', link: 'mailto:info@ubakasoft.com', color: 'blue' },
    { icon: FaMapMarkerAlt, title: 'Office', detail: 'Kicukiro, Kigali, Rwanda', link: 'https://maps.google.com', color: 'red' },
    { icon: FaClock, title: 'Hours', detail: 'Mon-Fri: 9AM - 6PM', link: null, color: 'purple' },
  ];

  const getIconColor = (color) => {
    const colors = {
      green: 'bg-green-600',
      blue: 'bg-blue-600',
      red: 'bg-red-600',
      purple: 'bg-purple-600',
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <FaTerminal className="text-sm" />
              <span className="text-sm font-mono">contact --init</span>
              <span className="text-green-400 text-sm ml-2">● ready to connect</span>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <FaPaperPlane className="text-5xl" />
              <h1 className="text-5xl font-bold text-white">Get In Touch</h1>
            </div>
            <p className="text-xl text-white/90">Ready to start your project? Let's discuss your vision</p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="bg-gray-800 rounded-lg p-6 hover:shadow-lg hover:shadow-blue-500/10 transition border border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className={`${getIconColor(info.color)} p-3 rounded-lg`}>
                    <info.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="text-gray-400 text-sm hover:text-blue-400 transition">
                        {info.detail}
                      </a>
                    ) : (
                      <p className="text-gray-400 text-sm">{info.detail}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Social Links */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="font-semibold text-white mb-4 font-mono text-sm">// social_channels</h3>
              <div className="flex space-x-3">
                {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub].map((Icon, idx) => (
                  <a key={idx} href="#" className="bg-gray-700 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition group">
                    <Icon className="text-gray-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* System Status */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="font-semibold text-white mb-3 font-mono text-sm">// system_status</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">API Status:</span>
                  <span className="text-green-400 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                    Operational
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Response Time:</span>
                  <span className="text-blue-400">&lt; 100ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Uptime:</span>
                  <span className="text-green-400">99.99%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-gray-800 rounded-lg p-8 border border-gray-700">
            <div className="flex items-center space-x-2 mb-6">
              <FaTerminal className="text-green-400" />
              <h3 className="text-2xl font-bold text-white font-mono">send_message.sh</h3>
            </div>
            
            {status && (
              <div className={`mb-6 p-4 rounded-lg flex items-center gap-2 ${
                status.type === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/50' : 'bg-red-500/20 text-red-400 border border-red-500/50'
              }`}>
                {status.type === 'success' ? <FaCheckCircle /> : <FaTerminal />}
                <span>{status.msg}</span>
              </div>
            )}

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 font-semibold mb-2 font-mono text-sm">
                    from_name <span className="text-red-400">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="from_name" 
                    required 
                    className="w-full bg-gray-900 text-gray-300 px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-mono text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-2 font-mono text-sm">
                    from_email <span className="text-red-400">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="from_email" 
                    required 
                    className="w-full bg-gray-900 text-gray-300 px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-mono text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 font-semibold mb-2 font-mono text-sm">
                  subject <span className="text-red-400">*</span>
                </label>
                <input 
                  type="text" 
                  name="subject" 
                  required 
                  className="w-full bg-gray-900 text-gray-300 px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-mono text-sm"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 font-semibold mb-2 font-mono text-sm">
                  message <span className="text-red-400">*</span>
                </label>
                <textarea 
                  name="message" 
                  required 
                  rows="5" 
                  className="w-full bg-gray-900 text-gray-300 px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-mono text-sm resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition disabled:opacity-50 flex items-center justify-center gap-2 font-mono"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    ./send_message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;