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
    name: "CopyForge - AI SaaS Content Management Platform",
    image: "/project-1.PNG",
    description:
      "CopyForge is an AI-powered content automation platform that orchestrates multi-step generation workflows (blog writing, SEO metadata, LinkedIn posts, and Twitter ) using Google Gemini API, with structured output pipelines, reusable prompt modules, and MongoDB-based persistence.",
    technologies: ["React", "Tailwind CSS", "Express JS", "MongoDB"],
    liveLink: "https://copy-forge.vercel.app/",
    githubLink: "https://github.com/Mahedul-Karim/copy-forge",
  },
  {
    name: "EduTrack — Learning Management System",
    image: "/ed_tech.png",
    description:
      "EduTrack is a full-stack Learning Management System (LMS) designed for selling and managing online courses, with separate experiences for students and instructors. Students can purchase courses, watch lessons, track their progress, and leave reviews, while instructors can create, edit, and manage their courses. The platform also includes a real-time communication system that allows students and instructors to chat directly using Socket.IO. Stripe is integrated for secure course payments, while search, filtering, pagination, lazy loading are implemented to improve usability and performance.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Express JS",
      "MongoDB",
      "React Query, Socket IO, Mongoose",
    ],
    liveLink: "https://copy-forge.vercel.app/",
    githubLink: "https://github.com/Mahedul-Karim/copy-forge",
  },
  {
    name: "TripNest — Tour Management Platform",
    image: "/project-2.PNG",
    description:
      "TripNest is a full-featured tour management platform designed to help users plan, book, and experience seamless journeys across the globe. It connects users, vendors, and admins within a structured ecosystem that simplifies tour discovery, booking, and management.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Next JS"],
    liveLink: "https://tripnest-kappa.vercel.app/",
    githubLink: "https://github.com/Mahedul-Karim/tripnest",
  },
  {
    name: "BunkBEE — Hostel Meal Management Platform",
    image: "/bunkbee.png",
    description:
      "BunkBEE is a hostel meal management platform that helps administrators manage meals and students request, purchase, and review them. Admins can create and serve meals, manage users, and monitor meal-related activities, while students can search and filter meals, subscribe to premium packages, view upcoming meals, like meals, and track their transaction history. Stripe is integrated to handle premium package payments.",
    technologies: [
      "React",
      "Axios",
      "GSAP",
      "Firebase",
      "Shadcn UI",
      "React Hook Form",
      "Zod",
      "@tanstack/react-query",
      "Stripe",
      "React Infinite Scroll Component",
    ],
    liveLink: "https://bunkbee-client.vercel.app/",
    githubLink: "https://github.com/Mahedul-Karim/bunkbee-client",
  },
  {
    name: "EcoNest — Gardening Community Platform",
    image: "/project-3.png",
    description:
      "EcoNest is a gardening community platform where users can create profiles and share gardening tips with a global community. Users can explore tips shared by others, like useful content, and filter tips based on difficulty level. The platform also features a responsive modern slider, dark and light mode, and scroll-reveal animations to create an engaging user experience.",
    technologies: [
      "React",
      "Mongoose",
      "ShadCN UI",
      "SwiperJS",
      "React Awesome Reveal",
      "Lottie React",
      "Firebase",
    ],
    liveLink: "https://econest-client.netlify.app/",
    githubLink: "https://github.com/Mahedul-Karim/econest-client",
  },
];

const Projects = () => {
  return (
    <section id="section-projects" className="l-container py-8">
      <SectionTitle text="My Projects" highlight="Projects" />
      <div className="my-4">
        <div className="grid xs:grid-cols-2 gap-2  sm:grid-cols-1 sm:gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} index={index}>
              <Card className="shadow-none py-0 bg-transparent border-none">
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
                  <div className="sm:w-[50%] lg:w-[450px] rounded-2xl shrink-0">
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
