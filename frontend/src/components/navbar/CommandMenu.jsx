import { useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Search, Github, Linkedin, Mail, Moon, Sun, ArrowUpRight } from "lucide-react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { navLinks } from "@/data/nav";
import { site } from "@/data/site";
import { useTheme } from "@/hooks/useTheme";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const goToSection = useCallback(
    (sectionId) => {
      setOpen(false);
      if (location.pathname !== "/") {
        navigate(`/#${sectionId}`);
        return;
      }
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    },
    [location.pathname, navigate]
  );

  const goToPath = useCallback(
    (path) => {
      setOpen(false);
      navigate(path);
    },
    [navigate]
  );

  return (
    <>
      {/* Desktop-only affordance, per spec (mobile bar is Logo / Theme Toggle / Hamburger only).
          The ⌘K shortcut still works globally regardless of viewport. */}
      <button
        onClick={() => setOpen(true)}
        className="hidden items-center gap-2.5 rounded-lg border border-[var(--border)]
                   bg-[var(--surface)] px-3 py-2 text-[var(--text-muted)]
                   transition-colors duration-200 hover:border-[var(--border-strong)]
                   hover:text-[var(--text)] lg:flex"
        aria-label="Open command menu"
      >
        <Search className="h-3.5 w-3.5" />
        <span className="font-mono-label text-xs">Search</span>
        <kbd className="ml-1 rounded border border-[var(--border-strong)] bg-[var(--surface-2)] px-1.5 py-0.5 font-mono-label text-[10px] text-[var(--text-faint)]">
          ⌘K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Jump to a section, page, or action…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Navigate">
            <CommandItem onSelect={() => goToSection("hero")}>
              <ArrowUpRight className="h-4 w-4 text-[var(--text-muted)]" /> ~/home
            </CommandItem>
            {navLinks.map((link) => (
              <CommandItem
                key={link.label}
                onSelect={() =>
                  link.sectionId ? goToSection(link.sectionId) : goToPath(link.path)
                }
              >
                <ArrowUpRight className="h-4 w-4 text-[var(--text-muted)]" />
                {link.file}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup heading="Connect">
            <CommandItem onSelect={() => window.open(site.social.github, "_blank")}>
              <Github className="h-4 w-4 text-[var(--text-muted)]" /> GitHub
            </CommandItem>
            <CommandItem onSelect={() => window.open(site.social.linkedin, "_blank")}>
              <Linkedin className="h-4 w-4 text-[var(--text-muted)]" /> LinkedIn
            </CommandItem>
            <CommandItem onSelect={() => (window.location.href = `mailto:${site.email}`)}>
              <Mail className="h-4 w-4 text-[var(--text-muted)]" /> Email
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Preferences">
            <CommandItem onSelect={toggleTheme}>
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-[var(--text-muted)]" />
              ) : (
                <Moon className="h-4 w-4 text-[var(--text-muted)]" />
              )}
              Switch to {theme === "dark" ? "light" : "dark"} mode
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
