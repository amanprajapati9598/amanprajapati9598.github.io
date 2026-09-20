import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioContent } from '../data/content';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = portfolioContent.navigation;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0B0F17]/95 backdrop-blur-md shadow-xs border-b border-slate-800/90'
          : 'bg-[#0B0F17]/70 backdrop-blur-xs border-b border-slate-800/40'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-white font-heading"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-sky-400 group-hover:scale-125 transition-transform" />
          <span>{portfolioContent.personal.name}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-300 hover:text-sky-400 transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Direct Resume Link in Header */}
          <a
            href={portfolioContent.personal.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            download="Aman_Prajapati_Resume.pdf"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-lg border border-slate-700 hover:border-sky-400 bg-slate-900/80 text-slate-200 hover:text-sky-400 shadow-2xs transition-all"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile controls: Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-200 hover:bg-slate-800 transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0E1524] border-b border-slate-800 px-4 pt-2 pb-6 shadow-xl animate-fade-in">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-semibold text-slate-200 hover:bg-slate-800 hover:text-sky-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={portfolioContent.personal.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                download="Aman_Prajapati_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-sky-400 text-slate-950 font-semibold text-sm shadow-md transition-opacity"
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
