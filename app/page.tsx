import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        {/* 1 — Scrolly sequence animation */}
        <ScrollyCanvas />

        {/* 2 — About */}
        <About />

        {/* 3 — Projects */}
        <Projects />

        {/* 4 — Skills */}
        <Skills />

        {/* 5 — Contact / Footer */}
        <Contact />
      </main>
    </>
  );
}
