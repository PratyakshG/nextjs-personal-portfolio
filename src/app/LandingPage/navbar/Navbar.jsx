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
    <motion.div className="navbar flex m-auto w-[100vw] h-[12vh] top-0 items-center justify-center fixed">
      <motion.div className="nav_wrapper flex w-[95vw] m-auto font-[Afacad] items-baseline justify-between relative">
        <motion.a
          variants={itemVariants}
          initial="initial"
          animate="closed"
          onClick={() => {
            scrollTo(top);
          }}
          className="name w-fit text-base md:text-2xl font-[500]"
        >
          Pratyaksh Gupta
        </motion.a>

        {/* MENU BAR */}
        <motion.div className="menu flex lg:flex-col text-xs md:text-2xl font-[500] relative">
          {!active ? (
            <div className="btn flex flex-col">
              <motion.button
                className="btn flex flex-col"
                variants={itemVariants}
                initial="initial"
                animate={!active ? "closed" : "exit"}
                onClick={() => {
                  setActive(!active);
                  setTimeout(() => {
                    setActive(false);
                  }, 3000);
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
