import { useState } from 'react';
import { ArrowDown, ArrowUpRight, Mail, MapPin, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioContent } from '../data/content';

export function Hero() {
  const { personal } = portfolioContent;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden" id="hero">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy - 7 Cols on desktop */}
          <div className="lg:col-span-7 flex flex-col items-start animate-fade-in">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-sky-950/50 text-blue-700 dark:text-sky-300 border border-blue-200 dark:border-sky-900/60 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personal.statusBadge}</span>
            </div>

            {/* Name and Role */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white font-heading leading-tight mb-3">
              {personal.name}
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-sky-400 font-heading mb-6 tracking-tight">
              {personal.role}
            </p>

            {/* One-line Intro */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8 font-sans">
              {personal.intro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-sky-400 dark:hover:bg-sky-300 text-white dark:text-slate-950 font-semibold text-sm shadow-sm hover:shadow transition-all group"
              >
                <span>View my work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href={personal.resumePath}
                download="Aman_Prajapati_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 bg-white dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all group"
              >
                <span>Download resume</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Social Icon Links */}
            <div className="flex items-center gap-3 pt-2 border-t border-slate-200 dark:border-slate-800/80 w-full">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-2">
                Connect
              </span>

              {personal.githubUrl && personal.githubUrl !== '<GITHUB-URL>' ? (
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-400 hover:border-blue-300 dark:hover:border-sky-800 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              ) : (
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-400 hover:border-blue-300 dark:hover:border-sky-800 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              )}

              {personal.linkedinUrl && personal.linkedinUrl !== '<LINKEDIN-URL>' ? (
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-400 hover:border-blue-300 dark:hover:border-sky-800 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              ) : (
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-400 hover:border-blue-300 dark:hover:border-sky-800 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              )}

              <a
                href={`mailto:${personal.email}`}
                aria-label={`Email ${personal.email}`}
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-400 hover:border-blue-300 dark:hover:border-sky-800 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>

              <div className="ml-auto hidden sm:flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                <span>{personal.location}</span>
              </div>
            </div>
          </div>

          {/* Photo Slot / Initials Fallback - 5 Cols on desktop */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl p-2 bg-gradient-to-b from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
              
              {/* Photo or Initials */}
              <div className="w-full h-full rounded-xl overflow-hidden bg-slate-100 dark:bg-[#111827] flex items-center justify-center relative border border-slate-300/60 dark:border-slate-700/60">
                
                {/* Hidden image element to test loading */}
                {!imageError && (
                  <img
                    src={personal.photoPath}
                    alt={personal.name}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0 absolute'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                  />
                )}

                {/* Fallback to Initials */}
                {(imageError || !imageLoaded) && (
                  <div className="flex flex-col items-center justify-center text-center p-6 select-none">
                    <div className="w-20 h-20 rounded-xl bg-blue-600/10 dark:bg-sky-400/10 border border-blue-500/20 dark:border-sky-400/20 flex items-center justify-center mb-3">
                      <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-600 dark:text-sky-400 font-heading">
                        {personal.initials}
                      </span>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                      {personal.name}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      Full Stack Developer
                    </span>
                  </div>
                )}
              </div>

              {/* Decorative Corner Indicator */}
              <div className="absolute -bottom-3 -right-2 px-3 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex items-center gap-1.5 text-[11px] font-mono font-medium text-slate-600 dark:text-slate-300">
                <Sparkles className="w-3 h-3 text-blue-600 dark:text-sky-400" />
                <span>Mumbai, IN</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
