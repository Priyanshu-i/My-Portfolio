"use client"

import type React from "react"

import { Mail, Github, Twitter, Linkedin, MessageSquare } from 'lucide-react';

export function ContactSection() {
  
  return (
    <section className="relative w-full py-20 px-4 overflow-hidden bg-slate-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-400 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 md:p-16 shadow-2xl shadow-blue-500/5 text-center">
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 font-mono">
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
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20 w-full md:w-auto justify-center"
            >
              <Mail size={20} />
              Send an Email
            </a>

            {/* Social Link Group */}
            <div className="flex items-center gap-2 bg-slate-200/50 p-2 rounded-2xl w-full md:w-auto justify-center">
              <a 
                href="#" 
                className="p-3 text-slate-600 hover:text-blue-600 hover:bg-white rounded-xl transition-all"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a 
                href="#" 
                className="p-3 text-slate-600 hover:text-blue-400 hover:bg-white rounded-xl transition-all"
                aria-label="Twitter"
              >
                <Twitter size={22} />
              </a>
              <a 
                href="#" 
                className="p-3 text-slate-600 hover:text-blue-700 hover:bg-white rounded-xl transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              
            </div>
          </div>

          {/* Availability Badge */}
          <div className="mt-10 flex items-center justify-center gap-2 text-sm font-medium text-slate-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new projects
          </div>

        </div>
      </div>
    </section>
  );
}
