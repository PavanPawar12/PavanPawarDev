import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { navLinks } from "@/data/nav";

export function DesktopNav({ activeId }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (link) => {
    if (link.sectionId) {
      if (location.pathname !== "/") {
        navigate("/");
        // Wait for the home page to mount, then scroll.
        requestAnimationFrame(() => {
          setTimeout(() => {
            document.getElementById(link.sectionId)?.scrollIntoView({ behavior: "smooth" });
          }, 50);
        });
        return;
      }
      document.getElementById(link.sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(link.path);
    }
  };

  return (
    <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
      {navLinks.map((link) => {
        const isActive = link.sectionId && link.sectionId === activeId;
        return (
          <button
            key={link.label}
            onClick={() => handleClick(link)}
            className="group relative flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm
                       text-[var(--text-muted)] transition-colors duration-200
                       hover:text-[var(--text)]"
          >
            <span
              className={`
font-['Outfit']
text-[20px]
font-semibold
tracking
${
  isActive
    ? "text-[var(--accent)]"
    : "text-[var(--text-muted)] group-hover:text-[var(--accent)]"
}
`}
>
  {link.label}
            </span>
            {isActive && (
              <motion.span
                layoutId="nav-active-dot"
                className="absolute -bottom-0.5 left-3 right-3 h-px bg-[var(--accent)]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}
