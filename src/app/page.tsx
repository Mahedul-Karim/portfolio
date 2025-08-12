import Contact from "@/components/Contact";
import AboutMe from "@/components/hero/AboutMe";
import Banner from "@/components/hero/Banner";
import Resume from "@/components/hero/Resume";
import Skills from "@/components/hero/Skills";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutMe />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
    </>
  );
}
