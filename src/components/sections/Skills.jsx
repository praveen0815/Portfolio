import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Section, SectionTitle } from '../common';
import { skills } from '../../data';
import { HiViewGrid, HiChartBar, HiSparkles } from 'react-icons/hi';

const SkillBar = ({ name, level, index, isDark }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className={`font-semibold group-hover:text-primary-400 transition-colors ${isDark ? 'text-dark-200' : 'text-dark-700'}`}>
          {name}
        </span>
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + index * 0.1 }}
          className={`text-sm font-bold px-2 py-0.5 rounded-full ${
            isDark ? 'bg-primary-500/20 text-primary-400' : 'bg-primary-50 text-primary-600'
          }`}
        >
          {level}%
        </motion.span>
      </div>
      <div className={`h-3 rounded-full overflow-hidden ${
        isDark ? 'bg-dark-700' : 'bg-gray-200'
      }`}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-400 relative"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillCard = ({ name, level, index, isDark }) => {
  const getSkillColor = (level) => {
    if (level >= 85) return 'from-green-400 to-emerald-500';
    if (level >= 70) return 'from-primary-400 to-accent-500';
    if (level >= 50) return 'from-blue-400 to-cyan-500';
    return 'from-purple-400 to-pink-500';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.08, y: -8 }}
      className={`relative p-5 rounded-2xl text-center group cursor-default overflow-hidden ${
        isDark 
          ? 'bg-dark-800/50 border border-dark-700 hover:border-primary-500/50' 
          : 'bg-white shadow-md hover:shadow-xl border border-gray-100 hover:border-primary-300'
      } transition-all duration-300`}
    >
      {/* Top Accent Line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getSkillColor(level)} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
      
      {/* Progress Ring */}
      <div className="relative w-20 h-20 mx-auto mb-4">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="40"
            cy="40"
            r="34"
            strokeWidth="6"
            fill="none"
            className={isDark ? 'stroke-dark-700' : 'stroke-gray-200'}
          />
          <motion.circle
            cx="40"
            cy="40"
            r="34"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            className={`stroke-primary-500 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]`}
            initial={{ strokeDasharray: "0 214" }}
            whileInView={{ strokeDasharray: `${level * 2.14} 214` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: index * 0.05, ease: "easeOut" }}
          />
        </svg>
        <motion.span 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + index * 0.05 }}
          className={`absolute inset-0 flex items-center justify-center text-lg font-bold ${
            isDark ? 'text-white' : 'text-dark-800'
          }`}
        >
          {level}<span className="text-xs text-primary-400">%</span>
        </motion.span>
      </div>
      
      <span className={`text-sm font-semibold block ${isDark ? 'text-dark-200' : 'text-dark-700'}`}>
        {name}
      </span>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/10 group-hover:to-accent-500/10 transition-all duration-300" />
    </motion.div>
  );
};

const Skills = () => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState(Object.keys(skills)[0]);
  const [viewMode, setViewMode] = useState('cards');

  const categories = Object.keys(skills);
  
  const categoryIcons = {
    'Languages': '💻',
    'Frontend': '🎨',
    'Backend': '⚙️',
    'AI & ML': '🤖',
    'Tools': '🛠️',
  };

  return (
    <Section id="skills" className={`relative overflow-hidden ${isDark ? 'bg-dark-900' : 'bg-white'}`}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] ${
          isDark ? 'bg-primary-500/5' : 'bg-primary-500/10'
        }`} />
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] ${
          isDark ? 'bg-accent-500/5' : 'bg-accent-500/10'
        }`} />
      </div>

      <div className="relative z-10">
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="Technologies and tools I work with daily"
        />

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-10">
          <div className={`inline-flex items-center gap-1 rounded-2xl p-1.5 ${
            isDark ? 'bg-dark-800 border border-dark-700' : 'bg-gray-100'
          }`}>
            {[
              { mode: 'cards', icon: HiViewGrid, label: 'Cards' },
              { mode: 'bars', icon: HiChartBar, label: 'Progress' }
            ].map(({ mode, icon: Icon, label }) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  viewMode === mode
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                    : isDark 
                      ? 'text-dark-400 hover:text-white hover:bg-dark-700' 
                      : 'text-dark-500 hover:text-dark-800 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25'
                  : isDark 
                    ? 'bg-dark-800 text-dark-300 hover:bg-dark-700 border border-dark-700 hover:border-primary-500/30' 
                    : 'bg-white text-dark-600 hover:bg-gray-50 border border-gray-200 shadow-sm'
              }`}
            >
              <span className="group-hover:scale-110 transition-transform">{categoryIcons[category] || '⚡'}</span>
              {category}
            </motion.button>
          ))}
      </div>

      {/* Skills Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          {viewMode === 'cards' ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {skills[activeCategory].map((skill, index) => (
                <SkillCard 
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  index={index}
                  isDark={isDark}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
              {skills[activeCategory].map((skill, index) => (
                <SkillBar 
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  index={index}
                  isDark={isDark}
                />
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Bottom Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center"
      >
        <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full ${
          isDark ? 'bg-dark-800/50 border border-dark-700' : 'bg-gray-100'
        }`}>
          <HiSparkles className="w-5 h-5 text-primary-400" />
          <p className={`text-sm font-medium ${isDark ? 'text-dark-300' : 'text-dark-600'}`}>
            Always learning and exploring new technologies
          </p>
          <HiSparkles className="w-5 h-5 text-accent-400" />
        </div>
      </motion.div>
      </div>
    </Section>
  );
};

export default Skills;
