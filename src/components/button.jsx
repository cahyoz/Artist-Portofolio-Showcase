import { motion } from "framer-motion";

export const ButtonHover = ({ text, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      className="cursor-pointer w-[300px] h-[120px] bg-[#2F4D85] text-white text-2xl text-center flex items-center justify-center font-bold rounded-md"
      onClick={onClick}
    >
      {text}
    </motion.div>
  );
};
