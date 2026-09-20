import { useTheme } from './hooks/useTheme';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClientStrip } from './components/ClientStrip';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 selection:bg-blue-500/20 selection:text-blue-600 dark:selection:text-sky-300">
      {/* 1. Header */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="flex-grow">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Live Client Sites Strip */}
        <ClientStrip />

        {/* 4. Experience & Projects */}
        <Projects />
        <Experience />

        {/* 5. About (Education + Certification) */}
        <About />

        {/* 6. Skills (Grouped by Category) */}
        <Skills />

        {/* 7. Contact (Email CTA + Copy Button) */}
        <Contact />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}

export default App;
