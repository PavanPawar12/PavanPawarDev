import { useState } from "react";
import { FolderGit2 } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Renders `src` if it loads; otherwise falls back to a themed gradient
 * panel so the layout never shows a broken-image icon before real
 * screenshots are dropped into /public.
 */
export function ProjectMedia({ src, alt, accent = "var(--accent)", className }) {
  const [errored, setErrored] = useState(false);

  if (errored || !src) {
    return (
      <div
        className={cn(
          "flex h-full w-full items-center justify-center",
          className
        )}
        style={{
          background: `linear-gradient(135deg, ${accent}26, var(--surface-2) 65%)`,
        }}
      >
        <FolderGit2 className="h-10 w-10 opacity-30" style={{ color: accent }} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
      loading="lazy"
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
