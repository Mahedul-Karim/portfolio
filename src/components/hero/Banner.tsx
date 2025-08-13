import React from "react";
import { HyperText } from "../common/Hypertext";
import ProfileCard from "./ProfileCard";
import { Download } from "lucide-react";
import { Button } from "../ui/button";
import { FlipText } from "../common/FlipText";

const Banner = () => {
  return (
    <section className="min-h-dvh flex items-center" id="section-banner">
      <div className="text-white l-container grid md:grid-cols-[0.6fr_0.4fr] gap-4 py-20">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl xs:text-5xl text-white font-extrabold max-w-[500px] leading-[1.1]">
            <span className="text-lg mb-2">Hi! I&apos;m Mahedul Karim a</span>
            <br />
            <HyperText startOnView animateOnHover>
              MERN Stack Developer
            </HyperText>
          </h1>
          <FlipText>
            I&apos;m Mahedul Karim, a passionate mern stack developer focused on
            crafting modern, performative and responsive web applications. I
            specialize in latest web technologies like HTML, CSS, JavaScript,
            React, Next JS, Typescript, MongoDB, Express JS, Tailwind CSS etc.
          </FlipText>
          <div className="mt-4">
            <Button className="glare-hover rounded-full hover:bg-primary">
              <Download /> Download Resume
            </Button>
          </div>
        </div>
        <div>
          <ProfileCard />
        </div>
      </div>
    </section>
  );
};

export default Banner;
