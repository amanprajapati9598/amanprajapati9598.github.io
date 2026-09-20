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
      {/* Ambient background glow & subtle dot matrix for depth */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black_40%,transparent_100%)] pointer-events-none opacity-60 dark:opacity-25" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-blue-400/10 dark:bg-sky-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy - 7 Cols on desktop */}
          <div className="lg:col-span-7 flex flex-col items-start animate-fade-in">
            
            {/* Status Pill with subtle glass & emerald pulse */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/90 dark:bg-sky-950/60 text-slate-800 dark:text-sky-300 border border-slate-200/90 dark:border-sky-900/60 shadow-xs mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-slate-900 dark:text-sky-200">{personal.statusBadge}</span>
            </div>

            {/* Name and Role */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white font-heading leading-[1.1] mb-3">
              {personal.name}
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-sky-400 font-heading mb-6 tracking-tight">
              {personal.role}
            </p>

            {/* One-line Intro */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl mb-8 font-sans">
              {personal.intro}
            </p>

            {/* Action Buttons with high-contrast tactile shadows */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-sky-400 dark:hover:bg-sky-300 text-white dark:text-slate-950 font-semibold text-sm shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 transition-all group"
              >
                <span>View my work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href={personal.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                download="Aman_Prajapati_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-300 hover:border-slate-400 dark:border-slate-700 dark:hover:border-slate-600 bg-white hover:bg-slate-50 dark:bg-slate-900/60 dark:hover:bg-slate-800/80 text-slate-900 dark:text-slate-200 font-semibold text-sm shadow-xs hover:shadow transition-all group"
              >
                <span>Download resume</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Social Icon Links with crisp card borders */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800/80 w-full">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mr-2">
                Connect
              </span>

              {personal.githubUrl && personal.githubUrl !== '<GITHUB-URL>' ? (
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-400 hover:border-blue-300 dark:hover:border-sky-800 hover:shadow-xs transition-all"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              ) : (
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-400 hover:border-blue-300 dark:hover:border-sky-800 hover:shadow-xs transition-all"
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
                  className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-400 hover:border-blue-300 dark:hover:border-sky-800 hover:shadow-xs transition-all"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              ) : (
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-400 hover:border-blue-300 dark:hover:border-sky-800 hover:shadow-xs transition-all"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              )}

              <a
                href={`mailto:${personal.email}`}
                aria-label={`Email ${personal.email}`}
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-400 hover:border-blue-300 dark:hover:border-sky-800 hover:shadow-xs transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>

              <div className="ml-auto hidden sm:flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                <span>{personal.location}</span>
              </div>
            </div>
          </div>

          {/* Photo Slot / Initials Fallback - Stylized Developer ID Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-200/60 dark:shadow-2xl overflow-hidden light-card-hover">
              
              {/* Card Window Top Header */}
              <div className="px-4 py-3 bg-slate-50/90 dark:bg-slate-800/60 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <div className="text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <span>profile.tsx</span>
                </div>
                <div className="w-8" />
              </div>

              {/* Photo or Initials Body */}
              <div className="p-7 flex flex-col items-center justify-center text-center relative">
                
                {/* Photo or Initials */}
                <div className="relative mb-4">
                  {!imageError ? (
                    <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg border-2 border-white dark:border-slate-700 ring-4 ring-blue-500/10 dark:ring-sky-400/20 bg-slate-100 dark:bg-slate-800 relative">
                      <img
                        src={personal.photoPath}
                        alt={personal.name}
                        className={`w-full h-full object-cover object-top transition-opacity duration-300 ${
                          imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageError(true)}
                      />
                      {!imageLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-3xl font-black text-blue-600 dark:text-sky-400 font-heading">
                            {personal.initials}
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 dark:from-sky-500 dark:to-blue-600 p-[3px] shadow-lg shadow-blue-500/20">
                      <div className="w-full h-full bg-white dark:bg-[#0B0F17] rounded-[13px] flex items-center justify-center">
                        <span className="text-4xl font-black tracking-tight text-blue-600 dark:text-sky-400 font-heading">
                          {personal.initials}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Glowing active badge */}
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-white shadow-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Identity info */}
                <h2 className="text-lg font-bold text-slate-950 dark:text-white font-heading">
                  {personal.name}
                </h2>
                <p className="text-xs font-semibold text-blue-600 dark:text-sky-400 font-mono mt-0.5 mb-3">
                  {personal.role}
                </p>

                <div className="w-full pt-4 mt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                    <span>Mumbai, India</span>
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                    Active
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
