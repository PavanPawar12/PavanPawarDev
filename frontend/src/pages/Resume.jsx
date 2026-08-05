import Footer from "@/components/footer/Footer";
import { PageTransition } from "@/components/ui/PageTransition";
import { Download } from "lucide-react";

export default function Resume() {
  return (
    <PageTransition>
      <title>Pavan Pawar | Resume</title>

      <section className="min-h-screen px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-4xl font-bold">
              Resume
            </h1>

            <a
              href="/PavanPawar_CV.pdf"
              download
              className="flex items-center gap-2 rounded-lg border px-5 py-3 hover:bg-neutral-900"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border">
            <iframe
              src="/PavanPawar_CV.pdf"
              title="Resume"
              className="h-[900px] w-full"
            />
          </div>

        </div>
        <Footer/>
      </section>
    </PageTransition>
  );
}