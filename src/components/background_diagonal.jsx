import { motion } from "framer-motion";

export const DiagonalBackground = () => {
  return (
    <motion.div
      className="absolute inset-0 -z-10"
      initial={{ backgroundPosition: "100% 0%" }}
      animate={{ backgroundPosition: "50% 80%" }}
      transition={{
        duration: 2,
        ease: "easeOut",
        type: "spring",
        bounce: 0.2,
      }}
      style={{
        background:
          "linear-gradient(45deg, transparent 50%, rgba(0, 0, 0, 1) 50%)",
        backgroundSize: "200% 200%",
      }}
    />
  );
};
