import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar/Navbar";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import ComingSoon from "@/pages/ComingSoon";
import ProjectDetails from "@/pages/ProjectDetails";
// import Resume from "./components/resume/Resume";
import Resume from "@/pages/Resume";
import { BlogSection } from "@/sections/BlogSection";

/**
 * Scrolls to top on route change, or to a hash target (e.g. "/#projects")
 * once the destination page has mounted.
 */
function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      requestAnimationFrame(() => {
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 80);
      });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    }
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <ScrollManager />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ComingSoon title="Projects" />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/blog" element={<BlogSection title="Journal" />} />
          <Route path="/blog/:slug" element={<ComingSoon title="Post" />} />
          <Route path="/resume" element={<Resume title="Resume" />} />
          <Route path="/contact" element={<ComingSoon title="Contact" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
