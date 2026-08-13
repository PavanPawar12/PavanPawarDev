import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PageTransition } from "@/components/ui/PageTransition";

export default function ComingSoon({ title }) {
  return (
    <PageTransition>
      <title>{`${title} — Portfolio`}</title>
      <div className="flex min-h-screen flex-col items-start justify-center px-6 sm:px-10 lg:px-16">
        <span className="font-mono-label text-xs text-[var(--text-faint)]">~/{title.toLowerCase()}</span>
        <h1 className="mt-3 font-display text-4xl font-medium text-[var(--text)]">
          {title}
        </h1>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          This page is queued up in the build order and isn't ready yet.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 font-mono-label text-sm text-[var(--accent)]"
        >
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>
      </div>
    </PageTransition>
  );
}