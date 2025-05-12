import { motion } from "framer-motion";
import SvgIcon from "../assets/logoSvg";
import BackgroundHero from "./background_hero";

import { ButtonHover } from "./button";
const Hero = ({ scrollToSection }) => {
  return (
    <section className="relative flex items-center w-screen justify-star overflow-hidden min-h-screen">
      <div className="ml-40 text-left">
        <BackgroundHero />
        <motion.div className="h-80 aspect-[2/1] m-4">
          <SvgIcon />
        </motion.div>
        <div className="flex flex-row gap-6">
          <ButtonHover
            text="Gallery"
            // onClick={() => scrollToSection("carousel")}
          />
          <ButtonHover text="Commission" />
          <ButtonHover text="Click Me" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
