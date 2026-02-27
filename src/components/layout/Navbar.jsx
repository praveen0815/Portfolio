import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { useTheme } from '../../context/ThemeContext';
import { navLinks } from '../../data';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? isDark 
              ? 'glass py-3 shadow-xl shadow-black/10' 
              : 'glass-light py-3 shadow-xl shadow-black/5'
            : 'py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer group"
            >
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <span className="text-3xl font-display font-black gradient-text">
                    PK
                  </span>
                  <HiSparkles className="absolute -top-1 -right-2 w-3 h-3 text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onSetActive={() => setActiveSection(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-300 rounded-lg ${
                    activeSection === link.href
                      ? 'text-primary-400'
                      : isDark 
                        ? 'text-dark-300 hover:text-white hover:bg-dark-800/50' 
                        : 'text-dark-600 hover:text-dark-800 hover:bg-gray-100'
                  }`}
                  activeClass="text-primary-400"
                >
                  {link.name}
                  {activeSection === link.href && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className={`relative p-3 rounded-xl transition-all duration-300 overflow-hidden ${
                  isDark 
                    ? 'bg-dark-800 hover:bg-dark-700 text-yellow-400 border border-dark-700' 
                    : 'bg-gray-100 hover:bg-gray-200 text-dark-600 border border-gray-200'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isDark ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                >
                  {isDark ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
                </motion.div>
              </motion.button>

              {/* Mobile Menu Toggle */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-3 rounded-xl md:hidden transition-all duration-300 ${
                  isDark 
                    ? 'bg-dark-800 hover:bg-dark-700 border border-dark-700' 
                    : 'bg-gray-100 hover:bg-gray-200 border border-gray-200'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            />
            
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`fixed top-0 right-0 bottom-0 w-72 z-50 ${
                isDark ? 'bg-dark-900' : 'bg-white'
              } shadow-2xl md:hidden`}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-bold gradient-text">Menu</span>
                  <motion.button
                    onClick={closeMobileMenu}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-xl ${
                      isDark ? 'bg-dark-800 hover:bg-dark-700' : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <FaTimes className="w-5 h-5" />
                  </motion.button>
                </div>
                
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.href}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={closeMobileMenu}
                        className={`block px-4 py-3 rounded-xl text-lg font-medium cursor-pointer transition-all duration-300 ${
                          isDark 
                            ? 'text-dark-200 hover:bg-dark-800 hover:text-primary-400' 
                            : 'text-dark-600 hover:bg-gray-100 hover:text-primary-600'
                        }`}
                        activeClass="!bg-primary-500/10 !text-primary-400"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
