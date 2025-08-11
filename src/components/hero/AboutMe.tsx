import React from "react";
import SectionTitle from "../common/SectionTitle";
import { FlipText } from "../common/FlipText";

const AboutMe = () => {
  return (
    <section id="section-about" className="l-container py-8 md:py-16">
      <SectionTitle text="About Me" highlight="Me" />
      <div className="bg-glass border border-border rounded-2xl p-4 mt-4">
        <FlipText>
          I&apos;m Mahedul Karim, a passionate mern stack developer focused on
          crafting modern, performative and responsive web applications. I
          specialize in latest web technologies like HTML, CSS, JavaScript,
          React, Next JS, Typescript, MongoDB, Express JS, Tailwind CSS etc. I have completed full stack level 1 web development course from programming hero.
        </FlipText>
      </div>
    </section>
  );
};

export default AboutMe;
