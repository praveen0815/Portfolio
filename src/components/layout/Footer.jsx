import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaHeart, FaArrowUp, FaCode } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { useTheme } from '../../context/ThemeContext';
import { personalInfo, socialLinks, navLinks } from '../../data';

const Footer = () => {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`relative overflow-hidden ${isDark ? 'bg-dark-950' : 'bg-gray-100'}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[150px] ${
          isDark ? 'bg-primary-500/5' : 'bg-primary-500/10'
        }`} />
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[150px] ${
          isDark ? 'bg-accent-500/5' : 'bg-accent-500/10'
        }`} />
      </div>

      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl font-display font-black gradient-text">
                  {personalInfo.name.split(' ')[0]}
                </span>
                <HiSparkles className="w-5 h-5 text-primary-400" />
              </div>
              <p className={`leading-relaxed ${isDark ? 'text-dark-400' : 'text-dark-500'}`}>
                {personalInfo.tagline}
              </p>
              
              {/* Back to Top */}
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="cursor-pointer"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                    isDark 
                      ? 'bg-dark-800 text-dark-300 hover:text-primary-400 border border-dark-700 hover:border-primary-500/50' 
                      : 'bg-white text-dark-600 hover:text-primary-600 shadow-md hover:shadow-lg'
                  }`}
                >
                  <FaArrowUp className="w-4 h-4" />
                  Back to Top
                </motion.button>
              </Link>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={`text-lg font-bold mb-6 ${isDark ? 'text-white' : 'text-dark-800'}`}>
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {navLinks.slice(0, 6).map((link, index) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className={`group cursor-pointer text-sm font-medium transition-all duration-300 hover:text-primary-400 flex items-center gap-2 ${
                      isDark ? 'text-dark-400' : 'text-dark-500'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className={`text-lg font-bold mb-6 ${isDark ? 'text-white' : 'text-dark-800'}`}>
                Let's Connect
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`group p-4 rounded-xl transition-all duration-300 ${
                      isDark 
                        ? 'bg-dark-800 hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent-500 text-dark-300 hover:text-white border border-dark-700 hover:border-transparent' 
                        : 'bg-white hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent-500 text-dark-600 hover:text-white shadow-md hover:shadow-lg'
                    }`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
              
              <p className={`mt-6 text-sm ${isDark ? 'text-dark-500' : 'text-dark-400'}`}>
                Open for collaborations and opportunities
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className={`border-t ${isDark ? 'border-dark-800' : 'border-gray-300'} pt-8`}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className={`text-sm ${isDark ? 'text-dark-400' : 'text-dark-500'}`}>
                © {currentYear} <span className="font-semibold">{personalInfo.name}</span>. All rights reserved.
              </p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={`text-sm flex items-center gap-2 ${isDark ? 'text-dark-400' : 'text-dark-500'}`}
              >
                <FaCode className="w-4 h-4 text-primary-400" />
                Built with 
                <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  <FaHeart className="text-red-500" />
                </motion.span>
                using 
                <span className="font-semibold gradient-text">React & Tailwind</span>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
