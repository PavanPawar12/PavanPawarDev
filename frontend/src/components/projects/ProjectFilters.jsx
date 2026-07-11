import { motion } from "framer-motion";
import { categories } from "@/data/projects";

export function ProjectFilters({ active, onChange }) {
  return (
    <div
      role="tablist"
      aria-label="Filter projects by category"
      className="flex flex-wrap items-center gap-2"
    >
      {categories.map((category) => {
        const isActive = active === category;
        return (
          <button
            key={category}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category)}
            className="relative rounded-full px-3.5 py-1.5 font-mono-label text-xs
                       transition-colors duration-200"
          >
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                className="absolute inset-0 rounded-full bg-[var(--accent)]"
              />
            )}
            <span
              className={`relative z-10 ${
                isActive
                  ? "text-[var(--bg)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text)]"
              }`}
            >
              {category}
            </span>
            {!isActive && (
              <span className="absolute inset-0 rounded-full border border-[var(--border)]" />
            )}
          </button>
        );
      })}
    </div>
  );
}
