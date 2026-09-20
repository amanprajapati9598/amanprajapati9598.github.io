import { ExternalLink, Layers, Smartphone } from 'lucide-react';
import { portfolioContent } from '../data/content';

export function Projects() {
  const { projects } = portfolioContent;

  return (
    <section className="py-16 md:py-24" id="work">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-sky-400 font-mono mb-2">
            <span>01 // Selected Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
            Projects
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
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
                className="flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-blue-500/80 dark:hover:border-sky-500/80 transition-all duration-200 shadow-sm hover:shadow-md group"
              >
                <div>
                  {/* Card Header & Type Icon */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {isMobile ? (
                          <Smartphone className="w-4 h-4" />
                        ) : (
                          <Layers className="w-4 h-4" />
                        )}
                      </span>
                      {project.highlight && (
                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-sky-950/60 text-blue-700 dark:text-sky-300 border border-blue-200 dark:border-sky-900/60">
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
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md text-blue-600 dark:text-sky-400 hover:bg-blue-50 dark:hover:bg-sky-950/50 transition-colors"
                        aria-label={`View live site for ${project.title}`}
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white font-heading group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
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
                        className="text-[11px] font-mono font-medium px-2 py-1 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
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
