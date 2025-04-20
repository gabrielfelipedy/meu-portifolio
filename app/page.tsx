import Presentation from "@/components/Presentation";
import Projects from "@/components/Projects";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <Presentation />
      </section>

      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>

    </main>
  );
}