import React from "react";
import "./skillsPage.scss";
import Skills from "./Skills";

const SkillsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] w-[95vw] gap-10">
      <div className="cards flex flex-col xl:h-[40vh] rounded-3xl lg:w-[70vw] items-center mt-[10vh] justify-center">
        <div className="skill_card flex lg:p-5 h-full w-full relative items-center">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
