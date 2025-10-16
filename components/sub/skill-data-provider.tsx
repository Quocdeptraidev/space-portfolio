import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  const controls = useAnimationControls();

  // Trigger sequence when in view
  useEffect(() => {
    if (inView && !shouldReduceMotion) {
      // Bounce animation
      controls.start({
        scale: [1, 1.2, 0.9, 1],
        transition: { duration: 0.6, ease: "easeInOut" }
      }).then(() => {
        // Glow effect after bounce
        controls.start({
          opacity: [0.8, 1],
          boxShadow: ["0 0 0 rgba(99,102,241,0)", "0 0 20px rgba(99,102,241,0.6)"],
          transition: { duration: 0.4 }
        });
      });
    }
  }, [inView, controls, shouldReduceMotion]);

  // Variants cho name reveal
  const nameVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1 + 1.0, duration: 0.3 },
    },
  };

  // Hover config với spring physics (type-safe)
  const hoverConfig = shouldReduceMotion
    ? {}
    : {
        scale: 1.1,
        rotate: 5,
        transition: { type: "spring", stiffness: 200, damping: 15 } as const, // Damping cho bounce tự nhiên
      };

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col items-center justify-center group cursor-pointer"
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Chỉ animate này cho parent (stagger fade/y)
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
        }),
      }}
      custom={index}
    >
      <motion.div
        animate={controls}
        whileHover={hoverConfig}
        className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/10"
      >
        <Image
          src={`/skills/${src}`}
          width={width}
          height={height}
          alt={name}
          className="select-none"
        />
      </motion.div>

      <motion.span
        variants={nameVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="absolute bottom-[-25px] text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        {name}
      </motion.span>
    </motion.div>
  );
};