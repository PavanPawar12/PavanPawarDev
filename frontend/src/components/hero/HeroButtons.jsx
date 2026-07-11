import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export function HeroButtons() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      variants={item}
      className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center"
    >
      <Button
        size="lg"
        onClick={scrollToProjects}
        className="group w-full sm:w-auto"
      >
        View my work
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </Button>

      <Button
        asChild
        size="lg"
        variant="outline"
        className="w-full sm:w-auto"
      >
        <a href={site.resumeUrl} download>
          <Download className="h-4 w-4" />
          Download resume
        </a>
      </Button>
    </motion.div>
  );
}
