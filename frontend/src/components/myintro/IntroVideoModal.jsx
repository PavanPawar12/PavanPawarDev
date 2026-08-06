import { X } from "lucide-react";

export default function IntroVideoModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-[90%] max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -right-4 -top-4 rounded-full bg-white p-2 text-black"
        >
          <X size={20} />
        </button>

        <video
          controls
          autoPlay
          className="w-full rounded-2xl"
        >
         <source src="/PavanPawar_Intro.mp4" type="video/mp4" />
          Your browser does not support video playback.
        </video>
      </div>
    </div>
  );
}