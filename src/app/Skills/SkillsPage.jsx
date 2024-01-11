import React from "react";
import "./skillsPage.scss";
import Skills from "./Skills";

const SkillsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-[95vw] p-10 md:mt-20 gap-10">
      <div className="cards flex flex-col lg:h-[40vh] rounded-3xl lg:w-[70vw] items-center justify-center">
        <div className="skill_card flex lg:p-5 w-[80vw] relative">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
