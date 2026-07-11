import { PageTransition } from "@/components/ui/PageTransition";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { site } from "@/data/site";

/**
 * Placeholder sections. Each will be replaced by its real, fully-built
 * section component (HeroSection, ProjectsSection, etc.) as we work
 * through the build order. The ids below are what the Navbar, scroll-spy,
 * and command menu already scroll/link to — keep them stable.
 */
function PlaceholderSection({ id, label }) {
  return (
    <section
      id={id}
      className="flex min-h-[70vh] scroll-mt-28 flex-col items-start justify-center border-b
                 border-[var(--border)] px-6 sm:px-10 lg:px-16"
    >
      <span className="font-mono-label text-xs text-[var(--text-faint)]">~/{id}</span>
      <h2 className="mt-3 font-display text-3xl font-medium text-[var(--text)] sm:text-4xl">
        {label}
      </h2>
      <p className="mt-2 max-w-md text-sm text-[var(--text-muted)]">
        This section hasn't been built yet — it's next up in the queue.
      </p>
    </section>
  );
}

export default function Home() {
  return (
    <PageTransition>
      {/* React 19 hoists title/meta rendered anywhere in the tree into <head> automatically */}
      <title>{`${site.name} — ${site.role}`}</title>
      <meta
        name="description"
        content={`Portfolio of ${site.name}, ${site.role} based in ${site.location}.`}
      />
      <meta property="og:title" content={`${site.name} — ${site.role}`} />
      <meta
        property="og:description"
        content={`Portfolio of ${site.name}, ${site.role} based in ${site.location}.`}
      />
      <meta property="og:type" content="website" />

      <HeroSection />
      <ProjectsSection />
      <PlaceholderSection id="journey" label="Journey" />
      <PlaceholderSection id="blog" label="Journal" />
    </PageTransition>
  );
}
