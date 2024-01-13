"use client";
import Navbar from "./navbar/Navbar";
import ScrollText from "./scrollText/ScrollText";
import { useEffect, useState } from "react";
import "./landingPage.scss";

import { FaFileDownload } from "react-icons/fa";
import Link from "next/link";
import { motion, easeIn, delay } from "framer-motion";

var date = new Date();
// date.toLocaleTimeString();
// date.toUTCString();

function updateTime() {
  const time = new Date();
  const hours = time.getHours() == 12 ? 12 : time.getHours() % 12;
  var minutes = time.getMinutes();
  // const seconds = time.getSeconds();

  if (minutes < 10) minutes = "0" + minutes;

  return `${hours}:${minutes}`;
}

const LandingPage = () => {
  const [time, setTime] = useState(updateTime());

  useEffect(() => {
    setInterval(() => {
      setTime(updateTime());
    }, 1000);
  }, []);

  const itemVariants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        easeIn,
        staggerChildren: 0.5,
      },
    },
  };

  const hover = {
    scale: 1.02,
    // border: "1px solid white",
    color: "white",
  };

  const ampm = date.getHours() < 12 ? "AM" : "PM";

  return (
    <>
      <div className="landingPage flex flex-col h-[100vh] w-[100vw] items-center md:justify-between p-3 lg:p-0 gap-10">
        {/* Landing Page main section */}
        <ScrollText />

        {/* Footer Section */}
        <motion.div
          variants={itemVariants}
          initial="initial"
          animate="animate"
          className="footer md:m-auto w-full lg:w-[95vw] flex flex-col md:flex-row md:items-center font-normal text-sm lg:text-lg justify-between gap-5"
        >
          <motion.div className="date flex flex-col lg:flex-row lg:gap-5 w-1/2">
            <div className="year">{date.getFullYear()} ©</div>
            <div className="time">
              {time} {ampm}
            </div>
          </motion.div>

          <div className="flex md:w-2/3 justify-between items-baseline">
            <motion.button
              className="explore w-fit flex items-center justify-center lg:text-lg"
              whileHover={hover}
              transition={{
                duration: 0.3,
              }}
            >
              <motion.a
                onClick={() => {
                  const elem = document.getElementById("PROJECTS");
                  elem.scrollIntoView();
                }}
              >
                EXPLORE MY WORK
              </motion.a>
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="25"
                  cy="25"
                  r="25"
                />
                <path
                  className="path"
                  d="M27.5147 30.0824L30.1553 27.2767C30.2894 27.1394 30.472 27.0602 30.6639 27.0562C30.8558 27.0521 31.0416 27.1236 31.1814 27.2551C31.3211 27.3867 31.4036 27.5679 31.4112 27.7596C31.4187 27.9514 31.3507 28.1385 31.2217 28.2806L27.3154 32.4311C27.247 32.5038 27.1643 32.5617 27.0726 32.6013C26.9809 32.6409 26.8821 32.6614 26.7822 32.6614C26.6824 32.6614 26.5835 32.6409 26.4918 32.6013C26.4001 32.5617 26.3175 32.5038 26.249 32.4311L22.3428 28.2806C22.2748 28.211 22.2214 28.1286 22.1856 28.038C22.1499 27.9475 22.1325 27.8508 22.1345 27.7535C22.1366 27.6562 22.158 27.5603 22.1975 27.4714C22.2371 27.3825 22.2939 27.3023 22.3648 27.2356C22.4356 27.1689 22.5191 27.117 22.6102 27.0829C22.7013 27.0488 22.7984 27.0332 22.8956 27.0371C22.9928 27.0409 23.0883 27.0641 23.1765 27.1052C23.2647 27.1464 23.3438 27.2047 23.4092 27.2767L26.0498 30.0824V20.2102C26.0498 19.757 25.8698 19.3223 25.5493 19.0018C25.2288 18.6813 24.7941 18.5012 24.3408 18.5012H19.9463C19.752 18.5012 19.5657 18.4241 19.4284 18.2867C19.291 18.1494 19.2139 17.9631 19.2139 17.7688C19.2139 17.5746 19.291 17.3883 19.4284 17.2509C19.5657 17.1135 19.752 17.0364 19.9463 17.0364H24.3408C25.1826 17.0364 25.9899 17.3708 26.5851 17.966C27.1803 18.5612 27.5147 19.3685 27.5147 20.2102V30.0824Z"
                  fill="none"
                />
              </svg>
            </motion.button>

            <div className="resume flex flex-col">
              <div className="flex items-baseline gap-1 lg:gap-2">
                <Link
                  href={"./Pratyaksh_Gupta_Resume.pdf"}
                  download="Pratyaksh_Resume"
                  target="_blank"
                >
                  RESUME
                </Link>
                <FaFileDownload />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default LandingPage;
