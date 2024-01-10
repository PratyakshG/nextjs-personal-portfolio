import { easeIn, motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

const Skills = () => {
  const skill = [
    "C/C++",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "ReactJS",
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
    <motion.div className="skills">
      {skill.map((item, index) => (
        <ul key={""}>
          <motion.li
            key={item}
            variants={variants}
            initial="initial"
            whileHover={{
              backgroundColor: "#0f0f0f",
              color: "white",
            }}
            whileInView="animate"
            custom={index}
            viewport={{
              once: "true",
            }}
          >
            {item}
          </motion.li>
        </ul>
      ))}
    </motion.div>
  );
};

export default Skills;
