import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiPostgresql,
  SiExpress,
  SiDocker,
  SiAmazon,
} from "react-icons/si";

const technologies = [
  {
    id: 1,
    name: "React",
    category: "Frontend",
    icon: SiReact,
    color: "#61DAFB",
    description: "Building interactive UIs",
  },
  {
    id: 2,
    name: "Node.js",
    category: "Backend",
    icon: SiNodedotjs,
    color: "#339933",
    description: "Server-side JavaScript",
  },
  {
    id: 3,
    name: "MongoDB",
    category: "Database",
    icon: SiMongodb,
    color: "#13AA52",
    description: "NoSQL database",
  },
  {
    id: 4,
    name: "JavaScript",
    category: "Language",
    icon: SiJavascript,
    color: "#F7DF1E",
    description: "Core programming",
  },
  {
    id: 5,
    name: "TypeScript",
    category: "Language",
    icon: SiTypescript,
    color: "#3178C6",
    description: "Type-safe development",
  },
  {
    id: 6,
    name: "Tailwind CSS",
    category: "Styling",
    icon: SiTailwindcss,
    color: "#06B6D4",
    description: "Utility-first CSS",
  },
  {
    id: 7,
    name: "Git & GitHub",
    category: "Version Control",
    icon: SiGithub,
    color: "#FFFFFF",
    description: "Code collaboration",
  },
  {
    id: 8,
    name: "PostgreSQL",
    category: "Database",
    icon: SiPostgresql,
    color: "#336791",
    description: "Relational database",
  },
  {
    id: 9,
    name: "Express.js",
    category: "Framework",
    icon: SiExpress,
    color: "#FFFFFF",
    description: "Web framework",
  },
  {
    id: 10,
    name: "Docker",
    category: "DevOps",
    icon: SiDocker,
    color: "#2496ED",
    description: "Containerization",
  },
  {
    id: 11,
    name: "AWS",
    category: "Cloud",
    icon: SiAmazon,
    color: "#FF9900",
    description: "Cloud services",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const hoverVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

export function TechSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--text)] mb-4">
            Tech Stack
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            Technologies I work with to build scalable, modern web applications
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {technologies.map((tech) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={tech.id}
                variants={itemVariants}
                whileHover="hover"
                initial="initial"
                className="group relative"
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--border)] to-transparent opacity-0 group-hover:opacity-100 rounded-lg blur-xl transition-opacity duration-300" />

                {/* Card */}
                <motion.div
                  variants={hoverVariants}
                  className="relative h-full bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 cursor-pointer group-hover:border-[var(--text-muted)]"
                >
                  {/* Icon Container */}
                  <div
                    className="relative w-14 h-14 flex items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${tech.color}20`,
                      boxShadow: `0 0 20px ${tech.color}20`,
                    }}
                  >
                    <IconComponent
                      size={28}
                      style={{ color: tech.color }}
                      className="transition-transform duration-300 group-hover:rotate-12"
                    />
                  </div>

                  {/* Tech Name */}
                  <div className="text-center">
                    <h3 className="font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-300">
                      {tech.name}
                    </h3>
                    <p className="text-xs text-[var(--text-faint)] mt-1">
                      {tech.category}
                    </p>
                  </div>

                  {/* Description - Hidden by default, shown on hover */}
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.2 }}
                    className="text-xs text-[var(--text-muted)] text-center leading-relaxed overflow-hidden"
                  >
                    {tech.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-[var(--text-muted)] mb-6">
            Always learning new technologies to stay ahead
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--text)] rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Let's Build Something Amazing
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
