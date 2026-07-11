import { Atom, Hexagon, Database, Box, GitBranch, Wind, Zap } from "lucide-react";

/**
 * Positioned around HeroImage in a circle (see TechOrbit). `angle` is in
 * degrees, measured clockwise from the top (12 o'clock = 0deg).
 * Icons are generic/semantic (not brand marks) to avoid reproducing
 * trademarked logos, while still reading clearly for a dev audience.
 */
export const orbitTech = [
  { label: "React", icon: Atom, angle: 0, color: "var(--accent)" },
  { label: "Node.js", icon: Hexagon, angle: 51, color: "var(--accent-2)" },
  { label: "MongoDB", icon: Database, angle: 103, color: "var(--accent-3)" },
  { label: "Docker", icon: Box, angle: 154, color: "var(--accent)" },
  { label: "Git", icon: GitBranch, angle: 206, color: "var(--accent-2)" },
  { label: "Tailwind", icon: Wind, angle: 257, color: "var(--accent-3)" },
  { label: "Framer Motion", icon: Zap, angle: 309, color: "var(--accent)" },
];
