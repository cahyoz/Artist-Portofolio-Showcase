import { easeIn, motion } from "framer-motion";

export const ButtonHover = ({ text, onClick }) => {
  return (
    <motion.div
      initial={{ y: 380 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="cursor-pointer w-[300px] h-[120px] bg-[#2F4D85] text-white text-2xl text-center flex items-center justify-center font-bold rounded-md"
      onClick={onClick}
    >
      {text}
    </motion.div>
  );
};
