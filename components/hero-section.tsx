"use client";
import { motion, Variants } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const HeroSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-screen py-12 lg:py-20 gap-10 lg:gap-20">
          
          {/* IMAGE CONTAINER - Appears first on mobile (order-first) */}
          <motion.div
  variants={imageVariants}
  initial="hidden"
  animate="visible"
  className="flex-1 max-w-[260px] sm:max-w-sm lg:max-w-lg w-full order-first lg:order-last"
>
  <motion.div
    animate={{ y: [0, -15, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    className="relative" // Parent wrapper for the image and badge
  >
    {/* The Circular Image Wrapper */}
    <div className="relative z-10 w-full aspect-square rounded-full overflow-hidden bg-gradient-to-br from-slate-200/50 to-slate-100/30 backdrop-blur-sm shadow-2xl border-4 lg:border-8 border-white/50">
      <img
        src="MyPic.png"
        alt="Priyanshu Singh"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Floating Badge - Now fixed with higher Z-Index and absolute positioning */}
    <motion.div
  initial={{ opacity: 0, scale: 0, x: 20 }}
  animate={{ opacity: 1, scale: 1, x: 0 }}
  transition={{ delay: 1.2, duration: 0.5 }}
  className="
    absolute -bottom-2 -right-4 lg:-bottom-6 lg:-right-8 
    z-20 bg-white/90 backdrop-blur-md 
    p-2 lg:p-4 
    rounded-xl lg:rounded-2xl 
    shadow-xl border border-white/40 
    flex items-center gap-1.5 lg:gap-3 
    min-w-[120px] lg:min-w-[200px]
  "
>
  <div className="flex-shrink-0 w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-emerald-100 flex items-center justify-center text-base lg:text-2xl shadow-inner">
    👋
  </div>
  <div className="flex flex-col text-left">
    <p className="text-[10px] lg:text-sm font-bold text-slate-900 leading-tight">
      Let's collaborate
    </p>
    <p className="text-[9px] lg:text-xs text-slate-500 font-medium">
      on your next project
    </p>
  </div>
</motion.div>

    {/* Subtle Glows behind the image to make it pop against the mesh background */}
    <div className="absolute inset-0 -z-10 bg-blue-400/20 blur-[60px] rounded-full scale-110" />
  </motion.div>
</motion.div>

          {/* TEXT CONTENT CONTAINER */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 max-w-2xl text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start items-center gap-3 mb-6">
              <Badge
                variant="secondary"
                className="px-4 py-1.5 text-sm font-medium bg-slate-900/5 text-slate-900 backdrop-blur-sm border border-slate-900/10"
              >
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for opportunities
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]"
            >
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Priyanshu Singh</span>
                <motion.span
                  className="absolute bottom-1 lg:bottom-2 left-0 w-full h-2 lg:h-3 bg-blue-500/20"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
                />
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-2xl text-slate-600 mb-4 leading-relaxed font-medium"
            >
              Full-Stack Developer & Creative Problem Solver
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-lg text-slate-500 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              I craft exceptional digital experiences that blend beautiful design with powerful functionality. 
              Passionate about building products that make a difference.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-2 mb-10 text-slate-500"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Based in Haryana, India</span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
            >
              <Button
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 h-12 text-base font-medium shadow-lg transition-all duration-300 rounded-xl"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 h-12 text-base font-medium transition-all duration-300 rounded-xl bg-transparent"
              >
                Get In Touch
              </Button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {[
                { icon: Github, href: "https://github.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Mail, href: "mailto:your@email.com" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 shadow-sm"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-slate-400"
          >
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;