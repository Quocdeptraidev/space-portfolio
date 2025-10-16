"use client";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";




export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center gap-8 px-10 mt-40 w-full z-[20]"
    >
      <div className="flex flex-col items-center text-center gap-4">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box flex items-center justify-center py-[8px] px-[15px] border border-[#7042f88b] opacity-90 rounded-xl"
        >
          <SparklesIcon className="text-[#b49bff] mr-3 h-6 w-6" />
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          About me
          </h1>
        </motion.div>
      </div>

      {/* --- LEFT TEXT SECTION (3 boxes) --- */}
      <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch w-full max-w-[1100px]">
        {/* --- OBJECTIVE --- */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(168,85,247,0.6)",
            borderColor: "rgba(168,85,247,0.8)",
          }}
          transition={{ duration: 0.3 }}
          className="flex-1 border border-cyan-400/50 rounded-2xl p-6 backdrop-blur-md bg-white/5 
                     hover:bg-white/10 transition-all duration-300 cursor-pointer 
                     shadow-[0_0_10px_rgba(56,189,248,0.2)]"
        >
          <p className="text-lg text-cyan-200">
            🎯 <span className="font-semibold text-white">Objective</span><br />
            I aspire to become a skilled Full Stack Developer, proficient in both backend and frontend technologies. My goal is to create modern, high-performance, and user-centric web applications that are scalable and maintainable.
          </p>
        </motion.div>

        {/* --- CURRENT FOCUS --- */}
        <motion.div
          variants={slideInFromLeft(0.7)}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(34,211,238,0.6)",
            borderColor: "rgba(34,211,238,0.8)",
          }}
          transition={{ duration: 0.3 }}
          className="flex-1 border border-purple-400/50 rounded-2xl p-6 backdrop-blur-md bg-white/5 
                     hover:bg-white/10 transition-all duration-300 cursor-pointer 
                     shadow-[0_0_10px_rgba(147,51,234,0.3)]"
        >
          <p className="text-lg text-purple-200">
            🔹 <span className="font-semibold text-white">Current Focus</span><br />
            I am currently seeking an entry-level Backend Developer role where I can apply my knowledge of Java, Spring Boot, and RESTful APIs. I aim to contribute to real-world projects, strengthen my system design abilities, and grow through collaboration within professional engineering teams.
          </p>
        </motion.div>

        {/* --- FUTURE GOALS --- */}
        <motion.div
          variants={slideInFromLeft(0.9)}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(236,72,153,0.6)",
            borderColor: "rgba(236,72,153,0.8)",
          }}
          transition={{ duration: 0.3 }}
          className="flex-1 border border-pink-400/50 rounded-2xl p-6 backdrop-blur-md bg-white/5 
                     hover:bg-white/10 transition-all duration-300 cursor-pointer 
                     shadow-[0_0_10px_rgba(236,72,153,0.3)]"
        >
          <p className="text-lg text-pink-200">
            🚀 <span className="font-semibold text-white">Future Goals</span><br />
            In the long term, I aim to master microservices architecture, cloud platforms, and modern frontend frameworks. My vision is to develop secure, scalable, and impactful applications that address real-world challenges and deliver meaningful user experiences.
          </p>
        </motion.div>
      </div>

      {/* --- RIGHT IMAGE SECTION --- */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden lg:flex justify-center items-center"
      >
        {/* <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        /> */}
      </motion.div>
    </motion.div>
  );
};
