import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FeaturedProject } from "@/components/projects/FeaturedProject";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { projects, getFeaturedProject } from "@/data/projects";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const featured = useMemo(() => getFeaturedProject(), []);

  const rest = useMemo(
    () => projects.filter((p) => p.slug !== featured.slug),
    [featured.slug]
  );

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? rest
        : rest.filter((p) => p.category === activeCategory),
    [rest, activeCategory]
  );

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-b border-[var(--border)] px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex flex-col items-start gap-2"
        >
          <span className="font-mono-label text-xs text-[var(--text-faint)]">
            ~/builds
          </span>
          <h2 className="font-display text-3xl font-medium text-[var(--text)] sm:text-4xl">
            Selected work
          </h2>
          
          <p className="max-w-lg text-sm text-[var(--text-muted)] sm:text-base">
            A mix of full-stack products, frontend tools, and backend systems —
            each one solving a real problem, end to end.
          </p>
        </motion.div>

        <div className="mb-14">
          <FeaturedProject project={featured} />
        </div>

        {/* <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-mono-label text-xs uppercase tracking-wider text-[var(--text-faint)]">
            More builds
          </h3>
          <ProjectFilters active={activeCategory} onChange={setActiveCategory} />
        </div> */}


        {/* <ProjectGrid projects={filtered} /> */}
      </div>
    </section>
  );
}
