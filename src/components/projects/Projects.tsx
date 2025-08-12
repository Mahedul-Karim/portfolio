import React from "react";
import SectionTitle from "../common/SectionTitle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "CopyForge - AI SaaS",
    image: "/project-1.png",
    description:
      "CopyForge is a SaaS platform where a user can generate contents with AI according their needs",
    technologies: ["React", "Tailwind CSS", "Express JS", "MongoDB"],
    liveLink: "https://copy-forge.vercel.app/",
    githubLink: "https://github.com/Mahedul-Karim/copy-forge",
  },
  {
    name: "Tourigo",
    image: "/project-2.png",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-glass pt-0 border border-border overflow-clip justify-between"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full aspect-[16/10] object-cover"
                />
                
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-white">
                  {project.name}
                </CardTitle>
                <CardDescription className="text-white/60 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-blue-100 text-blue-800"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    asChild
                    className="flex-1 bg-primary"
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-slate-300 text-white bg-transparent"
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
