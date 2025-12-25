"use client";
import { motion } from "framer-motion";
import { Code2, Sparkles, Rocket, Brain, Coffee, GraduationCap } from "lucide-react";

export function AboutSection() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          {...fadeIn}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 font-mono">
            $ whoami <span className="animate-pulse">_</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            I'm a college student in Haryana, India, bridging the gap between 
            complex engineering and intuitive user experiences.
          </p>
        </motion.div>

        {/* Creative Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Bio Card */}
          <motion.div 
            {...fadeIn}
            className="md:col-span-2 p-8 rounded-3xl border border-white/40 bg-white/30 backdrop-blur-md shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                <div className="w-3 h-3 rounded-full bg-green-400/50" />
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                My journey started with a simple "Hello World" and evolved into building 
                <span className="text-blue-600 font-semibold"> full-stack ecosystems</span>. 
                I don't just write code; I architect solutions that solve real problems. 
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Currently deep-diving into <span className="text-indigo-600 font-semibold italic">Generative AI</span> 
                and how it can be used to make software more empathetic and human-centric.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4 text-slate-500">
               <GraduationCap className="text-blue-500" />
               <span className="text-sm font-medium">B.Tech Computer Science & Engineering</span>
            </div>
          </motion.div>

          {/* Quick Stats/Focus Card */}
          <motion.div 
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl border border-white/40 bg-indigo-500/10 backdrop-blur-md shadow-xl group"
          >
            <Brain className="w-10 h-10 text-indigo-600 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Philosophy</h3>
            <p className="text-slate-600">
              Clean code is not enough. I strive for performance, accessibility, and that "extra 1%" of polish.
            </p>
          </motion.div>

          {/* Focus Area 1 */}
          <motion.div 
            {...fadeIn}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-3xl border border-white/40 bg-white/20 backdrop-blur-md shadow-lg flex items-center gap-4 hover:bg-white/40 transition-all"
          >
            <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-600">
              <Code2 size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Modern Stack</h4>
              <p className="text-sm text-slate-500">React, Next.js, Node.js</p>
            </div>
          </motion.div>

          {/* Focus Area 2 */}
          <motion.div 
            {...fadeIn}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-3xl border border-white/40 bg-white/20 backdrop-blur-md shadow-lg flex items-center gap-4 hover:bg-white/40 transition-all"
          >
            <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-600">
              <Sparkles size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">AI Integration</h4>
              <p className="text-sm text-slate-500">LLMs & Vector DBs</p>
            </div>
          </motion.div>

          {/* Focus Area 3 */}
          <motion.div 
            {...fadeIn}
            transition={{ delay: 0.5 }}
            className="p-6 rounded-3xl border border-white/40 bg-white/20 backdrop-blur-md shadow-lg flex items-center gap-4 hover:bg-white/40 transition-all"
          >
            <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-600">
              <Coffee size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Available For</h4>
              <p className="text-sm text-slate-500">Freelance & Internships</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}