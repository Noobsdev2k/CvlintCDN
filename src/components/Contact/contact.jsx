import React from "react";
import { Link } from "react-router-dom";
import contactItem from "../../services/contactItems";
import "./contact.css";
import ContactForm from "./contactForm";
const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <span className="section_subtitle">Get in touch</span>
      <h2 className="section_title">Contact Me</h2>
      <div className="contact_container container grid">
        <div className="contact__content">
          <h3 className="contact_title">Talk to me</h3>

          <div className="contact_info">
            {contactItem.map((item, index) => {
              return (
                <div className="contact_card" key={index}>
                  {item.icon}
                  <h3 className="contact_card-title">{item.title}</h3>
                  <span className="contact_card-data">{item.data}</span>
                  <Link
                    to={item.link}
                    target="_blank"
                    className="contact_button"
                  >
                    Write me{" "}
                    <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact_title">Talk to me</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
