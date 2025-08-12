import React from "react";
import SectionTitle from "../common/SectionTitle";
import {  Globe, Server, Wrench } from "lucide-react"
import SkillCard from "./SkillCard";

const Skills = () => {
  

  return (
    <section className="l-container py-8 md:py-16" id="section-skills">
      <SectionTitle text="My Skills" highlight="Skills" />
      <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-2 lg:gap-4">
        <SkillCard
          type="Frontend Development"
          skills={[
            "/html-5.png",
            "/css-3.png",
            "/js.png",
            "/react.png",
            "/next.png"
          ]}
          icon={<Globe />}
        />
        <SkillCard
          type="Backend Development"
          skills={[
            "/html-5.png",
            "/css-3.png",
            "/js.png",
            "/react.png",
            "/redux.png",
          ]}
          icon={<Server />}
        />
        <SkillCard
          type="Tools"
          skills={[
           "/redux.png",
          ]}
          icon={<Wrench />}
        />
      
      </div>
    </section>
  );
};

export default Skills;
