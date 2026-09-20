import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioContent } from '../data/content';
import type { Theme } from '../hooks/useTheme';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

export function Header({ theme, toggleTheme }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = portfolioContent.navigation;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#0B0F17]/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#"
          className="group flex items-center gap-2 text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white font-heading"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-sky-400 group-hover:scale-125 transition-transform" />
          <span>{portfolioContent.personal.name}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Direct Resume Link in Header */}
          <a
            href={portfolioContent.personal.resumePath}
            download="Aman_Prajapati_Resume.pdf"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-blue-600 dark:hover:border-sky-400 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700" />
            )}
          </button>
        </nav>

        {/* Mobile controls: Theme toggle + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0E1524] border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 shadow-xl animate-fade-in">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={portfolioContent.personal.resumePath}
                download="Aman_Prajapati_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 dark:bg-sky-400 text-white dark:text-slate-950 font-semibold text-sm hover:opacity-95 transition-opacity"
              >
                <span>Download Resume</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
