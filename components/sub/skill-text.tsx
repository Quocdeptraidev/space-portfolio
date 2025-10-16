"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <div className="flex flex-col items-center text-center gap-4">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box flex items-center justify-center py-[8px] px-[15px] border border-[#7042f88b] opacity-90 rounded-xl"
        >
          <SparklesIcon className="text-[#b49bff] mr-3 h-6 w-6" />
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          My Skills
          </h1>
        </motion.div>
      </div>

      {/* <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[28px] md:text-[32px] text-white font-medium mt-3 text-center mb-2"
      >
        Making apps with modern technologies.
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="italic text-[18px] text-gray-300 mb-10 text-center"
      >
        Never miss a task, deadline or idea.
      </motion.div> */}
    </div>
  );
};
