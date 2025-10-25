"use client";
import React, { useState } from 'react';

// --- 1. Skill Data with External Logos and Links ---
const SKILL_DETAILS = [
  {
    name: 'C++',
    description: 'High-performance memory management and application development.',
    logoSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
    href: 'https://www.iso.org/standard/68564.html',
  },
  {
    name: 'Python',
    description: 'Rapid prototyping, scripting, and backend development.',
    logoSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    href: 'https://www.python.org',
  },
  {
    name: 'JavaScript',
    description: 'Core competency for front-end and full-stack development.',
    logoSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'React',
    description: 'Building modern, component-based user interfaces (UI/UX).',
    logoSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
    href: 'https://reactjs.org/',
  },
  {
    name: 'Node.js',
    description: 'Asynchronous event-driven server-side programming.',
    logoSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
    href: 'https://nodejs.org/en/',
  },
  {
    name: 'SQL',
    description: 'Relational database design, querying, and optimization (MySQL).',
    logoSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
    href: 'https://www.mysql.com/',
  },
  {
    name: 'Git',
    description: 'Advanced version control, branching strategies, and collaboration.',
    logoSrc: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
    href: 'https://git-scm.com/',
  },
  {
    name: 'Docker',
    description: 'Containerization, service orchestration, and reproducible environments.',
    logoSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg',
    href: 'https://www.docker.com/',
  },
  {
    name: 'Machine Learning',
    description: 'Supervised and unsupervised model implementation and evaluation.',
    // Generic professional icon for ML/AI
    logoSrc: 'https://cdn-icons-png.flaticon.com/128/9240/9240330.png',
    href: 'https://www.ibm.com/topics/machine-learning',
  },
  {
    name: 'Deep Learning',
    description: 'Neural networks, computer vision, and NLP frameworks.',
    // Icon representing tensors or network structure
    logoSrc: 'https://cdn-icons-png.flaticon.com/128/10817/10817412.png',
    href: 'https://deeplearning.ai/',
  },
  {
    name: 'Data Structures',
    description: 'Efficient implementation of foundational data organization principles.',
    logoSrc: 'https://cdn-icons-png.flaticon.com/128/10484/10484359.png',
    href: 'https://en.wikipedia.org/wiki/Data_structure',
  },
  {
    name: 'Algorithms',
    description: 'Designing and optimizing computational problem-solving methodologies.',
    logoSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/thealgorithms/thealgorithms-original.svg",
    href: 'https://en.wikipedia.org/wiki/Algorithm',
  },
  // {
  //   name: 'System Design',
  //   description: 'Architecting scalable, fault-tolerant, and distributed systems.',
  //   logoSrc: 'https://www.svgrepo.com/show/445851/architecture-building.svg',
  //   href: 'https://en.wikipedia.org/wiki/System_design',
  // },
];

// --- 2. Skill Card Component ---
interface Skill {
  name: string;
  description: string;
  logoSrc: string;
  href: string;
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Simple staggered appearance simulation (Framer motion style)
  const delay = index * 0.05;
  const initialStyle = { opacity: 0, transform: 'translateY(20px)' };
  const animateStyle = { opacity: 1, transform: 'translateY(0px)', transition: `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s` };

  // Hover scale and shadow simulation (Framer motion style)
  const hoverClass = isHovered ? 'scale-[1.02] shadow-xl border-indigo-200' : 'scale-100 shadow-lg border-gray-100';

  return (
    <div
      // Motion.div simulation
      style={{ ...initialStyle, ...animateStyle }}
      className={`
        flex flex-col items-start p-5 h-full
        border rounded-xl bg-white
        transition-all duration-300 ease-out cursor-pointer
        ${hoverClass}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {/* Logo and Link */}
      <a href={skill.href} target="_blank" rel="noopener noreferrer" className="mb-3">
        <img
          src={skill.logoSrc}
          alt={`${skill.name} Logo`}
          width="40"
          height="40"
          className="object-contain w-10 h-10 transition-transform duration-200 hover:scale-105"
          // Fallback image source in case of load failure
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            const img = e.currentTarget as HTMLImageElement;
            img.onerror = null;
            img.src = "https://placehold.co/40x40/f1f5f9/94a3b8?text=Tech";
          }}
        />
      </a>

      <h3 className="text-lg font-bold text-gray-900">
        {skill.name}
      </h3>
      <p className="text-sm text-gray-600 mt-1">
        {skill.description}
      </p>
    </div>
  );
};

// --- 3. Main App Component ---
const App = () => {
  return (
    <div className="min-h-screen bg-white font-inter p-4 sm:p-8">
      <div className="max-w-7xl mx-auto py-12">
        {/* Header Section (Professional Shadcn style) */}
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Core Technical Capabilities
          </h2>
          <p className="mt-3 text-xl text-gray-500 max-w-3xl mx-auto">
            A structured overview of key programming languages, frameworks, and engineering domains.
          </p>
        </header>

        {/* Skills Grid */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {SKILL_DETAILS.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </section>

        {/* Footer/Callout */}
        <div className="mt-16 text-center">
          <p className="text-md text-gray-500 border-t pt-6 border-gray-100">
            Proficiency extends across the full stack and advanced computer science fundamentals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
