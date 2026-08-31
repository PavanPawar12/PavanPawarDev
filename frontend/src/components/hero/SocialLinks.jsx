// import { motion } from "framer-motion";
// import { site } from "@/data/site";

// const links = [
//   {
//     icon: "https://img.icons8.com/color/48/linkedin.png",
//     href: site.social.linkedin,
//     label: "LinkedIn",
//   },
//   {
//     icon: "https://img.icons8.com/color/48/github.png",
//     href: site.social.github,
//     label: "GitHub",
//   },
//   {
//     icon: "https://img.icons8.com/color/48/gmail-new.png",
//     href: `mailto:${site.email}`,
//     label: "Email",
//   },
// ];

// const item = {
//   hidden: { opacity: 0, y: 10 },
//   visible: { opacity: 1, y: 0 },
// };

// export function SocialLinks({ className = "" }) {
//   return (
//     <div className={`flex items-center gap-4 ${className}`}>
//       {links.map(({ icon, href, label }) => (
//         <motion.a
//           key={label}
//           variants={item}
//           href={href}
//           target={href.startsWith("http") ? "_blank" : undefined}
//           rel={href.startsWith("http") ? "noreferrer" : undefined}
//           aria-label={label}
//           whileHover={{
//             y: -6,
//             scale: 1.08,
//             rotate: 5,
//           }}
//           whileTap={{ scale: 0.95 }}
//           transition={{
//             type: "spring",
//             stiffness: 350,
//             damping: 18,
//           }}
//           className="
//             group
//             relative
//             flex h-12 w-12 items-center justify-center
//             overflow-hidden
//             rounded-xl

//             border border-[var(--border)]
//             bg-[var(--surface)]

//             transition-all
//             duration-300

//             hover:border-[var(--accent)]
//             hover:bg-[var(--accent)]
//             hover:shadow-[0_0_30px_var(--accent)]
//           "
//         >
//           {/* Animated Glow */}
        

//           {/* Icon */}
//           <img
//   src={icon}
//   alt={label}
//   className="
//     social-icon
//     relative
//     z-10
//     h-5
//     w-5
//     object-contain
//     transition-transform
//     duration-300
//     group-hover:scale-110
//   "
// />
//         </motion.a>
//       ))}
//     </div>
//   );
// }


import { motion } from "framer-motion";
import { site } from "@/data/site";

const links = [
  {
    icon: "https://img.icons8.com/color/48/linkedin.png",
    href: site.social.linkedin,
    label: "LinkedIn",
  },
  {
    icon: "https://img.icons8.com/color/48/github.png",
    href: site.social.github,
    label: "GitHub",
  },
  {
    icon: "https://img.icons8.com/color/48/gmail-new.png",
    href: `mailto:${site.email}`,
    label: "Email",
  },
  {
    icon: "https://img.icons8.com/color/48/twitterx--v1.png",
    href: site.social.twitter,
    label: "X",
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
        // <motion.a
        //   key={label}
        //   variants={item}
        //   href={href}
        //   target={href.startsWith("http") ? "_blank" : undefined}
        //   rel={href.startsWith("http") ? "noreferrer" : undefined}
        //   aria-label={label}
        //   whileHover={{
        //     y: -6,
        //     scale: 1.08,
        //   }}
        //   whileTap={{ scale: 0.95 }}
        //   transition={{
        //     type: "spring",
        //     stiffness: 350,
        //     damping: 18,
        //   }}
        //   className="
        //     group
        //     relative
        //     flex h-12 w-12 items-center justify-center
        //     rounded-xl
        //     border border-[var(--border)]
        //     bg-[var(--surface)]
        //   "
        // >
        //   <img
        //     src={icon}
        //     alt={label}
        //     className="
        //       relative
        //       z-10
        //       h-5
        //       w-5
        //       object-contain
        //     "
        //   />
        // </motion.a>
        
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
    flex h-14 w-14 items-center justify-center
    rounded-xl
    border-2 border-[var(--border)]
    bg-[var(--surface)]
    shadow-sm
    transition-colors duration-300
    hover:border-[var(--primary)]
  "
>
  <img
    src={icon}
    alt={label}
    className="
      relative
      z-10
      h-7 w-7
      object-contain
    "
  />
</motion.a>


      ))}
    </div>
  );
}