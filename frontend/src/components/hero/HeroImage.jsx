import { useState } from "react";
import { motion } from "framer-motion";
import { TechOrbit } from "@/components/hero/TechOrbit";
import { site } from "@/data/site";

export function HeroImage() {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto aspect-square w-[220px] shrink-0
                 xs:w-[260px] sm:w-[300px] lg:mx-0 lg:w-[340px] xl:w-[380px]"
    >
      {/* Rotating glow ring */}
      <motion.div
        aria-hidden="true"
        className="absolute -inset-3 rounded-full opacity-70 blur-2xl"
        style={{
          background:
            "conic-gradient(from 0deg, var(--accent), var(--accent-2), var(--accent-3), var(--accent))",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />

      {/* Static thin ring for crisp edge definition */}
      <div
        aria-hidden="true"
        className="absolute -inset-1.5 rounded-full"
        style={{
          background:
            "conic-gradient(from 90deg, var(--accent), var(--accent-2), var(--accent-3), var(--accent))",
          padding: 2,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Image / initials fallback */}
      <div
        className="relative h-full w-full overflow-hidden rounded-full border-4
                   border-[var(--bg)] bg-[var(--surface-2)] shadow-[var(--shadow-glass)]"
      >
        {!imgError ? (
          <img
            src={site.avatar}
            alt={site.name}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-display text-5xl font-medium text-[var(--text-faint)] sm:text-6xl">
              {site.initials}
            </span>
          </div>
        )}
      </div>

      <TechOrbit />
    </motion.div>
  );
}
