import React from "react";
import { Link } from "react-scroll";
import avatar1 from "../../assets/img/avatar1.png";
import cv from "../../assets/pdf/cv.pdf";
import "./home.css";
const home = () => {
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_data">
          <span className="home_greeting">Hello, I'm</span>
          <h1 className="home_name">The Bigger</h1>
          <h3 className="home_education">Frontend Developer</h3>
          <div className="home_buttons">
            <a
              href={cv}
              target="_blank"
              download
              className="button btn-download"
            >
              Download PDF
            </a>
            <Link to="about" className="button">
              About
            </Link>
          </div>
        </div>
        <div className="home_handle">
          <img src={avatar1} alt="" className="home_img" />
        </div>
        <div className="home_social">
          <a
            href="https://www.linkedin.com/in/h%C6%B0ng-thanh-b390431b3/"
            target="_blank"
            className="home_social-link"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a
            href="https://github.com/Noobsdev2k"
            target="_blank"
            className="home_social-link"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a href="#" className="home_social-link" target="_blank">
            <i className="bx bxl-dribbble"></i>
          </a>
        </div>
        <Link to="about" className="home_scroll">
          <i className="bx bx-mouse home_scroll-icon"></i>
          <span className="home_scroll-name">Scroll Down</span>
        </Link>
      </div>
    </section>
  );
};

export default home;
