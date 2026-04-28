import React from "react";
import SectionTitle from "../common/SectionTitle";
import { FlipText } from "../common/FlipText";

const AboutMe = () => {
  return (
    <section id="section-about" className="l-container py-8 md:py-16">
      <SectionTitle text="About Me" highlight="Me" />
      <div className="bg-glass border border-border rounded-2xl p-4 mt-4">
        <FlipText>
          I&apos;m Mahedul Karim, a passionate full stack developer focused on
          crafting modern, performative and responsive web applications. I
          specialize in latest web technologies like HTML, CSS, JavaScript,
          React, Next JS, Typescript, MongoDB, Express JS, Tailwind CSS etc. I
          enjoy building application that solve real world problems and has a
          modern, visually appealing UI, and both user friendly and responsive
          accross all devices. I also like to explore and learn new technologies
          everyday and stay up to date with the constantly evolving tech world.
        </FlipText>
      </div>
    </section>
  );
};

export default AboutMe;
