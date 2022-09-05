import React, { useState, useEffect, useRef } from "react";
import serItems from "../../services/serItems";

import "./services.css";

const Services = () => {
  const modalRef = useRef();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const clickOutsideContent = (e) => {
      if (e.target === modalRef.current) {
        setShow(false);
      }
    };
    window.addEventListener("click", clickOutsideContent);
    return () => {
      window.removeEventListener("click", clickOutsideContent);
    };
  }, []);
  return (
    <section className="services section">
      <span className="section_subtitle">My Services</span>
      <h2 className="section_title">What I Offer</h2>
      <div className="services_container container grid">
        {serItems.map((item, index) => {
          return (
            <div className="services_card" key={index}>
              <h3 className="services_title">
                {item.title} <br />
                Designer
              </h3>
              <span className="services_button" onClick={() => setShow(true)}>
                See more <i className="bx bx-right-arrow-alt services_icon"></i>
              </span>

              <div
                ref={modalRef}
                className={`services_modal ${show ? "active-modal" : ""}`}
              >
                <div className="services_modal-content">
                  <i
                    className="bx bx-x services_modal-close"
                    onClick={() => setShow(false)}
                  ></i>
                  <h3 className="services_modal-title">
                    {item.title} Designer
                  </h3>
                  <p className="services_modal-description">
                    {item.description}
                  </p>

                  <ul className="services_modal-list">
                    {item.info.map((info, index) => {
                      return (
                        <li className="services_modal-item" key={index}>
                          <i className="bx bx-check services_modal-icon"></i>
                          <p className="services_modal-info">{info}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
