import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClientStrip } from './components/ClientStrip';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CodeRain } from './components/CodeRain';

export function App() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#0B0F17] text-slate-100 selection:bg-sky-500/20 selection:text-sky-300">
      {/* Dynamic Digital Matrix Code Rain Animation */}
      <CodeRain />

      {/* Main Content Sections on top of code rain */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* 1. Header */}
        <Header />

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
    </div>
  );
}

export default App;
