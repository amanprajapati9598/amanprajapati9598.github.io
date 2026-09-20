import { ArrowUpRight, Briefcase, Calendar, CheckCircle } from 'lucide-react';
import { portfolioContent } from '../data/content';

export function Experience() {
  const { experience } = portfolioContent;

  return (
    <section className="py-12 md:py-16 bg-slate-50/50 dark:bg-[#0E1526]/50 border-t border-slate-200/80 dark:border-slate-800/80" id="experience">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-sky-400 font-mono mb-2">
            <span>02 // Professional Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
            Experience
          </h2>
        </div>

        {/* Experience List */}
        <div className="space-y-6">
          {experience.map((exp) => (
            <div
              key={exp.company}
              className="p-6 sm:p-8 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-sky-950/60 text-blue-600 dark:text-sky-400">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-heading">
                      {exp.role}
                    </h3>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-sky-400 hover:underline"
                    >
                      <span>{exp.company}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Period & Duration */}
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 self-start sm:self-auto bg-slate-100 dark:bg-slate-800/70 px-3 py-1.5 rounded-md">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                  <span>•</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-200">{exp.duration}</span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {exp.description}
              </p>

              {/* Delivered Sites Highlight */}
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 font-mono flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                  <span>Delivered & Deployed Client Websites</span>
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {exp.deliveredSites.map((site) => (
                    <a
                      key={site.name}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-blue-50/50 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 hover:border-blue-300 dark:hover:border-sky-500 transition-all group"
                    >
                      <span className="text-xs font-mono text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-sky-400 truncate">
                        {site.name}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
