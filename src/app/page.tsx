import Contact from "@/components/Contact";
import AboutMe from "@/components/hero/AboutMe";
import Banner from "@/components/hero/Banner";
import Resume from "@/components/hero/Resume";
import Skills from "@/components/hero/Skills";
import Projects from "@/components/projects/Projects";
import ScrollIndicator from "@/components/common/ScrollIndicator";

export default function Home() {
  return (
    <>
      <ScrollIndicator />
      <Banner />
      <AboutMe />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
    </>
  );
}
