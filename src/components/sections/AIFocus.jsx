import { motion } from 'framer-motion';
import { FaBrain, FaRobot, FaLightbulb, FaChartLine, FaRocket } from 'react-icons/fa';
import { SiTensorflow, SiPython, SiOpenai } from 'react-icons/si';
import { HiSparkles, HiChip, HiLightningBolt } from 'react-icons/hi';
import { useTheme } from '../../context/ThemeContext';
import { Section, SectionTitle } from '../common';
import { aiSection } from '../../data';

const AIFocus = () => {
  const { isDark } = useTheme();

  const techIcons = [
    { icon: SiPython, name: 'Python', color: 'text-yellow-400', bg: 'from-yellow-500/20 to-orange-500/20' },
    { icon: SiTensorflow, name: 'TensorFlow', color: 'text-orange-500', bg: 'from-orange-500/20 to-red-500/20' },
    { icon: SiOpenai, name: 'OpenAI', color: 'text-green-400', bg: 'from-green-500/20 to-emerald-500/20' },
    { icon: FaBrain, name: 'ML', color: 'text-purple-400', bg: 'from-purple-500/20 to-pink-500/20' },
    { icon: FaRobot, name: 'AI Agents', color: 'text-blue-400', bg: 'from-blue-500/20 to-cyan-500/20' },
  ];

  return (
    <Section id="ai-focus" className={`relative overflow-hidden ${isDark ? 'bg-dark-900' : 'bg-white'}`}>
      {/* Futuristic Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }} />
        
        {/* Grid Pattern */}
        <div className={`absolute inset-0 bg-[linear-gradient(to_right,${isDark ? 'rgba(99,102,241,0.03)' : 'rgba(99,102,241,0.05)'}_1px,transparent_1px),linear-gradient(to_bottom,${isDark ? 'rgba(99,102,241,0.03)' : 'rgba(99,102,241,0.05)'}_1px,transparent_1px)] bg-[size:60px_60px]`} />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 mb-6"
          >
            <HiChip className="w-5 h-5 text-primary-400" />
            <span className="text-sm font-medium text-primary-400">Exploring AI Frontiers</span>
          </motion.div>
          
          <SectionTitle 
            title="AI & Innovation" 
            subtitle="Building intelligent systems that make a difference"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - AI Projects */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-2xl font-bold mb-8 flex items-center gap-3 ${
                isDark ? 'text-white' : 'text-dark-800'
              }`}
            >
              <span className="p-3 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg shadow-primary-500/25">
                <FaLightbulb className="text-white w-5 h-5" />
              </span>
              AI Projects
            </motion.h3>

            <div className="space-y-5">
              {aiSection.projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className={`group relative p-6 rounded-2xl overflow-hidden ${
                    isDark 
                      ? 'bg-dark-800/50 border border-dark-700 hover:border-primary-500/50' 
                      : 'bg-white shadow-lg hover:shadow-xl border border-gray-100'
                  } transition-all duration-300`}
                >
                  {/* Left Accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-accent-500" />
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/5 group-hover:to-accent-500/5 transition-all duration-300" />
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <HiSparkles className="w-5 h-5 text-primary-400" />
                      <h4 className={`font-bold text-lg ${
                        isDark ? 'text-white' : 'text-dark-800'
                      }`}>
                        {project.name}
                      </h4>
                    </div>
                    <p className={`text-sm leading-relaxed pl-8 ${
                      isDark ? 'text-dark-400' : 'text-dark-500'
                    }`}>
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Technology Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              {techIcons.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.15, y: -8 }}
                  className={`group flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-300 ${
                    isDark 
                      ? 'bg-dark-800/50 border border-dark-700 hover:border-primary-500/50' 
                      : 'bg-white shadow-md border border-gray-100 hover:shadow-lg'
                  }`}
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${tech.bg}`}>
                    <tech.icon className={`w-7 h-7 ${tech.color}`} />
                  </div>
                  <span className={`text-xs font-medium ${
                    isDark ? 'text-dark-400' : 'text-dark-500'
                  }`}>
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Learning & Goals */}
          <div className="space-y-6">
            {/* Currently Learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl ${
                isDark 
                  ? 'bg-dark-800/50 border border-dark-700' 
                  : 'bg-white shadow-lg'
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="p-3 rounded-xl bg-gradient-to-br from-accent-500 to-primary-500 shadow-lg shadow-accent-500/25">
                  <FaChartLine className="text-white w-5 h-5" />
                </span>
                <h3 className={`text-xl font-bold ${
                  isDark ? 'text-white' : 'text-dark-800'
                }`}>
                  Currently Learning
                </h3>
              </div>
              
              <ul className="space-y-4">
                {aiSection.learningTechnologies.map((tech, index) => (
                  <motion.li
                    key={tech}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 ${
                      isDark 
                        ? 'hover:bg-dark-700/50' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <HiLightningBolt className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <span className={`font-medium ${isDark ? 'text-dark-300' : 'text-dark-600'}`}>
                      {tech}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Future Goals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`relative p-6 rounded-2xl overflow-hidden ${
                isDark 
                  ? 'bg-dark-800/50' 
                  : 'bg-white shadow-lg'
              }`}
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500">
                <div className={`h-full w-full rounded-2xl ${isDark ? 'bg-dark-800' : 'bg-white'}`} />
              </div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-3 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg">
                    <FaRocket className="text-white w-5 h-5" />
                  </span>
                  <h3 className={`text-xl font-bold ${
                    isDark ? 'text-white' : 'text-dark-800'
                  }`}>
                    Future Vision
                  </h3>
                </div>
                
                <p className={`leading-relaxed pl-1 ${
                  isDark ? 'text-dark-300' : 'text-dark-600'
                }`}>
                  {aiSection.futureGoals}
                </p>
              </div>
            </motion.div>

            {/* AI Course Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`p-6 rounded-2xl ${
                isDark 
                  ? 'bg-gradient-to-br from-primary-900/30 to-accent-900/30 border border-primary-700/30' 
                  : 'bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-200'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500">
                    <SiPython className="w-5 h-5 text-white" />
                  </div>
                  <span className={`font-bold ${isDark ? 'text-white' : 'text-dark-800'}`}>
                    Python & AI Agents
                  </span>
                </div>
                <span className="text-2xl font-black gradient-text">75%</span>
              </div>
              <div className={`h-4 rounded-full overflow-hidden ${
                isDark ? 'bg-dark-700' : 'bg-gray-200'
              }`}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '75%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-400 relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </motion.div>
              </div>
              <p className={`text-sm mt-3 ${isDark ? 'text-dark-400' : 'text-dark-500'}`}>
                Deep diving into Python, logic building & AI agent architectures
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AIFocus;
