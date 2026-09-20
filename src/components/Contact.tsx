import { useState } from 'react';
import { Check, Copy, Mail, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioContent } from '../data/content';

export function Contact() {
  const { contact, personal } = portfolioContent;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(contact.email)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2200);
        })
        .catch(() => {
          triggerFallback();
        });
      return;
    }
    triggerFallback();

    function triggerFallback() {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = contact.email;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      } catch (e) {
        console.error('Fallback copy error:', e);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section className="py-16 md:py-24" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Container */}
        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-sm text-center">
          
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-blue-600 dark:bg-sky-400 rounded-b-full" />

          {/* Icon Badge */}
          <div className="inline-flex p-3 rounded-xl bg-blue-50 dark:bg-sky-950/60 text-blue-600 dark:text-sky-400 mb-6">
            <Mail className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-heading mb-4">
            {contact.title}
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-8 font-sans leading-relaxed">
            {contact.subtitle}
          </p>

          {/* Email Card & Actions */}
          <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 mb-8">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
              Direct Inquiries
            </p>
            <p className="text-lg sm:text-xl font-bold font-mono text-slate-900 dark:text-white break-all select-all mb-4">
              {contact.email}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-sky-400 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all"
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400">Copied to clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    <span>Copy email</span>
                  </>
                )}
              </button>

              {/* Compose Email Link */}
              <a
                href={`mailto:${contact.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-sky-400 dark:hover:bg-sky-300 text-white dark:text-slate-950 text-sm font-semibold shadow-sm transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Send message</span>
              </a>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center justify-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
            {personal.githubUrl && personal.githubUrl !== '<GITHUB-URL>' ? (
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            ) : (
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}

            <span className="text-slate-300 dark:text-slate-700">•</span>

            {personal.linkedinUrl && personal.linkedinUrl !== '<LINKEDIN-URL>' ? (
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            ) : (
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            )}

            <span className="text-slate-300 dark:text-slate-700">•</span>

            <span className="text-xs text-slate-500 dark:text-slate-400">
              {personal.location}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
