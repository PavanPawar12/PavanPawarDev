import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Wrench,
  Lightbulb,
  Rocket,
  LayoutTemplate,
  ShieldCheck,
  Gauge,
  KeyRound,
  Smartphone,
} from "lucide-react";
import { PageTransition } from "@/components/ui/PageTransition";
import { ProjectMedia } from "@/components/projects/ProjectMedia";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, getRelatedProjects } from "@/data/projects";
import Footer from "@/components/footer/Footer";

function reveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay },
  };
}

function DetailBlock({ icon: Icon, eyebrow, title, children }) {
  return (
    <motion.div {...reveal()} className="border-t border-[var(--border)] py-10">
      <div className="mb-4 flex items-center gap-2">
        <Icon className="h-4 w-4 text-[var(--accent)]" />
        <span className="font-mono-label text-xs uppercase tracking-wider text-[var(--text-faint)]">
          {eyebrow}
        </span>
      </div>
      {title && (
        <h2 className="mb-4 font-display text-2xl font-medium text-[var(--text)]">
          {title}
        </h2>
      )}
      <div className="max-w-3xl text-[15px] leading-relaxed text-[var(--text-muted)]">
        {children}
      </div>
    </motion.div>
  );
}

function ListBlock({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((point) => (
        <li key={point} className="flex items-start gap-2.5">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const related = getRelatedProjects(slug, 3);

  return (
    <PageTransition>
      <title>{`${project.title} — Project Case Study`}</title>
      <meta name="description" content={project.description} />
      <meta property="og:title" content={project.title} />
      <meta property="og:description" content={project.description} />
      <meta property="og:type" content="article" />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)] pt-28">
        <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
          <Link
            to="/projects"
            className="mb-8 inline-flex items-center gap-2 font-mono-label text-sm text-[var(--text-muted)] hover:text-[var(--accent)]"
          >
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>

          <motion.div {...reveal()}>
            <span className="font-mono-label text-xs uppercase tracking-wider text-[var(--accent)]">
              {project.category}
            </span>
            <h1 className="mt-3 font-display text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] text-[var(--text)]">
              {project.title}
            </h1>
            <p className="mt-3 max-w-2xl text-base text-[var(--text-muted)] sm:text-lg">
              {project.subtitle}
            </p>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1 font-mono-label text-xs text-[var(--text-muted)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              {project.github && (
                <Button asChild variant="outline">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" /> GitHub repository
                  </a>
                </Button>
              )}
              {project.live && (
                <Button asChild>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <ExternalLink className="h-4 w-4" /> Live demo
                  </a>
                </Button>
              )}
            </div>
          </motion.div>

          <motion.div
            {...reveal(0.15)}
            className="relative mt-12 aspect-video w-full overflow-hidden rounded-2xl border border-[var(--border)]"
          >
            <ProjectMedia src={project.heroImage} alt={project.title} accent={project.accent} />
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
        {/* Problem & why */}
        <DetailBlock icon={AlertTriangle} eyebrow="~/problem" title="The problem">
          <p>{project.problemStatement}</p>
        </DetailBlock>

        <DetailBlock icon={Lightbulb} eyebrow="~/motivation" title="Why I built it">
          <p>{project.whyBuilt}</p>
        </DetailBlock>

        {/* Architecture (placeholder, per brief) */}
        <motion.div {...reveal()} className="border-t border-[var(--border)] py-10">
          {/* <div className="mb-4 flex items-center gap-2">
            <LayoutTemplate className="h-4 w-4 text-[var(--accent)]" />
            <span className="font-mono-label text-xs uppercase tracking-wider text-[var(--text-faint)]">
              ~/architecture
            </span>
          </div> */}
          {/* <h2 className="mb-4 font-display text-2xl font-medium text-[var(--text)]">
            System architecture
          </h2>
          <div className="flex aspect-[21/9] w-full max-w-3xl items-center justify-center rounded-xl border border-dashed border-[var(--border-strong)] bg-[var(--surface-2)]">
            <span className="font-mono-label text-xs text-[var(--text-faint)]">
              Architecture diagram — coming soon
            </span>
          </div> */}
        </motion.div>

        {/* Features */}
        {/* <DetailBlock icon={CheckCircle2} eyebrow="~/features" title="Key features">
          <ListBlock items={project.features} />
        </DetailBlock> */}

        {/* Challenges & Solutions */}
        <motion.div {...reveal()} className="border-t border-[var(--border)] py-10">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              {/* <div className="mb-4 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-[var(--accent-3)]" />
                <span className="font-mono-label text-xs uppercase tracking-wider text-[var(--text-faint)]">
                  ~/challenges
                </span>
              </div> */}
              <ul className="space-y-3 text-[15px] leading-relaxed text-[var(--text-muted)]">
                {project.challenges.map((c) => (
                  <li key={c} className="border-l-2 border-[var(--border-strong)] pl-3">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Wrench className="h-4 w-4 text-[var(--accent)]" />
                <span className="font-mono-label text-xs uppercase tracking-wider text-[var(--text-faint)]">
                  ~/solutions
                </span>
              </div>
              <ul className="space-y-3 text-[15px] leading-relaxed text-[var(--text-muted)]">
                {project.solutions.map((s) => (
                  <li key={s} className="border-l-2 border-[var(--accent)] pl-3">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Gallery */}
        {project.gallery?.length > 0 && (
          <DetailBlock icon={LayoutTemplate} eyebrow="~/gallery" title="Screenshots">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.gallery.map((src, i) => (
                <div
                  key={src}
                  className="aspect-video overflow-hidden rounded-xl border border-[var(--border)]"
                >
                  <ProjectMedia
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    accent={project.accent}
                  />
                </div>
              ))}
            </div>
          </DetailBlock>
        )}

        {/* Folder structure */}
        {/* <DetailBlock icon={LayoutTemplate} eyebrow="~/structure" title="Folder structure">
          <pre className="overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--surface-2)] p-4 font-mono-label text-xs leading-relaxed text-[var(--text-muted)]">
            {project.folderStructure}
          </pre>
        </DetailBlock> */}

        {/* Code highlights
        {project.codeHighlights?.length > 0 && (
          <DetailBlock icon={Wrench} eyebrow="~/code" title="Code highlights">
            <div className="space-y-6">
              {project.codeHighlights.map((snippet) => (
                <div key={snippet.title}>
                  <p className="mb-2 font-mono-label text-xs text-[var(--text-faint)]">
                    {snippet.title}
                  </p>
                  <pre className="overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--surface-2)] p-4 font-mono-label text-xs leading-relaxed text-[var(--text)]">
                    {snippet.code}
                  </pre>
                </div>
              ))}
            </div>
          </DetailBlock>
        )} */}

        {/* Performance */}
        {/* <DetailBlock icon={Gauge} eyebrow="~/performance" title="Performance optimizations">
          <ListBlock items={project.performance} />
        </DetailBlock> */}

        {/* Security */}
        {/* <DetailBlock icon={ShieldCheck} eyebrow="~/security" title="Security features">
          <ListBlock items={project.security} />
        </DetailBlock> */}

        {/* Auth flow */}
        {/* <DetailBlock icon={KeyRound} eyebrow="~/auth" title="Authentication flow">
          <p>{project.authFlow}</p>
        </DetailBlock> */}

        {/* Responsive design */}
        {/* <DetailBlock icon={Smartphone} eyebrow="~/responsive" title="Responsive design">
          <p>{project.responsiveDetails}</p>
        </DetailBlock> */}

        {/* Lessons */}
        {/* <DetailBlock icon={Lightbulb} eyebrow="~/lessons" title="Lessons learned">
          <ListBlock items={project.lessons} />
        </DetailBlock> */}

        {/* Future scope */}
        {/* <DetailBlock icon={Rocket} eyebrow="~/next" title="Future improvements">
          <ListBlock items={project.futureScope} />
        </DetailBlock> */}

        <div className="flex flex-wrap items-center gap-3 border-t border-[var(--border)] py-10">
          <Button asChild variant="outline">
            <Link to="/projects">
              <ArrowLeft className="h-4 w-4" /> Back to all projects
            </Link>
          </Button>
        </div>
      </div>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="border-t border-[var(--border)] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex flex-col gap-2">
              <span className="font-mono-label text-xs text-[var(--text-faint)]">
                ~/related
              </span>
              <h2 className="font-display text-2xl font-medium text-[var(--text)]">
                Related builds
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {related.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
          <Footer/>
        </section>
      )}
    </PageTransition>
  );
}
