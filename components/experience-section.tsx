"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code, Briefcase, Trophy, Calendar, MapPin } from 'lucide-react';
import { Badge } from './ui/badge';

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Smooth progress bar height
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
      textColor: 'text-blue-500',
    },
    {
      type: 'project',
      icon: Code,
      title: 'E-Commerce Platform',
      organization: 'Personal Project',
      period: 'Late 2022',
      description: 'Full-stack platform built with MERN stack. Features secure payments and real-time inventory.',
      tags: ['React', 'Node.js', 'Stripe'],
      color: 'bg-purple-500',
      textColor: 'text-purple-500',
    },
    // Example Work Item
    {
      type: 'work',
      icon: Briefcase,
      title: 'Frontend Intern',
      organization: 'Startup Inc.',
      period: 'Summer 2023',
      description: 'Optimized landing page performance by 40% and implemented new design system components.',
      tags: ['Next.js', 'Tailwind', 'Perf'],
      color: 'bg-emerald-500',
      textColor: 'text-emerald-500',
    },
  ];

  return (
    <section className="py-20 bg-gray-50/50 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Compact Header */}
        <div className="text-center mb-16 space-y-2">
          <Badge variant="outline" className="mb-2 bg-white px-3 py-1">My Path</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Experience & <span className="text-gray-400">Education</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* The Central Line (Gray Background) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />
          
          {/* The Animated Line (Colored Progress) */}
          <motion.div 
            style={{ height }}
            className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 -translate-x-1/2 origin-top"
          />

          <div className="space-y-12">
            {experiences.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Dot (Center Anchor) */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 z-10 flex items-center justify-center">
                    <div className="relative w-8 h-8 rounded-full bg-white border-2 border-gray-100 shadow-sm flex items-center justify-center">
                      <motion.div 
                        whileInView={{ scale: [0, 1.2, 1] }}
                        className={`w-3 h-3 rounded-full ${item.color}`} 
                      />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                     <div className={`flex flex-col ${isEven ? 'md:items-start' : 'md:items-end'}`}>
                        
                        {/* Date Label (Floating above/near card) */}
                        <span className="text-xs font-semibold text-gray-400 mb-2 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>

                        {/* Card */}
                        <motion.div 
                          whileHover={{ y: -5 }}
                          className={`bg-white p-5 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100 w-full max-w-sm relative group overflow-hidden ${
                            isEven ? 'text-left' : 'text-left md:text-right'
                          }`}
                        >
                          {/* Hover Gradient Effect */}
                          <div className={`absolute top-0 left-0 w-1 h-full ${item.color} opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300`} />
                          
                          <div className={`flex items-center gap-3 mb-3 ${isEven ? 'flex-row' : 'flex-row md:flex-row-reverse'}`}>
                            <div className={`p-2 rounded-lg bg-gray-50 text-gray-700`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg leading-tight">{item.title}</h3>
                                <p className="text-sm text-gray-500 font-medium">{item.organization}</p>
                            </div>
                          </div>

                          <p className="text-sm text-gray-600 leading-relaxed mb-4">
                            {item.description}
                          </p>

                          <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-start' : 'justify-start md:justify-end'}`}>
                            {item.tags.map((tag, tIndex) => (
                              <span 
                                key={tIndex} 
                                className="px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase rounded-full bg-gray-50 text-gray-600 border border-gray-100"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                     </div>
                  </div>

                  {/* Empty side for layout balance on Desktop */}
                  <div className="hidden md:block w-1/2" />
                  
                </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* Footer Icon */}
        <div className="mt-16 flex justify-center">
            <div className="w-2 h-16 bg-gradient-to-b from-gray-200 to-transparent rounded-full opacity-50"></div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;