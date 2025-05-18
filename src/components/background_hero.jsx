import { motion } from "framer-motion";

import Live2DCanvas from "./Live2DModel";

const BackgroundHero = () => {
  return (
    <div>
      <motion.div
        initial={{ translateX: "100vw", opacity: 0 }}
        animate={{ translateX: "60vw", opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute top-0 right-5 w-screen h-screen -z-10"
        style={{
          clipPath: "polygon(100% -200%, 0% 100%, 100% 100%)",
          backgroundImage:
            "linear-gradient(rgba(30,55,103,1), rgba(47,77,133,1))",
          backgroundPosition: "35% 50%",
          backgroundSize: "80%",
        }}
      />

      <motion.div
        initial={{ translateX: "100vw", opacity: 0 }}
        animate={{ translateX: "60vw", opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-0 left-0 w-screen h-screen -z-10"
        style={{
          clipPath: "polygon(100% -200%, 0% 100%, 100% 100%)",
          backgroundImage:
            "linear-gradient(rgba(30,55,103,0.5), rgba(47,77,133,1)),url('/bd.jpg')",
          backgroundPosition: "35% 50%",
          backgroundSize: "80%",
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
      <motion.div
        initial={{ translateX: "100vw", opacity: 0 }}
        animate={{ translateX: "60vw", opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-0 right-50 w-screen h-screen"
        style={{
          clipPath: "polygon(100% 50%, 0% 100%, 100% 100%)",
          backgroundColor: "#2B2B2B",
        }}
      />
      <div className="flex flex-row absolute bottom-20 right-10 gap-4">
        <a
          href="https://vgen.co/yozzun"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-19 !bg-white"
          >
            <img
              src="https://help.vgen.co/hc/article_attachments/13004231445911"
              alt=""
            />
          </motion.button>
        </a>
        <a
          href="https://x.com/Cahyoz9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="!bg-white rounded-lg p-2 w-19 flex items-center justify-center"
          >
            <img src="https://static.cdnlogo.com/logos/x/9/x.svg" alt="X" />
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default BackgroundHero;
