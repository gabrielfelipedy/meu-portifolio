import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section>
        <Hero />
      </section>

      <Footer />
      
    </main>
  );
}
