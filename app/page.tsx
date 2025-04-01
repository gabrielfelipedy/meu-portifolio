import Brief from "@/components/Brief";
import Presentation from "@/components/Presentation";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="mt-20">
        <Presentation />
      </section>

      <section className="mt-20">
        <Brief />
      </section>

    </main>
  );
}
