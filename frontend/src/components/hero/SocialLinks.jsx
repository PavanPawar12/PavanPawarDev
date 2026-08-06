import { motion } from "framer-motion";
import { site } from "@/data/site";

const links = [
  {
    icon: "https://img.icons8.com/ios-glyphs/30/github.png",
    href: site.social.github,
    label: "GitHub",
  },
  {
    icon: "https://img.icons8.com/ios-glyphs/30/linkedin.png",
    href: site.social.linkedin,
    label: "LinkedIn",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/gmail-new.png",
    href: `mailto:${site.email}`,
    label: "Email",
  },
];

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export function SocialLinks({ className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {links.map(({ icon, href, label }) => (
        <motion.a
          key={label}
          variants={item}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          aria-label={label}
          whileHover={{
            y: -6,
            scale: 1.08,
            rotate: 5,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 18,
          }}
          className="
            group
            relative
            flex h-12 w-12 items-center justify-center
            overflow-hidden
            rounded-xl

            border border-[var(--border)]
            bg-[var(--surface)]

            transition-all
            duration-300

            hover:border-[var(--accent)]
            hover:bg-[var(--accent)]
            hover:shadow-[0_0_30px_var(--accent)]
          "
        >
          {/* Animated Glow */}
          <span
            className="
              absolute
              inset-0
              rounded-xl
              bg-[var(--accent)]
              opacity-9
              blur-xl
              transition-opacity
              duration-300
              group-hover:opacity-30
            "
          />

          {/* Icon */}
          <img
            src={icon}
            alt={label}
            // className="
            //   relative
            //   z-10
            //   h-5
            //   w-5
            //   object-contain

            //   transition-all
            //   duration-300

            //   group-hover:scale-110
            //   group-hover:brightness-0
            //   group-hover:invert
            // "
          />
        </motion.a>
      ))}
    </div>
  );
}