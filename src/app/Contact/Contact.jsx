"use client";

import { motion, easeIn } from "framer-motion";
import "./contact.scss";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";
import Link from "next/link";

const contactVariants = {
  initial: {
    scale: 0.8,
  },
  animate: {
    scale: 1,
    transition: {
      easeIn,
    },
  },
};

const socials = [
  {
    name: "Github",
    url: "https://github.com/PratyakshG",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/pratyaksh-gupta-753a15212",
  },
  {
    name: "Leetcode",
    url: "https://leetcode.com/pincodeazm/",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/_pratyakshgupta/",
  },
];

const Contact = () => {
  return (
    <>
      <motion.div
        variants={contactVariants}
        initial="initial"
        whileInView="animate"
        className="contact flex p-10 h-[90vh] w-[100dvw] md:w-full items-center justify-center pt-[5vh] md:mt-[10vh]"
      >
        <div className="contact_container h-[70dvh] md:h-[80dvh] w-[90vw] flex flex-col">
          <div className="contact_wrapper flex flex-col items-center justify-center">
            <div className="display_text flex flex-col items-center p-5 md:p-[10px] font-semibold text-[12vw] md:text-[10vw]">
              <span>Wish to</span>
              <span>work together?</span>
            </div>
            <div className="email_text flex flex-col items-center p-[10px]">
              <span className="text text-sm md:text-xl">Drop an email at</span>
              <span className="email text-xl md:text-3xl">
                <a href="mailto:pratyakshgupta1810@gmail.com">
                  pratyakshgupta1810@gmail.com
                </a>
              </span>
            </div>
          </div>

          {/* footer and links */}
          <div className="footer flex relative items-center justify-center">
            <div className="socials flex flex-col md:flex-row w-full md:gap-3 lg:p-5 justify-between items-baseline">
              <div className="location flex hover:scale-[1.1] cursor-pointer">
                <span className="flex items-baseline justify-center gap-1 lg:text-lg">
                  <FaLocationDot /> India
                </span>
              </div>

              <ul className="flex items-center gap-2 lg:gap-5">
                {socials.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center justify-center lg:text-lg md:border border-black md:px-2 md:py-1 lg:py-3 lg:px-5"
                  >
                    <Link href={item.url}>{item.name}</Link>
                  </li>
                ))}
              </ul>

              <div className="top lg:text-lg hidden w-fit md:flex hover:scale-[1.1] cursor-pointer">
                <span
                  onClick={() => scrollTo(top)}
                  className="flex items-baseline justify-center"
                >
                  Back to top <FaArrowUpLong className="animate-bounce" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
