// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
// import { ProjectMedia } from "@/components/projects/ProjectMedia";

// const card = {
//   hidden: { opacity: 0, y: 24 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
//   },
// };

// export function ProjectCard({ project }) {
//   const navigate = useNavigate();
//   const path = `/projects/${project.slug}`;
  
//   const openExternal = (e, url) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (url) window.open(url, "_blank", "noreferrer");
//   };

//   return (
//     <motion.article
//       variants={card}
//       whileHover="hover"
//       onClick={() => navigate(path)}
//       onKeyDown={(e) => {
//         if (e.key === "Enter" || e.key === " ") {
//           e.preventDefault();
//           navigate(path);
//         }
//       }}
//       role="link"
//       tabIndex={0}
//       aria-label={`Open case study: ${project.title}`}
//       className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl
//                  border border-[var(--border)] bg-[var(--surface)] transition-colors
//                  duration-300 hover:border-[var(--border-strong)]"
//     >
//       <div className="relative aspect-[16/10] w-full overflow-hidden">
//         <motion.div
//           variants={{ hover: { scale: 1.06 } }}
//           transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
//           className="h-full w-full"
//         >
//           <ProjectMedia src={project.heroImage} alt={project.title} accent={project.accent} />
//         </motion.div>

//         <div
//           className="pointer-events-none absolute inset-0 bg-gradient-to-t
//                      from-[var(--bg)]/70 via-transparent to-transparent opacity-0
//                      transition-opacity duration-300 group-hover:opacity-100"
//         />

//         <motion.div
//           variants={{ hover: { opacity: 1, y: 0 } }}
//           initial={{ opacity: 0, y: 8 }}
//           transition={{ duration: 0.25 }}
//           className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center
//                      rounded-lg border border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-md"
//         >
//           <ArrowUpRight className="h-4 w-4 text-[var(--text)]" />
//         </motion.div>
//       </div>

//       <div className="flex flex-1 flex-col gap-3 p-5">
//         <div className="flex items-start justify-between gap-3">
//           <h3 className="font-display text-lg font-medium text-[var(--text)]">
//             {project.title}
//           </h3>
//           <span className="font-mono-label shrink-0 text-[10px] uppercase tracking-wider text-[var(--text-faint)]">
//             {project.category}
//           </span>
//         </div>

//         <p className="line-clamp-2 text-sm leading-relaxed text-[var(--text-muted)]">
//           {project.description}
//         </p>

//         <div className="mt-1 flex flex-wrap gap-1.5">
//           {project.technologies.slice(0, 4).map((tech) => (
//             <span
//               key={tech}
//               className="rounded-md border border-[var(--border)] bg-[var(--surface-2)]
//                          px-2 py-0.5 font-mono-label text-[11px] text-[var(--text-muted)]"
//             >
//               {tech}
//             </span>
//           ))}
//           {project.technologies.length > 4 && (
//             <span className="rounded-md px-2 py-0.5 font-mono-label text-[11px] text-[var(--text-faint)]">
//               +{project.technologies.length - 4}
//             </span>
//           )}
//         </div>

//         <div className="mt-auto flex items-center gap-2 pt-3">
//           {project.github && (
//             <button
//               onClick={(e) => openExternal(e, project.github)}
//               aria-label={`${project.title} source code on GitHub`}
//               className="flex h-8 w-8 items-center justify-center rounded-lg border
//                          border-[var(--border)] text-[var(--text-muted)] transition-colors
//                          duration-200 hover:border-[var(--border-strong)] hover:text-[var(--text)]"
//             >
//               <Github className="h-3.5 w-3.5" />
//             </button>
//           )}
//           {project.live && (
//             <button
//               onClick={(e) => openExternal(e, project.live)}
//               aria-label={`${project.title} live demo`}
//               className="flex h-8 w-8 items-center justify-center rounded-lg border
//                          border-[var(--border)] text-[var(--text-muted)] transition-colors
//                          duration-200 hover:border-[var(--border-strong)] hover:text-[var(--text)]"
//             >
//               <ExternalLink className="h-3.5 w-3.5" />
//             </button>
//           )}
//           <span className="ml-auto font-mono-label text-xs text-[var(--accent)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
//             Case study →
//           </span>
//         </div>
//       </div>
//     </motion.article>
//   );
// }


import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { ProjectMedia } from "@/components/projects/ProjectMedia";
import { useState } from "react";

