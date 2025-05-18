import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
  inView,
} from "framer-motion";
import useMeasure from "react-use-measure";

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

  const [showThumbnails, setShowThumbnails] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [currentImage, setCurrentImage] = useState("");

  const thumbnailClick = (image) => {
    setCurrentImage(image);
    setInitialLoad(false);
    setShowThumbnails(true);
  };
  const sidebarVariants = {
    open: {
      width: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
    closed: {
      width: "auto",
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    },
  };

  // Animation variants for thumbnails panel
  const thumbnailsVariants = {
    open: {
      opacity: 1,
      x: 0,
      width: "auto",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      opacity: 0,
      x: 100,
      width: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  // Button animation variants
  const buttonVariants = {
    open: { x: 0 },
    closed: { x: 0 },
  };

  let [ref, { width }] = useMeasure();
  let [landscapeRef, { width: landscapeWidth }] = useMeasure();

  const xTranslation = useMotionValue(0);
  const xTranslationLandscape = useMotionValue(1);

  useEffect(() => {
    let controls;
    let finalPosition = -landscapeWidth * landscapeArt.length;

    controls = animate(xTranslationLandscape, [finalPosition, 0], {
      ease: "linear",
      duration: 20,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslationLandscape, landscapeWidth]);

  useEffect(() => {
    let controls;
    let finalPosition = -width * portraitArt.length;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 10,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div className="flex flex-row-reverse h-screen w-screen overflow-x-hidden">
      <motion.div
        className="flex flex-row h-full"
        initial="open"
        animate={showThumbnails ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <motion.button
          variants={buttonVariants}
          onClick={() => setShowThumbnails(!showThumbnails)}
          className=" px-10 py-1 text-white z-10 rounded-none"
          style={{ borderRadius: 0 }}
        >
          {showThumbnails ? " <" : ">"}
        </motion.button>

        <motion.div
          variants={thumbnailsVariants}
          className="flex flex-row overflow-hidden"
        >
          <div
            className="h-full w-40 bg-[#EFBC72] overflow-y-auto"
            onWheel={(e) => e.stopPropagation()}
          >
            {landscapeArt.map((src, index) => (
              <motion.img
                key={`landscape-${index}`}
                src={src}
                alt="landscape thumbnail"
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
            className="h-full w-36 bg-[#394B84] overflow-y-auto overflow-x-hidden"
            onWheel={(e) => e.stopPropagation()}
          >
            {portraitArt.map((src, index) => (
              <motion.img
                key={`portrait-${index}`}
                src={src}
                alt="portrait thumbnail"
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
      </motion.div>

      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          {initialLoad ? (
            <div className="flex flex-col h-full gap-y-2 p-4">
              <div className="flex-grow w-full overflow-x-hidden flex flex-row overflow-hidden">
                <motion.div
                  key="initial"
                  className="flex flex-row"
                  style={{ x: xTranslation }}
                >
                  {[...portraitArt, ...portraitArt, ...portraitArt].map(
                    (src, index) => (
                      <motion.img
                        ref={ref}
                        key={`portrait-${index}`}
                        src={src}
                        alt="portrait thumbnail"
                        onClick={() => thumbnailClick(src)}
                        className="w-52 h-full px-2 object-cover"
                        custom={index}
                        exit="exit"
                        variants={{
                          exit: (i) => ({
                            scale: 0,
                            transition: {
                              delay: i * 0.05,
                              ease: "easeInOut",
                            },
                          }),
                        }}
                        whileHover={{
                          scale: 1.1,
                          transition: {
                            type: "spring",
                            stiffness: 200,
                            damping: 10,
                          },
                        }}
                      />
                    )
                  )}
                </motion.div>
              </div>
              <div
                className="w-full overflow-x-hidden flex flex-row overflow-hidden"
                exit={{ opacity: 0, duration: 5 }}
              >
                <motion.div
                  className="flex flex-row"
                  style={{ x: xTranslationLandscape }}
                >
                  {[...landscapeArt, ...landscapeArt, ...landscapeArt].map(
                    (src, index) => (
                      <motion.img
                        ref={landscapeRef}
                        key={`landscape-${index}`}
                        src={src}
                        custom={index}
                        exit="exit"
                        variants={{
                          exit: (i) => ({
                            opacity: 0,
                            scale: 0,
                            transition: { delay: i * 0.2 }, // stagger by 50ms per item
                          }),
                        }}
                        alt="landscape thumbnail"
                        onClick={() => thumbnailClick(src)}
                        className="px-3 h-100 object-cover"
                        whileHover={{
                          scale: 1.1,
                          transition: {
                            type: "spring",
                            stiffness: 200,
                            damping: 10,
                          },
                        }}
                      />
                    )
                  )}
                </motion.div>
              </div>
            </div>
          ) : (
            <motion.div
              key={currentImage}
              className="relative w-full h-full flex items-center justify-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeOut", type: "spring" }}
            >
              <img
                src={currentImage}
                className="absolute scale-110 object-contain blur-2xl -z-10"
                alt=""
              />
              <div
                className="absolute inset-0 z-0 bg-[url('/icon_bg.png')] opacity-50"
                style={{
                  backgroundRepeat: "repeat",
                  backgroundSize: "150px 150px",
                }}
              />
              <img
                src={currentImage}
                className="max-w-full max-h-full object-contain z-10 p-5"
                alt=""
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
