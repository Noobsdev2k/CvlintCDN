import React from "react";
import skillItems from "../../services/skillItems";

import "./skill.css";
const Skill = () => {
  return (
    <section className="skills section" id="skills">
      <span className="section_subtitle">My abilities</span>
      <h2 className="section_title">My Experience</h2>
      <div className="skills_container container grid">
        <div className="skills_content">
          <h3 className="skills_title">{skillItems.frontend.title}</h3>

          <div className="skills_box">
            <div className="skills_group">
              {skillItems.frontend.items.map((skills, index) => {
                return (
                  <div className="skills_data" key={index}>
                    <i className="bx bxs-badge-check"></i>
                    <div>
                      <h3 className="skills_name">{skills.name}</h3>
                      <span className="skills_level">{skills.level}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="skills_content">
          <h3 className="skills_title">{skillItems.backend.title}</h3>

          <div className="skills_box">
            <div className="skills_group">
              {skillItems.backend.items.map((skills, index) => {
                return (
                  <div className="skills_data" key={index}>
                    <i className="bx bxs-badge-check"></i>
                    <div>
                      <h3 className="skills_name">{skills.name}</h3>
                      <span className="skills_level">{skills.level}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
