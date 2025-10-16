import { motion } from "framer-motion";

type InfoCardProps = {
  title: string;
  icon: string;
  children: React.ReactNode;
  index: number;
  borderColorClass: string;
  textColorClass: string;
  shadowColorClass: string;
};

export const InfoCard = ({
  title,
  icon,
  children,
  index,
  borderColorClass,
  textColorClass,
  shadowColorClass,
}: InfoCardProps) => {
  const cardVariants = {
    // Trạng thái animation mặc định, chạy liên tục
    animate: {
      scale: [1, 1.02, 1],
      rotate: [0, 0.5, -0.5, 0.5, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    // Trạng thái khi hover - đứng im và nổi bật
    hover: {
      scale: 1.08,
      y: -10,
      boxShadow: `0 0 40px ${shadowColorClass}`,
      rotate: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      animate="animate"
      whileHover="hover"
      className={`flex-1 p-6 rounded-2xl border ${borderColorClass} bg-black/30 backdrop-blur-xl cursor-pointer transition-all duration-300`}
    >
      <h3 className={`text-xl font-bold mb-2 ${textColorClass}`}>{icon} {title}</h3>
      <p className="text-gray-300 text-base">{children}</p>
    </motion.div>
  );
};
