import { motion, easeIn } from "framer-motion";
import { Children, useState } from "react";

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

const Links = ({ active, setActive, children }) => {
  const items = ["PROJECTS", "SKILLS", "ABOUT", "CONTACT"];
  const screenWidth = screen.width;

  return (
    <motion.div
      className={`links flex flex-col md:flex-row ${
        active ? "w-full" : "w-fit"
      } gap-2 md:gap-4 lg:gap-8 items-baseline text-3xl md:text-lg font-[Afacad]`}
      variants={itemVariants}
      exit="exit"
    >
      {items.map((item, index) => (
        <ul key={item}>
          <li>
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

                //timeout function to make the div inactive according to the responsive design
                setTimeout(() => {
                  setActive(false);
                }, 300);
              }}
            >
              {item}
            </motion.a>
          </li>
        </ul>
      ))}
      {children}
    </motion.div>
  );
};

export default Links;
