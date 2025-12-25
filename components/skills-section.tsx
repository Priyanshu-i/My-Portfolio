"use client";
import React from 'react';
import { motion } from 'framer-motion';

const SKILL_DETAILS = [
  { name: 'C++', logoSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Python', logoSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
  { name: 'JavaScript', logoSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
  { name: 'React', logoSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
  { name: 'Node.js', logoSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg' },
  { name: 'SQL', logoSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' },
  { name: 'Git', logoSrc: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
  { name: 'Docker', logoSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg' },
  { name: 'Machine Learning', logoSrc: 'https://cdn-icons-png.flaticon.com/128/9240/9240330.png' },
  { name: 'Deep Learning', logoSrc: 'https://cdn-icons-png.flaticon.com/128/10817/10817412.png' },
  { name: 'Data Structures', logoSrc: 'https://cdn-icons-png.flaticon.com/128/10484/10484359.png' },
  { name: 'Algorithms', logoSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/thealgorithms/thealgorithms-original.svg" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        
        {/* Header - Aligned with the width of the website */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-[2px] bg-blue-600" />
            <span className="text-blue-600 font-mono text-sm font-bold tracking-widest uppercase">Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Technical Stack
          </h2>
        </div>

        {/* Structured Grid: 2 cols on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {SKILL_DETAILS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* The Glow Effect behind the card */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300" />
              
              {/* Main Card */}
              <div className="relative flex items-center gap-4 px-5 py-4 rounded-2xl border border-white/40 bg-white/40 backdrop-blur-md shadow-sm group-hover:bg-white/60 transition-all">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center p-2 bg-white/50 rounded-xl shadow-inner">
                  <img
                    src={skill.logoSrc}
                    alt={skill.name}
                    className="w-full h-full object-contain filter transition-all duration-300 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://placehold.co/40x40?text=" + skill.name[0];
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm md:text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {skill.name}
                  </span>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Line to keep the "Website Width" feel */}
        <div className="mt-20 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
    </section>
  );
};

export default SkillsSection;