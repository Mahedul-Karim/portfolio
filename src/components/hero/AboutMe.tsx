import React from "react";
import SectionTitle from "../common/SectionTitle";
import { FlipText } from "../common/FlipText";

const AboutMe = () => {
  return (
    <section id="section-about" className="l-container py-8 md:py-16">
      <SectionTitle text="About Me" highlight="Me" />
      <div className="bg-glass border border-border rounded-2xl p-4 mt-4">
        <FlipText>
          My programming journey started in 2023 when I started learning html, css from YouTube tutorials, W3Schools.I built some small landing pages with them that made me more interested in coding. I had the urge to learn how to build a beautiful website from scratch. Then I started exploring about web development and starts learning JavaScript, the brain of a website. After building some more projects with html, css and javascript, I switched to react, a javascript library that helps building interactive web apps more easily. Overtime, I increased my skills to the MERN stack and developed many projects. At 2024, I learned about programming hero and enrolled in their full stack web development course and completed the course with certification.
          I enjoy building application that solve real world problems and has a modern, visually appealing UI, and both user friendly and responsive accross all devices. I also like to explore and learn new technologies everyday and stay up to date with the constantly evolving tech world.
          Coding is my passion rather than a hobby. Other then coding I like to travel.
        </FlipText>
      </div>
    </section>
  );
};

export default AboutMe;
