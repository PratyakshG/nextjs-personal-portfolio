"use client";

import { useState } from "react";
import Links from "../../pages/Links";
import "./navbar.scss";
import { motion, easeIn } from "framer-motion";

const itemVariants = {
  initial: {
    opacity: 0,
    y: "-100%",
  },
  closed: {
    opacity: 1,
    y: "0",
    transition: {
      delay: 0.3,
      easeIn,
    },
  },
  exit: {
    opacity: 0,
    y: "100%",
    display: "none",
    transition: {
      duration: 0.5,
      easeIn,
    },
  },
};

const Navbar = () => {
  // state to check the status of menu
  const [active, setActive] = useState(false);

  return (
    <motion.div
      className={`navbar flex m-auto w-[100vw] ${
        active ? "h-full md:h-[10dvh]" : "h-[8vh] md:h-[10vh]"
      } top-0 items-center justify-center fixed`}
    >
      <motion.div
        className={`nav_wrapper ${
          active
            ? "h-full flex-col md:flex-row md:gap-0 gap-10 items-start md:items-center md:justify-between"
            : "items-center justify-between"
        } flex w-[95vw] m-auto font-[Afacad] relative`}
      >
        <motion.a
          variants={itemVariants}
          initial="initial"
          animate="closed"
          onClick={() => {
            scrollTo(top);
          }}
          className={`name ${
            active ? "w-full md:w-fit" : "w-fit"
          } h-[8vh] md:h-fit flex items-center text-base md:text-lg`}
        >
          Pratyaksh Gupta
        </motion.a>

        {/* MENU BAR */}
        <motion.div
          className={`menu flex ${
            active ? "w-full md:w-fit" : ""
          } lg:flex-col text-xs md:text-lg relative`}
        >
          {!active ? (
            <div className="btn flex flex-col">
              <motion.button
                className="btn flex flex-col"
                variants={itemVariants}
                initial="initial"
                animate={!active ? "closed" : "exit"}
                onClick={() => {
                  setActive(!active);
                }}
              >
                MENU
              </motion.button>
            </div>
          ) : (
            <Links
              active={active}
              setActive={setActive}
            >
              <motion.div>
                <motion.button
                  variants={itemVariants}
                  initial="initial"
                  animate={active ? "closed" : "exit"}
                  onClick={() => {
                    setActive(!active);
                  }}
                  className="btn"
                >
                  CLOSE
                </motion.button>
              </motion.div>
            </Links>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
