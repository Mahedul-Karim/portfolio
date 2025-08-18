import React from "react";
import SectionTitle from "../common/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "../common/ScrollReveal";

const projects = [
  {
    name: "CopyForge - AI SaaS",
    image: "/project-1.PNG",
    description:
      "CopyForge is a SaaS platform where a user can generate contents with AI according their needs",
    technologies: ["React", "Tailwind CSS", "Express JS", "MongoDB"],
    liveLink: "https://copy-forge.vercel.app/",
    githubLink: "https://github.com/Mahedul-Karim/copy-forge",
  },
  {
    name: "Tourigo",
    image: "/project-2.PNG",
    description:
      "Tourigo is a tour booking app where user can book their desired tour",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Next JS"],
    liveLink: "https://tourigo.vercel.app/",
    githubLink: "https://github.com/Mahedul-Karim/tourigo",
  },
  {
    name: "EcoNest",
    image: "/project-3.png",
    description:
      "EcoNest is a gardening community platform where people can create their profile and share their gardening tips accross all over the world.",
    technologies: ["React", "Express Js", "MongoDB"],
    liveLink: "https://econest-client.netlify.app/",
    githubLink: "https://github.com/Mahedul-Karim/econest-client",
  },
];

const Projects = () => {
  return (
    <section id="section-projects" className="l-container py-8 md:py-16">
      <SectionTitle text="My Projects" highlight="Projects" />
      <div className="my-4">
        <div className="grid xs:grid-cols-2 gap-2  sm:grid-cols-1 sm:gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} index={index}>
              <Card className="shadow-none py-0 bg-transparent">
                <CardContent
                  className={`px-0 flex h-full justify-between sm:justify-normal flex-col-reverse sm:flex-row gap-2 md:gap-4 lg:gap-8 ${
                    (index + 1) % 2 === 0 && "sm:flex-row-reverse"
                  }`}
                >
                  <div className="flex flex-col justify-center lg:grow sm:w-[50%] lg:w-auto gap-2">
                    <div className="space-y-1">
                      <h2 className="sm:text-lg lg:text-xl font-bold text-white">
                        {project.name}
                      </h2>
                      <p
                        className={`text-xs sm:text-sm lg:text-base text-white/80 leading-relaxed  ${
                          (index + 1) % 2 !== 0 ? "max-w-[690px]" : ""
                        }`}
                      >
                        {project.description}
                      </p>
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-glass rounded-full text-white border border-border px-3 py-1.5 hover:bg-secondary hover:text-black transition-colors duration-300 hover:border-secondary"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <Button asChild className="">
                        <Link
                          href={project.liveLink}
                          target="_blank"
                          className="flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </Link>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        className="text-white border-white/60 bg-transparent"
                      >
                        <Link
                          href={project.githubLink}
                          target="_blank"
                          className="flex items-center justify-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          Source Code
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="sm:w-[50%] lg:w-[450px] rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full rounded-2xl aspect-[16/10] object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
