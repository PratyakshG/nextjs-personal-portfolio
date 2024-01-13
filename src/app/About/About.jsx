/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import "./about.scss";
import { animate, easeIn, motion } from "framer-motion";
import pic from "../assets/pratyaksh_b&w.jpg";
import Image from "next/image";

const variants = {
  initial_img: {
    opacity: 0,
    x: -100,
  },
  initial_text: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      easeIn,
      duration: 0.5,
    },
  },
};

const About = () => {
  return (
    <>
      <div className="about min-h-[100vh] w-[95vw] flex flex-col items-center justify-center p-5 pt-[10vh] md:pt-0 md:p-0 md:gap-20 relative m-auto">
        <div className="about_wrapper flex flex-col md:flex-row gap-5 md:gap-20">
          <motion.div
            variants={variants}
            initial="initial_img"
            whileInView="animate"
            // viewport={{
            //   once: "true",
            // }}
            className="profile_pic md:w-1/2 flex items-start md:justify-end"
          >
            <Image
              src={pic}
              alt="profile_pic"
            />
          </motion.div>

          <motion.div
            variants={variants}
            initial="initial_text"
            whileInView="animate"
            viewport={{
              once: "true",
            }}
            className="text_box md:w-1/2 gap-1 md:gap-3 flex flex-col"
          >
            <div className="about_heading">
              <span className="flex leading-none text-xl md:text-3xl">
                (About Me)
              </span>
            </div>
            <div className="about_text flex flex-col text-base xl:text-xl font-bold font-mono gap-5 md:gap-10">
              <span>
                Hi! I am a Frontend Developer and I like to code, all those
                visually appealing, creative ideas into reality, and sometimes
                develop websites that would get some work done. When I am away
                from the laptop, you can find me watching anime, playing video
                games or sometimes reading a book. The most prominent feature
                that I focus on, while building a website is the joy that it
                would bring to me and user of the website.
                <br />
                After all, at the end of the day, its night. ;)
              </span>

              <motion.button className="about_btn flex items-center justify-center w-fit p-1 lg:p-2 gap-1 cursor-pointer">
                <motion.a
                  onClick={() => {
                    const elem = document.getElementById("CONTACT");
                    elem.scrollIntoView();
                  }}
                  className="flex text-base lg:text-xl"
                >
                  Let's Talk
                </motion.a>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[30px] w-[30px]"
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
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
