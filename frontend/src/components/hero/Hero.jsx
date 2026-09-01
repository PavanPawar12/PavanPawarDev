import { HeroContent } from "@/components/hero/HeroContent";
import { HeroImage } from "@/components/hero/HeroImage";




/**
 * Mobile: image first (top), content below, everything left-aligned.
 * Desktop (lg+): content on the left, image on the right, side by side.
 */
export function Hero() {
  return (
    <div
      className="flex w-full flex-col-reverse items-start gap-10
                 lg:flex-row lg:items-center lg:justify-between lg:gap-12"
    >
      <HeroContent />
      <HeroImage />
    </div>
  );
}
