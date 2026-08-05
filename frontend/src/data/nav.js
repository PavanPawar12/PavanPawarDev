/**
 * Each nav item can either:
 *  - scroll to a section on the home page (sectionId set), or
 *  - navigate to its own route (path set, sectionId omitted)
 *
 * `file` is the mono "path" label used as a small eyebrow next to the
 * link — a nod to the editor-file-tree identity of the nav.
 */
export const navLinks = [
  { label: "Builds", file: "builds", sectionId: "projects", path: "/projects" },
  // { label: "Journal", file: "journal", sectionId: "blog", path: "/blog" },
  { label: "Journal", file: "journal", sectionId: null, path: "/blog" },
  { label: "Resume", file: "resume", sectionId: null, path: "/resume" },
];
