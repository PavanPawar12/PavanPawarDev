// import { motion } from "framer-motion";
// import { MapPin } from "lucide-react";
// import { HeroButtons } from "@/components/hero/HeroButtons";
// import { SocialLinks } from "@/components/hero/SocialLinks";
// import { site } from "@/data/site";

// const container = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.09, delayChildren: 0.15 },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 18 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
//   },
// };

// export function HeroContent() {
//   return (
//     <motion.div
//       variants={container}
//       initial="hidden"
//       animate="visible"
//       className="flex w-full max-w-xl flex-col items-start gap-5 text-left"
//     >
    

//       <motion.h1
//         variants={item}
//         className="font-display text-[clamp(2.25rem,6.5vw,4.25rem)] font-medium
//                    leading-[1.05] tracking-tight text-[var(--text)]"
//       >
//         {site.name}
//       </motion.h1>

//       <motion.p
//         variants={item}
//         className="font-mono-label text-[clamp(0.95rem,2vw,1.15rem)] text-[var(--accent)]"
//       >
//         {site.role}
//       </motion.p>

//       <motion.p
//         variants={item}
//         className="max-w-md text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-base"
//       >
//         {site.bio}
//       </motion.p>

//       <motion.div
//         variants={item}
//         className="flex items-center gap-1.5 text-sm text-[var(--text-faint)]"
//       >
//         <MapPin className="h-3.5 w-3.5" />
//         {site.location}
//       </motion.div>

//       <HeroButtons /> 

//       <motion.div variants={item}>
//         <SocialLinks className="mt-1" />
//       </motion.div>
//     </motion.div>
//   );
// }


import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { HeroButtons } from "@/components/hero/HeroButtons";
import { SocialLinks } from "@/components/hero/SocialLinks";
import { site } from "@/data/site";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Roles for typewriter animation
const roles = [
  "Full-Stack Software Engineer",
  "MERN Stack Developer",
  "React Developer",
  "Backend Developer",
  "Product Builder",
];

export function HeroContent() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentRole = roles[roleIndex];

  // Typewriter effect
  useEffect(() => {
    const typingSpeed = isDeleting ? 45 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(
          currentRole.substring(0, displayText.length + 1)
        );

        // Finished typing
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1400);
        }
      } else {
        setDisplayText(
          currentRole.substring(0, displayText.length - 1)
        );

        // Finished deleting
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex w-full max-w-xl flex-col items-start gap-5 text-left"
    >
      {/* NAME */}
      <motion.h1
        variants={item}
        // className="font-display text-[clamp(2rem,5.5vw,3.5rem)] font-medium
        //            leading-[1.05] tracking-tight text-[var(--text)]"
        className="font-display text-[clamp(1.8rem,4.5vw,3rem)] font-medium
           leading-[1.05] tracking-tight text-[var(--text)]"
        initial="hidden"
        animate="visible"
      >
        {site.name.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
                filter: "blur(8px)",
              },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      {/* ANIMATED ROLE */}
      <motion.div
        variants={item}
        className="flex min-h-[32px] items-center"
      >
        <span
          className="font-mono-label text-[clamp(0.95rem,2vw,1.15rem)]"
          style={{ color: "var(--accent)" }}
        >
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="ml-1"
          >
            |
          </motion.span>
        </span>
      </motion.div>

      {/* BIO */}
      <motion.p
        variants={item}
        className="max-w-md text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-base"
      >
        {site.bio}
      </motion.p>

      {/* LOCATION */}
      <motion.div
        variants={item}
        className="flex items-center gap-1.5 text-sm text-[var(--text-faint)]"
      >
        <MapPin className="h-3.5 w-3.5" />
        {site.location}
      </motion.div>

      {/* BUTTONS */}
      <motion.div variants={item}>
        <HeroButtons />
      </motion.div>

      {/* SOCIAL LINKS */}
      <motion.div variants={item}>
        <SocialLinks className="mt-1" />
      </motion.div>

      {/* CURRENTLY BUILDING */}
      <motion.div
        variants={item}
        className="mt-1 flex items-center gap-2 text-sm text-[var(--text-faint)]"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>

        <span>
          Currently building with React & Node.js
        </span>
      </motion.div>
    </motion.div>
  );
}