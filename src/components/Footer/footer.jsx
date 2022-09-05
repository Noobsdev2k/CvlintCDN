import React from "react";
import { Link } from "react-scroll";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Ansel</h1>
        <ul className="footer_list">
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="footer_link"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to="work"
              className="footer_link"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="testimonial"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="footer_link"
            >
              Testimonial
            </Link>
          </li>
        </ul>
        <ul className="footer_social">
          <a
            href="https://github.com/Noobsdev2k"
            target="_blank"
            className="footer_social-link"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://github.com/Noobsdev2k"
            target="_blank"
            className="footer_social-link"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://github.com/Noobsdev2k"
            target="_blank"
            className="footer_social-link"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </ul>
        <span className="footer_copy">
          &#169; TheBigger. All rigths reser served
        </span>
      </div>
    </footer>
  );
};

export default Footer;
