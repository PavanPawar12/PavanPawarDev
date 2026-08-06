// import { motion } from "framer-motion";
// import { ArrowRight, Download } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { site } from "@/data/site";

// const item = {
//   hidden: { opacity: 0, y: 14 },
//   visible: { opacity: 1, y: 0 },
// };

// export function HeroButtons() {
//   const scrollToProjects = () => {
//     document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <motion.div
//       variants={item}
//       className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center"
//     >
//       <Button
//         size="lg"
//         onClick={scrollToProjects}
//         className="group w-full sm:w-auto"
//       >
//         View my work
//         <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
//       </Button>

//       <Button
//         asChild
//         size="lg"
//         variant="outline"
//         className="w-full sm:w-auto"
//       >
//         <a href={site.resumeUrl} download>
//           <Download className="h-4 w-4" />
//           Download resume
//         </a>
//       </Button>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { ArrowRight, Download, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

import { useState } from "react";

// import IntroVideoModal from "@/components/IntroVideoModal";
import IntroVideoModal from "@/components/myintro/IntroVideoModal";

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export function HeroButtons() {
  const [openVideo, setOpenVideo] = useState(false);
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.div variants={item} className="flex flex-col gap-4">
      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
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
            Download Resume
          </a>
        </Button>
      </div>

      {/* Intro Video */}
      <button
        onClick={() => setOpenVideo(true)}
        className="flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:underline"
      >
        <PlayCircle className="h-5 w-5" />
        Watch My Introduction (60 sec)
      </button>

      <IntroVideoModal open={openVideo} onClose={() => setOpenVideo(false)} />
    </motion.div>
  );
}
