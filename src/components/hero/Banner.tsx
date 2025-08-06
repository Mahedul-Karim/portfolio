import React from "react";
import { HyperText } from "../common/Hypertext";

const Banner = () => {
  return (
    <section className="min-h-dvh flex items-center" id="section-1">
      <div className="text-white l-container grid grid-cols-[0.7fr_0.3fr] gap-4">
        <div className="flex flex-col">
          <h1 className="text-5xl text-white font-bold max-w-[500px] leading-[1.1]">
            <span className="text-2xl mb-2">Hello!</span><br /> I&apos;m{" "}
            <HyperText startOnView>Full Stack Developer</HyperText>
            {/* <span className="text-aurora">Full Stack Developer</span> */}
          </h1>
        </div>
        <div className="bg-glass border border-border rounded-2xl h-max"></div>
      </div>
    </section>
  );
};

export default Banner;
