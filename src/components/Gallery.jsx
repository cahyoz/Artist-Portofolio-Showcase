import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const portraitArt = [
    "https://pbs.twimg.com/media/GTEorHlbkAEu37k?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/GQzfWujaoAEvAFN?format=jpg&name=large",
    "https://pbs.twimg.com/media/GLRtiMbaAAELuCo?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/GEhMq9JasAAYa_5?format=jpg&name=medium",
    "https://pbs.twimg.com/media/GAWGJylbEAAjgf6?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/F508iw1aEAAZUtw?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/F5G-qwSawAAwPKr?format=jpg&name=4096x4096",
  ];

  const landscapeArt = [
    "https://pbs.twimg.com/media/GE_2qskbsAAJcg8?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/GAz7dM6bQAAGyym?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/GqaDwQgW8AANLi_?format=jpg&name=large",
    "https://pbs.twimg.com/media/GqaDwQcXsAAn7wW?format=jpg&name=large",
  ];

  const [showPortrait, setShowPortrait] = useState(true);
  const [currentImage, setCurrentImage] = useState("");

  const thumbnailClick = (image) => {
    setCurrentImage(image);
  };
  // Animation variants for container
  const containerVariants = {
    expand: { width: "auto" },
    collapse: { width: "auto" },
  };

  // Animation variants for thumbnails panel
  const thumbnailsVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      x: 100,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.3,
      },
    },
  };

  return (
    <div className="flex flex-row-reverse h-screen w-screen">
      <div
        layout="position"
        className="flex flex-row h-full"
        variants={containerVariants}
        transition={{ duration: 0.3 }}
      >
        <button
          layout="position"
          onClick={() => setShowPortrait(!showPortrait)}
          className="px-2 py-1 bg-blue-500 text-white rounded z-10"
        >
          {showPortrait ? " <" : ">"}
        </button>

        <AnimatePresence initial="false">
          {showPortrait ? (
            <motion.div
              variants={thumbnailsVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-auto"
            >
              <div
                key="landscape"
                className="h-full w-40 bg-amber-300 overflow-hidden"
              >
                {landscapeArt.map((src, index) => (
                  <motion.img
                    key={index}
                    src={src}
                    alt="thumbnail"
                    onClick={() => thumbnailClick(src)}
                    className="p-2"
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      },
                    }}
                  />
                ))}
              </div>
              <div
                key="portrait"
                className="h-full w-36 bg-amber-950 overflow-y-auto"
                variants={thumbnailsVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onWheel={(e) => e.stopPropagation()}
              >
                {portraitArt.map((src, index) => (
                  <motion.img
                    key={index}
                    src={src}
                    alt="thumbnail"
                    onClick={() => thumbnailClick(src)}
                    className="p-2"
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      },
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
      <div className="relative flex-1 flex items-center justify-center m-12 overflow-hidden">
        <motion.img
          key={currentImage}
          src={currentImage}
          className="max-w-full max-h-full object-contain z-10"
          initial={{ x: 100, opacity: 0.5 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", type: "spring" }}
        />
      </div>
    </div>
  );
}
