import { motion, easeIn } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import React from "react";
import Link from "next/link";

{
  /* <FaExternalLinkAlt /> */
}

const contentVariants = {
  initial: {},
  animate: {},
};

const Layout = ({ title, desc, type, link }) => {
  return (
    <>
      <motion.div className="card flex h-[20vh] w-[85vw] md:p-3 items-center justify-center">
        {/* image section of the card */}

        <motion.div className="flex w-full relative items-center justify-between">
          {/* title of the project */}
          <motion.div className="content flex flex-col h-full w-full">
            <div className="title text-[10dvw] md:text-[6dvw] lg:text-[4dvw] leading-none font-[500] uppercase">
              {title}
            </div>
            <div className="desc hidden lg:block text-lg leading-none tracking-wider ml-8 uppercase">
              {desc}
            </div>
          </motion.div>

          {/* about the project */}
          <div className="desc_box flex flex-col h-full w-[50vh] gap-1 text-right justify-center text-xs md:text-base lg:text-xl md:mr-5">
            <div className="type font-normal">{type}</div>
            <div className="links flex w-full">
              <div className="visit flex w-full justify-end">
                <Link
                  href={link}
                  target="_blank"
                  className="flex items-center gap-1 text-gray-400 hover:text-white transition-all"
                >
                  Visit Page
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Layout;
