"use client";

import { easeIn, motion } from "framer-motion";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma } from "react-icons/fa";
import {
  SiCplusplus,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaGitAlt, FaGithub } from "react-icons/fa6";

const variants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      easeIn,
    },
  }),
};

const hover = {
  backgroundColor: "#f0f0f0",
  color: "black",
  transition: {
    duration: 0.5,
  },
};

const Skills = () => {
  const logos = [
    <SiCplusplus key={""} />,
    <FaHtml5 key={""} />,
    <FaCss3Alt key={""} />,
    <FaJs key={""} />,
    <SiTypescript key={""} />,
    <FaReact key={""} />,
    <SiNextdotjs key={""} />,
    <FaGitAlt key={""} />,
    <FaGithub key={""} />,
    <SiTailwindcss key={""} />,
    <SiRedux key={""} />,
    <SiFirebase key={""} />,
    <SiFramer key={""} />,
    <SiExpress key={""} />,
    <FaFigma key={""} />,
  ];

  const skill = [
    "C/C++",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Nextjs",
    "Git",
    "Github",
    "Tailwind",
    "Redux",
    "Firebase",
    "Framer-Motion",
    "Express",
    "Figma",
  ];

  return (
    <motion.div className="skills p-5 md:p-10 w-full gap-5">
      {logos.map((item, index) => (
        <ul key={index}>
          <motion.li
            key={item}
            variants={variants}
            initial="initial"
            whileHover={hover}
            whileInView="animate"
            custom={index}
            viewport={{
              once: "true",
            }}
            className="flex items-center md:border-none border-gray-500 border-t border-b justify-center p-2 md:p-3 lg:p-4 gap-2 lg:gap-5"
          >
            {item}
            <span className="font-[poppins]">{skill[index]}</span>
          </motion.li>
        </ul>
      ))}
    </motion.div>
  );
};

export default Skills;
