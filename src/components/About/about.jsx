import React from "react";
import { Link } from "react-scroll";
import aboutItems from "../../services/aboutItems";
import image from "../../assets/img/about.jpg";
import "./about.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <span className="section_subtitle">My Intro</span>
      <h2 className="section_title">About Me</h2>
      <div className="about_container container grid">
        <img src={image} alt="" className="about_img" />
        <div className="about_data">
          <div className="about_info">
            {aboutItems.map((about, i) => {
              return (
                <div className="about_box" key={i}>
                  {about.icon}
                  <h3 className="about_title">{about.title}</h3>
                  <span className="about_subtitle">{about.subs}</span>
                </div>
              );
            })}
          </div>
          <p className="about_description">
            Frontend developer, I create web pages with UI / UX user interface,
            I have years of experience and many clients are happy with the
            projects carried out.
          </p>
          <Link to="contact" className="button">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
