import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { navLinks } from "@/data/nav";
import { site } from "@/data/site";

const drawerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.25, staggerChildren: 0.05, delayChildren: 0.1 },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on route change.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleClick = (link) => {
    setOpen(false);
    if (link.sectionId) {
      if (location.pathname !== "/") {
        navigate("/");
        requestAnimationFrame(() => {
          setTimeout(() => {
            document.getElementById(link.sectionId)?.scrollIntoView({ behavior: "smooth" });
          }, 250);
        });
        return;
      }
      setTimeout(() => {
        document.getElementById(link.sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      navigate(link.path);
    }
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)]
                   bg-[var(--surface)] text-[var(--text)]"
      >
        <Menu className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[60] flex flex-col bg-black"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-mono-label text-[13px] text-[var(--text-faint)]">
                ~/menu
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text)]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2 px-6" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  variants={itemVariants}
                  custom={i}
                  onClick={() => handleClick(link)}
                  className="flex items-baseline gap-3 border-b border-[var(--border)] py-4 text-left"
                >
                  <span className="font-mono-label text-xs text-[var(--text-faint)]">
                    0{i + 1}
                  </span>
                  <span className="font-display text-3xl font-medium text-[var(--text)]">
                    {link.label}
                  </span>
                </motion.button>
              ))}
            </nav>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 px-6 pb-8 pt-4"
            >
              <a
                href={site.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-[var(--text-muted)] hover:text-[var(--text)]"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-[var(--text-muted)] hover:text-[var(--text)]"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="text-[var(--text-muted)] hover:text-[var(--text)]"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}