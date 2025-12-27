"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "DevRipple",
    description: "DevRipple is a peer‑to‑peer coding hub where serious developers accelerate mastery through daily challenges",
    image: "/devripple.png",
    tags: ["Next.js", "Tailwind", "Firebase"],
    github: "https://github.com/OpenCodeDevelopers/DevRipple",
    demo: "https://devripple.netlify.app/",
  },
  {
    title: "LearnConnect",
    description: "LearnConnect empowers learners to share knowledge, spark real‑time discussions, and grow together as a community.",
    image: "/learnconnect.png",
    tags: ["Next.js", "Tailwind", "Firebase"],
    github: "https://github.com/Priyanshu-i/LearnConnect",
    demo: "https://thinknexus.netlify.app/",
  },
  {
    title: "PG Loader",
    description: "A powerful Python utility that lets you download specific folders from GitHub repositories without cloning the entire repo.",
    image: "/pgloader.png",
    tags: ["Python"],
    github: "https://github.com/Priyanshu-i/PGLoader",
    demo: "#",
  },
  
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-transparent">
  <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
    
    {/* Header Section */}
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
      <div className="max-w-2xl">
        <div className="flex items-center gap-2 mb-4">
          <Folder className="text-blue-600 w-5 h-5" />
          <span className="text-blue-600 font-mono text-sm font-bold uppercase tracking-widest">Portfolio</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-slate-500 leading-relaxed">
          A collection of systems I've built, ranging from AI-powered tools to robust full-stack applications.
        </p>
      </div>
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group relative h-full flex flex-col"
        >
          {/* Card Container */}
          <div className="relative flex-1 overflow-hidden rounded-3xl border border-white/40 bg-white/20 backdrop-blur-md shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col">
            
            {/* Image Section with Overlay */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Desktop Hover Overlay (Hidden on Mobile) */}
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center gap-4 backdrop-blur-[2px]">
                <a href={project.github} target="_blank" rel="noreferrer" className="p-3 bg-white rounded-full text-slate-900 hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                  <Github size={20} />
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="p-3 bg-white rounded-full text-slate-900 hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-700 px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6">
                {project.description}
              </p>

              {/* Mobile Action Buttons (Visible only on small screens) */}
              <div className="mt-auto flex items-center gap-4 md:hidden border-t border-slate-100 pt-4">
                <a href={project.github} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Github size={18} /> Code
                </a>
                <a href={project.demo} className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                  <ExternalLink size={18} /> Demo
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
  );
}