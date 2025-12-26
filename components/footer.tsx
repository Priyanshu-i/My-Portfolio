"use client";

import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-white/20 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand/Name Section */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <h2 className="text-xl font-bold tracking-tighter text-slate-900 font-mono">
              Priyanshu Singh
            </h2>
            <p className="text-sm text-slate-500 font-medium">
              Building meaningful AI and full-stack experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <SocialIcon href="https://github.com/Priyanshu-i" icon={<Github size={18} />} label="GitHub" />
            <SocialIcon href="https://www.linkedin.com/in/priyanshusingh121/" icon={<Linkedin size={18} />} label="LinkedIn" />
            <SocialIcon href="#" icon={<Twitter size={18} />} label="Twitter" />
            <SocialIcon href="mailto:priyanshu40507@gmail.com" icon={<Mail size={18} />} label="Email" />
          </div>

          {/* Back to Top */}
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="group rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50/50 transition-all"
          >
            Back to top
            <ArrowUp size={16} className="ml-2 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 font-mono">
            &copy; {currentYear} &bull; Designed & Built with Next.js
          </p>
          <div className="flex gap-6 text-xs text-slate-400 font-medium">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper Sub-component for Social Icons
function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all transform hover:-translate-y-1"
    >
      {icon}
    </a>
  );
}