import { ArrowUp } from 'lucide-react';
import { portfolioContent } from '../data/content';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { personal, footer } = portfolioContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B0F17]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-center sm:text-left">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {currentYear} {personal.name}. All rights reserved.
          </p>
          <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            {footer.note}
          </p>
        </div>

        {/* Right: Back to top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-400 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Back to top of page"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
