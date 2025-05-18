import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedBox = ({ variant, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    fadeIn: { opacity: 1 },
    slideRight: { opacity: 1, x: 0 },
    slideLeft: { opacity: 1, x: 0 },
    slideUp: { opacity: 1, y: 0 },
  };

  const initial = {
    fadeIn: { opacity: 0 },
    slideRight: { opacity: 0, x: 50 },
    slideLeft: { opacity: 0, x: -50 },
    slideUp: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      ref={ref}
      initial={initial[variant]}
      animate={isInView ? variants[variant] : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-1 w-full h-full"
    >
      {children}
    </motion.div>
  );
};

const NoteBookBox = ({ children }) => {
  return (
    <div className="relative bg-white flex-1 rounded-2xl p-6 border-2 border-gray-300 shadow-sm overflow-hidden">
      {/* notebook lines */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(white,white_24px,#9ca3af_25px)] pointer-events-none rounded-2xl" />

      {/* notebook margin */}
      <div className="absolute top-0 left-4 bottom-0 w-0.5 bg-red-400 pointer-events-none" />

      {/* actual content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

const InfoPage = () => {
  return (
    // parent
    <div className="flex flex-col w-screen h-screen p-6">
      <motion.h1 style={{ fontFamily: "'Patrick Hand'" }}>
        Commission Details
      </motion.h1>
      <div className="flex flex-row flex-1 gap-4 py-2">
        {/* ordering, do and donts */}
        <div className="flex flex-col flex-1 gap-4 ">
          {/* ordering */}
          <AnimatedBox variant="slideLeft">
            <NoteBookBox>
              <div className="flex-1 rounded-2xl">
                <h3
                  className="text-4xl font-semibold mb-2"
                  style={{ fontFamily: "'Patrick Hand'" }}
                >
                  {" "}
                  Ordering{" "}
                </h3>
                <p style={{ fontFamily: "'Patrick Hand'", fontSize: 20 }}>
                  {" "}
                  Before ordering, please prepare the following: {"("}or not we
                  could also brainstorm{")"}{" "}
                </p>
                <ul
                  className="list-disc space-y-2 ml-5"
                  style={{ fontFamily: "'Patrick Hand'", fontSize: 20 }}
                >
                  <li>
                    Clear reference images (character sheet, pose, expression,
                    outfits, etc.)
                  </li>
                  <li>A short description of your request</li>
                  <li>Specify if it's for personal or commercial use</li>
                  <li>
                    Preferred contact method (Google Drive or email for
                    delivery) Contact me via Twitter DMs, Discord Or Vgen to
                    start your commission!
                  </li>
                </ul>
              </div>
            </NoteBookBox>
          </AnimatedBox>
          {/* do and donts */}
          <div className="flex flex-row flex-1 gap-4">
            <AnimatedBox variant={"slideUp"}>
              <NoteBookBox>
                <div className=" flex-1 rounded-2xl p-2">
                  <h3 className="text-3xl font-semibold mb-2">Will Draw </h3>
                  <ul
                    className="list-disc space-y-2 ml-5"
                    style={{ fontFamily: "'Patrick Hand'", fontSize: 20 }}
                  >
                    <li> Moe / Cute / Soft aesthetics</li>
                    <li>OC and Fanarts</li>
                    <li>Female characters</li>
                    <li>Kemonomimi (animal ears/tails)</li>
                  </ul>
                </div>
              </NoteBookBox>
            </AnimatedBox>
            <AnimatedBox variant={"slideUp"}>
              <NoteBookBox>
                <div className=" flex-1 rounded-2xl p-1">
                  <h3 className="text-3xl font-semibold mb-2">Won't Draw </h3>
                  <ul
                    className="list-disc space-y-2 ml-5"
                    style={{ fontFamily: "'Patrick Hand'", fontSize: 20 }}
                  >
                    <li>Real people / portraits</li>
                    <li>NSFW</li>
                    <li>Mecha</li>
                    <li>Furry characters</li>
                  </ul>
                </div>
              </NoteBookBox>
            </AnimatedBox>
          </div>
        </div>
        {/* TOS */}
        <div className="flex flex-row flex-1 gap-4">
          <AnimatedBox variant={"slideUp"}>
            <NoteBookBox>
              <div className="relative z-10">
                <h3 className="text-3xl font-semibold mb-4">
                  Terms of Service
                </h3>
                <ul
                  className="list-disc space-y-2 ml-5 text-gray-800"
                  style={{ fontFamily: "'Patrick Hand'", fontSize: 20 }}
                >
                  <li>All prices are in USD, paid via PayPal only.</li>
                  <li>Payment is due after sketch approval via invoice.</li>
                  <li>No refunds once payment has been made.</li>
                  <li>Prices are per character.</li>
                  <li>Complex designs may include additional charges.</li>
                  <li>
                    Commercial use costs an additional +50% of the final price.
                  </li>
                  <li>
                    No strict deadlines — turnaround is usually 1 to 2 weeks,
                    depending on complexity.
                  </li>
                  <li>
                    I offer 3 free minor revisions during the sketch phase.
                  </li>
                  <li>No changes can be made after final approval.</li>
                </ul>
              </div>
            </NoteBookBox>
          </AnimatedBox>
        </div>
        {/* Process */}
        <div className="flex flex-col flex-1 gap-4 min-h-0">
          <div className="flex-1 rounded-2xl">
            <AnimatedBox variant={"slideRight"}>
              <NoteBookBox>
                <h3 className="text-3xl font-semibold mb-2">Process </h3>
                <ul
                  className="list-disc space-y-2 ml-5"
                  style={{ fontFamily: "'Patrick Hand'", fontSize: 20 }}
                >
                  <li>Contact me via Twitter or Discord with your request.</li>
                  <li>
                    Share references and a description of your commission.
                  </li>
                  <li>I'll send a rough sketch for your approval.</li>
                  <li>
                    Once approved, I'll send a PayPal invoice. Full payment is
                    required at this stage.
                  </li>
                  <li>I'll render and finalize the artwork.</li>
                  <li>
                    Final files will be delivered as PNG and PSD, via Google
                    Drive or email.
                  </li>
                </ul>
              </NoteBookBox>
            </AnimatedBox>
          </div>
          <div className="w-full h-full flex justify-end items-center gap-2">
            <div className="flex flex-col  mt-2 gap-2">
              <div className="bg-white px-4 py-2 rounded-xl shadow-md text-sm max-w-xs self-start">
                <p>Feel free to ask further more on</p>
                <div className="flex items-center gap-2 mt-1 ">
                  <motion.img
                    whileTap={{ scale: 1.0 }}
                    whileHover={{
                      scale: 1.3,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      },
                    }}
                    src="https://cdn.simpleicons.org/discord"
                    alt="Discord Logo"
                    className="w-5"
                  />
                  <p>
                    username: <b>yozzun</b>
                  </p>
                </div>
              </div>
              <div className="bg-white px-4 py-2 rounded-xl shadow-md text-sm max-w-xs self-start">
                <p>Other contact info</p>
                <div className="flex items-center gap-2 mt-1">
                  <p>Vgen :</p>
                  <a href="https://vgen.co/yozzun">
                    <motion.img
                      whileTap={{ scale: 1.0 }}
                      whileHover={{
                        scale: 1.3,
                        transition: {
                          type: "spring",
                          stiffness: 200,
                          damping: 10,
                        },
                      }}
                      src="https://help.vgen.co/hc/article_attachments/13004231445911"
                      alt="Vgen Logo"
                      className="w-5"
                    />
                  </a>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <p>twitter :</p>
                  <a href="https://x.com/Cahyoz9">
                    <motion.img
                      whileTap={{ scale: 1.0 }}
                      whileHover={{
                        scale: 1.3,
                        transition: {
                          type: "spring",
                          stiffness: 200,
                          damping: 10,
                        },
                      }}
                      src="https://static.cdnlogo.com/logos/x/9/x.svg"
                      alt="X Logo"
                      className="w-5"
                    />
                  </a>
                </div>
              </div>
            </div>
            <img
              src="src\assets\image\owarida.jpg"
              alt="Commission sample"
              style={{
                height: "100%",
                width: "50%",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
