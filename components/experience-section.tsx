"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code, Calendar } from 'lucide-react';
import { Badge } from './ui/badge';

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const height = useTransform(scrollYProgress, [0, 0.9], ['0%', '100%']);

  const experiences = [
    {
      type: 'education',
      icon: GraduationCap,
      title: 'B-Tech in AI-ML',
      organization: 'NIT Kurukshetra',
      period: '2024 - Present',
      description: 'Major in AI & Machine Learning. Focusing on DSA, Operating Systems, and Neural Networks.',
      tags: ['CGPA: 9.2', 'Deans List'],
      color: 'bg-blue-500',
    },
    {
      type: 'project',
      icon: Code,
      title: 'LearnConnect',
      organization: 'Personal Project',
      period: 'Late 2024',
      description: 'Full-stack platform built with Next.js. Features multimedia DB and real-time chats, messages with secure groups.',
      tags: ['Next.js', 'Node.js', 'Firebase'],
      color: 'bg-purple-500',
    },
    {
      type: 'project',
      icon: Code,
      title: 'Devripple',
      organization: 'Personal Project | OCD',
      period: 'Summer 2025',
      description: 'Gained strong community adoption and was later acquired and rebranded by the OpenCodeDeveloper Society, enabling wider open-source usage and impact.',
      tags: ['Next.js', 'Node.js', 'Firebase'],
      color: 'bg-emerald-500',
    },
  ];

  return (
    <section id="experience" className="py-24 bg-transparent overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header - Aligned with the width of the website */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-[2px] bg-blue-600" />
            <span className="text-blue-600 font-mono text-sm font-bold tracking-widest uppercase text-left">My Path</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 text-left">
            Experience & <span className="text-slate-400 font-normal italic">Education</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* The Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-slate-200 -translate-x-1/2" />
          
          {/* The Animated Line */}
          <motion.div 
            style={{ height }}
            className="absolute left-4 md:left-1/2 top-0 w-[1px] bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 -translate-x-1/2 origin-top z-10"
          />

          <div className="space-y-16">
            {experiences.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 z-20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm flex items-center justify-center">
                      <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                     <div className={`flex flex-col ${isEven ? 'md:items-start' : 'md:items-end'}`}>
                        
                        <div className="flex items-center gap-2 text-slate-400 font-mono text-xs mb-3 uppercase tracking-wider">
                          <Calendar size={14} />
                          {item.period}
                        </div>

                        <motion.div 
                          whileHover={{ y: -5 }}
                          className="w-full max-w-md p-6 rounded-3xl border border-white/40 bg-white/20 backdrop-blur-md shadow-lg group relative overflow-hidden"
                        >
                          <div className={`absolute left-0 top-0 bottom-0 w-1 ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                          
                          <div className={`flex items-start gap-4 mb-4 ${isEven ? 'flex-row' : 'flex-row md:flex-row-reverse md:text-right'}`}>
                            <div className="p-3 bg-white/50 rounded-2xl shadow-inner text-slate-700">
                              <Icon size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-lg leading-tight">{item.title}</h3>
                                <p className="text-sm text-blue-600 font-semibold">{item.organization}</p>
                            </div>
                          </div>

                          <p className={`text-sm text-slate-600 leading-relaxed mb-6 ${isEven ? 'text-left' : 'md:text-right text-left'}`}>
                            {item.description}
                          </p>

                          <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-start' : 'md:justify-end justify-start'}`}>
                            {item.tags.map((tag) => (
                              <span key={tag} className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-xl bg-slate-900 text-white shadow-sm">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                     </div>
                  </div>

                  {/* Empty side for layout balance */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;