const card = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function ProjectCard({ project }) {
  const navigate = useNavigate();
  const path = `/projects/${project.slug}`;

  const [isHovered, setIsHovered] = useState(false);

  /* --------------------------------
     Mouse position
  -------------------------------- */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [4, -4]),
    {
      stiffness: 300,
      damping: 30,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-4, 4]),
    {
      stiffness: 300,
      damping: 30,
    }
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(
      (e.clientX - rect.left) / rect.width - 0.5
    );

    mouseY.set(
      (e.clientY - rect.top) / rect.height - 0.5
    );
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  /* --------------------------------
     External links
  -------------------------------- */

  const openExternal = (e, url) => {
    e.preventDefault();
    e.stopPropagation();

    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.article
      variants={card}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate(path)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          navigate(path);
        }
      }}
      role="link"
      tabIndex={0}
      aria-label={`Open case study: ${project.title}`}
      className="
        group relative flex h-full
        cursor-pointer flex-col
        overflow-hidden rounded-3xl
        border border-[var(--border)]
        bg-[var(--surface)]

        transition-all duration-500

        hover:-translate-y-2
        hover:border-[var(--accent)]/40
        hover:shadow-[0_20px_60px_-20px_var(--accent)]
        
        focus:outline-none
        focus:ring-2
        focus:ring-[var(--accent)]
      "
    >

      {/* --------------------------------
          Subtle hover glow
      -------------------------------- */}

      <div
        className="
          pointer-events-none
          absolute inset-0
          z-10
          rounded-3xl
          opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
        "
        style={{
          background: `
            radial-gradient(
              450px circle at 50% 0%,
              rgba(139, 92, 246, 0.10),
              transparent 60%
            )
          `,
        }}
      />

      {/* --------------------------------
          Image
      -------------------------------- */}

      <div className="relative aspect-[16/10] w-full overflow-hidden">

        <motion.div
          animate={{
            scale: isHovered ? 1.07 : 1,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="h-full w-full"
        >
          <ProjectMedia
            src={project.heroImage}
            alt={project.title}
            accent={project.accent}
          />
        </motion.div>

        {/* Image overlay */}

        <div
          className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-t
            from-black/70
            via-transparent
            to-transparent
            opacity-50
            transition-opacity duration-500
            group-hover:opacity-80
          "
        />

        {/* Open arrow */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 10,
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
            y: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.25 }}
          className="
            absolute
            bottom-4 right-4
            flex h-11 w-11
            items-center justify-center
            rounded-full
            bg-white
            text-black
            shadow-xl
          "
        >
          <ArrowUpRight className="h-5 w-5" />
        </motion.div>

      </div>

      {/* --------------------------------
          Content
      -------------------------------- */}

      <div className="relative z-20 flex flex-1 flex-col p-6">

        {/* Title */}

        <div className="flex items-start justify-between gap-4">

          <h3
            className="
              font-display
              text-xl
              font-medium
              tracking-tight
              text-[var(--text)]
              transition-colors duration-300
              group-hover:text-[var(--accent)]
            "
          >
            {project.title}
          </h3>

          <motion.div
            animate={{
              rotate: isHovered ? 45 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="
              shrink-0
              text-[var(--text-faint)]
              transition-colors duration-300
              group-hover:text-[var(--accent)]
            "
          >
            <ArrowUpRight className="h-5 w-5" />
          </motion.div>

        </div>

        {/* Description */}

        <p
          className="
            mt-3
            line-clamp-3
            text-sm
            leading-6
            text-[var(--text-muted)]
          "
        >
          {project.description}
        </p>

        {/* Technologies */}

        <div className="mt-5 flex flex-wrap gap-2">

          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border border-[var(--border)]
                bg-[var(--surface-2)]
                px-2.5 py-1

                font-mono-label
                text-[10px]
                text-[var(--text-muted)]

                transition-all duration-300

                group-hover:border-[var(--accent)]/30
              "
            >
              {tech}
            </span>
          ))}

          {project.technologies.length > 5 && (
            <span
              className="
                rounded-full
                px-2 py-1
                font-mono-label
                text-[10px]
                text-[var(--text-faint)]
              "
            >
              +{project.technologies.length - 5}
            </span>
          )}

        </div>

        {/* --------------------------------
            Bottom
        -------------------------------- */}

        <div
          className="
            mt-auto
            flex items-center
            justify-between
            border-t
            border-[var(--border)]
            pt-5
            mt-6
          "
        >

          <div className="flex items-center gap-2">

            {/* GitHub */}

            {project.github && (
              <button
                onClick={(e) =>
                  openExternal(e, project.github)
                }
                aria-label={`${project.title} source code on GitHub`}
                className="
                  flex h-9 w-9
                  items-center justify-center
                  rounded-full
                  border border-[var(--border)]

                  text-[var(--text-muted)]

                  transition-all duration-300

                  hover:-translate-y-1
                  hover:border-[var(--accent)]
                  hover:text-[var(--accent)]
                "
              >
                <Github className="h-4 w-4" />
              </button>
            )}

            {/* Live */}

            {project.live && (
              <button
                onClick={(e) =>
                  openExternal(e, project.live)
                }
                aria-label={`${project.title} live demo`}
                className="
                  flex h-9 w-9
                  items-center justify-center
                  rounded-full
                  border border-[var(--border)]

                  text-[var(--text-muted)]

                  transition-all duration-300

                  hover:-translate-y-1
                  hover:border-[var(--accent)]
                  hover:text-[var(--accent)]
                "
              >
                <ExternalLink className="h-4 w-4" />
              </button>
            )}

          </div>

          {/* Case study */}

          <motion.span
            animate={{
              x: isHovered ? 0 : 6,
              opacity: isHovered ? 1 : 0.45,
            }}
            className="
              flex items-center gap-1.5
              text-xs
              font-medium
              text-[var(--accent)]
            "
          >
            View case study
            <ArrowUpRight className="h-3.5 w-3.5" />
          </motion.span>

        </div>

      </div>

    </motion.article>
  );
}