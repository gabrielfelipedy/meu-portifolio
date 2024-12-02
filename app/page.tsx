import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="mt-20">
        <Hero />
      </section>

      <Footer />
      
    </main>
  );
}
