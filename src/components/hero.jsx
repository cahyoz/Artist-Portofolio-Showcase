import { motion } from "framer-motion";
import SvgIcon from "../assets/logoSvg";
import BackgroundHero from "./background_hero";

import { ButtonHover } from "./button";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const patternBg = `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='scale(2) rotate(20)'><rect x='0' y='0' width='100%' height='100%' fill='%23ffffff00'/><path d='M3.25 10h13.5M10 3.25v13.5'  stroke-linecap='square' stroke-width='0.5' stroke='%232b2b2bff' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")`;

const Hero = ({}) => {
  return (
    <section
      style={{
        backgroundImage: patternBg,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
      className="relative flex items-center w-screen justify-star overflow-hidden min-h-screen z-10"
    >
      <div className="ml-40">
        <BackgroundHero />
        <div className="flex flex-col">
          <div className="flex flex-row items-end">
            <motion.div className="h-80">
              <SvgIcon />
            </motion.div>
            <p
              style={{ fontFamily: "'Patrick Hand'", fontSize: 30 }}
              className="align-bottom"
            >
              By Yozzun
            </p>
          </div>
          <p style={{ fontFamily: "'Patrick Hand'", fontSize: 30 }}></p>
          <div className="flex flex-row gap-6">
            <ButtonHover text="Gallery" onClick={() => scrollTo("gallery")} />
            <ButtonHover
              text="Commission"
              onClick={() => scrollTo("commission")}
            />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://youtube.com/@hikahikarinnn?si=BeDRcjZvrr79-dC_"
            >
              <ButtonHover text="Click Me" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
