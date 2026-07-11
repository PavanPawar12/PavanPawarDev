import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Logo } from "@/components/navbar/Logo";
import { DesktopNav } from "@/components/navbar/DesktopNav";
import { MobileNav } from "@/components/navbar/MobileNav";
import { ThemeToggle } from "@/components/navbar/ThemeToggle";
import { CommandMenu } from "@/components/navbar/CommandMenu";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { navLinks } from "@/data/nav";

const sectionIds = ["hero", ...navLinks.map((l) => l.sectionId).filter(Boolean)];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <TooltipProvider>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6"
      >
        <div
          className={`flex w-full max-w-5xl items-center justify-between rounded-2xl border
                      px-4 py-2.5 backdrop-blur-xl transition-all duration-300
                      ${
                        scrolled
                          ? "border-[var(--border)] bg-[var(--surface)]/70 shadow-[var(--shadow-glass)]"
                          : "border-[var(--border)]/60 bg-[var(--surface)]/40"
                      }`}
        >
          <Logo />

          <DesktopNav activeId={activeId} />

          <div className="flex items-center gap-2.5">
            <CommandMenu />
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </motion.header>
    </TooltipProvider>
  );
}
