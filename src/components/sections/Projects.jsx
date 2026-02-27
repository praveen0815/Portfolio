import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaArrowRight } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { useTheme } from '../../context/ThemeContext';
import { Section, SectionTitle } from '../common';
import { projects } from '../../data';

const ProjectCard = ({ project, index, isDark }) => {
  const [isHovered, setIsHovered] = useState(false);

  const categoryColors = {
    AI: 'from-purple-500 to-pink-500',
    Web: 'from-cyan-500 to-blue-500',
    Backend: 'from-green-500 to-emerald-500',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-3xl overflow-hidden ${
        isDark 
          ? 'bg-gradient-to-br from-dark-800/80 to-dark-900/80 border border-dark-700/50' 
          : 'bg-white border border-gray-200'
      } transition-all duration-500 hover:shadow-2xl ${
        isDark ? 'hover:shadow-primary-500/10' : 'hover:shadow-gray-300/50'
      }`}
      style={{ transformStyle: 'preserve-3d' }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Gradient Border on Hover */}
      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        isDark ? 'bg-gradient-to-r from-primary-500/20 via-transparent to-accent-500/20' : ''
      }`} />

      {/* Project Header */}
      <div className={`relative h-52 overflow-hidden ${
        isDark ? 'bg-gradient-to-br from-dark-700 to-dark-800' : 'bg-gradient-to-br from-gray-50 to-gray-100'
      }`}>
        {/* Abstract Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl bg-gradient-to-r ${categoryColors[project.category] || 'from-primary-500 to-accent-500'}`} />
          <div className={`absolute bottom-0 left-0 w-40 h-40 rounded-full blur-3xl bg-gradient-to-r ${categoryColors[project.category] || 'from-primary-500 to-accent-500'}`} />
        </div>

        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`p-6 rounded-3xl ${
              isDark ? 'bg-dark-800/80 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm shadow-lg'
            }`}
          >
            <FaCode className={`w-12 h-12 bg-gradient-to-r ${categoryColors[project.category] || 'from-primary-500 to-accent-500'} bg-clip-text text-transparent`} style={{ 
              WebkitTextFillColor: 'transparent',
              background: `linear-gradient(135deg, ${project.category === 'AI' ? '#a855f7, #ec4899' : project.category === 'Web' ? '#06b6d4, #3b82f6' : '#0ea5e9, #d946ef'})`,
              WebkitBackgroundClip: 'text',
            }} />
          </motion.div>
        </div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          {project.featured && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-semibold text-white shadow-lg">
              <HiSparkles className="w-3 h-3" />
              Featured
            </div>
          )}
          <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
            isDark ? 'bg-dark-800/80 text-dark-200' : 'bg-white/80 text-dark-600 shadow-sm'
          }`}>
            {project.category}
          </span>
        </div>

        {/* Hover Overlay with Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-dark-950/95 via-dark-900/80 to-transparent flex items-end justify-center pb-6 gap-4"
        >
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/20 transition-colors border border-white/20"
              aria-label="View on GitHub"
            >
              <FaGithub className="w-5 h-5" />
              <span className="text-sm font-medium">Code</span>
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl text-white transition-colors"
              aria-label="View Live Demo"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              <span className="text-sm font-medium">Live</span>
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Project Info */}
      <div className="p-6 relative">
        <div className="flex items-start justify-between mb-3">
          <h3 className={`text-xl font-bold group-hover:text-primary-400 transition-colors ${
            isDark ? 'text-white' : 'text-dark-800'
          }`}>
            {project.title}
          </h3>
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: isHovered ? 0 : -10, opacity: isHovered ? 1 : 0 }}
            className="text-primary-400"
          >
            <FaArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
        
        <p className={`text-sm mb-5 line-clamp-2 leading-relaxed ${
          isDark ? 'text-dark-400' : 'text-dark-500'
        }`}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-300 ${
                isDark 
                  ? 'bg-dark-700/50 text-dark-300 border border-dark-600/50 group-hover:border-primary-500/30 group-hover:text-primary-400' 
                  : 'bg-gray-100 text-dark-600 group-hover:bg-primary-50 group-hover:text-primary-600'
              }`}
            >
              {tech}
            </motion.span>
          ))}
          {project.techStack.length > 4 && (
            <span className={`px-3 py-1.5 text-xs font-medium rounded-lg ${
              isDark ? 'bg-dark-700/50 text-dark-400' : 'bg-gray-100 text-dark-500'
            }`}>
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'AI', 'Web', 'Backend'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <Section id="projects" className={`relative overflow-hidden ${isDark ? 'bg-dark-950' : 'bg-gray-50'}`}>
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 -right-40 w-80 h-80 rounded-full blur-[100px] ${
          isDark ? 'bg-primary-500/10' : 'bg-primary-500/5'
        }`} />
        <div className={`absolute bottom-1/4 -left-40 w-80 h-80 rounded-full blur-[100px] ${
          isDark ? 'bg-accent-500/10' : 'bg-accent-500/5'
        }`} />
      </div>

      <div className="relative z-10">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="Explore my latest work in AI and web development"
        />

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-14">
          {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveFilter(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeFilter === category
                ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25'
                : isDark 
                  ? 'bg-dark-800 text-dark-300 hover:bg-dark-700 border border-dark-700' 
                  : 'bg-white text-dark-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isDark={isDark}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* View More */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center"
      >
        <motion.a
          href="https://github.com/praveen0815"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`group inline-flex items-center gap-3 px-8 py-4 rounded-2xl transition-all duration-300 ${
            isDark 
              ? 'bg-dark-800/50 border border-dark-700 hover:border-primary-500/50 hover:bg-dark-800' 
              : 'bg-white border border-gray-200 hover:border-primary-500/50 hover:shadow-lg'
          }`}
        >
          <FaGithub className={`w-6 h-6 transition-transform duration-300 group-hover:scale-110 ${
            isDark ? 'text-white' : 'text-dark-800'
          }`} />
          <span className={`font-medium ${isDark ? 'text-dark-300' : 'text-dark-600'}`}>
            View more projects on
          </span>
          <span className="font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
            GitHub
          </span>
          <FaArrowRight className="w-4 h-4 text-primary-400 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.a>
      </motion.div>
      </div>
    </Section>
  );
};

export default Projects;
