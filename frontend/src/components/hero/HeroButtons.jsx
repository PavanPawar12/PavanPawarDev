import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  PlayCircle,
  FileText,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

import { useState } from "react";
import IntroVideoModal from "@/components/myintro/IntroVideoModal";

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export function HeroButtons() {
  const [openVideo, setOpenVideo] = useState(false);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.div variants={item} className="flex flex-col gap-4">

      {/* Main Buttons */}
     <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
  
  {/* Resume */}
  <Button
    asChild
    size="lg"
    className="
      group
      relative
      h-12
      w-full
      overflow-hidden
      rounded-xl
      border
      border-black
      bg-black
      px-6
      text-white
      shadow-[0_4px_14px_rgba(0,0,0,0.15)]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-[0_8px_25px_rgba(0,0,0,0.20)]
      dark:border-white
      dark:bg-white
      dark:text-black
      dark:shadow-[0_4px_14px_rgba(255,255,255,0.08)]
      dark:hover:shadow-[0_8px_25px_rgba(255,255,255,0.12)]
    "
  >
    <a href={site.resumeUrl} download>
      <span className="flex items-center gap-2.5">
        <Download
          className="
            h-5
            w-5
            transition-transform
            duration-300
            group-hover:translate-y-0.5
          "
        />

        <span className="font-medium tracking-wide">
          Download Resume
        </span>
      </span>
    </a>
  </Button>


  {/* Get In Touch */}
  <Button
    size="lg"
    variant="outline"
    onClick={() =>
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      })
    }
    className="
      group
      h-12
      w-full
      rounded-xl
      border
      border-[var(--border)]
      bg-[var(--surface)]
      px-6
      text-[var(--foreground)]
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:bg-[var(--surface)]
      hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]
      dark:hover:shadow-[0_8px_25px_rgba(255,255,255,0.08)]
    "
  >
    <span className="flex items-center gap-2.5">
      <Send
        className="
          h-5
          w-5
          transition-transform
          duration-300
          group-hover:-translate-y-0.5
          group-hover:translate-x-0.5
        "
      />

      <span className="font-medium tracking-wide">
        Get in Touch
      </span>
    </span>
  </Button>

</div>

      {/* Intro Video */}
      <button
        onClick={() => setOpenVideo(true)}
        className="
          flex
          items-center
          gap-2
          text-sm
          font-medium
          text-[var(--accent)]
          hover:underline
        "
      >
        <PlayCircle className="h-5 w-5" />
        Watch My Introduction (60 sec)
      </button>

      <IntroVideoModal
        open={openVideo}
        onClose={() => setOpenVideo(false)}
      />

    </motion.div>
  );
}