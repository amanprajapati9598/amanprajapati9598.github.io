import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { portfolioContent } from '../data/content';

export function ClientStrip() {
  const { liveClientSites } = portfolioContent;

  return (
    <section className="relative py-7 bg-white/70 dark:bg-[#0E1526] border-y border-slate-200/90 dark:border-slate-800/80 backdrop-blur-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          
          {/* Label / Proof point */}
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 dark:bg-sky-400/10 text-blue-600 dark:text-sky-400 border border-blue-100 dark:border-sky-900/40">
              <CheckCircle2 className="w-4 h-4" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-950 dark:text-white font-heading">
                Delivered Live Production Websites
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Built and deployed during full stack internship at RST Solutions
              </p>
            </div>
          </div>

          {/* 4 Clickable Client Links with crisp hover states */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            {liveClientSites.map((site) => (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-lg bg-slate-50/80 dark:bg-[#131D31] border border-slate-200/90 dark:border-slate-800/90 hover:bg-white dark:hover:bg-[#18253d] hover:border-blue-500 dark:hover:border-sky-400 shadow-2xs hover:shadow-md transition-all duration-200"
              >
                <span className="text-xs font-mono font-medium text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-sky-400 truncate">
                  {site.name}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
