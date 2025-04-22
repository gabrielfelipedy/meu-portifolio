import Presentation from "@/components/Presentation";
import Projects from "@/components/Projects";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section id="home" className="scroll-mt-20">
        <Presentation />
      </section>

      <section id="projects">
        <Projects />
      </section>

    </main>
  );
}