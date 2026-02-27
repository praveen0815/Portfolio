import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FaDownload, FaPlay } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { useTheme } from '../../context/ThemeContext';
import { Button } from '../common';
import { personalInfo, socialLinks } from '../../data';

const Hero = () => {
  const { isDark } = useTheme();
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        isDark ? 'bg-dark-950' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}
    >
      {/* Cursor Glow Effect */}
      <motion.div
        className="cursor-glow hidden lg:block"
        style={{ left: cursorXSpring, top: cursorYSpring }}
      />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 ${isDark ? 'opacity-100' : 'opacity-30'}`}>
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-[120px] blob" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-500/20 rounded-full blur-[120px] blob-delayed" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[150px]" />
        </div>
        
        <div 
          className={`absolute inset-0 ${isDark ? 'opacity-[0.03]' : 'opacity-[0.05]'}`}
          style={{
            backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(14, 165, 233, 0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${isDark ? 'bg-primary-400/40' : 'bg-primary-500/30'}`}
            style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ y: [0, -30, 0], x: [0, 15, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Status Badge */}
          <motion.div 
            variants={itemVariants}
            className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-8 ${
              isDark 
                ? 'bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20' 
                : 'bg-white/80 border border-gray-200 shadow-lg shadow-gray-200/50'
            }`}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Available for opportunities
            </span>
            <HiSparkles className="w-4 h-4 text-yellow-400" />
          </motion.div>

          {/* Name */}
          <motion.h1 variants={itemVariants} className="mb-6">
            <span className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight ${
              isDark ? 'text-white' : 'text-dark-900'
            }`}>
              {personalInfo.name.split(' ')[0]}
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight gradient-text mt-2">
              {personalInfo.name.split(' ')[1]}
            </span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div variants={itemVariants} className="h-14 md:h-16 mb-8 flex items-center justify-center">
            <div className={`px-6 py-3 rounded-2xl ${
              isDark ? 'bg-dark-800/50 border border-dark-700/50' : 'bg-white/50 border border-gray-200'
            }`}>
              <TypeAnimation
                sequence={['AI Engineer', 2500, 'Full Stack Developer', 2500, 'Problem Solver', 2500, 'Tech Enthusiast', 2500]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className={`text-xl md:text-2xl lg:text-3xl font-display font-semibold ${
                  isDark ? 'text-primary-400' : 'text-primary-600'
                }`}
              />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className={`text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed ${
              isDark ? 'text-dark-300' : 'text-dark-600'
            }`}
          >
            Crafting <span className="text-primary-400 font-semibold">intelligent solutions</span> at the intersection of 
            <span className="text-accent-400 font-semibold"> AI</span> and 
            <span className="text-primary-400 font-semibold"> web development</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="projects" smooth={true} offset={-80} duration={500}>
              <Button variant="primary" icon={FaPlay} iconPosition="left">
                View My Work
              </Button>
            </Link>
            <Button variant="secondary" href="/resume.pdf" download icon={FaDownload}>
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-5">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-4 rounded-2xl transition-all duration-300 ${
                  isDark 
                    ? 'bg-dark-800/50 hover:bg-dark-700/80 text-dark-300 hover:text-white border border-dark-700/50 hover:border-primary-500/50' 
                    : 'bg-white/80 hover:bg-white text-dark-600 hover:text-primary-600 shadow-lg shadow-gray-200/50 hover:shadow-xl'
                }`}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                <span className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ${
                  isDark ? 'text-dark-400' : 'text-dark-500'
                }`}>
                  {social.name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link to="about" smooth={true} offset={-80} duration={500}>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={`cursor-pointer flex flex-col items-center gap-2 ${
              isDark ? 'text-dark-400 hover:text-primary-400' : 'text-dark-500 hover:text-primary-600'
            }`}
          >
            <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
            <div className={`w-6 h-10 rounded-full border-2 flex items-start justify-center p-2 ${
              isDark ? 'border-dark-600' : 'border-dark-300'
            }`}>
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-primary-400' : 'bg-primary-600'}`}
              />
            </div>
          </motion.div>
        </Link>
      </motion.div>

      {/* Bottom Gradient */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${
        isDark ? 'from-dark-950 to-transparent' : 'from-gray-50 to-transparent'
      }`} />
    </section>
  );
};

export default Hero;
