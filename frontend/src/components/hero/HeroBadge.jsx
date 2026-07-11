import { motion } from "framer-motion";
import { site } from "@/data/site";

export function HeroBadge() {
  if (!site.availability?.text) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center gap-2 self-start rounded-full border
                 border-[var(--border)] bg-[var(--surface)]/80 px-3 py-1.5
                 backdrop-blur-sm"
    >
      <span className="relative flex h-2 w-2 shrink-0">
        {site.availability.open && (
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
            style={{ backgroundColor: "var(--accent)" }}
          />
        )}
        <span
          className="relative inline-flex h-2 w-2 rounded-full"
          style={{
            backgroundColor: site.availability.open
              ? "var(--accent)"
              : "var(--text-faint)",
          }}
        />
      </span>
      <span className="font-mono-label text-xs text-[var(--text-muted)]">
        {site.availability.text}
      </span>
    </motion.div>
  );
}
