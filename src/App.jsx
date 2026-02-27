import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar, Footer } from './components/layout';
import { Hero, About, Skills, Projects, AIFocus, Resume, Contact } from './components/sections';

const AppContent = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-dark-950 text-white' : 'bg-white text-dark-900'
    }`}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AIFocus />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
