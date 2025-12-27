"use client"

import type React from "react"
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';

export function ContactSection() {
  
  return (
    <section id="contact" className="relative w-full py-24 px-4 overflow-hidden bg-transparent transition-colors duration-500">
      
      <div className="max-w-4xl mx-auto">
        {/* Main Card with Glassmorphism */}
        <div className="relative overflow-hidden 
          /* Light Mode */
          bg-white/10 border-white/20 shadow-2xl shadow-blue-500/5 
          /* Dark Mode */
          dark:bg-slate-900/40 dark:border-slate-700/80 dark:shadow-black/40
          backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-16 border text-center transition-all duration-500"
        >
          
          {/* Internal Decorative Gradients */}
          <div className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none overflow-hidden">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/30 blur-[100px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/30 blur-[100px]" />
          </div>

          {/* Content Wrapper */}
          <div className="relative z-10">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 font-mono">
              Let’s create something <span className="text-blue-600 dark:text-blue-400">meaningful</span> together.
            </h2>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              From tackling engineering problems to exploring research ideas—or simply sharing thoughts on <span className="text-blue-600 dark:text-blue-400 font-semibold underline decoration-blue-200 dark:decoration-blue-900 underline-offset-4">AI</span>—I’d love to hear from you.
            </p>

            {/* Buttons Container */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              
              {/* Primary Email Button */}
              <a 
                href="mailto:priyanshu40507@gmail.com"
                className="flex items-center gap-3 bg-slate-900 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-500 text-white px-10 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/10 dark:shadow-blue-900/20 w-full md:w-auto justify-center"
              >
                <Mail size={20} />
                Send an Email
              </a>

              {/* Social Link Group */}
              <div className="flex items-center gap-2 bg-white/20 dark:bg-slate-800/40 backdrop-blur-md p-2 rounded-2xl border border-white/30 dark:border-slate-700/50 w-full md:w-auto justify-center">
                {[
                  { icon: Github, href: "https://github.com/Priyanshu-i", label: "GitHub", hover: "hover:text-blue-600 dark:hover:text-blue-400" },
                  { icon: Twitter, href: "https://x.com/priyanshu40507", label: "Twitter", hover: "hover:text-blue-400" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/priyanshusingh121/", label: "LinkedIn", hover: "hover:text-blue-700 dark:hover:text-blue-400" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    className={`p-3 text-slate-600 dark:text-slate-300 ${social.hover} hover:bg-white/50 dark:hover:bg-slate-700/50 rounded-xl transition-all`}
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="mt-12 flex items-center justify-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              Available for new projects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}