import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PageTransition } from "@/components/ui/PageTransition";

export default function NotFound() {
  return (
    <PageTransition>
      <title>404 — Page not found</title>
      <div className="flex min-h-screen flex-col items-start justify-center px-6 sm:px-10 lg:px-16">
        <span className="font-mono-label text-sm text-[var(--accent)]">Error 404</span>
        <h1 className="mt-3 font-display text-5xl font-medium text-[var(--text)]">
          Route not found
        </h1>
        <p className="mt-3 max-w-md text-sm text-[var(--text-muted)]">
          Nothing resolves at this path. Check the URL, or head back to a page that exists.
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
