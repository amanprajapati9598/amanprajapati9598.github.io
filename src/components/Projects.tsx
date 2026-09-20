import { ExternalLink, Layers, Smartphone } from 'lucide-react';
import { portfolioContent } from '../data/content';

export function Projects() {
  const { projects } = portfolioContent;

  return (
    <section className="py-16 md:py-24 relative" id="work">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-sky-400 font-mono mb-2">
            <span>01 // Selected Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white font-heading">
            Projects
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl font-sans">
            Applications built with clean architecture, modern frontend frameworks, and robust backends.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => {
            const isMobile = project.stack.includes('Flutter');

            return (
              <article
                key={project.title}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 light-card-shadow light-card-hover group relative overflow-hidden"
              >
                {/* Subtle top card accent highlight */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-600 dark:group-hover:via-sky-400 transition-all duration-300" />

                <div>
                  {/* Card Header & Type Icon */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="p-2.5 rounded-xl bg-slate-100/90 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/60">
                        {isMobile ? (
                          <Smartphone className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                        ) : (
                          <Layers className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                        )}
                      </span>
                      {project.highlight && (
                        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-sky-950/60 dark:text-sky-300 border border-blue-200/80 dark:border-sky-900/60">
                          {project.highlight}
                        </span>
                      )}
                    </div>

                    {/* Live Link (Only shown if URL exists, never broken) */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white dark:bg-sky-950/60 dark:hover:bg-sky-400 dark:text-sky-300 dark:hover:text-slate-950 border border-blue-200/80 dark:border-sky-800/60 transition-all shadow-2xs group/link"
                        aria-label={`View live site for ${project.title}`}
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white font-heading group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">
                    {project.tagline}
                  </p>

                  {/* Problem & Solution description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Tags at bottom */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
