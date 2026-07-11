import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { HeroBadge } from "@/components/hero/HeroBadge";
import { HeroButtons } from "@/components/hero/HeroButtons";
import { SocialLinks } from "@/components/hero/SocialLinks";
import { site } from "@/data/site";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export function HeroContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex w-full max-w-xl flex-col items-start gap-5 text-left"
    >
      <HeroBadge />

      <motion.h1
        variants={item}
        className="font-display text-[clamp(2.25rem,6.5vw,4.25rem)] font-medium
                   leading-[1.05] tracking-tight text-[var(--text)]"
      >
        {site.name}
      </motion.h1>

      <motion.p
        variants={item}
        className="font-mono-label text-[clamp(0.95rem,2vw,1.15rem)] text-[var(--accent)]"
      >
        {site.role}
      </motion.p>

      <motion.p
        variants={item}
        className="max-w-md text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-base"
      >
        {site.bio}
      </motion.p>

      <motion.div
        variants={item}
        className="flex items-center gap-1.5 text-sm text-[var(--text-faint)]"
      >
        <MapPin className="h-3.5 w-3.5" />
        {site.location}
      </motion.div>

      <HeroButtons />

      <motion.div variants={item}>
        <SocialLinks className="mt-1" />
      </motion.div>
    </motion.div>
  );
}
