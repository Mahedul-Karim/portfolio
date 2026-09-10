"use client";

import React from "react";
import { HyperText } from "../common/Hypertext";
import ProfileCard from "./ProfileCard";
import { Download } from "lucide-react";
import { Button } from "../ui/button";
import { FlipText } from "../common/FlipText";

const Banner = () => {
  return (
    <section className="min-h-dvh flex items-center" id="section-banner">
      <div className="text-white l-container grid md:grid-cols-[0.6fr_0.4fr] gap-4 pb-20 pt-30">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl xs:text-5xl lg:text-6xl text-white font-extrabold  leading-[1.1]">
            <span className="text-xl sm:text-2xl mb-2">Hi, 👋! This is </span>
            <br />
            <HyperText startOnView animateOnHover>
              Mahedul Karim
            </HyperText>
          </h1>
          <div className="max-w-[450px]">
            <FlipText className="text-base sm:text-lg">
              An enthusiastic fullstack web developer who loves to create
              exceptional web solutions
            </FlipText>
          </div>
          <div className="mt-4">
            <Button
              className="glare-hover rounded-full hover:bg-primary"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/resume.pdf";
                link.download = "Mahedul-Karim-Resume.pdf";
                link.click();
              }}
            >
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
