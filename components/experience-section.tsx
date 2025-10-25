"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Code, Trophy, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import Image from 'next/image'; // Import next/image for better performance and sizing

// Helper function to capitalize the first letter for taglines
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const experiences = [
    {
      type: 'education',
      icon: GraduationCap,
      title: 'B-Tech in AI-ML',
      organization: 'NIT Kurukshetra',
      period: 'Aug 2024 - Present',
      tagline: 'University Life', // New: Short Tagline
      description:
        'Focused on software engineering fundamentals, including algorithms, data structures, DBMS, and operating systems—while actively exploring the concepts and real-world applications of AI and machine learning.',
      achievements: ['CGPA: 9.20/10.00', 'Deans List'],
      image: 'image.png',
      color: 'from-blue-400 to-blue-600',
    },
    {
      type: 'project',
      icon: Code,
      title: 'E-Commerce Platform',
      organization: 'Personal Project',
      period: '2022',
      tagline: 'Digital Storefront', // New: Short Tagline
      description:
        'Built a full-stack e-commerce platform with React, Node.js, and MongoDB. Implemented payment integration, user authentication, and admin dashboard.',
      achievements: ['1000+ Users', 'Payment Integration', 'Real-time Updates'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-purple-400 to-purple-600',
    },
    // {
    //   type: 'work',
    //   icon: Briefcase,
    //   title: 'Frontend Developer',
    //   organization: 'Tech Company Inc.',
    //   period: '2022 - 2023',
    //   tagline: 'Entry-Level Role', // New: Short Tagline
    //   description:
    //     'Developed and maintained responsive web applications using React and TypeScript. Collaborated with cross-functional teams to deliver high-quality products.',
    //   achievements: ['Led 3 major projects', 'Improved performance 40%', 'Mentored juniors'],
    //   image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   color: 'from-green-400 to-green-600',
    // },
    // {
    //   type: 'achievement',
    //   icon: Trophy,
    //   title: 'Hackathon Winner',
    //   organization: 'National Tech Hackathon',
    //   period: '2023',
    //   tagline: 'Major Triumph', // New: Short Tagline
    //   description:
    //     'Won first place in a 48-hour hackathon by building an innovative solution for sustainable agriculture using IoT and data analytics.',
    //   achievements: ['1st Place', '$10k Prize', 'Media Coverage'],
    //   image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   color: 'from-yellow-400 to-yellow-600',
    // },
  ];

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const getIconColor = (type: string) => {
    switch (type) {
      case 'education': return 'text-blue-600';
      case 'work': return 'text-green-600';
      case 'project': return 'text-purple-600';
      case 'achievement': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  const getIconBg = (type: string) => {
    switch (type) {
      case 'education': return 'bg-blue-50';
      case 'work': return 'bg-green-50';
      case 'project': return 'bg-purple-50';
      case 'achievement': return 'bg-yellow-50';
      default: return 'bg-gray-50';
    }
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.015)_0%,transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-1.5 text-sm font-medium bg-black/5 text-black"
          >
            My Journey
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Learning & Experience Timeline
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From education to professional milestones, here's my journey in the world of technology
            and innovation.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-6xl mx-auto">
          {/* Main Timeline Line (fixed at the center) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-black/10 -translate-x-1/2 hidden md:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-black origin-top"
            />
          </div>

          <div className="space-y-16">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  // Force a single row layout with content split 1/3 (left) and 2/3 (right)
                  className="relative flex flex-col md:flex-row items-start justify-between"
                >
                  {/* Left Side: Image and Tagline (1/3 width on md+) */}
                  {/*<div className="md:w-[calc(50%-48px)] flex-shrink-0 md:pl-16">*/}
                  <div className="md:w-[calc(50%-48px)] flex-shrink-0 md:pl-16">
                    
                    {/* Tagline */}
                    <div className="order-2 md:order-1">
                      <h4 className="text-xl font-semibold text-gray-900">{capitalize(experience.type)}</h4>
                      <p className="text-sm text-gray-500 font-medium">{experience.tagline}</p>
                    </div>

                    {/* Image Container (slightly smaller than RHS content) */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="order-1 md:order-2 w-80 h-80 sm:w-80 sm:h-80 md:w-96 md:h-64 rounded-2xl shadow-xl border-4 border-white ring-2 ring-black/10 overflow-hidden relative"
                    >
                      <img
                        src={experience.image}
                        alt={experience.title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-tr ${experience.color} opacity-20 hover:opacity-10 transition-opacity duration-300`}
                      ></div>
                    </motion.div>
                  </div>
                  
                  {/* Timeline Bullet Point (Always in the middle) */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute left-1/2 w-10 h-10 -translate-x-1/2 top-10 md:top-20 bg-white border-4 border-black rounded-full flex items-center justify-center shadow-xl z-10 hidden md:flex"
                  >
                    <Icon className={`w-5 h-5 ${getIconColor(experience.type)}`} />
                  </motion.div>

                  {/* Right Side: Timeline Content (2/3 width on md+) */}
                  <div className="md:w-[calc(50%-48px)] flex-shrink-0 md:pl-16">
                    <motion.div
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.3 }}
                      className="w-full"
                    >
                      <Card className="border-2 border-black/5 transition-all duration-300 shadow-lg hover:shadow-2xl bg-white overflow-hidden">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              {/* Title */}
                              <h3 className="text-2xl font-bold text-black mb-1">
                                {experience.title}
                              </h3>
                              {/* Organization */}
                              <p className="text-gray-600 font-medium mb-2">
                                {experience.organization}
                              </p>
                              {/* Period/Date */}
                              <div className="flex items-center gap-1.5 text-gray-500 text-sm font-medium">
                                <Calendar className="w-4 h-4" />
                                <span>{experience.period}</span>
                              </div>
                            </div>
                            <div className={`p-2 rounded-lg flex-shrink-0 ${getIconBg(experience.type)} hidden sm:block`}>
                              <Icon className={`w-5 h-5 ${getIconColor(experience.type)}`} />
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            {experience.description}
                          </p>

                          {/* Achievements/Badges */}
                          <div className="flex flex-wrap gap-2 pt-2 border-t border-black/5">
                            {experience.achievements.map((achievement, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 + 0.3 }}
                              >
                                <Badge
                                  variant="outline"
                                  className="px-3 py-1 text-xs border-black/10 text-gray-700 bg-gray-50 hover:bg-gray-100"
                                >
                                  {achievement}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>

                        {/* Animated Bottom Bar */}
                        <motion.div
                          className={`h-1 bg-gradient-to-r ${experience.color}`}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        />
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* End of Timeline Marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mt-12 flex justify-center"
          >
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg shadow-2xl">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <Briefcase className="w-10 h-10" />
              </motion.div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-8 text-gray-600 font-medium"
          >
            The journey continues...
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;