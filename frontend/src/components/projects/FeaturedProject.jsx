import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, ExternalLink, ArrowRight, Star } from "lucide-react";
import { ProjectMedia } from "@/components/projects/ProjectMedia";
import { Button } from "@/components/ui/button";

export function FeaturedProject({ project }) {
  if (!project) return null;
  const path = `/projects/${project.slug}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group grid grid-cols-1 overflow-hidden rounded-2xl border
                 border-[var(--border)] bg-[var(--surface)] lg:grid-cols-2"
    >
      <Link
        to={path}
        aria-label={`Open case study: ${project.title}`}
        className="relative block aspect-[16/10] overflow-hidden lg:aspect-auto lg:order-2"
      >
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="h-full w-full"
        >
          <ProjectMedia src={project.heroImage} alt={project.title} accent={project.accent} />
        </motion.div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t
                     from-[var(--bg)]/60 via-transparent to-transparent lg:bg-gradient-to-l"
        />
      </Link>

      <div className="flex flex-col justify-center gap-5 p-7 sm:p-10 lg:order-1">
        <div className="inline-flex w-fit items-center gap-1.5 rounded-full border
                        border-[var(--border)] bg-[var(--surface-2)] px-3 py-1">
          <Star className="h-3 w-3 fill-current text-[var(--accent-3)]" />
          <span className="font-mono-label text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
            Featured build
          </span>
        </div>

        <div>
          <h3 className="font-display text-2xl font-medium text-[var(--text)] sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-base">
            {project.subtitle}
          </p>
        </div>

        <p className="text-sm leading-relaxed text-[var(--text-muted)]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[var(--border)] bg-[var(--surface-2)]
                         px-2 py-0.5 font-mono-label text-[11px] text-[var(--text-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button asChild size="default">
            <Link to={path}>
              View case study
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          {project.github && (
            <Button asChild variant="outline" size="default">
              <a href={project.github} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                Code
              </a>
            </Button>
          )}

          {project.live && (
            <Button asChild variant="ghost" size="default">
              <a href={project.live} target="_blank" rel="noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
