import React from "react";
import SectionTitle from "../common/SectionTitle";
import Education from "../resume/Education";

const educations = [
  {
    degree: "Bachelor of Science in Physics",
    university: "National University",
    period: "2021-Present",
    gpa:""
  },
  {
    degree: "Higher Secondary Certificate Examination",
    university: "Cumilla Board",
    period: "2018-2020",
    gpa: "5.00",
  },
  {
    degree: "Secondary School Certificate Examination",
    university: "Cumilla Board",
    period: "2016-2018",
    gpa: "4.94",
  },
];

const Resume = () => {
  return (
    <section id="section-resume" className="l-container py-8 md:py-16">
      <SectionTitle text="My Resume" highlight="Resume" />
      <div className="my-4">
        <h2 className="mb-4 text-white/80 font-bold text-3xl">Education</h2>
        <Education educations={educations} />
      </div>
    </section>
  );
};

export default Resume;
