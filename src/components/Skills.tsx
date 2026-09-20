import { Code2, Database, Layout, Server, Smartphone, Wrench } from 'lucide-react';
import { portfolioContent } from '../data/content';

export function Skills() {
  const { skills } = portfolioContent;

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'languages':
        return <Code2 className="w-4 h-4" />;
      case 'frontend':
        return <Layout className="w-4 h-4" />;
      case 'backend':
        return <Server className="w-4 h-4" />;
      case 'mobile':
        return <Smartphone className="w-4 h-4" />;
      case 'databases':
        return <Database className="w-4 h-4" />;
      case 'tools':
        return <Wrench className="w-4 h-4" />;
      default:
        return <Code2 className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50/60 dark:bg-[#0E1526]/50 border-t border-slate-200/80 dark:border-slate-800/80" id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-sky-400 font-mono mb-2">
            <span>04 // Technical Competence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white font-heading">
            Skills
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl font-sans">
            Grouped by functional category—built through production delivery, coursework, and practical projects.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 light-card-shadow light-card-hover transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
                <span className="p-2 rounded-lg bg-blue-50 dark:bg-sky-950/60 text-blue-600 dark:text-sky-400 border border-blue-100 dark:border-sky-900/60">
                  {getCategoryIcon(group.category)}
                </span>
                <h3 className="text-base font-bold text-slate-950 dark:text-white font-heading">
                  {group.category}
                </h3>
              </div>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-blue-50/80 dark:bg-slate-800/70 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-blue-700 dark:hover:text-sky-300 border border-slate-200/90 hover:border-blue-300 dark:border-slate-700/60 dark:hover:border-sky-500 shadow-2xs transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
