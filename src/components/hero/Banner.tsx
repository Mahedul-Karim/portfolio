import React from "react";
import { HyperText } from "../common/Hypertext";
import { FlipText } from "../common/FlipText";

const Banner = () => {
  return (
    <section className="min-h-dvh flex items-center" id="section-1">
      <div className="text-white l-container grid grid-cols-[0.6fr_0.4fr] gap-4">
        <div className="flex flex-col">
          <h1 className="text-5xl text-white font-extrabold max-w-[500px] leading-[1.1]">
            <span className="text-2xl mb-2">Hello!</span>
            <br /> I&apos;m{" "}
            <HyperText startOnView animateOnHover={false}>
              Full Stack Developer
            </HyperText>
          </h1>
          <FlipText>
            I&apos;m Mahedul Karim, a passionate full stack developer focused on
            crafting modern, performative and responsive web applications. I
            specialize in latest web technologies like HTML, CSS, JavaScript,
            React, Next JS, Typescript, MongoDB, Tailwind CSS etc.
          </FlipText>
        </div>
        <div className="bg-glass border border-border rounded-2xl h-max"></div>
      </div>
    </section>
  );
};

export default Banner;
