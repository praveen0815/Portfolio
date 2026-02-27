import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane, FaCheck, FaArrowRight, FaComments } from 'react-icons/fa';
import { HiSparkles, HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi';
import { useTheme } from '../../context/ThemeContext';
import { Section, SectionTitle } from '../common';
import { personalInfo, socialLinks } from '../../data';

const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: HiMail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: HiPhone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: HiLocationMarker,
      label: "Location",
      value: personalInfo.location,
      href: null,
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const inputClasses = `w-full px-5 py-4 rounded-xl transition-all duration-300 outline-none ${
    isDark 
      ? 'bg-dark-800/80 border-2 border-dark-700 text-white placeholder-dark-500 focus:border-primary-500 focus:bg-dark-800' 
      : 'bg-white border-2 border-gray-200 text-dark-800 placeholder-gray-400 focus:border-primary-500 shadow-sm'
  }`;

  return (
    <Section id="contact" className={`relative overflow-hidden ${isDark ? 'bg-dark-900' : 'bg-white'}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] ${
          isDark ? 'bg-primary-500/5' : 'bg-primary-500/10'
        }`} />
        <div className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[150px] ${
          isDark ? 'bg-accent-500/5' : 'bg-accent-500/10'
        }`} />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 mb-6"
          >
            <FaComments className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-primary-400">Let's Talk</span>
          </motion.div>

          <SectionTitle 
            title="Get In Touch" 
            subtitle="Have a project in mind? Let's work together"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-dark-800'
              }`}>
                Let's Connect
              </h3>
              <p className={`leading-relaxed ${isDark ? 'text-dark-400' : 'text-dark-500'}`}>
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Feel free to reach out!
              </p>
            </motion.div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.href ? (
                    <a 
                      href={item.href}
                      className={`group flex items-center gap-5 p-5 rounded-2xl transition-all duration-300 ${
                        isDark 
                          ? 'bg-dark-800/50 hover:bg-dark-800 border border-dark-700 hover:border-primary-500/50' 
                          : 'bg-gray-50 hover:bg-white border border-gray-200 hover:border-primary-300 hover:shadow-lg'
                      }`}
                    >
                      <motion.span 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`p-4 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg`}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </motion.span>
                      <div className="flex-1">
                        <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-dark-500'}`}>
                          {item.label}
                        </p>
                        <p className={`font-semibold ${isDark ? 'text-white' : 'text-dark-800'}`}>
                          {item.value}
                        </p>
                      </div>
                      <FaArrowRight className="w-4 h-4 text-primary-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                    </a>
                  ) : (
                    <div className={`flex items-center gap-5 p-5 rounded-2xl ${
                      isDark 
                        ? 'bg-dark-800/50 border border-dark-700' 
                        : 'bg-gray-50 border border-gray-200'
                    }`}>
                      <span className={`p-4 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </span>
                      <div>
                        <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-dark-500'}`}>
                          {item.label}
                        </p>
                        <p className={`font-semibold ${isDark ? 'text-white' : 'text-dark-800'}`}>
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={`p-6 rounded-2xl ${
                isDark ? 'bg-dark-800/30 border border-dark-700' : 'bg-gray-50'
              }`}
            >
              <p className={`text-sm font-medium mb-4 ${isDark ? 'text-dark-300' : 'text-dark-600'}`}>
                Find me on social media
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className={`group p-4 rounded-xl transition-all duration-300 ${
                      isDark 
                        ? 'bg-dark-700 hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent-500 text-dark-300 hover:text-white border border-dark-600 hover:border-transparent' 
                        : 'bg-white hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent-500 text-dark-600 hover:text-white border border-gray-200 hover:border-transparent shadow-sm'
                    }`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className={`relative p-8 md:p-10 rounded-3xl overflow-hidden ${
              isDark 
                ? 'bg-dark-800/50 border border-dark-700' 
                : 'bg-white shadow-2xl'
            }`}>
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 pointer-events-none" />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/30"
                  >
                    <FaCheck className="w-12 h-12 text-white" />
                  </motion.div>
                  <h3 className={`text-3xl font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-dark-800'
                  }`}>
                    Message Sent!
                  </h3>
                  <p className={`text-lg ${isDark ? 'text-dark-400' : 'text-dark-500'}`}>
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-semibold mb-3 ${
                        isDark ? 'text-dark-200' : 'text-dark-700'
                      }`}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        placeholder="John Doe"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-semibold mb-3 ${
                        isDark ? 'text-dark-200' : 'text-dark-700'
                      }`}>
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        placeholder="john@example.com"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-semibold mb-3 ${
                      isDark ? 'text-dark-200' : 'text-dark-700'
                    }`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="Project Inquiry"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-semibold mb-3 ${
                      isDark ? 'text-dark-200' : 'text-dark-700'
                    }`}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group w-full flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold text-lg shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 disabled:opacity-70 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-3">
                        <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                          <circle 
                            className="opacity-25" 
                            cx="12" 
                            cy="12" 
                            r="10" 
                            stroke="currentColor" 
                            strokeWidth="4"
                            fill="none"
                          />
                          <path 
                            className="opacity-75" 
                            fill="currentColor" 
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FaPaperPlane className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
