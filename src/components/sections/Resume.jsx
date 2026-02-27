import { motion } from 'framer-motion';
import { FaDownload, FaExternalLinkAlt, FaFileAlt, FaBriefcase, FaGraduationCap, FaCode, FaStar, FaCircle } from 'react-icons/fa';
import { HiSparkles, HiDocumentDownload } from 'react-icons/hi';
import { useTheme } from '../../context/ThemeContext';
import { Section, SectionTitle, Button } from '../common';
import { personalInfo, skills, education } from '../../data';

const Resume = () => {
  const { isDark } = useTheme();

  const experiences = [
    {
      role: "Team Coordinator",
      project: "Resu-Mind AI",
      description: "Led the development of an AI-powered resume generator with seamless frontend and backend integration",
      period: "2024",
      highlights: ["AI Integration", "Team Leadership", "Full Stack"],
    },
    {
      role: "Individual Developer",
      project: "CampusSportsBooking",
      description: "Built a web application for sports slot bookings with real-time availability and user authentication",
      period: "2024",
      highlights: ["Real-time Data", "Authentication", "UI/UX Design"],
    },
  ];

  return (
    <Section id="resume" className={`relative overflow-hidden ${isDark ? 'bg-dark-950' : 'bg-gray-50'}`}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] ${
          isDark ? 'bg-primary-500/5' : 'bg-primary-500/10'
        }`} />
        <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[150px] ${
          isDark ? 'bg-accent-500/5' : 'bg-accent-500/10'
        }`} />
      </div>

      <div className="relative z-10">
        <SectionTitle 
          title="Resume" 
          subtitle="My professional background and experience"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column - Resume Preview Card */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`sticky top-24 p-8 rounded-3xl ${
                isDark 
                  ? 'bg-dark-800/50 border border-dark-700' 
                  : 'bg-white shadow-xl'
              }`}
            >
              <div className="text-center">
                {/* Resume Icon with Animation */}
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className={`w-28 h-28 mx-auto mb-6 rounded-2xl flex items-center justify-center relative overflow-hidden ${
                    isDark 
                      ? 'bg-gradient-to-br from-primary-500/20 to-accent-500/20' 
                      : 'bg-gradient-to-br from-primary-100 to-accent-100'
                  }`}
                >
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 animate-gradient">
                    <div className={`h-full w-full rounded-2xl ${isDark ? 'bg-dark-800' : 'bg-white'}`} />
                  </div>
                  <FaFileAlt className="w-14 h-14 text-primary-500 relative z-10" />
                </motion.div>

                <h3 className={`text-2xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-dark-800'
                }`}>
                  {personalInfo.name}
                </h3>
                <p className={`text-sm mb-2 ${
                  isDark ? 'text-primary-400' : 'text-primary-600'
                }`}>
                  {personalInfo.title}
                </p>
                <div className="flex items-center justify-center gap-2 mb-8">
                  <FaStar className="w-3 h-3 text-yellow-400" />
                  <span className={`text-xs ${isDark ? 'text-dark-400' : 'text-dark-500'}`}>
                    Available for opportunities
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <motion.a 
                    href="/resume.pdf"
                    download
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300"
                  >
                    <HiDocumentDownload className="w-5 h-5" />
                    Download Resume
                  </motion.a>
                  <motion.a 
                    href="/resume.pdf"
                    target="_blank"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                      isDark 
                        ? 'bg-dark-700 text-white border border-dark-600 hover:border-primary-500/50' 
                        : 'bg-gray-100 text-dark-700 hover:bg-gray-200'
                    }`}
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    View in New Tab
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Resume Details */}
          <div className="lg:col-span-2 space-y-10">
            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${
                isDark ? 'text-white' : 'text-dark-800'
              }`}>
                <span className="p-3 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg">
                  <FaBriefcase className="w-5 h-5 text-white" />
                </span>
                Project Experience
              </h3>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative pl-10 pb-8 border-l-2 ${
                      isDark ? 'border-dark-700' : 'border-gray-200'
                    } last:pb-0`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-0 w-5 h-5 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 shadow-lg shadow-primary-500/50 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    
                    <div className={`group p-6 rounded-2xl transition-all duration-300 ${
                      isDark 
                        ? 'bg-dark-800/50 border border-dark-700 hover:border-primary-500/30' 
                        : 'bg-white shadow-lg hover:shadow-xl'
                    }`}>
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h4 className={`font-bold text-lg ${
                            isDark ? 'text-white' : 'text-dark-800'
                          }`}>
                            {exp.role}
                          </h4>
                          <p className="text-primary-400 font-medium">
                            {exp.project}
                          </p>
                        </div>
                        <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                          isDark 
                            ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30' 
                            : 'bg-primary-50 text-primary-600'
                        }`}>
                          {exp.period}
                        </span>
                      </div>
                      <p className={`text-sm leading-relaxed mb-4 ${
                        isDark ? 'text-dark-400' : 'text-dark-500'
                      }`}>
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                              isDark 
                                ? 'bg-dark-700 text-dark-300' 
                                : 'bg-gray-100 text-dark-600'
                            }`}
                          >
                            <FaCircle className="w-1.5 h-1.5 text-primary-400" />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${
                isDark ? 'text-white' : 'text-dark-800'
              }`}>
                <span className="p-3 rounded-xl bg-gradient-to-br from-accent-500 to-primary-500 shadow-lg">
                  <FaGraduationCap className="w-5 h-5 text-white" />
                </span>
                Education
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className={`group p-6 rounded-2xl transition-all duration-300 ${
                      isDark 
                        ? 'bg-dark-800/50 border border-dark-700 hover:border-accent-500/30' 
                        : 'bg-white shadow-lg hover:shadow-xl'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className={`font-bold ${
                        isDark ? 'text-white' : 'text-dark-800'
                      }`}>
                        {edu.degree}
                      </h4>
                      <span className={`text-xs px-2 py-1 rounded-lg ${
                        isDark ? 'bg-dark-700 text-dark-400' : 'bg-gray-100 text-dark-500'
                      }`}>
                        {edu.duration}
                      </span>
                    </div>
                    <p className={`text-sm mb-3 ${
                      isDark ? 'text-dark-400' : 'text-dark-500'
                    }`}>
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-2">
                      <HiSparkles className="w-4 h-4 text-yellow-400" />
                      <span className="text-primary-400 font-semibold text-sm">
                        {edu.grade}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Skills Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${
                isDark ? 'text-white' : 'text-dark-800'
              }`}>
                <span className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg">
                  <FaCode className="w-5 h-5 text-white" />
                </span>
                Key Skills
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {Object.values(skills).flat().slice(0, 12).map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-default ${
                      isDark 
                        ? 'bg-dark-800 text-dark-200 border border-dark-700 hover:border-primary-500/50 hover:text-primary-400' 
                        : 'bg-white text-dark-700 shadow-md border border-gray-100 hover:shadow-lg hover:border-primary-300'
                    }`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Resume;
