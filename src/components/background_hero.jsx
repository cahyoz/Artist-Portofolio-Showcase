import { motion } from "framer-motion";

import Live2DCanvas from "./Live2DModel";

const BackgroundHero = () => {
  return (
    <div>
      <motion.div
        initial={{ translateX: "100vw", opacity: 0 }}
        animate={{ translateX: "60vw", opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-0 left-0 w-screen h-screen -z-10"
        style={{
          clipPath: "polygon(100% -200%, 0% 100%, 100% 100%)",
          backgroundColor: "#2F4D85",
        }}
      />

      <motion.div
        initial={{ translateX: "90vw", opacity: 0.5 }}
        animate={{ translateX: "60vw", opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 30,
          damping: 10,
          mass: 2,
        }}
        className="absolute top-0 left-0 h-screen"
      >
        <Live2DCanvas />
      </motion.div>
      {/* add a triangle foreground here */}
    </div>
  );
};

export default BackgroundHero;
