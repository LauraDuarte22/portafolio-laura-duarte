import Image from "next/image";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <Projects />
      <section>
        <Contact />
      </section>
    </>
  );
}
