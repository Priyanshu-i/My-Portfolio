"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Atom  } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
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
  
  // 1. Close the menu immediately
  setIsMobileMenuOpen(false);

  const targetId = href.replace("#", "");
  const elem = document.getElementById(targetId);

  if (elem) {
    // 2. Wait a tiny bit for the menu height to settle
    setTimeout(() => {
      // 3. Calculate position
      const headerOffset = 80; // Adjust this number based on your navbar height
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      // 4. Perform the scroll
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }, 100); // 100ms is usually enough for the menu animation to clear
  }
};
  return (
    // Changed to sticky so it pushes content down when it expands on mobile
    <nav className="sticky top-0 left-0 right-0 z-[100] transition-all duration-500 pt-4 px-4">
      <div 
        className={`mx-auto max-w-6xl transition-all duration-500 rounded-[2rem] border ${
          isScrolled 
            ? "bg-white/70 backdrop-blur-xl border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]" 
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="px-6 py-3">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="p-2 bg-slate-900 rounded-xl group-hover:bg-blue-600 transition-colors">
                <Atom  size={18} className="text-white" />
              </div>
              <span className="text-lg font-bold font-mono tracking-tighter text-slate-900">
                Priyanshu
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-all rounded-full hover:bg-blue-50/50"
                >
                  {item.label}
                </a>
              ))}
              <div className="w-[1px] h-6 bg-slate-200 mx-3" />
              <a
                href="#resume"
                className="rounded-full bg-slate-900 hover:bg-blue-600 text-white px-6 py-2 transition-all shadow-md active:scale-95 inline-block"
              >
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors text-slate-900" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation - Animated Height */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden md:hidden"
              >
                <div className="flex flex-col gap-2 pt-4 pb-6 border-t border-slate-100 mt-2">
                  {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  // USE THE HANDLER HERE
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="px-4 py-3 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-2xl transition-all"
                >
                  {item.label}
                </motion.a>
              ))}
                  <div className="px-4 pt-2">
                    <a
                      href="#resume"
                      onClick={(e) => scrollToSection(e, "#resume")}
                      className="flex items-center justify-center w-full rounded-2xl bg-slate-900 text-white h-12 text-base font-medium shadow-lg active:scale-[0.98] transition-transform"
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