"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBg() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
  id="tsparticles"
  options={{
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
      },
      modes: {
        grab: { distance: 150, links: { opacity: 0.5 } },
      },
    },
    particles: {
      color: { value: "#87CEEB" }, // Sky blue
      links: {
        color: "#87CEEB", // Sky blue for links too
        distance: 150,
        enable: true,
        opacity: 0.7, // Increased from 0.15 for better visibility
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.7,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" },
      },
      number: {
        value: 80,
        density: { enable: true, area: 800 },
      },
      opacity: { value: 0.8 }, // Increased from 0.3 for better visibility
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }}
  className="absolute inset-0 -z-10"
/>
  );
}