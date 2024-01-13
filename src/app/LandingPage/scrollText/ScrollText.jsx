"use client";
import { animate, motion, easeIn } from "framer-motion";
import "./scrollText.scss";

const sliderVariants = {
  initial: {
    x: "-100%",
  },
  animate: {
    x: "0",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 3.5,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  upperText: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  lowerText: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.2,
    },
  },
};

const ScrollText = () => {
  return (
    <div className="scroll_wrapper flex relative w-full h-[70vh] md:h-[80vh] items-center justify-center font-[Afacad]">
      <motion.div className="slidingTextContainer flex flex-col w-[95vw] leading-none text-[15dvw] md:text-[11vw]">
        <motion.span
          variants={itemVariants}
          initial="initial"
          animate="upperText"
        >
          FRONTEND
        </motion.span>
        <motion.span
          variants={itemVariants}
          initial="initial"
          animate="lowerText"
          className="ml-[10vw] mt-[-1.3vw]"
        >
          DEVELOPER
        </motion.span>
      </motion.div>
    </div>
  );
};

export default ScrollText;
