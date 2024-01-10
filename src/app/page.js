import Image from "next/image";
import LandingPage from "./LandingPage/LandingPage";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import SkillsPage from "./Skills/SkillsPage";
import Navbar from "./LandingPage/navbar/Navbar";

export default function Page() {
  return (
    <main className="flex flex-col min-h-max items-center justify-center">
      <Navbar />
      <section id="LandingPage">
        <LandingPage />
      </section>
      <section id="PROJECTS">
        <Projects />
      </section>
      <section id="SKILLS">
        <SkillsPage />
      </section>
      <section id="ABOUT">
        <About />
      </section>
      <section id="CONTACT">
        <Contact />
      </section>
    </main>
  );
}
