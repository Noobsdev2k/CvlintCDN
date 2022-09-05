import "./work.css";
import workItems from "../../services/workItems";
import { Link } from "react-router-dom";
import React, { useState } from "react";
const Work = () => {
  const [items, setItems] = useState(workItems);
  const [toggle, setToggle] = useState(0);
  const filterItems = (title, index) => {
    const updatedItems = workItems.filter((c) => {
      return c.title === title;
    });
    setItems(updatedItems);
    setToggle(index);
  };
  const allItems = (index) => {
    setItems(workItems);
    setToggle(index);
  };
  return (
    <section className="work section" id="work">
      <span className="section_subtitle">My Portfolio</span>
      <h2 className="section_title">Recent Works</h2>
      <div className="work_filters">
        <span
          className={toggle === 0 ? "work_item active-work" : "work_item"}
          onClick={() => allItems(0)}
        >
          All
        </span>
        <span
          className={toggle === 1 ? "work_item active-work" : "work_item"}
          onClick={() => filterItems("Web design", 1)}
        >
          Web
        </span>
        <span
          className={toggle === 2 ? "work_item active-work" : "work_item"}
          onClick={() => filterItems("App movil", 2)}
        >
          Movil
        </span>
        <span
          className={toggle === 3 ? "work_item active-work" : "work_item"}
          onClick={() => filterItems("Brand design", 3)}
        >
          Design
        </span>
      </div>

      <div className="work_container container grid">
        {items.map((item, index) => {
          return (
            <div className="work_card" key={index}>
              <img src={item.img} alt="" className="work_img" />
              <h3 className="work_title">{item.title}</h3>
              <Link to="/work" className="work_button">
                Demo <i className="bx bx-right-arrow-alt work_icon"></i>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
