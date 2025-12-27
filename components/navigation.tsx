"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Atom, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    if (elem) {
      setTimeout(() => {
        const headerOffset = 80;
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 150);
    }
  };

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 left-0 right-0 z-[100] transition-all duration-500 pt-4 px-4">
      <div 
        className={`mx-auto max-w-6xl transition-all duration-500 rounded-[2rem] border ${
          isScrolled || isMobileMenuOpen
            ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-white/40 dark:border-slate-800/40 shadow-lg" 
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="px-6 py-3">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="p-2 bg-slate-900 dark:bg-blue-600 rounded-xl transition-colors">
                <Atom size={18} className="text-white" />
              </div>
              <span className="text-lg font-bold font-mono tracking-tighter text-slate-900 dark:text-white">
                Priyanshu
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all rounded-full hover:bg-blue-50/50 dark:hover:bg-slate-800"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="w-[1px] h-6 bg-slate-200 dark:bg-slate-700 mx-3" />

              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 mr-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <a
                href="#resume"
                className="rounded-full bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-blue-600 dark:hover:bg-blue-400 text-white px-6 py-2 transition-all shadow-md active:scale-95"
              >
                Resume
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 md:hidden">
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                    {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
                </button>
                <button 
                className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-white" 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden md:hidden"
              >
                <div className="flex flex-col gap-2 pt-4 pb-6 border-t border-slate-100 dark:border-slate-800 mt-2">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className="px-4 py-3 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-slate-800/50 rounded-2xl transition-all"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  <div className="px-4 pt-2 border-t border-slate-100 dark:border-slate-800 mt-2">
                    <a
                      href="#resume"
                      onClick={(e) => scrollToSection(e, "#resume")}
                      className="flex items-center justify-center w-full rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 h-12 text-base font-medium shadow-lg active:scale-[0.98] transition-all"
                    >
                      Resume
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}