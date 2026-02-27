import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket, FaBrain, FaCalendarAlt, FaMedal } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { useTheme } from '../../context/ThemeContext';
import { Section, SectionTitle } from '../common';
import { about, education } from '../../data';

const About = () => {
  const { isDark } = useTheme();

  const highlights = [
    {
      icon: FaCode,
      title: "Full Stack Development",
      description: "Building scalable web applications with modern technologies",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaBrain,
      title: "AI & Machine Learning",
      description: "Exploring intelligent systems and automation",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: FaRocket,
      title: "Continuous Learning",
      description: "Always expanding knowledge and skills",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <Section id="about" className={`relative overflow-hidden ${isDark ? 'bg-dark-950' : 'bg-gray-50'}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-20 right-20 w-72 h-72 rounded-full blur-[100px] ${
          isDark ? 'bg-primary-500/5' : 'bg-primary-500/10'
        }`} />
        <div className={`absolute bottom-20 left-20 w-72 h-72 rounded-full blur-[100px] ${
          isDark ? 'bg-accent-500/5' : 'bg-accent-500/10'
        }`} />
      </div>

      <div className="relative z-10">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know my journey and passion for technology"
        />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side - About Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`text-lg leading-relaxed space-y-4 ${isDark ? 'text-dark-300' : 'text-dark-600'}`}
          >
            <p>{about.introduction}</p>
            <p>{about.highlight}</p>
          </motion.div>

          {/* Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`relative p-8 rounded-2xl overflow-hidden ${
              isDark ? 'bg-dark-800/50' : 'bg-white shadow-xl'
            }`}
          >
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500">
              <div className={`h-full w-full rounded-2xl ${isDark ? 'bg-dark-800' : 'bg-white'}`} />
            </div>
            
            <div className="relative flex items-start gap-4">
              <HiSparkles className="w-8 h-8 text-primary-500 flex-shrink-0 mt-1" />
              <div>
                <p className={`text-lg italic font-medium leading-relaxed ${isDark ? 'text-dark-200' : 'text-dark-700'}`}>
                  "{about.careerGoal}"
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-8 h-[2px] bg-gradient-to-r from-primary-500 to-accent-500" />
                  <span className="text-sm text-primary-400 font-medium">Career Vision</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8"
          >
            <h3 className={`text-xl font-bold mb-6 flex items-center gap-3 ${
              isDark ? 'text-white' : 'text-dark-800'
            }`}>
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500">
                <FaGraduationCap className="w-5 h-5 text-white" />
              </div>
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group p-5 rounded-xl transition-all duration-300 ${
                    isDark 
                      ? 'bg-dark-800/30 hover:bg-dark-800/50 border border-dark-700/50 hover:border-primary-500/30' 
                      : 'bg-gray-100 hover:bg-white hover:shadow-lg'
                  }`}
                >
                  <h4 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-dark-800'}`}>
                    {edu.degree}
                  </h4>
                  <p className={`text-sm mt-1 ${isDark ? 'text-dark-400' : 'text-dark-500'}`}>
                    {edu.institution}
                  </p>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-dashed ${isDark ? 'border-dark-700' : 'border-gray-200'}">
                    <div className="flex items-center gap-2">
                      <FaMedal className="w-4 h-4 text-primary-500" />
                      <span className={`text-sm font-medium ${isDark ? 'text-primary-400' : 'text-primary-600'}`}>
                        {edu.grade}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="w-3 h-3 text-dark-400" />
                      <span className={`text-sm ${isDark ? 'text-dark-500' : 'text-dark-400'}`}>
                        {edu.duration}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side - Highlights Cards */}
        <div className="space-y-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative p-6 rounded-2xl transition-all duration-300 overflow-hidden ${
                isDark 
                  ? 'bg-dark-800/50 border border-dark-700 hover:border-primary-500/30' 
                  : 'bg-white shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Hover Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative flex items-start gap-5">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`p-4 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-dark-800'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`leading-relaxed ${isDark ? 'text-dark-400' : 'text-dark-500'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 mt-8"
          >
            {[
              { number: "3+", label: "Projects", icon: "🚀" },
              { number: "5+", label: "Technologies", icon: "⚡" },
              { number: "75%", label: "AI Course", icon: "🤖" },
              { number: "2027", label: "Graduation", icon: "🎓" },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`group relative p-6 rounded-2xl text-center overflow-hidden transition-all duration-300 ${
                  isDark 
                    ? 'bg-dark-800/50 border border-dark-700 hover:border-primary-500/50' 
                    : 'bg-white shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Gradient Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                
                <span className="text-2xl mb-2 block">{stat.icon}</span>
                <span className="text-3xl font-black gradient-text block">{stat.number}</span>
                <p className={`text-sm mt-2 font-medium ${isDark ? 'text-dark-400' : 'text-dark-500'}`}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      </div>
    </Section>
  );
};

export default About;
