import { Award, BookOpen, Globe, MapPin, User } from 'lucide-react';
import { portfolioContent } from '../data/content';

export function About() {
  const { personal, education, certification } = portfolioContent;

  return (
    <section className="py-16 md:py-24" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-sky-400 font-mono mb-2">
            <span>03 // Background & Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white font-heading">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Summary & Quick Facts (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 light-card-shadow">
              <div className="flex items-center gap-2.5 mb-5 text-slate-950 dark:text-white font-heading font-bold text-lg">
                <span className="p-2 rounded-lg bg-blue-50 dark:bg-sky-950/60 text-blue-600 dark:text-sky-400 border border-blue-100 dark:border-sky-900/60">
                  <User className="w-4 h-4" />
                </span>
                <span>Professional Summary</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start mb-7">
                <div className="w-28 sm:w-36 h-40 sm:h-48 rounded-2xl overflow-hidden shadow-md border-2 border-white dark:border-slate-700 ring-2 ring-slate-200/80 dark:ring-slate-800 shrink-0 bg-slate-100 dark:bg-slate-800 self-center sm:self-start">
                  <img
                    src={personal.aboutPhotoPath}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                    {personal.intro}
                  </p>
                </div>
              </div>

              {/* Quick Details Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-sky-400 border border-slate-200/80 dark:border-slate-700/60 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                      {personal.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-sky-400 border border-slate-200/80 dark:border-slate-700/60 mt-0.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Languages Spoken
                    </span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                      {personal.languagesSpoken.join(', ')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Target Roles Pill Box */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#111827]/60 border border-slate-200/90 dark:border-slate-800 light-card-shadow">
              <span className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3.5">
                Open to roles
              </span>
              <div className="flex flex-wrap gap-2.5">
                {personal.targetRoles.map((role) => (
                  <span
                    key={role}
                    className="text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-slate-100/90 hover:bg-slate-200/80 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/90 dark:border-slate-700 shadow-2xs transition-colors"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education & Certification (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <div className="p-7 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 light-card-shadow">
              <div className="flex items-center gap-2.5 mb-5 text-slate-950 dark:text-white font-heading font-bold text-lg">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-sky-950/60 text-blue-600 dark:text-sky-400 border border-blue-100 dark:border-sky-900/60">
                  <BookOpen className="w-4 h-4" />
                </div>
                <span>Education</span>
              </div>

              {education.map((edu) => (
                <div key={edu.degree} className="space-y-2">
                  <h3 className="text-base font-bold text-slate-950 dark:text-white font-heading">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    {edu.institution}
                  </p>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {edu.period}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Score & Grade</span>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-sky-950/60 text-blue-700 dark:text-sky-300 border border-blue-200/80 dark:border-sky-800/60 shadow-2xs">
                      {edu.score} • {edu.grade}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Certification Card */}
            <div className="p-7 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 light-card-shadow">
              <div className="flex items-center gap-2.5 mb-5 text-slate-950 dark:text-white font-heading font-bold text-lg">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-sky-950/60 text-blue-600 dark:text-sky-400 border border-blue-100 dark:border-sky-900/60">
                  <Award className="w-4 h-4" />
                </div>
                <span>Certification</span>
              </div>

              {certification.map((cert) => (
                <div key={cert.name} className="space-y-2">
                  <h3 className="text-base font-bold text-slate-950 dark:text-white font-heading">
                    {cert.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                    <span>{cert.issuer}</span>
                    {cert.endorsement && (
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                        {cert.endorsement}
                      </span>
                    )}
                  </p>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 pt-1">
                    {cert.date}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
