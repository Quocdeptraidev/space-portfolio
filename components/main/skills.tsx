"use client";

import { motion, useAnimationControls } from "framer-motion";
import {
  FRONTEND_MOBILE_SKILL,
  BACKEND_SKILL,
  MICROSERVICE_SKILL,
  API_CLOUD_SKILL,
  TOOLS_SKILL,
} from "@/constants";
import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import { useEffect } from "react";

const SkillCategory = ({
  title,
  skills,
}: {
  title: string;
  skills: readonly {
    skill_name: string;
    image: string;
    width: number;
    height: number;
  }[];
}) => (
  <div className="flex flex-col items-center w-full mb-10">
    <motion.h3
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-2xl font-semibold mb-5 text-white tracking-wide"
    >
      {title}
    </motion.h3>

    <div className="flex flex-row justify-center flex-wrap gap-6 mt-4">
      {skills.map((skill, i) => (
        <SkillDataProvider
          key={skill.skill_name}
          src={skill.image}
          name={skill.skill_name}
          width={skill.width}
          height={skill.height}
          index={i}
        />
      ))}
    </div>
  </div>
);

export const Skills = () => {
  const controls = useAnimationControls(); // Shared controls cho icons

  useEffect(() => {
    // Sau 1s (khi SkillText done), trigger icons sequence
    const timer = setTimeout(() => controls.start("sequence"), 1000);
    return () => clearTimeout(timer);
  }, [controls]);

  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center relative overflow-hidden py-20"
    >
      <SkillText />

      <SkillCategory title="Frontend & Mobile" skills={FRONTEND_MOBILE_SKILL} />
      <SkillCategory title="Backend" skills={BACKEND_SKILL} />
      <SkillCategory title="Microservices" skills={MICROSERVICE_SKILL} />
      <SkillCategory title="API & Cloud" skills={API_CLOUD_SKILL} />
      <SkillCategory title="Tools" skills={TOOLS_SKILL} />

      {/* Background video */}
      <div className="w-full h-full absolute z-[-10] opacity-30 flex items-center justify-center bg-cover">
        <video
          className="w-full h-auto"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
        >
          <source src="/videos/skills-bg.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
};
