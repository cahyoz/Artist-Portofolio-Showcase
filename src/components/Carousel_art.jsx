import { useState } from "react";
import { DiagonalBackground } from "./background_diagonal";
import { motion } from "framer-motion";

const thumbnailVariant = {
  hidden: ({ index }) => ({
    x: 200 + index * 100,
    opacity: 0.2,
  }),
  visible: ({ index, rowIndex }) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.6 - index / 10,
      delay: rowIndex * 0.2,
    },
  }),
};

const zeroRow = [
  "https://pbs.twimg.com/media/GTEorHlbkAEu37k?format=jpg&name=4096x4096",
  "https://pbs.twimg.com/media/GQzfWujaoAEvAFN?format=jpg&name=large",
  "https://pbs.twimg.com/media/GEhMq9JasAAYa_5?format=jpg&name=medium",
  "https://pbs.twimg.com/media/F508iw1aEAAZUtw?format=jpg&name=4096x4096",
];
const firstRow = [
  "https://pbs.twimg.com/media/FNNFv-BagAMlgj2?format=jpg&name=4096x4096",
  "https://pbs.twimg.com/media/FZdSfLmaIAAiinV?format=jpg&name=medium",
  "https://pbs.twimg.com/media/GLRtiMbaAAELuCo?format=jpg&name=4096x4096",
];
const secondRow = [
  "https://pbs.twimg.com/media/GE_2qskbsAAJcg8?format=jpg&name=4096x4096",
  "https://pbs.twimg.com/media/GAz7dM6bQAAGyym?format=jpg&name=4096x4096",
];
const ThirdRow = [
  "https://pbs.twimg.com/media/F5G-qwSawAAwPKr?format=jpg&name=4096x4096",
];

const rows = [zeroRow, firstRow, secondRow, ThirdRow];

const CarouselArt = () => {
  const [currentImage, setCurrentImage] = useState("");

  const thumbnailClick = (image) => {
    setCurrentImage(image);
  };
  return (
    <div className="w-screen h-screen flex items-center relative overflow-hidden">
      <motion.img
        key={currentImage}
        src={currentImage}
        alt=""
        className="absolute w-screen h-screen object-cover bg-blue-400 -z-20 blur-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <div className="absolute pl-10 max-w-[100vw] h-screen -z-10 rounded-xl">
        <motion.img
          key={currentImage}
          src={currentImage}
          alt=""
          className="w-full h-full object-contain"
          initial={{ x: 100, opacity: 0.5 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", type: "spring" }}
        />
      </div>
      <DiagonalBackground />
      <div className="flex flex-col gap-8 w-screen items-end pr-20 ">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-row gap-12">
            {row.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt="Thumbnail"
                className="w-24 h-18 object-cover object-top rounded-lg"
                onClick={() => thumbnailClick(src)}
                variants={thumbnailVariant}
                initial="hidden"
                animate="visible"
                custom={{ index, rowIndex }}
                whileHover={{
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 200, damping: 10 },
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselArt;
