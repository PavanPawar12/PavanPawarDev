import { motion } from "framer-motion";
import { orbitTech } from "@/data/techOrbit";

/**
 * Positions each icon on a circle around the image using percentage-based
 * top/left offsets (derived from angle), so the whole orbit scales fluidly
 * with the image container at every breakpoint — no resize listeners needed.
 */
function angleToPosition(angleDeg, radiusPct = 50) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  const x = 50 + radiusPct * Math.cos(rad);
  const y = 50 + radiusPct * Math.sin(rad);
  return { left: `${x}%`, top: `${y}%` };
}

export function TechOrbit() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {orbitTech.map((tech, i) => {
        const { left, top } = angleToPosition(tech.angle, 50);
        const Icon = tech.icon;
        return (
          <motion.div
            key={tech.label}
            className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left, top }}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.6 + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.35,
              }}
              className="group relative flex h-10 w-10 items-center justify-center rounded-xl
                         border border-[var(--border)] bg-[var(--surface)]/90 shadow-[var(--shadow-glass)]
                         backdrop-blur-md sm:h-12 sm:w-12"
              title={tech.label}
            >
              <Icon
                className="h-4 w-4 sm:h-5 sm:w-5"
                style={{ color: tech.color }}
                strokeWidth={1.75}
              />
              <span
                className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2
                           whitespace-nowrap rounded-md border border-[var(--border)]
                           bg-[var(--surface-2)] px-2 py-0.5 font-mono-label text-[10px]
                           text-[var(--text-muted)] opacity-0 transition-opacity duration-200
                           group-hover:opacity-100"
              >
                {tech.label}
              </span>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
