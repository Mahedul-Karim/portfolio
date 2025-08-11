"use client";

import React, { useEffect, useState } from "react";
import SectionTitle from "../common/SectionTitle";
import { OrbitingCircles } from "../common/OrbittingCircles";
import Image from "next/image";

const Skills = () => {
  const [radius, setRadius] = useState(200);
  const [innerRadius, setInnerRadius] = useState(140);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width > 640) {
        setRadius(200);
        setInnerRadius(140);
      } else if (width > 400 && width <= 640) {
        setRadius(160);
        setInnerRadius(100);
      } else if (width <= 400) {
        setRadius(120);
        setInnerRadius(60);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="l-container py-8 md:py-16" id="section-skills">
      <SectionTitle text="My Skills" highlight="Skills" />
      <div className="mt-4 relative w-full h-[300px] xs:h-[450px] overflow-hidden flex items-center justify-center flex-col">
        <OrbitingCircles radius={radius}>
          <Image src={"/react.png"} alt="" width={40} height={40} />
          <Image
            src={"/next.png"}
            alt=""
            width={40}
            height={40}
            className="invert"
          />
          <Image src={"/typescript.png"} alt="" width={40} height={40} />
          <Image
            src={"/express.png"}
            alt=""
            width={40}
            height={40}
            className="invert"
          />
          <Image
            src={"/node.png"}
            alt=""
            width={40}
            height={40}
          />
          <Image
            src={"/mongo.png"}
            alt=""
            width={40}
            height={40}
          />
          <Image
            src={"/redux.png"}
            alt=""
            width={40}
            height={40}
          />
          <Image
            src={"/react-query.png"}
            alt=""
            width={40}
            height={40}
          />
          <Image
            src={"/shadcn.png"}
            alt=""
            width={40}
            height={40}
            className="opacity-0"
          />
        </OrbitingCircles>
        <OrbitingCircles radius={innerRadius}>
          <Image src={"/html-5.png"} alt="" width={40} height={40} />
          <Image src={"/css-3.png"} alt="" width={40} height={40} />
          <Image src={"/js.png"} alt="" width={40} height={40} />
          <Image src={"/tailwind.png"} alt="" width={40} height={40} />
        </OrbitingCircles>
      </div>
    </section>
  );
};

export default Skills;
