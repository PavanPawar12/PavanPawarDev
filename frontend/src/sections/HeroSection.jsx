import { Hero } from "@/components/hero/Hero";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden
                 border-b border-[var(--border)] px-6 pt-32 pb-20
                 sm:px-10 sm:pt-36 lg:px-16 lg:pt-28"
    >
      {/* Subtle dot-grid backdrop — reinforces the editor/grid identity without competing for attention */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(var(--border-strong) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-5xl">
        <Hero />
      </div>
    </section>
  );
}
