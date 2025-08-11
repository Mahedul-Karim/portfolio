import React from "react";
import { HyperText } from "../common/Hypertext";
import ProfileCard from "./ProfileCard";
import { Download } from "lucide-react";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <section className="min-h-dvh flex items-center">
      <div className="text-white l-container grid md:grid-cols-[0.6fr_0.4fr] gap-4 py-16">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl xs:text-5xl text-white font-extrabold max-w-[500px] leading-[1.1]">
            <span className="text-2xl mb-2">Hello!</span>
            <br /> I&apos;m{" "}
            <HyperText startOnView animateOnHover={false}>
              MERN Stack Developer
            </HyperText>
          </h1>
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
