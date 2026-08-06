import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <div className="relative mx-auto w-full max-w-5xl">

    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-5xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-2">

          {/* Left */}

          <div>
           

            <h2 className="mt-3 font-display text-4xl text-[var(--text)]">
              Thanks for stopping by.
            </h2>

            <p className="mt-5 max-w-md leading-8 text-[var(--text-muted)]">
              I'm passionate about building scalable web
              applications, AI-powered products, and creating
              meaningful user experiences.
            </p>

            <p className="mt-6 text-sm text-[var(--text-faint)]">
              📍 Pune, Maharashtra, India
            </p>
          </div>

          {/* Right */}

          <div className="flex flex-col gap-4 md:items-end">

            <a
              href="https://github.com/PavanPawar12"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2"
            >
              <Github size={18} />
              GitHub
              <ArrowUpRight
                size={16}
                className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/pavan-pawar-312631286/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2"
            >
              <Linkedin size={18} />
              LinkedIn
              <ArrowUpRight
                size={16}
                className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <a
              href="https://medium.com/@pavanpawar9923100"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2"
            >
              ✍️ Medium
              <ArrowUpRight
                size={16}
                className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <a
              href="mailto:pavanpawar9923100@email.com"
              className="group flex items-center gap-2"
            >
              <Mail size={18} />
              Email
              <ArrowUpRight
                size={16}
                className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-[var(--border)] pt-8 text-sm text-[var(--text-faint)] md:flex-row">
          <p>© 2026 Pavan Pawar. All rights reserved.</p>

          <p>
            Designed & Developed with ❤️ using React + Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
    </div>
  );
}