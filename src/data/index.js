import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export const personalInfo = {
  name: "Praveen Kumar",
  title: "AI Engineer | Full Stack Developer",
  tagline: "Building intelligent web applications and scalable backend systems",
  email: "praveen72696@gmail.com",
  phone: "+91 9597345895",
  location: "Coimbatore, Tamil Nadu",
  resumeUrl: "/resume.pdf",
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/praveen0815",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/praveen0815",
    icon: FaLinkedin,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/Praveen1508/",
    icon: SiLeetcode,
  },
  {
    name: "Email",
    url: "mailto:praveen72696@gmail.com",
    icon: FaEnvelope,
  },
];

export const skills = {
  "Programming Languages": [
    { name: "C", level: 85 },
    { name: "Java", level: 80 },
    { name: "Python", level: 75 },
    { name: "JavaScript", level: 80 },
    { name: "TypeScript", level: 70 },
  ],
  "AI & Machine Learning": [
    { name: "Machine Learning", level: 70 },
    { name: "Natural Language Processing", level: 65 },
    { name: "AI Agents", level: 60 },
    { name: "Computer Vision", level: 55 },
  ],
  "Web Development": [
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 80 },
    { name: "HTML/CSS", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Spring Boot", level: 70 },
  ],
  "Databases": [
    { name: "MongoDB", level: 80 },
    { name: "MySQL", level: 75 },
    { name: "PostgreSQL", level: 70 },
  ],
  "Tools & Technologies": [
    { name: "Git & GitHub", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "REST APIs", level: 85 },
    { name: "Postman", level: 80 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Resu-Mind AI",
    description: "AI-powered Resume Generator that enables users to generate professional resumes through structured form inputs, with seamless frontend and backend integration for efficient user data handling and resume generation.",
    techStack: ["HTML", "CSS", "JavaScript", "Node.js", "AI"],
    category: "AI",
    githubUrl: "https://github.com/praveen0815/Resu-MindAI",
    liveUrl: "",
    image: "/projects/resumind.png",
    featured: true,
  },
  {
    id: 2,
    title: "StudentVoice AI",
    description: "AI-powered platform for student feedback analysis and sentiment detection, helping educational institutions understand and respond to student needs effectively.",
    techStack: ["Python", "React", "Node.js", "AI", "NLP"],
    category: "AI",
    githubUrl: "https://github.com/praveen0815/StudentVoiceAI",
    liveUrl: "",
    image: "/projects/studentvoice.png",
    featured: true,
  },
  {
    id: 3,
    title: "SportsSlot AI",
    description: "Web application to manage sports slot bookings within a college campus, featuring user authentication, real-time slot availability, and efficient booking management with AI-powered recommendations.",
    techStack: ["HTML", "CSS", "JavaScript", "TypeScript", "Node.js", "MongoDB", "AI"],
    category: "Web",
    githubUrl: "https://github.com/praveen0815/SportsSlotAI",
    liveUrl: "",
    image: "/projects/sportsslot.png",
    featured: true,
  },
];

export const aiSection = {
  title: "AI & Innovation",
  subtitle: "Exploring the frontiers of artificial intelligence",
  projects: [
    {
      name: "Resu-Mind AI",
      description: "AI-powered resume generation with intelligent form processing",
    },
    {
      name: "StudentVoice AI",
      description: "NLP-based sentiment analysis for student feedback",
    },
    {
      name: "SportsSlot AI",
      description: "Smart booking system with AI recommendations",
    },
  ],
  learningTechnologies: [
    "Large Language Models (LLMs)",
    "AI Agents & Automation",
    "Natural Language Processing",
    "Computer Vision",
    "Machine Learning Pipelines",
  ],
  futureGoals: "My vision is to build intelligent systems that solve real-world problems. I'm focused on developing AI agents that can automate complex tasks and create more intuitive human-computer interactions.",
};

export const about = {
  introduction: "I'm an enthusiastic engineering student with a strong interest in software development and AI. I'm passionate about turning ideas into reliable and scalable applications by applying solid programming fundamentals, problem-solving skills, and hands-on experience from real-world projects.",
  highlight: "My expertise spans across full-stack web development and AI/ML technologies. I enjoy building applications that are not only functional but also intelligent and user-friendly.",
  careerGoal: "I aspire to become a leading AI Engineer, creating innovative solutions that bridge the gap between cutting-edge AI research and practical applications. My goal is to contribute to projects that make technology more accessible and impactful.",
};

export const education = [
  {
    degree: "B.E. Mechanical Engineering",
    institution: "Bannari Amman Institute of Technology",
    duration: "Expected 2027",
    grade: "CGPA: 7.15 (Up to 5th Semester)",
  },
  {
    degree: "HSC",
    institution: "Shree Gurukulam Higher Secondary School",
    duration: "2022 - 2023",
    grade: "72%",
  },
];

export const navLinks = [
  { name: "Home", href: "hero" },
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "AI Focus", href: "ai-focus" },
  { name: "Resume", href: "resume" },
  { name: "Contact", href: "contact" },
];
