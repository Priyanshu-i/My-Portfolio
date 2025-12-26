"use client"

import type React from "react"
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';

export function ContactSection() {
  
  return (
    <section id="contact" className="relative w-full py-20 px-4 overflow-hidden bg-transparent">
      
      <div className="max-w-4xl mx-auto">
        {/* Main Card with Glassmorphism */}
        <div className="relative overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-blue-500/5 text-center">
          
          {/* Internal Decorative Gradients - Now inside the box */}
          <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/30 blur-[100px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/30 blur-[100px]" />
          </div>

          {/* Content Wrapper to keep it above internal gradients */}
          <div className="relative z-10">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6 font-mono">
              Let’s create something meaningful together.
            </h2>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              From tackling engineering problems to exploring research ideas—or simply sharing thoughts on <span className="text-blue-600 font-semibold underline decoration-blue-200 underline-offset-4">AI</span>—I’d love to hear from you.
            </p>

            {/* Buttons Container */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              
              {/* Primary Email Button */}
              <a 
                href="mailto:priyanshu40507@gmail.com"
                className="flex items-center gap-3 bg-slate-900 hover:bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/10 w-full md:w-auto justify-center"
              >
                <Mail size={20} />
                Send an Email
              </a>

              {/* Social Link Group */}
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md p-2 rounded-2xl border border-white/30 w-full md:w-auto justify-center">
                <a 
                  href="https://github.com/Priyanshu-i" 
                  className="p-3 text-slate-600 hover:text-blue-600 hover:bg-white/50 rounded-xl transition-all"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
                <a 
                  href="https://x.com/priyanshu40507" 
                  className="p-3 text-slate-600 hover:text-blue-400 hover:bg-white/50 rounded-xl transition-all"
                  aria-label="Twitter"
                >
                  <Twitter size={22} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/priyanshusingh121/" 
                  className="p-3 text-slate-600 hover:text-blue-700 hover:bg-white/50 rounded-xl transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="mt-12 flex items-center justify-center gap-2 text-sm font-bold text-slate-500 uppercase tracking-widest">
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