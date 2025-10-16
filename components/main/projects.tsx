"use client";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS, PERSONAL_PROJECTS } from "@/constants";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";


export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <div className="flex flex-col items-center text-center gap-4">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box flex items-center justify-center py-[8px] px-[15px] border border-[#7042f88b] opacity-90 rounded-xl"
        >
          <SparklesIcon className="text-[#b49bff] mr-3 h-6 w-6" />
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          My Projects
          </h1>
        </motion.div>
      </div>

      <h2 className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mt-20 mb-10">
        Outsource Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-10 px-6">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            tags={project.tags}
            demoLink={project.demoLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>

      <h2 className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-10 mt-20">
        Personal Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-10 px-6">
        {PERSONAL_PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            tags={project.tags}
            demoLink={project.demoLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};
