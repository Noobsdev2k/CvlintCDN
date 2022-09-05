import React, { useEffect, useState } from "react";
import navbarItems from "../../services/navbarItems";
import { Link } from "react-scroll";
import "./header.css";

const Header = ({ changeTheme, currentTheme }) => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link to="/" className="nav_logo">
          Ansel
        </Link>
        <div className="nav_menu">
          <ul className="nav_list">
            {navbarItems.map((nav, index) => {
              return (
                <li className="nav_item" key={index}>
                  <Link
                    activeClass="active-link"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={100}
                    to={nav.link}
                    className="nav_link"
                  >
                    <box-icon
                      name={nav.icon}
                      color="var(--text-color)"
                    ></box-icon>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <span onClick={changeTheme} className="color-mode">
          {currentTheme === "dark" ? (
            <box-icon name="sun" color="var(--first-color)"></box-icon>
          ) : (
            <box-icon name="moon"></box-icon>
          )}
        </span>
      </nav>
    </header>
  );
};

export default Header;
