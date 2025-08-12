import React from "react";
import SectionTitle from "../common/SectionTitle";
import { Globe, Server, Wrench } from "lucide-react";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section className="l-container py-8 md:py-16" id="section-skills">
      <SectionTitle text="My Skills" highlight="Skills" />
      <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-2 lg:gap-4">
        <SkillCard
          type="Frontend Development"
          skills={[
            {
              img: "/html-5.png",
              isInverted: false,
            },
            {
              img: "/css-3.png",
              isInverted: false,
            },
            {
              img: "/js.png",
              isInverted: false,
            },
            {
              img: "/react.png",
              isInverted: false,
            },
            {
              img: "/next.png",
              isInverted: true,
            },
          ]}
          icon={<Globe />}
        />
        <SkillCard
          type="Backend Development"
          skills={[
            {
              img: "/express.png",
              isInverted: true,
            },
            {
              img: "/mongo.png",
              isInverted: false,
            },
            {
              img: "/node.png",
              isInverted: false,
            },
            {
              img: "/typescript.png",
              isInverted: false,
            },
          ]}
          icon={<Server />}
        />
        <SkillCard
          type="Tools"
          skills={[
            {
              img: "/redux.png",
              isInverted: false,
            },
            {
              img: "/react-query.png",
              isInverted: false,
            },
            {
              img: "/firebase.png",
              isInverted: false,
            },
          ]}
          icon={<Wrench />}
        />
      </div>
    </section>
  );
};

export default Skills;
