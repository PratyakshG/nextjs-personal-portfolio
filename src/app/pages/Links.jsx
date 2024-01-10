import { motion, easeIn } from "framer-motion";
import { Children } from "react";

// const variants = {
//   open: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
//   closed: {
//     transition: {
//       staggerChildren: 0.05,
//       staggerDirection: 1,
//     },
//   },
// };

const itemVariants = {
  initial: {
    opacity: 0,
    y: "-100%",
  },
  closed: (index) => ({
    opacity: 1,
    y: "0",
    transition: {
      // duration: 0.3,
      delay: 0.05 * index,
      easeIn,
    },
  }),
  exit: (index) => ({
    opacity: 0,
    y: "100%",
    transition: {
      delay: 0.05 * index,
      easeIn,
    },
  }),
};

const handleClick = (item) => {
  document.get;
};

const Links = ({ active, setActive, children }) => {
  const items = ["PROJECTS", "SKILLS", "ABOUT", "CONTACT"];

  return (
    <motion.div className="links flex gap-3 md:gap-8 items-baseline text-xs md:text-2xl font-[500] font-[Afacad]">
      {items.map((item, index) => (
        <motion.a
          key={index}
          variants={itemVariants}
          initial="initial"
          animate={active ? "closed" : "exit"}
          whileTap={{ scale: 0.95, opacity: 0.7 }}
          custom={index}
          className="link h-max flex flex-col"
          onClick={() => {
            const elem = document.querySelector(`#${item}`);
            elem.scrollIntoView();
          }}
        >
          {item}
        </motion.a>
      ))}
      {children}
    </motion.div>
  );
};

export default Links;
