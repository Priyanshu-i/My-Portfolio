"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Chat Application",
    description: "A real-time chat application powered by OpenAI GPT-4, featuring context-aware conversations and markdown support.",
    image: "/ai-chat-interface-with-modern-ui.jpg",
    tags: ["Next.js", "OpenAI", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard built for scalability.",
    image: "/modern-ecommerce-dashboard.png",
    tags: ["React", "PostgreSQL", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates and team collaboration features.",
    image: "/task-management-kanban.png",
    tags: ["Next.js", "MongoDB", "Socket.io"],
    github: "#",
    demo: "#",
  },
  {
    title: "ML Image Classifier",
    description: "Machine learning application that classifies images using custom-trained models with real-time predictions.",
    image: "/machine-learning-image-classification-app.jpg",
    tags: ["Python", "TensorFlow", "React"],
    github: "#",
    demo: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather application with location-based forecasts and interactive weather maps.",
    image: "/preview/project4.png",
    tags: ["React", "API", "Chart.js"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio CMS",
    description: "Content management system for developers featuring markdown support and SEO optimization.",
    image: "/portfolio-cms-admin-interface.jpg",
    tags: ["Next.js", "Sanity", "Vercel"],
    github: "#",
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
          <Button variant="outline" className="rounded-xl border-slate-200 hover:bg-slate-50 hidden md:flex">
            View All GitHub
          </Button>
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
                  {/* Hover Overlay Buttons */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                    <a href={project.github} className="p-3 bg-white rounded-full text-slate-900 hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} className="p-3 bg-white rounded-full text-slate-900 hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
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
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}