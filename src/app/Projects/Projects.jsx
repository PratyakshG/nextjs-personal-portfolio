"use client";

import React, { useEffect, useState } from "react";
import "./projects.scss";
import Layout from "./projectLayout";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Sarvarath",
    type: "Mobile App",
    desc: "A prototype built to track the location of the electric bus provided by the government.",
    link: "https://www.figma.com/file/WcAHlQrAVUa1gj6cqq8i5T/Sarvarath?type=design&node-id=0%3A1&mode=design&t=4VshXUbpZK7frrHL-1",
  },
  {
    id: 2,
    title: "LessTexts",
    type: "Web App",
    desc: "An AI that converts lengthy articles into short summaries.",
    link: "https://lesstexts.netlify.app",
  },
  {
    id: 3,
    title: "Streo",
    type: "Web App",
    desc: "An online web platform to stream your favorite movies and tv shows.",
    link: "https://streo.vercel.app",
  },
  {
    id: 4,
    title: "Netflix-Clone",
    type: "Web App",
    desc: "A clone of the popular video streaming platform, NETFLIX.",
    link: "https://pratyaksh-netflix-clone.netlify.app",
  },
];

const variants = {
  initial: {
    // opacity: 0,
    y: -200,
  },
  animate: {
    // opacity: 1,
    y: 0,
  },
};

const Projects = () => {
  return (
    <>
      <div className="projects flex flex-col items-center md:items-start justify-center md:mt-[10vh] h-[90svh] w-[95vw]">
        {projects.map(({ title, type, desc, link }, index) => (
          <Layout
            key={index}
            title={title}
            type={type}
            desc={desc}
            link={link}
          ></Layout>
        ))}
        {}
      </div>
    </>
  );
};

export default Projects;
