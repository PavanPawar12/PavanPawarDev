import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { ProjectMedia } from "@/components/projects/ProjectMedia";

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export function ProjectCard({ project }) {
  const navigate = useNavigate();
  const path = `/projects/${project.slug}`;
  
  const openExternal = (e, url) => {
    e.preventDefault();
    e.stopPropagation();
    if (url) window.open(url, "_blank", "noreferrer");
  };

  return (
    <motion.article
      variants={card}
      whileHover="hover"
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
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl
                 border border-[var(--border)] bg-[var(--surface)] transition-colors
                 duration-300 hover:border-[var(--border-strong)]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <motion.div
          variants={{ hover: { scale: 1.06 } }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="h-full w-full"
        >
          <ProjectMedia src={project.heroImage} alt={project.title} accent={project.accent} />
        </motion.div>

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t
                     from-[var(--bg)]/70 via-transparent to-transparent opacity-0
                     transition-opacity duration-300 group-hover:opacity-100"
        />

        <motion.div
          variants={{ hover: { opacity: 1, y: 0 } }}
          initial={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.25 }}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center
                     rounded-lg border border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-md"
        >
          <ArrowUpRight className="h-4 w-4 text-[var(--text)]" />
        </motion.div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-medium text-[var(--text)]">
            {project.title}
          </h3>
          <span className="font-mono-label shrink-0 text-[10px] uppercase tracking-wider text-[var(--text-faint)]">
            {project.category}
          </span>
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-[var(--text-muted)]">
          {project.description}
        </p>

        <div className="mt-1 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[var(--border)] bg-[var(--surface-2)]
                         px-2 py-0.5 font-mono-label text-[11px] text-[var(--text-muted)]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="rounded-md px-2 py-0.5 font-mono-label text-[11px] text-[var(--text-faint)]">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center gap-2 pt-3">
          {project.github && (
            <button
              onClick={(e) => openExternal(e, project.github)}
              aria-label={`${project.title} source code on GitHub`}
              className="flex h-8 w-8 items-center justify-center rounded-lg border
                         border-[var(--border)] text-[var(--text-muted)] transition-colors
                         duration-200 hover:border-[var(--border-strong)] hover:text-[var(--text)]"
            >
              <Github className="h-3.5 w-3.5" />
            </button>
          )}
          {project.live && (
            <button
              onClick={(e) => openExternal(e, project.live)}
              aria-label={`${project.title} live demo`}
              className="flex h-8 w-8 items-center justify-center rounded-lg border
                         border-[var(--border)] text-[var(--text-muted)] transition-colors
                         duration-200 hover:border-[var(--border-strong)] hover:text-[var(--text)]"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </button>
          )}
          <span className="ml-auto font-mono-label text-xs text-[var(--accent)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Case study →
          </span>
        </div>
      </div>
    </motion.article>
  );
}
